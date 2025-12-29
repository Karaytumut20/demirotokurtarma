import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-orange-600 font-bold tracking-widest text-sm uppercase block mb-2">HİZMETLERİMİZ</span>
                <h2 className="text-4xl font-black text-slate-900">Her Durum İçin <br/>Profesyonel Çözüm.</h2>
            </div>
            <Link href="/hizmetler" className="flex items-center gap-2 font-bold text-slate-900 hover:text-orange-600 transition-colors border-b-2 border-slate-200 hover:border-orange-600 pb-1">
                Tüm Hizmetler <ArrowRight size={18} />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={`/hizmetler/${service.id}`} key={service.id} className="group relative h-[350px] overflow-hidden rounded-2xl cursor-pointer">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <div className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <service.icon size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                 <p className="text-gray-300 text-sm line-clamp-2 mb-4 group-hover:text-white transition-colors">{service.shortDesc}</p>
                 <span className="text-orange-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    İncele <ArrowRight size={14} />
                 </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}