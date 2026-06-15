"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/format";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Navbar1 } from "@/components/ui/navbar-1";

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const FADE_IN = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut" as const, delay },
});

const MOBILE_HERO_IMAGE = "/media/fosh-estate-hero-mobile-generated.png";

export function HeroSection() {
  return (
    <section className="fosh-hero">
      <style>{`
        .fosh-hero {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: var(--navy, #000818);
          color: #fff;
          display: flex;
          flex-direction: column;
        }

        .fosh-hero-bloom {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 70%;
          height: 90%;
          background: radial-gradient(
            ellipse at 35% 45%,
            rgba(26, 107, 255, 0.13) 0%,
            rgba(26, 107, 255, 0.06) 35%,
            transparent 70%
          );
          pointer-events: none;
          animation: bloom-breathe 7s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .fosh-hero-image {
          object-fit: cover;
        }

        .fosh-hero-image--desktop {
          display: block;
          object-position: 64% center;
        }

        .fosh-hero-image--mobile {
          display: none;
          object-position: center center;
        }

        @keyframes bloom-breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        .fosh-gold-rule {
          display: block;
          width: 36px;
          height: 2px;
          background: linear-gradient(90deg, #c9a84c, rgba(201, 168, 76, 0.3));
          margin-bottom: 18px;
          border-radius: 2px;
        }

        .fosh-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
          line-height: 1;
        }

        .fosh-headline {
          margin: 20px 0 0;
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(52px, 8.5vw, 104px);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .fosh-headline-line2 {
          display: flex;
          align-items: center;
          gap: 0.22em;
          flex-wrap: wrap;
        }

        .fosh-flip-chip {
          border-radius: 6px !important;
          background: rgba(26, 107, 255, 0.18) !important;
          border: 1px solid rgba(26, 107, 255, 0.35) !important;
          padding: 0.06em 0.22em !important;
          color: #6da7ff !important;
          font-size: 0.82em !important;
          box-shadow: none !important;
          backdrop-filter: blur(8px);
        }

        .fosh-body-copy {
          margin: 28px 0 0;
          max-width: 520px;
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.62);
          font-weight: 400;
        }

        .fosh-cta-row {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .fosh-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 28px;
          border-radius: 8px;
          background: #fff;
          color: var(--navy, #000818);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .fosh-btn-primary:hover {
          background: #f0f4ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255, 255, 255, 0.18);
        }

        .fosh-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 28px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          transition: background 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }

        .fosh-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.26);
        }

        .fosh-stats-bar {
          margin-top: auto;
          padding-top: 48px;
          padding-bottom: 40px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .fosh-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .fosh-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .fosh-stat-value {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .fosh-stat-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.38);
        }

        .fosh-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.12);
          align-self: center;
        }

        .fosh-scroll-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          text-decoration: none;
          transition: color 0.2s;
        }

        .fosh-scroll-hint:hover {
          color: rgba(255, 255, 255, 0.6);
        }

        .fosh-scroll-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          animation: scroll-nudge 2.2s ease-in-out infinite;
        }

        @keyframes scroll-nudge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 640px) {
          .fosh-hero-image--desktop {
            display: none;
          }

          .fosh-hero-image--mobile {
            display: block;
          }

          .fosh-stats {
            gap: 24px;
          }

          .fosh-stat-divider {
            display: none;
          }

          .fosh-scroll-hint {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fosh-hero-bloom,
          .fosh-scroll-arrow {
            animation: none;
          }
        }
      `}</style>

      <header style={{ position: "fixed", inset: "0 0 auto", zIndex: 1000 }}>
        <Navbar1 />
      </header>

      <Image
        src={siteConfig.heroImage}
        alt="Planned estate land with road access and green surroundings"
        fill
        priority
        sizes="(min-width: 641px) 100vw, 0px"
        className="fosh-hero-image fosh-hero-image--desktop"
      />

      <Image
        src={MOBILE_HERO_IMAGE}
        alt="Planned estate land with road access and green surroundings"
        fill
        priority
        sizes="(max-width: 640px) 100vw, 0px"
        className="fosh-hero-image fosh-hero-image--mobile"
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(0,8,24,0.92) 0%, rgba(0,14,38,0.78) 42%, rgba(0,14,38,0.38) 100%)",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "auto 0 0",
          height: 160,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,8,24,0.82) 100%)",
        }}
      />

      <div aria-hidden className="fosh-hero-bloom" />

      <div
        className="container-page"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          minHeight: "100svh",
          paddingTop: "clamp(96px, 12vw, 140px)",
          paddingBottom: 0,
        }}
      >
        <motion.h1
          className="fosh-headline"
          style={{ overflow: "visible" }}
          {...FADE_UP(0.28)}
        >
          Own land.
          <br />
          <span className="fosh-headline-line2">
            Build{" "}
            <ContainerTextFlip
              words={["Legacy", "Security", "Value", "Growth"]}
              interval={2600}
              className="fosh-flip-chip"
              textClassName="font-[family-name:var(--font-display)]"
            />
          </span>
        </motion.h1>

        <motion.p className="fosh-body-copy" {...FADE_UP(0.42)}>
          Fosh Estate helps families and investors secure estate land with
          transparent pricing, guided site inspections, and support at every
          step before you commit a naira.
        </motion.p>

        <motion.div className="fosh-cta-row" {...FADE_UP(0.54)}>
          <a
            href={createWhatsAppUrl(
              "Hello Fosh Estate, I'd like to book a site inspection or ask about available land.",
            )}
            className="fosh-btn-primary"
          >
            Book a site inspection
            <ArrowRight aria-hidden size={17} strokeWidth={2.5} />
          </a>
          <a href="#featured-listings" className="fosh-btn-ghost">
            See current listings
          </a>
        </motion.div>

        <motion.div className="fosh-stats-bar" {...FADE_IN(0.72)}>
          <div className="fosh-stats">
            <div className="fosh-stat">
              <span className="fosh-stat-value">10+</span>
              <span className="fosh-stat-label">Active estates</span>
            </div>

            <div aria-hidden className="fosh-stat-divider" />

            <div className="fosh-stat">
              <span className="fosh-stat-value">3</span>
              <span className="fosh-stat-label">States covered</span>
            </div>

            <div aria-hidden className="fosh-stat-divider" />

            <div className="fosh-stat">
              <span className="fosh-stat-value">100%</span>
              <span className="fosh-stat-label">Title verified</span>
            </div>
          </div>

          <a href="#featured-listings" className="fosh-scroll-hint">
            Explore listings
            <span aria-hidden className="fosh-scroll-arrow">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
