import Link from "next/link";

const news = [
  {
    title: "Новый проект «Нирвана» — дом, в котором хочется жить",
    cat: "Новости",
    date: "8 октября 2025",
    text: "Одноэтажное строение площадью 190 м² с тремя спальнями, высота потолков 4,3 м, панорамные окна и плоская мембранная кровля.",
  },
  {
    title: "Петрострой примет участие в выставке «Ярмарка недвижимости»",
    cat: "Мероприятия",
    date: "1 сентября 2025",
    text: "С 5 по 7 сентября в КВЦ «Экспофорум». Новые проекты домов, консультации и розыгрыш сертификата на скидку 150 000 ₽.",
  },
  {
    title: "Льготную ипотеку продлили, а семейную выдают всем семьям с двумя детьми",
    cat: "Ипотека",
    date: "4 марта 2023",
    text: "Ставка по льготной ипотеке — 8%. Семейная ипотека теперь доступна каждой семье с двумя детьми до 18 лет по ставке 6%.",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#109e4c] text-sm font-semibold uppercase tracking-wider">Новости</span>
            <h2 className="text-3xl font-bold text-[#36494f] mt-1">Последние новости компании</h2>
          </div>
          <Link href="/category/news" className="hidden md:inline-flex items-center gap-1 text-[#109e4c] font-semibold text-sm hover:underline">
            Все новости →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item.title} className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8] hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-2.5 py-1 rounded-full">{item.cat}</span>
                <span className="text-[#49636b] text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-[#36494f] text-sm leading-snug mb-2 group-hover:text-[#109e4c] transition-colors">{item.title}</h3>
              <p className="text-[#49636b] text-xs leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/category/news" className="text-[#109e4c] font-semibold text-sm hover:underline">
            Все новости →
          </Link>
        </div>
      </div>
    </section>
  );
}
