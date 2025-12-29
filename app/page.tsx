import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import CallToAction from '@/components/CallToAction';
import { Shield, Clock, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />

      {/* İstatistik / Güven Bandı */}
      <div className="bg-orange-600 text-white py-12">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { val: "15+", label: "Yıllık Tecrübe" },
                { val: "5000+", label: "Mutlu Müşteri" },
                { val: "30 Dk", label: "Ort. Varış Süresi" },
                { val: "7/24", label: "Kesintisiz Hizmet" }
            ].map((s, i) => (
                <div key={i}>
                    <p className="text-3xl md:text-4xl font-black">{s.val}</p>
                    <p className="text-sm md:text-base font-medium opacity-90">{s.label}</p>
                </div>
            ))}
         </div>
      </div>

      <ServiceSection />

      {/* Neden Biz? */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">KURUMSAL</span>
                <h2 className="text-4xl font-black text-slate-900 mt-2 mb-6">Neden Demir Oto Kurtarma?</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sektördeki 15 yıllık tecrübemizle, sadece araç taşımıyoruz; güven taşıyoruz. Konya'nın en geniş araç filosuna sahibiz ve her türlü yol yardım senaryosuna hazırlıklıyız.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { icon: Clock, t: "Hızlı Ulaşım", d: "GPS takibi ile en yakın ekip yönlendirilir." },
                        { icon: Shield, t: "Sigortalı Taşıma", d: "Aracınız taşıma kaskosu ile güvendedir." },
                        { icon: Award, t: "Uzman Kadro", d: "Sertifikalı ve tecrübeli operatörler." },
                        { icon: CheckCircle2, t: "Uygun Fiyat", d: "Sürpriz ek ücret yok, şeffaf fiyat." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm h-fit text-orange-600"><item.icon size={24} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.t}</h4>
                                <p className="text-sm text-gray-500">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000" className="object-cover w-full h-full" alt="Hakkımızda" />
            </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}