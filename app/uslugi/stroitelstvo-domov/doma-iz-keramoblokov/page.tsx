import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, MapPin, Calendar } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Дома из керамоблоков под ключ в СПб и МО | Петрострой",
  description: "Строим дома из керамоблоков: тепло кирпича, скорость газобетона. Фиксированная цена, гарантия 10 лет.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/stroitelstvo-domov/doma-iz-keramoblokov" },
};

const kProjects = projects.filter(p => p.tags.includes("keramoblok"));
const compare = [
  { param:"Теплопроводность", gaz:"0.12 Вт/м·К", ker:"0.16 Вт/м·К", kir:"0.70 Вт/м·К" },
  { param:"Скорость строительства", gaz:"Быстро", ker:"Быстро", kir:"Медленно" },
  { param:"Стоимость материала", gaz:"Низкая", ker:"Средняя", kir:"Высокая" },
  { param:"Прочность на сжатие", gaz:"Средняя", ker:"Высокая", kir:"Высокая" },
];

export default function KeramoblokyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-28 pb-24 min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/heroes/hero-keramoblok.jpg" alt="Дом из керамоблоков Петрострой" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#36494f]/90 via-[#36494f]/70 to-[#36494f]/30" />
          </div>
          <div className="container-site relative z-10">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-5">
              <a href="/" className="hover:text-white/80">Главная</a><span>/</span>
              <a href="/uslugi/stroitelstvo-domov" className="hover:text-white/80">Строительство</a><span>/</span>
              <span className="text-white/80">Керамоблоки</span>
            </nav>
            <div className="max-w-xl">
              <p className="text-[#109e4c] text-xs font-bold uppercase tracking-widest mb-3">Керамоблок</p>
              <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">Дома из керамоблоков — тепло кирпича, скорость газобетона</h1>
              <p className="text-white/70 text-lg mb-8">Стоимость: <span className="text-white font-bold">от 6,2 млн ₽</span> · Лучший компромисс</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton label="Рассчитать стоимость" title="Расчёт дома из керамоблоков" source="Керамоблок Hero" variant="green" size="lg" />
                <CtaButton label="Оставить заявку" title="Заявка на дом из керамоблоков" source="Керамоблок Hero" variant="outline-white" size="lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Сравнение</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">Газобетон vs Керамоблок vs Кирпич</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#e8e8e8] mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#36494f] text-white">
                    <th className="text-left px-6 py-4">Параметр</th>
                    <th className="px-6 py-4 text-center">Газобетон</th>
                    <th className="px-6 py-4 text-center font-bold text-[#109e4c]">Керамоблок</th>
                    <th className="px-6 py-4 text-center">Кирпич</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r, i) => (
                    <tr key={r.param} className={i%2===0?"bg-white":"bg-[#f7f8f7]"}>
                      <td className="px-6 py-4 font-medium text-[#36494f]">{r.param}</td>
                      <td className="px-6 py-4 text-center text-[#49636b]">{r.gaz}</td>
                      <td className="px-6 py-4 text-center font-bold text-[#109e4c]">{r.ker}</td>
                      <td className="px-6 py-4 text-center text-[#49636b]">{r.kir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[["от 6 200 ₽/м²","Холодный контур"],["от 9 000 ₽/м²","Тёплый контур"],["от 16 000 ₽/м²","Под ключ"]].map(([p,l])=>(
                <div key={l} className="bg-[#f7f8f7] rounded-2xl p-5 border border-[#e8e8e8] text-center">
                  <div className="font-extrabold text-[#109e4c] text-xl">{p}</div>
                  <div className="text-[#49636b] text-sm mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="section-label mb-3">Реализованные объекты</p>
                <h2 className="text-3xl font-extrabold text-[#36494f]">Наши дома из керамоблоков</h2>
              </div>
              <Link href="/projects" className="text-[#109e4c] text-sm font-semibold">Все проекты →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kProjects.map(p => (
                <div key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-lg transition-all">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#36494f] mb-2 text-sm">{p.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#49636b] mb-3">
                      <span className="flex items-center gap-1"><Maximize2 size={12} />{p.area} м²</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{p.region}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} />{p.year}</span>
                    </div>
                    <div className="font-extrabold text-[#36494f] text-sm">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <CtaButton label="Рассчитать стоимость моего дома" title="Расчёт дома из керамоблоков" source="Керамоблок — проекты" variant="green" size="md" />
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
