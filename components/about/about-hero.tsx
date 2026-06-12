"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

export function AboutHero() {
  return (
    <section className="about-hero-section">
      <style>{`
        .about-hero-section {
          position: relative;
          background: var(--navy, #000818);
          overflow: hidden;
          padding: clamp(124px, 28vw, 148px) 0 clamp(64px, 9vw, 110px);
        }

        @media (min-width: 1024px) {
          .about-hero-section {
            padding: clamp(112px, 10vw, 132px) 0 clamp(64px, 9vw, 110px);
          }
        }

        /* Dot-grid texture - land survey aesthetic */
        .about-hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle, rgba(109, 167, 255, 0.1) 1px, transparent 1px
          );
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        /* Blue glow - top left */
        .about-hero-glow {
          position: absolute;
          top: -120px; left: -120px;
          width: 540px; height: 540px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.16) 0%, transparent 68%
          );
          pointer-events: none;
          z-index: 0;
        }

        .about-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-hero-grid {
            grid-template-columns: 1fr 0.95fr;
            gap: 64px;
          }
        }

        /* Gold accent rule */
        .about-hero-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .about-hero-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin-bottom: 22px;
        }

        .about-hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.4vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.07;
          color: #fff;
          margin: 0 0 24px;
          max-width: 22ch;
        }

        .about-hero-heading em {
          font-style: normal;
          color: #C9A84C;
        }

        .about-hero-body {
          font-family: Inter, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.55);
          max-width: 46ch;
          margin: 0 0 36px;
        }

        .about-hero-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (min-width: 480px) {
          .about-hero-actions {
            flex-direction: row;
          }
        }

        .about-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 26px;
          background: #1A6BFF;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .about-hero-btn-primary:hover {
          background: #2d7bff;
        }

        .about-hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 54px;
          padding: 0 26px;
          background: transparent;
          color: rgba(255, 255, 255, 0.85);
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .about-hero-btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
        }

        /* Image side */
        .about-hero-figure {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .about-hero-image-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          min-height: 340px;
        }

        @media (min-width: 1024px) {
          .about-hero-image-wrap {
            min-height: 480px;
          }
        }

        .about-hero-image {
          object-fit: cover;
          filter: brightness(0.82) saturate(0.92);
        }

        /* Bottom-up gradient so the badge always reads clearly */
        .about-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 8, 24, 0.85) 0%,
            rgba(0, 8, 24, 0.05) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* Floating glass badge - replaces the old white caption panel */
        .about-hero-badge {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          padding: 20px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 8, 24, 0.55);
          backdrop-filter: blur(14px);
        }

        @media (min-width: 640px) {
          .about-hero-badge {
            left: 24px;
            right: 24px;
            bottom: 24px;
            padding: 24px 26px;
          }
        }

        .about-hero-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: Inter, sans-serif;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #4ade80;
          margin-bottom: 10px;
        }

        .about-hero-badge-text {
          font-family: var(--font-display);
          font-size: clamp(1.0625rem, 1.9vw, 1.375rem);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: #fff;
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-hero-section * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="about-hero-dot-grid" aria-hidden="true" />
      <div className="about-hero-glow" aria-hidden="true" />

      <div className="about-hero-grid container-page">
        {/* Left - copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about-hero-rule" aria-hidden="true" />
          <p className="about-hero-eyebrow">About Fosh Estate</p>
          <h1 className="about-hero-heading">
            Helping buyers own land with <em>clarity</em> and confidence.
          </h1>
          <p className="about-hero-body">
            Fosh Estate was created for people who want more than a plot on
            paper. We help families and investors compare opportunities, ask
            better questions, inspect with confidence, and make land decisions
            with a long-term view.
          </p>
          <div className="about-hero-actions">
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to learn more about the company and available estate land."
              )}
              className="about-hero-btn-primary"
            >
              Speak with Fosh Estate
              <ArrowRight aria-hidden size={17} />
            </a>
            <Link href="/properties" className="about-hero-btn-secondary">
              View land options
            </Link>
          </div>
        </motion.div>

        {/* Right - image with floating glass badge */}
        <motion.figure
          className="about-hero-figure"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-hero-image-wrap">
            <Image
              src="/media/about-hero.png"
              alt="Premium estate planning visual representing Fosh Estate land ownership"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="about-hero-image"
            />
            <div className="about-hero-image-overlay" aria-hidden="true" />
            <div className="about-hero-badge">
              <span className="about-hero-badge-tag">
                <ShieldCheck aria-hidden size={16} />
                Built for trust
              </span>
              <p className="about-hero-badge-text">
                Practical guidance, inspection confidence, and land
                opportunities selected for long-term value.
              </p>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
