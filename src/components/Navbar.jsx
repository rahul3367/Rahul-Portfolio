import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Project", id: "works" },
  { label: "Contact", id: "footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Track scroll position for navbar shape change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section with offset for fixed navbar
  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1]
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-[1000]
        font-['DM_Sans',sans-serif] backdrop-blur-[12px] border border-white/[0.08]
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "top-0 w-full max-w-full rounded-none bg-black/80 border-x-0 border-t-0"
          : "top-3 w-[calc(100%-40px)] max-w-[1400px] rounded-full bg-transparent"
        }
        max-md:w-[calc(100%-24px)] ${scrolled ? "max-md:rounded-none max-md:w-full" : "max-md:rounded-3xl"}`}
    >
      {/* Inner container */}
      <div className="h-[52px] flex items-center px-6 relative max-md:h-12 max-md:px-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-base font-medium tracking-wider text-gray-100 no-underline whitespace-nowrap
            transition-opacity duration-200 cursor-pointer hover:opacity-75"
        >
          Rahul<span className="font-light text-gray-500"> Singh</span>
        </a>

        {/* Desktop Nav Links (centered) */}
        <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`relative inline-block py-[7px] px-[18px] text-[0.85rem] font-normal
                  tracking-wide no-underline rounded-full whitespace-nowrap cursor-pointer
                  transition-all duration-200
                  after:content-[''] after:absolute after:bottom-0.5 after:left-4 after:right-4
                  after:h-[1.5px] after:bg-white after:rounded-sm after:origin-left
                  after:transition-transform after:duration-250
                  ${activeSection === id
                    ? "text-white bg-white/[0.08] after:scale-x-100"
                    : "text-white/50 hover:text-white/95 hover:bg-white/10 active:scale-[0.96] after:scale-x-0"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          {/* GitHub */}
          <a
            href="https://github.com/rahul3367"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-[30px] h-[30px] rounded-lg
              text-white/45 border border-white/[0.12] no-underline
              transition-all duration-200
              hover:text-white hover:border-white/30 hover:bg-white/[0.07]"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/_rahul3676/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-[30px] h-[30px] rounded-lg
              text-white/45 border border-white/[0.12] no-underline
              transition-all duration-200
              hover:text-white hover:border-white/30 hover:bg-white/[0.07]"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rahul-singh-dyp"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-[30px] h-[30px] rounded-lg
              text-white/45 border border-white/[0.12] no-underline
              transition-all duration-200
              hover:text-white hover:border-white/30 hover:bg-white/[0.07]"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hidden max-md:flex ml-auto bg-transparent border-none text-white/70
            cursor-pointer p-1 rounded-lg transition-all duration-200
            hover:bg-white/[0.08] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${open ? "flex" : "hidden"} flex-col gap-1 px-5 pb-4 border-t border-white/[0.06] md:hidden`}
      >
        {NAV_ITEMS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className={`block py-2.5 px-3 text-sm no-underline rounded-lg transition-all duration-200
              ${activeSection === id
                ? "text-white"
                : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}