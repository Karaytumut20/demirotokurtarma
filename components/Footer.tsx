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
               <a href="https://www.instagram.com/demirotokurtarma" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"><Instagram size={18} /></a>
               <a href="https://www.facebook.com/demirotokurtarma" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
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
                    <span className="text-sm leading-relaxed">Cumhuriyet Mah. Mustafa Kemal Cad. Şekerpınar Tic. İş Merkezi No: 16 İç Kapı No: 36, 41420 Çayırova/Kocaeli</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-slate-900 p-2 rounded text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Phone size={20} />
                    </div>
                    <a href="tel:905013338042" className="text-lg font-bold text-white hover:text-orange-500">0501 333 80 42</a>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="bg-slate-900 p-2 rounded text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Mail size={20} />
                    </div>
                    <span className="text-sm">info@demirotokurtarma.com</span>
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