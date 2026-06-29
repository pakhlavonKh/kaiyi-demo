import { useLang } from "@/lib/lang-context";

// PLACEHOLDER: replace each item with a real Kaiyi X7 press photo.
// Recommended frames: front 3/4, rear 3/4, side profile, interior dashboard,
// steering wheel detail, seat detail, wheel close-up, taillight at night.
const items = [
  { hint: "Front 3/4, studio", grad: "linear-gradient(135deg,#1f2125,#0E0F11)" },
  { hint: "Rear 3/4, studio", grad: "linear-gradient(135deg,#1c2026,#0E0F11)" },
  { hint: "Side profile", grad: "linear-gradient(135deg,#23262b,#0E0F11)" },
  { hint: "Interior dashboard", grad: "linear-gradient(135deg,#1a1d22,#0E0F11)" },
  { hint: "Steering wheel detail", grad: "linear-gradient(135deg,#202329,#0E0F11)" },
  { hint: "Wheel close-up", grad: "linear-gradient(135deg,#1d2024,#0E0F11)" },
  { hint: "Taillight at night", grad: "linear-gradient(135deg,#15171b,#0E0F11)" },
  { hint: "Front headlight detail", grad: "linear-gradient(135deg,#1e2126,#0E0F11)" },
];

export function Gallery() {
  const { lang } = useLang();
  return (
    <section className="border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <div className="section-kicker mb-6">
          <span className="h-px w-10 chrome-line" />
          {lang === "uz" ? "GALEREYA" : "ГАЛЕРЕЯ"}
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-[color:var(--pearl)] mb-12">
          {lang === "uz" ? "X7 yaqindan." : "X7 вблизи."}
        </h2>
      </div>

      <div className="scrollbar-soft overflow-x-auto pb-3 pl-6 md:pl-8">
        <div className="flex gap-4 md:gap-6 pr-6 md:pr-8">
          {items.map((it, i) => (
            <figure
              key={i}
              className="relative shrink-0 w-[78vw] sm:w-[440px] md:w-[520px] aspect-[4/3] overflow-hidden rounded-[28px] panel-surface"
              style={{ background: it.grad }}
              aria-label={`Kaiyi X7 — ${it.hint}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,10,11,0)_45%,rgba(9,10,11,0.72)_100%)]" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[color:var(--steel)]">
                <span>Studio frame</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="absolute inset-0 flex items-end p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--pearl)]/80">
                  {/* visual hint only, remove when real images are wired */}
                  {it.hint}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
