import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default('EcomWave Team'),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
  }),
});

export const collections = { blog };
