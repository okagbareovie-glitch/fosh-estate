import type { Metadata } from "next";
import {
  ContactChannels,
  ContactFormSection,
  ContactHero,
  MapSection,
} from "@/components/contact";
import { SiteFooter, SiteHeader } from "@/components/home";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Fosh Estate to ask about available estate land, book an inspection, or speak with the team.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactChannels />
        <ContactFormSection />
        <MapSection />
      </main>
      <SiteFooter />
    </>
  );
}
