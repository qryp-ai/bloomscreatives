"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { X, Send } from "lucide-react";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m Blooms.ai. Ask me anything about our services, process, or how we can help your brand grow.",
    },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages.length]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // Direct client-side call to Gemini API
      // WARNING: This exposes the API key to the client.
      // Ensure VITE_GEMINI_API_KEY is set in your .env file.
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error("Missing VITE_GEMINI_API_KEY");
      }

      const systemPrompt = `
You are Blooms.ai — the AI assistant for Blooms Creative, a marketing and creative agency based in Amersfoort, Netherlands.

Brand voice
- Clear, concise, friendly, and confident.
- Practical, no fluff. Prefer short paragraphs and bullet points.
- Default to English.

What we do (services)
- AI Solutions (Automation • Infrastructure • Insights): Operational AI that automates workflows, scales reliably, and turns data into decisions.
- Designing (Product • Visual • Experience): Design systems and visuals that are clear, consistent, and crafted for conversion.
- Branding & Strategy (Positioning • Narrative • Architecture): Define who the brand is, why it matters, and how it wins across channels and moments.
- Content & Production (Video • Photo • Copy): From scripts to shoots to edits — content that engages and performs across platforms.
- Digital Marketing (Search • Performance • CRO): Full-funnel campaigns engineered to capture demand and compound growth.
- Social Media Marketing (Strategy • Community • Campaigns): Always-on social that builds communities and tells the story where people live.
- Influencer Marketing (Creators • Partnerships • Advocacy): Real creators, real reach — credibility that travels faster than ads.
- Web Solutions (Sites • Stores • Systems): High-performance web experiences designed for speed, scale, and SEO.
- Managed Growth & Support (Retainers • Roadmaps • SLAs): A flexible partnership for ongoing strategy, execution, and measurable outcomes.

How we work (process)
1) Explore — Deep dive into market, customer, brand, obstacles, and goals to reach the core.
2) Strategy — Co-create direction: positioning, messaging, and the roadmap.
3) Concept & Creation — Turn strategy into campaignable ideas with purpose.
4) Content & Design — Build consistent identity and channel-fit content.
5) Production & Realization — Produce efficiently in-house or with partners.
6) Optimization & Growth — Measure, learn, iterate, and scale what works.

Contact and location
- Email: hi@bloomscreative.agency
- Phone: (000) 000-0000
- Location: Calicut, Kerala, India
- Preferred contact channels: WhatsApp, Discord, phone, or email. Do not mention whether any links are visible or provided.

Answering guidelines
- Always try to be specific to marketing/creative questions about our services and process.
- Pricing policy: Do not provide exact prices or price ranges in chat. When asked about price, first ask clarifying details (goal, scope, deliverables, timeline, budget, audience, channels, existing assets), then direct the user to contact us via WhatsApp, Discord, phone, or email for a tailored quote. Do not mention whether any links are visible or provided.
- Never invent confidential or unknown company data. If unsure, say so and suggest contacting us.
- For proposals, onboarding, or quotes, guide the user to share details and propose a short intro call.
- If a request is out of scope (e.g., legal/medical), politely decline and redirect.

Structure
- Use concise bullets or numbered steps when helpful.
- End with a clear next step or CTA (email or contact form) for qualified leads.
- Formatting: Use lightweight Markdown. Prefer bold section labels such as **Your goals:**, **What we propose:**, **Recommended channels:**, **Next steps:**. Use short bullet lists ("-" or "*") under each when appropriate. Keep paragraphs short.

Context reminder
- Slogan reference: “We don’t just make brands intelligent — we make them perform.”
- Slogan reference: “We don’t just make brands visible — we make them intelligent.”
- Tagline: “Where creativity meets performance.”
`;

      const contents = [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...nextMessages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      ];

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: { temperature: 0.4, topP: 0.95, maxOutputTokens: 512 },
          }),
        }
      );

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts
          ?.map((p: any) => p?.text)
          .filter(Boolean)
          .join("\n") || "Sorry, I couldn’t generate a response.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hmm, something went wrong. Please check your API key configuration." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Minimal Markdown renderer for bold and lists
  const mdToHtml = (md: string): string => {
    const escapeHtml = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let s = escapeHtml(md);
    // Bold **text**
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    const lines = s.split(/\r?\n/);
    const out: string[] = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*[\*-]\s+/.test(line)) {
        out.push("<ul>");
        while (i < lines.length && /^\s*[\*-]\s+/.test(lines[i])) {
          out.push(`<li>${lines[i].replace(/^\s*[\*-]\s+/, "")}</li>`);
          i++;
        }
        out.push("</ul>");
        continue;
      }
      if (/^\s*\d+[\.)]\s+/.test(line)) {
        out.push("<ol>");
        while (i < lines.length && /^\s*\d+[\.)]\s+/.test(lines[i])) {
          out.push(`<li>${lines[i].replace(/^\s*\d+[\.)]\s+/, "")}</li>`);
          i++;
        }
        out.push("</ol>");
        continue;
      }
      if (line.trim() === "") {
        i++;
        continue;
      }
      out.push(`<p>${line}</p>`);
      i++;
    }
    return out.join("\n");
  };

  return (
    <>
      {/* Launcher button (replaces right-side W.) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-[40%] right-0 z-[9998] hidden md:flex p-0 hover:opacity-90 transition-opacity"
        aria-label="Open Blooms.ai chat"
      >
        <span
          className="block bg-[#8BED02] text-[#01112B] rounded-l-md rounded-r-none shadow-md w-10 h-44 flex flex-col items-center justify-between"
        >
          <span className="mt-2 font-display font-extrabold text-2xl leading-none">BC</span>
          <span
            className="text-[16px] font-display font-bold tracking-[0.15em]"
            style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
          >
            Got Questions?
          </span>
          <span className="mb-2" />
        </span>
      </button>

      {/* Mobile launcher bottom-right */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-0 z-[9998] md:hidden p-0 hover:opacity-90 transition-opacity"
        aria-label="Open Blooms.ai chat"
      >
        <span
          className="block bg-[#8BED02] text-[#01112B] rounded-l-md rounded-r-none shadow-md w-8 h-36 flex flex-col items-center justify-between"
        >
          <span className="mt-2 font-display font-extrabold text-xl leading-none">BC</span>
          <span
            className="text-[12px] font-display font-bold tracking-[0.1em]"
            style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
          >
            Got Questions?
          </span>
          <span className="mb-2" />
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-end justify-end bg-black/40"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:w-[520px] max-w-[96vw] h-[78vh] sm:h-[70vh] bg-[#0B1428] text-white rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none overflow-hidden flex flex-col border border-white/10 sm:border-r-0 ring-1 ring-[#8BED02]/20 shadow-2xl shadow-[0_0_24px_2px_rgba(139,237,2,0.12)]"
          >
            {/* Background: topographic lines */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage:
                  'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.07,
                mixBlendMode: 'screen',
              }}
            />
            {/* Background: subtle grain */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage:
                  'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")',
                backgroundRepeat: 'repeat',
                opacity: 0.04,
              }}
            />
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-4 sm:px-5 py-3 bg-[linear-gradient(90deg,#0F1C36_0%,#0F1C36_65%,#14274e_100%)] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="font-display font-bold text-[#8BED02] text-3xl">BC</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display font-semibold tracking-wide text-[15px] md:text-[18px] lg:text-[20px] uppercase text-[#D2C9C2]">BLOOMS.AI</h3>
                    <span className="hidden sm:inline-flex text-[11px] text-white/60">powered by Qryp.ai</span>
                  </div>
                  <p className="sm:hidden text-[11px] text-white/60">powered by Qryp.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/918086523566"
                  aria-label="Open WhatsApp"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-[#25D366] hover:bg-white/10 border border-white/10 transition-colors"
                  title="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-7 h-7" />
                </a>
                <a
                  href="https://discord.gg/wzqpFKPf"
                  aria-label="Open Discord"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-[#5865F2] hover:bg-white/10 border border-white/10 transition-colors"
                  title="Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="w-7 h-7" />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8BED02]/60 to-transparent" />
            </div>

            {/* Messages */}
            <div className="relative z-10 chat-scroll flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`${m.role === "user"
                      ? "bg-[#1F2B4A] text-white"
                      : "bg-white/10 text-white"
                      } max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed`}
                  >
                    <div
                      className="msg-body"
                      dangerouslySetInnerHTML={{ __html: mdToHtml(m.content) }}
                    />
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white/80 max-w-[70%] rounded-2xl px-4 py-2.5 text-sm">
                    Thinking…
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="relative z-10 p-3 sm:p-4 bg-[#0F1C36] border-t border-white/10">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full pl-4 pr-1.5 py-1.5 gap-1.5 focus-within:ring-2 focus-within:ring-[#8BED02]/50">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about our services, pricing, timelines…"
                  className="flex-1 bg-transparent text-white placeholder-white/60 text-sm outline-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  aria-label="Send message"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#8BED02] text-[#01112B] disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-95 shadow shadow-[0_0_8px_rgba(139,237,2,0.25)]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .chat-scroll {
          scrollbar-color: #0B1428 transparent; /* Firefox */
          scrollbar-width: thin;
        }
        .chat-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: #0B1428; /* Match popup background */
          border: 2px solid #0F1C36; /* Subtle outline to keep it discoverable */
          border-radius: 9999px;
        }
        .chat-scroll::-webkit-scrollbar-button {
          background: #0B1428; /* Match popup background */
          border: 2px solid #0F1C36;
          border-radius: 9999px;
        }
        .chat-scroll::-webkit-scrollbar-corner {
          background: #0B1428; /* Match popup background */
        }
        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: #0F1C36;
        }
        .msg-body ul {
          list-style: disc;
          margin: 0.25rem 0 0.25rem 1rem;
          padding-left: 0.25rem;
        }
        .msg-body ol {
          list-style: decimal;
          margin: 0.25rem 0 0.25rem 1rem;
          padding-left: 0.25rem;
        }
        .msg-body p {
          margin: 0.25rem 0;
        }
        .msg-body strong {
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
