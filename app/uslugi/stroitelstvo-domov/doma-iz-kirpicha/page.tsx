import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Maximize2, MapPin, Calendar } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Дома из кирпича под ключ в СПб и МО | Петрострой",
  description: "Строим кирпичные дома под ключ. Надёжность на 100+ лет, фиксированная цена, гарантия 10 лет.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/stroitelstvo-domov/doma-iz-kirpicha" },
};

const packages = [
  { name: "Холодный контур", price: "от 7 500 ₽/м²", highlight: false },
  { name: "Тёплый контур", price: "от 10 500 ₽/м²", highlight: false },
  { name: "White Box", price: "от 14 000 ₽/м²", highlight: false },
  { name: "Под ключ", price: "от 18 500 ₽/м²", highlight: true },
];
const pros = ["Долговечность 100+ лет", "Отличная шумоизоляция", "Высокая огнестойкость", "Статусный внешний вид", "Не требует периодической обработки", "Стабильная температура"];

const kirpichProjects = projects.filter(p => p.tags.includes("kirpich"));

export default function KirpichPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-28 pb-24 min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/heroes/hero-kirpich.jpg" alt="Кирпичный дом Петрострой" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#36494f]/90 via-[#36494f]/70 to-[#36494f]/30" />
          </div>
          <div className="container-site relative z-10">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-5">
              <a href="/" className="hover:text-white/80">Главная</a><span>/</span>
              <a href="/uslugi/stroitelstvo-domov" className="hover:text-white/80">Строительство</a><span>/</span>
              <span className="text-white/80">Кирпич</span>
            </nav>
            <div className="max-w-xl">
              <p className="text-[#109e4c] text-xs font-bold uppercase tracking-widest mb-3">Кирпич</p>
              <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">Дома из кирпича под ключ в СПб и МО</h1>
              <p className="text-white/70 text-lg mb-8">Стоимость: <span className="text-white font-bold">от 7,5 млн ₽</span> · Надёжность на 100+ лет</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton label="Рассчитать стоимость" title="Расчёт кирпичного дома" source="Кирпич Hero" variant="green" size="lg" />
                <CtaButton label="Оставить заявку" title="Заявка на кирпичный дом" source="Кирпич Hero" variant="outline-white" size="lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="section-label mb-3">Цены</p>
                <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">Комплектации</h2>
                <div className="flex flex-col gap-3 mb-8">
                  {packages.map(p => (
                    <div key={p.name} className={`flex justify-between items-center px-5 py-4 rounded-xl border ${p.highlight ? "bg-[#36494f] border-[#36494f]" : "bg-[#f7f8f7] border-[#e8e8e8]"}`}>
                      <span className={`font-medium text-sm ${p.highlight ? "text-white" : "text-[#36494f]"}`}>{p.name}</span>
                      <span className="font-extrabold text-[#109e4c]">{p.price}</span>
                    </div>
                  ))}
                </div>
                <CtaButton label="Рассчитать под мой проект" title="Расчёт кирпичного дома" source="Кирпич — пакеты" variant="green" size="md" />
              </div>
              <div>
                <p className="section-label mb-3">Преимущества</p>
                <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">Почему кирпич</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {pros.map(p => (
                    <div key={p} className="flex items-center gap-2 text-sm text-[#49636b]">
                      <CheckCircle2 size={15} className="text-[#109e4c] shrink-0" />{p}
                    </div>
                  ))}
                </div>
                <div className="bg-[#f7f8f7] rounded-2xl p-5 border border-[#e8e8e8] text-sm text-[#49636b] leading-relaxed">
                  <strong className="text-[#36494f]">Честно о минусах:</strong> кирпичный дом дороже газобетонного на 40–60% и строится дольше. Зато прослужит 150+ лет без ухода за фасадом.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="section-label mb-3">Реализованные объекты</p>
                <h2 className="text-3xl font-extrabold text-[#36494f]">Наши кирпичные дома</h2>
              </div>
              <Link href="/projects" className="text-[#109e4c] text-sm font-semibold">Все проекты →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kirpichProjects.map(p => (
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
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
