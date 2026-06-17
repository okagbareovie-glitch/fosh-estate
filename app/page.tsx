import type { Metadata } from "next";
import {
  AmenitiesSection,
  AreasSection,
  FeaturedListings,
  FinalCta,
  HeroSection,
  ServicesSection,
  SiteFooter,
  TrustStrip,
} from "@/components/home";
import { getHomepageContent } from "@/sanity/lib/homepage";
import { getFeaturedListings, getStateCount } from "@/sanity/lib/listings";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = pageMetadata({
  title: "Secure Land Investment in Nigeria",
  description:
    "Own estate land with clearer pricing, guided site inspections, and practical buyer support from Fosh Estate.",
  path: "/",
});

export default async function Home() {
  const [homepageContent, listings, stateCount] = await Promise.all([
    getHomepageContent(),
    getFeaturedListings(),
    getStateCount(),
  ]);

  return (
    <>
      <main>
        <HeroSection content={homepageContent} statesCovered={stateCount} />
        <TrustStrip />
        <FeaturedListings listings={listings} />
        <AmenitiesSection />
        <AreasSection />
        <ServicesSection />
        <FinalCta content={homepageContent} />
      </main>
      <SiteFooter />
    </>
  );
}
