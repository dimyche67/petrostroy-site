import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import CtaButton from "@/components/ui/CtaButton";
import { projects } from "@/lib/data";
import { Maximize2, MapPin, Calendar, Layers, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${p.area} м², ${p.price} | Петрострой`,
    description: p.description,
  };
}

const specs = (p: typeof projects[0]) => [
  { label: "Площадь", value: `${p.area} м²` },
  { label: "Этажей", value: `${p.floors}` },
  { label: "Материал", value: p.material },
  { label: "Регион", value: p.region },
  { label: "Год постройки", value: `${p.year}` },
  { label: "Стоимость", value: p.price },
];

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(p => p.slug === slug);
  if (!p) notFound();

  const idx = projects.indexOf(p);
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="relative h-[55vh] min-h-72 bg-[#36494f] overflow-hidden">
          <Image
            src={p.image}
            alt={p.title}
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#36494f]/90 via-[#36494f]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-10 pt-24">
            <div className="container-site">
              <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft size={14} /> Все проекты
              </Link>
              <div className="inline-flex items-center gap-2 bg-[#109e4c] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {p.material}
              </div>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                {p.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left: photos + description */}
              <div className="lg:col-span-2 flex flex-col gap-8">

                {/* Gallery */}
                {p.images.length > 1 && (
                  <div>
                    <h2 className="text-xl font-extrabold text-[#36494f] mb-4">Фотографии</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {p.images.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8e8e8]">
                          <Image src={img} alt={`${p.title} — фото ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="bg-white rounded-2xl p-8 border border-[#e8e8e8]">
                  <h2 className="text-xl font-extrabold text-[#36494f] mb-4">Об объекте</h2>
                  <p className="text-[#49636b] leading-relaxed">{p.description}</p>
                </div>

                {/* Floor plan */}
                <div className="bg-white rounded-2xl p-8 border border-[#e8e8e8]">
                  <h2 className="text-xl font-extrabold text-[#36494f] mb-2">Планировка</h2>
                  <p className="text-[#49636b] text-sm mb-6">Типовая планировка для дома {p.area} м², {p.floors} эт. Индивидуальный план формируется под ваш проект.</p>
                  {p.plans && p.plans.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      {p.plans.map((plan, i) => (
                        <div key={i} className="relative w-full rounded-xl overflow-hidden bg-[#f7f8f7] border border-[#e8e8e8]">
                          <Image src={plan} alt={`${p.title} — планировка ${i + 1}`} width={900} height={600} className="w-full h-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-[#f7f8f7] rounded-xl aspect-[4/3] flex flex-col items-center justify-center text-[#49636b] gap-3 border border-dashed border-[#e8e8e8]">
                      <Layers size={40} className="text-[#109e4c]/40" />
                      <p className="text-sm font-medium">Планировка предоставляется по запросу</p>
                      <CtaButton
                        label="Получить планировку"
                        title={`Планировка: ${p.title}`}
                        source={`Детальная страница — ${p.slug}`}
                        variant="green"
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right: specs + CTA */}
              <div className="flex flex-col gap-6">
                {/* Specs */}
                <div className="bg-white rounded-2xl p-6 border border-[#e8e8e8] sticky top-24">
                  <h2 className="text-lg font-extrabold text-[#36494f] mb-5">Характеристики</h2>
                  <dl className="flex flex-col gap-4">
                    {specs(p).map(s => (
                      <div key={s.label} className="flex justify-between items-center border-b border-[#f7f8f7] pb-3 last:border-0 last:pb-0">
                        <dt className="text-sm text-[#49636b]">{s.label}</dt>
                        <dd className="text-sm font-bold text-[#36494f] text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-col gap-3">
                    <CtaButton
                      label="Хочу похожий дом"
                      title={`Похожий дом: ${p.title}`}
                      source={`Проект — ${p.slug}`}
                      variant="green"
                      size="md"
                    />
                    <a
                      href="tel:+78125048400"
                      className="flex items-center justify-center gap-2 border-2 border-[#36494f] text-[#36494f] font-semibold text-sm py-3 rounded-xl hover:bg-[#36494f] hover:text-white transition-all"
                    >
                      Позвонить
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="py-10 bg-white border-t border-[#e8e8e8]">
          <div className="container-site flex justify-between gap-4">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group flex items-center gap-3 text-[#49636b] hover:text-[#109e4c] transition-colors">
                <ArrowLeft size={18} />
                <div>
                  <div className="text-xs opacity-60 mb-0.5">Предыдущий</div>
                  <div className="text-sm font-semibold">{prev.title}</div>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/projects/${next.slug}`} className="group flex items-center gap-3 text-[#49636b] hover:text-[#109e4c] transition-colors text-right">
                <div>
                  <div className="text-xs opacity-60 mb-0.5">Следующий</div>
                  <div className="text-sm font-semibold">{next.title}</div>
                </div>
                <ArrowRight size={18} />
              </Link>
            ) : <div />}
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
