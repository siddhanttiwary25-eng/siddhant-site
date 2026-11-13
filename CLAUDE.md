# Siddhant Tiwary — personal site

A notebook kept in public: ideas, work, creative projects, articles, songs & albums, and an about page.
Built with Astro (static site). Live at https://siddhant-site.vercel.app (Vercel project `siddhant-site`, account siddhanttiwary25-eng). Code: private repo github.com/siddhanttiwary25-eng/siddhant-site. Deploys are by hand from this folder: `npx vercel --prod` (the repo is not hooked up to auto-deploy). Push with the personal account: `GH_TOKEN=$(gh auth token -u siddhanttiwary25-eng) git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push`; never switch the global gh account.

## Working with Siddhant
- Ask before assuming anything about content, layout or wording. Offer options when a choice is open.
- Explain in plain language with short paragraphs; he is learning as he builds.
- Never push, deploy or post anything without asking first.

## Commands
- `npm install` — install
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — production build into `dist/` (run before every commit to catch errors)

## Where things live
- `src/data/site.ts` — name, top links (Twitter, Contact, GitHub), the "Lately…" sentence, the six sections and their monkeys, the source note.
- `src/data/pages.ts` — Work (resume format: company · place · dates, role title, italic one-line company description, bullets copied from his resume), Creative projects, Articles, Songs & albums content. Articles has two lists: `myArticles` ("My articles", hidden on the page for now) and `readArticles` ("Recently read"); an entry's `id` is the anchor the home "Lately…" sentence can link to. `[brackets]` = placeholders still to fill. Songs & albums has three parts: Albums (cover + "Songs I liked" list), Playlists, and "Songs I can’t get out of my head"; covers live in `public/covers/` and are the real album art.
- `src/content/ideas/*.md` — one file per idea (150–200 words). Frontmatter: title, date, summary, references, draft.
- `src/pages/` — one file per page. `src/layouts/Section.astro` is the shared section-page layout.
- `src/styles/global.css` — all styling.
- `public/heads/*.webp` — the published pictures (whole monkeys). Generated, don't edit by hand.
- `heads-src/plates/*.png` — the cut-outs from old natural-history plates. Add/edit here, then run `python3 tools/printlook.py` to regenerate `public/heads/`. (`heads-src/clean/` is for modern photos, which get a fake vintage-print look; none in use now.)
- `src/data/credits.ts` — per monkey: magazine caption, source book, licence, link.
- `src/components/Head.astro` (head + caption), `HeadSpread.astro` (the scattered heads half of a spread: 6, 10 or 16 heads), `Folio.astro` (page numbers).
- `heads-unused/` — retired picture sets (old luchador scans, luchador photos, monkey photos). Kept for reference, never published.

## Design rules (keep these)
- One typeface everywhere: Newsreader (serif). No second font.
- The site is a magazine (reference: *Colors* magazine spreads). White page, near-black ink (#111), grey #555 for secondary text. No accent colours, no gradients, no shadows.
- The pictures are small, whole monkeys of different species, cut out of real hand-coloured plates from old natural-history books (Schreber's *Die Säugthiere*, 1774–1846; Elliot's *A Review of the Primates*, 1913). Public domain, published as they are (they are genuinely vintage). Keep the branch/log/grass they sit on. Never mix in modern photos.
- No rounded corners on buttons or tags.
- Home page is a field-guide contents page: name top-left, links top-right; the centred "Lately…" standfirst (no kicker); then all SIX sections side by side in one row (three per row on phones). The section names are the focus: big Newsreader names (with the section's page number above, a rule over them), each monkey above its name, and only a tiny italic grey caption ("Pl. I · Golden lion tamarin") above the monkey. Never make the captions or monkey names prominent on the home page. Folio at the foot: "01", the italic source note ending in a "Picture credits" link, "Contents".
- Home monkeys lean slightly toward the cursor (desktop only). No underline or lift when hovering a home button. All motion off under prefers-reduced-motion.
- Section pages follow a magazine spread: heads fill one half (alternating left/right page to page), text the other.
  The heads are scattered like a magazine layout, not lined up: one big hero, then the rest placed at staggered heights with generous white space (layouts in `HeadSpread.astro`: each head is placed by % of the column, which is exactly as tall as the writing beside it, min 860px; mirrored pages flip it). Adding monkeys must never make a page longer: all of them sit beside the text, never in a band below it. Never put the small heads back in an evenly spaced row.
  Monkey counts: section pages 10, Ideas 16, idea posts 6 (+ thread thumbnails), 404 two. Captions sit just above each picture box. Heads are upright (no random tilts). The hero's caption lines up with the kicker above the title.
- Only use pictures that are fully there: the whole animal, nothing cut off or touching the image edge. Current set (26): home = golden-lion-tamarin (Ideas), orangutan (Work), red-bellied-guenon (Creative), lion-tailed-macaque (Articles), red-tailed-monkey (Songs & albums), common-marmoset (About); spares = red-handed-tamarin, macacus-libidinosus, moloneys-monkey, lhoests-monkey, black-headed-uakari, silvery-marmoset, plus andaman-macaque, monk-saki, mandrill, hamadryas-baboon, proboscis-monkey, spot-nosed-monkey, red-shanked-douc, red-howler, tufted-capuchin, cotton-top-tamarin, king-colobus, grey-woolly-monkey, bearded-saki, black-tufted-marmoset. Species names come from the labels printed on the plates. Never use anything from `heads-unused/`.
- Every picture needs a line in `src/data/credits.ts` (source book, Latin name from the plate, licence, link). Its position in that list is its plate number (Pl. I, II, …), shown in italics at the start of every caption. `/credits` is the field-guide "List of plates" (4-column grid: picture, Pl. number, common name, italic Latin name, source) and the home folio links to it.
- Every page belongs to the same field guide: kicker + big Newsreader title, captions with plate numbers, folios at the foot. Empty picture slots (project previews, album covers, song thumbnails) are double-ruled plate frames with an italic "Plate to come" / "Cover to come", never grey dashed web boxes. The 404 is "Page 404 · Plate missing" with the mid-stride Macacus libidinosus.
- Each section uses its own home-page head as the hero; secondary and small heads come from the other whole heads, with no head repeated on the same page.
- Magazine furniture on section pages: small uppercase kicker above the title, folio at the foot ("02" left, "Ideas 03" right). Never use "The Notebook" or "Issue 01" as a masthead, running head or folio text. Spread page numbers: Ideas 2, Work 4, Creative 6, Articles 8, Songs & albums 10, About 12, Credits 14, Contact 16.
- `/contact`: name, email and message fields; Send opens the visitor's email app addressed to `site.email` (siddhanttiwary25@gmail.com). No form service yet.
- Every head on a section page has a small caption printed above it (bold uppercase name + one line, from `credits.ts`).
- Drop cap on the first paragraph of essays (idea posts, first idea on /ideas) only.
- Phone: the home spread stacks (standfirst, then the five monkeys in a staggered two-column grid, then the Creative monkey); section pages show the scatter above the text, with five pictures (hero + four small, the rest hidden) so the writing starts soon.
