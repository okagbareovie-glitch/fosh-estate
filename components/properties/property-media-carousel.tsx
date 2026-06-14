"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon, Play } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TouchEvent } from "react";
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
  const thumbsRef = useRef<HTMLDivElement>(null);
  const activeThumbRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goToPrevious = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  }, [media.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((i) => (i === media.length - 1 ? 0 : i + 1));
  }, [media.length]);

  useEffect(() => {
    if (media.length <= 1) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToNext, goToPrevious, media.length]);

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [activeIndex]);

  function handleTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    if (touchStartX.current === null || media.length <= 1) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  }

  return (
    <div className="pmc-root">
      <style>{`
        .pmc-root {
          min-width: 0;
          width: 100%;
        }

        .pmc-viewer {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
          background: var(--navy, #000818);
          border: 1px solid rgba(255, 255, 255, 0.08);
          touch-action: pan-y;
          user-select: none;
        }

        .pmc-viewer-image {
          object-fit: cover;
        }

        .pmc-viewer-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .pmc-viewer-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 8, 24, 0.18) 0%,
            transparent 25%,
            transparent 65%,
            rgba(0, 8, 24, 0.32) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .pmc-counter {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(0, 8, 24, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-family: Inter, sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.9);
          pointer-events: none;
        }

        .pmc-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 8, 24, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease;
          padding: 0;
        }

        .pmc-nav:hover {
          background: rgba(26, 107, 255, 0.75);
          border-color: rgba(26, 107, 255, 0.55);
        }

        .pmc-nav--prev {
          left: 14px;
        }

        .pmc-nav--next {
          right: 14px;
        }

        .pmc-thumbs {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
        }

        .pmc-thumb {
          position: relative;
          width: 80px;
          aspect-ratio: 4 / 3;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          border: 2px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          padding: 0;
          opacity: 0.55;
          transition: opacity 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }

        @media (min-width: 480px) {
          .pmc-thumb {
            width: 96px;
          }
        }

        @media (min-width: 640px) {
          .pmc-thumb {
            width: 110px;
          }
        }

        .pmc-thumb:hover:not(.pmc-thumb--active) {
          opacity: 0.85;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .pmc-thumb--active {
          opacity: 1;
          border-color: #1a6bff;
          box-shadow: 0 0 0 3px rgba(26, 107, 255, 0.2);
        }

        .pmc-thumb-img {
          object-fit: cover;
        }

        .pmc-thumb-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 8, 24, 0.45);
          color: #fff;
          z-index: 1;
        }

        .pmc-thumb-no-poster {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy, #000818);
          color: rgba(255, 255, 255, 0.6);
        }

        .pmc-thumb-badge {
          position: absolute;
          bottom: 5px;
          left: 5px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 7px;
          border-radius: 4px;
          background: rgba(0, 8, 24, 0.75);
          backdrop-filter: blur(6px);
          font-family: Inter, sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.88);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .pmc-nav,
          .pmc-thumb {
            transition: none;
          }
        }
      `}</style>

      <div
        className="pmc-viewer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {activeItem.type === "image" ? (
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="pmc-viewer-image"
          />
        ) : (
          <video
            key={activeItem.id}
            className="pmc-viewer-video"
            controls
            playsInline
            preload="none"
            poster={activeItem.poster}
            aria-label={activeItem.title}
          >
            <source src={activeItem.src} />
          </video>
        )}

        <div className="pmc-viewer-grad" aria-hidden="true" />

        <div className="pmc-counter" aria-live="polite" aria-atomic="true">
          {activeItem.type === "image" ? (
            <ImageIcon aria-hidden size={12} />
          ) : (
            <Play aria-hidden size={12} />
          )}
          {activeIndex + 1} / {media.length}
        </div>

        {media.length > 1 && (
          <>
            <button
              type="button"
              className="pmc-nav pmc-nav--prev"
              onClick={goToPrevious}
              aria-label="Previous media"
            >
              <ChevronLeft aria-hidden size={22} />
            </button>
            <button
              type="button"
              className="pmc-nav pmc-nav--next"
              onClick={goToNext}
              aria-label="Next media"
            >
              <ChevronRight aria-hidden size={22} />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="pmc-thumbs" ref={thumbsRef}>
          {media.map((item, index) => (
            <button
              key={item.id}
              type="button"
              ref={index === activeIndex ? activeThumbRef : undefined}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${item.type} ${index + 1}`}
              aria-current={index === activeIndex ? true : undefined}
              className={`pmc-thumb${index === activeIndex ? " pmc-thumb--active" : ""}`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="110px"
                  className="pmc-thumb-img"
                />
              ) : item.poster ? (
                <>
                  <Image
                    src={item.poster}
                    alt={item.title ?? "Video"}
                    fill
                    sizes="110px"
                    className="pmc-thumb-img"
                  />
                  <span className="pmc-thumb-play" aria-hidden="true">
                    <Play size={16} />
                  </span>
                </>
              ) : (
                <span className="pmc-thumb-no-poster" aria-hidden="true">
                  <Play size={18} />
                </span>
              )}
              <span className="pmc-thumb-badge" aria-hidden="true">
                {item.type === "image" ? (
                  <ImageIcon size={9} />
                ) : (
                  <Play size={9} />
                )}
                {item.type}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
