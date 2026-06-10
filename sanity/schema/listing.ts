import { defineField, defineType } from "sanity";

const statuses = ["Available", "Selling Fast", "New Launch", "Sold"] as const;
const propertyTypes = ["Land", "Property"] as const;

export const listing = defineType({
  name: "listing",
  title: "Property Listing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Specific Address / Area",
      type: "string",
      description:
        "Examples: Ayetoro, off Redeem; Ashipa community; Lekki corridor.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "reference",
      to: [{ type: "state" }],
      description: "Select the state where this listing is located.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "Available",
      options: {
        list: statuses.map((status) => ({ title: status, value: status })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Property Type",
      type: "string",
      initialValue: "Land",
      options: {
        list: propertyTypes.map((type) => ({ title: type, value: type })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Card Summary",
      type: "text",
      rows: 3,
      description:
        "Optional short preview shown on listing cards and search results. Use the full Description for the property detail page.",
    }),
    defineField({
      name: "featured",
      title: "Feature on Home Page",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      initialValue: 100,
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Gallery Image",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "alt",
              media: "image",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "videoGallery",
      title: "Video Gallery",
      type: "array",
      of: [
        defineField({
          name: "listingVideo",
          title: "Listing Video",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "video",
              title: "Video File",
              type: "file",
              description:
                "Upload a short property video. MP4, WebM, and MOV files are recommended.",
              options: {
                accept: "video/mp4,video/webm,video/quicktime",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "poster",
              title: "Video Poster Image",
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Poster Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: "alt",
                  title: "Poster Alt Text",
                  type: "string",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "video.asset.originalFilename",
              media: "poster.image",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "state.name",
      media: "imageGallery.0.image",
    },
  },
});
