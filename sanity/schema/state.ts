import { defineField, defineType } from "sanity";

export const state = defineType({
  name: "state",
  title: "State",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "State Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 80,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Buyer Summary",
      type: "text",
      rows: 3,
      description:
        "Optional summary for maps, operating areas, and buyer-facing context.",
    }),
    defineField({
      name: "coordinates",
      title: "Map Coordinates",
      type: "geopoint",
      description: "Optional central coordinates for future map views.",
    }),
    defineField({
      name: "featured",
      title: "Show as Operating Area",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "summary",
    },
  },
});
