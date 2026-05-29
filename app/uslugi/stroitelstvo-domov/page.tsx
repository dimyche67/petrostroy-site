import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Строительство домов под ключ в СПб и МО | Петрострой",
  description: "Строительство частных домов из любых материалов. Холодный контур, тёплый, White Box, под ключ. Фиксированная цена.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/stroitelstvo-domov" },
};

const materials = [
  { title: "Дома из газобетона", href: "/doma-iz-gazobetona-pod-klyuch", from: "от 4 800 ₽/м²", text: "Самый популярный материал. Тёплый, быстрый, экономичный." },
  { title: "Дома из кирпича", href: "/uslugi/stroitelstvo-domov/doma-iz-kirpicha", from: "от 7 500 ₽/м²", text: "Статусный и долговечный. Надёжность на 100+ лет." },
  { title: "Дома из керамоблоков", href: "/uslugi/stroitelstvo-domov/doma-iz-keramoblokov", from: "от 6 200 ₽/м²", text: "Компромисс между газобетоном и кирпичом. Тепло и скорость." },
  { title: "Дома из клееного бруса", href: "/doma-iz-kleenogo-brusa-pod-klyuch", from: "от 5 500 ₽/м²", text: "Экология, эстетика дерева, быстрая сборка." },
];

const packages = [
  { name: "Холодный контур", desc: "Фундамент + стены + кровля + окна + входная дверь" },
  { name: "Тёплый контур", desc: "Холодный + утепление + отопление + водоснабжение + электрика" },
  { name: "White Box", desc: "Тёплый + стяжка + штукатурка + разводка под отделку" },
  { name: "Под ключ", desc: "White Box + чистовая отделка + сантехника + межкомнатные двери" },
];

export default function StroitelstvoDomovPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Строительство домов"
          title="Строительство домов под ключ в СПб и МО — из любых материалов"
          subtitle="Фиксированная цена в договоре. 400 построенных домов. Гарантия 10 лет."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Строительство домов" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">По материалу</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Выберите ваш материал</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {materials.map((m) => (
                <Link key={m.href} href={m.href} className="group bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8] hover:border-[#109e4c]/40 hover:shadow-md transition-all">
                  <h3 className="font-bold text-[#36494f] group-hover:text-[#109e4c] transition-colors mb-1">{m.title}</h3>
                  <div className="text-[#109e4c] font-extrabold text-sm mb-3">{m.from}</div>
                  <p className="text-[#49636b] text-sm leading-relaxed mb-4">{m.text}</p>
                  <div className="text-[#109e4c] text-xs font-semibold">Подробнее →</div>
                </Link>
              ))}
            </div>
            <p className="section-label mb-3">Комплектации</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Что входит в каждый пакет</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((p, i) => (
                <div key={p.name} className={`rounded-2xl p-6 border ${i === 3 ? "bg-[#36494f] border-[#36494f] text-white" : "bg-white border-[#e8e8e8]"}`}>
                  {i === 3 && <div className="bg-[#109e4c] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Рекомендуем</div>}
                  <h3 className={`font-bold text-base mb-2 ${i === 3 ? "text-white" : "text-[#36494f]"}`}>{p.name}</h3>
                  <p className={`text-sm leading-relaxed ${i === 3 ? "text-white/70" : "text-[#49636b]"}`}>{p.desc}</p>
                </div>
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
