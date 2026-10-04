export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-16">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-[12rem_1fr]">
          <div>
            <h2 className="section-heading text-xl">{title}</h2>
            {eyebrow ? (
              <p className="mt-1 text-sm text-ink-faint">{eyebrow}</p>
            ) : null}
          </div>
          <div className="prose-measure sm:max-w-none">{children}</div>
        </div>
      </div>
    </section>
  );
}
