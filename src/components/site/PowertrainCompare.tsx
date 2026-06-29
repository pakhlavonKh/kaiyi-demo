import { useLang } from "@/lib/lang-context";
import { engineSpecs, type Engine } from "./engine-data";

const rows: Array<{ key: string; gas: string; hybrid: string }> = [
  { key: "stat.power", gas: "197", hybrid: "279" },
  { key: "stat.accel", gas: "9.4", hybrid: "7.5" },
  { key: "stat.consumption", gas: "7.8", hybrid: "4.9" },
];

export function PowertrainCompare({ onSelect }: { onSelect: (e: Engine) => void }) {
  const { t, lang } = useLang();

  const column = (engine: Engine) => {
    const spec = engineSpecs[engine];
    const label = lang === "uz" ? (engine === "gas" ? "Benzin" : "Gibrid Kunpeng iHD") : engine === "gas" ? "Бензин" : "Гибрид Kunpeng iHD";
    return (
      <div className="flex-1 panel-surface rounded-[28px] px-6 md:px-10 py-10 md:py-12">
        <div className="text-[10px] tracking-[0.25em] uppercase text-[color:var(--steel)] mb-3">
          {lang === "uz" ? "Versiya" : "Версия"}
        </div>
        <h3 className="font-display font-black text-3xl md:text-4xl text-[color:var(--pearl)] mb-10">
          {label}
        </h3>

        <dl className="space-y-7">
          {rows.map((r) => (
            <div key={r.key} className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-4">
              <dt className="text-xs tracking-wider uppercase text-[color:var(--steel)]">{t(r.key)}</dt>
              <dd className="font-display font-extrabold text-2xl md:text-3xl text-[color:var(--pearl)] tabular">
                {engine === "gas" ? r.gas : r.hybrid}
                <span className="ml-2 text-xs font-medium text-[color:var(--steel)]">
                  {r.key === "stat.power" ? t("unit.hp") : r.key === "stat.accel" ? t("unit.sec") : t("unit.l100")}
                </span>
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-6 pt-2">
            <dt className="text-xs tracking-wider uppercase text-[color:var(--steel)]">{t("stat.price")}</dt>
            <dd className="font-display font-extrabold text-2xl md:text-3xl text-[color:var(--pearl)] tabular">
              {spec.priceFrom}
              <span className="ml-2 text-xs font-medium text-[color:var(--steel)]">
                {lang === "uz" ? "so'm" : "сум"}
              </span>
            </dd>
          </div>
        </dl>

        <button onClick={() => onSelect(engine)} className="btn-ember btn-ember-hover mt-10 w-full">
          {lang === "uz" ? "Versiyani tanlash" : "Выбрать версию"}
        </button>
      </div>
    );
  };

  return (
    <section className="border-b border-white/8 bg-[color:var(--obsidian)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 pt-20 md:pt-28 pb-8">
        <div className="section-kicker mb-6">
          <span className="h-px w-10 chrome-line" />
          {lang === "uz" ? "KUCH AGREGATI" : "СИЛОВОЙ АГРЕГАТ"}
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-[color:var(--pearl)] max-w-3xl">
          {lang === "uz" ? "Ikki versiya, bitta darajadagi X7." : "Две версии, один уровень X7."}
        </h2>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-8 pb-6 md:pb-10 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
        {column("gas")}
        <div aria-hidden className="hidden md:flex items-center justify-center">
          <div className="h-full w-px chrome-line rounded-full" />
        </div>
        <div aria-hidden className="md:hidden h-px chrome-line mx-4" />
        {column("hybrid")}
      </div>
    </section>
  );
}
