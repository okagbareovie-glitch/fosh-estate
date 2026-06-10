import type { Metadata } from "next";
import { PropertiesHero, PropertiesListings, PropertiesTrust } from "@/components/properties";
import { SiteFooter, SiteHeader } from "@/components/home";
import { getAllListings } from "@/sanity/lib/listings";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Compare current Fosh Estate land listings, prices, locations, and inspection options before you make a buying decision.",
};

export const revalidate = 60;

export default async function PropertiesPage() {
  const listings = await getAllListings();

  return (
    <>
      <SiteHeader />
      <main>
        <PropertiesHero listings={listings} />
        <PropertiesListings listings={listings} />
        <PropertiesTrust />
      </main>
      <SiteFooter />
    </>
  );
}
