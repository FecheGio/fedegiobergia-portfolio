import type { SchemaTypeDefinition } from "sanity";

export const review: SchemaTypeDefinition = {
  name: "review",
  title: "Resena",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Texto de la resena",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: "author",
      title: "Autor",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "source",
      title: "Fuente o medio",
      type: "string",
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "author", subtitle: "source" },
  },
};
