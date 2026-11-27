# OMARO's website

The public site of OMARO PBC, served at https://omaro-site.vercel.app (Next.js on Vercel). Dark only; fonts, styles and scripts are served from this site.

- **Pages:** edit `content/pages/*.html` (each starts with a JSON header), then run `python3 tools/build-next.py`. It writes `app/<route>/page.tsx` and the chat's knowledge base `lib/kb.ts`. The header and footer live once in `app/layout.tsx`.
- **Design:** `public/assets/site.css`, `public/assets/site.js` (motion, menu, figures, the IRIS chat), `public/assets/fonts/` (Archivo, Unbounded, IBM Plex Mono, SIL Open Font License).
- **IRIS on the site:** `app/api/ask/route.ts` answers only from `lib/kb.ts` (the published pages). Needs `OMARO_MODEL_KEY`. Optional `KV_REST_API_URL` and `KV_REST_API_TOKEN` keep the questions it couldn't answer (text only, 30 days) and a daily cap. Its rules are on /transparency#iris-on-this-site.
- **Daily data:** `.github/workflows/site-data.yml` refreshes releases, figures, the company documents, the methodology and the Bluesky posts from IRIS (needs the `IRIS_READ_TOKEN` secret).
- **Published figures kept by hand:** `data/published.json` (accuracy, gold set, download addresses once public).
