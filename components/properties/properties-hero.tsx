import { ArrowRight, BadgeCheck, MapPinned, Search } from "lucide-react";
import type { Listing } from "@/data/site";
import { createWhatsAppUrl, formatNaira } from "@/lib/format";

export function PropertiesHero({ listings }: { listings: Listing[] }) {
  const lowestPrice =
    listings.length > 0
      ? Math.min(...listings.map((listing) => listing.price))
      : 0;
  const states = Array.from(
    new Set(listings.map((listing) => listing.state).filter(Boolean))
  ).sort((firstLocation, secondLocation) =>
    firstLocation.localeCompare(secondLocation)
  );
  const stateSummary =
    states.length > 0 ? formatStateSummary(states) : "States pending";

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#e7eeff_0%,rgba(231,238,255,0)_100%)]" />
      <div className="container-page relative pb-14 pt-32 md:pb-20 md:pt-32 lg:py-24">
        <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
          Current land opportunities
        </p>
        <div className="mt-5 grid gap-9 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[var(--navy)] sm:text-6xl lg:text-7xl">
              Find the land option that fits your budget and next move.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Review current Fosh Estate listings by state, address, price, and
              availability. When a land option looks right, request the latest
              details and book an inspection before making a payment decision.
            </p>
          </div>

          <div className="border border-[var(--line)] bg-white p-5 surface-shadow">
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <Search aria-hidden className="text-[var(--blue)]" size={24} />
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                Quick land brief
              </p>
            </div>
            <div className="grid gap-4 py-5">
              <HeroFact
                icon={BadgeCheck}
                label="Available listings"
                value={`${listings.length} land options`}
              />
              <HeroFact icon={MapPinned} label="Prices from" value={formatNaira(lowestPrice)} />
              <HeroFact
                icon={MapPinned}
                label="Current states"
                value={stateSummary}
              />
            </div>
            <a
              href={createWhatsAppUrl(
                "Hello Fosh Estate, please send me the full property price list and inspection details."
              )}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--navy-2)]"
            >
              Request current land list
              <ArrowRight aria-hidden size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatStateSummary(states: string[]) {
  if (states.length <= 2) {
    return states.join(" and ");
  }

  return `${states.slice(0, 2).join(", ")} +${states.length - 2} more`;
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
