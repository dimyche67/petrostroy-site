"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const stats = [
  { value: "400+", label: "домов построено" },
  { value: "20 лет", label: "опыта" },
  { value: "0", label: "судебных исков" },
  { value: "10 лет", label: "гарантия" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* BG */}
      <Image
        src="/images/heroes/hero-main.jpg"
        alt="Строительство домов под ключ в СПб и МО"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#36494f]/95 via-[#36494f]/80 to-[#36494f]/30" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#36494f]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-12">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-white/25 bg-white/8 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#109e4c]" />
              <span className="text-white/85 text-sm font-medium">Строим с 2003 года · СПб и МО</span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Строим дома<br />
              <span className="text-[#109e4c]">под ключ</span><br />
              в СПб и МО
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              400 домов — ни один не брошен. Фиксированная цена в договоре. Никаких допсмет и сюрпризов.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <CtaButton
                label="Рассчитать мой дом"
                title="Рассчитать стоимость дома"
                source="Главная — Hero"
                variant="green"
                size="lg"
                icon={<ArrowRight size={18} />}
              />
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#36494f] font-semibold text-base px-8 py-4 rounded-xl transition-all"
              >
                Смотреть проекты
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Смета = финишная цена", "Показ живого объекта", "Еженедельный фотоотчёт"].map(t => (
                <div key={t} className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#109e4c]" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.value} className={`py-6 px-4 text-center sm:text-left ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}>
                <div className="text-white text-3xl lg:text-4xl font-extrabold mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
