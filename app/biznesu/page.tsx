import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Строительство для бизнеса | Петрострой СПб и МО",
  description: "Строительство коммерческих объектов, генподряд, субподряд, партнёрство с риелторами. Кейсы B2B.",
  alternates: { canonical: "https://petrostroy.biz/biznesu" },
};

const formats = [
  { title: "Генеральный подряд", text: "Берём полную ответственность за объект от фундамента до сдачи. Подходит для девелоперов и компаний, которым нужен единый подрядчик." },
  { title: "Субподряд", text: "Выполняем отдельные виды работ по вашему заданию. Работаем со строительными компаниями-партнёрами." },
  { title: "Партнёрство для риелторов", text: "Реферальная программа: приводите клиентов, получаете комиссию. Формат обсуждается индивидуально." },
  { title: "Корпоративное жильё", text: "Строим посёлки или отдельные дома для сотрудников компаний. Оптовые условия при объёме от 5 объектов." },
];

export default function BiznesuPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Бизнесу"
          title="Строительство для бизнеса — офисы, апартаменты, коммерческие объекты"
          subtitle="Работаем с девелоперами, управляющими компаниями, риелторами и корпоративными клиентами."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Бизнесу" }]}
          cta={{ text: "Обсудить сотрудничество", href: "#contact" }}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Форматы сотрудничества</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Как мы работаем с бизнесом</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {formats.map((f) => (
                <div key={f.title} className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8]">
                  <h3 className="font-bold text-[#36494f] text-base mb-2">{f.title}</h3>
                  <p className="text-[#49636b] text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#36494f] rounded-2xl p-8 text-white">
              <h3 className="font-extrabold text-xl mb-3">Преимущества работы с нами для B2B</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Работаем с юридическими лицами — полный пакет закрывающих документов", "20 лет опыта и 400 объектов — подтверждённая репутация", "Два офиса (СПб и МО) — работаем в обоих регионах"].map((s) => (
                  <div key={s} className="bg-white/10 rounded-xl p-4 text-sm text-white/80">{s}</div>
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
