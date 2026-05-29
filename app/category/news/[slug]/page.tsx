import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { news } from "@/lib/news";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | Петрострой`,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const paragraphs = item.content.trim().split("\n").filter((p) => p.trim() !== "");

  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site max-w-3xl">
            <Link href="/category/news" className="inline-flex items-center gap-2 text-[#49636b] hover:text-[#109e4c] text-sm mb-8 transition-colors">
              <ArrowLeft size={14} /> Все новости
            </Link>

            <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#e8e8e8]">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#109e4c]/10 text-[#109e4c] text-xs font-semibold px-3 py-1 rounded-full">{item.cat}</span>
                <span className="text-[#49636b] text-sm">{item.date}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#36494f] leading-tight mb-8">{item.title}</h1>

              <div className="prose max-w-none">
                {paragraphs.map((p, i) => {
                  if (p.startsWith("**") && p.endsWith("**")) {
                    return <p key={i} className="font-bold text-[#36494f] mt-6 mb-2">{p.replace(/\*\*/g, "")}</p>;
                  }
                  if (p.startsWith("- ")) {
                    return <li key={i} className="text-[#49636b] leading-relaxed ml-4 list-disc">{p.slice(2)}</li>;
                  }
                  return <p key={i} className="text-[#49636b] leading-relaxed mb-4">{p}</p>;
                })}
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
