import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPinned } from "lucide-react";
import { featuredListings, operatingAreas } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

const lowestPrice = Math.min(...featuredListings.map((listing) => listing.price));

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Land ownership across Lagos, Port Harcourt, and Abuja
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
            Building Dreams. Creating Legacy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Fosh Estate helps families and investors secure prime estate land
            with clear pricing, practical inspection support, and a long-term
            view of value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, I want to book an inspection or ask about available estate land."
              )}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Book an inspection
              <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href="#featured-listings"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-6 text-base font-semibold text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)]"
            >
              View estate phases
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-y border-[var(--line)] py-6 sm:grid-cols-3">
            <HeroStat label="Starting from" value={formatNaira(lowestPrice)} />
            <HeroStat label="Current phases" value="5" />
            <HeroStat label="Focus" value="Secure land" />
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--navy)] surface-shadow">
          <Image
            src="/media/hero-estate.svg"
            alt="Premium estate land planning visual for Fosh Estate"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="image-rendering-clean object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,6,19,0.08)_0%,rgba(0,6,19,0.72)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <div className="border border-white/20 bg-white/95 p-5 text-[var(--ink)] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--success)]">
                <CheckCircle2 aria-hidden size={17} />
                Secure. Prime. Profitable.
              </div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                Estate phases designed for ownership confidence.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {operatingAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-sm font-medium text-[var(--navy)]"
                  >
                    <MapPinned aria-hidden size={15} />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
        {value}
      </p>
    </div>
  );
}
