import { Building2, MapPinned, ShieldCheck } from "lucide-react";

const missionItems = [
  {
    title: "Mission",
    copy: "To help families, first-time buyers, and investors approach land ownership with clearer information, guided inspections, and practical next steps.",
    icon: ShieldCheck,
  },
  {
    title: "Vision",
    copy: "To become a trusted real estate partner for people building lasting value through land and property ownership in Nigeria.",
    icon: Building2,
  },
  {
    title: "Footprint",
    copy: "Focused on selected growth markets including Rivers, FCT, and Ogun, with expansion guided by demand, access, and buyer confidence.",
    icon: MapPinned,
  },
];

export function MissionSection() {
  return (
    <section className="bg-[var(--navy)] py-16 text-white md:py-20">
      <div className="container-page grid gap-5 md:grid-cols-3">
        {missionItems.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="border border-white/20 bg-white/10 p-6">
              <Icon aria-hidden className="text-[#afc8f0]" size={26} />
              <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d4e3ff]">
                {item.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
