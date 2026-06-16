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
  const [listings, stateCount] = await Promise.all([
    getFeaturedListings(),
    getStateCount(),
  ]);

  return (
    <>
      <main>
        <HeroSection statesCovered={stateCount} />
        <TrustStrip />
        <FeaturedListings listings={listings} />
        <AmenitiesSection />
        <AreasSection />
        <ServicesSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
