import { services } from '@/lib/data';
import PageBanner from "@/components/PageBanner";
import CallToAction from '@/components/CallToAction';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

// Next.js 15/16 Params Fix
export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.id);

  if (!service) return notFound();

  return (
    <main className="bg-white">
      <PageBanner title={service.title} image={service.image} />

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
         <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-900 mb-6">{service.title} Hizmeti</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.longDesc}</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Neler Sunuyoruz?</h3>
            <ul className="space-y-3 mb-10">
                {["7/24 Kesintisiz Destek", "Sigortalı Taşıma Garantisi", "Uzman Operatörler", "Hızlı Müdahale"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="text-orange-600" size={20} /> {item}
                    </li>
                ))}
            </ul>
         </div>

         <div className="lg:w-1/3">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 sticky top-32">
                <h4 className="font-bold text-xl text-slate-900 mb-4">Hemen Destek Alın</h4>
                <p className="text-gray-500 mb-6 text-sm">Bu hizmetimizden yararlanmak için hemen bizi arayın, konumunuza en yakın ekibi yönlendirelim.</p>
                <a href="tel:905013338042" className="block w-full bg-orange-600 text-white text-center py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg">
                    HEMEN ARA
                </a>
            </div>
         </div>
      </div>

      <CallToAction />
    </main>
  );
}