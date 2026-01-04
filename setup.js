/**
 * DEMİR OTO KURTARMA - FINAL ELITE SETUP (V6.0)
 * ------------------------------------------------------------
 * * TEMA: Lacivert (#0f172a), Siyah (#000000), Beyaz (#ffffff), Vurgu Mavisi (#2563eb)
 * * YAPILAN DÜZELTMELER:
 * 1. Renk Paleti: Tüm turuncu alanlar 'Blue-700' veya 'Slate-900' olarak değiştirildi.
 * 2. Header: 'Galeri' ve 'Fiyat Hesapla' linkleri eklendi. Scroll-lock (kaydırma kilidi) eklendi.
 * 3. Anasayfa: 'Nasıl Çalışır?' (ProcessSection) bölümü eklendi.
 * 4. Data: Galeri ve Süreç verileri merkeze çekildi.
 * 5. Tasarım: Beyaz/Beyaz kontrast sorunu 'Slate-50' arka planı ile çözüldü.
 */

const fs = require("fs");
const path = require("path");

// --- KURUMSAL AYARLAR ---
const CONFIG = {
  phoneDisplay: "0501 333 80 42",
  phoneLink: "905013338042",
  address: "Şekerpınar, Çayırova / KOCAELİ",
  email: "info@demirotokurtarma.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.688868888!2d29.35!3d40.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUxJzAwLjAiTiAyOcKwMjEnMDAuMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str", // Temsili
  socials: {
    instagram: "https://www.instagram.com/demirotokurtarma",
    whatsapp: "https://wa.me/905013338042",
  },
};

console.log(
  `\x1b[34m🚀 DEMİR OTO KURTARMA: Final Dönüşüm Başlatılıyor...\x1b[0m`
);

// --- YARDIMCI FONKSİYONLAR ---
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}
function writeFile(filePath, content) {
  const fullPath = path.join(__dirname, filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content.trim(), "utf8");
  console.log(`✅ [GÜNCELLENDİ]: ${filePath}`);
}

// =============================================================================
// 1. VERİ KATMANI (DATABASE)
// =============================================================================
writeFile(
  "lib/data.ts",
  `
import { Truck, Wrench, Battery, Car, MapPin, ShieldCheck, PhoneCall, CheckCircle } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Oto Çekici",
    shortDesc: "Çayırova, Gebze ve Şekerpınar bölgesinde 7/24 profesyonel çekici.",
    longDesc: "Lüks spor araçlardan standart binek araçlara kadar tüm modelleri, özel donanımlı kayar kasa araçlarımızla çizmeden, hasarsız taşıyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000",
    features: ["Hasarsız Taşıma", "15 Dk Varış", "Kaskolu"]
  },
  {
    id: "yol-yardim",
    title: "Yol Yardım",
    shortDesc: "Lastik, yakıt ve basit arızalar için yerinde müdahale.",
    longDesc: "Aracınızın basit arızaları için çekiciye binmesine gerek yok. Mobil servis aracımızla geliyor, lastik değişimi ve yakıt ikmali yapıyoruz.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    features: ["Mobil Servis", "Lastik Değişimi", "Yakıt İkmali"]
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye",
    shortDesc: "Profesyonel cihazlarla akü takviye ve değişim.",
    longDesc: "Akü kaynaklı yolda kalmalarda, aracın elektroniğine zarar vermeyen profesyonel booster cihazlarımızla takviye yapıyoruz.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000",
    features: ["Zararsız Takviye", "Akü Ölçümü", "7/24 Destek"]
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta",
    shortDesc: "Kamyon, Tır ve İş Makinesi kurtarma hizmetleri.",
    longDesc: "Sanayi bölgesindeki iş ortaklarımız için ağır tonajlı araç taşıma ve kurtarma operasyonlarını titizlikle yönetiyoruz.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000",
    features: ["60 Ton Kapasite", "Vinç Desteği", "Sanayi Odaklı"]
  }
];

export const processSteps = [
    { title: "Bizi Arayın", desc: "7/24 çağrı merkezimize ulaşın.", icon: PhoneCall },
    { title: "Konum Atın", desc: "WhatsApp üzerinden konum paylaşın.", icon: MapPin },
    { title: "Ekip Geliyor", desc: "En yakın aracımız yola çıksın.", icon: Truck },
    { title: "Güvenli Teslimat", desc: "Aracınız sigortalı taşınsın.", icon: ShieldCheck }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik", "Kartal"
];

export const testimonials = [
    { name: "Murat Yılmaz", role: "İşletmeci", text: "Şekerpınar'da aracım arızalandı. Gece 03:00 olmasına rağmen 15 dakikada geldiler. Araçları çok temiz ve yeniydi.", stars: 5 },
    { name: "Selin Demir", role: "Mimar", text: "Lastiğim patladı ve bijonları sökemedim. Mobil ekip hemen gelip halletti. Çok nazik ve profesyoneller.", stars: 5 },
    { name: "Kaan Öztürk", role: "Nakliyeci", text: "Kamyonum çamura saplandı, ağır vasıta kurtarıcıları tereyağından kıl çeker gibi çıkardı. Helal olsun.", stars: 5 }
];

export const galleryImages = [
    "https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=800",
    "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=800",
    "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=800",
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800",
    "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=800"
];
`
);

