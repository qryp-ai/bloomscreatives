"use client";

import React, { useState, useEffect, useRef } from "react";
import WorkImage1 from "../../assets/work_image1.png";
import WorkImage2 from "../../assets/work_image2.png";
import WorkImage3 from "../../assets/work_image3.png";
import WorkImage4 from "../../assets/work_image4.png";
import WorkImage5 from "../../assets/work_image5.png";
import WorkImage6 from "../../assets/work_image6.png";

const WorkSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const progress = Math.max(
                    0,
                    Math.min(1, (window.innerHeight - top) / (window.innerHeight + height))
                );
                setScrollProgress(progress);
                const currentY = window.scrollY || window.pageYOffset;
                const delta = currentY - lastScrollYRef.current;
                lastScrollYRef.current = currentY;
                setXOffset((prev) => {
                    const half = (rowRef.current?.scrollWidth || 1) / 2;
                    if (half <= 1) return prev;
                    let next = prev + delta * 0.6;
                    next = ((next % half) + half) % half; // keep in [0, half)
                    return next;
                });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textParallaxStyle = (speed: number) => ({
        transform: `translateY(${scrollProgress * speed}px)`,
        willChange: 'transform'
    });

    const CARD_COUNT = 6;
    const rowRef = useRef<HTMLDivElement>(null);
    const lastScrollYRef = useRef<number>(0);
    const [xOffset, setXOffset] = useState<number>(0);
    const lastFrameRef = useRef<number>(0);
    const baseSpeedRef = useRef<number>(70); // px per second, continuous leftward motion (increased speed)

    useEffect(() => {
        let raf = 0;
        const step = (t: number) => {
            const last = lastFrameRef.current || t;
            const dt = (t - last) / 1000; // seconds
            lastFrameRef.current = t;
            setXOffset((prev) => {
                const half = (rowRef.current?.scrollWidth || 1) / 2;
                if (half <= 1) return prev;
                let next = prev + baseSpeedRef.current * dt; // increase offset => translate left
                next = ((next % half) + half) % half;
                return next;
            });
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="work"
            className="relative bg-[#44794C] text-foreground pt-48 pb-72 lg:pb-[340px] overflow-hidden min-h-[135vh]"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundColor: "#01112B",
                    clipPath: "polygon(100% 0, 100% 100%, 50% 100%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-full z-[2] pointer-events-none flex justify-center translate-y-[10px] md:translate-y-[30px]"
            >
                <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679cb26509e276acb0aec280_border_20mountains-7.svg"
                    alt="Mountain border"
                    width={1920}
                    height={220}
                    className="w-full max-w-[1920px] h-auto"
                />
            </div>

            <div
                className="absolute top-0 left-0 w-full font-display font-black text-white/10 whitespace-nowrap select-none z-[3]"
                style={{
                    ...textParallaxStyle(150),
                    fontSize: "clamp(100px, 20vw, 250px)",
                    lineHeight: "0.9",
                    top: "5%",
                }}
            >
                WORK WORK WORK WORK
            </div>
            <div
                className="absolute top-0 left-0 w-full font-display font-black text-white/10 whitespace-nowrap select-none z-[3]"
                style={{
                    ...textParallaxStyle(80),
                    fontSize: "clamp(100px, 20vw, 250px)",
                    lineHeight: "0.9",
                    top: "45%",
                }}
            >
                WORK WORK WORK WORK
            </div>

            <div className="relative container mx-auto px-6 md:px-12 lg:px-20 z-[4] flex flex-col items-start gap-6 pt-20">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight">
                    Work that blends strategy, storytelling, and bold design.
                </h2>
                <p className="max-w-3xl text-white/80 text-body-large">
                    We partner with ambitious brands to create campaigns that move people and define markets.
                    Every collaboration is tailored to deliver measurable impact.
                </p>
            </div>

            {/* Sloped auto-moving work cards */}
            <div className="relative z-[4] mt-16">
                <style>{`
                    @keyframes work-marquee {
                      0% { transform: translateX(0%); }
                      100% { transform: translateX(-50%); }
                    }
                    .work-animate-marquee { animation: work-marquee 40s linear infinite; will-change: transform; }
                    @media (prefers-reduced-motion: reduce) {
                      .work-animate-marquee { animation-play-state: paused; }
                    }
                `}</style>
                <div className="-rotate-6 overflow-visible">
                    <div
                        ref={rowRef}
                        className="flex gap-8 w-[200%]"
                        style={{ transform: `translateX(-${xOffset}px)`, willChange: 'transform' }}
                    >
                        {[...Array(2)].map((_, loopIdx) => (
                            <div className="flex gap-8" key={loopIdx}>
                                {Array.from({ length: CARD_COUNT }).map((_, i) => (
                                    <div
                                        key={`${loopIdx}-${i}`}
                                        className="relative shrink-0 w-[340px] h-[320px] rounded-2xl bg-[#E2D8D0] border border-black/10 shadow-xl shadow-black/20 overflow-hidden"
                                    >
                                        {i === 0 ? (
                                            <img
                                                src={WorkImage1}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : i === 1 ? (
                                            <img
                                                src={WorkImage2}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : i === 2 ? (
                                            <img
                                                src={WorkImage3}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : i === 3 ? (
                                            <img
                                                src={WorkImage4}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : i === 4 ? (
                                            <img
                                                src={WorkImage5}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : i === 5 ? (
                                            <img
                                                src={WorkImage6}
                                                alt="Featured Work"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-black/10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default WorkSection;