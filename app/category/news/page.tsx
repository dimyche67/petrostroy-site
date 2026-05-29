import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "Новости компании Петрострой",
  description: "Последние новости, мероприятия и полезные статьи о строительстве домов от компании Петрострой.",
  alternates: { canonical: "https://petrostroy.biz/category/news" },
};

const cats = ["Все", "Новости", "Мероприятия", "Ипотека"];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Новости"
          title="Новости и статьи компании Петрострой"
          subtitle="Следите за нашими мероприятиями, новыми проектами и полезными материалами о строительстве."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Новости" }]}
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
              {news.map((p) => (
                <Link key={p.slug} href={`/category/news/${p.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-md transition-shadow group h-full">
                    <div className="h-44 bg-gradient-to-br from-[#36494f] to-[#49636b] flex items-center justify-center text-white/10 text-6xl select-none">🏗️</div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-2.5 py-1 rounded-full">{p.cat}</span>
                        <span className="text-[#49636b] text-xs">{p.date}</span>
                      </div>
                      <h3 className="font-bold text-[#36494f] text-sm leading-snug mb-2 group-hover:text-[#109e4c] transition-colors">{p.title}</h3>
                      <p className="text-[#49636b] text-xs leading-relaxed line-clamp-3">{p.excerpt}</p>
                      <div className="mt-4 text-[#109e4c] text-xs font-semibold">Читать →</div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
