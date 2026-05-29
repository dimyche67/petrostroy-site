import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Способы оплаты строительства | Петрострой СПб",
  description: "Как оплатить строительство дома: поэтапная оплата, семейная ипотека, льготная ипотека, рассрочка от компании.",
  alternates: { canonical: "https://petrostroy.biz/sposoby-oplaty" },
};

const ways = [
  { title: "Поэтапная оплата", rate: "0%", text: "Оплата разбивается на этапы по ходу строительства: после фундамента, стен, кровли и сдачи. Первый взнос — 30%.", badge: "Самый популярный" },
  { title: "Семейная ипотека", rate: "от 6%", text: "Для семей с детьми до 18 лет. Банки-партнёры: Сбербанк, ВТБ, ДОМ.РФ. Помогаем оформить.", badge: "" },
  { title: "Льготная ипотека", rate: "от 8%", text: "Для всех граждан РФ. Ставка зависит от программы и банка. Помогаем подобрать оптимальный вариант.", badge: "" },
  { title: "Рассрочка от Петрострой", rate: "0%", text: "Рассрочка на весь период строительства без процентов. Первый взнос — от 30% от стоимости дома.", badge: "" },
];

export default function SposobyOplatyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Способы оплаты"
          title="Как оплатить строительство — наличные, ипотека, рассрочка"
          subtitle="Подберём удобный формат оплаты. Стройка не должна быть финансовым барьером."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Способы оплаты" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {ways.map((w) => (
                <div key={w.title} className="relative bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
                  {w.badge && <div className="absolute -top-3 left-5 bg-[#109e4c] text-white text-xs font-bold px-3 py-1 rounded-full">{w.badge}</div>}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-[#36494f] text-base">{w.title}</h3>
                    <span className="font-extrabold text-[#109e4c] text-xl shrink-0">{w.rate}</span>
                  </div>
                  <p className="text-[#49636b] text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#f7f8f7] rounded-2xl p-8 border border-[#e8e8e8]">
              <h3 className="font-bold text-[#36494f] text-lg mb-4">Калькулятор ипотеки</h3>
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                {[["Стоимость дома","10 000 000 ₽"],["Ставка","6% годовых"],["Срок","20 лет"]].map(([k,v])=>(
                  <div key={k} className="bg-white rounded-xl p-4 border border-[#e8e8e8]">
                    <div className="text-[#49636b] text-xs mb-1">{k}</div>
                    <div className="font-bold text-[#36494f]">{v}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#49636b] text-sm">Платёж в месяц:</span>
                <span className="font-extrabold text-[#109e4c] text-2xl">≈ 71 600 ₽</span>
                <span className="text-[#49636b] text-xs">(ориентировочно)</span>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
