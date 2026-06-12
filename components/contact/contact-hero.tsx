import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative pb-14 pt-32 md:pb-20 md:pt-32 lg:py-24">
        <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
          Contact Fosh Estate
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            Ask about availability, pricing, and inspection before you commit.
          </h1>
          <div>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Tell us your preferred location, budget, and timeline. The Fosh
              Estate team can share current land options, inspection guidance,
              and the next questions to ask before payment.
            </p>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to make a land enquiry. Please send current availability, pricing, and inspection details."
              )}
              className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Start your enquiry
              <ArrowRight aria-hidden size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
