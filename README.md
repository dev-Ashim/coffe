# Sol. & Bean Coffee House — website

React + Vite site with separate pages and per-page loading effects.

## Run it

```bash
npm install      # first time only
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → dist/
```

## Edit content (no React knowledge needed)

| What | File |
| --- | --- |
| Address, hours, phone, email, social links | `src/data/site.js` |
| Menu items & prices (`signature: true` shows on Home) | `src/data/menu.js` |
| Gallery tiles, happenings, brew steps, FAQs | `src/data/content.js` |
| Which transition each page uses | `src/data/routes.js` |
| Logos & photos | `public/assets/` |

## Pages

`/` Home · `/about` Our Story · `/menu` Menu · `/space` The Space · `/happenings` Happenings · `/visit` Visit

## Loading effects

- **Preloader** — the cup logo fills like coffee (once per browser session).
- **Page curtains** — Home: rise · About: doors · Menu: wipe · Space: sun iris · Happenings: blinds · Visit: drop.
- **Page entrances** — rise, blur, slide, zoom, skew, fade (one per page).
- **Split-letter titles**, scroll reveals and count-up numbers.

All motion is switched off for visitors who prefer reduced motion.

## Hosting

Works on Netlify (`public/_redirects`) and Vercel (`vercel.json`) out of the box — both send every URL to `index.html` so page links work on refresh.

The previous single-page HTML version is kept in `_static-version/`.
