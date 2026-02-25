import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "From frontend interactions to backend APIs, I build complete web solutions using modern stacks that are scalable, maintainable, and production-ready.",
    },
    {
      number: "02",
      title: "UI/UX & Frontend",
      description:
        "I design and develop responsive, intuitive interfaces that work smoothly across devices with strong focus on clarity, accessibility, and performance.",
    },
    {
      number: "03",
      title: "Optimization",
      description:
        "I focus on building systems that remain reliable as they scale — applying clean architecture and core computer science principles.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-black text-white px-6 py-28"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            WHAT I DO /
          </h2>
          <p className="text-sm text-white/50 mt-6 tracking-widest uppercase">
            (Services)
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="border-t border-white/10 pt-12 grid md:grid-cols-3 gap-10"
            >
              <div className="text-4xl text-white/40 font-light">
                ({service.number})
              </div>

              <div className="md:col-span-2">
                <h3 className="text-3xl md:text-4xl font-medium mb-6">
                  {service.title}
                </h3>

                <p className="text-white/60 max-w-xl leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;