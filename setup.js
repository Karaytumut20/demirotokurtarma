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
  console.log(`✅ DÜZELTİLDİ: ${filePath}`);
}

// ------------------------------------------------------------------
// 1. HEADER (Erişilebilirlik Düzeltmesi - Aria Labels)
// ------------------------------------------------------------------

const headerContent = `
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
  Home,
  Settings,
  Info,
  MessageCircle,
} from "lucide-react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Ana Sayfa", icon: Home },
    { href: "/hizmetler", label: "Hizmetler", icon: Settings },
    { href: "/hakkimizda", label: "Hakkımızda", icon: Info },
    { href: "/iletisim", label: "İletişim", icon: MessageCircle },
  ];

  return (
    <>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <header
        className={\`fixed top-0 left-0 right-0 transition-all duration-500 z-50 \${
          isScrolled
            ? "py-3 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg"
            : "py-5 bg-transparent"
        }\`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 z-50 group" aria-label="Anasayfaya Git">
              <div className="relative h-20 w-20 lg:h-28 lg:w-28 -my-4 lg:-my-6 overflow-visible drop-shadow-2xl transition-all">
                <Image
                  src="/logo copy.png"
                  alt="Murat Demir Oto Kurtarma Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 80px, 112px"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-white font-black text-xl lg:text-3xl leading-none tracking-tighter drop-shadow-md whitespace-nowrap">
                  MURAT DEMİR
                </span>
                <span className="text-blue-400 font-bold text-[10px] lg:text-xs tracking-[0.2em] leading-none mt-1.5 uppercase">
                  DEMİR OTO KURTARMA
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-bold text-sm uppercase tracking-wider text-gray-300 hover:text-blue-400 transition-colors group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                aria-label="Hemen Ara"
                className={\`
                  hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-xl font-black tracking-wider transition-all duration-300 cursor-pointer
                  \${
                    isScrolled
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
                  }
                \`}
              >
                <div
                  className={\`p-1.5 rounded-lg \${
                    isScrolled ? "bg-white/20" : "bg-blue-600"
                  }\`}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>HEMEN ARA</span>
              </button>
            </div>

            <button
              className="md:hidden relative z-50 p-2 -mr-2 text-gray-300 hover:text-white transition-colors bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 active:scale-95"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menüyü Aç"
            >
              <Menu className="w-8 h-8" />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={\`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99990] transition-opacity duration-300 md:hidden \${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }\`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={\`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-[#0f172a] z-[99999] shadow-2xl flex flex-col border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden \${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }\`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#020617]/30">
          <span className="text-white font-black text-lg tracking-wider">
            MENÜ
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Menüyü Kapat"
            className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 transition-all active:scale-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group active:scale-[0.98]"
            >
              <div className="p-2 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <link.icon size={20} />
              </div>
              <span className="text-base font-bold tracking-wide flex-1">
                {link.label}
              </span>
              <ChevronRight
                size={18}
                className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-white/5 bg-[#020617]/50 mt-auto pb-[calc(20px+env(safe-area-inset-bottom))]">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsContactModalOpen(true);
            }}
            aria-label="Hemen Ara Butonu"
            className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-xl font-black shadow-lg shadow-blue-900/20 hover:bg-blue-50 active:scale-95 transition-all mb-3"
          >
            <Phone size={20} className="animate-pulse" />
            HEMEN ARA
          </button>
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-semibold">
            7/24 Murat Demir Oto Kurtarma
          </p>
        </div>
      </div>
    </>
  );
}
`;

// ------------------------------------------------------------------
// 2. FOOTER (Erişilebilirlik ve Kırık Link Kontrolü)
// ------------------------------------------------------------------

