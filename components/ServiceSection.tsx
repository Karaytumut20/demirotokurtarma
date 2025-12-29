import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">HİZMETLERİMİZ</span>
            <h2 className="text-4xl font-black text-[#0f172a] mt-2">Profesyonel Çözümler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link href={`/hizmetler/${service.id}`} key={service.id} className="group bg-slate-50 rounded p-8 hover:bg-[#0f172a] hover:text-white transition-all duration-300 border border-slate-100 hover:border-[#0f172a]">
              <div className="bg-white w-14 h-14 rounded flex items-center justify-center text-blue-800 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400">{service.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:text-white">
                 İncele <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}