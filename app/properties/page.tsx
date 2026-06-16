import type { Metadata } from "next";
import { PropertiesHero, PropertiesListings, PropertiesTrust } from "@/components/properties";
import { SiteFooter, SiteHeader } from "@/components/home";
import { getAllListings, getStateNames } from "@/sanity/lib/listings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Properties",
  description:
    "Compare current Fosh Estate land listings, prices, locations, media, and inspection options before you make a buying decision.",
  path: "/properties",
});

export const revalidate = 60;

export default async function PropertiesPage() {
  const [listings, stateNames] = await Promise.all([
    getAllListings(),
    getStateNames(),
  ]);

  return (
    <>
      <SiteHeader />
      <main>
        <PropertiesHero listings={listings} stateNames={stateNames} />
        <PropertiesListings listings={listings} />
        <PropertiesTrust />
      </main>
      <SiteFooter />
    </>
  );
}
