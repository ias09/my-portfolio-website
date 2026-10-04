import Section from "./Section";

export default function Experience({ experience }) {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-6">
        {experience.map((e) => (
          <li key={e.role + e.period}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-base font-medium text-ink">
                {e.role}
              </h3>
              <span className="data-label shrink-0">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{e.org}</p>
            <p className="mt-1 text-sm text-ink-faint">{e.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