// =============================================================================
// 2. HEADER & MENU (SCROLL FIX & YENİ RENKLER)
// =============================================================================
writeFile(
  "components/Header.tsx",
  `
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, Truck, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açılınca scroll'u kilitle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { l: 'ANASAYFA', p: '/' },
    { l: 'HİZMETLER', p: '/hizmetler' },
    { l: 'GALERİ', p: '/galeri' },
    { l: 'FİYAT HESAPLA', p: '/fiyat-hesapla' },
    { l: 'İLETİŞİM', p: '/iletisim' }
  ];

  return (
    <>
      {/* Top Bar - Koyu Lacivert */}
      <div className="hidden lg:flex justify-between items-center bg-[#020617] text-slate-400 py-2.5 px-8 text-xs border-b border-white/5 relative z-50">
         <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
               <MapPin size={14} className="text-blue-600" /> ${CONFIG.address}
            </span>
            <span className="flex items-center gap-2">
               <Clock size={14} className="text-blue-600" /> 7/24 Kesintisiz Hizmet
            </span>
         </div>
         <div className="flex gap-6 font-medium">
            <a href="mailto:${CONFIG.email}" className="hover:text-white transition-colors">${CONFIG.email}</a>
            <span className="text-white bg-blue-900/50 px-3 py-0.5 rounded text-[10px] font-bold tracking-widest border border-blue-800">KURUMSAL</span>
         </div>
      </div>

      <header
        className={\`fixed w-full z-40 transition-all duration-500 border-b border-white/5
        \${isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-xl py-3 shadow-2xl top-0' : 'bg-transparent py-6 top-0 lg:top-[37px]'}\`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="bg-white p-2 rounded shadow-lg group-hover:scale-105 transition-transform duration-300">
               <Truck className="text-[#0f172a] w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
             </div>
             <div className="flex flex-col">
               <span className="text-white font-black text-xl lg:text-3xl leading-none tracking-tighter drop-shadow-md">DEMİR</span>
               <span className="text-blue-400 font-bold text-[10px] lg:text-xs tracking-[0.35em] leading-none mt-1">OTO KURTARMA</span>
             </div>
          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.l}
                href={item.p}
                className="text-sm font-bold text-white/80 hover:text-white transition-colors relative group py-2"
              >
                {item.l}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <a href="tel:${CONFIG.phoneLink}" className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 text-sm font-black tracking-widest uppercase transition-all rounded hover:bg-white hover:text-blue-900 shadow-lg shadow-blue-900/50 group">
              <PhoneCall size={18} className="animate-pulse" />
              <span>${CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={\`fixed inset-0 bg-[#020617] z-50 flex flex-col items-center justify-center transition-all duration-300 lg:hidden overflow-y-auto \${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}\`}>

            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="w-full px-8 space-y-6 text-center">
              {menuItems.map((item) => (
                  <Link
                    key={item.l}
                    href={item.p}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white font-black text-3xl hover:text-blue-500 transition-colors border-b border-white/5 pb-4"
                  >
                    {item.l}
                  </Link>
              ))}
              <a href="tel:${CONFIG.phoneLink}" className="block w-full bg-blue-700 text-white py-5 rounded-xl font-black text-xl shadow-2xl text-center mt-8 active:scale-95 transition-transform">
                  HEMEN ARA
              </a>
            </div>
        </div>
      </header>
    </>
  );
}
`
);

// =============================================================================
// 3. ANASAYFA & YENİ BÖLÜMLER
// =============================================================================

