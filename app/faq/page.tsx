import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { faqItems } from "@/lib/data";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Частые вопросы о строительстве домов | Петрострой СПб",
  description:
    "Ответы на 30+ вопросов о строительстве домов: сроки, смета, гарантии, ипотека, технологии. Найдите ответ на свой вопрос →",
  alternates: { canonical: "https://petrostroy.biz/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.flatMap((g) =>
    g.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-[#1C3A2D]">
          <div className="container-site">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white/80">Главная</a>
              <span>/</span>
              <span className="text-white/80">Частые вопросы</span>
            </nav>
            <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
              Ответы на частые вопросы
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Собрали ответы на вопросы, которые задают чаще всего. Не нашли свой — позвоните, это быстрее.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F8F7F4]">
          <div className="container-site max-w-4xl">
            <div className="flex flex-col gap-10">
              {faqItems.map((group) => (
                <div key={group.category}>
                  <h2 className="font-serif text-2xl font-bold text-[#1A1A18] mb-5 pb-3 border-b border-[#EFEFEA]">
                    {group.category}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {group.questions.map((item) => (
                      <details
                        key={item.q}
                        className="group bg-white rounded-2xl shadow-sm overflow-hidden"
                      >
                        <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#F8F7F4] transition-colors">
                          <span className="font-medium text-[#1A1A18]">{item.q}</span>
                          <span className="text-[#1C3A2D] text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                        </summary>
                        <div className="px-6 pb-5 pt-1 text-[#6B6B65] text-sm leading-relaxed border-t border-[#EFEFEA]">
                          {item.a}
                        </div>
                      </details>
                    ))}
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
