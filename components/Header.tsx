"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, Truck, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Header Arkaplanı için Scroll Takibi
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. YENİ: Mobil Menü Açılınca Sayfa Kaydırmayı Kilitle (Body Scroll Lock)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Kaydırmayı kapat
    } else {
      document.body.style.overflow = 'unset'; // Kaydırmayı aç
    }
    // Component unmount olursa temizle
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { l: 'ANASAYFA', p: '/' },
    { l: 'HİZMETLER', p: '/hizmetler' },
    { l: 'GALERİ', p: '/galeri' },
    { l: 'FİYAT HESAPLA', p: '/fiyat-hesapla' },
    { l: 'İLETİŞİM', p: '/iletisim' }
  ];

  // Config'den alınan değerler (Manual tanımlı)
  const CONFIG = {
    email: "info@demirotokurtarma.com",
    shortAddress: "Şekerpınar, Çayırova / KOCAELİ",
    phoneLink: "905013338042",
    phoneDisplay: "0501 333 80 42"
  };

  return (
    <>
      {/* Top Bar - Koyu Lacivert */}
      <div className="hidden lg:flex justify-between items-center bg-[#020617] text-slate-400 py-2.5 px-8 text-xs border-b border-white/5 relative z-50">
         <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
               <MapPin size={14} className="text-blue-600" /> {CONFIG.shortAddress}
            </span>
            <span className="flex items-center gap-2">
               <Clock size={14} className="text-blue-600" /> 7/24 Kesintisiz Hizmet
            </span>
         </div>
         <div className="flex gap-6 font-medium">
            <a href={`mailto:${CONFIG.email}`} className="hover:text-white transition-colors">{CONFIG.email}</a>
            <span className="text-white bg-blue-900/50 px-3 py-0.5 rounded text-[10px] font-bold tracking-widest border border-blue-800">KURUMSAL</span>
         </div>
      </div>

      <header
        className={`fixed w-full z-40 transition-all duration-500 border-b border-white/5
        ${isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-xl py-3 shadow-2xl top-0' : 'bg-transparent py-6 top-0 lg:top-[37px]'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3 group">
             <div className="bg-white p-2 rounded shadow-lg group-hover:scale-105 transition-transform duration-300">
               <Truck className="text-[#0f172a] w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
             </div>
             <div className="flex flex-col">
               <span className="text-white font-black text-xl lg:text-3xl leading-none tracking-tighter drop-shadow-md">DEMİR</span>
               <span className="text-blue-400 font-bold text-[10px] lg:text-xs tracking-[0.35em] leading-none mt-1">OTO KURTARMA</span>
             </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
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

          <div className="hidden lg:block">
            <a href={`tel:${CONFIG.phoneLink}`} className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 text-sm font-black tracking-widest uppercase transition-all rounded hover:bg-white hover:text-blue-900 shadow-lg shadow-blue-900/50 group">
              <PhoneCall size={18} className="animate-pulse" />
              <span>{CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#020617] z-50 flex flex-col items-center justify-center transition-all duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>

            {/* KAPATMA BUTONU */}
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="w-full px-8 space-y-6">
              {menuItems.map((item) => (
                  <Link
                    key={item.l}
                    href={item.p}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white font-black text-3xl text-center hover:text-blue-500 transition-colors border-b border-white/5 pb-4"
                  >
                    {item.l}
                  </Link>
              ))}
              <a href={`tel:${CONFIG.phoneLink}`} className="block w-full bg-blue-700 text-white py-5 rounded-xl font-black text-xl shadow-2xl text-center mt-8 active:scale-95 transition-transform">
                  HEMEN ARA
              </a>
            </div>
        </div>
      </header>
    </>
  );
}