const footerContent = `
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, Instagram } from "lucide-react";

export default function Footer() {
  const corporateLinks = [
    { title: "Anasayfa", href: "/" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "Hizmetler", href: "/hizmetler" },
    { title: "İletişim", href: "/iletisim" },
  ];

  const districtLinks = [
    { title: "Çayırova Çekici", href: "/bolge/cayirova-cekici" },
    { title: "Gebze Çekici", href: "/bolge/gebze-cekici" },
    { title: "Şekerpınar Çekici", href: "/bolge/sekerpinar-cekici" },
    { title: "Darıca Yol Yardım", href: "/bolge/darica-yol-yardim" },
    { title: "Dilovası Kurtarıcı", href: "/bolge/dilovasi-kurtarici" },
  ];

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pb-20 lg:pb-0 font-sans">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Anasayfa">
              <div className="relative h-16 w-16 overflow-visible transition-transform group-hover:scale-105">
                <Image
                  src="/logo copy.png"
                  alt="Murat Demir Oto Kurtarma Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">
                  MURAT DEMİR
                </span>
                <span className="text-[10px] text-blue-500 font-bold tracking-widest">
                  DEMİR OTO KURTARMA
                </span>
              </div>
            </Link>
            <p className="text-sm leading-7 text-slate-500">
              Çayırova ve Şekerpınar bölgesinin lider oto kurtarma firması.
              Profesyonel ekip ve uygun fiyat garantisiyle 7/24 hizmetinizdeyiz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/demiirotokurtarma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Sayfamız"
                className="w-10 h-10 rounded bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-white/5 hover:border-blue-500"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span>{" "}
              Kurumsal
            </h3>
            <ul className="space-y-3">
              {corporateLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-600 group-hover:translate-x-1 transition-transform"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span> Hizmet
              Bölgeleri
            </h3>
            <ul className="space-y-3">
              {districtLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-600 group-hover:translate-x-1 transition-transform"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span>{" "}
              İletişim
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm leading-relaxed">
                  Şekerpınar, Çayırova / KOCAELİ
                  <br />
                  <span className="text-xs text-slate-600">7/24 Açık</span>
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:905469514925"
                  className="text-lg font-bold text-white hover:text-blue-500 transition-colors"
                >
                  0546 951 49 25
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">emredemiir25@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>© 2024 Murat Demir - Demir Oto Kurtarma.</p>
          <div className="flex space-x-6">
            <Link
              href="/gizlilik-politikasi"
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="hover:text-white transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

// ------------------------------------------------------------------
// 3. HOME PAGE (Kırık Resim ve Video Optimize)
// ------------------------------------------------------------------

const homePageContent = `
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";
import CostCalculator from "@/components/CostCalculator";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import { Shield, Trophy, Clock, Users } from "lucide-react";
import Script from "next/script";
import { faqs } from "@/lib/data";

