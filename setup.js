/**
 * DEMİR OTO KURTARMA - ULTIMATE SETUP SCRIPT (V3.1 - FIX)
 * * Hata Düzeltmesi: CONFIG objesine eksik olan sosyal medya linkleri eklendi.
 * * Özellikler:
 * - 📍 Adres: Çayırova/Kocaeli (Güncel)
 * - 📲 Floating Socials: Sağdaki yüzen menü (Aktif)
 * - 📱 Mobile Sticky Bar: Mobilde altta sabit arama butonu (Aktif)
 * - 🚨 Acil Durum Modu: Hero alanında dikkat çekici butonlar
 */

const fs = require("fs");
const path = require("path");

// --- KURUMSAL YAPILANDIRMA (DÜZELTİLDİ) ---
const CONFIG = {
  name: "Demir Oto Kurtarma",
  phoneDisplay: "0501 333 80 42",
  phoneLink: "905013338042", // Boşluksuz
  email: "info@demirotokurtarma.com",
  address:
    "Cumhuriyet Mah. Mustafa Kemal Cad. Şekerpınar Tic. İş Merkezi No: 16 İç Kapı No: 36, 41420 Çayırova/Kocaeli",
  shortAddress: "Şekerpınar, Çayırova / KOCAELİ",
  // Google Maps Embed Linki (Kendi işletmenizin embed koduyla değiştirebilirsiniz)
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.687453472098!2d29.3585!3d40.8359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzA5LjIiTiAyOcKwMjEnMzAuNiJF!5e0!3m2!1str!2str!4v1630000000000!5m2!1str!2str",
  socials: {
    instagram: "https://www.instagram.com/demirotokurtarma",
    facebook: "https://www.facebook.com/demirotokurtarma",
  },
};

console.log(`\x1b[32m🚀 ${CONFIG.name} V3.1 Kurulumu Başlatılıyor...\x1b[0m`);

// --- YARDIMCI FONKSİYONLAR ---
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, content) {
  const fullPath = path.join(__dirname, filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content.trim(), "utf8");
  console.log(`✅ [GÜNCELLENDİ]: ${filePath}`);
}

function deletePath(relativePath) {
  const fullPath = path.join(__dirname, relativePath);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`🗑️  [SİLİNDİ]: ${relativePath}`);
  }
}

// =============================================================================
// 1. TEMİZLİK (Eski Emlak Kalıntıları)
// =============================================================================
deletePath("app/yatirim");
deletePath("app/projeler");
deletePath("app/medya");
deletePath("components/SearchFilter.tsx");
deletePath("components/LatestProjects.tsx");
deletePath("components/PropertyCard.tsx");

// =============================================================================
// 2. VERİ KATMANI (Database Simülasyonu)
// =============================================================================
writeFile(
  "lib/data.ts",
  `
import { Truck, Wrench, Battery, Car } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Oto Çekici",
    shortDesc: "Çayırova, Gebze ve Şekerpınar bölgesinde 7/24 acil çekici.",
    longDesc: "Aracınız arıza yaptığında veya kaza durumunda, son model kayar kasa araçlarımızla olay yerine hızla ulaşıyoruz. Kocaeli ve İstanbul Anadolu Yakası'nın her noktasına güvenli taşıma sağlıyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000"
  },
  {
    id: "yol-yardim",
    title: "Yol Yardım",
    shortDesc: "Lastik, yakıt ve basit arızalar için mobil servis.",
    longDesc: "Lastiğiniz mi patladı? Yakıtınız mı bitti? Çekiciye gerek kalmadan mobil servis aracımızla bulunduğunuz konuma gelip sorunu yerinde çözüyoruz.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000"
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye",
    shortDesc: "Akü bitmesi durumunda profesyonel takviye.",
    longDesc: "Soğuk havalarda veya unutulan farlar nedeniyle biten akünüz için profesyonel booster cihazlarımızla takviye yapıyoruz.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000"
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta",
    shortDesc: "Kamyon, Tır ve İş Makinesi taşıma.",
    longDesc: "Şekerpınar sanayi bölgesindeki ağır tonajlı araçlarınız ve iş makineleriniz için özel donanımlı kurtarıcılarımız mevcuttur.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000"
  }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik"
];
`
);

