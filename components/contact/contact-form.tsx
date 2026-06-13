"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "@/lib/format";

type FormState = "idle" | "ready";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();

    const message = [
      "Hello Fosh Estate, I want to make a land enquiry.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
    ].join("\n");

    setStatus("ready");
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="cf-form">
      <style>{`
        .cf-form {
          position: relative;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 28px;
        }

        @media (min-width: 640px) {
          .cf-form {
            padding: 36px;
          }
        }

        .cf-fields {
          display: grid;
          gap: 22px;
        }

        .cf-label {
          display: block;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .cf-input,
        .cf-textarea {
          width: 100%;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.03);
          font-family: Inter, sans-serif;
          font-size: 1rem;
          color: #fff;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .cf-input {
          min-height: 52px;
          padding: 0 16px;
        }

        .cf-textarea {
          padding: 14px 16px;
          line-height: 1.7;
          resize: vertical;
        }

        .cf-input::placeholder,
        .cf-textarea::placeholder {
          color: rgba(255, 255, 255, 0.32);
        }

        .cf-input:focus,
        .cf-textarea:focus {
          outline: none;
          border-color: #1A6BFF;
          background: rgba(26, 107, 255, 0.06);
          box-shadow: 0 0 0 3px rgba(26, 107, 255, 0.16);
        }

        /* Submit */
        .cf-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 56px;
          margin-top: 24px;
          padding: 0 24px;
          background: #1A6BFF;
          color: #fff;
          font-family: Inter, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .cf-submit:hover {
          background: #2d7bff;
        }

        /* Status */
        .cf-status {
          margin-top: 16px;
          min-height: 24px;
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(109, 167, 255, 0.85);
        }

        .cf-status--ready {
          color: #4ade80;
        }

        @media (prefers-reduced-motion: reduce) {
          .cf-input,
          .cf-textarea,
          .cf-submit {
            transition: none;
          }
        }
      `}</style>

      <div className="cf-fields">
        <div>
          <label htmlFor="name" className="cf-label">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="cf-input"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="cf-label">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className="cf-input"
            placeholder="090..."
          />
        </div>

        <div>
          <label htmlFor="interest" className="cf-label">
            What would you like to confirm?
          </label>
          <textarea
            id="interest"
            name="interest"
            required
            rows={5}
            className="cf-textarea"
            placeholder="Example: I want current land options in Ogun, price details, and the next inspection date."
          />
        </div>
      </div>

      <button type="submit" className="cf-submit">
        Prepare WhatsApp enquiry
        <Send aria-hidden size={18} />
      </button>

      <p
        className={`cf-status ${status === "ready" ? "cf-status--ready" : ""}`}
        aria-live="polite"
      >
        {status === "ready"
          ? "Your enquiry is ready in WhatsApp. Review it before sending."
          : "We will open WhatsApp with your message prepared for review."}
      </p>
    </form>
  );
}
