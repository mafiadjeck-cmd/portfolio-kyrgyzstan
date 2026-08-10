"use client";

import { Menu, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

const profile = {
  name: "MAFIADJECK",
  github: "https://github.com/mafiadjeck-cmd",
  telegram: "https://t.me/mafiadjeck",
  instagram: "https://instagram.com/mafiadjeck",
  whatsapp:
    "https://wa.me/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82.",
};

const navItems = [
  { label: "ОБО МНЕ", href: "#about" },
  { label: "ПОДХОД", href: "#services" },
  { label: "ПРОЕКТЫ", href: profile.github, external: true },
  { label: "ЦЕНЫ", href: "#price" },
  { label: "INSTAGRAM", href: profile.instagram, external: true },
  { label: "СВЯЗЬ", href: profile.telegram, external: true },
];

const projects = [
  {
    title: "ASTROPULSE",
    type: "Веб-приложение — натальная карта",
    href: "https://www.astropulse.life/",
  },
  {
    title: "TARGET.KG",
    type: "Сайт студии — сайты, боты и автоматизация",
    href: "https://targetkg.pp.ua/ru/",
  },
  {
    title: "A&A APPAREL FACTORY",
    type: "Сайт швейной фабрики",
    href: "https://mafiadjeck-cmd.github.io/",
  },
  {
    title: "GENDER PARTY KG",
    type: "Сайт мероприятий в Бишкеке",
    href: "https://mafiadjeck-cmd.github.io/genderparty-kg/",
  },
  {
    title: "PREMIUM AI",
    type: "Telegram Mini App — AI-аудит Instagram",
    href: "https://t.me/EvgenyTargetBot",
  },
  {
    title: "САМ СЕБЕ ТАРГЕТОЛОГ",
    type: "Telegram Mini App — платформа онлайн-курса",
    href: "https://t.me/mafiadjeck?text=Хочу%20посмотреть%20демо%20Telegram%20Mini%20App",
  },
  {
    title: "TUZOVA MARKETING",
    type: "WhatsApp Business Platform — автоматизация",
    href: "https://t.me/mafiadjeck?text=Хочу%20посмотреть%20кейс%20Tuzova%20Marketing",
  },
];

function Mark() {
  return (
    <svg
      aria-label="Логотип Mafiacjeck"
      className="h-7 w-7"
      viewBox="0 0 256 256"
      fill="none"
      role="img"
    >
      <path
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
        fill="white"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProjectsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black text-white">
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
      />

      <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
        <header className="flex items-center justify-between py-5 sm:py-6">
          <a aria-label="На главную" href="#top" id="top">
            <Mark />
          </a>

          <nav aria-label="Основная навигация" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm tracking-wide">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="transition-opacity hover:opacity-70"
                    href={item.href}
                    rel={item.external ? "noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-label="Открыть меню"
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
            onClick={() => setMenuOpen(true)}
            type="button"
          >
            <Menu size={24} />
          </button>
        </header>

        <section
          className="meta-grid mt-2 grid grid-cols-2 gap-4 sm:mt-4 sm:gap-6 lg:grid-cols-4 lg:gap-8"
          id="about"
        >
          <div>
            <h2 className="text-lg leading-tight font-normal tracking-wide md:text-xl">
              <span>MAFIA</span>
              <br />
              <span className="font-pixel text-2xl md:text-3xl">DJECK</span>
            </h2>
            <div className="mt-3 text-[10px] text-white/50">*</div>
            <p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">
              Цифровой дизайнер
              <br />
              и разработчик из Кыргызстана.
              <br />
              Работаю с бизнесом
              <br />
              по всему СНГ
            </p>
          </div>

          <div className="text-right lg:text-left">
            <h2 className="text-lg leading-tight font-normal tracking-wide md:text-xl">
              <span>ДИЗАЙН &amp;</span>
              <br />
              <span className="font-pixel text-2xl md:text-3xl">РАЗРАБОТКА</span>
            </h2>
          </div>

          <div>
            <h3 className="font-pixel mb-3 text-base tracking-widest text-white/50 uppercase">
              Что делаю
            </h3>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
              Создаю сильные сайты и цифровые продукты, которые выделяют бренд и приводят клиентов
            </p>
          </div>

          <div className="text-right lg:text-left" id="services">
            <h3 className="font-pixel mb-3 text-base tracking-widest text-white/50 uppercase">
              Услуги
            </h3>
            <ul className="space-y-0.5 text-sm leading-relaxed text-white/90">
              <li>Лендинги и сайты</li>
              <li>UI/UX-дизайн</li>
              <li>Фирменный стиль</li>
              <li>React / Next.js</li>
              <li>Анимация и видео</li>
              <li id="price">от 5 000 сом</li>
            </ul>
          </div>
        </section>

        <div className="flex-1" />

        <section className="bottom-section pb-4">
          <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
            <h1 className="hero-title text-3xl leading-[0.72] font-normal tracking-wide uppercase sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
              СОЗДАЮ ДЛЯ ВАС
              <br />
              <span className="font-pixel inline-block text-[1.25em] leading-none align-baseline">
                НЕОЖИДАННЫЕ
              </span>
              <br />
              ЦИФРОВЫЕ
              <br />
              <span className="font-pixel inline-block text-[1.25em] leading-none align-baseline">
                ВПЕЧАТЛЕНИЯ
              </span>
            </h1>

            <div className="flex flex-col justify-end gap-4 sm:gap-6">
              <button
                className="flex self-start items-center gap-3 border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
                onClick={() => setProjectsOpen(true)}
                type="button"
              >
                <Play fill="white" size={14} />
                <span className="text-sm tracking-wider">СМОТРЕТЬ РАБОТЫ</span>
              </button>

              <div className="flex flex-wrap items-stretch gap-2 text-sm text-white/80 sm:gap-3 lg:self-end">
                <a
                  className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 transition-colors hover:bg-[#171717] sm:px-4"
                  href={profile.whatsapp}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-sm font-bold tracking-tight sm:text-base">WHATSAPP</span>
                  <span className="text-xs text-white/50">↗</span>
                </a>
                <a
                  className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 transition-colors hover:bg-[#171717] sm:px-4"
                  href={profile.telegram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-lg font-bold sm:text-xl">TG.</span>
                  <span className="text-xs text-white/50">↗</span>
                </a>
                <a
                  className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 transition-colors hover:bg-[#171717] sm:px-4"
                  href={profile.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-[10px] font-bold tracking-tight sm:text-xs">INSTAGRAM</span>
                  <span className="text-xs text-white/50">↗</span>
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-4 grid grid-cols-1 gap-2 pt-4 text-xs text-white/60 sm:mt-5 sm:grid-cols-2 sm:gap-4">
            <p>
              Открыт к проектам по Кыргызстану и СНГ.{" "}
              <a
                className="text-red-500 transition-colors hover:text-red-400"
                href={profile.telegram}
                rel="noreferrer"
                target="_blank"
              >
                Обсудить задачу
              </a>
            </p>
            <p className="sm:text-right">
              Сайты от 5 000 сом &bull; Дизайн &bull; Разработка
            </p>
          </footer>
        </section>
      </div>

      <div
        aria-hidden={!projectsOpen}
        className={`fixed inset-0 z-40 flex items-end bg-black/75 p-5 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:items-center sm:justify-center ${
          projectsOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-label="Мои опубликованные проекты"
      >
        <div
          className={`max-h-[88dvh] w-full max-w-3xl overflow-y-auto bg-[#0B0B0B] p-6 transition-all duration-500 sm:p-8 ${
            projectsOpen ? "translate-y-0" : "translate-y-8"
          }`}
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="font-pixel mb-2 text-sm tracking-widest text-white/50 uppercase">
                Реальные проекты
              </p>
              <h2 className="text-2xl tracking-wide uppercase sm:text-3xl">Сайты и приложения</h2>
            </div>
            <button
              aria-label="Закрыть список проектов"
              className="p-2 transition-opacity hover:opacity-70"
              onClick={() => setProjectsOpen(false)}
              tabIndex={projectsOpen ? 0 : -1}
              type="button"
            >
              <X size={24} />
            </button>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {projects.map((project, index) => (
              <a
                className="group flex items-center justify-between gap-4 py-5 transition-opacity hover:opacity-70"
                href={project.href}
                key={project.href}
                rel="noreferrer"
                tabIndex={projectsOpen ? 0 : -1}
                target="_blank"
              >
                <span>
                  <span className="mr-4 text-xs text-white/40">0{index + 1}</span>
                  <span className="text-sm font-semibold tracking-wide sm:text-base">{project.title}</span>
                  <span className="mt-1 block pl-8 text-xs text-white/50 sm:inline sm:pl-4">
                    {project.type}
                  </span>
                </span>
                <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Mark />
          <button
            aria-label="Закрыть меню"
            className="p-2 transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        <nav aria-label="Мобильная навигация" className="flex flex-1 flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <a
              className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              rel={item.external ? "noreferrer" : undefined}
              style={{ transitionDelay: menuOpen ? `${100 + index * 60}ms` : "0ms" }}
              tabIndex={menuOpen ? 0 : -1}
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
