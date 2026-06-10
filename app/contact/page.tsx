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
    "Contact Fosh Estate to request current land availability, price details, inspection dates, and buyer guidance before you choose a plot.",
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
