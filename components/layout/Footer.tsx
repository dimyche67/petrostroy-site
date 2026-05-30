import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Phone, MapPin, Mail } from "lucide-react";

const VKIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const RutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.5 12.5l-5 3A.5.5 0 0 1 10 15V9a.5.5 0 0 1 .5-.5.5.5 0 0 1 .25.068l5 3a.5.5 0 0 1 0 .864z"/>
  </svg>
);

const socials = [
  { label: "ВКонтакте", href: "https://vk.com/petrostroybiz", Icon: VKIcon },
  { label: "Rutube", href: "https://rutube.ru/channel/54703076", Icon: RutubeIcon },
  { label: "Telegram", href: "https://t.me/petrostroybizy", Icon: TelegramIcon },
  { label: "WhatsApp", href: "https://wa.me/79812153218", Icon: WhatsAppIcon },
];

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
              <a href="mailto:sales@petrostroy.biz" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-[#109e4c]" /> sales@petrostroy.biz
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#109e4c] flex items-center justify-center text-white/70 hover:text-white transition-all"
                  aria-label={s.label}
                >
                  <s.Icon />
                </a>
              ))}
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
