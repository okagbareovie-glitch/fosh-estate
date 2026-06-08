import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { createTelUrl, createWhatsAppUrl } from "@/lib/format";

export function FinalCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page border border-[var(--line)] bg-[var(--navy)] p-6 text-white md:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[#afc8f0]">
              Inspection and enquiry
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
              Start with the estate phase that matches your budget.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#d4e3ff]">
              Ask for available plots, payment details, inspection dates, and
              title information before you make a decision.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to make an enquiry and book an inspection."
              )}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[var(--navy)] transition-colors duration-200 hover:bg-[#d4e3ff]"
            >
              Send WhatsApp message
              <ArrowRight aria-hidden size={17} />
            </a>
            <a
              href={createTelUrl(siteConfig.phone)}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Phone aria-hidden size={17} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
