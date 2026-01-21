"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cloud1Y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage:
            'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")',
        }}
      />
      <motion.div style={{ y: mapY }} className="absolute inset-0 z-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg"
          alt="Topographic map background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <motion.div
        style={{ y: cloud1Y }}
        className="absolute top-[8%] left-[5%] w-[150px] h-[100px] z-[1] opacity-60 pointer-events-none md:w-[200px] md:h-[133px]"
      >
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679c9e45861427f70627651f_cloud01-5.svg"
          alt="Cloud decoration"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        style={{ y: cloud2Y }}
        className="absolute bottom-[12%] right-[8%] w-[200px] h-[130px] z-[1] opacity-60 pointer-events-none md:w-[250px] md:h-[162px]"
      >
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679ca21e660dfa9e9b186312_cloud02-6.svg"
          alt="Cloud decoration"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </motion.div>

      <div className="container relative z-10 py-[120px] lg:py-[200px]">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-12">
          <h2 className="font-display text-[80px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-black uppercase leading-none text-[#D0C7C0]">
            <span className="inline-block">We believe</span>{" "}
            <span className="inline-block">in the power</span>{" "}
            <span className="inline-block">of</span>{" "}
            <span className="inline-block">strong ideas</span>
          </h2>

          <div className="w-[180px] h-[180px] bg-accent rounded-full flex items-center justify-center shrink-0">
            <Compass className="text-accent-foreground" size={80} strokeWidth={1.5} />
          </div>

          <p className="text-[22px] md:text-[24px] lg:text-[26px] leading-[1.6] max-w-[900px] font-light text-[#D0C7C0]">
            <span>
              Developing innovative creative concepts and smart strategies,
              constantly experimenting and improving — that&apos;s where our
              strength lies on the path to results.
            </span>{" "}
            <span className="font-medium">
              We believe in the impact of strong concepts that truly touch
              people.
            </span>{" "}
            <span>
              Not fleeting ads, but campaigns that connect with the real lives
              of real people — people who are busy, easily distracted, and only
              pay attention to what truly interests them. People with their own
              motivations to choose something — or not. That&apos;s why we seek
              deep, strategic collaborations focused on sustainable, long-term
              growth.
            </span>
          </p>

          <div>
            <Link
              to="#contact"
              className="inline-block bg-accent text-accent-foreground rounded-full px-8 py-4 text-button font-semibold uppercase tracking-wider"
            >
              Don't wait any longer — contact us!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
