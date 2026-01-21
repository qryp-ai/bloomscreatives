import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";

import FooterSection from "@/components/sections/footer-section";
import ServiceNextSteps from "@/components/services/ServiceNextSteps";

export default function BrandingStrategy() {
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
                                    <img
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cb23974af19787cae7a6_icon-compass2-9.svg"
                                        alt="Branding & Strategy icon"
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 max-w-4xl">
                                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                                    Branding & Strategy
                                </h1>
                                <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                                    Brands that mean something — strategically built.
                                </p>
                                <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                                    We marry research and creative craft to build brands that attract the right customers.
                                </p>
                                <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                                    Branding at Blooms Creatives is a strategic discipline. We combine market research, positioning, and story architecture to ensure your brand isn’t just visually appealing, but also commercially effective.
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Market Positioning & Research</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Customer persona and jobs-to-be-done mapping.",
                                                    "Competitive landscape and value proposition clarity.",
                                                    "Market opportunity analysis and sizing studies.",
                                                    "Brand perception audits and sentiment analysis.",
                                                    "Industry trend identification and positioning opportunities.",
                                                    "Target audience segmentation and behavioral insights."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Brand Voice & Messaging Framework</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Tone of voice, messaging pillars, and copy guidelines.",
                                                    "Tagline, elevator pitch, and long‑form messaging examples.",
                                                    "Brand story architecture and narrative development.",
                                                    "Content strategy and editorial calendar planning.",
                                                    "Customer journey messaging and touchpoint mapping.",
                                                    "Crisis communication protocols and response frameworks."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Brand Guidelines & Collateral</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Visual rules, logo usage, and accessibility guidelines.",
                                                    "Sales decks, pitch templates, and sales enablement assets.",
                                                    "Digital brand guidelines and social media templates.",
                                                    "Print collateral design and production specifications.",
                                                    "Environmental design and office branding guidelines.",
                                                    "Packaging design and product branding systems."
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

                                <ServiceNextSteps icon={Sparkles} />
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                                <div className="relative">
                                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                                    <div className="space-y-12">
                                        {[
                                            {
                                                title: "Discovery Workshops",
                                                text: "Executive leadership interviews and vision alignment. Cross-functional team workshops and brainstorming sessions. Brand heritage analysis and core value identification."
                                            },
                                            {
                                                title: "Research Sprints",
                                                text: "Primary research through customer interviews and focus groups. Secondary research through industry reports and trend analysis. Competitive audit and positioning landscape mapping."
                                            },
                                            {
                                                title: "Strategy Output",
                                                text: "Brand positioning statement development and refinement. Value proposition articulation and differentiation framework. Brand architecture and portfolio strategy design."
                                            },
                                            {
                                                title: "Creative Execution",
                                                text: "Visual identity system development and refinement. Brand guideline creation and asset production. Digital and physical touchpoint design application."
                                            },
                                            {
                                                title: "Launch & Monitor",
                                                text: "Go-to-market strategy and launch planning. Internal and external communication campaigns. Brand performance tracking and measurement setup."
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
                                            A well‑crafted brand reduces friction and speeds purchasing decisions. With clear strategic anchors, all marketing efforts amplify rather than fight each other.
                                        </p>
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            In today's crowded marketplace, strong brands command 20-50% price premiums and enjoy 3x higher customer loyalty. Our strategic branding approach delivers:
                                        </p>
                                        <ul className="mt-8 space-y-4">
                                            {[
                                                "Competitive differentiation that creates sustainable market advantage",
                                                "Customer loyalty and advocacy through emotional connection and trust",
                                                "Marketing efficiency with consistent messaging across all touchpoints",
                                                "Premium pricing power through perceived value and brand equity",
                                                "Talent attraction and retention with strong employer branding",
                                                "Business growth acceleration through clear value proposition",
                                                "Crisis resilience with established brand trust and goodwill"
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
                                        Need a stronger brand? Get a positioning session — we’ll draft a one-page strategy you can validate with customers.
                                    </p>
                                    <a
                                        href="#contact"
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
