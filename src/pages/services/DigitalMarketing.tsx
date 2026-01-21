import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Signal,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";

import FooterSection from "@/components/sections/footer-section";
import ServiceNextSteps from "@/components/services/ServiceNextSteps";

export default function DigitalMarketing() {
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
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3ca3c87cecd2b40e61d1f_icon-plan-8.svg"
                                        alt="Digital Marketing icon"
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 max-w-4xl">
                                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                                    Digital Marketing
                                </h1>
                                <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                                    We don’t just market — we engineer growth.
                                </p>
                                <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                                    Creative campaigns backed by measurement, optimisation and automation.
                                </p>
                                <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                                    Our Digital Marketing practice combines creative content, paid media, performance optimisation, analytics, and SEO. We aim for measurable outcomes: leads, revenue, retention, and long-term visibility.
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Content Strategy & Marketing</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Editorial calendars, pillar content, and repurposing plans.",
                                                    "Content optimized for SEO and social distribution.",
                                                    "Multi-format content creation (blogs, videos, infographics, podcasts).",
                                                    "Content distribution across owned, earned, and paid channels.",
                                                    "Thought leadership positioning and industry authority building.",
                                                    "Content performance tracking and optimization frameworks."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Search Engine Optimisation (SEO)</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Full technical SEO audits (speed, structure, indexing).",
                                                    "Keyword & intent mapping for landing pages and blogs.",
                                                    "On-page optimisation and internal linking frameworks.",
                                                    "High-quality backlink strategy and authority building.",
                                                    "Local SEO setups for map rankings and local search intent.",
                                                    "Monthly visibility, traffic and ranking performance reports."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Performance Marketing</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Paid search, social and programmatic campaigns.",
                                                    "Conversion tracking, ROAS optimization and attribution modeling.",
                                                    "Display advertising and retargeting strategies.",
                                                    "Shopping feed optimization and product listing ads.",
                                                    "Video advertising on YouTube and connected TV platforms.",
                                                    "Lookalike audience creation and expansion campaigns."
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

                                <ServiceNextSteps icon={Signal} />
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                                <div className="relative">
                                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                                    <div className="space-y-12">
                                        {[
                                            {
                                                title: "Audit & Hypothesis",
                                                text: "Deep dive into existing analytics and performance data. Competitive landscape analysis and gap identification. Technical SEO audit and site health assessment."
                                            },
                                            {
                                                title: "Strategy Roadmap",
                                                text: "Channel prioritization based on business objectives. Budget allocation and resource planning. Content calendar and campaign timeline development."
                                            },
                                            {
                                                title: "Creative Production",
                                                text: "Creative brief development and asset production. Landing page design and conversion optimization. Ad copy creation and A/B test variants."
                                            },
                                            {
                                                title: "Launch & Optimize",
                                                text: "Campaign launch coordination and monitoring. Real-time performance tracking and optimization. A/B testing and statistical significance analysis."
                                            },
                                            {
                                                title: "Scale & Automate",
                                                text: "Marketing automation implementation and optimization. Reporting dashboard setup and executive briefings. Process documentation and team training."
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
                                            Marketing without measurement is guesswork. We combine creativity, analytics, and search visibility to ensure every campaign compounds value over time.
                                        </p>
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            In today's digital landscape, businesses that implement integrated marketing strategies see 3-5x higher ROI and 2x better customer retention rates. Our comprehensive approach helps you:
                                        </p>
                                        <ul className="mt-8 space-y-4">
                                            {[
                                                "Maximize marketing ROI through data-driven optimization and attribution modeling",
                                                "Build sustainable growth with organic search presence and brand authority",
                                                "Create competitive advantage through superior customer experience and personalization",
                                                "Scale efficiently with automated workflows and repeatable processes",
                                                "Make informed decisions with real-time analytics and predictive insights",
                                                "Adapt to market changes with agile testing and rapid iteration capabilities",
                                                "Achieve long-term success with customer lifetime value optimization and retention strategies"
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
                                        Ready to scale? Share your growth goals and we’ll propose a testable 90-day plan.
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
