import type { SchemaTypeDefinition } from "sanity";

export const caseStudy: SchemaTypeDefinition = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Product Design", value: "Product Design" },
          { title: "UX Design", value: "UX Design" },
          { title: "Product Strategy", value: "Product Strategy" },
          { title: "Design System", value: "Design System" },
        ],
      },
    },
    {
      name: "year",
      title: "Año",
      type: "string",
    },
    {
      name: "client",
      title: "Cliente",
      type: "string",
    },
    {
      name: "role",
      title: "Rol",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "summary",
      title: "Resumen",
      type: "text",
      rows: 3,
    },
    {
      name: "coverImage",
      title: "Imagen de portada",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Contenido",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Descripcion" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
};
