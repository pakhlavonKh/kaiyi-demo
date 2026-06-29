import { useLang } from "@/lib/lang-context";

export function MobileStickyBar() {
  const { lang } = useLang();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <a href="tel:+998712000000" className="py-3.5 text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-[color:var(--pearl)] border-r border-white/10">
        {lang === "uz" ? "Qo'ng'iroq" : "Звонок"}
      </a>
      <a href="https://t.me/kaiyiuz" className="py-3.5 text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-[color:var(--pearl)] border-r border-white/10">
        Telegram
      </a>
      <button className="py-3.5 text-[11px] font-semibold tracking-[0.15em] uppercase bg-[color:var(--pearl)] text-[color:var(--obsidian)]">
        {lang === "uz" ? "Test-drayv" : "Тест-драйв"}
      </button>
    </div>
  );
}
