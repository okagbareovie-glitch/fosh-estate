import { defineField, defineType } from "sanity";

export const homepageContent = defineType({
  name: "homepageContent",
  title: "Homepage Content",
  type: "document",
  initialValue: {
    heroSubtext:
      "Fosh Estate helps families and investors secure estate land with transparent pricing, guided site inspections, and support at every step before you commit a naira.",
    heroPrimaryButtonText: "Book a site inspection",
    heroSecondaryButtonText: "See current listings",
    heroActiveEstatesValue: "10+",
    finalCtaHeadingLine: "Your plot is waiting.",
    finalCtaHeadingEmphasis: "Speak to us today.",
    finalCtaBody:
      "Get current availability, pricing, payment plans, and title information directly from the Fosh Estate team. We inspect together, no guesswork, no middlemen.",
  },
  fields: [
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
      rows: 4,
      description:
        "The short paragraph under the homepage headline. Keep it buyer-focused, clear, and not too long.",
      validation: (Rule) =>
        Rule.max(260).warning("Shorter hero copy is easier to read on mobile."),
    }),
    defineField({
      name: "heroPrimaryButtonText",
      title: "Hero Primary Button Text",
      type: "string",
      description:
        "This button opens WhatsApp, so use enquiry or inspection wording. Good: 'Book a site inspection'. Avoid: 'See listings'.",
      validation: (Rule) =>
        Rule.max(28).warning("Short button text protects the mobile layout."),
    }),
    defineField({
      name: "heroSecondaryButtonText",
      title: "Hero Secondary Button Text",
      type: "string",
      description:
        "This button scrolls to the current listings section on the homepage, so use listing-related wording.",
      validation: (Rule) =>
        Rule.max(30).warning("Short button text protects the mobile layout."),
    }),
    defineField({
      name: "heroActiveEstatesValue",
      title: "Active Estates Value",
      type: "string",
      description:
        "Short value only, for example '10+', '12+', or '15'. This appears above the 'Active estates' label.",
      validation: (Rule) =>
        Rule.max(8).warning("Use a short stat value such as '10+' or '15'."),
    }),
    defineField({
      name: "finalCtaHeadingLine",
      title: "Final CTA Heading Line",
      type: "string",
      description:
        "The first line of the closing homepage CTA. Keep it direct and action-oriented.",
      validation: (Rule) =>
        Rule.max(60).warning("Shorter headings look stronger on mobile."),
    }),
    defineField({
      name: "finalCtaHeadingEmphasis",
      title: "Final CTA Emphasis Line",
      type: "string",
      description:
        "The highlighted gold line in the closing CTA. Use a short phrase that encourages enquiry.",
      validation: (Rule) =>
        Rule.max(60).warning("Shorter emphasis text keeps the section polished."),
    }),
    defineField({
      name: "finalCtaBody",
      title: "Final CTA Body Text",
      type: "text",
      rows: 4,
      description:
        "Closing enquiry copy. Mention useful next steps such as availability, pricing, payment plans, title information, or inspection support.",
      validation: (Rule) =>
        Rule.max(260).warning("Keep this concise so the CTA stays easy to scan."),
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Homepage Content",
      subtitle: "Editable homepage copy",
    }),
  },
});
