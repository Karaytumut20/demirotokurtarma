import PageBanner from "@/components/PageBanner";
import { galleryImages } from '@/lib/data';

export default function GaleriPage() {
  return (
    <main className="bg-slate-50">
      <PageBanner title="GALERİ" />
      <section className="py-24 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded shadow-lg break-inside-avoid">
                    <img
                        src={src}
                        alt="Galeri"
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold tracking-widest border border-white px-4 py-1">DEMİR OTO</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}