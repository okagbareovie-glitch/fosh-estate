import {
  AmenitiesSection,
  AreasSection,
  FeaturedListings,
  FinalCta,
  HeroSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  TrustStrip,
} from "@/components/home";
import { getFeaturedListings } from "@/sanity/lib/listings";

export const revalidate = 60;

export default async function Home() {
  const listings = await getFeaturedListings();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection listings={listings} />
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
