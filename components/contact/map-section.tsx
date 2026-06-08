import { mapLocations } from "@/data/site";
import { MapboxCoverageMap } from "./mapbox-coverage-map";

export function MapSection() {
  return (
    <section id="coverage-map" className="section-y bg-white">
      <div className="container-page">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[var(--blue)]">
              Coverage map
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
              Operating across Nigeria’s active real estate corridors.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
            The map highlights current operating markets. Exact estate
            coordinates can be added when the client confirms approved site
            locations and inspection meeting points.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <MapboxCoverageMap locations={mapLocations} />
          <div className="grid gap-3">
            {mapLocations.map((location) => (
              <article
                key={location.id}
                className="border border-[var(--line)] bg-[var(--background)] p-5"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                  {location.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {location.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
