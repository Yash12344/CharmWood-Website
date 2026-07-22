====================================================================
        CHARMWOOD WEBSITE — HOW TO EDIT PARENT REVIEWS
====================================================================

The reviews shown in the "What families say about us" section live
in ONE file:

    content/testimonials.json

Open it in any text editor (Notepad on Windows, TextEdit on Mac).

--------------------------------------------------------------------
WHAT ONE REVIEW LOOKS LIKE
--------------------------------------------------------------------

  {
    "quote": "The teachers know each child by name, by mood, by habit.",
    "name": "Meera Joshi",
    "role": "Parent of Vihaan, Class 4",
    "photo": "parent-2.jpg"
  }

  quote  = what the parent said (keep it 1–3 sentences)
  name   = the parent's name
  role   = shown under the name, e.g. "Parent of Vihaan, Class 4"
  photo  = the FILE NAME of their photo inside
           public/images/04-testimonials/
           (leave it as "" if you don't have a photo — the site
           will show a neutral placeholder instead)

--------------------------------------------------------------------
TO ADD A NEW REVIEW
--------------------------------------------------------------------

1. Copy an existing block from { to } (including both braces)
2. Paste it after the last block
3. IMPORTANT: make sure every block except the LAST one has a
   comma after its closing brace }
4. Change the text inside the quotes
5. If you have the parent's photo, save it into
   public/images/04-testimonials/  (for example  parent-5.jpg)
   and write that file name in the "photo" line
6. Save the file

--------------------------------------------------------------------
TO REMOVE A REVIEW
--------------------------------------------------------------------

Delete the whole block from { to } — and remove the now-extra
comma if the block you deleted was the last one.

--------------------------------------------------------------------
GOLDEN RULES  (JSON is picky!)
--------------------------------------------------------------------

* Keep all the double-quote marks " exactly as they are
* Don't put a " inside the quote text — use ' instead
  Yes:  "My daughter's confidence grew"
  No:   "My daughter"s confidence grew"
* Every { } block except the last must end with a comma
* The whole file starts with [ and ends with ]

If the section ever disappears from the website after an edit,
it means the file has a typo — undo your last change or paste
the file into https://jsonlint.com to find the mistake.

--------------------------------------------------------------------
AFTER SAVING
--------------------------------------------------------------------

If the website is deployed on Vercel/Netlify via GitHub, commit and
push the change (or edit the file directly on github.com — press
the pencil icon — and it will redeploy automatically in ~2 minutes).

If you're running it locally, just refresh the browser.
====================================================================
