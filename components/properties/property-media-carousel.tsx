"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, Play } from "lucide-react";
import { useMemo, useState } from "react";
import type { Listing, ListingMedia } from "@/data/site";

type PropertyMediaCarouselProps = {
  listing: Listing;
};

export function PropertyMediaCarousel({ listing }: PropertyMediaCarouselProps) {
  const media = useMemo<ListingMedia[]>(
    () =>
      listing.media.length > 0
        ? listing.media
        : [
            {
              id: `${listing.id}-primary`,
              type: "image",
              src: listing.image.src,
              alt: listing.image.alt,
            },
          ],
    [listing]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = media[activeIndex];

  function goToPrevious() {
    setActiveIndex((index) => (index === 0 ? media.length - 1 : index - 1));
  }

  function goToNext() {
    setActiveIndex((index) => (index === media.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--navy)] sm:aspect-[16/10] lg:max-h-[620px]">
        {activeItem.type === "image" ? (
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover"
          />
        ) : (
          <video
            key={activeItem.id}
            className="absolute inset-0 h-full w-full object-contain"
            controls
            playsInline
            preload="none"
            poster={activeItem.poster}
            aria-label={activeItem.title}
          >
            <source src={activeItem.src} />
          </video>
        )}

        <div className="absolute left-3 top-3 rounded-sm bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.08)] sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-xs">
          {activeItem.type === "image" ? "Image" : "Video"} {activeIndex + 1} of{" "}
          {media.length}
        </div>

        {media.length > 1 ? (
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 items-center justify-between gap-2 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:top-auto sm:translate-y-0 sm:justify-end">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous media"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-white/40 bg-white text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.12)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
            >
              <ChevronLeft aria-hidden size={20} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Show next media"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-white/40 bg-white text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.12)] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
            >
              <ChevronRight aria-hidden size={20} />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-3 max-w-full overflow-hidden border border-[var(--line)] bg-white p-3 sm:mt-4">
        <div className="flex items-center justify-between gap-4 px-1">
          <p className="text-sm font-semibold text-[var(--navy)]">
            Media gallery
          </p>
          <p className="text-xs font-medium text-[var(--muted)]">
            {activeIndex + 1} of {media.length}
          </p>
        </div>

        <div className="mt-3 flex max-w-full snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] sm:gap-3">
          {media.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.type} ${index + 1}`}
              aria-current={activeIndex === index}
              className={`relative aspect-[4/3] w-20 shrink-0 snap-start cursor-pointer overflow-hidden rounded-md border bg-[var(--surface-soft)] transition-colors duration-200 min-[420px]:w-24 sm:w-36 lg:w-40 ${
                activeIndex === index
                  ? "border-[var(--blue)] ring-2 ring-[rgba(0,116,217,0.18)]"
                  : "border-[var(--line)] hover:border-[var(--line-strong)]"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              ) : item.poster ? (
                <Image
                  src={item.poster}
                  alt={item.title}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              ) : (
                <span className="grid h-full w-full place-items-center bg-[var(--navy)] text-white">
                  <Play aria-hidden size={24} />
                </span>
              )}
              <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-sm bg-white/95 px-1.5 py-1 text-[10px] font-semibold text-[var(--navy)] sm:bottom-2 sm:left-2 sm:px-2 sm:text-[11px]">
                {item.type === "image" ? (
                  <ImageIcon aria-hidden size={12} />
                ) : (
                  <Play aria-hidden size={12} />
                )}
                {item.type}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
