"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/site";

export function TrustStrip() {
  return (
    <>
      <style>{`
        .ts-section {
          position: relative;
          background: #f4f7ff;
          border-top: 1px solid rgba(26,107,255,0.1);
          border-bottom: 1px solid rgba(26,107,255,0.1);
        }

        .ts-grid {
          display: grid;
        }

        @media (min-width: 768px) {
          .ts-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ── Individual item ─────────────────────────────────────────────── */
        .ts-item {
          position: relative;
          padding: 28px 24px;
          border-bottom: 1px solid rgba(26,107,255,0.08);
          transition: background 0.25s ease;
        }

        .ts-item:last-child {
          border-bottom: none;
        }

        @media (min-width: 768px) {
          .ts-item {
            border-bottom: none;
            border-right: 1px solid rgba(26,107,255,0.08);
            padding: 32px 28px;
          }

          .ts-item:last-child {
            border-right: none;
          }
        }

        .ts-item:hover {
          background: rgba(26,107,255,0.03);
        }

        /* Blue top accent line — slides in on hover */
        .ts-item::before {
          content: '';
          position: absolute;
          top: 0; left: 24px; right: 24px;
          height: 2px;
          background: linear-gradient(
            90deg,
            #1A6BFF,
            rgba(26,107,255,0.3)
          );
          border-radius: 0 0 2px 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
        }

        .ts-item:hover::before {
          transform: scaleX(1);
        }

        /* Icon wrap */
        .ts-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(26,107,255,0.08);
          border: 1px solid rgba(26,107,255,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A6BFF;
          margin-bottom: 16px;
          transition: background 0.25s, border-color 0.25s, transform 0.3s cubic-bezier(0.23,1,0.32,1);
        }

        .ts-item:hover .ts-icon-wrap {
          background: rgba(26,107,255,0.13);
          border-color: rgba(26,107,255,0.28);
          transform: scale(1.07);
        }

        /* Title */
        .ts-title {
          font-family: var(--font-display, sans-serif);
          font-size: 16px;
          font-weight: 700;
          color: var(--navy, #000818);
          margin: 0 0 6px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        /* Description */
        .ts-desc {
          font-size: 13px;
          line-height: 1.65;
          color: var(--muted, #6b7280);
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .ts-item,
          .ts-item::before,
          .ts-icon-wrap { transition: none; }
        }
      `}</style>

      <section aria-label="Fosh Estate trust points" className="ts-section">
        <div className="container-page ts-grid">
          {trustItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="ts-item"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.07,
                }}
              >
                <div className="ts-icon-wrap" aria-hidden>
                  <Icon size={18} />
                </div>
                <h3 className="ts-title">{item.title}</h3>
                <p className="ts-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
