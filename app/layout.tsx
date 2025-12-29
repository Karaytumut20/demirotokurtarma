import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import MobileStickyBar from "@/components/MobileStickyBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: 'Demir Oto Kurtarma | Çayırova & Şekerpınar Çekici',
    template: '%s | Demir Oto Kurtarma'
  },
  description: "Kocaeli Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 acil oto kurtarma, yol yardım ve çekici hizmeti. En yakın çekici 15 dakikada yanınızda.",
  keywords: ['Çayırova Oto Kurtarma', 'Şekerpınar Çekici', 'Gebze Yol Yardım', 'Kocaeli Çekici', 'En Yakın Çekici'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-white relative pb-16 lg:pb-0`}>
        <Header />
        <FloatingSocials />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}