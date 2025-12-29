import { services } from '@/lib/data';
import PageBanner from "@/components/PageBanner";
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone } from 'lucide-react';

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.id);

  if (!service) return notFound();

  return (
    <main className="bg-slate-50">
      <PageBanner title={service.title} image={service.image} />

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
         <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6">{service.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.longDesc}</p>

            <div className="bg-white p-8 rounded shadow-sm border border-slate-100 mb-10">
                <h3 className="text-xl font-bold text-[#0f172a] mb-6">Hizmet Özellikleri</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features && service.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <CheckCircle2 className="text-blue-600 shrink-0" size={20} /> {item}
                        </li>
                    ))}
                </ul>
            </div>
         </div>

         <div className="lg:w-1/3">
            <div className="bg-[#0f172a] text-white p-8 rounded sticky top-32 shadow-xl">
                <h4 className="font-bold text-2xl mb-2">Acil Yardım</h4>
                <p className="text-slate-400 mb-8 text-sm">Müşteri temsilcimiz hattın diğer ucunda bekliyor.</p>

                <a href="tel:905013338042" className="block w-full bg-white text-[#0f172a] text-center py-4 rounded font-black hover:bg-blue-50 transition-all mb-4">
                    0501 333 80 42
                </a>
            </div>
         </div>
      </div>
    </main>
  );
}