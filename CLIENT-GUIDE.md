# Charmwood Website — Guide for the School (No Coding Needed)

Everything below is done on **github.com in your web browser**.
Nothing to install. Works on any computer.

You will need a GitHub account that has access to this project
(ask your developer to invite your email once — after that you're set).

> After every change you save, the live website updates itself
> automatically in about 2 minutes. Refresh the site to see it.

---

## A. Add or change a PARENT REVIEW

### Step 1 — Upload the parent's photo (if you have one)

1. Open the project on github.com and go to the folder:
   **`public/images/04-testimonials`**
2. Click **Add file → Upload files** (top-right)
3. Drag the photo onto the page
   - Before uploading, rename the file on your computer to something
     simple, e.g. **`parent-5.jpg`** (all lowercase, no spaces)
   - It must end in **`.jpg`**
4. Click the green **Commit changes** button at the bottom

### Step 2 — Add the review text

1. Go to the file: **`content/testimonials.json`**
2. Click the **pencil icon** ✏️ (top-right of the file view)
3. Copy an existing review block — everything from `{` to `}` — and
   paste it after the last block. Add a **comma** after the block
   above it. Example of what you add:

   ```
   ,
   {
     "quote": "Charmwood gave our son confidence we never expected.",
     "name": "Ritu & Amit Kumar",
     "role": "Parents of Dhruv, Class 1",
     "photo": "parent-5.jpg"
   }
   ```

   - `photo` must exactly match the file you uploaded in Step 1.
   - No photo? Write `"photo": ""` — a neutral image will show.
4. Click the green **Commit changes** button
5. Wait ~2 minutes, refresh the website, and the new review appears
   in the "What families say about us" slider.

**To edit or remove a review:** same pencil icon on
`content/testimonials.json` — change the text or delete a whole
`{ ... }` block (watch the commas: every block except the last one
needs a comma after its `}`).

> If the reviews section ever disappears after an edit, the file has
> a typo (usually a missing/extra comma or quote mark). Click the
> file's **History**, open the previous version, and copy it back.
> Or paste the file into https://jsonlint.com to find the mistake.

---

## B. Replace any PHOTO on the website

1. Find which file to replace — open
   **`public/images/README.txt`** on GitHub; it lists every photo,
   which section it belongs to, and its exact file name.
2. Go to the matching folder, e.g. **`public/images/01-hero`**
3. Click **Add file → Upload files**
4. Upload your new photo **with the exact same file name** as the one
   you're replacing (e.g. `slide-1.jpg`) — GitHub will overwrite the
   old one
5. **Commit changes** → wait ~2 minutes → refresh the website

---

## C. Change the LOGO

Upload your new logo as **`logo.png`** into **`public/images`**
(same upload steps as above). Same name, same folder — it replaces
the old one everywhere on the site.

---

## D. Change phone numbers, address, email, social links

These live in one file: **`lib/data.ts`**.
You can edit it with the pencil icon too — the contact details are
at the very top of the file and clearly labelled. Only change the
text between the quote marks. If unsure, ask your developer — this
file is code, so a stray bracket can break the site.

---

## Quick reference — where everything lives

| What you want to change            | Where                                  |
|------------------------------------|----------------------------------------|
| Parent reviews (text)              | `content/testimonials.json`            |
| Parent photos                      | `public/images/04-testimonials/`       |
| Homepage big slideshow photos      | `public/images/01-hero/`               |
| About-section photos               | `public/images/02-about/`              |
| Campus Life gallery photos         | `public/images/03-campus-life/`        |
| Enquiry-form header photo          | `public/images/05-admissions/`         |
| School logo                        | `public/images/logo.png`               |
| Phone / email / address / socials  | `lib/data.ts` (ask developer if unsure)|

---

## Golden rules

1. **File names must match exactly** — lowercase, no spaces,
   ends in `.jpg` (for photos).
2. **One change at a time** — upload, commit, check the site,
   then do the next one. Easier to spot problems.
3. **Never delete folders** — only replace files inside them.
4. If something breaks, don't panic — every change is saved in
   GitHub's history and your developer can restore any previous
   version in one click.
