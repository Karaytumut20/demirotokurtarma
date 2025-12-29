import PageBanner from "@/components/PageBanner";
import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HizmetlerPage() {
  return (
    <main className="bg-slate-50">
      <PageBanner title="HİZMETLERİMİZ" subtitle="Yolda kalan herkesin profesyonel çözüm ortağıyız." />
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
                <Link href={`/hizmetler/${s.id}`} key={s.id} className="group bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden">
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-bold tracking-widest border border-white px-6 py-2">İNCELE</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{s.shortDesc}</p>
                        <div className="flex items-center gap-2 text-blue-700 font-bold uppercase text-xs tracking-wider">
                            DETAYLAR <ArrowRight size={14} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>
    </main>
  );
}