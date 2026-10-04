"use client";
import { useState } from "react";

const sections = [
  { href: "#education", label: "Education" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-lg font-semibold text-ink">
          {name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 sm:flex">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="text-sm text-ink-soft transition-colors hover:text-indigo">
              {s.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="flex sm:hidden flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-line bg-paper sm:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-ink-soft hover:text-indigo"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}