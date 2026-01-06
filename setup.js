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
// 1. MIDDLEWARE (WWW İPTALİ - Ana Domaine Yönlendirme)
// ------------------------------------------------------------------
const middlewareContent = `
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  // "www" ile başlayan istekleri "www" olmayan hale çevir
  if (host && host.startsWith('www.muratdemirotokurtarma.com')) {
    return NextResponse.redirect(
      new URL(\`https://muratdemirotokurtarma.com\${request.nextUrl.pathname}\`, request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
`;

// ------------------------------------------------------------------
// 2. LAYOUT (Google Analytics Eklendi + Metadata)
// ------------------------------------------------------------------
const layoutContent = `
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script"; // Google Analytics için eklendi
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
  metadataBase: new URL("https://muratdemirotokurtarma.com"),
  title: {
    default: 'Demir Oto Kurtarma | Çayırova, Gebze & Şekerpınar Çekici',
    template: '%s | Demir Oto Kurtarma'
  },
  description: "Kocaeli Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 acil oto kurtarma, yol yardım ve çekici hizmeti. En yakın çekici 15 dakikada yanınızda.",
  keywords: ["oto çekici", "yol yardım", "gebze çekici", "çayırova oto kurtarma", "şekerpınar çekici", "demir oto kurtarma"],
  authors: [{ name: "Murat Demir" }],
  alternates: {
    canonical: 'https://muratdemirotokurtarma.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://muratdemirotokurtarma.com",
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
    "image": "https://muratdemirotokurtarma.com/logo.png",
    "telephone": "0546 951 49 25",
    "url": "https://muratdemirotokurtarma.com",
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
      <body className={\`\${montserrat.className} antialiased bg-slate-50 text-slate-900 relative pb-16 lg:pb-0\`}>

        {/* Google Analytics Kodları */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W9G2J324L0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W9G2J324L0');
          \`}
        </Script>

        <ScrollToTop />
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
`;

// ------------------------------------------------------------------
// 3. SITEMAP (Non-WWW)
// ------------------------------------------------------------------
const sitemapContent = `
import { MetadataRoute } from 'next';
import { blogPosts, services, locationPages } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muratdemirotokurtarma.com';

  const staticRoutes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/fiyat-hesapla',
    '/blog',
    '/bolgeler',
  ].map((route) => ({
    url: \`\${baseUrl}\${route}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: \`\${baseUrl}/blog/\${post.slug}\`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: \`\${baseUrl}/hizmetler/\${service.id}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationRoutes = locationPages.map((loc) => ({
    url: \`\${baseUrl}/bolge/\${loc.slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...locationRoutes];
}
`;

// ------------------------------------------------------------------
// 4. ROBOTS.TXT (Non-WWW)
// ------------------------------------------------------------------
const robotsContent = `
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://muratdemirotokurtarma.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: \`\${baseUrl}/sitemap.xml\`,
  };
}
`;

// ------------------------------------------------------------------
// 5. LLMS.TXT (Non-WWW)
// ------------------------------------------------------------------
const llmsContent = `
# Murat Demir - Demir Oto Kurtarma

## Hakkında
Demir Oto Kurtarma, Kocaeli'nin Çayırova, Gebze, Şekerpınar, Darıca, Dilovası ve İstanbul Anadolu Yakası bölgelerinde 15 yıldır faaliyet gösteren profesyonel bir oto kurtarma ve yol yardım firmasıdır.

## Hizmetler
- **Oto Çekici:** Binek, ticari ve SUV araçlar için 7/24 çekici hizmeti.
- **Ağır Vasıta Kurtarma:** Kamyon, tır ve iş makineleri için vinçli kurtarma.
- **Yol Yardım:** Lastik değişimi, yakıt ikmali ve basit mekanik arızalar.
- **Akü Takviye:** Yerinde akü takviyesi ve değişimi.
- **Motosiklet Transfer:** Özel aparatlı güvenli motosiklet taşıma.
- **Şehirler Arası Transfer:** Türkiye'nin 81 iline çoklu veya tekli araç transferi.

## Özellikler
- 7/24 Hizmet
- Axa Sigorta güvencesiyle %100 sigortalı taşıma.
- Ortalama 15-20 dakika varış süresi.
- Uygun ve şeffaf fiyat politikası.

## İletişim
- **Telefon:** 0546 951 49 25
- **Konum:** Şekerpınar, Çayırova / Kocaeli
- **Web:** https://muratdemirotokurtarma.com
`;

// ------------------------------------------------------------------
// DOSYALARI YAZDIR
// ------------------------------------------------------------------

console.log("🚀 Google Analytics Kurulumu ve Domain Ayarları Başlatılıyor...");

writeFile("middleware.ts", middlewareContent);
writeFile("app/layout.tsx", layoutContent);
writeFile("app/sitemap.ts", sitemapContent);
writeFile("app/robots.ts", robotsContent);
writeFile("public/llms.txt", llmsContent);

console.log(
  "✨ Google Analytics etiketi (G-W9G2J324L0) başarıyla eklendi ve tüm ayarlar güncellendi!"
);
