import Link from 'next/link';
import { Home, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950 text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <h1 className="text-[10rem] font-black text-slate-800 leading-none select-none">404</h1>
      <div className="relative -mt-16 z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">YOLUNUZU MU <br/><span className="text-orange-600">KAYBETTİNİZ?</span></h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg">
            Aradığınız sayfa silinmiş veya taşınmış olabilir. Ama endişelenmeyin, biz sizi yolda bırakmayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 hover:text-white transition-colors">
                <Home size={20} /> Anasayfaya Dön
            </Link>
            <a href="tel:905539820188" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors">
                <PhoneCall size={20} /> Acil Yardım
            </a>
          </div>
      </div>
    </div>
  );
}