const fs = require("fs");
const path = require("path");

// Yardımcı fonksiyon: Dosya oluşturma/yazma
function writeFile(filePath, content) {
  const absolutePath = path.join(__dirname, filePath);
  const dir = path.dirname(absolutePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(absolutePath, content.trim(), "utf8");
  console.log(`✅ GÜNCELLENDİ: ${filePath}`);
}

// ------------------------------------------------------------------
// 1. SCROLL-TO-TOP COMPONENT (YENİ DOSYA)
// Sayfa yenilendiğinde en başa sarmayı sağlar.
// ------------------------------------------------------------------

const scrollToTopContent = `
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Tarayıcının otomatik scroll hatırlama özelliğini kapat
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Sayfayı en tepeye kaydır
    window.scrollTo(0, 0);
  }, [pathname]); // Sayfa (rota) değiştiğinde de tetikle

  return null;
}
`;

// ------------------------------------------------------------------
// 2. GLOBALS.CSS (Overscroll Engelleme)
// html ve body etiketlerine overscroll-behavior eklendi.
// ------------------------------------------------------------------

const globalsCssContent = `
@import "tailwindcss";

:root {
  --background: #F8FAFC;
  --foreground: #0F172A;
}

/* YATAY KAYDIRMAYI VE OVER-SCROLL (ZIPLAMA) ENGELLEME */
html, body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  /* Sayfanın en üstünde/altında zıplamayı ve arkadaki beyaz alanı engeller */
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch; /* Mobil safari için yumuşak kaydırma */
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

@keyframes shimmer {
  100% { transform: translateX(100%); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`;

// ------------------------------------------------------------------
// 3. LAYOUT.TSX (ScrollToTop Entegrasyonu)
// ------------------------------------------------------------------

const layoutContent = `
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollToTop from "@/components/ScrollToTop"; // YENİ EKLENDİ
import Script from "next/script";

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
    canonical: '/',
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    "priceRange": "₺₺"
  };

  return (
    <html lang="tr">
      <body className={\`\${montserrat.className} antialiased bg-slate-50 text-slate-900 relative pb-16 lg:pb-0\`}>
        <ScrollToTop /> {/* Sayfa Yüklenince En Üste Alır */}
        <Script
          id="schema-local-business"
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
`;

// ------------------------------------------------------------------
// DOSYALARI YAZDIR
// ------------------------------------------------------------------

console.log("🚀 Scroll ayarları yapılıyor...");

writeFile("components/ScrollToTop.tsx", scrollToTopContent);
writeFile("app/globals.css", globalsCssContent);
writeFile("app/layout.tsx", layoutContent);

console.log("✨ Tüm işlemler başarıyla tamamlandı!");
