import Section from "./Section";

export default function Awards({ awards, certifications, volunteer }) {
  return (
    <Section id="awards" title="Awards & activities">
      <div>
        <p className="data-label mb-4">Awards & honors</p>
        <ul className="space-y-4">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-4">
              <span className="data-label mt-0.5 w-12 shrink-0">{a.year}</span>
              <div>
                <p className="text-sm font-medium text-ink">{a.title}</p>
                <p className="mt-0.5 text-xs text-ink-faint">{a.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="data-label mb-4">Certifications</p>
        <ul className="space-y-2">
          {certifications.map((c) => (
            <li key={c} className="text-sm text-ink-soft">
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="data-label mb-4">Volunteer experience</p>
        <ul className="space-y-2">
          {volunteer.map((v) => (
            <li key={v.role + v.period} className="text-sm text-ink-soft">
              {v.role}, {v.org}{" "}
              <span className="text-ink-faint">({v.period})</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
