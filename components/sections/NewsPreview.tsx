import Link from "next/link";
import { news as allNews } from "@/lib/news";

const news = allNews.slice(0, 3);

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
            <Link key={item.slug} href={`/category/news/${item.slug}`}>
              <article className="bg-[#f7f8f7] rounded-2xl p-6 border border-[#e8e8e8] hover:shadow-md transition-shadow group h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-2.5 py-1 rounded-full">{item.cat}</span>
                  <span className="text-[#49636b] text-xs">{item.date}</span>
                </div>
                <h3 className="font-bold text-[#36494f] text-sm leading-snug mb-2 group-hover:text-[#109e4c] transition-colors">{item.title}</h3>
                <p className="text-[#49636b] text-xs leading-relaxed">{item.excerpt}</p>
                <div className="mt-3 text-[#109e4c] text-xs font-semibold">Читать →</div>
              </article>
            </Link>
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
