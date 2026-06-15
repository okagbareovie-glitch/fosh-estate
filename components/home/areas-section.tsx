"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { CSSProperties } from "react";

const AREAS = [
  {
    name: "Ogun",
    subtitle: "Active estate corridor",
    detail: "Affordable estate land around growing residential and access-linked communities.",
    image: "/media/ogun.png",
    accentColor: "#c9a84c",
    marketCue: "Affordable entry near growth corridors",
  },
  {
    name: "Abuja",
    subtitle: "Federal capital market",
    detail: "Future-facing land demand across Abuja satellite towns and planned expansion areas.",
    image: "/media/FCT.png",
    accentColor: "#1a6bff",
    marketCue: "Satellite-town expansion demand",
  },
  {
    name: "Port Harcourt",
    subtitle: "Southern growth market",
    detail: "Active residential corridors around Port Harcourt and emerging estate zones.",
    image: "/media/rivers.png",
    accentColor: "#22c55e",
    marketCue: "Port Harcourt residential growth",
  },
];

export function AreasSection() {
  return (
    <>
      <style>{`
        .areas-section {
          position: relative;
          background: var(--navy, #000818);
          padding: clamp(72px, 10vw, 120px) 0;
          overflow: hidden;
        }

        .areas-top-rule {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08) 30%,
            rgba(255, 255, 255, 0.08) 70%,
            transparent
          );
        }

        .areas-grid {
          display: grid;
          gap: 40px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .areas-grid {
            grid-template-columns: 0.85fr 1.15fr;
            align-items: center;
          }
        }

        .areas-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .areas-eyebrow-line {
          width: 24px;
          height: 2px;
          background: #c9a84c;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .areas-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
        }

        .areas-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(30px, 3.8vw, 48px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #fff;
          margin: 0 0 28px;
          max-width: 400px;
        }

        .areas-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.48);
          max-width: 360px;
          margin: 0 0 36px;
        }

        .areas-cues-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .areas-cue-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .areas-cue-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1.5px solid;
        }

        .areas-cue-text {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.38);
        }

        .areas-cue-name {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-right: 6px;
        }

        .areas-cards {
          display: grid;
          gap: 14px;
        }

        @media (min-width: 640px) {
          .areas-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 639px) {
          .areas-cards {
            gap: 18px;
          }
        }

        .area-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @media (max-width: 639px) {
          .area-card {
            aspect-ratio: 3 / 4;
            width: 100%;
          }
        }

        @media (min-width: 640px) {
          .area-card:nth-child(2) {
            aspect-ratio: 3 / 5;
            margin-top: -20px;
          }
        }

        .area-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 0 0 1px var(--card-accent, rgba(255, 255, 255, 0.15)),
            0 20px 50px rgba(0, 0, 0, 0.6),
            0 0 30px color-mix(in srgb, var(--card-accent, #fff) 15%, transparent);
        }

        .area-card-img {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            filter 0.4s ease;
          filter: brightness(0.7) saturate(0.85);
        }

        .area-card:hover .area-card-img {
          transform: scale(1.06);
          filter: brightness(0.55) saturate(0.9);
        }

        .area-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 8, 24, 0.92) 0%,
            rgba(0, 8, 24, 0.5) 45%,
            transparent 75%
          );
          pointer-events: none;
        }

        .area-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 50px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }

        .area-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 18px 16px;
          min-width: 0;
        }

        .area-card-name {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
          margin: 0 0 5px;
        }

        .area-card-subtitle {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 10px;
          line-height: 1.4;
          overflow-wrap: break-word;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(6px);
          transition: max-height 0.35s ease, opacity 0.35s ease,
            transform 0.35s ease;
        }

        .area-card:hover .area-card-subtitle {
          max-height: 48px;
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 639px) {
          .area-card-subtitle {
            max-height: 72px;
            opacity: 1;
            transform: translateY(0);
          }
        }

        .area-card-rule {
          height: 2px;
          width: 28px;
          border-radius: 2px;
          margin-bottom: 10px;
          transition: width 0.35s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .area-card:hover .area-card-rule {
          width: 44px;
        }

        .area-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.06em;
        }

        .area-card-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.6;
        }

        @media (prefers-reduced-motion: reduce) {
          .area-card,
          .area-card-img,
          .area-card-subtitle,
          .area-card-rule {
            transition: none;
          }
        }
      `}</style>

      <section className="areas-section">
        <div aria-hidden className="areas-top-rule" />

        <div className="container-page areas-grid">
          <motion.div
            className="areas-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="areas-eyebrow">
              <span aria-hidden className="areas-eyebrow-line" />
              <span className="areas-eyebrow-text">Areas of operation</span>
            </div>

            <h2 className="areas-heading">
              Focused on markets where land demand keeps moving.
            </h2>

            <p className="areas-body">
              Fosh Estate operates in Nigeria&apos;s high-demand real estate
              corridors, where infrastructure growth, access, and planned
              communities continue to shape long-term land value.
            </p>

            <div
              className="areas-cues-list"
              aria-label="Market focus by state"
            >
              {AREAS.map((area) => (
                <div key={area.name} className="areas-cue-item">
                  <span
                    className="areas-cue-dot"
                    style={{
                      borderColor: area.accentColor,
                      background: `${area.accentColor}22`,
                    }}
                  />
                  <span className="areas-cue-name">{area.name}</span>
                  <span className="areas-cue-text">{area.marketCue}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="areas-cards">
            {AREAS.map((area, index) => (
              <motion.div
                key={area.name}
                className="area-card"
                style={{ "--card-accent": area.accentColor } as CSSProperties}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
              >
                <Image
                  src={area.image}
                  alt={`${area.name} real estate market`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  className="area-card-img"
                />

                <div className="area-card-gradient" aria-hidden />

                <div className="area-card-badge">
                  <MapPin size={9} aria-hidden />
                  Active
                </div>

                <div className="area-card-content">
                  <div
                    aria-hidden
                    className="area-card-rule"
                    style={{ background: area.accentColor }}
                  />

                  <h3 className="area-card-name">{area.name}</h3>
                  <p className="area-card-subtitle">{area.detail}</p>

                  <div className="area-card-tag">
                    <span aria-hidden className="area-card-tag-dot" />
                    Land available
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
