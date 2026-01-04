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
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <HeroSection />

      {/* --- FİYAT HESAPLAMA (CENTERED) --- */}
      {/* Hero'nun hemen altına, tüm dikkati çekecek şekilde yerleştirildi */}
      <div className="relative z-30 -mt-24 container mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-900"></div>
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#0f172a]">Ne Kadar Öderim?</h2>
                <p className="text-slate-500 mt-2">Sürpriz fiyatlarla karşılaşmayın. Mesafenizi girin, tahmini ücreti hemen öğrenin.</p>
            </div>
            <CostCalculator />
        </div>
      </div>

      <ServiceSection />

      {/* --- İSTATİSTİKLER & GÜVEN --- */}
      <div className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform"><Clock size={32} /></div>
                <p className="text-4xl font-black mb-1">15 Dk</p>
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Ort. Varış</p>
            </div>
            <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform"><Users size={32} /></div>
                <p className="text-4xl font-black mb-1">10.000+</p>
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Mutlu Müşteri</p>
            </div>
            <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform"><Trophy size={32} /></div>
                <p className="text-4xl font-black mb-1">15 Yıl</p>
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Tecrübe</p>
            </div>
            <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform"><Shield size={32} /></div>
                <p className="text-4xl font-black mb-1">%100</p>
                <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Sigortalı</p>
            </div>
         </div>
      </div>

      <ProcessSection />

      {/* --- DETAYLI HAKKIMIZDA (TEXT HEAVY) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-600"></span> KURUMSAL
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
                    Sadece Araç Değil, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Güven Taşıyoruz.</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Demir Oto Kurtarma olarak, Çayırova, Gebze ve Şekerpınar bölgesinin en köklü kurtarma firmalarından biriyiz. Sektördeki 15 yıllık tecrübemizle, yolda kalan binlerce sürücüye "Hızır" gibi yetiştik.
                    </p>
                    <p>
                        Sıradan bir çekici hizmetinden fazlasını sunuyoruz. Aracınızın kıymetini biliyor, kendi aracımız gibi özenle taşıyoruz. Tüm operasyonlarımızda <strong className="text-slate-900">Axa Sigorta</strong> güvencesi sunarak, olası riskleri sıfıra indiriyoruz.
                    </p>
                    <p>
                        Filomuzdaki araçların tamamı 2020 model ve üzeri olup, düzenli bakımları yapılmaktadır. Operatörlerimiz SRC ve Psikoteknik belgelerine sahip, alanında uzman kişilerden oluşur.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {["Resmi Yetki Belgeli", "7/24 Canlı Destek", "Geniş Araç Filosu", "Sabit Fiyat Garantisi"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                            <CheckCircle2 className="text-blue-600" size={20} /> {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                    src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    alt="Hakkımızda"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-bold text-lg mb-2">Bölgenin Lideri</p>
                    <p className="text-sm text-gray-300">Gebze - Çayırova hattında en hızlı müdahale süresine sahibiz.</p>
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