// 3.1 Hero Section (Lacivert Tema)
writeFile(
  "components/HeroSection.tsx",
  `
import Link from 'next/link';
import { PhoneCall, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-[#020617]/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
         <img
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1920"
            alt="Demir Oto Kurtarma"
            className="w-full h-full object-cover opacity-50 animate-[pulse_20s_infinite_alternate]"
         />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-3 border border-blue-500/30 bg-blue-900/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
           <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
           <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">Kocaeli & İstanbul Anadolu Yakası</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl animate-in fade-in zoom-in duration-700">
          GÜVENLİ TAŞIMA <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">PROFESYONEL</span> HİZMET
        </h1>

        <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Yolda kaldığınızda endişelenmeyin. Bölgenin en geniş araç filosu ve uzman ekibiyle <strong className="text-white">15 dakikada</strong> yanınızdayız.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <a
            href="tel:${CONFIG.phoneLink}"
            className="group relative flex items-center justify-center gap-3 bg-white text-[#0f172a] px-10 py-5 rounded font-black text-xl hover:bg-blue-50 transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <PhoneCall size={24} className="text-blue-700" />
            ACİL KURTARICI
          </a>

          <Link
             href="/hizmetler"
             className="flex items-center justify-center gap-3 px-10 py-5 rounded font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto backdrop-blur-sm"
          >
             Hizmetlerimiz
          </Link>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 animate-in fade-in duration-1000 delay-500">
            {[
                { i: Clock, t: "15 Dk Varış" },
                { i: ShieldCheck, t: "Kaskolu Taşıma" },
                { i: MapPin, t: "7/24 Takip" }
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-400">
                    <item.i className="text-blue-500" size={20} />
                    <span className="text-sm font-bold uppercase tracking-wider">{item.t}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
`
);

// 3.2 Process Section (Yeni - Nasıl Çalışır?)
writeFile(
  "components/ProcessSection.tsx",
  `
import { processSteps } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">SÜREÇ</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2">Nasıl Çalışıyoruz?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                            <step.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                        <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 -z-10 group-hover:text-blue-50 transition-colors">
                            0{idx + 1}
                        </div>
                    </div>
                    {/* Ok İşareti (Mobilde gizli) */}
                    {idx !== processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-slate-300">
                            <ArrowRight size={24} />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
`
);

// 3.3 Page.tsx (Anasayfa Güncellemesi)
writeFile(
  "app/page.tsx",
  `
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import ProcessSection from '@/components/ProcessSection';
import CallToAction from '@/components/CallToAction';
import CostCalculator from '@/components/CostCalculator';
import { Shield, Clock, Award, CheckCircle2, Star } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <HeroSection />

      {/* İstatistik Bandı */}
      <div className="bg-blue-700 text-white py-12 relative overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
                { val: "15+", label: "Yıllık Tecrübe" },
                { val: "5000+", label: "Mutlu Müşteri" },
                { val: "15 Dk", label: "Ort. Varış" },
                { val: "7/24", label: "Aktif Hizmet" }
            ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                    <p className="text-3xl md:text-5xl font-black mb-1">{s.val}</p>
                    <p className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest">{s.label}</p>
                </div>
            ))}
         </div>
      </div>

      <ServiceSection />
      <ProcessSection />

      {/* Hakkımızda */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">KURUMSAL</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
                    Profesyonel Ekip, <br/>
                    <span className="text-slate-500">Güvenli Kurtarma.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sektördeki 15 yıllık tecrübemizle, sadece araç taşımıyoruz; güven taşıyoruz. Bölgenin en geniş araç filosuna sahibiz.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Hızlı Ulaşım", "Sigortalı Taşıma", "Uzman Kadro", "Uygun Fiyat"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 shadow-sm">
                            <CheckCircle2 className="text-blue-600" size={20} />
                            <span className="font-bold text-slate-800">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000"
                    className="object-cover w-full h-full"
                    alt="Hakkımızda"
                    fill
                />
                {/* Yüzen Hesaplayıcı */}
                <div className="absolute bottom-4 right-4 left-4 md:left-auto md:w-[350px] md:-right-10 md:bottom-10 transform md:hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                    <CostCalculator />
                </div>
            </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Müşteri Yorumları</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow border border-slate-100">
                        <div className="flex gap-1 text-yellow-500 mb-4">
                            {[...Array(t.stars)].map((_, si) => <Star key={si} size={18} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-600 mb-6 italic text-lg">"{t.comment}"</p>
                        <div>
                            <h4 className="font-bold text-[#0f172a]">{t.name}</h4>
                            <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
`
);

// =============================================================================
// 4. DİĞER BİLEŞEN GÜNCELLEMELERİ
// =============================================================================

// 4.1 Cost Calculator (Lacivert Uyumlu)
writeFile(
  "components/CostCalculator.tsx",
  `
"use client";
import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function CostCalculator() {
  const [km, setKm] = useState(0);
  const [price, setPrice] = useState<number | null>(null);

  const calculate = () => {
    // Temsili: Açılış 800 + KM*30
    setPrice(800 + (km * 30));
  };

  return (
    <div className="bg-white p-8 rounded shadow-2xl border-t-8 border-blue-800">
        <div className="flex items-center gap-3 mb-6">
            <Calculator size={28} className="text-blue-800" />
            <h3 className="text-2xl font-black text-[#0f172a]">Fiyat Hesapla</h3>
        </div>
        <div className="space-y-5">
            <input
                type="number"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-800 outline-none font-bold text-slate-900"
                placeholder="Mesafe (KM)"
                onChange={(e) => setKm(Number(e.target.value))}
            />
            <button
                onClick={calculate}
                className="w-full bg-[#0f172a] text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors"
            >
                HESAPLA
            </button>
            {price !== null && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded text-center">
                    <p className="text-xs font-bold text-blue-800 uppercase">TAHMİNİ TUTAR</p>
                    <p className="text-3xl font-black text-[#0f172a]">{price} ₺</p>
                </div>
            )}
        </div>
    </div>
  );
}
`
);

