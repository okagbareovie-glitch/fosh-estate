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
      <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] md:min-h-[560px]">
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
            className="h-full min-h-[420px] w-full object-cover md:min-h-[560px]"
            controls
            playsInline
            preload="none"
            poster={activeItem.poster}
            aria-label={activeItem.title}
          >
            <source src={activeItem.src} />
          </video>
        )}

        <div className="absolute left-4 top-4 rounded-sm bg-white px-3 py-2 text-xs font-semibold text-[var(--navy)] shadow-[0_8px_20px_rgba(17,28,44,0.08)]">
          {activeItem.type === "image" ? "Image" : "Video"} {activeIndex + 1} of{" "}
          {media.length}
        </div>

        {media.length > 1 ? (
          <div className="absolute bottom-4 right-4 flex gap-2">
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

      <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {media.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.type} ${index + 1}`}
            aria-current={activeIndex === index}
            className={`relative aspect-[4/3] min-w-0 cursor-pointer overflow-hidden rounded-md border bg-[var(--surface-soft)] transition-colors duration-200 ${
              activeIndex === index
                ? "border-[var(--blue)]"
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
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-sm bg-white/95 px-2 py-1 text-[11px] font-semibold text-[var(--navy)]">
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
  );
}
