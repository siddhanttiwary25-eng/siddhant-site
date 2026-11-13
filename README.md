# siddhant-tiwary-site

My personal site — a notebook kept in public. Built with [Astro](https://astro.build).

## Run it on your computer

You need Node.js 22 or newer (`node -v` to check).

```bash
npm install      # once
npm run dev      # then open http://localhost:4321
```

## Edit content

| What | Where |
|---|---|
| Name, top links, "Lately…" sentence, home heads | `src/data/site.ts` |
| Work, creative projects, articles, songs & albums | `src/data/pages.ts` |
| Ideas (one markdown file each) | `src/content/ideas/` |
| Styling | `src/styles/global.css` |
| Images | `public/heads/` (only sharp, whole heads; old scans live in `heads-unused/`) |

Anything in `[brackets]` is a placeholder to replace.

## Put it online (Vercel)

1. Create an empty repository on GitHub and push this folder to it:
   ```bash
   git init && git add -A && git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New… → Project** → import the repository. Vercel detects Astro; keep the defaults and click **Deploy**.
3. Every push to `main` now updates the live site. Add your own domain under **Project → Settings → Domains**, then set `site` in `astro.config.mjs` to that domain.

## Credits
Luchador heads cut out of photos from Wikimedia Commons; photographers and licences are listed at `/credits` (`src/data/credits.ts`).
