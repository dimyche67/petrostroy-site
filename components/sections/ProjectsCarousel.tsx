"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2, MapPin, Calendar } from "lucide-react";
import { projects } from "@/lib/data";
import LinkButton from "@/components/ui/LinkButton";

export default function ProjectsCarousel() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const carouselProjects = projects.slice(0, 20);

  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">Наши объекты</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#36494f] leading-tight">
              Дома, в которых<br />начинается ваша история
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#109e4c] hover:gap-3 transition-all shrink-0">
            Смотреть все проекты <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {carouselProjects.slice(start, start + visible).map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group block rounded-2xl overflow-hidden bg-[#f7f8f7] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-[#e8e8e8]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#109e4c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm flex items-center gap-2">
                    Подробнее о проекте <ArrowRight size={16} />
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-[#36494f] text-xs font-semibold">{p.material}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-[#36494f] text-base mb-3 group-hover:text-[#109e4c] transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-[#49636b] mb-3">
                  <span className="flex items-center gap-1"><Maximize2 size={13} />{p.area} м²</span>
                  <span className="flex items-center gap-1"><MapPin size={13} />{p.region}</span>
                  <span className="flex items-center gap-1"><Calendar size={13} />{p.year}</span>
                </div>
                <div className="font-bold text-[#36494f]">{p.price}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setStart(Math.max(0, start - visible))}
            disabled={start === 0}
            className="w-11 h-11 rounded-full border-2 border-[#36494f] text-[#36494f] hover:bg-[#36494f] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => setStart(Math.min(carouselProjects.length - visible, start + visible))}
            disabled={start + visible >= carouselProjects.length}
            className="w-11 h-11 rounded-full border-2 border-[#36494f] text-[#36494f] hover:bg-[#36494f] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            →
          </button>
          <LinkButton href="/projects" variant="outline" className="ml-4 border-[#36494f] text-[#36494f] hover:bg-[#36494f] hover:text-white px-6 py-2.5 rounded-xl text-sm font-semibold border-2">
            Все {projects.length} объектов
          </LinkButton>
          <p className="text-xs text-[#49636b] ml-2">{start + 1}–{Math.min(start + visible, carouselProjects.length)} из {carouselProjects.length}</p>
        </div>
      </div>
    </section>
  );
}
