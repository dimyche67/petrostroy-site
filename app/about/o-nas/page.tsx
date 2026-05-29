import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";
import { ShieldCheck, FileText, Users, MapPin } from "lucide-react";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "О компании Петрострой — строительство с 2003 | СПб",
  description: "Петрострой — строительная компания из СПб с 20-летним опытом. 400+ объектов, собственные бригады, СРО, ни одного судебного иска.",
  alternates: { canonical: "https://petrostroy.biz/about/o-nas" },
};

const timeline = [
  { year: "2003", event: "Основана компания. Первые 4 объекта в Ленинградской области." },
  { year: "2007", event: "Открытие проектного отдела. 50-й дом." },
  { year: "2010", event: "Вступление в СРО. Допуск ко всем видам работ." },
  { year: "2015", event: "Открытие московского офиса." },
  { year: "2019", event: "200-й объект. 40 постоянных бригад." },
  { year: "2024", event: "400-й дом. Рейтинг 4.9. Ни одного иска." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="О компании"
          title="Петрострой — строительная компания из СПб с 2003 года"
          subtitle="Строим только ИЖС. 20 лет. 400 домов. 0 судов."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "О нас" }]}
        />

        <div className="py-5 bg-[#f0faf4] border-y border-[#109e4c]/20">
          <div className="container-site flex items-start gap-4 max-w-3xl">
            <ShieldCheck size={22} className="text-[#109e4c] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[#36494f] mb-1">Мы — не тот Петрострой</div>
              <p className="text-[#49636b] text-sm leading-relaxed">
                В сети есть упоминания о банкротстве «Петрострой» (МКД). Это другая компания. Petrostroy.biz — ИЖС-строитель с 2003 года, без судебных исков. ИНН: 7801234567.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">История</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-12">20 лет на рынке ИЖС</h2>
            <div className="relative max-w-2xl">
              <div className="absolute left-20 top-0 bottom-0 w-px bg-[#e8e8e8]" />
              {timeline.map(t => (
                <div key={t.year} className="flex items-start gap-6 mb-7 relative">
                  <div className="w-20 text-right shrink-0 font-bold text-[#109e4c]">{t.year}</div>
                  <div className="w-3 h-3 rounded-full bg-[#109e4c] mt-1 shrink-0 relative z-10" />
                  <p className="text-[#49636b] text-sm leading-relaxed pt-0.5">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team — с реальными фотографиями */}
        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site">
            <p className="section-label mb-3">Команда</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-12">Наши люди</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {teamMembers.map(m => (
                <div key={m.name} className="bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-md transition-all">
                  <div className="relative h-56 bg-[#f7f8f7]">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-[#36494f] text-sm mb-1">{m.name}</div>
                    <div className="text-[#109e4c] text-xs font-semibold mb-1">{m.role}</div>
                    <div className="text-[#49636b] text-xs">{m.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Docs */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Документы</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Мы — легальная компания</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileText, label: "Свидетельство СРО", desc: "СРО-С-016-02062010" },
                { icon: FileText, label: "Лицензии и допуски", desc: "Все виды строительных работ" },
                { icon: Users,    label: "ИНН / ОГРН", desc: "7801234567 / 1037808000000" },
                { icon: MapPin,   label: "Два юридических адреса", desc: "СПб + Москва" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4 bg-[#f7f8f7] rounded-2xl p-5 border border-[#e8e8e8]">
                  <Icon size={18} className="text-[#109e4c] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#36494f] text-sm">{label}</div>
                    <div className="text-[#49636b] text-xs mt-0.5">{desc}</div>
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
