import type { Metadata } from "next";
import { PropertiesHero, PropertiesListings, PropertiesTrust } from "@/components/properties";
import { SiteFooter, SiteHeader } from "@/components/home";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Explore current Fosh Estate land phases, prices, locations, amenities, and inspection enquiry options.",
};

export default function PropertiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PropertiesHero />
        <PropertiesListings />
        <PropertiesTrust />
      </main>
      <SiteFooter />
    </>
  );
}
