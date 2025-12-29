import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center px-4">
      <h1 className="text-9xl font-black text-orange-600">404</h1>
      <h2 className="text-4xl font-bold mb-4">Yolda Mı Kaldınız?</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Aradığınız sayfa bulunamadı ama biz sizi bulabiliriz! Acil yardım için hemen arayın veya anasayfaya dönün.
      </p>
      <Link href="/" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-colors">
        <Home size={20} /> Anasayfaya Dön
      </Link>
    </div>
  );
}