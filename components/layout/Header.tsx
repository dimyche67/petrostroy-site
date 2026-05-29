"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";

const nav = [
  {
    label: "Услуги",
    items: [
      { label: "Строительство домов", href: "/uslugi/stroitelstvo-domov" },
      { label: "Проектирование", href: "/uslugi/proektirovanie" },
      { label: "Фундаменты", href: "/uslugi/stroitelstvo-fundamenta" },
      { label: "Дополнительные услуги", href: "/uslugi/dopolnitelnye-uslugi" },
      { label: "Выезд специалиста", href: "/uslugi/dopolnitelnye-uslugi/vyezd-speczialista-na-uchastok" },
      { label: "Помощь с ипотекой", href: "/uslugi/dopolnitelnye-uslugi/pomoshh-v-oformlenii-ipoteki-2" },
    ],
  },
  {
    label: "Дома",
    items: [
      { label: "Дома из газобетона", href: "/doma-iz-gazobetona-pod-klyuch" },
      { label: "Дома из кирпича", href: "/uslugi/stroitelstvo-domov/doma-iz-kirpicha" },
      { label: "Дома из керамоблоков", href: "/uslugi/stroitelstvo-domov/doma-iz-keramoblokov" },
      { label: "Дома из клееного бруса", href: "/doma-iz-kleenogo-brusa-pod-klyuch" },
    ],
  },
  { label: "Проекты", href: "/projects" },
  { label: "Стоимость", href: "/price" },
  {
    label: "О компании",
    items: [
      { label: "О нас", href: "/about/o-nas" },
      { label: "Акции", href: "/about/akczii" },
      { label: "Гарантии", href: "/about/garantii" },
      { label: "Новости", href: "/category/news" },
      { label: "Партнёры", href: "/partnery" },
      { label: "Бизнесу", href: "/biznesu" },
      { label: "Способы оплаты", href: "/sposoby-oplaty" },
    ],
  },
  { label: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const pathname = usePathname();
  const quizHref = pathname === "/" ? "#quiz" : "/#quiz";
  const isTransparent = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white shadow-sm border-b border-[#e8e8e8]"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Logo variant={isTransparent ? "light" : "dark"} size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.items ? (
              <div key={item.label} className="relative">
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isTransparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-[#36494f] hover:text-[#109e4c] hover:bg-[#f7f8f7]"
                  }`}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[#e8e8e8] py-1.5 z-50">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-[#36494f] hover:text-[#109e4c] hover:bg-[#f7f8f7] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-[#36494f] hover:text-[#109e4c] hover:bg-[#f7f8f7]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+78125048400"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isTransparent ? "text-white hover:text-white/80" : "text-[#36494f] hover:text-[#109e4c]"
            }`}
          >
            <Phone size={14} />
            +7 (812) 504-84-00
          </a>
          <a
            href={quizHref}
            className="bg-[#109e4c] hover:bg-[#097a3a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Рассчитать стоимость
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isTransparent ? "text-white" : "text-[#36494f]"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8e8] max-h-[85vh] overflow-y-auto">
          <div className="container-site py-4 flex flex-col gap-1">
            {nav.map((item) =>
              item.items ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#36494f] hover:text-[#109e4c] hover:bg-[#f7f8f7] rounded-lg transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-3 flex flex-col gap-1 mt-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="px-3 py-2 text-sm text-[#49636b] hover:text-[#109e4c] hover:bg-[#f7f8f7] rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-3 py-2.5 text-sm font-semibold text-[#36494f] hover:text-[#109e4c] hover:bg-[#f7f8f7] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="border-t border-[#e8e8e8] mt-2 pt-4 flex flex-col gap-3">
              <a href="tel:+78125048400" className="flex items-center gap-2 text-sm font-medium text-[#36494f] px-3">
                <Phone size={15} className="text-[#109e4c]" />
                +7 (812) 504-84-00 — СПб
              </a>
              <a href="tel:+74951500063" className="flex items-center gap-2 text-sm font-medium text-[#36494f] px-3">
                <Phone size={15} className="text-[#109e4c]" />
                +7 (495) 150-00-63 — Москва
              </a>
              <a
                href={quizHref}
                className="mx-3 bg-[#109e4c] hover:bg-[#097a3a] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
