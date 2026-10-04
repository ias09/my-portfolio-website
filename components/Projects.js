import Section from "./Section";

export default function Projects({ projects }) {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-8">
        {projects.map((p) => (
          <li key={p.title} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              {p.href && p.href !== "#" ? (
                <a
                  href={p.href}
                  className="font-serif text-base font-medium leading-snug text-ink underline decoration-line decoration-2 underline-offset-2 hover:text-indigo hover:decoration-gold"
                >
                  {p.title}
                </a>
              ) : (
                <h3 className="font-serif text-base font-medium leading-snug text-ink">
                  {p.title}
                </h3>
              )}
              <span className="data-label shrink-0">{p.period}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
