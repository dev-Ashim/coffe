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

## Instagram feed

The home page has an **On Instagram** section. It shows the latest posts and reels from @sol.andbean,
loaded through `api/instagram.js` (a Vercel serverless function). Until the feed is connected — and when
running `npm run dev` locally — it shows our own photos from `instaFallback` in `src/data/content.js` instead.

To connect it (one time):

1. In the Instagram app, switch @sol.andbean to a **Professional** account (Business or Creator). Free.
2. Go to [developers.facebook.com](https://developers.facebook.com/apps) → **Create app** → type **Business**.
3. In the app, add the **Instagram** product → **API setup with Instagram login**.
4. Under *Generate access tokens*, **Add account**, sign in as @sol.andbean and copy the token.
5. In Vercel → your project → **Settings → Environment Variables**, add `INSTAGRAM_TOKEN` with that token,
   then **redeploy**.

Check it worked by opening `https://<your-site>/api/instagram` — you should see your posts as JSON.

The token lasts 60 days. The function asks Instagram to extend it each time it fetches. If the section ever
goes back to showing our own photos, generate a new token (step 4) and update the variable.

To test the live feed locally, run `npx vercel dev` instead of `npm run dev`.

## Hosting

Works on Netlify (`public/_redirects`) and Vercel (`vercel.json`) out of the box — both send every URL to `index.html` so page links work on refresh. The live Instagram feed needs Vercel (on Netlify the section shows the fallback photos).

The previous single-page HTML version is kept in `_static-version/`.
