import Image from "next/image";
import RouteMotif from "./RouteMotif";

export default function Hero({ profile }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <RouteMotif className="pointer-events-none absolute -right-6 top-0 h-56 w-auto opacity-70 sm:h-64" />
      <div className="container-page relative py-20 sm:py-28">
        {/* TODO: drop your photo into public/profile.jpg — the file just needs
            to exist with that exact name for this to show up. Delete this
            <Image> block entirely if you'd rather not show a photo. */}
        <Image
          src="/profile.jpeg"
          alt={profile.name}
          width={88}
          height={88}
          className="mb-5 rounded-full border border-line object-cover"
          priority
        />
        <p className="data-label">{profile.location}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="prose-measure mt-4 text-lg text-ink-soft">
          {profile.tagline}
        </p>
        <p className="prose-measure mt-1 text-sm text-ink-faint">
          {profile.role} · {profile.affiliation}
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          Email: {profile.email}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-indigo underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-indigo-deep hover:decoration-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
