import React from 'react'
import image1 from "../assets/SelfImage.jpeg"
import { motion, MotionConfig } from 'framer-motion';

export default function Home() {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = String(now.getFullYear()).slice(-2);
    const currentDate = `${month}'${year}`;

    return (
        <section id="home" className="min-h-screen text-white px-6 pt-20 relative overflow-hidden"
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
            <div className="max-w-[1400px] mx-auto">

                {/* BIG NAME */}
                <h1 className="text-[15vw] leading-[0.9] font-semibold tracking-tight overflow-hidden flex justify-center p-8">
                    {"RAHUL SINGH".split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                y: 700,
                                x: Math.sin(index) * 80,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.0,
                                delay: index * 0.05,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </h1>



                {/* Bottom Layout */}

                <div className="grid md:grid-cols-3 gap-16 items-start">

                    {/* Left Content */}
                    <div className="space-y-8">

                        <div className="text-3xl text-white/40">
                            ↓
                        </div>

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

                    {/* Center Image */}
                    <div className="relative w-70 rounded-xl">
                        <motion.img
                            // src={image1}
                            alt="profile"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 2.0,
                                ease: [0.76, 0, 0.24, 1],
                            }}

                            className="overflow-hidden rounded-xl"

                        />
                    </div>



                    {/* Right Availability */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2.0, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute bottom-8 right-8 md:bottom-12 md:right-16 text-right"
                    >
                        <p className="text-sm tracking-[0.25em] uppercase text-white/60 mb-3">
                            Available for work
                        </p>

                        <h2 className="text-7xl md:text-8xl font-semibold tracking-tight text-white/80">
                            {currentDate}
                        </h2>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
