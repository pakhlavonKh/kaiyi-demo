import { useLang } from "@/lib/lang-context";
import { engineSpecs } from "./engine-data";
import type { Engine } from "./engine-data";
import type { CarColor } from "@/App";

const colorMap: Record<CarColor, { labelKey: string; tint: string; bg: string; chip: string }> = {
  white: {
    labelKey: "color.white",
    tint: "rgba(245,246,247,0.96)",
    bg: "radial-gradient(ellipse at 60% 55%, rgba(245,246,247,0.55) 0%, rgba(232,235,238,0.22) 18%, rgba(21,23,26,0.72) 50%, #090A0B 82%)",
    chip: "border-white/35 bg-white/15",
  },
  black: {
    labelKey: "color.black",
    tint: "rgba(18,19,20,0.96)",
    bg: "radial-gradient(ellipse at 60% 55%, rgba(107,110,116,0.30) 0%, rgba(24,26,28,0.38) 20%, rgba(9,10,11,0.82) 56%, #060708 82%)",
    chip: "border-white/12 bg-white/6",
  },
  grey: {
    labelKey: "color.grey",
    tint: "rgba(155,160,166,0.96)",
    bg: "radial-gradient(ellipse at 60% 55%, rgba(206,210,214,0.40) 0%, rgba(128,132,138,0.24) 18%, rgba(21,23,26,0.72) 52%, #090A0B 82%)",
    chip: "border-white/22 bg-white/10",
  },
};

export function Hero({
  engine,
  color,
  onEngineChange,
  onColorChange,
}: {
  engine: Engine;
  color: CarColor;
  onEngineChange: (e: Engine) => void;
  onColorChange: (c: CarColor) => void;
}) {
  const { t, lang } = useLang();
  const spec = engineSpecs[engine];
  const colorMeta = colorMap[color];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[color:var(--obsidian)]">
      {/* PLACEHOLDER: full-bleed studio photo of Kaiyi X7, 3/4 front, dark background.
          Replace gas/hybrid variants below with two real press photos. */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${engine === "gas" ? "opacity-100" : "opacity-0"}`}
          style={{
            background: colorMeta.bg,
          }}
          aria-label="Kaiyi X7 — gas variant photo placeholder"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${engine === "hybrid" ? "opacity-100" : "opacity-0"}`}
          style={{
            background: colorMeta.bg,
          }}
          aria-label="Kaiyi X7 — hybrid variant photo placeholder"
        />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[color:var(--obsidian)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div
          className="absolute inset-x-0 top-0 h-full opacity-70 mix-blend-screen"
          style={{ background: `radial-gradient(circle at 52% 40%, ${colorMeta.tint} 0%, transparent 28%)` }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 md:px-8 py-16 md:py-18">
        <div className="grid items-end gap-8 xl:grid-cols-[1.35fr_0.65fr] xl:gap-10">
          <div>
            <div className="section-kicker mb-4">
              <span className="h-px w-10 chrome-line" />
            {t("hero.label")}
            </div>

            <div className="max-w-4xl">
              <h1 className="text-display-xl text-[color:var(--pearl)] text-[clamp(3.2rem,10vw,9.2rem)] max-w-4xl">
            {t("hero.title")}
              </h1>

              <p className="mt-4 max-w-xl text-[color:var(--steel)] text-sm md:text-base leading-relaxed">
                {engine === "gas" ? t("hero.sub.gas") : t("hero.sub.hybrid")}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  engine === "gas" ? "197 hp" : "279 hp",
                  engine === "gas" ? "7.8 l / 100 km" : "4.9 l / 100 km",
                  lang === "uz" ? "3 rang varianti" : "3 цветовых варианта",
                ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[9px] font-semibold tracking-[0.18em] uppercase text-[color:var(--pearl)] backdrop-blur-md"
                >
                  {chip}
                </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-surface-soft rounded-[24px] p-3.5 md:p-4 xl:mt-1 xl:w-[22rem] xl:justify-self-end">
            <div className="text-[9px] tracking-[0.25em] uppercase text-[color:var(--steel)]">
              {lang === "uz" ? "Tashqi rang" : "Цвет кузова"}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(["white", "black", "grey"] as CarColor[]).map((option) => {
                const label = t(colorMap[option].labelKey);
                const isActive = color === option;
                return (
                  <button
                    key={option}
                    onClick={() => onColorChange(option)}
                    className={`group flex flex-col items-start gap-2 rounded-2xl border p-2.5 text-left transition-all ${
                      isActive
                        ? "border-white/30 bg-white/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                    }`}
                  >
                    <span
                      className="h-10 w-full rounded-xl border border-white/10"
                      style={{ background: color === option ? colorMeta.bg : colorMap[option].bg }}
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[color:var(--pearl)]">
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] tracking-[0.16em] uppercase text-[color:var(--steel)]">
              <span>{lang === "uz" ? "Tanlangan rang" : "Выбранный цвет"}</span>
              <span className="text-[color:var(--pearl)]">{t(colorMeta.labelKey)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {(["gas", "hybrid"] as Engine[]).map((e) => (
              <button
                key={e}
                onClick={() => onEngineChange(e)}
                className={`rounded-full px-5 py-2.5 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  engine === e
                    ? "bg-[color:var(--pearl)] text-[color:var(--obsidian)] shadow-sm"
                    : "text-[color:var(--steel)] hover:text-[color:var(--pearl)]"
                }`}
              >
                {lang === "uz" ? (e === "gas" ? "Benzin" : "Gibrid") : e === "gas" ? "Бензин" : "Гибрид"}
              </button>
              ))}
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--steel)]">
              {lang === "uz" ? "Studiya ko'rinishi" : "Studio view"}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="btn-ember btn-ember-hover">{t("cta.testdrive")}</button>
            <button className="btn-outline">{t("cta.prices")}</button>
          </div>

          <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { label: lang === "uz" ? "Maks quvvat" : "Мощность", value: `${spec.power} hp` },
              { label: lang === "uz" ? "0-100" : "0-100", value: `${spec.accel} s` },
              { label: lang === "uz" ? "Boshlanadi" : "От", value: `${spec.priceFrom} so'm` },
            ].map((item) => (
              <div key={item.label} className="panel-surface-soft rounded-2xl px-4 py-4">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--steel)]">{item.label}</div>
                <div className="mt-2 font-display text-xl font-bold text-[color:var(--pearl)]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
