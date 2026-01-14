import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";
import CostCalculator from "@/components/CostCalculator";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import {
  Shield,
  Trophy,
  Clock,
  Users,
  CheckCircle2,
  MapPin,
  Navigation,
  Car,
} from "lucide-react";
import { faqs } from "@/lib/data";

export default function Home() {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-0 overflow-x-hidden">
      {/* FAQ Schema - Standart Script Etiketiyle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      <ServiceSection />

      {/* İstatistikler */}
      <div className="bg-[#0f172a] text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-12 text-center relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Clock size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">15 Dk</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Ort. Varış
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Users size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">10K+</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Mutlu Müşteri
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Trophy size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">15 Yıl</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Tecrübe
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <Shield size={24} className="sm:w-8 sm:h-8" />
            </div>
            <p className="text-2xl sm:text-4xl font-black mb-1">%100</p>
            <p className="text-[10px] sm:text-xs text-blue-200 font-bold uppercase tracking-widest">
              Sigortalı
            </p>
          </div>
        </div>
      </div>

      <ProcessSection />

      <section className="py-12 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span> KURUMSAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] mt-4 mb-6 leading-tight">
              Sadece Araç Değil, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Güven Taşıyoruz.
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-lg leading-relaxed">
              <p>
                Demir Oto Kurtarma olarak, Çayırova, Gebze ve Şekerpınar
                bölgesinin en köklü kurtarma firmalarından biriyiz. 15 yıllık
                tecrübemizle yanınızdayız.
              </p>
              <p>
                Tüm operasyonlarımızda{" "}
                <strong className="text-slate-900">Axa Sigorta</strong>{" "}
                güvencesi sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                "Resmi Yetki Belgeli",
                "7/24 Canlı Destek",
                "Geniş Araç Filosu",
                "Sabit Fiyat Garantisi",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-bold text-slate-800 text-sm"
                >
                  <CheckCircle2 className="text-blue-600 shrink-0" size={18} />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative h-[300px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning={true}
                className="object-cover w-full h-full"
              >
                <source src="/aracvideo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-white font-black text-lg mb-1">
                  Bölgenin Lideri
                </p>
                <p className="text-slate-300 text-xs font-medium">
                  +10.000 Mutlu Müşteri
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />

      {/* SEO ve Bilgi Alanı - Tasarım Revizesi (Grid Layout) */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              HİZMET AĞIMIZ
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Bölgesel Hizmet Detayları
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Kocaeli ve İstanbul Anadolu Yakası'nda sunduğumuz ayrıcalıklı
              hizmetler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kart 1: Gebze & Sanayi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Gebze & Sanayi Bölgeleri
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Gebze OSB (GOSB)</strong>, Plastikçiler OSB ve Sultan
                Orhan bölgesinde 7/24 nöbetçi çekici. Sanayi kuruluşlarına özel
                kurumsal anlaşmalı araç taşıma.
              </p>
            </div>

            {/* Kart 2: Otoban & Yol Yardım */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                <Navigation size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Otoban Yol Yardım
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Şekerpınar gişeler</strong>, Kuzey Marmara ve TEM
                otoyolu bağlantı noktalarında anında müdahale. Yolda kalma
                durumlarında en hızlı erişim.
              </p>
            </div>

            {/* Kart 3: Anadolu Yakası */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                <Car size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Anadolu Yakası Transfer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Tuzla, Pendik, Kartal</strong> ve Maltepe ilçelerine
                hızlı çekici desteği. Şehirler arası araç transferinde güvenilir
                çözüm ortağınız.
              </p>
            </div>

            {/* Kart 4: 7/24 Destek */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                7/24 Acil Destek
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sadece çekici değil; <strong>Darıca</strong> ve{" "}
                <strong>Dilovası</strong> bölgelerinde yerinde akü takviyesi,
                lastik değişimi ve yakıt ikmali hizmeti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
