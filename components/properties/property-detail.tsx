import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Fence,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";
import { PropertyMediaCarousel } from "./property-media-carousel";

const detailHighlights = [
  "Secure title focus",
  "Inspection support",
  "Estate infrastructure",
  "Buyer guidance",
];

const detailAmenities = [
  { label: "Good road network", icon: Building2 },
  { label: "Gated and secured estate", icon: Fence },
  { label: "Street lights and electricity", icon: Lightbulb },
  { label: "Green areas and landscaping", icon: Sprout },
  { label: "24/7 security and surveillance", icon: ShieldCheck },
  { label: "Drainage planning", icon: BadgeCheck },
];

export function PropertyDetailHero({ listing }: { listing: Listing }) {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative py-10 md:py-14 lg:py-18">
        <Link
          href="/properties"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--line)] bg-white px-4 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
        >
          <ArrowLeft aria-hidden size={16} />
          Back to properties
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              {listing.status} · {listing.type}
            </p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl">
              {listing.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-base text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden size={18} />
                {listing.location}
              </span>
              <span className="text-[var(--line-strong)]">/</span>
              <span>{listing.phase}</span>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {listing.description} This detail page gives buyers a clearer
              view of the phase, the investment case, expected amenities, and
              the next step for inspection.
            </p>
          </div>

          <aside className="border border-[var(--line)] bg-white p-5 surface-shadow lg:sticky lg:top-24">
            <p className="text-sm text-[var(--muted)]">Starting price</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--navy)]">
              {formatNaira(listing.price)}
            </p>
            <div className="mt-5 grid gap-3 border-y border-[var(--line)] py-5">
              <Fact label="Location" value={listing.location} />
              <Fact label="Phase" value={listing.phase} />
              <Fact label="Current status" value={listing.status} />
              <Fact label="Property type" value={listing.type} />
            </div>
            <a
              href={createWhatsAppUrl(
                `Hello Fosh Estate, I want more details and inspection information for ${listing.title} in ${listing.location}.`
              )}
              className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Enquire about this land
              <ArrowRight aria-hidden size={17} />
            </a>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <PropertyMediaCarousel listing={listing} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {detailHighlights.map((highlight) => (
              <div
                key={highlight}
                className="border border-[var(--line)] bg-white p-5"
              >
                <BadgeCheck aria-hidden className="text-[var(--blue)]" size={22} />
                <p className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PropertyDetailSections({ listing }: { listing: Listing }) {
  return (
    <>
      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Why this phase
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              Built for buyers who want clarity before commitment.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">
              {listing.title} should be reviewed through the things that matter
              most in land ownership: title, location, access, infrastructure,
              and long-term use.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {detailAmenities.map((amenity) => {
              const Icon = amenity.icon;

              return (
                <article key={amenity.label} className="bg-white p-6">
                  <Icon aria-hidden className="text-[var(--blue)]" size={25} />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                    {amenity.label}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--navy)] py-16 text-white md:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[#afc8f0]">
              Next step
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
              Ask for allocation details, title information, and inspection
              dates.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#d4e3ff]">
              Prices and availability can change. Confirm current details with
              the Fosh Estate team before making payment decisions.
            </p>
          </div>
          <a
            href={createWhatsAppUrl(
              `Hello Fosh Estate, please send me the current details for ${listing.title}.`
            )}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-white px-6 text-base font-semibold text-[var(--navy)] transition-colors duration-200 hover:bg-[#d4e3ff]"
          >
            Request current details
            <ArrowRight aria-hidden size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="text-right text-sm font-semibold text-[var(--navy)]">
        {value}
      </p>
    </div>
  );
}
