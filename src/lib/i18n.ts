type Lang = "uz" | "ru";

type Dict = Record<string, { uz: string; ru: string }>;

export const dict: Dict = {
  "nav.model": { uz: "MODEL X7", ru: "МОДЕЛЬ X7" },
  "nav.finance": { uz: "MOLIYALASHTIRISH", ru: "ФИНАНСИРОВАНИЕ" },
  "nav.branches": { uz: "FILIALLAR", ru: "ФИЛИАЛЫ" },
  "nav.contacts": { uz: "ALOQA", ru: "КОНТАКТЫ" },
  "cta.testdrive": { uz: "Test-drayvga yozilish", ru: "Записаться на тест-драйв" },
  "cta.prices": { uz: "Narxlar va komplektatsiyalar", ru: "Цены и комплектации" },
  "hero.label": { uz: "KAIYI X7 · 2026", ru: "KAIYI X7 · 2026" },
  "hero.title": { uz: "Kaiyi X7", ru: "Kaiyi X7" },
  "hero.sub.gas": {
    uz: "Benzinli kross-over. Kuch, ishonchlilik, klassik benzinli kuch agregati.",
    ru: "Бензиновый кроссовер. Сила, надёжность, классический бензиновый агрегат.",
  },
  "hero.sub.hybrid": {
    uz: "Kunpeng iHD gibrid. Past sarf, elektrlashtirilgan harakat dinamikasi.",
    ru: "Гибрид Kunpeng iHD. Низкий расход, электрифицированная динамика.",
  },
  "engine.gas": { uz: "Benzin", ru: "Бензин" },
  "engine.hybrid": { uz: "Gibrid", ru: "Гибрид" },
  "color.white": { uz: "Oq", ru: "Белый" },
  "color.black": { uz: "Qora", ru: "Чёрный" },
  "color.grey": { uz: "Kulrang", ru: "Серый" },
  "stat.power": { uz: "Quvvat", ru: "Мощность" },
  "stat.accel": { uz: "0–100 km/soat", ru: "0–100 км/ч" },
  "stat.consumption": { uz: "Sarf", ru: "Расход" },
  "stat.price": { uz: "Narxi", ru: "Цена от" },
  "unit.hp": { uz: "ot kuchi", ru: "л.с." },
  "unit.sec": { uz: "soniya", ru: "сек" },
  "unit.l100": { uz: "l/100 km", ru: "л/100 км" },
  "topbar.phone": { uz: "+998 71 200 00 00", ru: "+998 71 200 00 00" },
};

export function t(key: string, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}

export type { Lang };
