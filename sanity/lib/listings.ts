import type { Listing, ListingMedia, ListingStatus } from "@/data/site";
import { featuredListings } from "@/data/site";
import { hasSanityConfig } from "../env";
import { client } from "./client";
import {
  featuredListingsQuery,
  listingBySlugQuery,
  listingSlugsQuery,
  listingsQuery,
} from "./queries";
import { urlForImage } from "./image";

type SanityListing = {
  _id: string;
  title?: string;
  slug?: string;
  address?: string;
  state?: string;
  price?: number;
  status?: ListingStatus | "Sold";
  type?: "Land" | "Property";
  description?: string;
  summary?: string;
  featured?: boolean;
  amenities?: string[];
  sellingPoints?: string[];
  coordinates?: {
    lat?: number;
    lng?: number;
  };
  image?: SanityImageItem;
  imageGallery?: SanityImageItem[];
  videoGallery?: SanityVideoItem[];
};

type SanityImageItem = {
  _key?: string;
  alt?: string;
  image?: unknown;
};

type SanityVideoItem = {
  _key?: string;
  title?: string;
  url?: string;
  poster?: SanityImageItem;
};

function getSafeStatus(status: SanityListing["status"]): ListingStatus {
  if (status === "Selling Fast" || status === "New Launch") {
    return status;
  }

  return "Available";
}

function getImageUrl(item?: SanityImageItem): string | undefined {
  if (!item?.image) return undefined;

  return urlForImage(item.image).width(1600).height(1100).fit("crop").url();
}

function formatPlaceName(location?: string): string {
  const trimmedLocation = location?.trim();
  if (!trimmedLocation) return "Location pending";

  if (
    trimmedLocation === trimmedLocation.toLowerCase() ||
    trimmedLocation === trimmedLocation.toUpperCase()
  ) {
    return trimmedLocation
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return trimmedLocation;
}

function mapSanityListing(document: SanityListing): Listing | null {
  if (!document.title || !document.slug) return null;

  const firstImage = document.imageGallery?.[0] || document.image;
  const primaryImageUrl = getImageUrl(firstImage);
  const fallbackImage = featuredListings[0]?.image.src || "/media/estate-phase-1.svg";

  const imageGallery: ListingMedia[] =
    document.imageGallery
      ?.map((item, index): ListingMedia | null => {
        const src = getImageUrl(item);
        if (!src) return null;

        return {
          id: item._key || `${document._id}-image-${index}`,
          type: "image",
          src,
          alt: item.alt || `${document.title} image ${index + 1}`,
        };
      })
      .filter((item): item is ListingMedia => Boolean(item)) || [];

  const videoGallery: ListingMedia[] =
    document.videoGallery
      ?.filter((item) => Boolean(item.url))
      .map((item, index): ListingMedia => {
        const poster = getImageUrl(item.poster);

        return {
          id: item._key || `${document._id}-video-${index}`,
          type: "video",
          src: item.url || "",
          title: item.title || `${document.title} video ${index + 1}`,
          poster,
        };
      }) || [];

  return {
    id: document._id,
    title: document.title,
    address: formatPlaceName(document.address),
    state: formatPlaceName(document.state),
    location:
      document.address && document.state
        ? `${formatPlaceName(document.address)}, ${formatPlaceName(document.state)}`
        : formatPlaceName(document.address || document.state),
    price: document.price || 0,
    status: getSafeStatus(document.status),
    type: document.type === "Property" ? "Property" : "Land",
    description:
      document.summary || document.description || "Property details pending.",
    image: {
      src: primaryImageUrl || fallbackImage,
      alt: firstImage?.alt || `${document.title} property image`,
    },
    media:
      imageGallery.length > 0 || videoGallery.length > 0
        ? [...imageGallery, ...videoGallery]
        : [
            {
              id: `${document._id}-fallback-image`,
              type: "image",
              src: primaryImageUrl || fallbackImage,
              alt: firstImage?.alt || `${document.title} property image`,
            },
          ],
    videoUrl: videoGallery[0]?.type === "video" ? videoGallery[0].src : undefined,
    slug: document.slug,
  };
}

function mapListings(documents: SanityListing[]): Listing[] {
  return documents
    .map((document) => mapSanityListing(document))
    .filter((listing): listing is Listing => Boolean(listing));
}

export async function getAllListings(): Promise<Listing[]> {
  if (!hasSanityConfig) {
    return featuredListings;
  }

  try {
    const listings = await client.fetch<SanityListing[]>(listingsQuery, {});
    const mappedListings = mapListings(listings);
    return mappedListings.length > 0 ? mappedListings : featuredListings;
  } catch {
    return featuredListings;
  }
}

export async function getFeaturedListings(): Promise<Listing[]> {
  if (!hasSanityConfig) {
    return featuredListings;
  }

  try {
    const listings = await client.fetch<SanityListing[]>(
      featuredListingsQuery,
      {}
    );
    const mappedListings = mapListings(listings);
    return mappedListings.length > 0 ? mappedListings : featuredListings;
  } catch {
    return featuredListings;
  }
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  if (!hasSanityConfig) {
    return featuredListings.find((listing) => listing.slug === slug) || null;
  }

  try {
    const listing = await client.fetch<SanityListing | null>(listingBySlugQuery, {
      slug,
    });
    const mappedListing = listing ? mapSanityListing(listing) : null;
    return (
      mappedListing ||
      featuredListings.find((fallbackListing) => fallbackListing.slug === slug) ||
      null
    );
  } catch {
    return featuredListings.find((listing) => listing.slug === slug) || null;
  }
}

export async function getListingSlugs(): Promise<{ slug: string }[]> {
  if (!hasSanityConfig) {
    return featuredListings.map((listing) => ({ slug: listing.slug }));
  }

  try {
    const slugs = await client.fetch<{ slug?: string }[]>(listingSlugsQuery, {});
    const validSlugs = slugs.filter(
      (item): item is { slug: string } => typeof item.slug === "string"
    );

    return validSlugs.length > 0
      ? validSlugs
      : featuredListings.map((listing) => ({ slug: listing.slug }));
  } catch {
    return featuredListings.map((listing) => ({ slug: listing.slug }));
  }
}
