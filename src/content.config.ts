import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/placeholder" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    srcPreview: z.string(),
    altPreview: z.string()
  })
});

export const collections = { posts };