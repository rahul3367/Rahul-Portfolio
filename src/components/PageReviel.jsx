import { motion } from "framer-motion";

export default function PageReveal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{
            d: "M0,0 H1440 V900 Q720 750 0 900 Z"
          }}
          animate={{
            d: "M0,0 H1440 V0 Q720 -150 0 0 Z"
          }}
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1]
          }}
          fill="black"
        />
      </svg>
    </div>
  );
}