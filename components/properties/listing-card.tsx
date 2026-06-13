"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import type { Listing, ListingStatus } from "@/data/site";
import { createWhatsAppUrl, formatCompactNaira } from "@/lib/format";

const statusStyles: Record<ListingStatus, string> = {
  Available: "lc-badge-status lc-badge-available",
  "Selling Fast": "lc-badge-status lc-badge-selling-fast",
  "New Launch": "lc-badge-status lc-badge-new-launch",
};

const typeStyles: Record<Listing["type"], string> = {
  Land: "lc-badge-type lc-badge-land",
  Property: "lc-badge-type lc-badge-property",
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
    [listing.media],
  );
  const gallery =
    images.length > 0 ? images : [{ ...listing.image, id: listing.id }];
  const activeImage = gallery[imageIndex] || gallery[0];
  const enquiryUrl = createWhatsAppUrl(
    `Hello Fosh Estate, I want details about ${listing.title} in ${listing.location}.`,
  );

  return (
    <article className="lc-card">
      <style>{`
        .lc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid var(--line, #d8e0ef);
          background: #fff;
          box-shadow: 0 18px 45px rgba(17, 28, 44, 0.07);
          transition:
            transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.3s ease;
        }

        .lc-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26, 107, 255, 0.32);
          box-shadow:
            0 0 0 1px rgba(26, 107, 255, 0.12),
            0 24px 60px rgba(17, 28, 44, 0.12),
            0 0 32px rgba(26, 107, 255, 0.08);
        }

        /* Image */
        .lc-image-wrap {
          position: relative;
          aspect-ratio: 16 / 11;
          flex-shrink: 0;
          overflow: hidden;
          background: var(--surface-soft, #f1f4fa);
        }

        .lc-image {
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .lc-card:hover .lc-image {
          transform: scale(1.045);
        }

        .lc-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 8, 24, 0) 45%,
            rgba(0, 8, 24, 0.28) 100%
          );
          pointer-events: none;
        }

        /* Badges */
        .lc-badges {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .lc-badge-status,
        .lc-badge-type {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 7px 13px;
          font-family: Inter, sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          border: 1px solid transparent;
        }

        /* Status - semantic colours kept, but glassy */
        .lc-badge-available {
          color: #15803d;
          background: rgba(34, 197, 94, 0.14);
          border-color: rgba(34, 197, 94, 0.28);
        }

        .lc-badge-selling-fast {
          color: #b45309;
          background: rgba(245, 158, 11, 0.14);
          border-color: rgba(245, 158, 11, 0.28);
        }

        .lc-badge-new-launch {
          color: #C9A84C;
          background: rgba(201, 168, 76, 0.14);
          border-color: rgba(201, 168, 76, 0.32);
        }

        /* Type - brand navy/blue glass */
        .lc-badge-land {
          color: #fff;
          background: rgba(0, 8, 24, 0.5);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .lc-badge-property {
          color: #fff;
          background: rgba(26, 107, 255, 0.55);
          border-color: rgba(255, 255, 255, 0.18);
        }

        /* Gallery dots */
        .lc-dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          gap: 6px;
        }

        .lc-dot {
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
          border: none;
          cursor: pointer;
          transition: width 0.25s, background 0.25s;
          padding: 0;
        }

        .lc-dot-active {
          width: 22px;
          background: #fff;
        }

        .lc-dot:not(.lc-dot-active) {
          width: 6px;
        }

        /* Body */
        .lc-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px;
        }

        .lc-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 4px;
        }

        .lc-price {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--navy, #000818);
          margin: 0;
        }

        .lc-price-label {
          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted, #526070);
        }

        /* Gold underline accent */
        .lc-price-rule {
          display: block;
          width: 28px;
          height: 2px;
          background: #C9A84C;
          margin: 10px 0 14px;
        }

        .lc-title {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--navy, #000818);
          margin: 0 0 12px;
        }

        .lc-location {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--muted, #526070);
          margin-bottom: 14px;
        }

        .lc-location svg {
          color: var(--blue, #1A6BFF);
          flex-shrink: 0;
        }

        .lc-summary {
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.65;
          color: var(--muted, #526070);
          margin: 0 0 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .lc-divider {
          height: 1px;
          background: var(--line, #d8e0ef);
          margin-bottom: 20px;
        }

        /* CTAs */
        .lc-actions {
          display: grid;
          gap: 10px;
          margin-top: auto;
        }

        @media (min-width: 480px) {
          .lc-actions {
            grid-template-columns: 1fr 1fr;
          }
        }

        .lc-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 8px;
          border: 1px solid var(--line-strong, #c4cee3);
          background: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--navy, #000818);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .lc-btn-secondary:hover {
          border-color: var(--blue, #1A6BFF);
          color: var(--blue, #1A6BFF);
          background: rgba(26, 107, 255, 0.04);
        }

        .lc-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 8px;
          border: none;
          background: #1A6BFF;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s;
        }

        .lc-btn-primary:hover {
          background: #2d7bff;
        }

        @media (prefers-reduced-motion: reduce) {
          .lc-card,
          .lc-image,
          .lc-dot {
            transition: none;
          }
        }
      `}</style>

      <div className="lc-image-wrap">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 100vw"
          className="lc-image"
        />
        <div className="lc-image-overlay" aria-hidden="true" />

        <div className="lc-badges">
          <span className={statusStyles[listing.status]}>{listing.status}</span>
          <span className={typeStyles[listing.type]}>{listing.type}</span>
        </div>

        {gallery.length > 1 ? (
          <div className="lc-dots">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Show image ${index + 1} for ${listing.title}`}
                onClick={(event) => {
                  event.preventDefault();
                  setImageIndex(index);
                }}
                className={`lc-dot ${
                  index === imageIndex ? "lc-dot-active" : ""
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="lc-body">
        <div className="lc-price-row">
          <p className="lc-price">{formatCompactNaira(listing.price)}</p>
          <span className="lc-price-label">Listed price</span>
        </div>
        <span className="lc-price-rule" aria-hidden="true" />

        <h3 className="lc-title">{listing.title}</h3>

        <div className="lc-location">
          <MapPin aria-hidden size={16} />
          <span>{listing.location}</span>
        </div>

        <p className="lc-summary">{listing.summary || listing.description}</p>

        <div className="lc-divider" aria-hidden="true" />

        <div className="lc-actions">
          <Link href={`/properties/${listing.slug}`} className="lc-btn-secondary">
            View land details
          </Link>
          <a href={enquiryUrl} className="lc-btn-primary">
            {ctaLabel}
            <ArrowRight aria-hidden size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
