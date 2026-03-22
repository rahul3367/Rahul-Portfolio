import React from "react";
import { motion } from "framer-motion";

export default function SkillsHighlight() {
  const skills = ["React", "Tailwind CSS", "Node.js", "MongoDB","Express"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      {/* <h3 className="text-lg font-semibold text-white/90">Core Skills</h3> */}
      <div className="flex flex-wrap gap-3 text-center justify-center">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/20 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
