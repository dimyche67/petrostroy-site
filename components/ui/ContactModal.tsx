"use client";

import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { formatPhone } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  source?: string; // for tracking which page/button opened it
}

export default function ContactModal({ open, onClose, title = "Оставить заявку", source }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; agreed?: string }>({});

  const close = useCallback(() => {
    onClose();
    setTimeout(() => { setSent(false); setErrors({}); }, 300);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Введите имя";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) e.phone = "Введите корректный телефон";
    if (!agreed) e.agreed = "Необходимо согласие";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source }),
      });
    } catch {}
    setSent(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden animate-[fadeSlideUp_0.2s_ease]">
        {/* Header */}
        <div className="bg-[#36494f] px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-[#109e4c] text-xs font-bold uppercase tracking-widest mb-1">
              {source || "Петрострой"}
            </div>
            <h2 className="text-white font-extrabold text-lg leading-tight">{title}</h2>
          </div>
          <button
            onClick={close}
            className="text-white/60 hover:text-white transition-colors p-1 -mr-1"
            aria-label="Закрыть"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {!sent ? (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <p className="text-[#49636b] text-sm">
                Перезвоним в течение 30 минут. Выезд специалиста — бесплатно.
              </p>

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-[#36494f] placeholder:text-[#49636b]/50 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-400 bg-red-50"
                      : "border-[#e8e8e8] focus:border-[#109e4c]"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={e => { setPhone(formatPhone(e.target.value)); setErrors(prev => ({ ...prev, phone: undefined })); }}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-[#36494f] placeholder:text-[#49636b]/50 focus:outline-none transition-colors ${
                    errors.phone
                      ? "border-red-400 bg-red-50"
                      : "border-[#e8e8e8] focus:border-[#109e4c]"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Privacy */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                      agreed
                        ? "bg-[#109e4c] border-[#109e4c]"
                        : errors.agreed
                        ? "border-red-400"
                        : "border-[#e8e8e8] group-hover:border-[#109e4c]"
                    }`}
                    onClick={() => { setAgreed(!agreed); setErrors(prev => ({ ...prev, agreed: undefined })); }}
                  >
                    {agreed && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-[#49636b] text-xs leading-relaxed">
                    Нажимая кнопку, я соглашаюсь с{" "}
                    <a href="/privacy" target="_blank" className="text-[#109e4c] underline hover:no-underline">
                      политикой конфиденциальности
                    </a>{" "}
                    и даю согласие на обработку персональных данных
                  </span>
                </label>
                {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
              </div>

              <button
                type="submit"
                className="bg-[#109e4c] hover:bg-[#097a3a] text-white font-bold py-4 rounded-xl text-sm transition-colors mt-1"
              >
                Отправить заявку
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-[#109e4c]/10 flex items-center justify-center">
                <CheckCircle2 size={36} className="text-[#109e4c]" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#36494f] text-lg mb-1">Заявка принята!</h3>
                <p className="text-[#49636b] text-sm">
                  {name ? `${name}, перезвоним` : "Перезвоним"} в течение 30 минут в рабочие часы.
                </p>
              </div>
              <button
                onClick={close}
                className="mt-2 text-sm text-[#49636b] hover:text-[#36494f] underline transition-colors"
              >
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
