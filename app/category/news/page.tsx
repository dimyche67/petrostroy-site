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
  {
    title: "Новый проект «Нирвана» — дом, в котором хочется жить",
    cat: "Новости",
    date: "8 октября 2025",
    text: "Компания «Петрострой» представляет новый проект — дом «Нирвана». Одноэтажное строение площадью 190 м² с тремя спальнями, кабинетом и просторной гостиной. Высота потолков в гостиной достигает 4,3 метра благодаря второму свету. Панорамные окна, плоская мембранная кровля, газобетонные стены D400.",
  },
  {
    title: "Петрострой примет участие в выставке «Ярмарка недвижимости и Строим загородный дом»",
    cat: "Мероприятия",
    date: "1 сентября 2025",
    text: "С 5 по 7 сентября 2025 года компания «Петрострой» будет представлена на крупнейшей строительной выставке Северо-Запада в КВЦ «Экспофорум». На стенде — новые проекты домов, консультации специалистов и розыгрыш сертификата на скидку 150 000 ₽.",
  },
  {
    title: "Участие в выставке szd-expo.ru",
    cat: "Мероприятия",
    date: "17 сентября 2024",
    text: "Компания Петрострой примет участие в 6-м Всероссийском форуме СТРОИТЬ «Цивилизованный рынок ИЖС», который состоится 25 сентября 2024 года на площадке Live Арена в Москве.",
  },
  {
    title: "Вступили в федерацию ИЖС",
    cat: "Новости",
    date: "17 сентября 2024",
    text: "Компания «Петрострой» вступила в Федерацию ИЖС — профессиональное объединение участников рынка индивидуального жилищного строительства России.",
  },
  {
    title: "Успешно приняли участие в выставке Загородный Дом 2023 в Москве",
    cat: "Мероприятия",
    date: "22 мая 2023",
    text: "С 6 по 9 апреля 2023 года на ВДНХ прошла 36-я выставка «Загородный дом». Компания «Петрострой» впервые приняла участие в этом мероприятии и собрала большую базу контактов. Руководитель московского филиала Максим Ковальчук: «Участие превзошло наши ожидания».",
  },
  {
    title: "Льготную ипотеку продлили, а семейную выдают всем семьям с двумя детьми до 18 лет",
    cat: "Ипотека",
    date: "4 марта 2023",
    text: "Программу «Льготная ипотека» продлили до 1 июня 2024 года. Ставка — 8%, первоначальный взнос — 15%. Семейная ипотека теперь доступна каждой семье с двумя детьми до 18 лет по ставке 6%.",
  },
];
const cats = ["Все", "Новости", "Мероприятия", "Ипотека"];

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
