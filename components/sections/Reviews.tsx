import Link from "next/link";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="py-24 bg-[#36494f]">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#109e4c] text-xs font-semibold uppercase tracking-widest mb-3">Отзывы клиентов</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Что говорят те,<br />кто уже построил
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <div className="text-3xl font-extrabold text-white">4.9</div>
              <div className="flex gap-0.5 justify-end">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-[#109e4c] text-[#109e4c]"/>)}
              </div>
              <div className="text-white/50 text-xs mt-0.5">247 отзывов</div>
            </div>
            <Link href="/otzyvy" className="bg-[#109e4c] hover:bg-[#097a3a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
              Все отзывы →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white/8 border border-white/12 rounded-2xl p-6 hover:bg-white/12 transition-colors">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-[#109e4c] text-[#109e4c]"/>)}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#109e4c]/20 border border-[#109e4c]/40 flex items-center justify-center text-[#109e4c] font-bold text-base">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-white/45 text-xs">{r.city} · {r.area} м² · {r.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
