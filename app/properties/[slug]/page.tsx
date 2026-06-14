import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PropertyDetailHero,
  PropertyDetailSections,
} from "@/components/properties/property-detail";
import { SiteFooter, SiteHeader } from "@/components/home";
import { listingJsonLd, listingMetadata } from "@/lib/seo";
import {
  getListingBySlug,
  getListingSlugs,
} from "@/sanity/lib/listings";

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return getListingSlugs();
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    return {
      title: "Property not found",
    };
  }

  return listingMetadata(listing);
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(listingJsonLd(listing)),
          }}
        />
        <PropertyDetailHero listing={listing} />
        <PropertyDetailSections listing={listing} />
      </main>
      <SiteFooter />
    </>
  );
}
