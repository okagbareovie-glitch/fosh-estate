import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PropertyDetailHero,
  PropertyDetailSections,
} from "@/components/properties/property-detail";
import { SiteFooter, SiteHeader } from "@/components/home";
import { formatNaira } from "@/lib/format";
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

  return {
    title: listing.title,
    description: `${listing.title} in ${listing.location}, listed from ${formatNaira(
      listing.price
    )}. Review land details, media, and inspection options with Fosh Estate.`,
  };
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
        <PropertyDetailHero listing={listing} />
        <PropertyDetailSections listing={listing} />
      </main>
      <SiteFooter />
    </>
  );
}
