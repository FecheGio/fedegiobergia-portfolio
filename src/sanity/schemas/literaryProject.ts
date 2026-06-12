import type { SchemaTypeDefinition } from "sanity";

export const literaryProject: SchemaTypeDefinition = {
  name: "literaryProject",
  title: "Proyecto Literario",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "genre",
      title: "Genero",
      type: "string",
      options: {
        list: [
          { title: "Novela", value: "Novela" },
          { title: "Cuento", value: "Cuento" },
          { title: "Cronica", value: "Cronica" },
          { title: "Ensayo", value: "Ensayo" },
          { title: "Otro", value: "Otro" },
        ],
      },
    },
    {
      name: "status",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "En escritura", value: "En escritura" },
          { title: "En revision", value: "En revision" },
          { title: "Finalizado", value: "Finalizado" },
          { title: "Publicado", value: "Publicado" },
        ],
      },
    },
    {
      name: "description",
      title: "Descripcion breve",
      type: "text",
      rows: 3,
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "status" },
  },
};
