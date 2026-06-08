import type { Metadata } from "next";
import {
  AboutHero,
  FounderSection,
  MissionSection,
  PrinciplesSection,
  StorySection,
} from "@/components/about";
import { FinalCta, SiteFooter, SiteHeader } from "@/components/home";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Fosh Estate, a Nigerian real estate brand helping families and investors secure prime estate land with confidence.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <StorySection />
        <MissionSection />
        <PrinciplesSection />
        <FounderSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
