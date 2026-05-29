import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBlock from "@/components/sections/TrustBlock";
import Quiz from "@/components/sections/Quiz";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import Process from "@/components/sections/Process";
import Mortgage from "@/components/sections/Mortgage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Строительство домов под ключ в СПб и МО | Петрострой",
  description:
    "Строим дома из газобетона, кирпича и бруса под ключ с 2003 года. 400+ объектов. Фиксированная цена в договоре. Гарантия 10 лет. Рассчитайте стоимость →",
  alternates: { canonical: "https://petrostroy.biz/" },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <Quiz />
        <ProjectsCarousel />
        <WhyUs />
        <Reviews />
        <Process />
        <Mortgage />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
