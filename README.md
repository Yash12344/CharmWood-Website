# Charmwood International School — Website

A premium, warm, child-friendly website for **Charmwood International School, Dehradun** — built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Stack
- **Next.js 14** (App Router, RSC + Client Components)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom brand palette + bespoke animations
- **Framer Motion** for entrance, hover and slider transitions
- Scroll-driven parallax (vanilla, GSAP-style, no extra dep)
- **lucide-react** icons + custom SVG doodles

## Sections (single-page)
1. **Hero** — cinematic image slider, animated headline, floating doodles, CTAs
2. **About** — story, four pillar cards, animated stat counters
3. **Why Choose Us** — 8 feature cards with pastel gradients
4. **Marquee strip** — premium accent ribbon
5. **Programs** — Playgroup → Primary 1–6
6. **Campus Life** — masonry-style gallery, hover zoom
7. **Learning Approach** — dark cinematic timeline with dashed curve & parallax doodles
8. **Testimonials** — glassmorphism slider with photo blob
9. **Admissions** — 4-step timeline + warm enquiry form
10. **Contact** — quick-contact cards, hours, embedded map, WhatsApp CTA
11. **Footer** — grass illustration, motto, floating WhatsApp button

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # composes all sections
  globals.css       # tailwind + design tokens
components/         # each section + Navbar/Footer/Doodles
lib/data.ts         # all content (school info, slides, programs, etc.)
public/             # logo, favicon
tailwind.config.ts  # brand palette + animations
```

## Brand tokens

| Token | Hex |
|---|---|
| Royal Navy | `#10233E` |
| Warm Gold | `#D4A64A` |
| Soft Ivory | `#F7F4EE` |
| Burgundy | `#8E1F1F` |
| Antique Gold | `#C8A45D` |
| Sunshine Yellow | `#F4C542` |
| Nature Green | `#7BAE7F` |
| Sky Blue | `#A8D5E5` |
| Peach Warmth | `#F7C8A3` |
| Cream Ivory | `#FFF8EF` |

Fonts: **Poppins** (UI/body) + **Fraunces** (display/premium accents).

## Before going live
1. **Replace placeholder photographs.** All images in `lib/data.ts` currently point at Unsplash candid photographs. Swap in real school photos and place the logo at `public/images/logo.png`.
2. **Wire up the enquiry form.** `components/Admissions.tsx` is front-end only — connect it to your preferred service (Formspree, Web3Forms, Resend, or a custom API route).
3. **Verify contact details** in `lib/data.ts` against the school records.
4. **Add Google Analytics / Plausible** in `app/layout.tsx` when ready.

## Deploy

The simplest path is **Vercel** — connect this GitHub repo and it will deploy automatically. Cloudflare Pages and Netlify also work with zero config (`npm run build` + output directory `.next`).
