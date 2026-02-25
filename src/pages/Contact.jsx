import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            LET’S CONNECT /
          </h2>
          <p className="text-sm text-black/50 mt-6 tracking-widest uppercase">
            (Contact)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed text-black/80">
              I’m always open to discussing new projects, internship
              opportunities, or collaborations.
            </p>

            <div className="space-y-4 text-black/60">
              <p>Email: rahul@example.com</p>
              <p>Location: India</p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <label className="block mb-2 text-sm text-black/60">
                Name
              </label>
              <input
                type="text"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-black/60">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-black/60">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border-b border-black/20 py-3 outline-none focus:border-black transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;