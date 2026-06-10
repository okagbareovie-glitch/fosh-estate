import { MapPinned } from "lucide-react";
import { operatingAreas } from "@/data/site";

export function AreasSection() {
  return (
    <section className="bg-[var(--navy)] py-16 text-white md:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="font-[family-name:var(--font-label)] text-sm font-semibold text-[#afc8f0]">
            Areas of operation
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
            Focused on markets where land demand keeps moving.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {operatingAreas.map((area) => (
            <div
              key={area}
              className="border border-white/20 bg-white/10 p-5 text-white"
            >
              <MapPinned aria-hidden className="text-[#afc8f0]" size={24} />
              <p className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold">
                {area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