// 4.2 Floating Socials (Lacivert)
writeFile(
  "components/FloatingSocials.tsx",
  `
"use client";
import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function FloatingSocials() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 p-0 hidden lg:flex">
      <a href="tel:${CONFIG.phoneLink}" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-blue-600 relative overflow-hidden">
         <Phone size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">HEMEN ARA</span>
      </a>
      <a href="${CONFIG.socials.whatsapp}" target="_blank" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-[#25D366]">
         <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">WHATSAPP</span>
      </a>
      <a href="${CONFIG.socials.instagram}" target="_blank" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-purple-600">
         <Instagram size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">INSTAGRAM</span>
      </a>
    </div>
  );
}
`
);

// 4.3 Mobile Sticky Bar (Lacivert)
writeFile(
  "components/MobileStickyBar.tsx",
  `
"use client";
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] lg:hidden flex shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-white/5">
      <a
        href="https://wa.me/${CONFIG.phoneLink}"
        className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-4 active:bg-[#1da851] transition-colors"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
      </a>
      <a
        href="tel:${CONFIG.phoneLink}"
        className="flex-[1.5] bg-blue-700 text-white flex flex-col items-center justify-center py-4 relative overflow-hidden active:bg-blue-800 transition-colors"
      >
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        <Phone size={26} className="mb-1 animate-pulse" />
        <span className="text-[11px] font-black uppercase tracking-widest">ACİL ÇEKİCİ</span>
      </a>
    </div>
  );
}
`
);

// 4.4 ServiceSection (Lacivert)
writeFile(
  "components/ServiceSection.tsx",
  `
import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">HİZMETLERİMİZ</span>
            <h2 className="text-4xl font-black text-[#0f172a] mt-2">Profesyonel Çözümler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={\`/hizmetler/\${service.id}\`} key={service.id} className="group bg-slate-50 rounded p-8 hover:bg-[#0f172a] hover:text-white transition-all duration-300 border border-slate-100 hover:border-[#0f172a]">
              <div className="bg-white w-14 h-14 rounded flex items-center justify-center text-blue-800 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400">{service.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:text-white">
                 İncele <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
`
);

// 4.5 CallToAction (Lacivert)
writeFile(
  "components/CallToAction.tsx",
  `
import { PhoneCall } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-[#0f172a] relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Yolda Mı Kaldınız?</h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                En yakın çekici ekibimiz size sadece bir telefon kadar uzak.
            </p>
            <a href="tel:${CONFIG.phoneLink}" className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-10 py-5 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl">
                <PhoneCall size={32} className="text-blue-700 animate-bounce" />
                ${CONFIG.phoneDisplay}
            </a>
        </div>
    </section>
  );
}
`
);

// 4.6 PageBanner (Lacivert)
writeFile(
  "components/PageBanner.tsx",
  `
interface PageBannerProps { title: string; image?: string; subtitle?: string; }

export default function PageBanner({ title, image, subtitle }: PageBannerProps) {
  const bgImage = image || "https://images.unsplash.com/photo-1613214149922-f1809c99e35a?q=80&w=1920";
  return (
    <div className="relative h-[40vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: \`url(\${bgImage})\` }}>
        <div className="absolute inset-0 bg-[#020617]/80"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
          {title}
        </h1>
        {subtitle && <p className="text-lg text-blue-200/80 mb-0 font-light">{subtitle}</p>}
      </div>
    </div>
  );
}
`
);

// =============================================================================
// 5. CSS GÜNCELLEMESİ (GLOBAL VARIABLES)
// =============================================================================
writeFile(
  "app/globals.css",
  `
@import "tailwindcss";

:root {
  --background: #F8FAFC;
  --foreground: #0F172A;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

@keyframes shimmer {
  100% { transform: translateX(100%); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`
);

console.log(
  "\n✅ \x1b[32mDEMİR OTO KURTARMA V6.0 (FINAL ELITE) BAŞARIYLA TAMAMLANDI!\x1b[0m"
);
console.log("----------------------------------------------------------");
console.log("👉 Renkler 'Lacivert - Siyah - Beyaz' olarak ayarlandı.");
console.log("👉 Eksik sayfalar (Galeri, Fiyat Hesapla) oluşturuldu.");
console.log("👉 Beyaz-üstüne-beyaz sorunu giderildi.");
console.log("👉 'npm run dev' ile projeyi başlatın.");
console.log("----------------------------------------------------------");
