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

- `profile` — name, headline, summary, links, about paragraphs, focus areas,
  and the hero pipeline steps
- `projects` — numbered case-study rows; `pipeline` draws the stage diagram
- `experience` — timeline entries, grouped by `kind` (work / research / competition)
- `skills` — grouped lists
- `highlights` — large stats

Components under `src/components` read from that file and nothing else, so
updating the site is a data edit, not a layout edit.

## Design

Single dark theme. Tokens are CSS variables in `src/app/globals.css`
(`--bg`, `--border`, `--text-primary`, `--accent`), exposed to Tailwind through
`@theme inline`. Geist for text, Geist Mono for labels, metadata and tags.
Sections use the editorial two-column frame in `Section.tsx`. Motion is CSS
only: scroll reveals driven by `Effects.tsx`, a periodic pulse on `Pipeline`,
and 200–300ms hover transitions. Everything respects `prefers-reduced-motion`.

## Deploy

Hosted on Vercel at https://vaibhavdabas.vercel.app, connected to this repo.
Pushing to `main` builds and promotes to production automatically.

To deploy from the working tree instead of a push:

```bash
npm run build
vercel --prod
```
