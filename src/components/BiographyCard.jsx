import React from "react";
import { motion } from "framer-motion";

export default function BiographyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-colors"
    >
      <div className="items-center text-3xl pb-3">This i an </div>
      <p className="text-xl text-gray-400 leading-relaxed text-white/80 lead text-center text-light text-lg-start mb-4">
        <span className="text-white font-semibold">AI & Data Science</span> student focused on building fast, scalable web experiences. Skilled in <span className="text-white font-semibold">React, Tailwind CSS, and modern full-stack development with Node.js and MongoDB.</span> Constantly learning, refining problem-solving skills, and exploring Next.js and TypeScript.
      </p>
    </motion.div>
  );
}
