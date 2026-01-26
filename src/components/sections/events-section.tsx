import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Users } from "lucide-react";
import { Instagram } from "lucide-react";
import EventsImage1 from "@/assets/events_image1.jpg";

const EventsSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const DEMO_CARDS = [1, 2];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.scrollWidth / DEMO_CARDS.length;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative bg-[#01112B] text-foreground py-24 border-b border-white/10 overflow-hidden">
            {/* Background Ambience */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png")',
                    opacity: 0.04,
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="container mx-auto px-0 md:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-12 items-center lg:items-start">

                    {/* Left Column: Content & CTA */}
                    <div className="lg:w-5/12 flex flex-col items-center lg:items-start shrink-0 pt-4 px-6 md:px-0 text-center lg:text-left w-full">
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-[0.85] mb-6 md:mb-10">
                            Events & <br />
                            <span className="text-[#8BED02]">Workshops</span>
                        </h2>

                        <p className="text-white/70 text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
                            Blooms Creatives offers exclusive webinars, hands-on courses, intensive bootcamps, and expert-led masterclasses designed to sharpen your AI, marketing, design, and business skills.
                        </p>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex flex-col items-start w-full">
                            <a
                                href="https://chat.whatsapp.com/Ggm8SALjyyVHBURdbvaqWK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 bg-[#8BED02] text-[#01112B] p-2 pr-8 rounded-full transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(139,237,2,0.3)] hover:shadow-[0_0_30px_rgba(139,237,2,0.5)] mb-6"
                            >
                                <div className="w-16 h-16 bg-[#01112B] rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#01112B] transition-colors">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-display font-bold text-2xl leading-none uppercase tracking-wide">Join Our Community</span>
                                    <span className="text-sm font-bold opacity-80 mt-1">Get exclusive updates</span>
                                </div>
                            </a>

                            <p className="text-white/60 text-base leading-relaxed max-w-md">
                                <span className="text-white font-semibold">Why join our community?</span> Get early access to upcoming events, connect with like-minded professionals, receive free resources and templates, and stay updated on industry trends. More exciting programs are coming soon!
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Cards + Dots + Follow Link */}
                    <div className="lg:w-7/12 w-full min-w-0 flex flex-col items-center">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto pb-6 pt-4 px-6 lg:px-0 scrollbar-hide snap-x snap-mandatory w-full max-w-[420px]"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {DEMO_CARDS.map((item, index) => (
                                <div
                                    key={item}
                                    className="shrink-0 snap-center relative w-full min-w-full max-h-[70vh] bg-[#E8E4DC] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01] shadow-xl flex items-center justify-center"
                                >
                                    {/* Card Content */}
                                    {index === 0 ? (
                                        <img
                                            src={EventsImage1}
                                            alt="Events and Workshops"
                                            className="w-full h-auto max-h-[70vh] object-contain"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#01112B]/60 p-8">
                                            <span className="font-display font-bold text-3xl md:text-4xl uppercase text-center leading-tight mb-4">Coming Soon</span>
                                            <span className="text-sm md:text-base text-center opacity-70">More events are being updated</span>
                                        </div>
                                    )}

                                    {/* Subtle gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#01112B]/10 to-transparent pointer-events-none" />
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots - Centered */}
                        <div className="flex items-center justify-center gap-2 mt-4 w-full">
                            {DEMO_CARDS.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? 'bg-[#8BED02] w-4'
                                        : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Desktop Follow Link - Below Cards */}
                        <div className="hidden lg:flex justify-end mt-6">
                            <a
                                href="https://www.instagram.com/blooms.creatives?igsh=MWdqZ3lxZHB5bDNoYQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/60 hover:text-[#8BED02] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#8BED02] transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <span className="uppercase text-sm font-bold tracking-wider">Follow us for more</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Buttons (Centered below cards) */}
                    <div className="flex lg:hidden flex-col items-center w-full px-6 gap-6 mb-4">
                        <a
                            href="https://chat.whatsapp.com/Ggm8SALjyyVHBURdbvaqWK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 bg-[#8BED02] text-[#01112B] p-1.5 pr-6 rounded-full transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(139,237,2,0.3)]"
                        >
                            <div className="w-14 h-14 bg-[#01112B] rounded-full flex items-center justify-center text-white shrink-0 transition-colors group-active:bg-white group-active:text-[#01112B]">
                                <Users className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-display font-bold text-xl leading-none uppercase tracking-wide">Join Our Community</span>
                                <span className="text-xs font-bold opacity-80 mt-1">Get exclusive updates</span>
                            </div>
                        </a>

                        <p className="text-white/60 text-sm leading-relaxed text-center max-w-sm">
                            <span className="text-white font-semibold">Why join our community?</span> Get early access to upcoming events, connect with like-minded professionals, receive free resources and templates, and stay updated on industry trends. More exciting programs are coming soon!
                        </p>

                        <a
                            href="https://www.instagram.com/blooms.creatives?igsh=MWdqZ3lxZHB5bDNoYQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-white/60 hover:text-[#8BED02] active:text-[#8BED02] active:scale-95 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#8BED02] group-active:border-[#8BED02] group-active:bg-[#8BED02]/10 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <span className="uppercase text-sm font-bold tracking-wider">Follow us for more</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventsSection;
