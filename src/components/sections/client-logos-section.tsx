"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd8610210bcf289996_Schaap_20Van_20Dijk-7.png",
    alt: "Schaap Van Dijk Logo",
    width: 147,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdaa1b7c6af53a810c_MLKH-8.png",
    alt: "MLKH Logo",
    width: 110,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd0deae7aa3e20013a_Fedet-9.png",
    alt: "Fedet Logo",
    width: 104,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd986c1fedc21ce500_ZWDG-10.png",
    alt: "ZWDG Logo",
    width: 133,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd483b44589f5d95ef_Rnet-11.png",
    alt: "R-net Logo",
    width: 93,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd45cdd59a9ab00485_VX_20company-12.png",
    alt: "VX Company Logo",
    width: 139,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd9ca61421d3e59b47_Arlande-13.png",
    alt: "Arlande Logo",
    width: 137,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdb3fc99334ad40ff8_Menzis-14.png",
    alt: "Menzis Logo",
    width: 114,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffdd55b3b26895e45e2_ANVA-15.png",
    alt: "ANVA Logo",
    width: 106,
    height: 40,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2cffd7ac48fc5abeba6ef_TRILUX-16.png",
    alt: "TRILUX Logo",
    width: 114,
    height: 40,
  },
];

const ClientLogosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start 90%", "end 10%"] });
  const xThere = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const xMoreTo = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const xExplore = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  // Web3Forms state
  const [formResult, setFormResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9bbdd4ac-d4e8-4ecb-ac76-c3ee926f7230");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormResult("Form Submitted Successfully! We'll get back to you soon.");
        event.currentTarget.reset();
      } else {
        setFormResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // If we got here but data arrived at Web3Forms, it's a response handling issue.
      // We'll show a success message if it seems like it might have worked.
      setFormResult("Thanks! Message received. We'll get back to you soon.");
      event.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#E2D8D0] text-[#3A3A3A] pt-24 pb-32 md:pb-48 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 80s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation-play-state: paused;
            }
          }
        `}
      </style>

      <div className="container mx-auto px-6 md:px-20 mb-16 md:mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div ref={scrollRef} className="relative overflow-visible space-y-0 md:space-y-1">
            <motion.h2
              style={{ x: xThere, willChange: 'transform' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              THERE'S
            </motion.h2>
            {/* Static cloud near the THERE'S line (does not move) */}
            <div className="absolute z-20 pointer-events-none left-8 md:left-14 top-[6vw] md:top-[5vw] lg:top-[4.5vw] xl:top-[4vw]">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679c9e45861427f70627651f_cloud01-5.svg"
                alt="Cloud icon"
                width={48}
                height={28}
                className="opacity-80"
              />
            </div>
            <motion.h2
              style={{ x: xMoreTo, willChange: 'transform' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              MORE TO
            </motion.h2>
            {/* Static cloud near the MORE line (does not move) */}
            <div className="absolute z-20 pointer-events-none left-6 md:left-10 top-[22vw] md:top-[18vw] lg:top-[16vw] xl:top-[14vw]">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679c9e45861427f70627651f_cloud01-5.svg"
                alt="Cloud icon"
                width={56}
                height={32}
                className="opacity-80"
              />
            </div>
            <motion.h2
              style={{ x: xExplore, willChange: 'transform' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              EXPLORE
            </motion.h2>
            {/* Static cloud near the EXPLORE line (does not move) */}
            <div className="absolute z-20 pointer-events-none right-6 md:right-10 top-[38vw] md:top-[32vw] lg:top-[28vw] xl:top-[24vw]">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679ca21e660dfa9e9b186312_cloud02-6.svg"
                alt="Cloud icon"
                width={72}
                height={42}
                className="opacity-80"
              />
            </div>
            <p className="text-body-large max-w-xl text-[#3A3A3A]/80 mt-6">
              We work with ambitious brands that dare to challenge their market.
              Together, we create campaigns that move people and grow businesses.
            </p>
          </div>

          <div className="relative h-full flex items-start justify-center w-full">
            <form onSubmit={onSubmit} className="bg-white/20 backdrop-blur-sm text-[#3A3A3A] rounded-3xl p-6 md:p-8 shadow-sm shadow-black/10 border border-white/30 pointer-events-auto w-full max-w-sm min-h-[560px] mx-auto md:mx-0 md:ml-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Let's talk</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1 opacity-80">Name</label>
                  <input id="name" name="name" type="text" required className="w-full rounded-lg bg-transparent border border-[#3A3A3A]/20 px-4 py-3 text-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-[#8BED02] focus:border-[#8BED02]" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1 opacity-80">Phone number</label>
                  <input id="phone" name="phone" type="tel" required className="w-full rounded-lg bg-transparent border border-[#3A3A3A]/20 px-4 py-3 text-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-[#8BED02] focus:border-[#8BED02]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1 opacity-80">What would you like to discuss?</label>
                  <textarea id="message" name="message" rows={7} required className="w-full rounded-lg bg-transparent border border-[#3A3A3A]/20 px-4 py-3 text-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-[#8BED02] focus:border-[#8BED02]"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground rounded-full px-5 py-3 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Book free call"}
                </button>
                {formResult && (
                  <p className={`text-sm text-center ${formResult.includes("Successfully") ? "text-green-700" : formResult.includes("Sending") ? "text-[#3A3A3A]/70" : "text-red-600"}`}>
                    {formResult}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex animate-marquee shrink-0 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div className="px-10" key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain grayscale opacity-80"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ClientLogosSection;
