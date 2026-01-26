import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PenTool,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";

import FooterSection from "@/components/sections/footer-section";
import ServiceNextSteps from "@/components/services/ServiceNextSteps";

export default function Designing() {
    const navigate = useNavigate();

    const handleBackClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById('services');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

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
                        <a
                            href="/#services"
                            onClick={handleBackClick}
                            className="inline-flex items-center gap-2 text-[#8BED02] hover:text-[#8BED02]/80 transition-colors text-sm font-semibold uppercase tracking-[0.2em] group w-fit cursor-pointer"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to services
                        </a>

                        <div className="flex flex-col md:flex-row items-start gap-10">
                            <div className="shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-[#8BED02]/40 bg-[#8BED02]/10 flex items-center justify-center p-4">
                                    <PenTool className="h-12 w-12 text-[#8BED02]" />
                                </div>
                            </div>

                            <div className="flex-1 max-w-4xl">
                                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                                    Designing — Visual Systems & Product Design
                                </h1>
                                <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                                    Design that communicates, converts, and scales.
                                </p>
                                <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                                    From strategic identity systems to product UI, we design visuals that work across web, social and the real world.
                                </p>
                                <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                                    Designing at Blooms Creatives spans strategic brand systems and hands-on production: logos and guidelines, packaging, motion, and product UI. Our design practice centers user empathy, consistency and measurable outcomes.
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="mt-16 space-y-20">
                        <article className="space-y-20">


                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">Core capabilities</h2>
                                <div className="space-y-16">
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 h-full w-0.5 bg-[#8BED02]/20"></div>
                                        <div className="pl-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center font-display text-lg">
                                                    01
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Brand Identity & Visual Design</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Logo systems, color palettes, typography, and usage rules.",
                                                    "Identity applications: business cards, signage, stationery.",
                                                    "Brand architecture and sub-brand systems.",
                                                    "Visual hierarchy and composition guidelines.",
                                                    "Iconography and illustration style development.",
                                                    "Photography and imagery direction guidelines."
                                                ].map((it, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                                        <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8BED02]/70">+ more capabilities available</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-0 left-0 h-full w-0.5 bg-[#8BED02]/20"></div>
                                        <div className="pl-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center font-display text-lg">
                                                    02
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">UI/UX & Product Design</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Wireframes, prototypes, and high‑fidelity UI ready for dev.",
                                                    "Design systems with tokens and Tailwind-compatible styles.",
                                                    "User research and persona development.",
                                                    "Information architecture and user flow design.",
                                                    "Interaction design and micro-animations.",
                                                    "Accessibility compliance and inclusive design."
                                                ].map((it, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                                        <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8BED02]/70">+ more capabilities available</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-0 left-0 h-full w-0.5 bg-[#8BED02]/20"></div>
                                        <div className="pl-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center font-display text-lg">
                                                    03
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Packaging & Print Design</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Structural and visual packaging design with dielines.",
                                                    "Mockups and artwork ready for print and e‑commerce listings.",
                                                    "Product labeling and regulatory compliance design.",
                                                    "Point-of-sale displays and retail packaging systems.",
                                                    "Environmental graphics and signage design.",
                                                    "Print collateral and marketing material design."
                                                ].map((it, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                                        <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#8BED02]/70">+ more capabilities available</p>
                                        </div>
                                    </div>
                                </div>


                                <ServiceNextSteps icon={PenTool} />
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                                <div className="relative">
                                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                                    <div className="space-y-12">
                                        {[
                                            {
                                                title: "Research & Moodboards",
                                                text: "Deep dive into brand objectives and target audience analysis. Competitive landscape analysis and visual audit. User research and empathy mapping."
                                            },
                                            {
                                                title: "Concepting",
                                                text: "Creative concept development and visual exploration. Multiple design directions and style variations. Stakeholder feedback and collaborative refinement."
                                            },
                                            {
                                                title: "Systemize",
                                                text: "Design system architecture and component creation. Style guide development and documentation. Asset organization and file structure setup."
                                            },
                                            {
                                                title: "Deliver",
                                                text: "Final asset production and optimization. Developer handoff and technical documentation. Implementation support and design QA."
                                            },
                                            {
                                                title: "Support",
                                                text: "Design system maintenance and updates. New asset creation and brand evolution. Performance monitoring and optimization."
                                            }
                                        ].map((step, i) => (
                                            <div key={i} className="relative flex items-start gap-6">
                                                <div className="h-12 w-12 rounded-2xl bg-[#8BED02]/20 border border-[#8BED02]/40 text-[#8BED02] flex items-center justify-center font-display text-lg shrink-0 z-10">
                                                    {(i + 1).toString().padStart(2, "0")}
                                                </div>
                                                <div className="flex-1 pt-2">
                                                    <h4 className="text-xl font-semibold text-[#F5F7FA] mb-3">{step.title}</h4>
                                                    <p className="text-[#F5F7FA]/80 leading-relaxed text-lg">{step.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>



                            <section className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8BED02]/5 to-transparent rounded-3xl"></div>
                                <div className="relative p-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-8">Why it works</h2>
                                    <div className="space-y-6 max-w-4xl">
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            Great design is the language between your brand and customers. It's not decoration — it's the interface of trust. We design to reduce friction and increase recall.
                                        </p>
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            Research shows that consistent brand presentation across all platforms increases revenue by up to 23%, while 94% of first impressions are design-related. Our strategic design approach delivers:
                                        </p>
                                        <ul className="mt-8 space-y-4">
                                            {[
                                                "Brand recognition and memorability through distinctive visual identity",
                                                "User trust and credibility with professional, polished design",
                                                "Conversion optimization through intuitive user experience design",
                                                "Brand consistency across all touchpoints and platforms",
                                                "Competitive differentiation through unique visual positioning",
                                                "User engagement and retention through thoughtful experience design",
                                                "Scalable growth with flexible design systems and components"
                                            ].map((point, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <CheckCircle className="mt-1 h-6 w-6 text-[#8BED02] shrink-0" />
                                                    <span className="text-[#F5F7FA]/85 leading-relaxed text-lg">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="text-center py-16">
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-[#F5F7FA] text-xl font-medium mb-8">
                                        Want a brand that performs? Book a design audit — we’ll show three immediate improvements you can ship next week.
                                    </p>
                                    <a
                                        href="https://wa.me/918086523566"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-[#8BED02] text-[#01112B] font-semibold px-8 py-4 text-lg hover:opacity-90 transition"
                                    >
                                        Book free call
                                    </a>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
