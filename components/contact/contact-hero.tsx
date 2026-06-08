import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/format";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative py-14 md:py-20 lg:py-24">
        <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
          Contact Fosh Estate
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            Speak with the team before you choose a plot.
          </h1>
          <div>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Ask for current availability, inspection dates, title guidance,
              pricing, and the best land option for your budget.
            </p>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to make an enquiry about available estate land."
              )}
              className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Start on WhatsApp
              <ArrowRight aria-hidden size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
