"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/format";
import { ListingCard } from "@/components/properties/listing-card";
import { PaginationControls } from "@/components/ui/pagination-controls";

const FEATURED_LISTINGS_PER_PAGE = 6;

export function FeaturedListings({ listings }: { listings: Listing[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(listings.length / FEATURED_LISTINGS_PER_PAGE)
  );
  const visibleListings = useMemo(() => {
    const startIndex = (currentPage - 1) * FEATURED_LISTINGS_PER_PAGE;
    return listings.slice(startIndex, startIndex + FEATURED_LISTINGS_PER_PAGE);
  }, [currentPage, listings]);

  return (
    <section id="featured-listings" className="section-y bg-[var(--background)]">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Available estate land
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              Compare current land options before you book an inspection.
            </h2>
          </div>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, please send me the current land price list and inspection details."
            )}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-white px-5 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
          >
            Request current price list
            <ArrowRight aria-hidden size={17} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              ctaLabel="Ask about this land"
            />
          ))}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={listings.length}
          pageSize={FEATURED_LISTINGS_PER_PAGE}
          onPageChange={setCurrentPage}
          itemLabel="featured listings"
        />
      </div>
    </section>
  );
}
