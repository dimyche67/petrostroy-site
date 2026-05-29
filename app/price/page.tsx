import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { priceMatrix } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Стоимость строительства дома в СПб 2026 | Петрострой",
  description:
    "Прозрачные цены на строительство домов в СПб и МО. Таблица от холодного контура до под ключ. Без скрытых платежей. Рассчитайте ваш дом онлайн →",
  alternates: { canonical: "https://petrostroy.biz/price" },
};

const included = [
  "Вынос осей и геодезические работы",
  "Земляные работы и устройство фундамента",
  "Кладка стен из выбранного материала",
  "Монтаж перекрытий и стропильной системы",
  "Устройство кровли с гидроизоляцией",
  "Установка окон ПВХ и входной двери",
];

const notIncluded = [
  "Подключение к центральным коммуникациям (платно у поставщиков)",
  "Проектирование — если не заказываете у нас",
  "Ландшафтный дизайн и благоустройство участка",
  "Мебель и бытовая техника",
];

export default function PricePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Цены"
          title="Стоимость строительства — прозрачно и без сюрпризов"
          subtitle="Мы не занижаем цену на входе, чтобы потом добирать допсметами. Ниже — реальные цены на все материалы и комплектации."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Стоимость" }]}
        />

        {/* Price matrix */}
        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="mb-10">
              <p className="section-label mb-3">Матрица цен</p>
              <h2 className="text-3xl font-extrabold text-[#36494f]">Цены по материалу и комплектации</h2>
              <p className="text-[#49636b] mt-2 text-sm">Цена указана за 1 м² общей площади. Итоговая стоимость = площадь × цена/м².</p>
            </div>

            <div className="flex flex-col gap-8">
              {priceMatrix.map((mat) => (
                <div key={mat.material} className="bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
                  <div className="bg-[#36494f] px-6 py-4">
                    <h3 className="text-xl font-extrabold text-white">{mat.material}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e8e8]">
                    {mat.packages.map((pkg) => (
                      <div key={pkg.name} className="p-5">
                        <div className="font-semibold text-[#36494f] mb-1 text-sm">{pkg.name}</div>
                        <div className="text-xl font-extrabold text-[#109e4c] mb-3">{pkg.price}</div>
                        <ul className="space-y-1.5">
                          {pkg.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-[#49636b]">
                              <CheckCircle2 size={12} className="text-[#109e4c] mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included / not */}
        <section className="py-16 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-extrabold text-[#36494f] mb-6">
                  Что входит в базовую стоимость
                </h2>
                <ul className="flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#36494f]">
                      <CheckCircle2 size={16} className="text-[#109e4c] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#36494f] mb-6">
                  Что не входит (и почему)
                </h2>
                <ul className="flex flex-col gap-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#49636b]">
                      <span className="w-4 h-4 rounded-full border border-[#e8e8e8] mt-0.5 shrink-0 flex items-center justify-center text-[#49636b] text-xs font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-[#f7f8f7] rounded-xl p-4 text-sm text-[#49636b] border border-[#e8e8e8]">
                  <strong className="text-[#36494f]">Важно:</strong> мы перечисляем, что <em>не</em> входит — именно для того, чтобы не было неожиданностей. Вы знаете, за что платите.
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
