import PageBanner from "@/components/PageBanner";
import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HizmetlerPage() {
  return (
    <main className="bg-white">
      <PageBanner title="HİZMETLERİMİZ" />
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
                <div key={s.id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="w-full md:w-1/3 h-48 md:h-auto relative rounded-xl overflow-hidden shrink-0">
                        <img src={s.image} alt={s.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                            <s.icon className="text-orange-600" size={24} />
                            <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{s.shortDesc}</p>
                        <Link href={`/hizmetler/${s.id}`} className="inline-flex items-center gap-2 font-bold text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-fit">
                            Detaylı Bilgi <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}