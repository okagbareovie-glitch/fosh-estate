"use client";

import { MapPin } from "lucide-react";
import { mapLocations } from "@/data/site";
import { MapboxCoverageMap } from "./mapbox-coverage-map";

export function MapSection() {
  return (
    <section id="coverage-map" className="ms-section">
      <style>{`
        .ms-section {
          position: relative;
          background: #fff;
          padding: clamp(72px, 9vw, 120px) 0;
        }

        .ms-header {
          display: grid;
          gap: 20px;
          margin-bottom: 40px;
        }

        @media (min-width: 1024px) {
          .ms-header {
            grid-template-columns: 0.85fr 1fr;
            align-items: end;
          }
        }

        .ms-rule {
          display: block;
          width: 28px;
          height: 2px;
          background: #c9a84c;
          margin-bottom: 14px;
        }

        .ms-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue, #1a6bff);
          margin: 0 0 8px;
        }

        .ms-heading {
          font-family: var(--font-display);
          font-size: clamp(1.875rem, 3.6vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--navy, #000818);
          margin: 0;
        }

        .ms-body {
          font-family: Inter, sans-serif;
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted, #526070);
          max-width: 48ch;
          margin: 0;
        }

        .ms-grid {
          display: grid;
          gap: 20px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .ms-grid {
            grid-template-columns: 1fr 360px;
          }
        }

        .ms-locations {
          display: grid;
          gap: 12px;
        }

        .ms-location {
          position: relative;
          border-radius: 12px;
          border: 1px solid var(--line, #d8e0ef);
          background: var(--background, #f8f9ff);
          padding: 20px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ms-location:hover {
          border-color: rgba(26, 107, 255, 0.28);
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(17, 28, 44, 0.07);
        }

        .ms-location-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .ms-location-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(26, 107, 255, 0.08);
          border: 1px solid rgba(26, 107, 255, 0.18);
          color: var(--blue, #1a6bff);
          flex-shrink: 0;
        }

        .ms-location-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0;
        }

        .ms-location-summary {
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.65;
          color: var(--muted, #526070);
          margin: 0;
        }

        .ms-location-rule {
          display: block;
          width: 0;
          height: 2px;
          background: #c9a84c;
          margin-top: 14px;
          transition: width 0.3s ease;
        }

        .ms-location:hover .ms-location-rule {
          width: 28px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ms-location,
          .ms-location-rule {
            transition: none;
          }
        }
      `}</style>

      <div className="container-page">
        <div className="ms-header">
          <div>
            <span className="ms-rule" aria-hidden="true" />
            <p className="ms-eyebrow">Operating markets</p>
            <h2 className="ms-heading">Focused on Rivers, FCT, and Ogun.</h2>
          </div>
          <p className="ms-body">
            The map highlights the markets Fosh Estate currently presents to
            buyers. Exact estate pins and inspection meeting points can be
            confirmed during enquiry.
          </p>
        </div>

        <div className="ms-grid">
          <MapboxCoverageMap locations={mapLocations} />
          <div className="ms-locations">
            {mapLocations.map((location) => (
              <article key={location.id} className="ms-location">
                <div className="ms-location-top">
                  <span className="ms-location-icon" aria-hidden="true">
                    <MapPin size={16} />
                  </span>
                  <h3 className="ms-location-title">{location.name}</h3>
                </div>
                <p className="ms-location-summary">{location.summary}</p>
                <span className="ms-location-rule" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
