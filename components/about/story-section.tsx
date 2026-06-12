"use client";

import { motion } from "framer-motion";

const storyPoints = [
  {
    title: "The problem",
    copy: "Many Nigerians want to own land, but the process often feels crowded with unclear prices, weak explanations, rushed decisions, and uncertainty about which locations can hold long-term value.",
  },
  {
    title: "The approach",
    copy: "Fosh Estate narrows the noise by presenting focused land opportunities, current enquiry support, practical inspection guidance, and a simpler path from interest to next steps.",
  },
  {
    title: "The promise",
    copy: "Every buyer should understand what they are considering before they commit. Our work is shaped around clearer information, stronger questions, and ownership decisions that can serve the future.",
  },
];

export function StorySection() {
  return (
    <section className="story-section">
      <style>{`
        .story-section {
          position: relative;
          background: var(--background, #f8f9ff);
          padding: clamp(72px, 9vw, 120px) 0;
          overflow: hidden;
        }

        /* Top rule - matches design system */
        .story-section::before {
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

        /* Gold glow - top right */
        .story-glow-gold {
          position: absolute;
          top: -100px; right: -120px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(201, 168, 76, 0.06) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* Blue glow - bottom left */
        .story-glow-blue {
          position: absolute;
          bottom: -100px; left: -100px;
          width: 460px; height: 460px;
          border-radius: 50%;
          background: radial-gradient(
            circle, rgba(26, 107, 255, 0.07) 0%, transparent 65%
          );
          pointer-events: none;
          z-index: 0;
        }

        .story-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 56px;
        }

        @media (min-width: 1024px) {
          .story-grid {
            grid-template-columns: 0.78fr 1.22fr;
            gap: 80px;
          }
        }

        /* Left column */
        .story-left {
          align-self: start;
        }

        @media (min-width: 1024px) {
          .story-left {
            position: sticky;
            top: 120px;
          }
        }

        .story-rule {
          display: block;
          width: 32px;
          height: 2px;
          background: #C9A84C;
          margin-bottom: 20px;
        }

        .story-eyebrow {
          font-family: var(--font-label);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(109, 167, 255, 0.9);
          margin-bottom: 18px;
        }

        .story-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.12;
          color: var(--navy, #000818);
          margin: 0;
          max-width: 18ch;
        }

        .story-heading em {
          font-style: normal;
          color: rgba(109, 167, 255, 0.85);
        }

        /* Right column - timeline list */
        .story-list {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Vertical connecting line */
        .story-list::before {
          content: '';
          position: absolute;
          top: 12px;
          bottom: 12px;
          left: 28px;
          width: 1px;
          background: linear-gradient(
            180deg,
            rgba(26, 107, 255, 0.35) 0%,
            rgba(0, 8, 24, 0.08) 50%,
            rgba(201, 168, 76, 0.25) 100%
          );
          z-index: 0;
        }

        @media (min-width: 640px) {
          .story-list::before {
            left: 44px;
          }
        }

        .story-item {
          position: relative;
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 20px;
          padding: 36px 0;
          border-bottom: 1px solid rgba(0, 8, 24, 0.08);
        }

        @media (min-width: 640px) {
          .story-item {
            grid-template-columns: 88px 1fr;
            gap: 32px;
            padding: 44px 0;
          }
        }

        .story-item:first-child {
          padding-top: 4px;
        }

        .story-item:last-child {
          border-bottom: none;
        }

        /* Large ghost numeral - signature element */
        .story-item-number {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: rgba(0, 8, 24, 0.06);
          transition: color 0.4s ease;
        }

        .story-item:hover .story-item-number {
          color: rgba(109, 167, 255, 0.35);
        }

        /* Small dot marking the line */
        .story-item-dot {
          position: absolute;
          left: 28px;
          top: 50px;
          width: 9px;
          height: 9px;
          margin-left: -4px;
          border-radius: 50%;
          background: #1A6BFF;
          box-shadow: 0 0 0 4px rgba(26, 107, 255, 0.12);
          z-index: 1;
        }

        @media (min-width: 640px) {
          .story-item-dot {
            left: 44px;
            top: 58px;
          }
        }

        .story-item-content {
          padding-top: 4px;
        }

        @media (min-width: 640px) {
          .story-item-content {
            padding-top: 10px;
          }
        }

        .story-item-title {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2vw, 1.625rem);
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--navy, #000818);
          margin: 0 0 12px;
        }

        .story-item-copy {
          font-family: Inter, sans-serif;
          font-size: 0.9375rem;
          line-height: 1.8;
          color: var(--muted, #5f6b7a);
          margin: 0;
          max-width: 56ch;
        }

        @media (prefers-reduced-motion: reduce) {
          .story-section *,
          .story-item-number {
            transition: none !important;
          }
        }
      `}</style>

      <div className="story-glow-gold" aria-hidden="true" />
      <div className="story-glow-blue" aria-hidden="true" />

      <div className="story-grid container-page">
        {/* Left - sticky heading */}
        <motion.div
          className="story-left"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="story-rule" aria-hidden="true" />
          <p className="story-eyebrow">Our story</p>
          <h2 className="story-heading">
            Making land ownership <em>less confusing</em>, more intentional.
          </h2>
        </motion.div>

        {/* Right - timeline */}
        <div className="story-list">
          {storyPoints.map((point, index) => (
            <motion.article
              key={point.title}
              className="story-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
            >
              <span className="story-item-dot" aria-hidden="true" />
              <span className="story-item-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="story-item-content">
                <h3 className="story-item-title">{point.title}</h3>
                <p className="story-item-copy">{point.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
