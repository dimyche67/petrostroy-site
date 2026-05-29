import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Дополнительные услуги | Петрострой СПб",
  description: "3D-визуализация, ландшафтный дизайн, дизайн интерьера, инженерные работы, выезд специалиста, помощь с ипотекой.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/dopolnitelnye-uslugi" },
};

const extras = [
  { title: "Выезд специалиста на участок", href: "/uslugi/dopolnitelnye-uslugi/vyezd-speczialista-na-uchastok", price: "Бесплатно", text: "Анализ грунта, рекомендация фундамента, предварительный расчёт." },
  { title: "Помощь в оформлении ипотеки", href: "/uslugi/dopolnitelnye-uslugi/pomoshh-v-oformlenii-ipoteki-2", price: "Бесплатно", text: "Подбор программы, помощь с документами, сопровождение до одобрения." },
  { title: "3D-визуализация проекта", href: "#contact", price: "от 25 000 ₽", text: "Фотореалистичная визуализация фасадов и интерьеров до начала стройки." },
  { title: "Ландшафтный дизайн", href: "#contact", price: "от 50 000 ₽", text: "Проект благоустройства участка с посадочным материалом." },
  { title: "Дизайн интерьера", href: "#contact", price: "от 1 500 ₽/м²", text: "Полный пакет: планировки, отделочные материалы, расстановка мебели." },
  { title: "Инженерные работы", href: "#contact", price: "по запросу", text: "Монтаж отопления, вентиляции, электрики и сантехники отдельно от строительства." },
];

export default function DopUslugiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Дополнительные услуги"
          title="Дополнительные услуги — от участка до финишной отделки"
          subtitle="Всё что нужно для вашего дома — в одной компании."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Дополнительные услуги" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {extras.map((s) => (
                <Link key={s.title} href={s.href} className="group bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8] hover:border-[#109e4c]/40 hover:shadow-md transition-all">
                  <div className="font-extrabold text-[#109e4c] text-sm mb-2">{s.price}</div>
                  <h3 className="font-bold text-[#36494f] group-hover:text-[#109e4c] transition-colors mb-2">{s.title}</h3>
                  <p className="text-[#49636b] text-sm leading-relaxed mb-4">{s.text}</p>
                  <div className="text-[#109e4c] text-xs font-semibold">Узнать подробнее →</div>
                </Link>
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
