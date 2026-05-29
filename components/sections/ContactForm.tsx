"use client";
import { useState } from "react";
import { CheckCircle2, Phone, MapPin, Clock } from "lucide-react";
import { formatPhone } from "@/lib/utils";

async function sendLead(data: { name: string; phone: string; message: string; source: string }) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setFormError("Введите корректный номер телефона");
      return;
    }
    setLoading(true);
    const ok = await sendLead({ ...form, source: "Контактная форма" });
    setLoading(false);
    if (ok) {
      setSent(true);
    } else {
      setFormError("Не удалось отправить заявку. Позвоните нам: +7 (812) 504-84-00");
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Свяжитесь с нами</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#36494f] leading-tight mb-6">
              Построим дом вашей мечты — качественно и в срок
            </h2>
            <p className="text-[#49636b] leading-relaxed mb-10">
              Оставьте заявку, и мы подготовим индивидуальное решение для вас. Перезвоним за 30 минут.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "Санкт-Петербург", value: "+7 (812) 504-84-00", href: "tel:+78125048400" },
                { icon: Phone, label: "Москва", value: "+7 (495) 150-00-63", href: "tel:+74951500063" },
                { icon: MapPin, label: "СПб офис", value: "ул. Афонская, д. 2, лит. А, офис 3-323" },
                { icon: Clock, label: "Режим работы", value: "Пн–Пт 9:00–19:00, Сб 10:00–17:00" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#109e4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#109e4c]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#49636b] mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="font-semibold text-[#36494f] hover:text-[#109e4c] transition-colors text-sm">{value}</a>
                    ) : (
                      <div className="font-semibold text-[#36494f] text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#f7f8f7] rounded-2xl p-8">
            {!sent ? (
              <>
                <h3 className="font-extrabold text-[#36494f] text-xl mb-6">Записаться на консультацию</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="cf-name" className="block text-xs font-medium text-[#49636b] mb-1">Ваше имя *</label>
                    <input
                      id="cf-name"
                      type="text" required placeholder="Иван Иванов"
                      value={form.name} onChange={e => { setForm({...form, name: e.target.value}); setFormError(null); }}
                      className="w-full bg-white border border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#36494f] placeholder:text-[#49636b]/60 focus:outline-none focus:border-[#109e4c] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="block text-xs font-medium text-[#49636b] mb-1">Телефон *</label>
                    <input
                      id="cf-phone"
                      type="tel" required placeholder="+7 (___) ___-__-__"
                      value={form.phone} onChange={e => { setForm({...form, phone: formatPhone(e.target.value)}); setFormError(null); }}
                      className="w-full bg-white border border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#36494f] placeholder:text-[#49636b]/60 focus:outline-none focus:border-[#109e4c] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-message" className="block text-xs font-medium text-[#49636b] mb-1">О вашем проекте</label>
                    <textarea
                      id="cf-message"
                      rows={3} placeholder="Площадь, материал, регион..."
                      value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-white border border-[#e8e8e8] rounded-xl px-4 py-3 text-sm text-[#36494f] placeholder:text-[#49636b]/60 focus:outline-none focus:border-[#109e4c] transition-colors resize-none"
                    />
                  </div>
                  {formError && (
                    <p className="text-red-500 text-xs">{formError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#109e4c] hover:bg-[#097a3a] disabled:opacity-60 text-white font-bold px-6 py-4 rounded-xl transition-colors text-sm mt-2"
                  >
                    {loading ? "Отправляем..." : "Получить консультацию бесплатно"}
                  </button>
                  <p className="text-xs text-[#49636b] text-center">
                    Нажимая, вы соглашаетесь с <a href="/privacy" className="underline hover:text-[#36494f]">политикой конфиденциальности</a>
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center min-h-64 gap-4">
                <CheckCircle2 size={52} className="text-[#109e4c]" />
                <h3 className="font-extrabold text-[#36494f] text-xl">Заявка отправлена!</h3>
                <p className="text-[#49636b] text-sm">Перезвоним в течение 30 минут. Спасибо, {form.name || "что обратились"}!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
