import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Блог о строительстве домов | Петрострой СПб",
  description: "Советы, разборы, цены на строительство. Газобетон vs кирпич, как проверить подрядчика, сколько стоит дом в СПб в 2026.",
  alternates: { canonical: "https://petrostroy.biz/category/news" },
};

const posts = [
  { title: "Сколько стоит построить дом из газобетона в СПб в 2026 году", cat: "Цены", date: "15 мая 2026", read: "8 мин", text: "Разбираем реальные цены по комплектациям — от холодного контура до под ключ. Что влияет на стоимость и как не попасть на скрытые расходы." },
  { title: "Газобетон vs кирпич: честное сравнение без маркетинга", cat: "Технологии", date: "2 мая 2026", read: "12 мин", text: "Теплопроводность, скорость строительства, долговечность, цена — сравниваем по шести параметрам на основе наших 400 объектов." },
  { title: "Как проверить строительного подрядчика: чек-лист из 15 пунктов", cat: "Выбор подрядчика", date: "20 апреля 2026", read: "10 мин", text: "Что смотреть в договоре, какие документы запросить, как проверить в ЕГРЮЛ и СРО. Используйте до подписания." },
  { title: "Семейная ипотека на строительство дома: пошаговый гайд 2026", cat: "Ипотека", date: "10 апреля 2026", read: "9 мин", text: "Кто может получить, какие банки одобряют, что нужно из документов, в какие сроки. Актуально на май 2026." },
  { title: "Фундамент под газобетонный дом: какой выбрать под ваш участок", cat: "Технологии", date: "1 апреля 2026", read: "11 мин", text: "Свайный, ленточный, плитный, УШП — объясняем разницу на примерах и когда что применять." },
  { title: "5 этапов строительства дома: что происходит от заявки до ключей", cat: "Процесс", date: "20 марта 2026", read: "7 мин", text: "Как выглядит процесс у нас — от первого звонка до акта приёмки и гарантийного паспорта." },
];
const cats = ["Все", "Цены", "Технологии", "Ипотека", "Процесс", "Выбор подрядчика"];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Блог"
          title="Всё о строительстве домов: советы, разборы, цены"
          subtitle="Пишем честно — на основе 20 лет опыта и 400 реальных объектов."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
        />

        <div className="py-6 bg-white border-b border-[#e8e8e8] sticky top-16 z-20">
          <div className="container-site flex gap-2 overflow-x-auto pb-1">
            {cats.map((c, i) => (
              <button key={c} className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[#36494f] text-white" : "bg-[#f7f8f7] text-[#49636b] hover:bg-[#e8e8e8]"}`}>{c}</button>
            ))}
          </div>
        </div>

        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <article key={p.title} className="bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-md transition-shadow group">
                  <div className="h-44 bg-gradient-to-br from-[#36494f] to-[#49636b] flex items-center justify-center text-white/10 text-6xl select-none">🏗️</div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-2.5 py-1 rounded-full">{p.cat}</span>
                      <span className="text-[#49636b] text-xs">{p.date}</span>
                      <span className="text-[#49636b] text-xs ml-auto">{p.read}</span>
                    </div>
                    <h3 className="font-bold text-[#36494f] text-sm leading-snug mb-2 group-hover:text-[#109e4c] transition-colors">{p.title}</h3>
                    <p className="text-[#49636b] text-xs leading-relaxed line-clamp-2">{p.text}</p>
                    <div className="mt-4 text-[#109e4c] text-xs font-semibold">Читать →</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
