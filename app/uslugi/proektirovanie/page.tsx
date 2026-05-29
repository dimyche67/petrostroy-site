import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Проектирование домов в СПб и МО | Петрострой",
  description: "Проектирование частных домов от идеи до рабочей документации. 3D-визуализация, конструктив, инженерия. Делаем под свою технологию.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/proektirovanie" },
};

const includes = ["Архитектурный раздел (планировки, фасады)", "Конструктивный раздел (фундамент, стены, перекрытия)", "3D-визуализация дома", "Инженерный раздел (отопление, вентиляция, электрика)", "Сметная документация", "Авторский надзор при строительстве"];
const faqs = [
  { q: "Можно ли строить по проекту другой компании?", a: "Да. Мы строим по любым проектам. Но если проект разрабатывался не под нашу технологию — возможны расхождения. Рекомендуем проектирование у нас." },
  { q: "Сколько стоит проект?", a: "Стоимость зависит от площади и сложности. Эскизный проект — от 80 000 ₽, рабочая документация — от 150 000 ₽. Уточните у менеджера." },
  { q: "Сколько занимает разработка?", a: "Эскиз — 2–3 недели, рабочий проект — 4–6 недель. Сроки фиксируются в договоре." },
];

export default function ProektirovaniyePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Проектирование"
          title="Проектирование домов в СПб и МО — от идеи до рабочей документации"
          subtitle="Проектируем под нашу технологию строительства — никаких расхождений между проектом и реализацией."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Проектирование" }]}
          cta={{ text: "Заказать проект", href: "#contact" }}
        />
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="section-label mb-3">Состав проекта</p>
                <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">Что входит</h2>
                <ul className="flex flex-col gap-3">
                  {includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#49636b]">
                      <CheckCircle2 size={16} className="text-[#109e4c] mt-0.5 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f7f8f7] rounded-2xl p-8 border border-[#e8e8e8]">
                <h3 className="font-bold text-[#36494f] text-lg mb-6">Почему проект от нас выгоднее</h3>
                {[
                  { t: "Под нашу технологию", d: "Проект адаптирован под газобетон, кирпич или брус — нет расхождений при строительстве." },
                  { t: "Экономия на ошибках", d: "Правильный проект экономит до 15% на стройке за счёт точных расчётов материалов." },
                  { t: "Авторский надзор", d: "Мы контролируем соответствие строительства проекту на каждом этапе." },
                ].map((b) => (
                  <div key={b.t} className="mb-5">
                    <div className="font-semibold text-[#36494f] text-sm mb-1">{b.t}</div>
                    <p className="text-[#49636b] text-sm leading-relaxed">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#f7f8f7]">
          <div className="container-site max-w-3xl">
            <p className="section-label mb-3">Вопросы</p>
            <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">FAQ по проектированию</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
                  <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#f7f8f7] transition-colors font-medium text-[#36494f]">
                    {f.q}
                    <span className="text-[#109e4c] text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-[#49636b] text-sm leading-relaxed border-t border-[#e8e8e8]">{f.a}</div>
                </details>
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
