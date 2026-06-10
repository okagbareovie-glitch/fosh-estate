"use client";

import { Filter, RotateCcw, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import type { Listing } from "@/data/site";
import type { ListingStatus } from "@/data/site";
import { PaginationControls } from "@/components/ui/pagination-controls";
import { ListingCard } from "./listing-card";

type BudgetFilter = "all" | "starter" | "mid" | "premium";
type StatusFilter = "all" | ListingStatus;
const LISTINGS_PER_PAGE = 10;

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

export function PropertiesListings({ listings }: { listings: Listing[] }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [budget, setBudget] = useState<BudgetFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const locationOptions = useMemo(() => {
    const locations = Array.from(
      new Set(
        listings
          .map((listing) => listing.state.trim())
          .filter((listingState) => listingState.length > 0)
      )
    ).sort((firstLocation, secondLocation) =>
      firstLocation.localeCompare(secondLocation)
    );

    return [
      ["all", "All states"] as [string, string],
      ...locations.map(
        (listingState): [string, string] => [listingState, listingState]
      ),
    ];
  }, [listings]);

  const filteredListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${listing.title} ${listing.location} ${listing.description}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesLocation = location === "all" || listing.state === location;
      const matchesStatus = status === "all" || listing.status === status;

      return (
        matchesQuery &&
        matchesLocation &&
        matchesStatus &&
        matchesBudget(listing.price, budget)
      );
    });
  }, [budget, listings, location, query, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredListings.length / LISTINGS_PER_PAGE)
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedListings = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * LISTINGS_PER_PAGE;
    return filteredListings.slice(startIndex, startIndex + LISTINGS_PER_PAGE);
  }, [filteredListings, safeCurrentPage]);

  function resetFilters() {
    setQuery("");
    setLocation("all");
    setStatus("all");
    setBudget("all");
    setCurrentPage(1);
  }

  function updateQuery(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function updateLocation(value: string) {
    setLocation(value);
    setCurrentPage(1);
  }

  function updateStatus(value: string) {
    setStatus(value as StatusFilter);
    setCurrentPage(1);
  }

  function updateBudget(value: string) {
    setBudget(value as BudgetFilter);
    setCurrentPage(1);
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
                  Narrow your search
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
                      onChange={(event) => updateQuery(event.target.value)}
                      className="min-h-12 w-full rounded-md border border-[var(--line-strong)] bg-white py-3 pl-10 pr-3 text-base text-[var(--ink)] placeholder:text-slate-400 focus:border-[var(--blue)]"
                      placeholder="Search by estate, area, or state"
                    />
                  </span>
                </label>

                <FilterSelect
                  label="State"
                  value={location}
                  onChange={updateLocation}
                  options={locationOptions}
                />

                <FilterSelect
                  label="Availability"
                  value={status}
                  onChange={updateStatus}
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
                  onChange={updateBudget}
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
                  Land options ready for enquiry
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                Use the filters to shortlist options, then confirm current
                price, availability, and inspection details with the team.
              </p>
            </div>

            {filteredListings.length > 0 ? (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  {paginatedListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      ctaLabel="Book inspection"
                    />
                  ))}
                </div>
                <PaginationControls
                  currentPage={safeCurrentPage}
                  totalPages={totalPages}
                  totalItems={filteredListings.length}
                  pageSize={LISTINGS_PER_PAGE}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="border border-[var(--line)] bg-[var(--background)] p-8 text-center">
                <ShieldCheck aria-hidden className="mx-auto text-[var(--blue)]" size={32} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  No land option matches those filters.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Reset the filters or message Fosh Estate for current
                  availability that may not be listed yet.
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
