import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import CostCalculator from '@/components/CostCalculator';
import { Shield, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <HeroSection />

      {/* Servisler (ServiceSection bileşeni içinde) */}
      <ServiceSection />

      {/* Hakkımızda / Neden Biz */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">KURUMSAL</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
                    Profesyonel Ekip, <br/>
                    <span className="text-slate-500">Güvenli Kurtarma.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sektördeki 15 yıllık tecrübemizle, sadece araç taşımıyoruz; güven taşıyoruz. Bölgenin en geniş araç filosuna sahibiz ve her türlü yol yardım senaryosuna hazırlıklıyız.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { icon: Clock, t: "Hızlı Ulaşım", d: "GPS takibi ile en yakın ekip." },
                        { icon: Shield, t: "Sigortalı Taşıma", d: "Kaskolu güvence." },
                        { icon: MapPin, t: "Geniş Bölge", d: "Kocaeli & İstanbul Anadolu." },
                        { icon: CheckCircle2, t: "Uygun Fiyat", d: "Şeffaf fiyat politikası." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded hover:shadow-lg transition-shadow bg-slate-50">
                            <div className="bg-white p-3 rounded h-fit text-blue-800 shadow-sm"><item.icon size={24} /></div>
                            <div>
                                <h4 className="font-bold text-[#0f172a] text-lg">{item.t}</h4>
                                <p className="text-sm text-gray-500 mt-1">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
                <div className="relative h-[500px] w-full rounded overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1605218427368-232bc5023975?q=80&w=1000" className="object-cover w-full h-full" alt="Hakkımızda" />
                </div>
                {/* Yüzen Hesaplama */}
                <div className="absolute -bottom-10 -left-10 w-full max-w-sm hidden lg:block">
                    <CostCalculator />
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f172a] text-center">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Yolda Mı Kaldınız?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
                Endişelenmeyin. Tek bir telefonla ekibimiz yanınızda.
            </p>
            <a href="tel:905013338042" className="inline-block bg-white text-[#0f172a] px-10 py-4 rounded font-black text-xl hover:bg-blue-50 transition-colors">
                HEMEN ARA
            </a>
         </div>
      </section>
    </main>
  );
}