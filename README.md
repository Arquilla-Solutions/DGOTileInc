# DGO Tile Inc — Draft Website

A single-page marketing site for **DGO Tile Inc**, a licensed pool tile contractor in
Antelope, CA serving the Sacramento Valley. The layout follows the provided template
(sticky nav → hero with stats → feature strip → 3 service cards → "why us" split →
4-step process → service areas → testimonials → CTA band → contact/quote form → footer),
restyled with a pool-water blue palette.

## Preview

It's a static site — no build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup and all copy |
| `styles.css` | Styling, responsive layout, blue palette (CSS variables at top) |
| `script.js` | Mobile menu, scroll-spy nav, demo quote form |

## Business info used (pulled from public sources)

- **Name:** DGO Tile Inc — Pool Tile Contractor & Pool Remodeling
- **Phone:** (916) 261-1175
- **Address:** 3506 Lone Ridge Ct, Antelope, CA 95843
- **Hours:** Mon–Fri 6:00 AM – 4:00 PM · Sat–Sun Closed
- **Experience / rating:** 25+ years · 5.0 across Yelp, Angi, HomeAdvisor
- **Services:** pool tile installation, coping, complete remodeling, waterline/mosaic tile,
  repairs, resurfacing, masonry & stonework — residential & commercial (incl. resorts/hotels)
- **Service area:** Sacramento, Placer, El Dorado, Yolo & Sutter counties (28 cities listed)
- **Facebook:** linked in footer

> The official site (dgotileinc.com) blocked automated crawling, so the above was
> reconstructed from search-indexed content and listing/review profiles (BBB, Yelp, Angi,
> HomeAdvisor). **Please verify all details before publishing.**

## ⚠️ Placeholders to replace before going live

- **Photos** — currently Unsplash stock (hero + service cards + "why us"). Swap in real DGO
  project photos. Each `<img>` falls back to a blue gradient if it fails to load.
- **Testimonials** — paraphrased from real reviews but attributed to "Verified Customer +
  city." Replace with full names / real quotes you have permission to use.
- **CSLB license #** — footer says "Licensed Contractor"; add the actual license number.
- **Quote form** — demo only (shows a confirmation, sends nothing). Wire it to email/CRM
  (e.g. Formspree, Netlify Forms, or your backend) via the `<form>` in `index.html`.
- **Stats** — "100% Licensed & Insured", "25+ years", "5.0" — confirm before publishing.
