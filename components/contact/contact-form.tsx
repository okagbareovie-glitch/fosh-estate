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
      "Hello Fosh Estate, I want to make an enquiry.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
    ].join("\n");

    setStatus("ready");
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--line)] bg-white p-5 surface-shadow sm:p-7"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[var(--navy)]"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 min-h-13 w-full rounded-md border border-[var(--line-strong)] bg-white px-4 text-base text-[var(--ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--blue)]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[var(--navy)]"
          >
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className="mt-2 min-h-13 w-full rounded-md border border-[var(--line-strong)] bg-white px-4 text-base text-[var(--ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--blue)]"
            placeholder="090..."
          />
        </div>

        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-semibold text-[var(--navy)]"
          >
            What do you want to ask about?
          </label>
          <textarea
            id="interest"
            name="interest"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-base leading-7 text-[var(--ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--blue)]"
            placeholder="Example: I want details about Fosh Estate Phase 4 and inspection dates."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
      >
        Send enquiry on WhatsApp
        <Send aria-hidden size={18} />
      </button>

      <p
        className="mt-4 min-h-6 text-sm leading-6 text-[var(--success)]"
        aria-live="polite"
      >
        {status === "ready"
          ? "Your WhatsApp enquiry is ready in a new tab."
          : "You will review the message in WhatsApp before sending."}
      </p>
    </form>
  );
}
