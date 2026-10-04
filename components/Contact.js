import Section from "./Section";

export default function Contact({ profile }) {
  return (
    <Section id="contact" title="Contact">
      <p className="text-sm leading-relaxed text-ink-soft">
        Open to conversations about optimization, parallel computing, or
        graduate research collaboration — feel free to reach out.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 block font-serif text-lg text-indigo underline decoration-line decoration-2 underline-offset-4 hover:text-indigo-deep hover:decoration-gold"
      >
        {profile.email}
      </a>
      {profile.phone ? (
        <p className="mt-2 text-sm text-ink-faint">{profile.phone}</p>
      ) : null}
    </Section>
  );
}