export default function Home() {

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-0 overflow-x-hidden">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      <div className="relative z-30 -mt-10 sm:-mt-24 container mx-auto px-3 sm:px-6 mb-16 sm:mb-24">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-12 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-900"></div>
          <div className="text-center mb-5 sm:mb-8 mt-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
              Ne Kadar Öderim?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 sm:mt-2">
              Mesafenizi girin, tahmini ücreti hemen öğrenin.
            </p>
          </div>
          <CostCalculator />
        </div>
      </div>

      <ServiceSection />

      {/* İstatistikler */}
      <div className="bg-[#0f172a] text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-12 text-center relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Clock size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">15 Dk</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Ort. Varış
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Users size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">10K+</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Mutlu Müşteri
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Trophy size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">15 Yıl</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Tecrübe
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Shield size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">%100</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Sigortalı
            </p>
          </div>
        </div>
      </div>

      <ProcessSection />

      <section className="py-12 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span> KURUMSAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
              Sadece Araç Değil, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Güven Taşıyoruz.
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-lg leading-relaxed">
              <p>
                Demir Oto Kurtarma olarak, Çayırova, Gebze ve Şekerpınar
                bölgesinin en köklü kurtarma firmalarından biriyiz. 15 yıllık
                tecrübemizle yanınızdayız.
              </p>
              <p>
                Tüm operasyonlarımızda{" "}
                <strong className="text-slate-900">Axa Sigorta</strong>{" "}
                güvencesi sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                "Resmi Yetki Belgeli",
                "7/24 Canlı Destek",
                "Geniş Araç Filosu",
                "Sabit Fiyat Garantisi",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-bold text-slate-800 text-sm"
                >
                  <CheckCircle2 className="text-blue-600 shrink-0" size={18} />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative h-[300px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* DÜZELTME: Poster görseli çalışır bir link ile değiştirildi */}
              <video
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning={true}
                className="object-cover w-full h-full"
                poster="https://images.unsplash.com/photo-1605218427368-35b894178ea9?q=80&w=1000"
              >
                <source src="/aracvideo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white font-black text-lg mb-1">
                  Bölgenin Lideri
                </p>
                <p className="text-slate-300 text-xs font-medium">
                  +10.000 Mutlu Müşteri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Kocaeli ve İstanbul Anadolu Yakası'nda Güvenilir Oto Kurtarma Hizmetleri</h2>
          <p className="mb-4">
            Demir Oto Kurtarma olarak, <strong>Çayırova oto çekici</strong>, <strong>Gebze yol yardım</strong> ve <strong>Şekerpınar oto kurtarma</strong>
            ihtiyaçlarınızda 15 yıllık tecrübemizle yanınızdayız. Aracınızın arıza yapması veya kaza durumlarında,
            bölgeyi çok iyi bilen uzman ekiplerimizle en kısa sürede konumunuza ulaşıyoruz.
          </p>
          <p className="mb-4">
            Özellikle <strong>Şekerpınar gişeler çekici</strong> taleplerinde, otoyol üzerindeki stratejik konumumuz sayesinde
            dakikalar içinde müdahale edebiliyoruz. <strong>Gebze organize sanayi bölgesi (GOSB) çekici</strong> ve
            <strong>Tuzla sanayi oto kurtarıcı</strong> hizmetlerimizle, ticari ve binek araçlarınızı güvenle servise ulaştırıyoruz.
          </p>
          <p>
            Sadece çekici hizmeti değil; <strong>yerinde akü takviyesi</strong>, <strong>lastik değişimi</strong> ve <strong>yakıt ikmali</strong>
            gibi mobil yol yardım çözümlerimizle de sürücülerin yolda kalma stresini en aza indiriyoruz.
            <strong>Darıca çekici</strong> ve <strong>Dilovası vinçli kurtarıcı</strong> hizmetlerimizle ağır vasıta araçlar için de
            profesyonel çözümler sunmaktayız. Axa Sigorta güvencesiyle taşıdığımız her araç, firmamızın garantisi altındadır.
          </p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
`;

// ------------------------------------------------------------------
// 4. HAKKIMIZDA PAGE (Kırık Resim Düzeltmesi)
// ------------------------------------------------------------------

const hakkimizdaContent = `
"use client";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Target,
  History,
  Award,
  Clock,
} from "lucide-react";

