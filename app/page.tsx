import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import ProcessSection from '@/components/ProcessSection';
import CallToAction from '@/components/CallToAction';
import CostCalculator from '@/components/CostCalculator';
import { Shield, Clock, Award, CheckCircle2, Star } from 'lucide-react';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <HeroSection />

      {/* İstatistik Bandı */}
      <div className="bg-blue-700 text-white py-12 relative overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
                { val: "15+", label: "Yıllık Tecrübe" },
                { val: "5000+", label: "Mutlu Müşteri" },
                { val: "15 Dk", label: "Ort. Varış" },
                { val: "7/24", label: "Aktif Hizmet" }
            ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                    <p className="text-3xl md:text-5xl font-black mb-1">{s.val}</p>
                    <p className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest">{s.label}</p>
                </div>
            ))}
         </div>
      </div>

      <ServiceSection />
      <ProcessSection />

      {/* Hakkımızda */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">KURUMSAL</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
                    Profesyonel Ekip, <br/>
                    <span className="text-slate-500">Güvenli Kurtarma.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sektördeki 15 yıllık tecrübemizle, sadece araç taşımıyoruz; güven taşıyoruz. Bölgenin en geniş araç filosuna sahibiz.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Hızlı Ulaşım", "Sigortalı Taşıma", "Uzman Kadro", "Uygun Fiyat"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 shadow-sm">
                            <CheckCircle2 className="text-blue-600" size={20} />
                            <span className="font-bold text-slate-800">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000"
                    className="object-cover w-full h-full"
                    alt="Hakkımızda"
                    fill
                />
                {/* Yüzen Hesaplayıcı */}
                <div className="absolute bottom-4 right-4 left-4 md:left-auto md:w-[350px] md:-right-10 md:bottom-10 transform md:hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                    <CostCalculator />
                </div>
            </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Müşteri Yorumları</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow border border-slate-100">
                        <div className="flex gap-1 text-yellow-500 mb-4">
                            {[...Array(t.stars)].map((_, si) => <Star key={si} size={18} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-600 mb-6 italic text-lg">"{t.comment}"</p>
                        <div>
                            <h4 className="font-bold text-[#0f172a]">{t.name}</h4>
                            <span className="text-xs text-blue-600 font-bold uppercase tracking-wider">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}