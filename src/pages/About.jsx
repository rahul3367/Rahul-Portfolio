import React from "react";
import { motion } from "framer-motion";
import BioSection from "../components/BioSection";
import self from "../assets/MainImage.png";


function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-white px-6 py-10 md:px-20 md:py-11"
      style={{
        background: `
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(55, 55, 60, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 80% 50% at 60% 90%, rgba(70, 70, 75, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(28, 28, 33, 0.3) 0%, transparent 70%),
          #111113
        `
      }}
    >
      <div className="flex flex-col gap-20 items-center pb-4 pt-5 text-center relative w-full justify-center md:flex-row">

        {/* Bio */}
        <div className="order-2 md:order-2 ">
          <BioSection />
        </div>

        {/* Image */}
        <motion.div
          className="flex justify-center order-1 md:order-2"
        >
          <div className="w-90 h-90 rounded-full overflow-hidden flex-shrink-0 ">
            <img
              src={self}
              alt="Rahul"
              className="w-90 h-90 rounded-full object-cover object-top border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 