import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.demirotokurtarma.com"),
  title: {
    default: 'Demir Oto Kurtarma | Çayırova, Gebze & Şekerpınar Çekici',
    template: '%s | Demir Oto Kurtarma'
  },
  description: "Kocaeli Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 acil oto kurtarma, yol yardım ve çekici hizmeti. En yakın çekici 15 dakikada yanınızda.",
  keywords: ["oto çekici", "yol yardım", "gebze çekici", "çayırova oto kurtarma", "şekerpınar çekici", "demir oto kurtarma"],
  authors: [{ name: "Murat Demir" }],
  alternates: {
    canonical: 'https://www.demirotokurtarma.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.demirotokurtarma.com",
    siteName: "Demir Oto Kurtarma",
    // Content Freshness Sinyali
    modifiedTime: new Date().toISOString(),
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema (Doğrudan HTML içine gömülür)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoTowingService",
    "name": "Demir Oto Kurtarma",
    "image": "https://www.demirotokurtarma.com/logo.png",
    "telephone": "0546 951 49 25",
    "url": "https://www.demirotokurtarma.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mah. Mustafa Kemal Cad. No:16",
      "addressLocality": "Çayırova",
      "addressRegion": "Kocaeli",
      "postalCode": "41420",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8333,
      "longitude": 29.3833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₺₺",
    "sameAs": [
      "https://www.instagram.com/demiirotokurtarma"
    ]
  };

  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-slate-50 text-slate-900 relative pb-16 lg:pb-0`}>
        <ScrollToTop />
        {/* Schema Markup - Standart Script Etiketiyle */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <FloatingSocials />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}