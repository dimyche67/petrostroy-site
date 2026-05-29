"use client";

import { Phone } from "lucide-react";
import { useModal } from "./ModalProvider";

export default function MobileCtaBar() {
  const { openModal } = useModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[#e8e8e8] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="flex">
        <a
          href="tel:+78125048400"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#36494f] font-semibold text-sm border-r border-[#e8e8e8] hover:bg-[#f7f8f7] transition-colors"
        >
          <Phone size={16} className="text-[#109e4c]" />
          Позвонить
        </a>
        <button
          onClick={() => openModal("Оставить заявку", "Мобильный sticky")}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#109e4c] hover:bg-[#097a3a] text-white font-bold text-sm transition-colors"
        >
          Получить расчёт
        </button>
      </div>
    </div>
  );
}
