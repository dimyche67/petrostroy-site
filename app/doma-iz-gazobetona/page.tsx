import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LinkButton from "@/components/ui/LinkButton";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Дома из газобетона под ключ в СПб и МО",
  description:
    "Строим дома из газобетона под ключ от 6 млн ₽. Фиксированная смета, гарантия 10 лет, собственные бригады. Получите расчёт за 2 минуты →",
  alternates: { canonical: "https://petrostroy.biz/doma-iz-gazobetona" },
};

const packages = [
  {
    name: "Холодный контур",
    price: "от 4 800 ₽/м²",
    badge: "",
    includes: ["Свайный или ленточный фундамент", "Стены из газобетона D500", "Стропильная система + кровля", "Окна ПВХ двухкамерные", "Входная металлическая дверь"],
    excludes: ["Утепление и отопление", "Инженерные системы", "Внутренняя отделка"],
  },
  {
    name: "Тёплый контур",
    price: "от 7 200 ₽/м²",
    badge: "Популярный",
    includes: ["Всё из «Холодного контура»", "Утепление фасада и кровли", "Система отопления", "Водоснабжение и канализация", "Электрика с щитком"],
    excludes: ["Финишная отделка стен и полов"],
  },
  {
    name: "White Box",
    price: "от 10 500 ₽/м²",
    badge: "",
    includes: ["Всё из «Тёплого контура»", "Стяжка пола по всему дому", "Штукатурка стен", "Разводка под финишную отделку", "Установка радиаторов"],
    excludes: ["Чистовая отделка и мебель"],
  },
  {
    name: "Под ключ",
    price: "от 14 000 ₽/м²",
    badge: "Рекомендуем",
    includes: ["Всё из «White Box»", "Чистовая отделка стен и потолков", "Укладка плитки и ламината", "Сантехника в санузлах", "Межкомнатные двери"],
    excludes: [],
  },
];

const advantages = [
  { title: "Теплопроводность", gazobeton: "0.12 Вт/м·К", kirpich: "0.7 Вт/м·К", derevo: "0.18 Вт/м·К" },
  { title: "Скорость строительства", gazobeton: "Быстро", kirpich: "Медленно", derevo: "Средне" },
  { title: "Стоимость материала", gazobeton: "Низкая", kirpich: "Высокая", derevo: "Средняя" },
  { title: "Срок службы", gazobeton: "100+ лет", kirpich: "150+ лет", derevo: "50–80 лет" },
  { title: "Экологичность", gazobeton: "Высокая", kirpich: "Высокая", derevo: "Высокая" },
];

const faqs = [
  {
    q: "Сколько строится дом из газобетона?",
    a: "Дом площадью 130–180 м² в комплектации «Тёплый контур» строится за 6–8 месяцев. «Под ключ» — 10–12 месяцев. Точные сроки фиксируются в договоре.",
  },
  {
    q: "Нужно ли штукатурить газобетон снаружи?",
    a: "Газобетон необходимо защитить от влаги. Мы применяем паропроницаемую фасадную штукатурку или вентилируемый фасад — в зависимости от проекта и бюджета.",
  },
  {
    q: "Газобетон vs кирпич — что выбрать?",
    a: "Газобетон теплее, дешевле и строится быстрее. Кирпич — долговечнее визуально и лучше переносит внешние воздействия. Для большинства частных домов газобетон — оптимальный выбор.",
  },
  {
    q: "Можно ли строить по моему проекту?",
    a: "Да. Мы строим по любым проектам — как нашим, так и сторонним. Если проект разрабатывался для газобетона, никаких проблем.",
  },
];

export default function GazobetonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#1C3A2D] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="container-site relative z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
                <a href="/" className="hover:text-white/80">Главная</a>
                <span>/</span>
                <span className="text-white/80">Дома из газобетона</span>
              </nav>
              <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
                Дома из газобетона под ключ в СПб и МО
              </h1>
              <p className="text-white/70 text-xl mb-4">
                Стоимость: <span className="text-white font-semibold">от 4,8 млн ₽</span>
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
                Газобетон — самый тёплый и экономичный материал для частного дома. Быстрее кирпича, дешевле, и при правильном исполнении служит 100+ лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <LinkButton size="lg" href="#packages">
                  Выбрать комплектацию
                  <ArrowRight size={20} />
                </LinkButton>
                <LinkButton size="lg" variant="outline" href="#contact" className="border-white/30 text-white hover:bg-white hover:text-[#1C3A2D]">
                  Получить расчёт
                </LinkButton>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 bg-[#F8F7F4]">
          <div className="container-site">
            <div className="max-w-2xl mb-12">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">Комплектации</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A18]">
                Что входит в стоимость
              </h2>
              <p className="text-[#6B6B65] mt-3">Выберите комплектацию под ваш бюджет. Цена фиксируется в договоре.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative bg-white rounded-2xl p-6 shadow-sm flex flex-col ${
                    pkg.badge === "Рекомендуем" ? "ring-2 ring-[#D4890A]" : ""
                  }`}
                >
                  {pkg.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white ${
                      pkg.badge === "Рекомендуем" ? "bg-[#D4890A]" : "bg-[#1C3A2D]"
                    }`}>
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="font-serif text-lg font-bold text-[#1A1A18]">{pkg.name}</h3>
                    <div className="font-semibold text-[#1C3A2D] mt-1">{pkg.price}</div>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1 mb-4">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1A1A18]">
                        <CheckCircle2 size={14} className="text-[#1C3A2D] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                    {pkg.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#6B6B65]">
                        <span className="w-3.5 h-3.5 rounded-full border border-[#EFEFEA] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <LinkButton variant="outline" href="#contact" className="w-full mt-auto text-sm justify-center py-2 text-sm">
                    Рассчитать стоимость
                  </LinkButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="max-w-2xl mb-10">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">Сравнение</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">
                Газобетон vs кирпич vs дерево
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#EFEFEA]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8F7F4]">
                    <th className="text-left px-6 py-4 font-medium text-[#6B6B65]">Параметр</th>
                    <th className="px-6 py-4 font-serif font-bold text-[#1C3A2D] text-center">Газобетон</th>
                    <th className="px-6 py-4 font-medium text-[#6B6B65] text-center">Кирпич</th>
                    <th className="px-6 py-4 font-medium text-[#6B6B65] text-center">Дерево</th>
                  </tr>
                </thead>
                <tbody>
                  {advantages.map((row, i) => (
                    <tr key={row.title} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F7F4]/50"}>
                      <td className="px-6 py-4 text-[#6B6B65]">{row.title}</td>
                      <td className="px-6 py-4 font-medium text-[#1C3A2D] text-center">{row.gazobeton}</td>
                      <td className="px-6 py-4 text-[#6B6B65] text-center">{row.kirpich}</td>
                      <td className="px-6 py-4 text-[#6B6B65] text-center">{row.derevo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="container-site max-w-3xl">
            <div className="mb-10">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">Вопросы</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">Частые вопросы о газобетоне</h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-white rounded-2xl shadow-sm overflow-hidden">
                  <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#F8F7F4] transition-colors">
                    <span className="font-medium text-[#1A1A18]">{faq.q}</span>
                    <span className="text-[#1C3A2D] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-[#6B6B65] text-sm leading-relaxed border-t border-[#EFEFEA]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
