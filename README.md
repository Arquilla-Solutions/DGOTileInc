# DGO Tile Inc — Draft Website

A single-page marketing site for **DGO Tile Inc**, a licensed tile contractor in Antelope, CA
specializing in pool tile installation and pool remodeling across the Sacramento Valley. The
layout follows the provided template (sticky nav → hero with stats → brand marquee → feature
strip → service cards → "why us" split → process → service areas → testimonials → CTA band →
FAQ → contact/quote form → footer), restyled with a pool-water blue palette.

Copy is taken from the client's **live website content** (provided directly), so wording,
services, stats, and FAQs match their real site.

## Preview

Static site — no build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup and all copy |
| `styles.css` | Styling, responsive layout, blue palette (CSS variables at top) |
| `script.js` | Mobile menu, scroll-spy nav, demo quote form (FAQ uses native `<details>`) |

## Business info (from the client's live site)

- **Name:** DGO Tile Inc — Tile Contractor specializing in Pool Tile Installation & Pool Remodeling
- **Phone:** (916) 261-1175 · **Email:** info@dgotile.com
- **Office:** 3506 Loneridge Ct, Antelope, CA 95843
- **Stats:** 20+ years experience · 500+ projects completed · 95% client satisfaction
- **Services:** Pool Tile Services · Pool Remodeling · Stone Installation · Brick & Hardscape ·
  Specialty Applications · Accent & Decorative Features
- **Service area:** Sacramento, Placer, El Dorado, Yolo & Sutter counties (28 cities listed)
- **FAQ:** 10 Q&As lifted verbatim from their site
- **Facebook:** linked in footer

## ⚠️ Placeholders to replace before going live

- **Photos** — currently Unsplash stock (hero + service cards + "why us"). Swap in real DGO
  project photos. Each `<img>` falls back to a blue gradient if it fails to load.
- **Logo** — using a placeholder wave mark; drop in the real blue/black geometric DGO logo.
- **Testimonials** — Elena Martinez is from the client's site; the other two are paraphrased
  from real review-platform feedback and attributed to "Verified Customer + city." Replace with
  full names / quotes you have permission to use.
- **Quote form** — demo only (shows a confirmation, sends nothing). Wire it to email/CRM
  (Formspree, Netlify Forms, or a backend) so requests reach info@dgotile.com.
- **License #** — footer says "Licensed & Insured"; add the actual CSLB license number.
