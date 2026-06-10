import type { Metadata } from "next";
import { PropertiesHero, PropertiesListings, PropertiesTrust } from "@/components/properties";
import { SiteFooter, SiteHeader } from "@/components/home";
import { getAllListings } from "@/sanity/lib/listings";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Explore current Fosh Estate land listings, prices, states, and inspection enquiry options.",
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
