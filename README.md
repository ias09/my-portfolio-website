# Personal Website — Istiaqe Ahamed (Shawon)

A personal academic website built with **Next.js** (JavaScript, App Router)
and **Tailwind CSS**, ready to deploy on **Vercel**.

## Edit your content

Everything about you — name, bio, education, research projects, publications,
links — lives in one file:

```
lib/data.js
```

Open it, change the text between the quotes, save, and your site updates.
You do not need to touch any other file for normal content changes.

A few `// TODO` comments mark things to fill in yourself:
- Your real email address
- Google Scholar / GitHub / LinkedIn links
- A `cv.pdf` — drop the file into the `public/` folder and the "CV (PDF)"
  link in the header will work automatically

## Run it on your own computer

You need [Node.js](https://nodejs.org) (version 18 or newer) installed first.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The page reloads
automatically whenever you save a file.

## Project structure

```
app/            → pages (page.js is the homepage, layout.js is the shared shell)
components/     → one file per section of the page (Hero, Research, etc.)
lib/data.js     → all of your content — edit this first
public/         → static files (put cv.pdf and a profile photo here)
```

## Deploy to Vercel

See the step-by-step guide in the chat where this was generated, or:
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com → **Add New → Project** → import that repository.
3. Click **Deploy**. Vercel detects Next.js automatically — no configuration
   needed.
4. Every time you push a change to GitHub, Vercel redeploys automatically.
