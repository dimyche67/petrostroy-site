"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Maximize2, MapPin, Calendar } from "lucide-react";
import { projects } from "@/lib/data";

const materials = ["Все", "Газобетон", "Кирпич", "Керамоблок", "Клееный брус"];

export default function ProjectsClient() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все"
    ? projects
    : projects.filter(p => p.material === active);

  return (
    <>
      {/* Filter */}
      <div className="py-5 bg-white border-b border-[#e8e8e8] sticky top-16 z-20">
        <div className="container-site flex gap-2 overflow-x-auto pb-1">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === m
                  ? "bg-[#109e4c] text-white"
                  : "bg-[#f7f8f7] text-[#49636b] hover:bg-[#e8e8e8]"
              }`}
            >
              {m}
              {m !== "Все" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter(p => p.material === m).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-[#f7f8f7]">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] hover:shadow-xl transition-all duration-300 block"
              >
                <div className="relative h-52 overflow-hidden bg-[#f7f8f7]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#109e4c]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">Подробнее →</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1">
                    <span className="text-[#36494f] text-xs font-semibold">{p.material}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#36494f] text-sm mb-3 group-hover:text-[#109e4c] transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#49636b] mb-3">
                    <span className="flex items-center gap-1"><Maximize2 size={12} />{p.area} м²</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{p.region}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{p.year}</span>
                  </div>
                  <div className="font-extrabold text-[#36494f] text-sm">{p.price}</div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#49636b]">Проекты не найдены</div>
          )}

          <div className="text-center mt-12">
            <p className="text-[#49636b] text-sm">
              Показано {filtered.length} из {projects.length} объектов
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
