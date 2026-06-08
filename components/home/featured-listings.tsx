import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { featuredListings } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

export function FeaturedListings() {
  return (
    <section id="featured-listings" className="section-y bg-[var(--background)]">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Current estate phases
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              Land options with clear entry points.
            </h2>
          </div>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, please send me the current estate phase details."
            )}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-white px-5 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
          >
            Request full price list
            <ArrowRight aria-hidden size={17} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.id}
              className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-white"
            >
              <div className="relative aspect-[16/11] shrink-0 bg-[var(--surface-soft)]">
                <Image
                  src={listing.image.src}
                  alt={listing.image.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-white px-3 py-2 text-xs font-semibold text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.08)]">
                  {listing.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
                  {formatNaira(listing.price)}
                </p>
                <h3 className="mt-2 text-wrap font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[var(--navy)]">
                  {listing.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                  <MapPin aria-hidden size={16} />
                  {listing.location}
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  {listing.description}
                </p>
                <a
                  href={createWhatsAppUrl(
                    `Hello Fosh Estate, I want details about ${listing.title} in ${listing.location}.`
                  )}
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--navy)] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
                >
                  Ask about {listing.phase}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
