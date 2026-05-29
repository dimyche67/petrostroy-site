import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги по строительству домов | Петрострой СПб",
  description: "Строительство домов из газобетона, кирпича, керамоблоков и бруса. Проектирование, фундаменты, дополнительные услуги.",
  alternates: { canonical: "https://petrostroy.biz/uslugi" },
};

const services = [
  { title: "Строительство домов", text: "Дома под ключ из любых материалов с фиксированной ценой.", href: "/uslugi/stroitelstvo-domov", icon: "🏠" },
  { title: "Проектирование", text: "От идеи до рабочей документации и 3D-визуализации.", href: "/uslugi/proektirovanie", icon: "📐" },
  { title: "Фундаменты", text: "Все типы фундаментов под ваш грунт и проект.", href: "/uslugi/stroitelstvo-fundamenta", icon: "🏗️" },
  { title: "Дополнительные услуги", text: "Ландшафт, дизайн интерьера, инженерные работы.", href: "/uslugi/dopolnitelnye-uslugi", icon: "⚙️" },
  { title: "Выезд специалиста", text: "Бесплатный выезд на участок — анализ и рекомендации.", href: "/uslugi/dopolnitelnye-uslugi/vyezd-speczialista-na-uchastok", icon: "📍" },
  { title: "Помощь с ипотекой", text: "Помогаем оформить ипотеку на строительство в банке.", href: "/uslugi/dopolnitelnye-uslugi/pomoshh-v-oformlenii-ipoteki-2", icon: "🏦" },
];

const materials = [
  { title: "Дома из газобетона", href: "/doma-iz-gazobetona-pod-klyuch", from: "от 4 800 ₽/м²" },
  { title: "Дома из кирпича", href: "/uslugi/stroitelstvo-domov/doma-iz-kirpicha", from: "от 7 500 ₽/м²" },
  { title: "Дома из керамоблоков", href: "/uslugi/stroitelstvo-domov/doma-iz-keramoblokov", from: "от 6 200 ₽/м²" },
  { title: "Дома из клееного бруса", href: "/doma-iz-kleenogo-brusa-pod-klyuch", from: "от 5 500 ₽/м²" },
];

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Услуги"
          title="Что мы строим и проектируем"
          subtitle="Полный цикл от идеи до ключей. Все виды работ — в одной компании."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
        />

        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">По материалу</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Строим из любых материалов</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {materials.map((m) => (
                <Link key={m.href} href={m.href} className="group bg-[#f7f8f7] hover:bg-[#36494f] rounded-2xl p-6 transition-all duration-300 border border-[#e8e8e8] hover:border-[#36494f]">
                  <h3 className="font-bold text-[#36494f] group-hover:text-white text-base mb-2 transition-colors">{m.title}</h3>
                  <div className="text-[#109e4c] group-hover:text-[#109e4c] font-extrabold text-sm mb-3">{m.from}</div>
                  <div className="flex items-center gap-1 text-[#109e4c] text-xs font-semibold group-hover:gap-2 transition-all">Подробнее <ArrowRight size={13} /></div>
                </Link>
              ))}
            </div>

            <p className="section-label mb-3">Все услуги</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Полный перечень</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="group flex items-start gap-4 bg-[#f7f8f7] rounded-2xl p-6 hover:shadow-md transition-all border border-transparent hover:border-[#e8e8e8]">
                  <div className="text-2xl">{s.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#36494f] group-hover:text-[#109e4c] transition-colors mb-1">{s.title}</h3>
                    <p className="text-[#49636b] text-sm leading-relaxed">{s.text}</p>
                    <div className="mt-3 text-[#109e4c] text-xs font-semibold">Подробнее →</div>
                  </div>
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
