export default function Footer({ name }) {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 text-xs text-ink-faint">
        <span>© {new Date().getFullYear()} {name}</span>
        <span>Built with Next.js, deployed on Vercel</span>
      </div>
    </footer>
  );
}
