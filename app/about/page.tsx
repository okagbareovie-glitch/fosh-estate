import type { Metadata } from "next";
import {
  AboutHero,
  FounderSection,
  MissionSection,
  PrinciplesSection,
  StorySection,
} from "@/components/about";
import { FinalCta, SiteFooter, SiteHeader } from "@/components/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn how Fosh Estate helps Nigerian land buyers move with clarity, buyer guidance, and practical inspection support before payment.",
  path: "/about",
});

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
