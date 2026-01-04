import { processSteps } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">SÜREÇ</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2">Nasıl Çalışıyoruz?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2 h-full flex flex-col items-center text-center shadow-lg hover:shadow-2xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                            <step.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                        <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 -z-10 group-hover:text-blue-50 transition-colors">
                            0{idx + 1}
                        </div>
                    </div>
                    {/* Ok İşareti (Mobilde gizli) */}
                    {idx !== processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-slate-300">
                            <ArrowRight size={24} />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}