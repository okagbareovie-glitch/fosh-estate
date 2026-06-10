"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import type { MapLocation } from "@/data/site";

type MapboxCoverageMapProps = {
  locations: MapLocation[];
};

export function MapboxCoverageMap({ locations }: MapboxCoverageMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [hasMapError, setHasMapError] = useState(false);
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    if (!containerRef.current || !accessToken || mapRef.current) {
      return;
    }

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/standard",
      center: [5.35, 7.35],
      zoom: 5,
      attributionControl: false,
    });

    mapRef.current = map;
    map.once("load", () => {
      requestAnimationFrame(() => map.resize());
    });
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), "bottom-right");
    map.on("error", () => setHasMapError(true));

    locations.forEach((location) => {
      new mapboxgl.Marker({ color: "#005eb2" })
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 18 }).setHTML(
            `<strong>${location.name}</strong><p>${location.summary}</p>`
          )
        )
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [accessToken, locations]);

  if (!accessToken || hasMapError) {
    return <MapFallback locations={locations} />;
  }

  return (
    <div className="h-[420px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] md:h-[520px]">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}

function MapFallback({ locations }: MapboxCoverageMapProps) {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(231,238,255,0.35))]" />
      <div className="absolute left-[-8%] top-[58%] h-24 w-[120%] -rotate-[24deg] bg-white" />
      <div className="absolute left-[18%] top-[18%] h-32 w-44 border border-[var(--line)] bg-white/85" />
      <div className="absolute right-[12%] top-[24%] h-28 w-40 border border-[var(--line)] bg-white/85" />
      <div className="absolute bottom-[16%] left-[38%] h-28 w-48 border border-[var(--line)] bg-white/85" />
      <div className="relative z-10 flex h-full min-h-[470px] flex-col justify-between">
        <div className="max-w-md border border-[var(--line)] bg-white/95 p-5">
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
            Mapbox token pending
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Add `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` to `.env.local` to activate
            the interactive map. This placeholder keeps the layout polished
            until then.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="border border-[var(--line)] bg-white p-4 shadow-[0_10px_30px_rgba(17,28,44,0.08)]"
            >
              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--navy)]">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
