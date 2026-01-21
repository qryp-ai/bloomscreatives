"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AiSolutions from "@/assets/service_card/AI Solutions.jpg";
import DesigningImg from "@/assets/service_card/design.png";
import BrandingStrategy from "@/assets/service_card/Branding & Strategy.jpg";
import ContentProduction from "@/assets/service_card/Content & Production.jpg";
import DigitalMarketing from "@/assets/service_card/Digital Marketing.jpg";
import SocialMediaMarketing from "@/assets/service_card/Social Media Marketing.jpg";
import InfluencerMarketing from "@/assets/service_card/Influencer Marketing.jpg";
import WebSolutions from "@/assets/service_card/Web Solutions.jpg";
import ManagedGrowth from "@/assets/service_card/Managed Growth & Support.jpg";

const items = [
  {
    title: "AI Solutions",
    kicker: "Automation • Infrastructure • Insights",
    desc:
      "Operational AI that automates workflows, scales reliably, and turns data into decisions.",
  },
  {
    title: "Designing",
    kicker: "Product • Visual • Experience",
    desc:
      "Design systems and visuals that are clear, consistent, and crafted for conversion.",
  },
  {
    title: "Branding & Strategy",
    kicker: "Positioning • Narrative • Architecture",
    desc:
      "Define who you are, why you matter, and how you win across channels and moments.",
  },
  {
    title: "Content & Production",
    kicker: "Video • Photo • Copy",
    desc:
      "From scripts to shoots to edits—content that engages and performs across platforms.",
  },
  {
    title: "Digital Marketing",
    kicker: "Search • Performance • CRO",
    desc:
      "Full-funnel campaigns engineered to capture demand and compound growth.",
  },
  {
    title: "Social Media Marketing",
    kicker: "Strategy • Community • Campaigns",
    desc:
      "Always-on social that builds communities and tells your story where people live.",
  },
  {
    title: "Influencer Marketing",
    kicker: "Creators • Partnerships • Advocacy",
    desc:
      "Real creators, real reach—credibility that travels faster than ads.",
  },
  {
    title: "Web Solutions",
    kicker: "Sites • Stores • Systems",
    desc:
      "High-performance web experiences designed for speed, scale, and SEO.",
  },
  {
    title: "Managed Growth & Support",
    kicker: "Retainers • Roadmaps • SLAs",
    desc:
      "A flexible partnership for ongoing strategy, execution, and measurable outcomes.",
  },
];

const imageMap: Record<string, any> = {
  "AI Solutions": AiSolutions,
  "Designing": DesigningImg,
  "Branding & Strategy": BrandingStrategy,
  "Content & Production": ContentProduction,
  "Digital Marketing": DigitalMarketing,
  "Social Media Marketing": SocialMediaMarketing,
  "Influencer Marketing": InfluencerMarketing,
  "Web Solutions": WebSolutions,
  "Managed Growth & Support": ManagedGrowth,
};

// Map card titles to slugs derived from service_context filenames
const slugMap: Record<string, string> = {
  "AI Solutions": "ai-solutions",
  "Designing": "designing",
  "Branding & Strategy": "branding-strategy",
  "Content & Production": "content-production",
  "Digital Marketing": "digital-marketing",
  "Social Media Marketing": "social-media-marketing",
  "Influencer Marketing": "influencer-marketing",
  "Web Solutions": "web-solutions",
  "Managed Growth & Support": "managed-growth",
};

export default function ServicesGridSection() {
  return (
    <section id="services" className="relative bg-[#01112B] text-foreground overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative container mx-auto px-6 md:px-20 z-10">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-[#F5F7FA]">
            Every service your business needs — unified under one intelligent system.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {items.map((item, idx) => {
            const imageOnTop = idx % 2 === 1; // alternate layout: 2nd, 4th, ... cards with image on top
            const hasImage = Boolean(imageMap[item.title]);
            const slug = slugMap[item.title] || item.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            const imageEl =
              hasImage && (
                <div
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden ${imageOnTop ? "mb-4" : "mt-4"
                    }`}
                >
                  <img
                    src={imageMap[item.title]}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );

            return (
              <Link key={item.title} to={`/services/${slug}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 overflow-hidden"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {imageOnTop && imageEl}

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-xs tracking-wider uppercase text-[#8BED02]/90 mb-2">
                            {item.kicker}
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F7FA] group-hover:text-[#8BED02] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <div className="mt-1 h-9 w-9 rounded-full bg-[#8BED02] text-[#01112B] flex items-center justify-center shrink-0 rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="mt-2 text-[#F5F7FA]/80 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>

                    {!imageOnTop && imageEl}
                  </div>

                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none accent-glow" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
