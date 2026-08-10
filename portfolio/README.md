
# Karan Palariya — Portfolio

A personal portfolio site built from the resume content, using React + TypeScript + Tailwind CSS v4 (via Vite).

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Structure

- `src/data.ts` — all resume content (profile, skills, projects, education, certifications, achievements) in one typed file. Edit this to update the site.
- `src/components/` — one component per section (Navbar, Hero, About, Skills, Projects, Education, Achievements, Contact, Footer), plus `EmbeddingField.tsx` (the animated hero background) and `Reveal.tsx` (scroll-reveal wrapper).
- `src/hooks.ts` — scroll-spy for nav highlighting, reveal-on-scroll, and scrolled-state hooks.
- `public/Karan_Palariya_Resume.pdf` — the file served by the "Download resume" button. Replace this file to update what's downloaded.

## Design notes

- Palette: deep navy/charcoal base (`--color-ink`, `--color-panel`) with a teal "signal" accent (`--color-signal`) and a warm amber highlight (`--color-amber`) — evokes an embedding/vector space rather than a generic dark theme.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (labels, data, nav) — loaded via Google Fonts in `index.html`.
- Signature element: the hero background (`EmbeddingField.tsx`) is a canvas simulating cosine-similarity retrieval — a query point drifts through a field of points and highlights/connects the ones within its similarity radius, a literal reference to how SimpleRAG's retrieval works.
- All tokens live in `src/index.css` under `@theme`; Tailwind v4 auto-generates utility classes (`bg-ink`, `text-signal`, etc.) from them.
