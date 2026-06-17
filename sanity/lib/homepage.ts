import { hasSanityConfig } from "../env";
import { liveClient } from "./client";
import { homepageContentQuery } from "./queries";

export type HomepageContent = {
  heroSubtext: string;
  heroPrimaryButtonText: string;
  heroSecondaryButtonText: string;
  heroActiveEstatesValue: string;
  finalCtaHeadingLine: string;
  finalCtaHeadingEmphasis: string;
  finalCtaBody: string;
};

type SanityHomepageContent = Partial<HomepageContent> | null;

export const defaultHomepageContent: HomepageContent = {
  heroSubtext:
    "Fosh Estate helps families and investors secure estate land with transparent pricing, guided site inspections, and support at every step before you commit a naira.",
  heroPrimaryButtonText: "Book a site inspection",
  heroSecondaryButtonText: "See current listings",
  heroActiveEstatesValue: "10+",
  finalCtaHeadingLine: "Your plot is waiting.",
  finalCtaHeadingEmphasis: "Speak to us today.",
  finalCtaBody:
    "Get current availability, pricing, payment plans, and title information directly from the Fosh Estate team. We inspect together, no guesswork, no middlemen.",
};

function withFallback(value: string | undefined, fallback: string) {
  const trimmedValue = value?.trim();
  return trimmedValue ? trimmedValue : fallback;
}

function resolveHomepageContent(
  content: SanityHomepageContent,
): HomepageContent {
  return {
    heroSubtext: withFallback(
      content?.heroSubtext,
      defaultHomepageContent.heroSubtext,
    ),
    heroPrimaryButtonText: withFallback(
      content?.heroPrimaryButtonText,
      defaultHomepageContent.heroPrimaryButtonText,
    ),
    heroSecondaryButtonText: withFallback(
      content?.heroSecondaryButtonText,
      defaultHomepageContent.heroSecondaryButtonText,
    ),
    heroActiveEstatesValue: withFallback(
      content?.heroActiveEstatesValue,
      defaultHomepageContent.heroActiveEstatesValue,
    ),
    finalCtaHeadingLine: withFallback(
      content?.finalCtaHeadingLine,
      defaultHomepageContent.finalCtaHeadingLine,
    ),
    finalCtaHeadingEmphasis: withFallback(
      content?.finalCtaHeadingEmphasis,
      defaultHomepageContent.finalCtaHeadingEmphasis,
    ),
    finalCtaBody: withFallback(
      content?.finalCtaBody,
      defaultHomepageContent.finalCtaBody,
    ),
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  if (!hasSanityConfig) {
    return defaultHomepageContent;
  }

  try {
    const content = await liveClient.fetch<SanityHomepageContent>(
      homepageContentQuery,
      {},
    );

    return resolveHomepageContent(content);
  } catch {
    return defaultHomepageContent;
  }
}