// =============================================================================
// 3. COMPONENTLER (Bileşenler)
// =============================================================================

// 3.1 Mobile Sticky Bar (Mobilde alta yapışan bar)
writeFile(
  "components/MobileStickyBar.tsx",
  `
"use client";
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] lg:hidden flex shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <a
        href="https://wa.me/${CONFIG.phoneLink}?text=Merhaba,%20yolda%20kaldım.%20Acil%20yardım%20gerekli."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-3 active:bg-[#1da851] transition-colors"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
      </a>
      <a
        href="tel:${CONFIG.phoneLink}"
        className="flex-[1.5] bg-orange-600 text-white flex flex-col items-center justify-center py-3 relative overflow-hidden active:bg-orange-700 transition-colors"
      >
        {/* Shine Efekti */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        <Phone size={24} className="mb-1 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wide">HEMEN ARA</span>
      </a>
    </div>
  );
}
`
);

// 3.2 Floating Socials (Sağdaki Yüzen Menü - Hata burada düzeltildi)
writeFile(
  "components/FloatingSocials.tsx",
  `
"use client";

import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function FloatingSocials() {
  const socials = [
    {
      icon: <Phone size={24} />,
      label: "HEMEN ARA",
      sub: "7/24 Acil Hat",
      href: "tel:${CONFIG.phoneLink}",
      color: "bg-orange-600",
      textColor: "text-white",
      special: true
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WHATSAPP",
      sub: "Konum Gönder",
      href: "https://wa.me/${CONFIG.phoneLink}?text=Merhaba,%20çekici%20ihtiyacım%20var.",
      color: "bg-[#25D366]",
      textColor: "text-white",
      special: false
    },
    {
      icon: <Instagram size={24} />,
      label: "INSTAGRAM",
      href: "${CONFIG.socials.instagram}",
      color: "bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600",
      textColor: "text-white",
      special: false
    },
    {
        icon: <MapPin size={24} />,
        label: "ADRESİMİZ",
        href: "/iletisim",
        color: "bg-slate-800",
        textColor: "text-white",
        special: false
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 p-1 hidden lg:flex">
      {socials.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.href.startsWith('http') ? "_blank" : "_self"}
          className={\`relative flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 group \${item.special ? 'w-16 h-16' : 'w-12 h-12'} \${item.color} \${item.textColor}\`}
        >
          {/* Tooltip (Solda Açılan Kısım) */}
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-l-lg shadow-2xl border-r-2 border-orange-500 whitespace-nowrap">
                <p className="font-bold text-sm tracking-wider">{item.label}</p>
                {item.sub && <p className="text-[10px] text-orange-400 font-medium">{item.sub}</p>}
            </div>
          </div>

          {/* İkon */}
          <div className={\`transition-transform duration-300 group-hover:scale-110 \${item.special ? 'animate-pulse' : ''}\`}>
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
`
);

