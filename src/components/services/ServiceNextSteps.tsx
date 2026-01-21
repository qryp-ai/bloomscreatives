import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceNextStepsProps {
    icon: LucideIcon;
}

export default function ServiceNextSteps({ icon: Icon }: ServiceNextStepsProps) {
    return (
        <div className="mt-16 relative overflow-hidden">
            {/* Animated Border Line */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#8BED02] z-10"
            />

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="p-8 bg-gradient-to-r from-[#8BED02]/5 to-transparent pl-8"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-[#8BED02]/15 text-[#8BED02] flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3 text-sm text-[#F5F7FA]/80 max-w-2xl">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8BED02]">Next steps</h3>
                        <p className="text-base">Want to explore how this service applies to your business?</p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-[#8BED02] text-[#01112B] font-semibold px-5 py-3 hover:opacity-90 transition"
                        >
                            Book free call
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
