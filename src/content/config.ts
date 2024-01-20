import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date(),
  }),
});

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date(),
  }),
});

const booksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    rating: z.number(),
    readingStatus: z.enum(["read", "reading", "to-read"]),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'notes': notesCollection,
  'books': booksCollection,
};
