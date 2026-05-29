import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Строительство фундаментов в СПб и МО | Петрострой",
  description: "Фундаменты под ключ: свайный, ленточный, плитный, УШП. Подбор под грунт и проект. Рассчитайте стоимость.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/stroitelstvo-fundamenta" },
};

const types = [
  { name: "Свайно-винтовой", best: "Пучинистые и болотистые грунты", time: "1–2 дня", from: "от 180 000 ₽", pros: "Быстро, дёшево, не требует земляных работ" },
  { name: "Ленточный", best: "Плотные грунты, небольшой уклон", time: "3–4 недели", from: "от 350 000 ₽", pros: "Классика, надёжно, хорошо для подвала" },
  { name: "Плитный (монолит)", best: "Слабые грунты, высокий УГВ", time: "3–5 недель", from: "от 500 000 ₽", pros: "Максимальная надёжность, равномерная нагрузка" },
  { name: "УШП", best: "Все типы грунтов, энергоэффективные дома", time: "2–3 недели", from: "от 650 000 ₽", pros: "Тёплый пол уже в фундаменте, высокая энергоэффективность" },
];

export default function FundamentyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Фундаменты"
          title="Фундаменты под ключ в СПб и МО — выбор под ваш участок"
          subtitle="Подберём тип фундамента под ваш грунт, нагрузку и бюджет. Всё включено."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Фундаменты" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Виды фундаментов</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Сравнение типов</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {types.map((t) => (
                <div key={t.name} className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
                  <h3 className="font-extrabold text-[#36494f] text-lg mb-1">{t.name}</h3>
                  <div className="text-[#109e4c] font-bold text-sm mb-4">{t.from}</div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex gap-2"><span className="text-[#49636b] w-28 shrink-0">Лучший грунт:</span><span className="text-[#36494f] font-medium">{t.best}</span></div>
                    <div className="flex gap-2"><span className="text-[#49636b] w-28 shrink-0">Срок:</span><span className="text-[#36494f] font-medium">{t.time}</span></div>
                    <div className="flex gap-2"><span className="text-[#49636b] w-28 shrink-0">Плюсы:</span><span className="text-[#36494f]">{t.pros}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-[#36494f] rounded-2xl p-8 text-white">
              <h3 className="font-extrabold text-xl mb-3">Не знаете, какой фундамент нужен?</h3>
              <p className="text-white/70 text-sm mb-5">Бесплатно выедем на участок, возьмём пробу грунта и порекомендуем оптимальный вариант.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#109e4c] hover:bg-[#097a3a] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
                Бесплатный выезд на участок →
              </a>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
