import { useLang } from "@/lib/lang-context";

export interface Branch {
  id: string;
  name: { uz: string; ru: string };
  address: { uz: string; ru: string };
  phone: string;
  hours: { uz: string; ru: string };
  headquarters?: boolean;
}

export const branches: Branch[] = [
  {
    id: "tashkent-hq",
    name: { uz: "Toshkent — Bosh ofis", ru: "Ташкент — Головной офис" },
    address: { uz: "Toshkent sh., Yangihayot t., Bunyodkor 12", ru: "г. Ташкент, Янгихаётский р-н, Бунёдкор 12" },
    phone: "+998 71 200 00 00",
    hours: { uz: "Har kuni 09:00–20:00", ru: "Ежедневно 09:00–20:00" },
    headquarters: true,
  },
  {
    id: "tashkent-2",
    name: { uz: "Toshkent — Sergeli", ru: "Ташкент — Сергели" },
    address: { uz: "Sergeli sh., Yangi Sergeli 4-mavze", ru: "г. Сергели, мкр. Янги Сергели 4" },
    phone: "+998 71 200 00 02",
    hours: { uz: "Har kuni 09:00–20:00", ru: "Ежедневно 09:00–20:00" },
  },
  {
    id: "tashkent-3",
    name: { uz: "Toshkent — Yunusobod", ru: "Ташкент — Юнусабад" },
    address: { uz: "Yunusobod t., Amir Temur 108", ru: "Юнусабадский р-н, Амира Темура 108" },
    phone: "+998 71 200 00 03",
    hours: { uz: "Har kuni 09:00–20:00", ru: "Ежедневно 09:00–20:00" },
  },
  {
    id: "fergana",
    name: { uz: "Farg'ona", ru: "Фергана" },
    address: { uz: "Farg'ona sh., Mustaqillik 24", ru: "г. Фергана, Мустакиллик 24" },
    phone: "+998 73 244 00 00",
    hours: { uz: "Har kuni 09:00–19:00", ru: "Ежедневно 09:00–19:00" },
  },
  {
    id: "jizzakh",
    name: { uz: "Jizzax", ru: "Джизак" },
    address: { uz: "Jizzax sh., Sh. Rashidov 56", ru: "г. Джизак, Ш. Рашидова 56" },
    phone: "+998 72 226 00 00",
    hours: { uz: "Har kuni 09:00–19:00", ru: "Ежедневно 09:00–19:00" },
  },
  {
    id: "khorezm",
    name: { uz: "Xorazm — Urganch", ru: "Хорезм — Ургенч" },
    address: { uz: "Urganch sh., Al-Xorazmiy 18", ru: "г. Ургенч, Аль-Хорезми 18" },
    phone: "+998 62 224 00 00",
    hours: { uz: "Har kuni 09:00–19:00", ru: "Ежедневно 09:00–19:00" },
  },
];

export function BranchesBlock() {
  const { lang } = useLang();

  return (
    <section id="branches" className="border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <div className="section-kicker mb-6">
          <span className="h-px w-10 chrome-line" />
          {lang === "uz" ? "FILIALLAR" : "ФИЛИАЛЫ"}
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-[color:var(--pearl)] mb-12">
          {lang === "uz" ? "6 ta nuqta. O'zbekiston bo'ylab." : "6 точек. По всему Узбекистану."}
        </h2>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Map placeholder */}
          <div className="md:col-span-6 panel-surface rounded-[28px] p-4 md:p-5">
            <div
              className="relative aspect-[4/3] md:aspect-[5/6] rounded-[22px] overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(245,246,247,0.06) 0%, rgba(21,23,26,0.9) 50%, #090A0B 100%)",
              }}
              aria-label={lang === "uz" ? "Filiallar xaritasi" : "Карта филиалов"}
            >
              {/* PLACEHOLDER: interactive map of Uzbekistan with 6 pins */}
              {branches.map((b, i) => (
                <span
                  key={b.id}
                  className="absolute w-2.5 h-2.5 rounded-full bg-[color:var(--pearl)] shadow-[0_0_0_6px_rgba(245,246,247,0.06)]"
                  style={{
                    top: `${[42, 45, 38, 55, 50, 60][i]}%`,
                    left: `${[58, 60, 56, 70, 50, 28][i]}%`,
                  }}
                  aria-label={b.name[lang]}
                />
              ))}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[color:var(--steel)]">
                <span>Uzbekistan network</span>
                <span>6 branches</span>
              </div>
            </div>
          </div>

          <ul className="md:col-span-6 divide-y divide-white/8 panel-surface rounded-[28px] overflow-hidden">
            {branches.map((b) => (
              <li key={b.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-[color:var(--pearl)] text-lg flex items-center gap-2">
                    {b.name[lang]}
                    {b.headquarters && (
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[color:var(--pearl)] border border-white/15 bg-white/5 px-1.5 py-0.5 rounded-full">
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[color:var(--steel)] mt-1">{b.address[lang]}</div>
                  <div className="text-xs text-[color:var(--steel)] mt-0.5">{b.hours[lang]}</div>
                </div>
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="text-sm font-semibold text-[color:var(--pearl)] hover:text-[color:var(--steel)] tabular whitespace-nowrap transition-colors"
                >
                  {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
