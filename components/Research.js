import Section from "./Section";

export default function Research({ research }) {
  return (
    <Section id="research" title="Research">
      <div className="flex flex-wrap gap-2">
        {research.interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-line bg-paper-raised px-3 py-1 text-xs text-ink-soft"
          >
            {interest}
          </span>
        ))}
      </div>

      <div className="mt-8 border-l-2 border-gold pl-5">
        <p className="data-label">{research.thesis.role}</p>
        <h3 className="mt-1 font-serif text-lg font-medium leading-snug text-ink">
          {research.thesis.title}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Supervisor: {research.thesis.supervisor}
        </p>

        {research.thesis.highlights?.length ? (
          <ul className="mt-4 space-y-2">
            {research.thesis.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Section>
  );
}
