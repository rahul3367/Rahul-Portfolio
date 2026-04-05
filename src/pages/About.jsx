import React from "react";
import { motion } from "framer-motion";
import BioSection from "../components/BioSection";
import self from "../assets/MainImage.png";


function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-white px-6 py-10 md:px-20 md:py-20"
      style={{
        background: `
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(55, 55, 60, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 80% 50% at 60% 90%, rgba(70, 70, 75, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(28, 28, 33, 0.3) 0%, transparent 70%),
          #111113
        `
      }}
    >
      <div className="md:pt-20 flex flex-col md:flex-row gap-12 md:gap-10 items-center md:items-start pb-4 pt-5 relative w-full justify-center md:justify-between max-w-7xl mx-auto">

        {/* Bio Section - Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 flex-1 md:max-w-2xl text-center md:text-center md:pt-20"
        >

          <h2 className="relative text-4xl md:text-5xl font-bold mb-6 text-white inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full md:text-center md:justify-center ">
            Hello
          </h2>
          <div className="">
            <BioSection />
          </div>

        </motion.div>

        {/* Image - Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex-shrink-0"
        >
          <div className="w-72 h-72 md:w-130 md:h-130 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={self}
              alt="Rahul"
              className="w-full h-full rounded-full object-cover object-top border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 