import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  tags = [],
  githubUrl,
  liveUrl,
  image,         // ← new
  icon,
  accentColor = "#a78bfa",
  bgColor = "#1a1a2e",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col w-full md:w-full rounded-xl border border-white/5 bg-white/5 overflow-hidden items-center justify-center md:border-b-gray-700 md:border-2"
    >

      {/* Thumbnail */}
      <div
        className="relative w-full h-40 md:h-56 flex items-center justify-center overflow-hidden"
        style={{ background: bgColor }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {/* Dot grid fallback */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div
              className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${accentColor}22` }}
            >
              {icon ?? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke={accentColor} strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              )}
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 py-3 px-4 md:p-4 md:gap-2 flex-1 text-xl">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-white/50 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-2 px-4 py-2 md:py-3 border-t border-white/10">
        {githubUrl && (<a
          
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" className="text-white/50">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        )}
        {liveUrl && (<a
          
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-xs font-medium h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/70"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;