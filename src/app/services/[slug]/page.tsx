import { readServiceDocBySlug, getAllServiceSlugs, parseServiceContent } from "@/lib/services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BrainCircuit,
  PenTool,
  Sparkles,
  Film,
  Signal,
  Share2,
  Users,
  MonitorSmartphone,
  TrendingUp,
  LucideIcon,
  Circle,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import BloomsLogo from "@/assets/BLOOMS CREATIVES LOGO PNG HIGH.png";
import QrypLogo from "@/assets/qryp-logo.png";
import FooterSection from "@/components/sections/footer-section";

const serviceIconMap: Record<string, LucideIcon> = {
  "ai-solutions": BrainCircuit,
  designing: PenTool,
  "branding-strategy": Sparkles,
  "content-production": Film,
  "digital-marketing": Signal,
  "social-media-marketing": Share2,
  "influencer-marketing": Users,
  "web-solutions": MonitorSmartphone,
  "managed-growth": TrendingUp,
};

const heroGraphicMap: Record<string, string | undefined> = {
  "branding-strategy": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cb23974af19787cae7a6_icon-compass2-9.svg",
  "digital-marketing": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3ca3c87cecd2b40e61d1f_icon-plan-8.svg",
  "social-media-marketing": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3d12b17839048da3d8c4c_icon-merge2-10.svg",
  "influencer-marketing": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c35719a6b4fa2ce47ee9_icon-binoc-14.svg",
  "content-production": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cf3bf7882ee771324879_icon-draft-11.svg",
  "web-solutions": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c8aa6af16f02a7d6e6ae_icon-cook-12.svg",
  "ai-solutions": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3ca3c87cecd2b40e61d1f_icon-plan-8.svg",
  "managed-growth": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c43a211df2e37b7f257c_icon-mountains-13.svg",
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = readServiceDocBySlug(params.slug);
  if (!doc) return {};
  return {
    title: doc.frontmatter.title || doc.displayTitle,
    description: doc.frontmatter.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const doc = readServiceDocBySlug(params.slug);
  if (!doc) return notFound();
  const s = parseServiceContent(doc.body);
  const Icon = serviceIconMap[doc.slug] ?? Circle;
  const heroGraphic = heroGraphicMap[doc.slug];
  const primarySummaryBase = s.overview?.[0] || doc.frontmatter.description || undefined;
  const heroTagline = s.hero?.subhead || undefined;
  const heroDescription = primarySummaryBase && primarySummaryBase !== heroTagline ? primarySummaryBase : undefined;
  const heroSupporting = s.overview && s.overview.length > 1 ? s.overview[1] : undefined;

  return (
    <>
      <section 
      className="relative bg-[#01112B] text-foreground overflow-hidden py-24 md:py-32"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')`,
        backgroundPosition: '0px 0px',
        backgroundSize: 'auto',
      }}
    >
      {/* Low-opacity topo lines overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.06,
          backgroundImage:
            `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      />

        <div className="relative container mx-auto px-6 md:px-20 z-10">
          <header className="flex flex-col gap-10">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[#8BED02] hover:text-[#8BED02]/80 transition-colors text-sm font-semibold uppercase tracking-[0.2em] group w-fit"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to services
            </Link>

            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-[#8BED02]/40 bg-[#8BED02]/10 flex items-center justify-center p-4">
                  {heroGraphic ? (
                    <Image
                      src={heroGraphic}
                      alt={`${doc.displayTitle} icon`}
                      width={96}
                      height={96}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Icon className="h-12 w-12 text-[#8BED02]" />
                  )}
                </div>
              </div>

              <div className="flex-1 max-w-4xl">
                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                  {s.hero?.headline || doc.displayTitle}
                </h1>
                {heroTagline && (
                  <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                    {heroTagline}
                  </p>
                )}
                {heroDescription && (
                  <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                    {heroDescription}
                  </p>
                )}
                {heroSupporting && (
                  <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                    {heroSupporting}
                  </p>
                )}
              </div>
            </div>
          </header>

          <div className="mt-16 space-y-20">
            <article className="space-y-20">
              {s.overview && (
                <section className="border-l-4 border-[#8BED02] pl-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-6">In a snapshot</h2>
                  <div className="space-y-4">
                    {s.overview.slice(0, 2).map((p, i) => (
                      <p key={i} className="text-[#F5F7FA]/85 text-lg leading-relaxed max-w-4xl">{p}</p>
                    ))}
                  </div>
                </section>
              )}

              {s.coreAreas && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">Core capabilities</h2>
                  <div className="space-y-16">
                    {s.coreAreas.map((area, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-[#8BED02]/20"></div>
                        <div className="pl-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center font-display text-lg">
                              {(idx + 1).toString().padStart(2, "0")}
                            </div>
                            <h3 className="text-2xl font-bold text-[#F5F7FA]">{area.title}</h3>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {area.items.slice(0, 6).map((it, j) => (
                              <div key={j} className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                              </div>
                            ))}
                          </div>
                          {area.items.length > 6 && (
                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8BED02]/70">+ more capabilities available</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-16 p-8 bg-gradient-to-r from-[#8BED02]/5 to-transparent border-l-4 border-[#8BED02]">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-3 text-sm text-[#F5F7FA]/80 max-w-2xl">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8BED02]">Next steps</h3>
                        <p className="text-base">Want to explore how this service applies to your business?</p>
                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center rounded-full bg-[#8BED02] text-[#01112B] font-semibold px-5 py-3 hover:opacity-90 transition"
                        >
                          Book free call
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {s.process && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                  <div className="relative">
                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                    <div className="space-y-12">
                      {s.process.slice(0, 5).map((step, i) => (
                        <div key={i} className="relative flex items-start gap-6">
                          <div className="h-12 w-12 rounded-2xl bg-[#8BED02]/20 border border-[#8BED02]/40 text-[#8BED02] flex items-center justify-center font-display text-lg shrink-0 z-10">
                            {(i + 1).toString().padStart(2, "0")}
                          </div>
                          <div className="flex-1 pt-2">
                            {step.title && <h4 className="text-xl font-semibold text-[#F5F7FA] mb-3">{step.title}</h4>}
                            <p className="text-[#F5F7FA]/80 leading-relaxed text-lg">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {s.deliverables && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">What you walk away with</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {s.deliverables.slice(0, 9).map((d, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-[#8BED02]/20 flex items-center justify-center shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5 text-[#8BED02]" />
                        </div>
                        <p className="text-[#F5F7FA]/85 leading-relaxed">{d}</p>
                      </div>
                    ))}
                  </div>
                  {s.deliverables.length > 9 && (
                    <p className="mt-8 text-xs uppercase tracking-[0.24em] text-[#8BED02]/70">Additional deliverables tailored to your specific needs</p>
                  )}
                </section>
              )}

              
              {s.whyItMatters && (
                <section className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8BED02]/5 to-transparent rounded-3xl"></div>
                  <div className="relative p-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-8">Why it works</h2>
                    <div className="space-y-6 max-w-4xl">
                      {s.whyItMatters.slice(0, 2).map((w, i) => (
                        <p key={i} className="text-[#F5F7FA]/85 text-xl leading-relaxed">{w}</p>
                      ))}
                      {s.whyItMatters.length > 2 && (
                        <ul className="mt-8 space-y-4">
                          {s.whyItMatters.slice(2).map((point, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <CheckCircle className="mt-1 h-6 w-6 text-[#8BED02] shrink-0" />
                              <span className="text-[#F5F7FA]/85 leading-relaxed text-lg">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </section>
              )}

              {s.cta && (
                <section className="text-center py-16">
                  <div className="max-w-3xl mx-auto">
                    <p className="text-[#F5F7FA] text-xl font-medium mb-8">{s.cta}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-[#8BED02] text-[#01112B] font-semibold px-8 py-4 text-lg hover:opacity-90 transition"
                    >
                      Book free call
                    </a>
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </section>

      {s.collaboration && (
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8BED02]/8 via-transparent to-[#8BED02]/3 rounded-3xl"></div>
          <div className="relative p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA] mb-4">Collaboration with Blooms Creative & Qryp.ai</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8BED02] to-transparent mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-[#F5F7FA]/90 leading-relaxed text-lg mb-12">
                {s.collaboration.join(' ')}
              </p>
              <div className="w-full overflow-x-auto whitespace-nowrap pb-4">
                <div className="flex items-center justify-center gap-3 sm:gap-6 xl:gap-8">
                  <div className="h-24 w-auto flex items-center sm:h-20 md:h-24 lg:h-28 xl:h-32">
                    <Image
                      src={BloomsLogo}
                      alt="Blooms Creative logo"
                      className="h-full w-auto object-contain"
                      width={128}
                      height={128}
                    />
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-20 w-20 text-red-500 sm:h-16 md:h-20 lg:h-24 xl:h-28 sm:w-16 md:w-20 lg:w-24 xl:w-28"
                  >
                    <path
                      d="M5 5l14 14M19 5L5 19"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="h-24 w-auto flex items-center sm:h-20 md:h-24 lg:h-28 xl:h-32">
                    <Image
                      src={QrypLogo}
                      alt="Qryp.ai logo"
                      className="h-full w-auto object-contain"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <FooterSection />
    </>
  );
}
