import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — Петрострой СПб и Москва",
  description:
    "Офисы Петрострой в Санкт-Петербурге и Москве. Телефоны, адреса, режим работы. Перезвоним за 30 минут.",
  alternates: { canonical: "https://petrostroy.biz/contacts" },
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Контакты"
          title="Свяжитесь с нами — офисы в СПб и Москве"
          subtitle="Перезвоним в течение 30 минут в рабочие часы."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
        />

        <section className="py-16 bg-[#f7f8f7]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  city: "Санкт-Петербург",
                  address: "ул. Афонская, д. 2, лит. А, офис 3-323",
                  phone: "+7 (812) 504-84-00",
                  tel: "+78125048400",
                  email: "spb@petrostroy.biz",
                  hours: "Пн–Пт 9:00–19:00\nСб 10:00–17:00",
                },
                {
                  city: "Москва",
                  address: 'Рязанский проспект, 3Б, БЦ "10", офис 415',
                  phone: "+7 (495) 150-00-63",
                  tel: "+74951500063",
                  email: "msk@petrostroy.biz",
                  hours: "Пн–Пт 9:00–19:00\nСб 10:00–16:00",
                },
              ].map((office) => (
                <div key={office.city} className="bg-white rounded-2xl p-8 border border-[#e8e8e8]">
                  <h2 className="text-2xl font-extrabold text-[#36494f] mb-6">{office.city}</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#109e4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={16} className="text-[#109e4c]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#49636b] mb-0.5">Адрес</div>
                        <div className="text-[#36494f] text-sm font-medium">{office.address}</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#109e4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone size={16} className="text-[#109e4c]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#49636b] mb-0.5">Телефон</div>
                        <a href={`tel:${office.tel}`} className="text-[#36494f] font-semibold text-sm hover:text-[#109e4c] transition-colors">
                          {office.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#109e4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={16} className="text-[#109e4c]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#49636b] mb-0.5">Email</div>
                        <a href={`mailto:${office.email}`} className="text-[#36494f] text-sm hover:text-[#109e4c] transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#109e4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock size={16} className="text-[#109e4c]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#49636b] mb-0.5">Режим работы</div>
                        <div className="text-[#36494f] text-sm font-medium whitespace-pre-line">{office.hours}</div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 rounded-xl overflow-hidden border border-[#e8e8e8] h-44">
                    <iframe
                      title={`Офис Петрострой — ${office.city}`}
                      src={
                        office.city === "Санкт-Петербург"
                          ? "https://yandex.ru/map-widget/v1/?text=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C+%D1%83%D0%BB.+%D0%90%D1%84%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%2C+2&z=16&ll=30.3418%2C60.0187&pt=30.3418%2C60.0187%2Cpm2rdm"
                          : "https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C+3%D0%91&z=16&ll=37.7194%2C55.7216&pt=37.7194%2C55.7216%2Cpm2rdm"
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Messengers */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e8e8] mb-8">
              <h3 className="text-xl font-extrabold text-[#36494f] mb-4">Написать в мессенджер</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/79261234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/petrostroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#229ED9]/10 text-[#229ED9] border border-[#229ED9]/20 hover:bg-[#229ED9]/20 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <MessageCircle size={16} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
