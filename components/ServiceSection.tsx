import { services } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceSection() {
  return (
    // Mobilde py-16, Masaüstünde py-24
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-xs sm:text-sm uppercase">HİZMETLERİMİZ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] mt-2">Profesyonel Çözümler</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Size en uygun çözümü sunmak için geniş hizmet yelpazemizle 7/24 yanınızdayız. İhtiyacınıza uygun hizmeti seçin, gerisini profesyonellere bırakın.
            </p>
        </div>

        {/* Grid Yapısı Güncellendi:
           Mobilde 1 sütun (grid-cols-1)
           Tablette 2 sütun (md:grid-cols-2)
           Masaüstünde 3 sütun (lg:grid-cols-3) -> Bu sayede 6 kart "3 üst 3 alt" durur.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link href={`/hizmetler/${service.id}`} key={service.id} className="group flex flex-col bg-slate-50 rounded-2xl p-8 hover:bg-[#0f172a] hover:text-white transition-all duration-300 border border-slate-100 hover:border-[#0f172a] active:scale-95 sm:active:scale-100 shadow-sm hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center text-blue-800 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <service.icon size={32} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                    <ArrowRight size={24} className="text-white" />
                  </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 flex-1">{service.shortDesc}</p>

              <div className="mt-auto border-t border-gray-200 group-hover:border-gray-700 pt-4">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:text-white flex items-center gap-2">
                     DETAYLARI İNCELE <ArrowRight size={14} />
                  </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}