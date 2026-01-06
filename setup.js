const fs = require("fs");
const path = require("path");

// --- YAPILANDIRMA ---
const LOGO_FILENAME = "logo.png";

function writeFile(filePath, content) {
  try {
    const fullPath = path.join(__dirname, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content.trim(), "utf8");
    console.log(`✅ [GÜNCELLENDİ]: ${filePath}`);
  } catch (e) {
    console.error(`❌ Dosya yazılamadı: ${filePath}`);
  }
}

// HEADER BİLEŞENİ GÜNCELLENİYOR (NET ve BÜYÜK LOGO)
writeFile(
  "components/Header.tsx",
  `
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronRight, Home, Settings, Info, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü açıldığında scroll'u kilitle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa', icon: Home },
    { href: '/hizmetler', label: 'Hizmetler', icon: Settings },
    { href: '/kurumsal', label: 'Kurumsal', icon: Info },
    { href: '/iletisim', label: 'İletişim', icon: MessageCircle },
  ];

  return (
    <>
      <header
        className={\`fixed top-0 left-0 right-0 transition-all duration-500 z-50 \${
          isScrolled
            ? 'py-3 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg'
            : 'py-5 bg-transparent' // Navbar yüksekliği dengeli tutuldu
        }\`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center justify-between">

            {/* --- LOGO ALANI --- */}
            <Link href="/" className="flex items-center gap-4 z-50 group">

              {/* LOGO AYARLARI (NETLİK İÇİN DÜZELTİLDİ):
                  1. 'scale' kaldırıldı (bulanıklık sebebiydi).
                  2. Gerçek boyutlar artırıldı: Mobile: h-20(80px), Desktop: h-28(112px).
                  3. '-my-4 lg:-my-6' negatif margin ile navbarın bu büyük logoya göre şişmesi engellendi, logo dışa taştı.
                  4. drop-shadow eklendi.
              */}
              <div className="relative h-20 w-20 lg:h-28 lg:w-28 -my-4 lg:-my-6 overflow-visible drop-shadow-2xl transition-all">
                <Image
                  src="/${LOGO_FILENAME}"
                  alt="Murat Demir Oto Kurtarma Logo"
                  fill
                  className="object-contain" // Scale YOK, net görüntü.
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

            {/* Desktop Navigation */}
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

              <a
                href="tel:05303877588"
                className={\`
                  hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-xl font-black tracking-wider transition-all duration-300
                  \${isScrolled
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'}
                \`}
              >
                <div className={\`p-1.5 rounded-lg \${isScrolled ? 'bg-white/20' : 'bg-blue-600'}\`}>
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>0530 387 75 88</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 -mr-2 text-gray-300 hover:text-white transition-colors bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 active:scale-95"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menüyü aç"
            >
              <Menu className="w-8 h-8" />
            </button>
          </nav>
        </div>
      </header>

      {/* --- MODERN MOBİL MENÜ (DRAWER) --- */}
      <div
        className={\`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99990] transition-opacity duration-300 md:hidden \${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }\`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={\`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-[#0f172a] z-[99999] shadow-2xl flex flex-col border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden \${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }\`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#020617]/30">
           <span className="text-white font-black text-lg tracking-wider">MENÜ</span>
           <button
             onClick={() => setIsMobileMenuOpen(false)}
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
                <span className="text-base font-bold tracking-wide flex-1">{link.label}</span>
                <ChevronRight size={18} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
             </Link>
           ))}
        </div>

        <div className="p-6 border-t border-white/5 bg-[#020617]/50 mt-auto pb-[calc(20px+env(safe-area-inset-bottom))]">
           <a
             href="tel:05303877588"
             className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-xl font-black shadow-lg shadow-blue-900/20 hover:bg-blue-50 active:scale-95 transition-all mb-3"
           >
             <Phone size={20} className="animate-pulse" />
             HEMEN ARA
           </a>
           <p className="text-center text-slate-500 text-[10px] uppercase tracking-widest font-semibold">
             7/24 Murat Demir Oto Kurtarma
           </p>
        </div>
      </div>
    </>
  );
}
`
);

console.log(
  "\\n✅ Logo bulanıklığı giderildi. Büyük boyut ve kompakt navbar sağlandı."
);
