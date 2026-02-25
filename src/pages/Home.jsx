import React from 'react'
import image1 from "../assets/SelfImage.jpeg"
import { motion, MotionConfig } from 'framer-motion';

export default function Home() {
    return (
        <section className="min-h-screen bg-[#e7e5df] text-black px-6 pt-32 relative overflow-hidden">
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

                        <div className="text-3xl text-black/40">
                            ↓
                        </div>

                        <motion.p
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-lg text-black/70 leading-relaxed max-w-sm"
                        >
                            I build fast, modern websites that help businesses grow,
                            available for freelance projects worldwide.
                        </motion.p>

                        <motion.button
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.25, // 👈 interval between paragraph & button
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="bg-[#3c3732] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-black transition"
                        >
                            CONTACT ↗
                        </motion.button>

                    </div>

                    {/* Center Image */}
                    <div className="relative w-70 rounded-xl">
                        <motion.img
                            src={image1}
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
                        <p className="text-sm tracking-[0.25em] uppercase text-black/60 mb-3">
                            Available for work
                        </p>

                        <h2 className="text-7xl md:text-8xl font-semibold tracking-tight text-black/80">
                            FEB'26
                        </h2>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
