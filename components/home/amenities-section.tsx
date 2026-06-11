"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { amenities } from "@/data/site";

const AMENITY_IMAGES: Record<string, string> = {
  "Good road network": "/media/road.png",
  "24/7 security": "/media/security.png",
  "Drainage system": "/media/drainage.png",
  "Street lights": "/media/street%20light.png",
  "Green areas": "/media/green%20area.png",
  "Major landmarks": "/media/landmark.png",
};

const FALLBACK_IMAGE = "/media/road.png";

export function AmenitiesSection() {
  const totalAmenities = amenities.length;
  const lastIsOdd = totalAmenities % 2 === 1;

  return (
    <>
      <style>{`
        .am-section {
          position: relative;
          background: var(--background, #f8f9ff);
          padding: clamp(80px, 10vw, 128px) 0;
          overflow: hidden;
        }

        .am-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(26, 107, 255, 0.35) 30%,
            rgba(201, 168, 76, 0.3) 50%,
            rgba(26, 107, 255, 0.35) 70%,
            transparent 100%
          );
        }

        .am-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(0, 116, 217, 0.09) 1px, transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .am-glow-blue {
          position: absolute;
          top: -100px; right: -100px;
          width: 560px; height: 560px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.11) 0%, transparent 68%
          );
          pointer-events: none;
          z-index: 0;
        }

        .am-glow-gold {
          position: absolute;
          bottom: -80px; left: -80px;
          width: 440px; height: 440px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(201, 168, 76, 0.12) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .am-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 56px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .am-grid {
            grid-template-columns: 0.76fr 1.24fr;
            gap: 72px;
            align-items: center;
          }
        }

        .am-rule {
          display: block;
          width: 32px; height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .am-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue, #005eb2);
          margin-bottom: 18px;
        }

        .am-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(28px, 3.4vw, 42px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: var(--navy, #000818);
          margin: 0 0 22px;
          max-width: 380px;
        }

        .am-heading em {
          font-style: normal;
          color: var(--blue, #005eb2);
        }

        .am-body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.78;
          color: var(--muted, #526070);
          max-width: 330px;
          margin: 0 0 36px;
        }

        .am-stat {
          display: inline-flex;
          align-items: baseline;
          gap: 14px;
          padding: 20px 26px;
          border: 1px solid rgba(26, 107, 255, 0.16);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 45px rgba(17, 28, 44, 0.08);
        }

        .am-stat-number {
          font-family: var(--font-display, sans-serif);
          font-size: 54px;
          font-weight: 800;
          color: var(--blue, #005eb2);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .am-stat-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--muted, #526070);
          line-height: 1.45;
          max-width: 96px;
        }

        .am-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 185px;
          gap: 10px;
        }

        .am-card:nth-child(1),
        .am-card:nth-child(4) {
          grid-row: span 2;
        }

        .am-card--full {
          grid-column: span 2;
          grid-row: span 1 !important;
        }

        .am-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition:
            transform 0.42s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.42s cubic-bezier(0.23, 1, 0.32, 1),
            border-color 0.3s ease;
        }

        .am-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 0 0 1px rgba(26, 107, 255, 0.45),
            0 24px 56px rgba(0, 8, 24, 0.55),
            0 0 36px rgba(26, 107, 255, 0.13);
          border-color: rgba(26, 107, 255, 0.32);
        }

        .am-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; right: 0;
          height: 2px;
          background: linear-gradient(
            90deg, transparent, rgba(26, 107, 255, 0.9) 50%, transparent
          );
          z-index: 4;
          transition: left 0.58s ease;
          pointer-events: none;
        }

        .am-card:hover::before {
          left: 100%;
        }

        .am-card-img {
          object-fit: cover;
          transition:
            transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
            filter 0.42s ease;
          filter: brightness(0.82) saturate(0.9);
        }

        .am-card:hover .am-card-img {
          transform: scale(1.06);
          filter: brightness(0.74) saturate(0.96);
        }

        .am-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 8, 24, 0.74) 0%,
            rgba(0, 8, 24, 0.28) 46%,
            rgba(0, 8, 24, 0.04) 100%
          );
          pointer-events: none;
        }

        .am-card-index {
          position: absolute;
          top: 10px; right: 14px;
          font-family: var(--font-display, sans-serif);
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(255, 255, 255, 0.07);
          z-index: 2;
          pointer-events: none;
          user-select: none;
          transition: color 0.32s ease;
        }

        .am-card:hover .am-card-index {
          color: rgba(255, 255, 255, 0.14);
        }

        .am-card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
          z-index: 3;
        }

        .am-card-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px; height: 30px;
          border-radius: 7px;
          background: rgba(26, 107, 255, 0.18);
          border: 1px solid rgba(26, 107, 255, 0.28);
          backdrop-filter: blur(8px);
          color: #6da7ff;
          margin-bottom: 8px;
          transition: background 0.2s, border-color 0.2s;
        }

        .am-card:hover .am-card-icon-wrap {
          background: rgba(26, 107, 255, 0.3);
          border-color: rgba(26, 107, 255, 0.5);
        }

        .am-card-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(13px, 1.45vw, 16px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .am-card:nth-child(1) .am-card-title,
        .am-card:nth-child(4) .am-card-title {
          font-size: clamp(14px, 1.65vw, 18px);
        }

        .am-card-desc {
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.42);
          margin: 0;
          line-height: 1.45;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(5px);
          transition:
            max-height 0.32s ease,
            opacity 0.28s ease,
            transform 0.28s ease;
        }

        .am-card:hover .am-card-desc {
          max-height: 64px;
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .am-cards {
            grid-template-columns: 1fr;
            grid-auto-rows: 230px;
          }

          .am-card:nth-child(1),
          .am-card:nth-child(4) {
            grid-row: span 1;
          }

          .am-card--full {
            grid-column: span 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .am-card,
          .am-card-img,
          .am-card-desc,
          .am-card-index,
          .am-card::before {
            transition: none;
          }
        }
      `}</style>

      <section className="am-section">
        <div aria-hidden className="am-dot-grid" />
        <div aria-hidden className="am-glow-blue" />
        <div aria-hidden className="am-glow-gold" />

        <div className="container-page am-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="am-rule" aria-hidden />
            <p className="am-eyebrow">Estate infrastructure</p>
            <h2 className="am-heading">
              Not just land -<br />
              <em>a complete estate.</em>
            </h2>
            <p className="am-body">
              Every Fosh Estate plot comes with a full amenity plan. Security,
              roads, drainage, and lighting, built and maintained so your
              investment is protected from day one.
            </p>
            <div className="am-stat">
              <span className="am-stat-number">{totalAmenities}</span>
              <span className="am-stat-label">planned amenities per estate</span>
            </div>
          </motion.div>

          <div className="am-cards">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              const src = AMENITY_IMAGES[item.title] ?? FALLBACK_IMAGE;
              const isLast = index === totalAmenities - 1;
              const cardClass = [
                "am-card",
                isLast && lastIsOdd ? "am-card--full" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <motion.div
                  key={item.title}
                  className={cardClass}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.07,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 100vw"
                    className="am-card-img"
                  />
                  <div aria-hidden className="am-card-overlay" />

                  <span aria-hidden className="am-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="am-card-content">
                    <div className="am-card-icon-wrap" aria-hidden>
                      <Icon size={14} />
                    </div>
                    <h3 className="am-card-title">{item.title}</h3>
                    {item.description ? (
                      <p className="am-card-desc">{item.description}</p>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
