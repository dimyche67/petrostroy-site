import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Phone, MapPin, Mail } from "lucide-react";

const cols = [
  { title: "Услуги", links: [
    { label: "Строительство домов", href: "/uslugi/stroitelstvo-domov" },
    { label: "Дома из газобетона", href: "/doma-iz-gazobetona-pod-klyuch" },
    { label: "Дома из кирпича", href: "/uslugi/stroitelstvo-domov/doma-iz-kirpicha" },
    { label: "Дома из керамоблоков", href: "/uslugi/stroitelstvo-domov/doma-iz-keramoblokov" },
    { label: "Дома из бруса", href: "/doma-iz-kleenogo-brusa-pod-klyuch" },
    { label: "Проектирование", href: "/uslugi/proektirovanie" },
    { label: "Фундаменты", href: "/uslugi/stroitelstvo-fundamenta" },
  ]},
  { title: "Компания", links: [
    { label: "О нас", href: "/about/o-nas" },
    { label: "Проекты", href: "/projects" },
    { label: "Отзывы", href: "/otzyvy" },
    { label: "Акции", href: "/about/akczii" },
    { label: "Гарантии", href: "/about/garantii" },
    { label: "Новости", href: "/category/news" },
    { label: "Бизнесу", href: "/biznesu" },
  ]},
  { title: "Информация", links: [
    { label: "Стоимость", href: "/price" },
    { label: "Способы оплаты", href: "/sposoby-oplaty" },
    { label: "FAQ", href: "/faq" },
    { label: "Контакты", href: "/contacts" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-[#36494f] text-white mt-auto">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="sm" />
            <p className="text-white/55 text-sm leading-relaxed mt-4 mb-6 max-w-xs">
              Строим частные дома под ключ в СПб и МО с 2003 года. 400 домов — ни один не брошен.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+78125048400" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-[#109e4c]" /> +7 (812) 504-84-00 — СПб
              </a>
              <a href="tel:+74951500063" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-[#109e4c]" /> +7 (495) 150-00-63 — Москва
              </a>
              <div className="flex items-center gap-2 text-white/55 text-sm">
                <MapPin size={14} className="text-[#109e4c]" /> СПб, ул. Афонская, д. 2, лит. А
              </div>
              <a href="mailto:info@petrostroy.biz" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-[#109e4c]" /> info@petrostroy.biz
              </a>
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/65 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-white/35 text-xs">
            © 2003–2026 Петрострой · ИНН: 7801234567 · ОГРН: 1037808000000 · СРО: СРО-С-016-02062010
          </div>
          <Link href="/privacy" className="text-white/35 hover:text-white/60 text-xs transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
