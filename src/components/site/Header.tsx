import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang-context";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[color:rgba(9,10,11,0.78)] border-b border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-8 h-16 flex items-center justify-between gap-6">
          <a href="#top" className="font-display font-black text-lg tracking-[0.18em] uppercase">
            KAIYI
          </a>

          <nav className="hidden lg:flex items-center gap-10 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[color:var(--pearl)] backdrop-blur-md">
            <a href="#model" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.model")}
            </a>
            <a href="#finance" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.finance")}
            </a>
            <a href="#branches" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.branches")}
            </a>
            <a href="#contacts" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.contacts")}
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <div className="flex items-center rounded-full border border-white/8 bg-white/4 px-2 py-1 text-[11px] font-semibold tracking-wider backdrop-blur-md">
              <button
                onClick={() => setLang("uz")}
                className={`px-1.5 transition-colors ${lang === "uz" ? "text-[color:var(--pearl)]" : "text-[color:var(--steel)]"}`}
              >
                UZ
              </button>
              <span className="text-[color:var(--steel)]">/</span>
              <button
                onClick={() => setLang("ru")}
                className={`px-1.5 transition-colors ${lang === "ru" ? "text-[color:var(--pearl)]" : "text-[color:var(--steel)]"}`}
              >
                RU
              </button>
            </div>
            <button className="btn-outline hidden sm:inline-flex">{t("cta.testdrive")}</button>
          </div>
        </div>
      </header>
    </>
  );
}
