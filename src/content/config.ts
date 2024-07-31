import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    tags: z.array(z.string()).default(['others']),
    heroImage: z.string().optional(),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    author: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),

    categories: z.array(z.string()).default(['others']),
  }),
});

export const collections = { blog };
