"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, MapPin, RotateCcw, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { featuredListings } from "@/data/site";
import type { ListingStatus } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

type BudgetFilter = "all" | "starter" | "mid" | "premium";
type LocationFilter = "all" | "Ayetoro" | "Ashipa";
type StatusFilter = "all" | ListingStatus;

const budgetLabels: Record<BudgetFilter, string> = {
  all: "All budgets",
  starter: "Up to ₦1M",
  mid: "₦1M - ₦5M",
  premium: "Above ₦5M",
};

function matchesBudget(price: number, budget: BudgetFilter) {
  if (budget === "starter") return price <= 1000000;
  if (budget === "mid") return price > 1000000 && price <= 5000000;
  if (budget === "premium") return price > 5000000;
  return true;
}

export function PropertiesListings() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState<LocationFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [budget, setBudget] = useState<BudgetFilter>("all");

  const filteredListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return featuredListings.filter((listing) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${listing.title} ${listing.phase} ${listing.location} ${listing.description}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesLocation = location === "all" || listing.location === location;
      const matchesStatus = status === "all" || listing.status === status;

      return (
        matchesQuery &&
        matchesLocation &&
        matchesStatus &&
        matchesBudget(listing.price, budget)
      );
    });
  }, [budget, location, query, status]);

  function resetFilters() {
    setQuery("");
    setLocation("all");
    setStatus("all");
    setBudget("all");
  }

  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className="border border-[var(--line)] bg-[var(--background)] p-5">
              <div className="flex items-center gap-2">
                <Filter aria-hidden className="text-[var(--blue)]" size={20} />
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  Refine listings
                </h2>
              </div>

              <div className="mt-5 grid gap-4">
                <label className="block">
                  <span className="text-sm font-semibold text-[var(--navy)]">
                    Search
                  </span>
                  <span className="relative mt-2 block">
                    <Search
                      aria-hidden
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                      size={18}
                    />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="min-h-12 w-full rounded-md border border-[var(--line-strong)] bg-white py-3 pl-10 pr-3 text-base text-[var(--ink)] placeholder:text-slate-400 focus:border-[var(--blue)]"
                      placeholder="Search phase or location"
                    />
                  </span>
                </label>

                <FilterSelect
                  label="Location"
                  value={location}
                  onChange={(value) => setLocation(value as LocationFilter)}
                  options={[
                    ["all", "All locations"],
                    ["Ayetoro", "Ayetoro"],
                    ["Ashipa", "Ashipa"],
                  ]}
                />

                <FilterSelect
                  label="Availability"
                  value={status}
                  onChange={(value) => setStatus(value as StatusFilter)}
                  options={[
                    ["all", "All statuses"],
                    ["Available", "Available"],
                    ["Selling Fast", "Selling Fast"],
                    ["New Launch", "New Launch"],
                  ]}
                />

                <FilterSelect
                  label="Budget"
                  value={budget}
                  onChange={(value) => setBudget(value as BudgetFilter)}
                  options={Object.entries(budgetLabels)}
                />
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-[var(--line-strong)] bg-white px-4 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
              >
                <RotateCcw aria-hidden size={16} />
                Reset filters
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex flex-col justify-between gap-3 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
                  {filteredListings.length} matching listings
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)]">
                  Current estate phases
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                Prices and availability should be confirmed with the Fosh Estate
                team before payment or inspection.
              </p>
            </div>

            {filteredListings.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {filteredListings.map((listing) => (
                  <article
                    key={listing.id}
                    className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-white"
                  >
                    <div className="relative aspect-[16/10] shrink-0 bg-[var(--surface-soft)]">
                      <Image
                        src={listing.image.src}
                        alt={listing.image.alt}
                        fill
                        sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-sm bg-white px-3 py-2 text-xs font-semibold text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.08)]">
                        {listing.status}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
                            {formatNaira(listing.price)}
                          </p>
                          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[var(--navy)]">
                            {listing.title}
                          </h3>
                        </div>
                        <span className="w-fit rounded-sm bg-[var(--surface-soft)] px-3 py-2 text-xs font-semibold text-[var(--navy)]">
                          {listing.type}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
                        <MapPin aria-hidden size={16} />
                        {listing.location}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                        {listing.description}
                      </p>

                      <div className="mt-5 grid gap-2 border-y border-[var(--line)] py-4 sm:grid-cols-3">
                        <PropertySpec label="Phase" value={listing.phase} />
                        <PropertySpec label="Title" value="Secure" />
                        <PropertySpec label="Use" value="Live / Invest" />
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <Link
                          href={`/properties/${listing.slug}`}
                          className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-5 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
                        >
                          View details
                        </Link>
                        <a
                          href={createWhatsAppUrl(
                            `Hello Fosh Estate, I want to book an inspection for ${listing.title} in ${listing.location}.`
                          )}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
                        >
                          Book inspection
                          <ArrowRight aria-hidden size={17} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border border-[var(--line)] bg-[var(--background)] p-8 text-center">
                <ShieldCheck aria-hidden className="mx-auto text-[var(--blue)]" size={32} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  No listing matches those filters.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Reset the filters or send Fosh Estate a WhatsApp message for
                  the latest availability.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[var(--navy)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full cursor-pointer rounded-md border border-[var(--line-strong)] bg-white px-3 text-base text-[var(--ink)] focus:border-[var(--blue)]"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function PropertySpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{value}</p>
    </div>
  );
}
