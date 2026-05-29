const steps = [
  { num: "01", title: "Оставляете заявку", text: "Звонок или форма на сайте. Перезваниваем за 30 минут." },
  { num: "02", title: "Выезд специалиста", text: "Бесплатно на участок — осматриваем, рекомендуем, отвечаем." },
  { num: "03", title: "Договор с фиксированной ценой", text: "Смета за 3 дня. Цена в договоре не изменится." },
  { num: "04", title: "Строим с фотоотчётами", text: "Еженедельно — фото с объекта. Можно приехать в любой день." },
  { num: "05", title: "Сдача и гарантия", text: "Подписываем акт, вручаем гарантийный паспорт на 10 лет." },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container-site">
        <div className="max-w-xl mb-14">
          <p className="section-label mb-3">Как мы работаем</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#36494f] leading-tight">
            От заявки до ключей — 5 шагов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#e8e8e8] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.num} className="bg-white p-6 flex flex-col gap-3 hover:bg-[#f7f8f7] transition-colors">
              <div className="text-[#109e4c] text-xs font-bold uppercase tracking-widest">{s.num}</div>
              <h3 className="font-bold text-[#36494f] text-sm leading-snug">{s.title}</h3>
              <p className="text-[#49636b] text-xs leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-[#f7f8f7] rounded-2xl p-6">
          <div className="text-[#36494f] font-bold text-lg">Начните прямо сейчас —</div>
          <div className="text-[#49636b] text-sm">первый звонок ни к чему не обязывает</div>
          <a href="#quiz" className="sm:ml-auto bg-[#109e4c] hover:bg-[#097a3a] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </section>
  );
}
