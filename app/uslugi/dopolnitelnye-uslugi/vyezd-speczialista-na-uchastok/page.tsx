import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Бесплатный выезд специалиста на участок | Петрострой",
  description: "Бесплатно выедем на ваш участок: анализ грунта, рекомендация фундамента, предварительный расчёт стоимости дома.",
  alternates: { canonical: "https://petrostroy.biz/uslugi/dopolnitelnye-uslugi/vyezd-speczialista-na-uchastok" },
};

const steps = ["Оставляете заявку и указываете адрес участка", "Согласовываем удобную дату (обычно в течение 2–3 дней)", "Специалист приезжает, осматривает участок, берёт пробу грунта", "Получаете рекомендации по фундаменту и предварительный расчёт", "Решаете — продолжать ли работу с нами. Ни к чему не обязывает"];

export default function VyezdPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Выезд специалиста"
          title="Бесплатный выезд специалиста на ваш участок"
          subtitle="Анализ грунта, рекомендация фундамента, предварительный расчёт — всё бесплатно и без обязательств."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/uslugi" }, { label: "Выезд специалиста" }]}
          cta={{ text: "Записаться бесплатно", href: "#contact" }}
        />
        <section className="py-20 bg-white">
          <div className="container-site max-w-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="section-label mb-3">Как это работает</p>
                <h2 className="text-3xl font-extrabold text-[#36494f] mb-8">5 шагов</h2>
                <div className="flex flex-col gap-4">
                  {steps.map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#109e4c] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i+1}</div>
                      <p className="text-[#49636b] text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f7f8f7] rounded-2xl p-7 border border-[#e8e8e8]">
                <h3 className="font-bold text-[#36494f] text-lg mb-5">Что вы получаете бесплатно</h3>
                {["Анализ типа грунта на участке", "Рекомендация оптимального фундамента", "Предварительный расчёт стоимости дома", "Консультация по материалу стен", "Ответы на все ваши вопросы"].map((i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={16} className="text-[#109e4c] shrink-0" />
                    <span className="text-[#49636b] text-sm">{i}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-[#109e4c]/8 rounded-xl border border-[#109e4c]/20">
                  <div className="font-bold text-[#36494f] text-sm">Выезд — 100% бесплатно</div>
                  <div className="text-[#49636b] text-xs mt-1">Без оплаты и без обязательств со стороны клиента</div>
                </div>
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
