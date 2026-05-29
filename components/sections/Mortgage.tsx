import LinkButton from "@/components/ui/LinkButton";

const programs = [
  { name: "Семейная ипотека", rate: "от 6%", who: "Семьи с детьми" },
  { name: "Льготная ипотека", rate: "от 8%", who: "Все граждане РФ" },
  { name: "Рассрочка от Петрострой", rate: "0%", who: "На период строительства" },
];
const banks = ["Сбер", "ВТБ", "Альфа", "ДОМ.РФ", "РСХБ"];

export default function Mortgage() {
  return (
    <section className="py-24 bg-[#f7f8f7]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-3">Финансирование</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#36494f] leading-tight mb-6">
              Строим в ипотеку<br />от 6% в год
            </h2>
            <p className="text-[#49636b] leading-relaxed mb-8">
              ~15% наших клиентов строят в ипотеку. Помогаем оформить заявку и получить одобрение быстрее.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {programs.map((p) => (
                <div key={p.name} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-[#e8e8e8]">
                  <div>
                    <div className="font-semibold text-[#36494f] text-sm">{p.name}</div>
                    <div className="text-[#49636b] text-xs mt-0.5">{p.who}</div>
                  </div>
                  <div className="font-extrabold text-[#109e4c] text-xl">{p.rate}</div>
                </div>
              ))}
            </div>
            <LinkButton href="/sposoby-oplaty" className="bg-[#109e4c] hover:bg-[#097a3a] text-white font-semibold px-7 py-3.5 rounded-xl text-sm">
              Узнать условия ипотеки →
            </LinkButton>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#e8e8e8]">
            <h3 className="font-bold text-[#36494f] text-lg mb-5">Банки-партнёры</h3>
            <div className="grid grid-cols-5 gap-3 mb-8">
              {banks.map((b) => (
                <div key={b} className="aspect-square bg-[#f7f8f7] rounded-xl flex items-center justify-center border border-[#e8e8e8]">
                  <span className="text-[#36494f] font-bold text-xs text-center leading-tight px-1">{b}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#e8e8e8] pt-6">
              <div className="text-sm text-[#49636b] mb-4">Примерный ежемесячный платёж:</div>
              <div className="bg-[#f7f8f7] rounded-xl p-4 flex flex-col gap-2">
                {[["Стоимость дома","10 000 000 ₽"],["Ставка","6% годовых"],["Срок","20 лет"]].map(([k,v])=>(
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-[#49636b]">{k}</span>
                    <span className="font-medium text-[#36494f]">{v}</span>
                  </div>
                ))}
                <div className="border-t border-[#e8e8e8] pt-2 flex justify-between">
                  <span className="text-[#49636b] text-sm">В месяц</span>
                  <span className="font-extrabold text-[#109e4c] text-xl">≈ 71 600 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
