import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const announcements = defineCollection({
  loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    summary: z.string(),
  }),
});

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    eventDate: z.coerce.date(),
    location: z.string().optional(),
    description: z.string(),
    registrationUrl: z.string().optional(),   // link out to a Smartsheet form
  }),
});

export const collections = { blog, announcements, events };