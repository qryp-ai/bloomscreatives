import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Monitor,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";

import FooterSection from "@/components/sections/footer-section";
import ServiceNextSteps from "@/components/services/ServiceNextSteps";

export default function WebSolutions() {
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
                                        alt="Web Solutions icon"
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 max-w-4xl">
                                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                                    Web Solutions
                                </h1>
                                <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                                    Your website — a high‑performance business channel.
                                </p>
                                <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                                    We build conversion-first websites and e‑commerce stores with modern architecture and secure operations.
                                </p>
                                <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                                    Web Solutions includes design, development, integrations and hosting. We align UX with business goals and operational needs, ensuring maintainability and growth readiness.
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Website Design & Development</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Custom React/Vite or Next.js implementations.",
                                                    "Accessibility and SEO-first templates.",
                                                    "Responsive design and mobile-first development.",
                                                    "Progressive Web App (PWA) implementation.",
                                                    "Component-based architecture and design systems.",
                                                    "Performance optimization and Core Web Vitals compliance."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">E‑commerce Platforms</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Shopify, BigCommerce, headless commerce & payment integrations.",
                                                    "Subscription flows, checkout optimization and upsells.",
                                                    "Custom shopping cart and checkout experiences.",
                                                    "Product catalog management and inventory systems.",
                                                    "Payment gateway integration and security compliance.",
                                                    "Order management and fulfillment workflows."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Landing Pages & Funnels</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "High-converting landing pages for campaigns and ads.",
                                                    "A/B testing and analytics wiring.",
                                                    "Lead generation forms and CRM integration.",
                                                    "Conversion rate optimization and heat mapping.",
                                                    "Multi-step funnels and user journey mapping.",
                                                    "Dynamic content personalization and segmentation."
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

                                <ServiceNextSteps icon={Monitor} />
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                                <div className="relative">
                                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                                    <div className="space-y-12">
                                        {[
                                            {
                                                title: "Discovery & Scope",
                                                text: "Business objectives and success criteria definition. Technical requirements and technology stack selection. User research and audience analysis."
                                            },
                                            {
                                                title: "Design & Prototype",
                                                text: "Information architecture and user flow design. Wireframing and low-fidelity prototype creation. Visual design and brand integration."
                                            },
                                            {
                                                title: "Build & QA",
                                                text: "Agile development sprints and milestone tracking. Code review and quality assurance processes. Performance optimization and load testing."
                                            },
                                            {
                                                title: "Launch & Handover",
                                                text: "Production deployment and domain configuration. SSL certificate setup and security hardening. Analytics integration and monitoring setup."
                                            },
                                            {
                                                title: "Ongoing Maintenance",
                                                text: "Regular updates and security patching. Performance monitoring and optimization. Backup management and disaster recovery."
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
                                            Your website often acts as your top salesperson. We craft experiences that lower friction, increase trust, and maximize revenue per visitor.
                                        </p>
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            In today's digital-first world, 88% of consumers won't return to a website after a bad experience, while well-designed sites see up to 200% higher conversion rates. Our comprehensive web solutions deliver:
                                        </p>
                                        <ul className="mt-8 space-y-4">
                                            {[
                                                "First impression excellence with professional, trustworthy design",
                                                "Conversion optimization through user-centered design and testing",
                                                "Scalable growth with robust architecture and performance optimization",
                                                "Competitive advantage through superior user experience and functionality",
                                                "Brand consistency across all digital touchpoints and interactions",
                                                "Data-driven insights through comprehensive analytics and tracking",
                                                "Security and compliance protecting your business and customer data"
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
                                        Need a website that sells? Share your brief and we’ll map the perfect solution.
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
