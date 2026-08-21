"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-ink sticky top-0 z-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Logo + Divider + Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.jpg"
            alt="Real Image Resizer"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg"
          />
          <div className="w-px h-7 bg-white/20" />
          <span className="font-display font-bold text-[15px] sm:text-lg text-white whitespace-nowrap leading-tight">
            Real Image
            <br className="sm:hidden" />
            {" "}Resizer
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#tools" className="text-white/60 hover:text-white transition-colors">
            Student Tools
          </a>
          <a href="#history" className="text-white/60 hover:text-white transition-colors">
            History
          </a>
          <a href="#faq" className="text-white/60 hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-5 pt-1 flex flex-col gap-3 border-t border-white/10">
          <a
            href="#tools"
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white text-sm py-1 transition-colors"
          >
            Student Tools
          </a>
          <a
            href="#history"
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white text-sm py-1 transition-colors"
          >
            History
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white text-sm py-1 transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
}
