import type { Metadata } from "next";
import type { Listing } from "@/data/site";
import { siteConfig } from "@/data/site";
import { formatNaira } from "@/lib/format";

export const siteUrl = "https://www.foshestate.com";
export const defaultOgImage = "/media/fosh-estate-og.png";

export const defaultSeo = {
  title: "Fosh Estate | Secure Land Investment in Nigeria",
  description:
    "Fosh Estate helps families and investors secure estate land in Nigeria with clear pricing, guided inspections, and practical buyer support.",
};

export const seoKeywords = [
  "Fosh Estate",
  "land for sale in Nigeria",
  "estate land in Ogun",
  "real estate investment Nigeria",
  "land investment Nigeria",
  "property inspection Nigeria",
  "estate plots in Nigeria",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Fosh Estate`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_NG",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Fosh Estate`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Fosh Estate`,
      description,
      images: [imageUrl],
    },
  };
}

export function listingMetadata(listing: Listing): Metadata {
  const description = `${listing.title} in ${listing.location}, listed from ${formatNaira(
    listing.price
  )}. Review land details, media, and inspection options with Fosh Estate.`;

  return pageMetadata({
    title: listing.title,
    description,
    path: `/properties/${listing.slug}`,
    image: listing.image.src || defaultOgImage,
    type: "article",
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteUrl,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(defaultOgImage),
    telephone: siteConfig.phone,
    sameAs: [siteConfig.instagram],
    areaServed: ["Ogun", "Rivers", "Federal Capital Territory"],
    description: defaultSeo.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: defaultSeo.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: absoluteUrl(siteConfig.logo),
    },
  };
}

export function listingJsonLd(listing: Listing) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: listing.title,
    description: listing.description,
    image: absoluteUrl(listing.image.src),
    category: `${listing.type} listing`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: listing.price,
      priceCurrency: "NGN",
      availability:
        listing.status === "Available" || listing.status === "New Launch"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      url: absoluteUrl(`/properties/${listing.slug}`),
      itemCondition: "https://schema.org/NewCondition",
    },
    areaServed: listing.state,
  };
}
