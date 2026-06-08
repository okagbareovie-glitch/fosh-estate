import { ArrowRight, BadgeCheck, MapPinned, Search } from "lucide-react";
import { featuredListings } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

const lowestPrice = Math.min(...featuredListings.map((listing) => listing.price));

export function PropertiesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative py-14 md:py-20 lg:py-24">
        <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
          Available estate land
        </p>
        <div className="mt-5 grid gap-9 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
              Compare estate phases before you book an inspection.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Browse current Fosh Estate land opportunities by location,
              budget, and availability. Each phase is structured for clear
              enquiry and direct inspection follow-up.
            </p>
          </div>

          <div className="border border-[var(--line)] bg-white p-5 surface-shadow">
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <Search aria-hidden className="text-[var(--blue)]" size={24} />
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                Quick property brief
              </p>
            </div>
            <div className="grid gap-4 py-5">
              <HeroFact icon={BadgeCheck} label="Current phases" value="5 estate phases" />
              <HeroFact icon={MapPinned} label="Starting from" value={formatNaira(lowestPrice)} />
              <HeroFact icon={MapPinned} label="Current locations" value="Ayetoro and Ashipa" />
            </div>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, please send me the full property price list and inspection details."
              )}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Request full property list
              <ArrowRight aria-hidden size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BadgeCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon aria-hidden className="mt-1 shrink-0 text-[var(--blue)]" size={18} />
      <div>
        <p className="text-sm text-[var(--muted)]">{label}</p>
        <p className="mt-1 font-semibold text-[var(--navy)]">{value}</p>
      </div>
    </div>
  );
}
