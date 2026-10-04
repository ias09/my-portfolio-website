// Fonts are self-hosted via @fontsource (bundled npm packages) instead of
// next/font/google. This avoids a known Next.js/Turbopack bug where the
// build fails if anything (antivirus HTTPS scanning, a firewall, some ISPs)
// interferes with fetching fonts from Google at build time. Same fonts,
// no network dependency.
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/500.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

// ---------------------------------------------------------------------------
// Edit the title/description below — this is what shows up in browser tabs
// and search results.
// ---------------------------------------------------------------------------
export const metadata = {
  title: "Istiaqe Ahamed",
  description:
    "Personal academic website of Istiaqe Ahamed, graduate researcher in Industrial Engineering and Operations Research at North South University. Optimization algorithms, machine learning and high performance computing for large-scale systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
