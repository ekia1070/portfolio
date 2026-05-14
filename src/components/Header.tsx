"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#" className="text-base font-black text-[var(--foreground)] sm:text-xl">
          SeKwang<span className="text-[var(--accent)]">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-semibold text-[var(--muted)] sm:flex">
          {navLinks.map(({ href, label }) => (
            <a key={href} className="transition hover:text-[var(--accent)]" href={href}>{label}</a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--line)] sm:hidden"
        >
          <span className={`h-0.5 w-5 bg-[var(--foreground)] transition-all duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-[var(--foreground)] transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-[var(--foreground)] transition-all duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="border-t border-[var(--line)] bg-[var(--background)]/95 px-5 py-4 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
