import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/ui/ModalProvider";
import MobileCtaBar from "@/components/ui/MobileCtaBar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Строительство домов под ключ в СПб и МО | Петрострой",
    template: "%s | Петрострой",
  },
  description:
    "Строим дома из газобетона, кирпича и бруса под ключ с 2003 года. 400+ объектов. Фиксированная цена в договоре. Гарантия 10 лет.",
  metadataBase: new URL("https://petrostroy.biz"),
  openGraph: {
    siteName: "Петрострой",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Петрострой — строительство домов под ключ в СПб и МО",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@petrostroy",
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://petrostroy.biz/#organization",
  name: "Петрострой",
  url: "https://petrostroy.biz",
  logo: "https://petrostroy.biz/logo-color.png",
  image: "https://petrostroy.biz/og-image.jpg",
  description: "Строительство частных домов под ключ из газобетона, кирпича, керамоблоков и клееного бруса в СПб и МО с 2003 года.",
  foundingDate: "2003",
  telephone: ["+7-812-504-84-00", "+7-495-150-00-63"],
  email: "info@petrostroy.biz",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "ул. Афонская, д. 2, лит. А, офис 3-323",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Ленинградская область",
      addressCountry: "RU",
    },
    {
      "@type": "PostalAddress",
      streetAddress: 'Рязанский проспект, 3Б, БЦ "10", офис 415',
      addressLocality: "Москва",
      addressCountry: "RU",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 60.0187,
    longitude: 30.3418,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
  priceRange: "₽₽₽",
  areaServed: ["Санкт-Петербург", "Ленинградская область", "Москва", "Московская область"],
  sameAs: ["https://t.me/petrostroy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col pb-[56px] lg:pb-0">
        <ModalProvider>
          {children}
          <MobileCtaBar />
        </ModalProvider>
      </body>
    </html>
  );
}
