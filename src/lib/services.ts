
export type ServiceFrontmatter = {
  title?: string;
  description?: string;
};

export type ServiceDoc = {
  slug: string;
  file: string;
  frontmatter: ServiceFrontmatter;
  body: string;
  html: string;
  displayTitle: string;
};

// Vite glob import for markdown files
const serviceFiles = import.meta.glob('../../service_context/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

function listServiceFiles(): string[] {
  return Object.keys(serviceFiles).map(p => p.split('/').pop()!).sort();
}

export function filenameToSlug(filename: string): string {
  // 01_ai_solutions.md -> ai-solutions
  const base = filename.replace(/^\d+_/, '').replace(/\.md$/i, '');
  return base.replace(/_/g, '-');
}

function parseFrontmatter(raw: string): { frontmatter: ServiceFrontmatter; body: string } {
  const fmStart = raw.indexOf('---');
  if (fmStart !== 0) {
    return { frontmatter: {}, body: raw };
  }
  const fmEnd = raw.indexOf('\n---', 3);
  if (fmEnd === -1) {
    return { frontmatter: {}, body: raw };
  }
  const fmRaw = raw.slice(3, fmEnd).trim();
  const body = raw.slice(fmEnd + 4).trim();

  const fm: ServiceFrontmatter = {};
  for (const line of fmRaw.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (m) {
      const key = m[1].trim();
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith('\'') && val.endsWith('\''))) {
        val = val.slice(1, -1);
      }
      if (key === 'title') fm.title = val;
      else if (key === 'description') fm.description = val;
    }
  }
  return { frontmatter: fm, body };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderInline(md: string): string {
  // bold **text**
  return md
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export function markdownToHtml(md: string): string {
  const lines = md.split(/\r?\n/);
  const htmlParts: string[] = [];
  let inList = false;

  const flushList = () => {
    if (inList) {
      htmlParts.push('</ul>');
      inList = false;
    }
  };

  for (let rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flushList();
      htmlParts.push('<div class="mt-4"></div>');
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      htmlParts.push(`<h3 class="text-xl md:text-2xl font-bold text-[#F5F7FA] mt-8">${renderInline(escapeHtml(line.slice(4)))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      flushList();
      htmlParts.push(`<h2 class="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mt-10">${renderInline(escapeHtml(line.slice(3)))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      flushList();
      htmlParts.push(`<h1 class="text-3xl md:text-5xl font-black text-[#F5F7FA] mt-10">${renderInline(escapeHtml(line.slice(2)))}</h1>`);
      continue;
    }
    if (line.startsWith('- ')) {
      if (!inList) {
        inList = true;
        htmlParts.push('<ul class="list-disc pl-6 space-y-2 mt-4">');
      }
      htmlParts.push(`<li class="text-[#F5F7FA]/90">${renderInline(escapeHtml(line.slice(2)))}</li>`);
      continue;
    }

    // paragraph
    htmlParts.push(`<p class="text-[#F5F7FA]/85 leading-relaxed">${renderInline(escapeHtml(line))}</p>`);
  }
  flushList();
  return htmlParts.join('\n');
}

export function readServiceDocBySlug(slug: string): ServiceDoc | null {
  const files = Object.keys(serviceFiles);
  const matchPath = files.find((p) => filenameToSlug(p.split('/').pop()!) === slug);

  if (!matchPath) return null;

  const raw = serviceFiles[matchPath];
  const { frontmatter, body } = parseFrontmatter(raw);
  const filename = matchPath.split('/').pop()!;

  let displayTitle = frontmatter.title || '';
  const h1Match = body.match(/^#\s+(.+)$/m);
  if (h1Match) displayTitle = h1Match[1].trim();
  if (!displayTitle) displayTitle = slug.replace(/-/g, ' ');

  const html = markdownToHtml(body);
  return { slug, file: filename, frontmatter, body, html, displayTitle };
}

export function getAllServiceSlugs(): string[] {
  return listServiceFiles().map(filenameToSlug);
}

export function getAllServicesMeta(): { slug: string; title: string; description?: string }[] {
  return Object.entries(serviceFiles).map(([path, raw]) => {
    const { frontmatter, body } = parseFrontmatter(raw);
    let title = frontmatter.title || '';
    const h1Match = body.match(/^#\s+(.+)$/m);
    if (h1Match) title = h1Match[1].trim();
    return { slug: filenameToSlug(path.split('/').pop()!), title, description: frontmatter.description };
  });
}

export type ServiceStructured = {
  hero?: { headline?: string; subhead?: string };
  overview?: string[];
  collaboration?: string[];
  coreAreas?: Array<{ title: string; items: string[] }>;
  process?: Array<{ title?: string; text: string }>;
  deliverables?: string[];
  audience?: string[];
  whyItMatters?: string[];
  cta?: string;
};

function stripMdInline(s: string): string {
  return s
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .trim();
}

export function parseServiceContent(md: string): ServiceStructured {
  const out: ServiceStructured = { hero: {}, overview: [], collaboration: [], coreAreas: [], process: [], deliverables: [], audience: [], whyItMatters: [] };
  const lines = md.split(/\r?\n/);
  let section: string | null = null;
  let currentArea: { title: string; items: string[] } | null = null;

  const setSection = (name: string) => {
    const key = name.toLowerCase();
    if (key.includes('hero')) section = 'hero';
    else if (key.includes('overview')) section = 'overview';
    else if (key.includes('collaboration')) section = 'collaboration';
    else if (key.includes('what we offer') || key.includes('core areas') || key.includes('core subservices')) section = 'coreAreas';
    else if (key.includes('process')) section = 'process';
    else if (key.includes('deliverables')) section = 'deliverables';
    else if (key.includes("who it's for") || key.includes('who it\'s for') || key.includes('who it is for')) section = 'audience';
    else if (key.includes('why') && key.includes('matter')) section = 'whyItMatters';
    else if (key.includes('cta')) section = 'cta';
    else section = null;
  };

  for (let raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    if (line.trim() === '---') {
      section = null;
      currentArea = null;
      continue;
    }

    if (line.startsWith('## ')) {
      // New top-level section
      setSection(line.slice(3));
      currentArea = null;
      continue;
    }

    if (section === 'coreAreas' && line.startsWith('### ')) {
      // New subservice area
      let title = line.slice(4).trim();
      title = title.replace(/^\d+\.\s*/, '');
      currentArea = { title: stripMdInline(title), items: [] };
      out.coreAreas!.push(currentArea);
      continue;
    }

    // Parse content per section
    if (section === 'hero') {
      const m1 = line.match(/^\*\*Headline:\*\*\s*(.+)$/);
      const m2 = line.match(/^\*\*Subhead:\*\*\s*(.+)$/);
      if (m1) out.hero!.headline = stripMdInline(m1[1]);
      else if (m2) out.hero!.subhead = stripMdInline(m2[1]);
      continue;
    }

    if (section === 'overview') {
      out.overview!.push(stripMdInline(line));
      continue;
    }

    if (section === 'collaboration') {
      out.collaboration!.push(stripMdInline(line));
      continue;
    }

    if (section === 'coreAreas') {
      if (line.startsWith('- ') && currentArea) {
        currentArea.items.push(stripMdInline(line.slice(2)));
      }
      continue;
    }

    if (section === 'process') {
      // e.g., 1. **Discovery & Audit** — text
      const rx = /^\d+\.\s+(?:\*\*(.+?)\*\*\s+—\s+)?(.+)$/;
      const m = line.match(rx);
      if (m) {
        const title = m[1] ? stripMdInline(m[1]) : undefined;
        const text = stripMdInline(m[2]);
        out.process!.push({ title, text });
      } else {
        out.process!.push({ text: stripMdInline(line) });
      }
      continue;
    }

    if (section === 'deliverables') {
      if (line.startsWith('- ')) out.deliverables!.push(stripMdInline(line.slice(2)));
      else out.deliverables!.push(stripMdInline(line));
      continue;
    }

    if (section === 'audience') {
      if (line.startsWith('- ')) out.audience!.push(stripMdInline(line.slice(2)));
      else out.audience!.push(stripMdInline(line));
      continue;
    }

    if (section === 'whyItMatters') {
      out.whyItMatters!.push(stripMdInline(line));
      continue;
    }

    if (section === 'cta') {
      out.cta = stripMdInline(line);
      continue;
    }
  }

  // Clean empty arrays
  if (!out.overview?.length) delete out.overview;
  if (!out.collaboration?.length) delete out.collaboration;
  if (!out.coreAreas?.length) delete out.coreAreas;
  if (!out.process?.length) delete out.process;
  if (!out.deliverables?.length) delete out.deliverables;
  if (!out.audience?.length) delete out.audience;
  if (!out.whyItMatters?.length) delete out.whyItMatters;
  if (!out.hero?.headline && !out.hero?.subhead) delete out.hero;
  return out;
}
