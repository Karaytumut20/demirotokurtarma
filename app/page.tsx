import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import ProcessSection from '@/components/ProcessSection';
import CallToAction from '@/components/CallToAction';
import CostCalculator from '@/components/CostCalculator';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { CheckCircle2, Shield, Trophy, Clock, Users, Star, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-0">
      <HeroSection />

      {/* --- FİYAT HESAPLAMA --- */}
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

      {/* --- KURUMSAL (VİDEOLU TASARIM - MOBİL DÜZENLEME) --- */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

            {/* SOL TARAF: METİN */}
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

            {/* SAĞ TARAF: VİDEO ALANI */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                {/* Arka Plan Dekoru */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

                {/* Ana Video Kartı */}
                <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        suppressHydrationWarning={true}
                        className="object-cover w-full h-full"
                        poster="https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1000"
                    >
                        <source src="/aracvideo.mp4" type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>

                    {/* Alt Metin - MOBİL DÜZENLEME BURADA */}
                    <div className="absolute bottom-0 left-0 p-4 sm:p-8 w-full pointer-events-none">
                        {/* Mobilde font küçük (text-base), masaüstünde büyük (sm:text-xl) */}
                        <p className="text-white font-black text-base sm:text-xl mb-1">Bölgenin Lideri</p>

                        {/* Bu kısım mobilde gizli (hidden), sadece sm ve üzeri ekranlarda görünür (sm:flex) */}
                        <div className="hidden sm:flex items-center gap-2">
                           <div className="flex -space-x-2">
                              {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                   <Users size={14} className="text-slate-500" />
                                </div>
                              ))}
                           </div>
                           <p className="text-slate-300 text-xs font-medium">+10.000 Mutlu Müşteri</p>
                        </div>
                    </div>
                </div>

                {/* Yüzen Rozet 1: Tecrübe */}
                <div className="absolute -top-6 -left-4 sm:top-10 sm:-left-10 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce hover:pause">
                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-slate-900 leading-none">15+</p>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Yıllık Tecrübe</p>
                    </div>
                </div>

                {/* Yüzen Rozet 2: Hizmet */}
                <div className="absolute -bottom-6 -right-2 sm:bottom-10 sm:-right-8 bg-[#0f172a] p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white animate-pulse">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-lg font-black text-white leading-none">7/24</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kesintisiz Hizmet</p>
                    </div>
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