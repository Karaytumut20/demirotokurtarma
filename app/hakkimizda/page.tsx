"use client";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Target,
  History,
  Award,
  Clock,
} from "lucide-react";

export default function KurumsalPage() {
  return (
    <main className="bg-white text-slate-800">
      <PageBanner
        title="HAKKIMIZDA"
        image="https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1920"
      />

      <section className="py-16 lg:py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* YAZI ALANI */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
              <History size={20} /> <span>15 YILLIK TECRÜBE</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 lg:mb-8 leading-tight">
              Yol Arkadaşınız Olmaktan Gurur Duyuyoruz.
            </h2>
            <div className="space-y-4 lg:space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed">
              <p>
                Murat Demir - Demir Oto Kurtarma, 2009 yılında Kocaelinin
                Çayırova ilçesinde, tek bir çekici aracı ile faaliyetlerine
                başlamıştır. Kurulduğu ilk günden itibaren Önce Güven, Sonra
                Ticaret ilkesini benimseyen firmamız, bugün bölgenin en geniş
                araç filosuna sahip lider kurtarma şirketlerinden biri haline
                gelmiştir.
              </p>
              <p>
                Gebze, Şekerpınar, Darıca ve Tuzla gibi sanayinin ve trafiğin
                yoğun olduğu bölgelerde, binlerce başarılı operasyona imza
                attık. Sadece arızalı araçları değil; umutları ve güveni de
                taşıdığımızın bilincindeyiz. Bu nedenle filomuzu sürekli
                yeniliyor, teknolojiyi yakından takip ediyoruz.
              </p>
              <p>
                Ağır vasıta kurtarmadan, motosiklet transferine; tekne
                taşımacılığından çoklu araç transferine kadar geniş bir hizmet
                yelpazesi sunuyoruz. Resmi yetki belgelerimiz (K1, L1) ve uzman
                kadromuzla, sektörün standartlarını belirleyen firma olma
                yolunda emin adımlarla ilerliyoruz.
              </p>
            </div>
          </div>

          {/* RESİM ALANI (DÜZELTİLDİ) */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Dekoratif Mavi Arka Plan (Mobilde biraz küçülttük) */}
            <div className="absolute inset-0 lg:-inset-4 bg-blue-100 rounded-3xl transform rotate-3"></div>

            {/* Resim Çerçevesi: Mobilde 300px, Masaüstünde 500px yükseklik */}
            <div className="relative h-[300px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agir-vasita.jpg"
                alt="Hakkımızda - Demir Oto Kurtarma"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* İstatistik Kutusu (Mobilde gizli kalmaya devam ediyor, tablet ve üstünde görünür) */}
            <div className="absolute -bottom-5 -left-5 lg:-bottom-10 lg:-left-10 bg-white p-6 lg:p-8 rounded-xl shadow-xl border-l-8 border-blue-600 hidden md:block">
              <p className="text-4xl lg:text-5xl font-black text-[#0f172a] mb-1">
                10K+
              </p>
              <p className="text-xs lg:text-sm font-bold text-gray-500 uppercase">
                Tamamlanan Operasyon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Target size={48} className="text-red-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Misyonumuz
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yolda kalan her müşterimize, en zor anlarında en hızlı, güvenli ve
              ekonomik çözümü sunmak. Teknolojik altyapımızı sürekli
              geliştirerek, araç kurtarma ve yol yardım süreçlerini stresli bir
              deneyim olmaktan çıkarıp, profesyonel bir hizmet standardına
              dönüştürmek.
            </p>
          </div>
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-slate-100">
            <Award size={48} className="text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">
              Vizyonumuz
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Marmara Bölgesi başta olmak üzere, Türkiye genelinde kurumsal,
              izlenebilir ve standartları yüksek bir yol yardım ağı oluşturmak.
              Sektördeki kayıt dışılığı önleyerek, %100 müşteri memnuniyeti
              odaklı, çevreye duyarlı ve sürdürülebilir bir büyüme modeli
              sergilemek.
            </p>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl mb-12 lg:mb-16">
          <h2 className="text-3xl font-black text-[#0f172a]">Değerlerimiz</h2>
          <p className="text-gray-500 mt-4">
            Bizi biz yapan temel prensiplerimiz.
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <ShieldCheck
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Güvenilirlik</h3>
            <p className="text-gray-600 text-sm">
              Söz verdiğimiz saatte orada olur, anlaştığımız fiyattan şaşmayız.
              Şeffaflık en büyük sermayemizdir.
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <Clock
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Hız ve Dakiklik</h3>
            <p className="text-gray-600 text-sm">
              Zamanınızın değerli olduğunu biliyoruz. GPS destekli filo yönetim
              sistemimizle en kısa rotayı kullanırız.
            </p>
          </div>
          <div className="p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group">
            <Users
              size={48}
              className="text-gray-400 group-hover:text-blue-600 mb-4 transition-colors"
            />
            <h3 className="text-xl font-bold mb-3">Uzman Kadro</h3>
            <p className="text-gray-600 text-sm">
              Araçlarımız sadece şoförler tarafından değil, teknik bilgisi
              yüksek sertifikalı operatörler tarafından kullanılır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