// 3.3 Header (Güncellenmiş Adres ile)
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

  return (
    <>
      {/* Top Bar (Masaüstü Bilgi Çubuğu) */}
      <div className="hidden lg:flex justify-between items-center bg-slate-950 text-gray-400 py-2 px-6 text-[11px] border-b border-white/5 relative z-50">
         <div className="flex gap-6">
            <span className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer">
               <MapPin size={12} className="text-orange-600" /> ${CONFIG.shortAddress}
            </span>
            <span className="flex items-center gap-1">
               <Clock size={12} className="text-orange-600" /> Şekerpınar Bölgesi: <span className="text-green-500 font-bold">15 Dk Varış</span>
            </span>
         </div>
         <div className="flex gap-4">
            <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold animate-pulse">CANLI DESTEK AKTİF</span>
         </div>
      </div>

      <header
        className={\`fixed w-full z-40 transition-all duration-300 top-0 lg:top-[33px]
        \${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-2 shadow-xl !top-0' : 'bg-transparent py-4 lg:py-5'}\`}
      >
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="bg-gradient-to-br from-orange-600 to-red-600 p-2.5 rounded-xl shadow-lg shadow-orange-900/20 group-hover:scale-105 transition-transform">
               <Truck className="text-white w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
             </div>
             <div className="flex flex-col">
               <span className="text-white font-black text-xl lg:text-2xl leading-none tracking-tight">DEMİR</span>
               <span className="text-orange-500 font-bold text-[10px] lg:text-xs tracking-[0.2em] leading-none mt-0.5">OTO KURTARMA</span>
             </div>
          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {['ANASAYFA', 'HİZMETLER', 'BÖLGELER', 'İLETİŞİM'].map((item) => (
              <Link
                key={item}
                href={item === 'ANASAYFA' ? '/' : \`/\${item.toLowerCase().replace('ö','o').replace('ü','u').replace('İ','i')}\`}
                className="text-sm font-bold text-white/90 hover:text-orange-500 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* SAĞ TARAF BUTON */}
          <div className="hidden lg:block">
            <a href="tel:${CONFIG.phoneLink}" className="flex items-center gap-3 bg-white text-slate-900 px-5 py-2.5 text-sm font-black tracking-widest uppercase transition-all rounded-lg hover:bg-orange-600 hover:text-white hover:shadow-lg hover:shadow-orange-600/30 group transform hover:-translate-y-0.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>${CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* MOBİL MENU BUTONU */}
          <button
            className="lg:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={\`fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-30 flex flex-col items-center justify-center transition-all duration-300 lg:hidden \${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}\`}>
            <div className="w-full px-8 space-y-6">
              {['ANASAYFA', 'HİZMETLER', 'BÖLGELER', 'İLETİŞİM'].map((item) => (
                <Link
                  key={item}
                  href={item === 'ANASAYFA' ? '/' : \`/\${item.toLowerCase()}\`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-black text-4xl text-center hover:text-orange-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-8"></div>
              <a
                  href="tel:${CONFIG.phoneLink}"
                  className="block w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-orange-600/20 text-center active:scale-95 transition-transform"
              >
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

// 3.4 Footer (Adres Güncel)
writeFile(
  "components/Footer.tsx",
  `
import Link from 'next/link';
import { Phone, Mail, MapPin, Truck, ChevronRight, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-900 pb-20 lg:pb-0">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 text-white group">
                <Truck className="text-orange-600" size={32} />
                <span className="font-black text-2xl tracking-tight">DEMİR</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              Çayırova ve Şekerpınar bölgesinin lider oto kurtarma firması. Sanayi bölgesi ve otoyol geçişlerinde 7/24 en hızlı müdahale garantisi.
            </p>
            <div className="flex gap-3">
               <a href="${CONFIG.socials.instagram}" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"><Instagram size={18} /></a>
               <a href="${CONFIG.socials.facebook}" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-orange-600/30 pb-2 inline-block">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {['Oto Çekici', 'Yol Yardım', 'Akü Takviye', 'Ağır Vasıta', 'Forklift Taşıma'].map((item) => (
                <li key={item}>
                  <Link href="/hizmetler" className="hover:text-orange-500 transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-orange-600" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-orange-600/30 pb-2 inline-block">Bölgeler</h3>
            <ul className="space-y-3">
              {['Çayırova Çekici', 'Gebze Çekici', 'Şekerpınar Çekici', 'Darıca Çekici', 'Dilovası Çekici'].map((item) => (
                <li key={item}>
                  <Link href="/bolgeler" className="hover:text-orange-500 transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} className="text-orange-600" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-b border-orange-600/30 pb-2 inline-block">Merkez Ofis</h3>
            <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                    <div className="bg-slate-900 p-2 rounded text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <MapPin size={20} />
                    </div>
                    <span className="text-sm leading-relaxed">${CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-slate-900 p-2 rounded text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Phone size={20} />
                    </div>
                    <a href="tel:${CONFIG.phoneLink}" className="text-lg font-bold text-white hover:text-orange-500">${CONFIG.phoneDisplay}</a>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-slate-900 p-2 rounded text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Mail size={20} />
                    </div>
                    <span className="text-sm">${CONFIG.email}</span>
                </div>
            </div>
          </div>

        </div>
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2024 Demir Oto Kurtarma.</p>
          <p>Kocaeli / Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
`
);

// 3.5 Hero Section (Güncelleme)
writeFile(
  "components/HeroSection.tsx",
  `
import { PhoneCall, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
         <img
            src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1920"
            alt="Çayırova Şekerpınar Oto Kurtarma"
            className="w-full h-full object-cover opacity-60"
         />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">

        {/* Bölge Etiketi */}
        <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in zoom-in duration-700">
           <MapPin size={14} /> Şekerpınar & Çayırova Bölgesi
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          YOLDA KALMA, <br/>
          <span className="text-orange-600">BİZİ ARA.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-medium">
          Kocaeli'nin en hızlı kurtarma ekibi 15 dakika içinde yanınızda.
          <span className="block text-orange-500 font-bold mt-2">Endişelenmeyin, çözüm bir telefon uzağınızda.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:${CONFIG.phoneLink}"
            className="relative overflow-hidden group bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-orange-700 transition-all shadow-[0_0_50px_rgba(234,88,12,0.5)] transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
            <span className="relative flex items-center gap-3">
               <PhoneCall className="animate-bounce" /> HEMEN ÇAĞIR
            </span>
          </a>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2"><Clock className="text-orange-600" /> 15 Dk Varış</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-orange-600" /> Kaskolu Taşıma</div>
            <div className="flex items-center gap-2"><MapPin className="text-orange-600" /> Tüm Kocaeli</div>
        </div>

      </div>
    </div>
  );
}
`
);

// 3.6 PageBanner (Genel Kullanım)
writeFile(
  "components/PageBanner.tsx",
  `
interface PageBannerProps { title: string; image?: string; }

export default function PageBanner({ title, image }: PageBannerProps) {
  const bgImage = image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920";

  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: \`url(\${bgImage})\` }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 shadow-black drop-shadow-lg uppercase">
          {title}
        </h1>
        <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
`
);

// =============================================================================
// 4. SAYFALAR (Pages)
// =============================================================================

// 4.1 İletişim Sayfası (Yeni Adres)
writeFile(
  "app/iletisim/page.tsx",
  `
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function IletisimPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageBanner title="İLETİŞİM" />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 mb-8">Bize Ulaşın</h2>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Phone size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">7/24 Acil Hat</h4>
                        <p className="text-gray-500 mb-1">Günün her saati arayabilirsiniz.</p>
                        <a href="tel:${CONFIG.phoneLink}" className="text-2xl font-black text-orange-600 hover:text-slate-900 transition-colors">${CONFIG.phoneDisplay}</a>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Adres</h4>
                        <p className="text-gray-600 max-w-xs">${CONFIG.address}</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">E-Posta</h4>
                        <a href="mailto:${CONFIG.email}" className="text-gray-600 hover:text-orange-600">${CONFIG.email}</a>
                    </div>
                </div>
            </div>

            {/* Harita */}
            <div className="h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <iframe
                    src="${CONFIG.mapEmbed}"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>

        </div>
      </section>
    </main>
  );
}
`
);

// 4.2 Layout (Mobil Sticky Bar Eklemesi)
writeFile(
  "app/layout.tsx",
  `
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
    default: '${CONFIG.name} | Çayırova & Şekerpınar Çekici',
    template: '%s | ${CONFIG.name}'
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
      <body className={\`\${montserrat.className} antialiased bg-white relative pb-16 lg:pb-0\`}>
        <Header />
        <FloatingSocials />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
`
);

console.log("\n✅ \x1b[32mDEMİR OTO KURTARMA V3.1 KURULUMU TAMAMLANDI!\x1b[0m");
console.log("----------------------------------------------------------");
console.log("1. 'npm run dev' komutu ile projeyi başlatın.");
console.log("2. Sorun düzeldi, sosyal medya linkleri eklendi.");
console.log("----------------------------------------------------------");
