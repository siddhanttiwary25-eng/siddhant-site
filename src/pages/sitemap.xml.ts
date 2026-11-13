import { getCollection } from 'astro:content';

// Lists every public page so search engines can find them.
export async function GET({ site }: { site: URL }) {
  const ideas = await getCollection('ideas', ({ data }) => !data.draft);
  const paths = ['/', '/ideas', '/work', '/creative', '/articles', '/music', '/about', '/contact', '/credits', ...ideas.map((i) => `/ideas/${i.id}`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
