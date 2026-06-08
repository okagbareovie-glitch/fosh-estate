import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PropertyDetailHero,
  PropertyDetailSections,
} from "@/components/properties/property-detail";
import { SiteFooter, SiteHeader } from "@/components/home";
import { featuredListings } from "@/data/site";
import { formatNaira } from "@/lib/format";

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredListings.map((listing) => ({
    slug: listing.slug,
  }));
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = featuredListings.find((item) => item.slug === slug);

  if (!listing) {
    return {
      title: "Property not found",
    };
  }

  return {
    title: listing.title,
    description: `${listing.title} in ${listing.location}, starting at ${formatNaira(
      listing.price
    )}. View details and book an inspection with Fosh Estate.`,
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const listing = featuredListings.find((item) => item.slug === slug);

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
