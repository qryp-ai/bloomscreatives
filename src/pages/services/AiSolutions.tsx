import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BrainCircuit,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";
import BloomsLogo from "@/assets/BLOOMS CREATIVES LOGO PNG HIGH.png";
import QrypLogo from "@/assets/qryp-logo.png";
import FooterSection from "@/components/sections/footer-section";
import ServiceNextSteps from "@/components/services/ServiceNextSteps";

export default function AiSolutions() {
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
                                        alt="AI Solutions icon"
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 max-w-4xl">
                                <p className="text-sm uppercase tracking-[0.28em] text-[#8BED02]/70">Service spotlight</p>
                                <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-[#F5F7FA]">
                                    AI Solutions — Automation · Infrastructure · Insights
                                </h1>
                                <p className="mt-5 text-2xl md:text-3xl font-semibold text-[#8BED02]">
                                    AI-first systems that run your business — reliably and intelligently.
                                </p>
                                <p className="mt-6 text-[#F5F7FA]/80 text-lg md:text-xl">
                                    Automate routine work, host secure AI services, and unlock insights that drive decisions.
                                </p>
                                <p className="mt-4 text-[#F5F7FA]/70 text-base md:text-lg">
                                    AI Solutions is the core of Blooms Creatives. We design and deliver production-ready AI systems that integrate with your existing tools, automate business processes, and surface actionable insights. Our work spans from small automation wins (lead qualification bots, email workflows) to full AI platform builds (model hosting, pipelines, MLOps).
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">Business Process Automation</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Automate lead capture → qualification → routing (CRM integration).",
                                                    "Automate repetitive marketing tasks: scheduling, reporting, ad optimisation triggers.",
                                                    "Build event-driven workflows that reduce manual intervention and human error.",
                                                    "Document processing and data extraction from invoices, contracts, and forms.",
                                                    "Multi-channel communication workflows (email, SMS, Slack) with intelligent routing.",
                                                    "Automated compliance checks and audit trail generation for regulated industries."
                                                ].map((it, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                                        <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-0 left-0 h-full w-0.5 bg-[#8BED02]/20"></div>
                                        <div className="pl-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center font-display text-lg">
                                                    02
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">AI Infrastructure Setup</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Design secure, scalable AI hosting (Cloud Run / GKE / managed inference).",
                                                    "Dockerize models and set up CI/CD for model updates.",
                                                    "Configure logging, monitoring, rollbacks and cost-optimised runtimes.",
                                                    "Implement model versioning and A/B testing infrastructure for ML models.",
                                                    "Set up data lakes and warehouses with optimized query performance.",
                                                    "Deploy edge AI solutions for low-latency inference and offline capabilities."
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
                                                <h3 className="text-2xl font-bold text-[#F5F7FA]">AI Chatbots & Customer Experience</h3>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {[
                                                    "Build conversational assistants for sales, support and onboarding.",
                                                    "Integrate conversation history with CRM and helpdesk systems.",
                                                    "Provide fallback escalation, analytics, and human handoff workflows.",
                                                    "Multi-language support with real-time translation capabilities.",
                                                    "Voice-enabled assistants for phone systems and smart devices.",
                                                    "Sentiment analysis and emotional intelligence for personalized interactions."
                                                ].map((it, j) => (
                                                    <div key={j} className="flex items-start gap-3">
                                                        <CheckCircle className="mt-1 h-5 w-5 text-[#8BED02] shrink-0" />
                                                        <span className="text-[#F5F7FA]/85 leading-relaxed">{it}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ServiceNextSteps icon={BrainCircuit} />
                            </section>



                            <section>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-12">How we engage</h2>
                                <div className="relative">
                                    <div className="absolute top-0 left-6 h-full w-0.5 bg-[#8BED02]/20"></div>
                                    <div className="space-y-12">
                                        {
                                            [
                                                {
                                                    title: "Discovery & Audit",
                                                    text: "Map data sources, systems, and business KPIs. Stakeholder interviews and process mapping workshops. Technical infrastructure assessment and data flow analysis."
                                                },
                                                {
                                                    title: "Prototype",
                                                    text: "Rapid PoC automation or chatbot to validate value. 2-week sprint to build working prototype with sample data. User acceptance testing and feedback integration."
                                                },
                                                {
                                                    title: "Build & Integrate",
                                                    text: "Production-grade pipelines, APIs, and monitoring. Infrastructure as code deployment with Terraform/CloudFormation. CI/CD pipeline setup with automated testing and deployment."
                                                },
                                                {
                                                    title: "Train & Iterate",
                                                    text: "Refine models, add data sources, reduce drift. Model performance monitoring and drift detection. Continuous improvement cycles with A/B testing."
                                                },
                                                {
                                                    title: "Operate & Support",
                                                    text: "SLA-backed hosting, retraining cycles, and optimization sprints. 24/7 monitoring and incident response. Quarterly optimization reviews and performance tuning."
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
                                            ))
                                        }
                                    </div>
                                </div>
                            </section>



                            <section className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8BED02]/5 to-transparent rounded-3xl"></div>
                                <div className="relative p-12">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FA] mb-8">Why it works</h2>
                                    <div className="space-y-6 max-w-4xl">
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            AI tooling is powerful only when it's reliable and aligned to business workflows. We translate AI research into systems that actually reduce cost, increase throughput, and surface insights your team can act on — not just shiny demos.
                                        </p>
                                        <p className="text-[#F5F7FA]/85 text-xl leading-relaxed">
                                            In today's competitive landscape, businesses that leverage AI effectively see 30-40% improvements in operational efficiency and 2-3x better customer engagement rates. Our AI solutions help you:
                                        </p>
                                        <ul className="mt-8 space-y-4">
                                            {[
                                                "Reduce operational costs by automating repetitive tasks and eliminating manual errors",
                                                "Scale without proportional hiring by handling increased workload with intelligent systems",
                                                "Make data-driven decisions with real-time insights and predictive analytics",
                                                "Enhance customer experience through personalized interactions and instant responses",
                                                "Stay ahead of competitors by adopting cutting-edge AI capabilities before they become mainstream",
                                                "Ensure compliance and security with built-in governance and audit trails",
                                                "Future-proof your business with adaptable AI infrastructure that grows with your needs"
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
                                        Ready to make your business intelligent? Start with a free systems audit — we’ll map one 30-day automation that pays back within months.
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
                        </article >
                    </div >
                </div >
            </section >

            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8BED02]/8 via-transparent to-[#8BED02]/3 rounded-3xl"></div>
                <div className="relative p-8 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA] mb-4">Collaboration with Blooms Creative & Qryp.ai</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#8BED02] to-transparent mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-[#F5F7FA]/90 leading-relaxed text-lg mb-12">
                            Qryp.ai is the dedicated AI sub-brand of Blooms Creative — built to accelerate how businesses adopt automation, AI infrastructure, and real-time intelligence. Together, Blooms Creative and Qryp.ai operate as one integrated team: Blooms Creative leads strategy, creative engineering, and system architecture, while Qryp.ai delivers AI automation, model hosting, and intelligent pipelines. This collaboration ensures every project combines business understanding, creative clarity, and deep technical execution — resulting in AI systems that are powerful, scalable, and truly aligned with your operational goals.
                        </p>
                        <div className="w-full overflow-x-auto whitespace-nowrap pb-4">
                            <div className="flex items-center justify-center gap-3 sm:gap-6 xl:gap-8">
                                <div className="h-24 w-auto flex items-center sm:h-20 md:h-24 lg:h-28 xl:h-32">
                                    <img
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
                                    <img
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
            <FooterSection />
        </>
    );
}
