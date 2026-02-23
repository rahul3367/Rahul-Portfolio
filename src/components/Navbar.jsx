import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#e8e6e1] text-black border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg tracking-wide font-medium">
          Rahul
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
          {["Services", "Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#e8e6e1] px-6 pb-6 flex flex-col gap-6 text-sm tracking-wide">
          {["Services", "Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b border-black/10 pb-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}