export default function KurumsalPage() {
  return (
    <main className="bg-white text-slate-800">
      <PageBanner
        title="HAKKIMIZDA"
        image="https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1920"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
              <History size={20} /> <span>15 YILLIK TECRÜBE</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Yol Arkadaşınız Olmaktan Gurur Duyuyoruz.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Murat Demir - Demir Oto Kurtarma, 2009 yılında Kocaelinin
                Çayırova ilçesinde, tek bir çekici aracı ile faaliyetlerine
                başlamıştır. Kurulduğu ilk günden itibaren Önce Güven, Sonra
                Ticaret ilkesini benimseyen firmamız, bugün bölgenin en geniş
                araç filosuna sahip lider kurtarma şirketlerinden biri haline
                gelmiştir.
              </p>
              <p>
                Gebze, Şekerpınar, Darıca ve Tuzla gibi sanayinin ve trafiğin
                yoğun olduğu bölgelerde, binlerce başarılı operasyona imza
                attık. Sadece arızalı araçları değil; umutları ve güveni de
                taşıdığımızın bilincindeyiz. Bu nedenle filomuzu sürekli
                yeniliyor, teknolojiyi yakından takip ediyoruz.
              </p>
              <p>
                Ağır vasıta kurtarmadan, motosiklet transferine; tekne
                taşımacılığından çoklu araç transferine kadar geniş bir hizmet
                yelpazesi sunuyoruz. Resmi yetki belgelerimiz (K1, L1) ve uzman
                kadromuzla, sektörün standartlarını belirleyen firma olma
                yolunda emin adımlarla ilerliyoruz.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3"></div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* DÜZELTME: Çalışan bir resim URL'i kullanıldı */}
              <Image
                src="https://images.unsplash.com/photo-1583267746897-2a7e5d577022?q=80&w=1000"
                alt="Hakkımızda - Demir Oto Kurtarma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl border-l-8 border-blue-600 hidden md:block">
              <p className="text-5xl font-black text-[#0f172a] mb-1">10K+</p>
              <p className="text-sm font-bold text-gray-500 uppercase">
                Tamamlanan Operasyon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <Target size={48} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Misyonumuz
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yolda kalan her müşterimize, en zor anlarında en hızlı, güvenli ve
              ekonomik çözümü sunmak. Teknolojik altyapımızı sürekli
              geliştirerek, araç kurtarma ve yol yardım süreçlerini stresli bir
              deneyim olmaktan çıkarıp, profesyonel bir hizmet standardına
              dönüştürmek.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <Award size={48} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Vizyonumuz
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Marmara Bölgesi başta olmak üzere, Türkiye genelinde kurumsal,
              izlenebilir ve standartları yüksek bir yol yardım ağı oluşturmak.
              Sektördeki kayıt dışılığı önleyerek, %100 müşteri memnuniyeti
              odaklı, çevreye duyarlı ve sürdürülebilir bir büyüme modeli
              sergilemek.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
          <h2 className="text-3xl font-black text-[#0f172a]">Değerlerimiz</h2>
          <p className="text-gray-500 mt-4">
            Bizi biz yapan temel prensiplerimiz.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <ShieldCheck
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Güvenilirlik</h3>
            <p className="text-gray-600 text-sm">
              Söz verdiğimiz saatte orada olur, anlaştığımız fiyattan şaşmayız.
              Şeffaflık en büyük sermayemizdir.
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <Clock
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Hız ve Dakiklik</h3>
            <p className="text-gray-600 text-sm">
              Zamanınızın değerli olduğunu biliyoruz. GPS destekli filo yönetim
              sistemimizle en kısa rotayı kullanırız.
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <Users
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Uzman Kadro</h3>
            <p className="text-gray-600 text-sm">
              Araçlarımız sadece şoförler tarafından değil, teknik bilgisi
              yüksek sertifikalı operatörler tarafından kullanılır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

// ------------------------------------------------------------------
// 5. MOBILE STICKY BAR (Yazı Boyutu Düzeltmesi)
// ------------------------------------------------------------------

const mobileStickyBarContent = `
"use client";
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] lg:hidden flex shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-white/5 pb-[env(safe-area-inset-bottom)] bg-[#020617]">
      <a
        href="https://wa.me/905469514925"
        className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-3 active:bg-[#1da851] transition-colors"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-xs font-black uppercase tracking-widest">WhatsApp</span>
      </a>
      <a
        href="tel:905469514925"
        className="flex-[1.5] bg-blue-700 text-white flex flex-col items-center justify-center py-3 relative overflow-hidden active:bg-blue-800 transition-colors"
      >
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        <Phone size={26} className="mb-1 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-widest">ACİL ÇEKİCİ</span>
      </a>
    </div>
  );
}
`;

// ------------------------------------------------------------------
// DOSYALARI YAZDIR
// ------------------------------------------------------------------

console.log("🚀 Hata düzeltmeleri uygulanıyor...");

writeFile("components/Header.tsx", headerContent);
writeFile("components/Footer.tsx", footerContent);
writeFile("app/page.tsx", homePageContent);
writeFile("app/hakkimizda/page.tsx", hakkimizdaContent);
writeFile("components/MobileStickyBar.tsx", mobileStickyBarContent);

console.log("✨ Tüm işlemler başarıyla tamamlandı!");
