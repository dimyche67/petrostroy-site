"use client";
import { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { formatPhone } from "@/lib/utils";

const steps = [
  { id: "material", q: "Из какого материала хотите дом?", opts: [
    { v: "gazobeton", l: "Газобетон", h: "Тепло и экономично" },
    { v: "kirpich", l: "Кирпич", h: "Надёжность на 100 лет" },
    { v: "keramoblok", l: "Керамоблок", h: "Тепло кирпича, скорость газобетона" },
    { v: "brus", l: "Клееный брус", h: "Экология и эстетика" },
  ]},
  { id: "area", q: "Планируемая площадь дома?", opts: [
    { v: "up100", l: "До 100 м²", h: "Компактный дом" },
    { v: "100-150", l: "100–150 м²", h: "Семья из 3–4 человек" },
    { v: "150-250", l: "150–250 м²", h: "Просторный дом" },
    { v: "250+", l: "Более 250 м²", h: "Большой загородный дом" },
  ]},
  { id: "floors", q: "Количество этажей?", opts: [
    { v: "1", l: "1 этаж", h: "Одноэтажный" },
    { v: "1.5", l: "1,5 этажа", h: "С мансардой" },
    { v: "2", l: "2 этажа", h: "Двухэтажный" },
    { v: "3+", l: "3 этажа", h: "С цоколем или третьим этажом" },
  ]},
  { id: "region", q: "В каком регионе строите?", opts: [
    { v: "spb", l: "Санкт-Петербург", h: "и Ленинградская область" },
    { v: "mo", l: "Москва", h: "и Московская область" },
    { v: "other", l: "Другой регион", h: "Уточним при звонке" },
  ]},
];

const prices: Record<string,Record<string,string>> = {
  gazobeton: { "up100":"4,8–6,5 млн","100-150":"6,5–9 млн","150-250":"9–14 млн","250+":"14–22 млн" },
  kirpich:   { "up100":"7,5–10 млн","100-150":"10–14 млн","150-250":"14–22 млн","250+":"22–38 млн" },
  keramoblok:{ "up100":"6,2–8 млн","100-150":"8–12 млн","150-250":"12–18 млн","250+":"18–30 млн" },
  brus:      { "up100":"5,5–7,5 млн","100-150":"7,5–11 млн","150-250":"11–17 млн","250+":"17–27 млн" },
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string,string>>({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const cur = steps[step];
  const last = step === steps.length - 1;

  const pick = (v: string) => {
    const next = { ...ans, [cur.id]: v };
    setAns(next);
    if (!last) setTimeout(() => setStep(s => s+1), 180);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    setError(null);
  };

  return (
    <section id="quiz" className="py-24 bg-[#f7f8f7]">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Быстрый расчёт</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#36494f] leading-tight">
              Рассчитайте стоимость за 2 минуты
            </h2>
            <p className="text-[#49636b] mt-3 text-sm">Ответьте на 4 вопроса — получите ориентировочную стоимость и перезвоним</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e8e8]">
            {!done ? (
              <>
                {/* Progress */}
                <div className="flex gap-1.5 mb-8">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i < step ? "bg-[#109e4c]" : i === step ? "bg-[#36494f]" : "bg-[#e8e8e8]"}`} />
                  ))}
                  <span className="text-xs text-[#49636b] ml-2 shrink-0">{step+1}/{steps.length}</span>
                </div>

                <h3 className="font-extrabold text-[#36494f] text-xl mb-6">{cur.q}</h3>

                <div className={`grid gap-3 ${cur.opts.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {cur.opts.map(o => (
                    <button key={o.v} onClick={() => pick(o.v)}
                      className={`text-left border-2 rounded-xl p-4 transition-all cursor-pointer ${ans[cur.id]===o.v ? "border-[#109e4c] bg-[#109e4c] text-white" : "border-[#e8e8e8] hover:border-[#109e4c] bg-white hover:bg-[#f7f8f7]"}`}>
                      <div className={`font-semibold text-sm mb-0.5 ${ans[cur.id]===o.v ? "text-white" : "text-[#36494f]"}`}>{o.l}</div>
                      <div className={`text-xs ${ans[cur.id]===o.v ? "text-white/75" : "text-[#49636b]"}`}>{o.h}</div>
                    </button>
                  ))}
                </div>

                {last && ans.region && (
                  <div className="mt-8 border-t border-[#e8e8e8] pt-8">
                    <div className="bg-[#f7f8f7] rounded-xl p-4 mb-6 border border-[#e8e8e8]">
                      <div className="text-xs text-[#49636b] mb-1">Ориентировочная стоимость:</div>
                      <div className="font-extrabold text-[#36494f] text-2xl">
                        {prices[ans.material]?.[ans.area] ?? "по запросу"} ₽
                      </div>
                      <div className="text-xs text-[#49636b] mt-1">Точная цена — после выезда специалиста (бесплатно)</div>
                    </div>
                    <form onSubmit={async e=>{
                      e.preventDefault();
                      setError(null);
                      const digits = phone.replace(/\D/g, "");
                      if (!name.trim()) { setError("Введите ваше имя"); return; }
                      if (digits.length < 10) { setError("Введите корректный номер телефона"); return; }
                      try {
                        const res = await fetch("/api/lead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,phone,source:"Квиз",message:`Материал: ${ans.material}, Площадь: ${ans.area}, Этажей: ${ans.floors}, Регион: ${ans.region}`})});
                        if (!res.ok) throw new Error();
                        setDone(true);
                      } catch {
                        setError("Ошибка отправки. Позвоните нам: +7 (812) 504-84-00");
                      }
                    }} className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <label htmlFor="quiz-name" className="sr-only">Ваше имя</label>
                          <input id="quiz-name" type="text" placeholder="Ваше имя" value={name} onChange={e=>{setName(e.target.value);setError(null);}} required
                            className="w-full border border-[#e8e8e8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#109e4c] transition-colors" />
                        </div>
                        <div className="flex-1">
                          <label htmlFor="quiz-phone" className="sr-only">Телефон</label>
                          <input id="quiz-phone" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={handlePhone} required
                            className="w-full border border-[#e8e8e8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#109e4c] transition-colors" />
                        </div>
                        <button type="submit" className="bg-[#109e4c] hover:bg-[#097a3a] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shrink-0 flex items-center gap-2">
                          Получить расчёт <ChevronRight size={16} />
                        </button>
                      </div>
                      {error && <p className="text-red-500 text-xs">{error}</p>}
                      <p className="text-xs text-[#49636b]">Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="underline hover:text-[#36494f]">политикой конфиденциальности</a></p>
                    </form>
                  </div>
                )}

                {step > 0 && (
                  <button type="button" onClick={()=>setStep(s=>s-1)} className="mt-4 text-sm text-[#49636b] hover:text-[#36494f] transition-colors">← Назад</button>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <CheckCircle2 size={52} className="text-[#109e4c]" />
                <h3 className="font-extrabold text-[#36494f] text-xl">Заявка принята!</h3>
                <p className="text-[#49636b] text-sm">Перезвоним в течение 30 минут и согласуем выезд специалиста.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
