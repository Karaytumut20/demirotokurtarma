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
               <MapPin size={12} className="text-orange-600" /> Şekerpınar, Çayırova / KOCAELİ
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
        className={`fixed w-full z-40 transition-all duration-300 top-0 lg:top-[33px]
        ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-2 shadow-xl !top-0' : 'bg-transparent py-4 lg:py-5'}`}
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
                href={item === 'ANASAYFA' ? '/' : `/${item.toLowerCase().replace('ö','o').replace('ü','u').replace('İ','i')}`}
                className="text-sm font-bold text-white/90 hover:text-orange-500 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* SAĞ TARAF BUTON */}
          <div className="hidden lg:block">
            <a href="tel:905013338042" className="flex items-center gap-3 bg-white text-slate-900 px-5 py-2.5 text-sm font-black tracking-widest uppercase transition-all rounded-lg hover:bg-orange-600 hover:text-white hover:shadow-lg hover:shadow-orange-600/30 group transform hover:-translate-y-0.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>0501 333 80 42</span>
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
        <div className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-30 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="w-full px-8 space-y-6">
              {['ANASAYFA', 'HİZMETLER', 'BÖLGELER', 'İLETİŞİM'].map((item) => (
                <Link
                  key={item}
                  href={item === 'ANASAYFA' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-black text-4xl text-center hover:text-orange-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="h-px bg-white/10 w-full my-8"></div>
              <a
                  href="tel:905013338042"
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