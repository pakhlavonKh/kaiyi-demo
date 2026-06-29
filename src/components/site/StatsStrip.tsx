import { useLang } from "@/lib/lang-context";
import { engineSpecs, type Engine } from "./engine-data";

export function StatsStrip({ engine }: { engine: Engine }) {
  const { t, lang } = useLang();
  const spec = engineSpecs[engine];

  const items = [
    { label: t("stat.power"), value: spec.power, unit: t("unit.hp") },
    { label: t("stat.accel"), value: spec.accel, unit: t("unit.sec") },
    { label: t("stat.consumption"), value: spec.consumption, unit: t("unit.l100") },
    {
      label: t("stat.price"),
      value: spec.priceFrom,
      unit: lang === "uz" ? "so'm" : "сум",
    },
  ];

  return (
    <section className="border-y border-white/8 bg-[color:var(--graphite)]/70">
      <div className="mx-auto max-w-[1440px] grid gap-px rounded-none md:grid-cols-4 md:gap-3 px-0 md:px-6 py-0 md:py-6">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="panel-surface-soft px-6 md:px-8 py-9 md:py-10 md:rounded-[1.75rem]"
          >
            <div className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--steel)] mb-4">
              {it.label}
            </div>
            <div className="font-display font-black text-[color:var(--pearl)] text-4xl md:text-5xl tabular leading-none transition-all duration-500">
              {it.value}
            </div>
            <div className="mt-2 text-xs text-[color:var(--steel)]">{it.unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
