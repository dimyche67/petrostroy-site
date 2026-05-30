"use client";
import { useState, useMemo } from "react";

function formatNum(n: number) {
  return n.toLocaleString("ru-RU");
}

export default function MortgageCalculator() {
  const [price, setPrice] = useState(10000000);
  const [down, setDown] = useState(30);
  const [rate, setRate] = useState(6);
  const [term, setTerm] = useState(20);

  const result = useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = term * 12;
    if (r === 0) return { monthly: loan / n, loan, total: loan, overpay: 0 };
    const monthly = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return { monthly, loan, total, overpay: total - loan };
  }, [price, down, rate, term]);

  return (
    <div className="bg-[#f7f8f7] rounded-2xl p-8 border border-[#e8e8e8]">
      <h3 className="font-bold text-[#36494f] text-lg mb-6">Калькулятор ипотеки</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Стоимость */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-[#49636b]">Стоимость дома</label>
            <span className="text-sm font-bold text-[#36494f]">{formatNum(price)} ₽</span>
          </div>
          <input type="range" min={2000000} max={30000000} step={500000} value={price}
            onChange={e => setPrice(+e.target.value)}
            className="w-full accent-[#109e4c]" />
          <div className="flex justify-between text-xs text-[#49636b]/60 mt-1">
            <span>2 млн</span><span>30 млн</span>
          </div>
        </div>

        {/* Первоначальный взнос */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-[#49636b]">Первоначальный взнос</label>
            <span className="text-sm font-bold text-[#36494f]">{down}% — {formatNum(Math.round(price * down / 100))} ₽</span>
          </div>
          <input type="range" min={10} max={90} step={5} value={down}
            onChange={e => setDown(+e.target.value)}
            className="w-full accent-[#109e4c]" />
          <div className="flex justify-between text-xs text-[#49636b]/60 mt-1">
            <span>10%</span><span>90%</span>
          </div>
        </div>

        {/* Ставка */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-[#49636b]">Процентная ставка</label>
            <span className="text-sm font-bold text-[#36494f]">{rate}% годовых</span>
          </div>
          <input type="range" min={1} max={25} step={0.5} value={rate}
            onChange={e => setRate(+e.target.value)}
            className="w-full accent-[#109e4c]" />
          <div className="flex justify-between text-xs text-[#49636b]/60 mt-1">
            <span>1%</span><span>25%</span>
          </div>
        </div>

        {/* Срок */}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm text-[#49636b]">Срок кредита</label>
            <span className="text-sm font-bold text-[#36494f]">{term} лет</span>
          </div>
          <input type="range" min={1} max={30} step={1} value={term}
            onChange={e => setTerm(+e.target.value)}
            className="w-full accent-[#109e4c]" />
          <div className="flex justify-between text-xs text-[#49636b]/60 mt-1">
            <span>1 год</span><span>30 лет</span>
          </div>
        </div>
      </div>

      {/* Результат */}
      <div className="bg-white rounded-xl p-6 border border-[#e8e8e8] grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-xs text-[#49636b] mb-1">Ежемесячный платёж</div>
          <div className="text-3xl font-extrabold text-[#109e4c]">{formatNum(Math.round(result.monthly))} ₽</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-[#49636b] mb-1">Сумма кредита</div>
          <div className="text-xl font-bold text-[#36494f]">{formatNum(Math.round(result.loan))} ₽</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-[#49636b] mb-1">Переплата</div>
          <div className="text-xl font-bold text-[#36494f]">{formatNum(Math.round(result.overpay))} ₽</div>
        </div>
      </div>

      <p className="text-xs text-[#49636b]/60 mt-4 text-center">Расчёт ориентировочный. Точные условия уточняйте в банке.</p>
    </div>
  );
}
