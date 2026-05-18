# Charmwood International School — Website

Static marketing website for Charmwood International School, Dehradun.

## Pages
- `index.html` — Home
- `about.html` — School story, vision & mission, principal's message
- `academics.html` — Curriculum and stages of learning
- `facilities.html` — Campus facilities
- `admissions.html` — Process, dates, documents, indicative fees
- `gallery.html` — Photo grid
- `contact.html` — Contact details, enquiry form, map

## Assets
- `assets/css/style.css` — All styles (single file, no preprocessor)
- `assets/js/main.js` — Mobile nav, scroll reveal, animated counters, contact form handler
- `assets/images/` — Place the school logo here as `logo.png` (used by header, footer favicon)

## Running locally
Just open `index.html` in a browser, or serve the folder with any static server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Notes
- The site uses Google Fonts (Cormorant Garamond + Lora) and a few stock photographs from Unsplash as placeholders. Replace the photographs with real school photos before going live.
- The contact form is front-end only. Wire it up to an email service (Formspree, Web3Forms, or your own backend) when you are ready to receive submissions.
- Phone numbers, address and motto match the information available on public school directories. Please verify against the school's records before publishing.
