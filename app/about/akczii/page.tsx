import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Акции и спецпредложения | Петрострой СПб",
  description: "Актуальные акции и скидки на строительство домов в СПб и МО. Ограниченные предложения — узнайте условия.",
  alternates: { canonical: "https://petrostroy.biz/about/akczii" },
};

const offers = [
  { title: "Бесплатный выезд специалиста", badge: "Постоянно", expires: "Без срока", text: "Бесплатный выезд инженера на ваш участок — оценка грунта, рекомендация фундамента, предварительный расчёт. Без оплаты и обязательств.", cta: "Записаться на выезд" },
  { title: "Скидка 3% при подписании договора до 30 июня", badge: "Горячее", expires: "до 30 июня 2026", text: "При заключении договора на строительство дома под ключ до конца июня — скидка 3% от стоимости. Распространяется на все материалы.", cta: "Воспользоваться" },
  { title: "Семейная ипотека от 6%", badge: "Банк", expires: "По условиям банка", text: "Строим в ипотеку. Помогаем оформить заявку в банке-партнёре. Одобрение от 3 дней.", cta: "Узнать условия" },
  { title: "Рассрочка 0% на период строительства", badge: "Популярное", expires: "Постоянно", text: "Оплата частями без процентов в течение всего периода строительства. Первый взнос от 30%.", cta: "Уточнить детали" },
];

export default function AkcziiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Акции"
          title="Актуальные акции и спецпредложения"
          subtitle="Успейте воспользоваться — часть предложений ограничена по времени."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Акции" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((o) => (
                <div key={o.title} className="border border-[#e8e8e8] rounded-2xl p-7 hover:border-[#109e4c]/40 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-bold px-3 py-1 rounded-full">{o.badge}</span>
                    <span className="text-[#49636b] text-xs">{o.expires}</span>
                  </div>
                  <h3 className="font-extrabold text-[#36494f] text-lg mb-3">{o.title}</h3>
                  <p className="text-[#49636b] text-sm leading-relaxed mb-5">{o.text}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#109e4c] hover:bg-[#097a3a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                    {o.cta} →
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
              <h3 className="font-bold text-[#36494f] mb-2">Как не попасть на скрытые условия</h3>
              <p className="text-[#49636b] text-sm leading-relaxed">Мы всегда указываем полные условия акций без мелкого шрифта. Если что-то непонятно — позвоните, объясним детально.</p>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
