# portfolio

Personal site. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Runs on http://localhost:3000.

## Content

All copy lives in one file: `src/data/portfolio.ts`.

- `profile` — name, role, tagline, links, about paragraphs, focus areas
- `projects` — cards in the work grid
- `experience` — timeline entries
- `skills` — grouped skill chips
- `highlights` — achievement stat cards

Components under `src/components` read from that file and nothing else, so
updating the site is a data edit, not a layout edit.

## Design

Single dark theme. Tokens are CSS variables in `src/app/globals.css`
(`--bg`, `--border`, `--text-primary`, `--accent`), exposed to Tailwind through
`@theme inline`. Type is Space Grotesk for headings, Inter for body,
JetBrains Mono for labels.

## Deploy

Hosted on Vercel at https://vaibhavdabas.vercel.app, connected to this repo.
Pushing to `main` builds and promotes to production automatically.

To deploy from the working tree instead of a push:

```bash
npm run build
vercel --prod
```
