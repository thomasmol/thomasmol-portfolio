import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date({ coerce: true }),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date({ coerce: true }),
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    rating: z.number().optional(),
    readingStatus: z.enum(["read", "reading", "to-read"]).optional(),
    status: z.enum(["published", "draft"]),
    publishedAt: z.date({ coerce: true }),
  }),
});

export const collections = {
  projects,
  notes,
  books,
};
