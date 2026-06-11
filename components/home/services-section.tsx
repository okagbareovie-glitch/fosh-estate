"use client";

import { motion } from "framer-motion";
import { serviceItems } from "@/data/site";

export function ServicesSection() {
  return (
    <>
      <style>{`
        .sv-section {
          position: relative;
          background: var(--surface-soft, #f7f8fc);
          padding: clamp(72px, 10vw, 120px) 0;
          overflow: hidden;
        }

        /* Faint large watermark text - premium texture */
        .sv-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display, sans-serif);
          font-size: clamp(100px, 18vw, 220px);
          font-weight: 900;
          color: var(--navy, #000818);
          opacity: 0.025;
          letter-spacing: -0.05em;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .sv-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 56px;
        }

        @media (min-width: 768px) {
          .sv-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        .sv-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .sv-eyebrow-dash {
          width: 20px;
          height: 2px;
          background: var(--blue, #1A6BFF);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .sv-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue, #1A6BFF);
        }

        .sv-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--navy, #000818);
          margin: 0;
          max-width: 480px;
        }

        .sv-header-note {
          font-size: 14px;
          color: var(--muted, #6b7280);
          max-width: 220px;
          line-height: 1.6;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .sv-header-note { display: none; }
        }

        .sv-connector-wrap {
          display: none;
        }

        @media (min-width: 1024px) {
          .sv-connector-wrap {
            display: block;
            position: relative;
            height: 0;
            margin-bottom: -28px;
            z-index: 0;
            /* sits between header and cards - aligns with icon row */
            top: 28px;
          }

          .sv-connector-line {
            position: absolute;
            top: 0;
            left: calc(12.5% + 28px);
            right: calc(12.5% + 28px);
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(26,107,255,0.2) 15%,
              rgba(26,107,255,0.2) 85%,
              transparent
            );
          }

          .sv-connector-dots {
            position: absolute;
            top: -3px;
            left: calc(12.5% + 28px);
            right: calc(12.5% + 28px);
            display: flex;
            justify-content: space-between;
          }

          .sv-connector-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #fff;
            border: 1.5px solid rgba(26,107,255,0.35);
          }
        }

        .sv-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .sv-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .sv-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .sv-card {
          position: relative;
          padding: 28px 24px 28px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.35s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.25s ease;
        }

        .sv-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 1px 0 0 rgba(26,107,255,0.5) inset,
            0 20px 40px rgba(0,0,0,0.08),
            0 0 0 1px rgba(26,107,255,0.15);
          border-color: rgba(26,107,255,0.2);
        }

        .sv-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(
            180deg,
            #1A6BFF 0%,
            rgba(26,107,255,0.3) 100%
          );
          border-radius: 0 2px 2px 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }

        .sv-card:hover::before {
          transform: scaleY(1);
        }

        .sv-step-number {
          position: absolute;
          top: 12px;
          right: 16px;
          font-family: var(--font-display, sans-serif);
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--navy, #000818);
          opacity: 0.04;
          transition: opacity 0.35s ease;
          pointer-events: none;
          user-select: none;
        }

        .sv-card:hover .sv-step-number {
          opacity: 0.09;
        }

        .sv-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(26,107,255,0.08);
          border: 1px solid rgba(26,107,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue, #1A6BFF);
          margin-bottom: 20px;
          transition: background 0.25s ease, border-color 0.25s ease,
                      transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }

        .sv-card:hover .sv-icon-wrap {
          background: rgba(26,107,255,0.13);
          border-color: rgba(26,107,255,0.3);
          transform: scale(1.08);
        }

        .sv-card-title {
          font-family: var(--font-display, sans-serif);
          font-size: 17px;
          font-weight: 700;
          color: var(--navy, #000818);
          margin: 0 0 10px;
          letter-spacing: -0.015em;
          line-height: 1.25;
        }

        .sv-card-desc {
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--muted, #6b7280);
          margin: 0;
        }

        .sv-card-step-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(26,107,255,0.4);
          transition: color 0.25s ease;
        }

        .sv-card:hover .sv-card-step-label {
          color: rgba(26,107,255,0.7);
        }

        .sv-card-step-label-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-card,
          .sv-card::before,
          .sv-icon-wrap,
          .sv-step-number { transition: none; }
        }
      `}</style>

      <section className="sv-section">
        <span aria-hidden className="sv-watermark">Process</span>

        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            className="sv-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="sv-eyebrow">
                <span aria-hidden className="sv-eyebrow-dash" />
                <span className="sv-eyebrow-text">
                  How Fosh Estate supports buyers
                </span>
              </div>
              <h2 className="sv-heading">
                From first enquiry to a smarter land decision.
              </h2>
            </div>

            <p className="sv-header-note">
              A guided process so you never feel lost between enquiry and ownership.
            </p>
          </motion.div>

          <div aria-hidden className="sv-connector-wrap">
            <div className="sv-connector-line" />
            <div className="sv-connector-dots">
              {serviceItems.map((_, i) => (
                <span key={i} className="sv-connector-dot" />
              ))}
            </div>
          </div>

          <div className="sv-grid">
            {serviceItems.map((item, i) => {
              const Icon = item.icon;
              const stepNum = String(i + 1).padStart(2, "0");

              return (
                <motion.article
                  key={item.title}
                  className="sv-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.08,
                  }}
                >
                  <span aria-hidden className="sv-step-number">
                    {stepNum}
                  </span>

                  <div className="sv-icon-wrap" aria-hidden>
                    <Icon size={20} />
                  </div>

                  <h3 className="sv-card-title">{item.title}</h3>
                  <p className="sv-card-desc">{item.description}</p>

                  <div className="sv-card-step-label">
                    <span aria-hidden className="sv-card-step-label-dot" />
                    Step {stepNum}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
