import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "thomasmol",
      name: "thomasmol-portfolio",
    },
  },
  ui: {
    brand: {
      name: "Thomas Mol",
    },
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedAt: fields.date({ label: "Published at" }),
        description: fields.text({ label: "Description" }),
        status: fields.select({
          label: "Status",
          options: [
            {
              label: "Published",
              value: "published",
            },
            {
              label: "Draft",
              value: "draft",
            },
          ],
          defaultValue: "draft",
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
            alignment: true,
            inlineMarks: true,
          },
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/projects",
            publicPath: "../../assets/images/projects/",
          },
        }),
      },
    }),
    notes: collection({
      label: "Notes",
      slugField: "title",
      path: "src/content/notes/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedAt: fields.date({ label: "Published at" }),
        description: fields.text({ label: "Description" }),
        status: fields.select({
          label: "Status",
          options: [
            {
              label: "Published",
              value: "published",
            },
            {
              label: "Draft",
              value: "draft",
            },
          ],
          defaultValue: "draft",
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
            alignment: true,
            inlineMarks: true,
          },
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/notes",
            publicPath: "../../assets/images/notes/",
          },
        }),
      },
    }),
    books: collection({
      label: "Books",
      slugField: "title",
      path: "src/content/books/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedAt: fields.date({ label: "Published at" }),
        description: fields.text({ label: "Description" }),
        status: fields.select({
          label: "Status",
          options: [
            {
              label: "Published",
              value: "published",
            },
            {
              label: "Draft",
              value: "draft",
            },
          ],
          defaultValue: "draft",
        }),
        rating: fields.integer({
          label: "Rating",
          validation: { min: 1, max: 10 },
        }),
        readingStatus: fields.select({
          label: "Reading status",
          options: [
            {
              label: "Read",
              value: "read",
            },
            {
              label: "Reading",
              value: "reading",
            },
            {
              label: "To read",
              value: "to-read",
            },
          ],
          defaultValue: "to-read",
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            listTypes: true,
            headingLevels: true,
            blockTypes: true,
            alignment: true,
            inlineMarks: true,
          },
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/books",
            publicPath: "../../assets/images/books/",
          },
        }),
      },
    }),
  },
});
