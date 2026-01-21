import { ArrowDown, ArrowRight } from "lucide-react";
import HeroImage from "../../assets/hero_image.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start 90%", "end 10%"] });
  const xCreative = useTransform(scrollYProgress, [0, 1], ["60vw", "-60vw"]);
  const xAgency = useTransform(scrollYProgress, [0, 1], ["-30vw", "55vw"]);
  const xForMarketLeaders = useTransform(scrollYProgress, [0, 1], ["60vw", "-60vw"]);
  const xChallengers = useTransform(scrollYProgress, [0, 1], ["-60vw", "60vw"]);

  return (
    <>
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")',
          opacity: 0.04,
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
        }}
      />
      <section
        id="top"
        className="relative flex flex-col items-center justify-center min-h-screen bg-[#01112B] text-foreground overflow-hidden pt-24 pb-12"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg"
            alt="Topographic lines background"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-screen"
          />
        </div>

        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ top: "20%", left: "15%" }}
        >
          <p>52.0907° N</p>
          <p>5.1214° E</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ top: "35%", right: "12%" }}
        >
          <p>48.8566° N</p>
          <p>2.3522° E</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ bottom: "25%", left: "10%" }}
        >
          <p>51.5072° N</p>
          <p>0.1276° W</p>
        </div>
        <div
          className="absolute text-foreground/30 text-[10px] leading-tight font-mono hidden md:block"
          style={{ bottom: "15%", right: "20%" }}
        >
          <p>35.6762° N</p>
          <p>139.6503° E</p>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-20 animate-fade-in animate-duration-1000">
          <div className="flex justify-start items-center min-h-[60vh]">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#D2C9C2] leading-[0.9] max-w-5xl uppercase">
              We don't just make brands visible — we make them intelligent.
            </h1>
          </div>
        </div>

        <div className="absolute bottom-16 z-10 animate-fade-in animate-delay-1000">
          <div className="animate-bounce">
            <ArrowDown className="text-primary" size={32} />
          </div>
        </div>
      </section>

      <section
        id="animated-texts"
        className="relative text-foreground overflow-hidden min-h-[200vh] py-16 md:py-24"
        style={{
          background: "linear-gradient(to bottom, #01112B 0%, #01112B 12%, #44794C 12%, #44794C 100%)",
        }}
      >
        <div className="relative w-full min-h-[105vh] md:min-h-[120vh]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom left, #01112B 0%, #01112B 50%, #44794C 50%, #44794C 100%)'
            }}
          />
          <div ref={scrollRef} className="relative z-10 w-screen px-0 flex flex-col justify-center items-start text-left space-y-0 md:space-y-1">
            <motion.h2
              style={{ x: xCreative, willChange: 'transform', color: '#D2C9C2' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              complete
            </motion.h2>
            <motion.h2
              style={{ x: xAgency, willChange: 'transform', color: '#D2C9C2' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              solutions
            </motion.h2>
            <motion.h2
              style={{ x: xForMarketLeaders, willChange: 'transform', color: '#D2C9C2' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              for market leaders
            </motion.h2>
            <motion.h2
              style={{ x: xChallengers, willChange: 'transform', color: '#D2C9C2' }}
              className="font-display uppercase whitespace-nowrap text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] leading-[0.78]"
            >
              & enterprises
            </motion.h2>
          </div>

          {/* Mobile-only white card - Positioned at bottom */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 pb-8 px-4">
            <div className="w-full max-w-[95vw] mx-auto">
              <div className="w-full flex items-center justify-center">
                <img
                  src={HeroImage}
                  alt="AI Powered Solutions"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-28 bg-[#44794C]">
          <div className="container mx-auto px-6 md:px-20 py-14 md:py-20 lg:py-28 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Desktop Image Card - Left Side */}
              <div className="hidden md:block sticky top-24">
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={HeroImage}
                    alt="AI Powered Solutions"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className="text-white md:mt-24">
                <h2 className="text-feature text-3xl md:text-4xl font-bold">
                  Where{" "}
                  <span className="text-[#8BED02] font-semibold">creativity</span>{" "}
                  meets{" "}
                  <span className="font-black text-[#8BED02]">AI</span>
                  {" "}to unlock the next chapter of{" "}
                  <span className="font-black text-[#8BED02]">business growth.</span>
                </h2>
                <div className="mt-8 space-y-6 text-body-regular font-normal">
                  <p>
                    We operate where <span className="font-bold">strategy</span> meets <span className="font-bold">creativity</span> — and where <span className="font-bold">AI amplifies</span> what brands can truly achieve. We understand how businesses work and get energized when challenges grow more <span className="font-bold">complex</span>, because that's where our thinking makes the <span className="font-bold">greatest impact</span>.
                  </p>
                  <p>
                    <span className="font-bold">Clarity and vision</span> matter, and that's where we excel — through <span className="font-bold">measurable outcomes</span>, <span className="font-bold">intelligent design</span>, and a <span className="font-bold">modern creative approach</span>. We respect what has worked before, but we never hesitate to <span className="font-bold">question</span> it if it brings us closer to the goal.
                  </p>
                  <p>
                    Every idea is sharpened with <span className="font-bold">insight</span>. Every execution is elevated with <span className="font-bold">AI</span>. Behind our solutions stands <span className="font-bold">Qryp.ai</span>, our dedicated division for <span className="font-bold">AI technology and automation</span>.
                  </p>
                </div>

                <div className="relative mt-10 md:mt-8 flex justify-center md:justify-center">
                  <button
                    className="group bg-[#8BED02] hover:bg-[#7ad600] text-[#01112B] font-bold py-3 px-6 pr-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Explore our services
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:rotate-[20deg]" />
                  </button>
                </div>
              </div>

              {/* Explore Services Button - Bottom of Hero Section */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}