import { FileText, Camera, Shield, Users, CreditCard, MapPin } from "lucide-react";

const usps = [
  { icon: FileText, title: "Фиксированная смета", text: "Цена в договоре не меняется до финала стройки. Никаких допсмет." },
  { icon: Camera, title: "Стройку видно онлайн", text: "Еженедельный фотоотчёт и личный кабинет с историей работ." },
  { icon: Shield, title: "Гарантия 10 лет", text: "На несущие конструкции. Прописана в гарантийном паспорте." },
  { icon: Users, title: "Собственные бригады", text: "40 постоянных бригад, не разовых. Каждый мастер работает годами." },
  { icon: CreditCard, title: "Ипотека от 6%", text: "Семейная, льготная, рассрочка. Помогаем оформить в банке." },
  { icon: MapPin, title: "Бесплатный выезд", text: "Специалист осмотрит участок и даст рекомендации. Без оплаты." },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#f7f8f7]">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="section-label mb-3">Наши принципы</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#36494f] leading-tight">
              Почему выбирают<br />Петрострой
            </h2>
          </div>
          <a href="/about/o-nas" className="inline-flex items-center gap-2 text-[#109e4c] font-semibold text-sm hover:gap-3 transition-all shrink-0">
            Подробнее о компании →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#e8e8e8]">
              <div className="w-11 h-11 rounded-xl bg-[#109e4c]/10 flex items-center justify-center mb-4 group-hover:bg-[#109e4c] transition-colors">
                <Icon size={20} className="text-[#109e4c] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#36494f] text-base mb-2">{title}</h3>
              <p className="text-[#49636b] text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
