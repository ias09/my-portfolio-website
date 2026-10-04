import Section from "./Section";

export default function Education({ education, skills }) {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-7">
        {education.map((e) => (
          <li key={e.degree}>
            <div className="flex items-baseline justify-between gap-x-4">
              <h3 className="font-serif text-base font-medium text-ink">
                {e.degree}
              </h3>
              <span className="data-label shrink-0 whitespace-nowrap">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{e.institution}</p>
            <p className="mt-1 text-sm text-ink-faint">{e.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p className="data-label">{group}</p>
            <p className="mt-1 text-sm text-ink-soft">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}