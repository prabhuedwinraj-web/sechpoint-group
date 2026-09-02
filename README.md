# SechPoint Group — Website (React)

React (Vite) build of the SechPoint Group corporate site (Home + Contact),
ported from the `.dc` design files in [`design-source/`](design-source/).

The theme and typography match the SechPoint SSIT site: near-black `#050506`
surfaces, `#f2f5fa` text, cyan `#00baeb` accent, **Funnel Display** headings/body
and **IBM Plex Mono** labels.

## Run

```bash
npm install
npm run dev      # http://localhost:5181
npm run build    # production build to dist/
```

## Structure

- `src/Home.jsx` / `src/Contact.jsx` — the two pages
- `src/Shared.jsx` — shared header (mega-menu + mobile drawer) and footer
- `src/hero-field.jsx` — animated connectivity-field hero background
- `src/router.jsx` — minimal history-API router (`/` and `/contact`)
- `src/ui.js` — inline-style helper, tokens, shared data
- `design-source/` — original `.dc` design files and assets

## Deploy (Vercel)

Import the repo — Vite is auto-detected. `vercel.json` adds the SPA rewrite so
`/contact` resolves. Leave Root Directory empty, Output Directory `dist`.

The four business cards link to their sibling subdomains (dpi/distribution/
ssit/ict.sechpoint.com); in local dev the SSIT card points to `localhost:5180`.
