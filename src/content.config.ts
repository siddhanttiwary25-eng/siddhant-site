import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each idea is a markdown file in src/content/ideas/. Add a new file to add a new idea.
const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    references: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { ideas };
