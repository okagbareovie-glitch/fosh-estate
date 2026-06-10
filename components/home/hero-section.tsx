import type { Listing } from "@/data/site";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl, formatCompactNaira } from "@/lib/format";
import { HeroSection as SplitHeroSection } from "@/components/ui/hero-section-2";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function HeroSection({ listings }: { listings: Listing[] }) {
  const lowestPrice =
    listings.length > 0
      ? Math.min(...listings.map((listing) => listing.price))
      : 0;
  const activeStates = getActiveStates(listings);
  const stateSummary =
    activeStates.length > 0
      ? `Active in ${formatStateList(activeStates)}`
      : "Listings update from the CMS";

  return (
    <SplitHeroSection
      logo={{
        url: siteConfig.logo,
        alt: "Fosh Estate logo",
      }}
      slogan="SECURE. PRIME. PROFITABLE."
      eyebrow={stateSummary}
      title={
        <>
          Fosh Estate.
          <br />
          <span className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[var(--blue)]">
            Creating
            <ContainerTextFlip
              words={["Legacy", "Ownership", "Value", "Security", "Growth"]}
              className="text-[0.92em]"
              textClassName="font-[family-name:var(--font-display)]"
            />
          </span>
        </>
      }
      subtitle="Fosh Estate helps families and investors secure land opportunities with clear pricing, practical inspection support, and a long-term view of ownership value."
      callToAction={{
        text: "Book an inspection",
        href: createWhatsAppUrl(
          "Hello Fosh Estate, I want to book an inspection or ask about available estate land.",
        ),
      }}
      secondaryAction={{
        text: "View available land",
        href: "#featured-listings",
      }}
      backgroundImage={siteConfig.heroImage}
      contactInfo={{
        website: siteConfig.publicDomain,
        phone: siteConfig.phone,
        address:
          listings.length > 0
            ? `${listings.length} listing${listings.length === 1 ? "" : "s"} from ${formatCompactNaira(
                lowestPrice,
              )}`
            : "Listings loading from CMS",
      }}
    />
  );
}

function getActiveStates(listings: Listing[]) {
  return Array.from(
    new Set(
      listings
        .map((listing) => listing.state.trim())
        .filter(
          (state) =>
            state.length > 0 &&
            state.toLowerCase() !== "location pending" &&
            state.toLowerCase() !== "states pending",
        ),
    ),
  ).sort((firstState, secondState) => firstState.localeCompare(secondState));
}

function formatStateList(states: string[]) {
  const visibleStates = states.slice(0, 3);

  if (visibleStates.length === 1) return visibleStates[0];
  if (visibleStates.length === 2) return visibleStates.join(" and ");

  const summary = `${visibleStates.slice(0, 2).join(", ")} and ${
    visibleStates[2]
  }`;

  return states.length > visibleStates.length
    ? `${summary} +${states.length - visibleStates.length} more`
    : summary;
}
