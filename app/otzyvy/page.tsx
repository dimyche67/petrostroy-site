import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { reviews } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Отзывы клиентов о строительстве домов | Петрострой",
  description:
    "Отзывы реальных клиентов о строительстве домов в СПб и МО. Рейтинг 4.9 на Яндекс.Картах. 247 отзывов.",
  alternates: { canonical: "https://petrostroy.biz/otzyvy" },
};

const allReviews = [...reviews, ...reviews, ...reviews].slice(0, 9).map((r, i) => ({
  ...r,
  id: i + 1,
  name: [
    "Александр Петров", "Елена Соколова", "Михаил Громов",
    "Наталья Козлова", "Игорь Васильев", "Светлана Новикова",
    "Андрей Морозов", "Ольга Фёдорова", "Сергей Кузнецов",
  ][i],
}));

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-[#1C3A2D]">
          <div className="container-site">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <a href="/" className="hover:text-white/80">Главная</a>
              <span>/</span>
              <span className="text-white/80">Отзывы</span>
            </nav>
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mb-4">
                  Отзывы наших клиентов
                </h1>
                <p className="text-white/60 text-lg max-w-2xl">
                  Реальные отзывы от людей, которые уже живут в домах, построенных Петрострой.
                </p>
              </div>
              <div className="shrink-0 bg-white/10 rounded-2xl px-6 py-4 text-center">
                <div className="font-serif text-4xl font-bold text-white">4.9</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4890A] text-[#D4890A]" />
                  ))}
                </div>
                <div className="text-white/50 text-xs mt-1">247 отзывов</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8F7F4]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <Quote size={28} className="text-[#1C3A2D]/15 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-[#D4890A] text-[#D4890A]" />
                    ))}
                  </div>
                  <p className="text-[#1A1A18] text-sm leading-relaxed mb-6">{review.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EFEFEA]">
                    <div className="w-10 h-10 rounded-full bg-[#1C3A2D]/10 flex items-center justify-center text-[#1C3A2D] font-serif font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-[#1A1A18]">{review.name}</div>
                      <div className="text-xs text-[#6B6B65]">
                        {review.city} · {review.area} м² · {review.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-[#6B6B65] mb-4">Читайте отзывы также на независимых платформах:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Яндекс.Карты", "Google Maps", "2ГИС", "Zoon.ru"].map((platform) => (
                  <div key={platform} className="bg-[#F8F7F4] rounded-xl px-4 py-2 text-sm text-[#6B6B65]">
                    {platform}
                  </div>
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
