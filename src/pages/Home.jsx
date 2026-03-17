import React from 'react'
import { motion, MotionConfig } from 'framer-motion';
import { useEffect, useState } from "react"; 3
import { Globe } from "@/components/ui/globe"
import { GlobeDemo } from "@/components/Globe"

export default function Home() {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = String(now.getFullYear()).slice(-2);
    const currentDate = `${month}'${year}`;


    return (
        <section id="home" className="min-h-screen text-white px-6 pt-20 pb-0 relative overflow-hidden"
            style={{
                background: `
                radial-gradient(ellipse 120% 80% at 50% 110%, rgba(60, 60, 65, 0.45) 0%, transparent 60%),
                    radial-gradient(ellipse 80% 50% at 50% 100%, rgba(80, 80, 85, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 60% 40% at 50% 95%, rgba(100, 100, 105, 0.2) 0%, transparent 45%),
                    radial-gradient(ellipse 140% 60% at 50% 120%, rgba(50, 50, 55, 0.35) 0%, transparent 55%),
                    radial-gradient(circle at 50% 50%, rgba(30, 30, 35, 0.4) 0%, transparent 70%),
                    #111113
                    `
            }}
        >
            {/* Globe Background */}
            <motion.div 
                className="absolute inset-0 z-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.0, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <GlobeDemo />
            </motion.div>


            {/* BIG NAME  123 */}
            {/* BIG NAME  123 */}
            <motion.div 
                className="w-full overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.0, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <h1 className="text-4xl md:text-[13vw] leading-[0.9] font-semibold tracking-tight overflow-hidden flex justify-center p-8 pt-8">
                    RAHUL SINGH
                </h1>
            </motion.div>

            {/* Mobile Contact Button - Center */}
            <motion.div
                className="relative z-10 md:hidden flex justify-center items-center h-[30vh]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                <motion.a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById('contact');
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.25,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/20 transition cursor-pointer"
                >
                    CONTACT ↗
                </motion.a>
            </motion.div>

            {/* Bottom Layout */}

            <motion.div 
                className="relative z-10 md:absolute md:bottom-0 md:left-0 md:right-0 w-full px-6 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >

                {/* Left Content */}
                <div className="space-y-8 pl-16 hidden md:block">


                    <motion.p
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="text-lg text-white/70 leading-relaxed max-w-sm"
                    >
                        I build fast, modern websites that help businesses grow,
                        available for freelance projects worldwide.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById('contact');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.25,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="inline-block bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/20 transition cursor-pointer"
                    >
                        CONTACT ↗
                    </motion.a>

                </div>
                {/* Right Availability */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2.0, ease: [0.76, 0, 0.24, 1] }}
                    className="text-center pb-10 pl-15 border-l-2 md:border-l-0 md:pl-0 md:text-right md:pr-[60px] md:pr-16 md:ml-auto border-white/40"
                >
                    <p className="text-sm tracking-[0.25em] uppercase text-white/60 mb-3 ">
                        Available for work
                    </p>

                    <h2 className="text-2xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white/80">
                        {currentDate}
                    </h2>
                </motion.div>

                {/* Mobile Description Text */}
                <motion.div
                    className="md:hidden w-full text-center mt-12"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                >
                    <p className="text-sm text-white/70 leading-relaxed">
                        I build fast, modern websites that help businesses grow, available for freelance projects worldwide.
                    </p>
                </motion.div>

            </motion.div>

        
            

        </section >
    );
}
