"use client";
import CtaButton from "@/components/ui/CtaButton";
import { ArrowRight } from "lucide-react";

const cards = [
  { num: "01", title: "Ни одного суда за 20 лет", text: "Не потому что везёт — потому что не даём повода. Смотрите реквизиты в ЕГРЮЛ." },
  { num: "02", title: "Смета в договоре = смета на финише", text: "Мы не занижаем цену, чтобы зацепить, а потом добирать. Никаких допсмет." },
  { num: "03", title: "Покажем живой дом до договора", text: "Организуем показ реального объекта с хозяевами — до того, как вы примете решение." },
  { num: "04", title: "СПб и Москва — одна команда", text: "Не два разных подрядчика. Одни стандарты, один контроль качества, одна ответственность." },
];

export default function TrustBlock() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="section-label mb-3">Почему нам доверяют</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#36494f] leading-tight">
              Надёжность. Опыт.<br />Честность.
            </h2>
          </div>
          <p className="text-[#49636b] text-base lg:max-w-sm leading-relaxed">
            Мы говорим то, что другие боятся сказать — и именно поэтому клиенты возвращаются и рекомендуют нас.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map((c, i) => (
            <div key={i} className="group relative bg-[#f7f8f7] hover:bg-[#36494f] rounded-2xl p-6 transition-all duration-300 cursor-default overflow-hidden">
              <div className="text-5xl font-extrabold text-[#e8e8e8] group-hover:text-white/10 transition-colors leading-none mb-1 select-none">{c.num}</div>
              <div className="mt-4">
                <h3 className="font-bold text-[#36494f] group-hover:text-white text-base leading-snug mb-2 transition-colors">{c.title}</h3>
                <p className="text-[#49636b] group-hover:text-white/65 text-sm leading-relaxed transition-colors">{c.text}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#109e4c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CtaButton
            label="Получить бесплатную консультацию"
            title="Бесплатная консультация"
            source="Блок доверия"
            variant="green"
            size="md"
            icon={<ArrowRight size={16} />}
          />
        </div>
      </div>
    </section>
  );
}
