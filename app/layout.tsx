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
    default: 'Murat Demir - Demir Oto Kurtarma | Çayırova & Şekerpınar Çekici',
    template: '%s | Murat Demir - Demir Oto Kurtarma'
  },
  description: "Kocaeli Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 acil oto kurtarma, yol yardım ve çekici hizmeti. En yakın çekici 15 dakikada yanınızda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className} antialiased bg-slate-50 text-slate-900 relative pb-16 lg:pb-0`}>
        <Header />
        <FloatingSocials />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}