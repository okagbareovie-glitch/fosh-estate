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
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
