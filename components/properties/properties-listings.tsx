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
          .filter((listingState) => listingState.length > 0),
      ),
    ).sort((firstLocation, secondLocation) =>
      firstLocation.localeCompare(secondLocation),
    );

    return [
      ["all", "All states"] as [string, string],
      ...locations.map(
        (listingState): [string, string] => [listingState, listingState],
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
    Math.ceil(filteredListings.length / LISTINGS_PER_PAGE),
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
    <section className="pl-section">
      <style>{`
        .pl-section {
          position: relative;
          background: var(--background, #f8f9ff);
          padding: clamp(64px, 9vw, 96px) 0;
        }

        .pl-grid {
          display: grid;
          gap: 32px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .pl-grid {
            grid-template-columns: 320px 1fr;
            gap: 40px;
          }
        }

        /* Filter panel */
        .pl-aside {
          position: relative;
        }

        @media (min-width: 1024px) {
          .pl-aside {
            position: sticky;
            top: 100px;
          }
        }

        .pl-panel {
          border-radius: 12px;
          border: 1px solid var(--line, #d8e0ef);
          background: #fff;
          padding: 24px;
          box-shadow: 0 18px 45px rgba(17, 28, 44, 0.06);
        }

        .pl-panel-rule {
          display: block;
          width: 28px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 14px;
        }

        .pl-panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .pl-panel-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(26, 107, 255, 0.08);
          border: 1px solid rgba(26, 107, 255, 0.18);
          color: var(--blue, #1A6BFF);
          flex-shrink: 0;
        }

        .pl-panel-title {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0;
        }

        .pl-fields {
          display: grid;
          gap: 16px;
          margin-top: 22px;
        }

        .pl-label {
          display: block;
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--navy, #000818);
          margin-bottom: 8px;
        }

        .pl-search-wrap {
          position: relative;
        }

        .pl-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted, #526070);
          pointer-events: none;
        }

        .pl-input,
        .pl-select {
          width: 100%;
          min-height: 48px;
          border-radius: 8px;
          border: 1px solid var(--line-strong, #c4cee3);
          background: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          color: var(--ink, #1a1f2c);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .pl-input {
          padding: 0 14px 0 42px;
        }

        .pl-select {
          padding: 0 14px;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23526070' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .pl-input::placeholder {
          color: #94a3b8;
        }

        .pl-input:focus,
        .pl-select:focus {
          outline: none;
          border-color: var(--blue, #1A6BFF);
          box-shadow: 0 0 0 3px rgba(26, 107, 255, 0.12);
        }

        .pl-reset {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 48px;
          margin-top: 22px;
          border-radius: 8px;
          border: 1px solid var(--line-strong, #c4cee3);
          background: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--navy, #000818);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .pl-reset:hover {
          border-color: var(--blue, #1A6BFF);
          color: var(--blue, #1A6BFF);
          background: rgba(26, 107, 255, 0.04);
        }

        /* Results header */
        .pl-results-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--line, #d8e0ef);
        }

        @media (min-width: 640px) {
          .pl-results-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        .pl-results-rule {
          display: block;
          width: 28px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 14px;
        }

        .pl-results-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue, #1A6BFF);
          margin: 0 0 8px;
        }

        .pl-results-heading {
          font-family: var(--font-display);
          font-size: clamp(1.875rem, 3.2vw, 2.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.12;
          color: var(--navy, #000818);
          margin: 0;
        }

        .pl-results-note {
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--muted, #526070);
          max-width: 38ch;
          margin: 0;
        }

        /* Grid */
        .pl-cards-grid {
          display: grid;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .pl-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Empty state */
        .pl-empty {
          border-radius: 12px;
          border: 1px solid var(--line, #d8e0ef);
          background: #fff;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 18px 45px rgba(17, 28, 44, 0.06);
        }

        .pl-empty-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(26, 107, 255, 0.08);
          border: 1px solid rgba(26, 107, 255, 0.18);
          color: var(--blue, #1A6BFF);
          margin: 0 auto 20px;
        }

        .pl-empty-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0 0 10px;
        }

        .pl-empty-copy {
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--muted, #526070);
          max-width: 40ch;
          margin: 0 auto 24px;
        }

        .pl-empty-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 8px;
          border: none;
          background: var(--navy, #000818);
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .pl-empty-cta:hover {
          background: #1A6BFF;
        }
      `}</style>

      <div className="container-page pl-grid">
        <aside className="pl-aside">
          <div className="pl-panel">
            <span className="pl-panel-rule" aria-hidden="true" />
            <div className="pl-panel-header">
              <span className="pl-panel-icon" aria-hidden="true">
                <Filter size={17} />
              </span>
              <h2 className="pl-panel-title">Narrow your search</h2>
            </div>

            <div className="pl-fields">
              <label className="block">
                <span className="pl-label">Search</span>
                <span className="pl-search-wrap">
                  <Search aria-hidden className="pl-search-icon" size={17} />
                  <input
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    className="pl-input"
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

            <button type="button" onClick={resetFilters} className="pl-reset">
              <RotateCcw aria-hidden size={15} />
              Reset filters
            </button>
          </div>
        </aside>

        <div>
          <div className="pl-results-header">
            <div>
              <span className="pl-results-rule" aria-hidden="true" />
              <p className="pl-results-eyebrow">
                {filteredListings.length} matching listings
              </p>
              <h2 className="pl-results-heading">
                Land options ready for enquiry
              </h2>
            </div>
            <p className="pl-results-note">
              Use the filters to shortlist options, then confirm current price,
              availability, and inspection details with the team.
            </p>
          </div>

          {filteredListings.length > 0 ? (
            <>
              <div className="pl-cards-grid">
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
            <div className="pl-empty">
              <span className="pl-empty-icon" aria-hidden="true">
                <ShieldCheck size={26} />
              </span>
              <h3 className="pl-empty-title">
                No land option matches those filters.
              </h3>
              <p className="pl-empty-copy">
                Reset the filters or message Fosh Estate for current
                availability that may not be listed yet.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="pl-empty-cta"
              >
                Reset filters
              </button>
            </div>
          )}
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
      <span className="pl-label">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-select"
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
