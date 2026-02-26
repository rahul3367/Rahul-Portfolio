import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            LET’S CONNECT /
          </h2>
          <p className="text-sm text-black/50 mt-6 tracking-widest uppercase">
            (Contact)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.p
              variants={itemVariant}
              className="text-xl leading-relaxed text-black/80"
            >
              I’m always open to discussing new projects, internship
              opportunities, or collaborations.
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="space-y-4 text-black/60"
            >
              <p>Email: rahul@example.com</p>
              <p>Location: India</p>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariant}>
              <label className="block mb-2 text-sm text-black/60">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition"
              />
            </motion.div>

            <motion.div variants={itemVariant}>
              <label className="block mb-2 text-sm text-black/60">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition"
              />
            </motion.div>

            <motion.div variants={itemVariant}>
              <label className="block mb-2 text-sm text-black/60">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariant}
              type="submit"
              className="mt-6 px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;