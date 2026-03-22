// import React from "react";
// import { motion } from "framer-motion";

// function Contact() {
//   const containerVariant = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariant = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen text-white px-6 py-28"
//       style={{
//         background: `
//           radial-gradient(ellipse 100% 70% at 50% 100%, rgba(55, 55, 60, 0.35) 0%, transparent 55%),
//           radial-gradient(ellipse 80% 50% at 40% 90%, rgba(70, 70, 75, 0.2) 0%, transparent 50%),
//           radial-gradient(circle at 50% 50%, rgba(28, 28, 33, 0.3) 0%, transparent 70%),
//           #111113
//         `
//       }}
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-24"
//         >
//           <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
//             LET’S CONNECT /
//           </h2>
//           <p className="text-sm text-white/40 mt-6 tracking-widest uppercase">
//             (Contact)
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-20">

//           {/* Left Side */}
//           <motion.div
//             variants={containerVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="space-y-8"
//           >
//             <motion.p
//               variants={itemVariant}
//               className="text-xl leading-relaxed text-white/80"
//             >
//               I’m always open to discussing new projects, internship
//               opportunities, or collaborations.
//             </motion.p>

//             <motion.div
//               variants={itemVariant}
//               className="space-y-4 text-white/60"
//             >
//               <p>Email: rahul@example.com</p>
//               <p>Location: India</p>
//             </motion.div>
//           </motion.div>

//           {/* Right Side Form */}
//           <motion.form
//             variants={containerVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="space-y-8"
//           >
//             <motion.div variants={itemVariant}>
//               <label className="block mb-2 text-sm text-white/50">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white text-white transition"
//               />
//             </motion.div>

//             <motion.div variants={itemVariant}>
//               <label className="block mb-2 text-sm text-white/50">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white text-white transition"
//               />
//             </motion.div>

//             <motion.div variants={itemVariant}>
//               <label className="block mb-2 text-sm text-white/50">
//                 Message
//               </label>
//               <textarea
//                 rows="4"
//                 className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white text-white transition resize-none"
//               ></textarea>
//             </motion.div>

//             <motion.button
//               variants={itemVariant}
//               type="submit"
//               className="mt-6 px-8 py-4 bg-white text-black rounded-full hover:bg-white/80 transition"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Footer />
    </>
  )
}

export default Contact