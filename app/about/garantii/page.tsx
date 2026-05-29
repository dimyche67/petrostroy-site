import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Гарантии на строительство домов | Петрострой СПб",
  description: "Что мы гарантируем и что это означает на практике. Сроки гарантии по каждому виду работ. Как подать гарантийную заявку.",
  alternates: { canonical: "https://petrostroy.biz/about/garantii" },
};

const warranties = [
  { type: "Фундамент", years: "10 лет", what: "Несущая способность, отсутствие трещин и деформаций" },
  { type: "Стены и перекрытия", years: "10 лет", what: "Целостность конструкции, отсутствие расслоений" },
  { type: "Кровля", years: "5 лет", what: "Герметичность, отсутствие протечек" },
  { type: "Инженерные системы", years: "3 года", what: "Отопление, водоснабжение, электрика, канализация" },
  { type: "Фасад и отделка", years: "2 года", what: "Штукатурка, облицовка, покраска" },
  { type: "Двери и окна", years: "1 год", what: "Фурнитура, уплотнители, механизмы" },
];

export default function GarantiiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Гарантии"
          title="Что мы гарантируем — и что это означает на практике"
          subtitle="Не декларации, а конкретные обязательства с конкретными сроками."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Гарантии" }]}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <p className="section-label mb-3">Сроки гарантии</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">По каждому виду работ</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#e8e8e8]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#36494f] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Вид работ</th>
                    <th className="px-6 py-4 font-semibold text-center">Срок гарантии</th>
                    <th className="text-left px-6 py-4 font-semibold">Что покрывает</th>
                  </tr>
                </thead>
                <tbody>
                  {warranties.map((w, i) => (
                    <tr key={w.type} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f8f7]"}>
                      <td className="px-6 py-4 font-medium text-[#36494f]">{w.type}</td>
                      <td className="px-6 py-4 text-center font-extrabold text-[#109e4c]">{w.years}</td>
                      <td className="px-6 py-4 text-[#49636b]">{w.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site max-w-3xl">
            <p className="section-label mb-3">Гарантийный случай</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-10">Как подать заявку</h2>
            <div className="flex flex-col gap-4">
              {[
                "Позвоните на наш номер или напишите в мессенджер — укажите адрес объекта и опишите проблему",
                "В течение 3 рабочих дней приезжает специалист, составляет акт осмотра",
                "Согласовываем сроки устранения — как правило, до 30 дней",
                "Устраняем за свой счёт, если это гарантийный случай по договору",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e8e8e8]">
                  <CheckCircle2 size={18} className="text-[#109e4c] mt-0.5 shrink-0" />
                  <p className="text-[#49636b] text-sm leading-relaxed">{s}</p>
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
