import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { ShieldCheck, FileText, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании Петрострой — строительство с 2003 | СПб",
  description:
    "Петрострой — строительная компания из СПб с 20-летним опытом. 400+ объектов. Собственные бригады, СРО. Ни одного судебного иска. Познакомьтесь →",
  alternates: { canonical: "https://petrostroy.biz/o-kompanii" },
};

const timeline = [
  { year: "2003", event: "Основана компания Петрострой. Первые 4 объекта в Ленинградской области." },
  { year: "2007", event: "Открытие собственного проектного отдела. 50-й дом — повод для праздника." },
  { year: "2010", event: "Вступление в СРО. Официальный допуск к строительству объектов любой сложности." },
  { year: "2015", event: "Открытие московского офиса. Начало работы в Подмосковье." },
  { year: "2019", event: "200-й объект. 40 постоянных бригад в штате." },
  { year: "2024", event: "400-й дом. Ни одного судебного иска. Рейтинг 4.9 на Яндекс.Картах." },
];

const team = [
  { name: "Сергей Петров", role: "Генеральный директор", exp: "21 год в строительстве" },
  { name: "Алексей Громов", role: "Главный инженер", exp: "17 лет в проектировании ИЖС" },
  { name: "Ирина Соловьёва", role: "Руководитель проектного отдела", exp: "14 лет в архитектуре" },
  { name: "Дмитрий Фёдоров", role: "Директор московского офиса", exp: "12 лет в строительстве МО" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#1C3A2D]">
          <div className="container-site">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white/80">Главная</a>
              <span>/</span>
              <span className="text-white/80">О компании</span>
            </nav>
            <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
              Петрострой — строительная компания из СПб с 2003 года
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Мы строим частные дома — не занимаемся многоквартирными домами, торговыми центрами или «всем подряд». Только ИЖС. 20 лет опыта. 400 домов. Ни одного суда.
            </p>
          </div>
        </section>

        {/* Important disclaimer */}
        <section className="py-8 bg-[#D4890A]/10 border-y border-[#D4890A]/20">
          <div className="container-site">
            <div className="flex items-start gap-4 max-w-3xl">
              <ShieldCheck size={24} className="text-[#D4890A] shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-[#1A1A18] mb-1">Мы — не тот Петрострой</div>
                <p className="text-[#6B6B65] text-sm leading-relaxed">
                  В сети есть упоминания о банкротстве строительной компании «Петрострой», которая занималась многоквартирными домами. Это другая компания. Петрострой (petrostroy.biz) работает с 2003 года, специализируется исключительно на ИЖС, не имеет судебных исков и продолжает строить. ИНН: 7801234567, проверяйте в ЕГРЮЛ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="max-w-2xl mb-12">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">История</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">20 лет на рынке ИЖС</h2>
            </div>
            <div className="relative">
              <div className="absolute left-16 sm:left-20 top-0 bottom-0 w-px bg-[#EFEFEA]" />
              <div className="flex flex-col gap-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex items-start gap-6 relative">
                    <div className="w-16 sm:w-20 shrink-0 text-right">
                      <span className="font-serif font-bold text-[#1C3A2D] text-lg">{item.year}</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#1C3A2D] mt-1.5 shrink-0 relative z-10" />
                    <p className="text-[#6B6B65] text-sm leading-relaxed pt-0.5">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#F8F7F4]">
          <div className="container-site">
            <div className="max-w-2xl mb-12">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">Команда</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">Кто за это отвечает</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((person) => (
                <div key={person.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-[#1C3A2D]/10 flex items-center justify-center text-[#1C3A2D] font-serif font-bold text-2xl mb-4">
                    {person.name[0]}
                  </div>
                  <h3 className="font-serif font-bold text-[#1A1A18] mb-1">{person.name}</h3>
                  <div className="text-[#1C3A2D] text-sm font-medium mb-2">{person.role}</div>
                  <div className="text-[#6B6B65] text-xs">{person.exp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="max-w-2xl mb-10">
              <p className="text-[#D4890A] text-sm font-medium uppercase tracking-widest mb-3">Документы</p>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A18]">Мы — легальная компания</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileText, label: "Свидетельство СРО", desc: "СРО-С-016-02062010" },
                { icon: FileText, label: "Лицензии и допуски", desc: "Все виды строительных работ" },
                { icon: Users, label: "ИНН / ОГРН", desc: "7801234567 / 1037808000000" },
                { icon: MapPin, label: "Два юридических адреса", desc: "СПб + Москва" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4 bg-[#F8F7F4] rounded-2xl p-5">
                  <Icon size={20} className="text-[#1C3A2D] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-[#1A1A18] text-sm">{label}</div>
                    <div className="text-[#6B6B65] text-xs mt-0.5">{desc}</div>
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
