import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            ABOUT ME /
          </h2>
          <p className="text-sm text-white/50 mt-6 tracking-widest uppercase">
            (Profile)
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left Side - Main Bio */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-white/80">
              I'm Rahul, a developer focused on building scalable, efficient,
              and user-centric web applications. My foundation lies in strong
              computer science fundamentals combined with practical full-stack
              development experience.
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              Currently pursuing engineering in Artificial Intelligence &
              Data Science, I actively work on real-world systems — from CV
              analysis platforms to community-driven tech solutions.
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              I enjoy solving problems at both system and UI levels — ensuring
              performance, clean architecture, and long-term maintainability.
            </p>
          </motion.div>

          {/* Right Side - Skills / Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-medium mb-4 text-white/90">
                Core Skills
              </h3>
              <p className="text-white/60 leading-relaxed">
                React, Node.js, Express, MongoDB, C++, Data Structures &
                Algorithms, REST APIs, System Design Basics
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-white/90">
                Focus Areas
              </h3>
              <p className="text-white/60 leading-relaxed">
                Scalable Web Systems, Performance Optimization,
                Clean Architecture, Problem Solving
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-white/90">
                Currently Exploring
              </h3>
              <p className="text-white/60 leading-relaxed">
                Advanced DSA, Backend Architecture, AI Integration in Web
                Applications
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About; 