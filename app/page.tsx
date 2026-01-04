import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import ProcessSection from '@/components/ProcessSection';
import CallToAction from '@/components/CallToAction';
import CostCalculator from '@/components/CostCalculator';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { CheckCircle2, Shield, Trophy, Clock, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-0">
      <HeroSection />

      {/* --- FİYAT HESAPLAMA --- */}
      {/* Mobilde margin-top daha az, padding daha kompakt */}
      <div className="relative z-30 -mt-16 sm:-mt-24 container mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-12 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-900"></div>
            <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-3xl font-black text-[#0f172a]">Ne Kadar Öderim?</h2>
                <p className="text-xs sm:text-base text-slate-500 mt-1 sm:mt-2">Mesafenizi girin, tahmini ücreti hemen öğrenin.</p>
            </div>
            <CostCalculator />
        </div>
      </div>

      <ServiceSection />

      {/* --- İSTATİSTİKLER --- */}
      <div className="bg-[#0f172a] text-white py-12 sm:py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center relative z-10">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4"><Clock size={24} /></div>
                <p className="text-2xl sm:text-4xl font-black mb-1">15 Dk</p>
                <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Ort. Varış</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4"><Users size={24} /></div>
                <p className="text-2xl sm:text-4xl font-black mb-1">10K+</p>
                <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Mutlu Müşteri</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4"><Trophy size={24} /></div>
                <p className="text-2xl sm:text-4xl font-black mb-1">15 Yıl</p>
                <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Tecrübe</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4"><Shield size={24} /></div>
                <p className="text-2xl sm:text-4xl font-black mb-1">%100</p>
                <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">Sigortalı</p>
            </div>
         </div>
      </div>

      <ProcessSection />

      {/* --- KURUMSAL --- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-600"></span> KURUMSAL
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
                    Sadece Araç Değil, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Güven Taşıyoruz.</span>
                </h2>
                <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                    <p>
                        Demir Oto Kurtarma olarak, Çayırova, Gebze ve Şekerpınar bölgesinin en köklü kurtarma firmalarından biriyiz. Sektördeki 15 yıllık tecrübemizle, yolda kalan binlerce sürücüye "Hızır" gibi yetiştik.
                    </p>
                    <p>
                        Sıradan bir çekici hizmetinden fazlasını sunuyoruz. Aracınızın kıymetini biliyor, kendi aracımız gibi özenle taşıyoruz. Tüm operasyonlarımızda <strong className="text-slate-900">Axa Sigorta</strong> güvencesi sunarak, olası riskleri sıfıra indiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
                    {["Resmi Yetki Belgeli", "7/24 Canlı Destek", "Geniş Araç Filosu", "Sabit Fiyat Garantisi"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 font-bold text-slate-800 text-sm sm:text-base">
                            <CheckCircle2 className="text-blue-600 shrink-0" size={20} /> {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group order-1 lg:order-2">
                <Image
                    src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    alt="Hakkımızda"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-base sm:text-lg mb-1">Bölgenin Lideri</p>
                    <p className="text-xs sm:text-sm text-gray-300">Gebze - Çayırova hattında en hızlı müdahale süresine sahibiz.</p>
                </div>
            </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      <CallToAction />
    </main>
  );
}