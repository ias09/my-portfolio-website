import Section from "./Section";

export default function About({ bio, credentials }) {
  return (
    <Section id="about" title="About">
      <p className="whitespace-pre-line leading-relaxed text-ink-soft">
        {bio}
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {credentials.map((c) => (
          <div key={c.label}>
            <dt className="data-label">{c.label}</dt>
            <dd className="mt-1 font-serif text-xl text-ink">{c.value}</dd>
            {c.note ? (
              <dd className="mt-0.5 text-xs text-ink-faint">{c.note}</dd>
            ) : null}
          </div>
        ))}
      </dl>
    </Section>
  );
}
