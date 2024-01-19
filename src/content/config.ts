import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublished: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const notesCollection = defineCollection({ 
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublished: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const booksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    rating: z.number(),
    readingStatus: z.enum(["read", "reading", "to-read"]),
    publishedAt: z.date(),
    description: z.string(),
    isPublished: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { projects: projectsCollection, notes: notesCollection, books: booksCollection };