import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Помощь в оформлении ипотеки на строительство | Петрострой",
  description: "Помогаем оформить ипотеку на строительство частного дома. Семейная от 6%, льготная, рассрочка. Банки-партнёры.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/dopolnitelnye-uslugi/pomoshh-v-oformlenii-ipoteki-2" },
};

const programs = [
  { name: "Семейная ипотека", rate: "от 6%", cond: "Семьи с детьми до 18 лет", banks: "Сбер, ВТБ, ДОМ.РФ" },
  { name: "Льготная ипотека", rate: "от 8%", cond: "Все граждане РФ", banks: "Большинство крупных банков" },
  { name: "Ипотека на ИЖС", rate: "от 9%", cond: "Строительство на своём участке", banks: "Сбер, Альфа, Россельхозбанк" },
  { name: "Рассрочка от Петрострой", rate: "0%", cond: "На период строительства", banks: "Напрямую с компанией" },
];

export default function IpotekaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Ипотека"
          title="Помощь в оформлении ипотеки на строительство дома"
          subtitle="~15% наших клиентов строят в ипотеку. Помогаем выбрать программу и оформить заявку."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Помощь с ипотекой" }]}
          cta={{ text: "Рассчитать ипотеку", href: "#contact" }}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Программы</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Актуальные предложения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {programs.map((p) => (
                <div key={p.name} className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-bold text-[#36494f]">{p.name}</h3>
                    <span className="font-extrabold text-[#109e4c] text-xl shrink-0">{p.rate}</span>
                  </div>
                  <div className="text-sm text-[#49636b] mb-1"><span className="font-medium text-[#36494f]">Условия:</span> {p.cond}</div>
                  <div className="text-sm text-[#49636b]"><span className="font-medium text-[#36494f]">Банки:</span> {p.banks}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#36494f] rounded-2xl p-8 text-white">
              <h3 className="font-extrabold text-xl mb-3">Как мы помогаем</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Подбираем оптимальную программу под ваши параметры", "Готовим пакет документов для банка", "Сопровождаем до получения одобрения и подписания договора"].map((s) => (
                  <div key={s} className="bg-white/8 rounded-xl p-4 text-sm text-white/80">{s}</div>
                ))}
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
