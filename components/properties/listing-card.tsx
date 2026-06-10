"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import type { Listing, ListingStatus } from "@/data/site";
import { createWhatsAppUrl, formatCompactNaira } from "@/lib/format";

const statusStyles: Record<ListingStatus, string> = {
  Available: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Selling Fast": "border-amber-200 bg-amber-50 text-amber-800",
  "New Launch": "border-sky-200 bg-sky-50 text-sky-800",
};

const typeStyles: Record<Listing["type"], string> = {
  Land: "border-[#b9dcff] bg-[#e8f3ff] text-[var(--blue)]",
  Property: "border-violet-200 bg-violet-50 text-violet-800",
};

type ListingCardProps = {
  listing: Listing;
  ctaLabel?: string;
};

export function ListingCard({
  listing,
  ctaLabel = "Ask about this land",
}: ListingCardProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = useMemo(
    () =>
      listing.media
        .filter((item) => item.type === "image")
        .map((item) => ({
          src: item.src,
          alt: item.alt,
          id: item.id,
        })),
    [listing.media]
  );
  const gallery = images.length > 0 ? images : [{ ...listing.image, id: listing.id }];
  const activeImage = gallery[imageIndex] || gallery[0];
  const enquiryUrl = createWhatsAppUrl(
    `Hello Fosh Estate, I want details about ${listing.title} in ${listing.location}.`
  );

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[0_18px_45px_rgba(17,28,44,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(0,116,217,0.45)] hover:shadow-[0_24px_70px_rgba(17,28,44,0.13)]">
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-[rgba(0,116,217,0.28)]" />
      </div>

      <div className="relative aspect-[16/11] shrink-0 overflow-hidden bg-[var(--surface-soft)]">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_40%,rgba(3,8,22,0.18)_100%)]" />

        <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between gap-3">
          <span
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] shadow-[0_8px_18px_rgba(17,28,44,0.08)] ${
              statusStyles[listing.status]
            }`}
          >
            {listing.status}
          </span>
          <span
            className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] shadow-[0_8px_18px_rgba(17,28,44,0.08)] ${
              typeStyles[listing.type]
            }`}
          >
            {listing.type}
          </span>
        </div>

        {gallery.length > 1 ? (
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Show image ${index + 1} for ${listing.title}`}
                onClick={(event) => {
                  event.preventDefault();
                  setImageIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  index === imageIndex
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5 text-[var(--ink)]">
        <div className="flex items-baseline gap-2">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-normal text-[var(--blue)]">
            {formatCompactNaira(listing.price)}
          </p>
          <span className="text-xs font-medium text-[var(--muted)]">
            listed price
          </span>
        </div>

        <h3 className="mt-3 text-wrap font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[var(--navy)]">
          {listing.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
          <MapPin aria-hidden className="text-[var(--blue)]" size={16} />
          <span>{listing.location}</span>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
          {listing.summary || listing.description}
        </p>

        <div className="mt-5 h-px bg-[var(--line)]" />

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/properties/${listing.slug}`}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-5 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--blue)]"
          >
            View land details
          </Link>
          <a
            href={enquiryUrl}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--blue)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--blue-bright)]"
          >
            {ctaLabel}
            <ArrowRight aria-hidden size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
