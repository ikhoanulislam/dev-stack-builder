import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="h-16 flex items-center justify-between md:grid md:grid-cols-3">
          {/* Left: hamburger (mobile) / logo (desktop) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:hidden p-2 -ml-2 text-ink"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
            <a href="#top" className="hidden md:flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-brand text-white grid place-items-center text-xs font-bold">
                DS
              </span>
              <span className="font-extrabold text-lg tracking-tight">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
          </div>

          {/* Center: logo (mobile) / nav links (desktop) */}
          <a href="#top" className="flex md:hidden items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand text-white grid place-items-center text-xs font-bold">
              DS
            </span>
            <span className="font-extrabold text-lg tracking-tight">
              Dev <span className="text-gradient-brand">Stack</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? "text-pink-600" : "text-slate-600 hover:text-ink"}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: auth actions */}
          <div className="flex items-center justify-end gap-4 md:gap-3">
            <a href="#signin" className="text-sm font-medium text-slate-700">
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-gradient-brand text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {open && (
        <nav className="md:hidden border-t border-slate-100 px-5 py-3 flex flex-col gap-3 text-sm font-medium bg-white">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={i === 0 ? "text-pink-600" : "text-slate-600"}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
