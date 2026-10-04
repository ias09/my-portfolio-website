import Section from "./Section";

function PubList({ items }) {
  return (
    <ul className="space-y-6">
      {items.map((p) => (
        <li key={p.title} className="flex gap-4">
          <span className="data-label mt-1 w-24 shrink-0">{p.status}</span>
          <div>
            {p.href && p.href !== "#" ? (
              <a
                href={p.href}
                className="text-sm font-medium leading-snug text-ink underline decoration-line decoration-2 underline-offset-2 hover:text-indigo hover:decoration-gold"
              >
                {p.title}
              </a>
            ) : (
              <p className="text-sm font-medium leading-snug text-ink">{p.title}</p>
            )}
            {p.venue ? (
              <p className="mt-1 text-xs italic text-ink-faint">{p.venue}</p>
            ) : null}
            <p className="mt-1 text-xs text-ink-faint">{p.authors}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Publications({ publications }) {
  return (
    <Section id="publications" title="Publications">
      <p className="data-label mb-4">Journal papers</p>
      <PubList items={publications.journal} />

      <p className="data-label mb-4 mt-10">Conference papers</p>
      <PubList items={publications.conference} />
    </Section>
  );
}
