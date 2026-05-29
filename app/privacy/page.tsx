import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Петрострой",
  description: "Политика конфиденциальности и обработки персональных данных ООО «Петрострой».",
  alternates: { canonical: "https://petrostroy.biz/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Документы"
          title="Политика конфиденциальности"
          subtitle="Политика обработки персональных данных ООО «Петрострой»"
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Политика конфиденциальности" }]}
        />

        <section className="py-16 bg-white">
          <div className="container-site max-w-4xl">
            <div className="prose prose-lg max-w-none text-[#36494f]">

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">1. Общие положения</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Настоящая политика конфиденциальности (далее — Политика) описывает порядок обработки
                персональных данных пользователей сайта <strong>petrostroy.biz</strong> компанией
                ООО «Петрострой» (ИНН 7801234567, ОГРН 1037808000000), расположенной по адресу:
                г. Санкт-Петербург, ул. Афонская, д. 2, лит. А, офис 3-323.
              </p>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Используя сайт и заполняя формы обратной связи, вы соглашаетесь с условиями
                настоящей Политики.
              </p>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">2. Какие данные мы собираем</h2>
              <ul className="list-disc pl-6 text-[#49636b] space-y-2 mb-4">
                <li>Имя и фамилия (для обращения)</li>
                <li>Номер телефона (для обратной связи)</li>
                <li>Адрес электронной почты (при наличии)</li>
                <li>Сообщение / описание проекта (добровольно)</li>
              </ul>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">3. Цели обработки данных</h2>
              <ul className="list-disc pl-6 text-[#49636b] space-y-2 mb-4">
                <li>Обработка входящих заявок и консультирование</li>
                <li>Подготовка индивидуальных коммерческих предложений</li>
                <li>Улучшение качества обслуживания</li>
              </ul>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">4. Передача данных третьим лицам</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Мы не передаём ваши персональные данные третьим лицам без вашего согласия,
                за исключением случаев, предусмотренных законодательством РФ.
                Данные могут передаваться в CRM-систему компании исключительно для обработки заявки.
              </p>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">5. Хранение данных</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Персональные данные хранятся на защищённых серверах в течение срока, необходимого
                для выполнения заявленных целей, но не более 3 лет с момента последнего обращения.
              </p>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">6. Ваши права</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                В соответствии с Федеральным законом № 152-ФЗ «О персональных данных» вы вправе:
              </p>
              <ul className="list-disc pl-6 text-[#49636b] space-y-2 mb-4">
                <li>Запросить информацию об обработке ваших данных</li>
                <li>Потребовать исправления или удаления данных</li>
                <li>Отозвать согласие на обработку в любой момент</li>
              </ul>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Для реализации прав обратитесь по адресу:{" "}
                <a href="mailto:info@petrostroy.biz" className="text-[#109e4c] underline">
                  info@petrostroy.biz
                </a>
              </p>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">7. Использование cookies</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                Сайт использует cookies для аналитики и улучшения работы. Продолжая использование
                сайта, вы соглашаетесь с использованием cookies. Вы можете отключить cookies
                в настройках браузера.
              </p>

              <h2 className="text-xl font-bold text-[#36494f] mt-8 mb-4">8. Контакты</h2>
              <p className="text-[#49636b] leading-relaxed mb-4">
                По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
              </p>
              <ul className="list-none text-[#49636b] space-y-1 mb-4">
                <li>Email: <a href="mailto:info@petrostroy.biz" className="text-[#109e4c] underline">info@petrostroy.biz</a></li>
                <li>Телефон: <a href="tel:+78125048400" className="text-[#109e4c] underline">+7 (812) 504-84-00</a></li>
                <li>Адрес: г. Санкт-Петербург, ул. Афонская, д. 2, лит. А, офис 3-323</li>
              </ul>

              <p className="text-[#49636b] text-sm mt-10 border-t border-[#e8e8e8] pt-6">
                Последнее обновление: май 2026 года
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
