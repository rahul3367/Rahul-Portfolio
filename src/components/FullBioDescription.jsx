import React from "react";
import { motion } from "framer-motion";

export default function FullBioDescription() {
  const bioText = "AI & Data Science student focused on building fast, scalable web experiences. Skilled in React, Tailwind CSS, and modern full-stack development with Node.js and MongoDB. Constantly learning, refining problem-solving skills, and exploring Next.js and TypeScript.";

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-lg leading-relaxed text-white/80 max-w-2xl"
    >
      {bioText}
    </motion.p>
  );
}
