import Section from "./Section";

export default function References({ references }) {
  return (
    <Section id="references" title="References">
      <p className="text-sm text-ink-soft">{references}</p>
    </Section>
  );
}