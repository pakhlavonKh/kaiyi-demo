import { useMemo, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { submitLead } from "@/lib/leads";

const PRICE = 289_000_000;

function fmt(n: number) {
  return n.toLocaleString("ru-RU").replace(/,/g, " ");
}

export function FinanceBlock() {
  const { t, lang } = useLang();
  const [down, setDown] = useState(30); // percent
  const [term, setTerm] = useState(36); // months
  const [mode, setMode] = useState<"credit" | "instalment">("credit");

  const monthly = useMemo(() => {
    const principal = PRICE * (1 - down / 100);
    if (mode === "instalment") return Math.round(principal / term);
    const r = 0.022; // ~26.4% APR placeholder
    const m = (principal * r) / (1 - Math.pow(1 + r, -term));
    return Math.round(m);
  }, [down, term, mode]);

  const [sent, setSent] = useState(false);

  const send = async () => {
    await submitLead({
      type: "finance_calc",
      mode,
      down_percent: down,
      term_months: term,
      monthly_estimate: monthly,
    });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="finance" className="border-b border-white/8 bg-[color:var(--graphite)]/70 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="section-kicker mb-6">
            <span className="h-px w-10 chrome-line" />
            {lang === "uz" ? "MOLIYALASHTIRISH" : "ФИНАНСИРОВАНИЕ"}
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[color:var(--pearl)] mb-8">
            {lang === "uz" ? "Kredit yoki bo'lib to'lash." : "Кредит или рассрочка."}
          </h2>
          <ul className="space-y-5 text-sm text-[color:var(--steel)] max-w-md">
            <li className="panel-surface-soft rounded-2xl px-4 py-4">
              <div className="text-[color:var(--pearl)] font-semibold mb-1">
                {lang === "uz" ? "Kredit" : "Кредит"}
              </div>
              {lang === "uz"
                ? "Sherik banklar orqali, 36 oygacha muddat, boshlang'ich to'lov 20% dan."
                : "Через банки-партнёры, срок до 36 месяцев, первый взнос от 20%."}
            </li>
            <li className="panel-surface-soft rounded-2xl px-4 py-4">
              <div className="text-[color:var(--pearl)] font-semibold mb-1">
                {lang === "uz" ? "Bo'lib to'lash" : "Рассрочка"}
              </div>
              {lang === "uz"
                ? "Diler orqali 12 oygacha, ortiqcha to'lovsiz."
                : "От дилера до 12 месяцев, без переплаты."}
            </li>
          </ul>
        </div>

        <div className="md:col-span-7 panel-surface rounded-[28px] p-6 md:p-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 mb-10">
            {(["credit", "instalment"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  mode === m
                    ? "bg-[color:var(--pearl)] text-[color:var(--obsidian)]"
                    : "text-[color:var(--steel)] hover:text-[color:var(--pearl)]"
                }`}
              >
                {m === "credit"
                  ? lang === "uz"
                    ? "Kredit"
                    : "Кредит"
                  : lang === "uz"
                  ? "Bo'lib to'lash"
                  : "Рассрочка"}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            <Slider
              label={lang === "uz" ? "Boshlang'ich to'lov" : "Первый взнос"}
              value={down}
              suffix="%"
              min={20}
              max={70}
              step={5}
              onChange={setDown}
            />
            <Slider
              label={lang === "uz" ? "Muddat" : "Срок"}
              value={term}
              suffix={lang === "uz" ? " oy" : " мес"}
              min={mode === "instalment" ? 6 : 12}
              max={mode === "instalment" ? 12 : 36}
              step={mode === "instalment" ? 3 : 6}
              onChange={setTerm}
            />
          </div>

          <div className="mt-10 pt-8 border-t border-[color:var(--border)] flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--steel)] mb-2">
                {lang === "uz" ? "Oylik to'lov, taxminan" : "Ежемесячный платёж, ориентир"}
              </div>
              <div className="font-display font-black text-3xl md:text-5xl text-[color:var(--pearl)] tabular">
                {fmt(monthly)}
                <span className="ml-2 text-sm font-medium text-[color:var(--steel)]">
                  {lang === "uz" ? "so'm/oy" : "сум/мес"}
                </span>
              </div>
            </div>
            <button onClick={send} className="btn-ember btn-ember-hover">
              {sent
                ? lang === "uz"
                  ? "Yuborildi ✓"
                  : "Отправлено ✓"
                : lang === "uz"
                ? "Hisobni yuborish"
                : "Отправить расчёт"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  suffix,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  suffix: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--steel)]">{label}</span>
        <span className="font-display font-extrabold text-xl text-[color:var(--pearl)] tabular">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[color:var(--pearl)]"
      />
    </div>
  );
}
