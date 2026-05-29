import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Наши проекты — 400 построенных домов | Петрострой",
  description:
    "Портфолио Петрострой: дома из газобетона, кирпича, керамоблоков и бруса в СПб и МО. Реальные объекты с ценами и фото.",
  alternates: { canonical: "https://petrostroy.biz/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="Портфолио"
          title="Наши объекты — 400 построенных домов"
          subtitle="Каждый дом — реальный объект с живыми хозяевами. Можем организовать показ до подписания."
          breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Проекты" }]}
        />
        <ProjectsClient />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
