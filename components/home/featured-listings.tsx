"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/format";
import { ListingCard } from "@/components/properties/listing-card";
import { PaginationControls } from "@/components/ui/pagination-controls";

const PER_PAGE = 6;
const FILTERS = ["All", "Land", "Property"] as const;
type Filter = (typeof FILTERS)[number];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: index * 0.07,
    },
  }),
};

export function FeaturedListings({ listings }: { listings: Listing[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredListings = useMemo(() => {
    if (activeFilter === "All") return listings;
    return listings.filter(
      (listing) => listing.type?.toLowerCase() === activeFilter.toLowerCase(),
    );
  }, [listings, activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredListings.length / PER_PAGE));

  const visibleListings = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return filteredListings.slice(start, start + PER_PAGE);
  }, [currentPage, filteredListings]);

  const counts: Record<Filter, number> = useMemo(
    () => ({
      All: listings.length,
      Land: listings.filter((listing) => listing.type?.toLowerCase() === "land")
        .length,
      Property: listings.filter(
        (listing) => listing.type?.toLowerCase() === "property",
      ).length,
    }),
    [listings],
  );

  function handleFilter(filter: Filter) {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  return (
    <>
      <style>{`
        .fl-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(64px, 9vw, 112px) 0;
          overflow: hidden;
        }

        .fl-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.045) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .fl-section::after {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 55%;
          height: 70%;
          background: radial-gradient(
            ellipse at 65% 65%,
            rgba(26, 107, 255, 0.09) 0%,
            transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .fl-inner {
          position: relative;
          z-index: 1;
        }

        .fl-header {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .fl-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        .fl-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .fl-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1a6bff;
          animation: fl-dot-pulse 2.4s ease-in-out infinite;
        }

        @keyframes fl-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        .fl-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a6bff;
        }

        .fl-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(28px, 3.8vw, 46px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #fff;
          max-width: 540px;
          margin: 0;
        }

        .fl-count-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 50px;
          background: rgba(26, 107, 255, 0.12);
          border: 1px solid rgba(26, 107, 255, 0.25);
          font-size: 12px;
          font-weight: 600;
          color: #6da7ff;
          margin-bottom: 16px;
          width: fit-content;
        }

        .fl-header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .fl-header-right {
            align-items: flex-end;
          }
        }

        .fl-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .fl-cta-link:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.32);
          color: #fff;
        }

        .fl-filters {
          display: flex;
          gap: 6px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        .fl-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
        }

        .fl-filter-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.8);
        }

        .fl-filter-btn.active {
          background: #1a6bff;
          border-color: #1a6bff;
          color: #fff;
        }

        .fl-filter-count {
          font-size: 11px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.15);
          line-height: 1.4;
        }

        .fl-filter-btn.active .fl-filter-count {
          background: rgba(255, 255, 255, 0.25);
        }

        .fl-grid {
          margin-top: 36px;
          display: grid;
          gap: 22px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 640px) {
          .fl-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .fl-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .fl-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 64px 24px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-align: center;
        }

        .fl-empty-title {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .fl-empty-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.28);
          margin: 0;
        }

        .fl-pagination {
          margin-top: 40px;
        }

        .fl-top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(26, 107, 255, 0.4) 30%,
            rgba(26, 107, 255, 0.4) 70%,
            transparent
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .fl-eyebrow-dot {
            animation: none;
          }
        }
      `}</style>

      <section id="featured-listings" className="fl-section">
        <div className="fl-top-rule" aria-hidden />

        <div className="container-page fl-inner">
          <motion.div
            className="fl-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="fl-eyebrow">
                <span aria-hidden className="fl-eyebrow-dot" />
                <span className="fl-eyebrow-text">Available estate land</span>
              </div>
              <h2 className="fl-heading">
                Compare current land options before you book an inspection.
              </h2>
            </div>

            <div className="fl-header-right">
              <div className="fl-count-pill">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle
                    cx="5"
                    cy="5"
                    r="4"
                    stroke="#6da7ff"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 3v2.5l1.5 1"
                    stroke="#6da7ff"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                  />
                </svg>
                {listings.length} listing{listings.length !== 1 ? "s" : ""}{" "}
                available
              </div>
              <a
                href={createWhatsAppUrl(
                  "Hello Fosh Estate, please send me the current land price list and inspection details.",
                )}
                className="fl-cta-link"
              >
                Request price list
                <ArrowRight aria-hidden size={15} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="fl-filters"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`fl-filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => handleFilter(filter)}
              >
                {filter}
                <span className="fl-filter-count">{counts[filter]}</span>
              </button>
            ))}
          </motion.div>

          <div className="fl-grid">
            <AnimatePresence mode="wait">
              {visibleListings.length === 0 ? (
                <motion.div
                  key="empty"
                  className="fl-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="fl-empty-title">
                    No {activeFilter.toLowerCase()} listings right now
                  </p>
                  <p className="fl-empty-sub">
                    Check back soon or contact us for off-market options.
                  </p>
                </motion.div>
              ) : (
                visibleListings.map((listing, index) => (
                  <motion.div
                    key={`${activeFilter}-${listing.id}-${currentPage}`}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <ListingCard
                      listing={listing}
                      ctaLabel="Ask about this land"
                    />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="fl-pagination">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredListings.length}
              pageSize={PER_PAGE}
              onPageChange={setCurrentPage}
              itemLabel="listings"
            />
          </div>
        </div>
      </section>
    </>
  );
}
