import { defineConfig } from "sanity";
import { structureTool, type StructureResolver } from "sanity/structure";
import { schemaTypes } from "./sanity/schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const singletonTypes = new Set(["homepageContent"]);

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage Content")
        .id("homepageContent")
        .child(
          S.document()
            .schemaType("homepageContent")
            .documentId("homepageContent"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() || ""),
      ),
    ]);

export default defineConfig({
  name: "fosh-estate",
  title: "Fosh Estate",
  projectId: projectId || "placeholder",
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    templates: (previousTemplates) =>
      previousTemplates.filter(
        (template) => !singletonTypes.has(template.id),
      ),
  },
});
