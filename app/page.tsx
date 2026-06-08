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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeaturedListings />
        <AmenitiesSection />
        <AreasSection />
        <ServicesSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
