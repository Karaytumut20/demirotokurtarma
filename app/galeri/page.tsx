import PageBanner from "@/components/PageBanner";
import { galleryImages } from '@/lib/data';
import { Camera } from 'lucide-react';

export default function GaleriPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageBanner title="GALERİ" subtitle="Sahadaki operasyonlarımızdan kareler." />

      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-2">
                <Camera size={18} /> GÖRSELLERLE BİZ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2 mb-4">Operasyonlarımızdan Kareler</h2>
            <p className="text-gray-500">
                15 yıllık tecrübemiz boyunca, binlerce aracı güvenle taşıdık. İşte zorlu kış şartlarından lüks araç transferlerine, gece operasyonlarından motosiklet taşımaya kadar hizmetlerimizden bazı örnekler.
            </p>
        </div>

        {/* Masonry Layout Benzeri Column Yapısı */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
                <div key={idx} className="relative group break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-200">
                    <img
                        src={src}
                        alt={`Demir Oto Kurtarma Operasyon ${idx + 1}`}
                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-white font-bold tracking-widest text-sm border-l-4 border-blue-500 pl-3">DEMİR OTO KURTARMA</span>
                        <span className="text-slate-300 text-xs mt-1">7/24 Hizmet</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-gray-500 mb-4">Daha fazlası için sosyal medya hesaplarımızı takip edin.</p>
            <a
                href="https://www.instagram.com/demiirotokurtarma"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
            >
                <Camera size={20} /> Instagram'da Takip Et
            </a>
        </div>
      </section>
    </main>
  );
}