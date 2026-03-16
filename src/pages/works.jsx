import React from "react";
import { motion } from "framer-motion";

function Works() {
  const projects = [
    {
      number: "01",
      title: "CV Analysis Platform",
      category: "MERN Stack + AI",
      description:
        "A resume analysis system that evaluates CVs based on job roles using intelligent keyword extraction and structured scoring logic.",
    },
    {
      number: "02",
      title: "Medicine Donation App",
      category: "Community Tech",
      description:
        "A platform connecting donors and NGOs to redistribute unused medicines efficiently with authentication and tracking system.",
    },
    {
      number: "03",
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "A minimal, performance-focused personal website built using React, Tailwind, and modern animation techniques.",
    },
  ];

  return (
    <section
      id="works"
      className="min-h-screen text-white px-6 py-28"
      style={{
        background: `
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(55, 55, 60, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 80% 50% at 60% 90%, rgba(70, 70, 75, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(28, 28, 33, 0.3) 0%, transparent 70%),
          #111113
        `
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            SELECTED WORKS /
          </h2>
          <p className="text-sm text-white/40 mt-6 tracking-widest uppercase">
            (Projects)
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-2 gap-16 items-center border-t border-white/10 pt-16"
            >
              {/* Left Content */}
              <div className="space-y-6">
                <div className="text-sm text-white/40 tracking-widest">
                  ({project.number})
                </div>

                <h3 className="text-3xl md:text-4xl font-medium">
                  {project.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="text-sm text-white/50 uppercase tracking-wide">
                  {project.category}
                </div>
              </div>

              {/* Right Placeholder Image */}
              <div className="w-full h-[350px] bg-white/5 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Works;