import Link from 'next/link';
import { Phone, Mail, MapPin, Truck, ChevronRight, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pb-20 lg:pb-0 font-sans">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
                <div className="bg-white p-2 rounded shadow">
                    <Truck className="text-[#020617]" size={24} />
                </div>
                <div className="flex flex-col"><span className="font-black text-xl text-white tracking-tight">MURAT DEMİR</span><span className="text-[10px] text-blue-500 font-bold tracking-widest">DEMİR OTO KURTARMA</span></div>
            </Link>
            <p className="text-sm leading-7 text-slate-500">
              Çayırova ve Şekerpınar bölgesinin lider oto kurtarma firması. Profesyonel ekip, güvenli taşıma ve uygun fiyat garantisi.
            </p>
            <div className="flex gap-3">
               <a href="https://www.instagram.com/demiirotokurtarma" target="_blank" className="w-10 h-10 rounded bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={18} /></a>
               {/* Facebook eklenebilir */}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600"></span> Kurumsal
            </h3>
            <ul className="space-y-3">
              {['Anasayfa', 'Hakkımızda', 'Hizmetler', 'Galeri', 'İletişim'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600"></span> Hizmet Bölgeleri
            </h3>
            <ul className="space-y-3">
              {['Çayırova Çekici', 'Gebze Çekici', 'Şekerpınar Çekici', 'Darıca Yol Yardım', 'Dilovası Kurtarıcı'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600"></span> İletişim
            </h3>
            <div className="space-y-5">
                <div className="flex items-start gap-4">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <span className="text-sm leading-relaxed">Şekerpınar, Çayırova / KOCAELİ</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="text-blue-600" size={20} />
                    <a href="tel:905539820188" className="text-lg font-bold text-white hover:text-blue-500">0553 982 01 88</a>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="text-blue-600" size={20} />
                    <span className="text-sm">info@demirotokurtarma.com</span>
                </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-slate-600">
          <p>© 2024 Murat Demir - Demir Oto Kurtarma. Kocaeli/Türkiye.</p>
        </div>
      </div>
    </footer>
  );
}