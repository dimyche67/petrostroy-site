import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Maximize2, MapPin, Calendar } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Дома из газобетона под ключ в СПб и МО",
  description: "Строим дома из газобетона под ключ от 4,8 млн ₽. Фиксированная смета, гарантия 10 лет, собственные бригады.",
  alternates: { canonical: "https://petrostroy.biz/doma-iz-gazobetona-pod-klyuch" },
};

const packages = [
  { name: "Холодный контур", price: "от 4 800 ₽/м²", badge: "", includes: ["Свайный или ленточный фундамент","Стены из газобетона D500","Стропильная система + кровля","Окна ПВХ двухкамерные","Входная металлическая дверь"], excludes: ["Утепление и отопление","Инженерные системы","Внутренняя отделка"] },
  { name: "Тёплый контур", price: "от 7 200 ₽/м²", badge: "Популярный", includes: ["Всё из «Холодного контура»","Утепление фасада и кровли","Система отопления","Водоснабжение и канализация","Электрика с щитком"], excludes: ["Финишная отделка стен и полов"] },
  { name: "White Box", price: "от 10 500 ₽/м²", badge: "", includes: ["Всё из «Тёплого контура»","Стяжка пола по всему дому","Штукатурка стен","Разводка под финишную отделку","Установка радиаторов"], excludes: ["Чистовая отделка и мебель"] },
  { name: "Под ключ", price: "от 14 000 ₽/м²", badge: "Рекомендуем", includes: ["Всё из «White Box»","Чистовая отделка стен и потолков","Укладка плитки и ламината","Сантехника в санузлах","Межкомнатные двери"], excludes: [] },
];

const gazoProjects = projects.filter(p => p.tags.includes("gazobeton"));

const faqs = [
  { q: "Сколько строится дом из газобетона?", a: "130–180 м² в «Тёплом контуре» — 6–8 месяцев. «Под ключ» — 10–12 месяцев. Сроки фиксируются в договоре." },
  { q: "Газобетон vs кирпич — что выбрать?", a: "Газобетон теплее, дешевле и строится быстрее. Кирпич долговечнее и статуснее. Для большинства частных домов газобетон — оптимальный выбор." },
  { q: "Нужно ли штукатурить газобетон снаружи?", a: "Обязательно защитить от влаги. Применяем паропроницаемую фасадную штукатурку или вентилируемый фасад." },
];

export default function GazobetonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero с реальной фотографией */}
        <section className="relative pt-28 pb-24 min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/heroes/hero-gazobeton.jpg" alt="Дом из газобетона Петрострой" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#36494f]/90 via-[#36494f]/70 to-[#36494f]/30" />
          </div>
          <div className="container-site relative z-10">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-5">
              <a href="/" className="hover:text-white/80">Главная</a>
              <span>/</span>
              <span className="text-white/80">Дома из газобетона</span>
            </nav>
            <div className="max-w-xl">
              <p className="text-[#109e4c] text-xs font-bold uppercase tracking-widest mb-3">Газобетон</p>
              <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Дома из газобетона под ключ в СПб и МО
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Стоимость: <span className="text-white font-bold">от 4,8 млн ₽</span> · Гарантия 10 лет
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton label="Рассчитать стоимость" title="Рассчитать дом из газобетона" source="Газобетон Hero" variant="green" size="lg" />
                <CtaButton label="Оставить заявку" title="Заявка на дом из газобетона" source="Газобетон Hero" variant="outline-white" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">Комплектации</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#36494f]">Что входит в стоимость</h2>
              <p className="text-[#49636b] mt-2 text-sm">Цена фиксируется в договоре. Никаких допсмет.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`relative bg-white rounded-2xl p-6 flex flex-col border ${pkg.badge === "Рекомендуем" ? "border-[#109e4c] ring-1 ring-[#109e4c]" : "border-[#e8e8e8]"}`}>
                  {pkg.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white ${pkg.badge === "Рекомендуем" ? "bg-[#109e4c]" : "bg-[#36494f]"}`}>{pkg.badge}</div>
                  )}
                  <div className="mb-4">
                    <h3 className="font-bold text-[#36494f] text-base">{pkg.name}</h3>
                    <div className="font-extrabold text-[#109e4c] mt-1">{pkg.price}</div>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1 mb-4">
                    {pkg.includes.map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#36494f]">
                        <CheckCircle2 size={14} className="text-[#109e4c] mt-0.5 shrink-0" />{i}
                      </li>
                    ))}
                    {pkg.excludes.map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#49636b]">
                        <span className="w-3.5 h-3.5 rounded-full border border-[#e8e8e8] mt-0.5 shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                  <CtaButton label="Рассчитать стоимость" title={`Расчёт: ${pkg.name}`} source="Газобетон — пакет" variant="outline-dark" size="sm" className="w-full justify-center" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Наши проекты из газобетона */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="section-label mb-3">Реализованные объекты</p>
                <h2 className="text-3xl font-extrabold text-[#36494f]">Наши дома из газобетона</h2>
              </div>
              <Link href="/projects" className="text-[#109e4c] text-sm font-semibold hover:gap-3 transition-all">Все проекты →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gazoProjects.slice(0, 6).map(p => (
                <div key={p.id} className="group bg-[#f7f8f7] rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-lg transition-all">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1">
                      <span className="text-[#36494f] text-xs font-semibold">{p.material}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#36494f] mb-2 text-sm">{p.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#49636b] mb-3">
                      <span className="flex items-center gap-1"><Maximize2 size={12} />{p.area} м²</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{p.region}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} />{p.year}</span>
                    </div>
                    <div className="font-extrabold text-[#36494f] text-sm">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site max-w-3xl">
            <p className="section-label mb-3">Вопросы</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">Частые вопросы о газобетоне</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(f => (
                <details key={f.q} className="group bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
                  <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#f7f8f7] font-semibold text-[#36494f] transition-colors">
                    {f.q}
                    <span className="text-[#109e4c] text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-[#49636b] text-sm leading-relaxed border-t border-[#e8e8e8]">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
