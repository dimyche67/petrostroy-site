import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Партнёры | Петрострой",
  description: "Партнёры компании Петрострой — производители строительных материалов и поставщики, с которыми мы работаем.",
  alternates: { canonical: "https://petrostroy.biz/partnery" },
};

const partners = [
  {
    name: "ISTKULT",
    category: "Газобетон",
    description: "Крупнейший производитель премиального газобетона в Центральной России. Блоки ISTKULT отличаются точными геометрическими размерами, высокой прочностью и стабильным качеством.",
    site: null,
  },
];

const benefits = [
  { title: "Прямые поставки", text: "Работаем напрямую с производителями — без посредников и наценок." },
  { title: "Проверенное качество", text: "Все партнёры проходят отбор по стандартам качества и надёжности." },
  { title: "Лучшие условия", text: "Партнёрские цены позволяют нам строить дома выгоднее для клиентов." },
  { title: "Гарантия материалов", text: "На все используемые материалы предоставляется официальная гарантия." },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Партнёры"
          title="Наши партнёры"
          subtitle="Работаем только с проверенными производителями и поставщиками строительных материалов."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Партнёры" }]}
        />

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-[#36494f] mb-10 text-center">Почему это важно для вас</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
                  <div className="w-10 h-10 rounded-xl bg-[#109e4c]/10 flex items-center justify-center mb-4">
                    <span className="text-[#109e4c] text-lg font-bold">✓</span>
                  </div>
                  <h3 className="font-bold text-[#36494f] mb-2">{b.title}</h3>
                  <p className="text-[#49636b] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners list */}
        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-[#36494f] mb-10">Партнёры компании</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl p-8 border border-[#e8e8e8] flex flex-col">
                  <div className="w-full h-24 bg-[#f7f8f7] rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-extrabold text-[#36494f] tracking-tight">{p.name}</span>
                  </div>
                  <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-3 py-1 rounded-full self-start mb-4">{p.category}</span>
                  <p className="text-[#49636b] text-sm leading-relaxed flex-1">{p.description}</p>
                </div>
              ))}

              {/* Скоро */}
              {[1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-dashed border-[#e8e8e8] flex flex-col items-center justify-center text-center min-h-[200px]">
                  <span className="text-[#49636b]/40 text-4xl mb-3">+</span>
                  <p className="text-[#49636b]/60 text-sm font-medium">Партнёр скоро</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become partner */}
        <section className="py-16 bg-[#36494f]">
          <div className="container-site text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Хотите стать нашим партнёром?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Если вы производитель строительных материалов или поставщик услуг — свяжитесь с нами для обсуждения условий сотрудничества.</p>
            <CtaButton
              label="Написать нам"
              title="Партнёрство"
              source="Страница партнёров"
              variant="white"
              size="lg"
            />
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
