import { useLang } from "@/lib/lang-context";

export function CtaBand() {
  const { lang } = useLang();
  return (
    <section id="contacts" className="bg-[color:var(--obsidian)] border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-10 panel-surface rounded-[32px] py-10 md:py-12">
        <h2 className="font-display font-black text-4xl md:text-6xl text-[color:var(--pearl)] max-w-2xl leading-[0.95]">
          {lang === "uz" ? "X7 ni o'zingiz sinab ko'ring." : "Почувствуйте X7 за рулём."}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href="tel:+998712000000" className="btn-outline">
            {lang === "uz" ? "Qo'ng'iroq qilish" : "Позвонить"}
          </a>
          <a href="https://t.me/kaiyiuz" className="btn-outline">Telegram</a>
          <button className="btn-ember btn-ember-hover">
            {lang === "uz" ? "Test-drayv" : "Тест-драйв"}
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLang();
  return (
    <footer id="footer" className="bg-[color:var(--graphite)]/70 pt-14 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/8">
          <div className="font-display font-black text-2xl text-[color:var(--pearl)]">KAIYI</div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[color:var(--steel)]">
            <a href="#model" className="hover:text-[color:var(--pearl)]">{lang === "uz" ? "Model X7" : "Модель X7"}</a>
            <a href="#finance" className="hover:text-[color:var(--pearl)]">{lang === "uz" ? "Moliyalashtirish" : "Финансирование"}</a>
            <a href="#branches" className="hover:text-[color:var(--pearl)]">{lang === "uz" ? "Filiallar" : "Филиалы"}</a>
            <a href="#contacts" className="hover:text-[color:var(--pearl)]">{lang === "uz" ? "Aloqa" : "Контакты"}</a>
            <a href="https://t.me/kaiyiuz" className="hover:text-[color:var(--pearl)]">Telegram</a>
            <a href="https://instagram.com/kaiyiuz" className="hover:text-[color:var(--pearl)]">Instagram</a>
          </nav>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-[color:var(--steel)]">
          <span>© {new Date().getFullYear()} Kaiyi.uz — {lang === "uz" ? "O'zbekistondagi rasmiy diler" : "Официальный дилер в Узбекистане"}</span>
          <span>{lang === "uz" ? "Narxlar va shartlar o'zgarishi mumkin." : "Цены и условия могут изменяться."}</span>
        </div>
      </div>
    </footer>
  );
}
