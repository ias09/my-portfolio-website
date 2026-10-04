const sections = [
  { href: "#education", label: "Education" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ name }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-serif text-lg font-semibold text-ink">
          {name}
        </a>
        <nav className="hidden gap-6 sm:flex">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="text-sm text-ink-soft transition-colors hover:text-indigo">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}