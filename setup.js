const fs = require("fs");
const path = require("path");

function writeFile(filePath, content) {
  const absolutePath = path.join(__dirname, filePath);
  const dir = path.dirname(absolutePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(absolutePath, content.trim(), "utf8");
  console.log(`✅ GÜNCELLENDİ: ${filePath}`);
}

// ------------------------------------------------------------------
// 1. DATA (AEO UYUMLU SIKÇA SORULAN SORULAR)
// ------------------------------------------------------------------

const libDataContent = `
import { Truck, Wrench, Battery, Car, MapPin, ShieldCheck, PhoneCall, Anchor, Bike, Globe } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Profesyonel Oto Çekici",
    shortDesc: "Çayırova, Gebze, Şekerpınar ve Tuzla bölgesinde 7/24 sigortalı, kaskolu ve garantili oto çekici hizmeti.",
    longDesc: "Yolda kalmak her sürücünün korkulu rüyasıdır, ancak Demir Oto Kurtarma ile bu durum bir krize dönüşmez. 15 yıllık tecrübemizle, lüks spor araçlardan standart binek araçlara, SUV modellerden hafif ticari araçlara kadar her türlü taşıtı titizlikle taşıyoruz.",
    icon: Truck,
    image: "/images/oto-cekici.jpg",
    features: ["Axa Sigorta Güvencesi", "GPS Takip Sistemi", "Hidrolik Kayar Kasa", "Yumuşak Bağlantı", "7/24 Canlı Destek"]
  },
  {
    id: "yol-yardim",
    title: "Acil Yol Yardım",
    shortDesc: "Lastik değişimi, yakıt ikmali ve basit mekanik arızalar için yerinde mobil servis hizmeti.",
    longDesc: "Her arıza çekici gerektirmez. Mobil Yol Yardım ekiplerimiz, tam donanımlı servis araçlarıyla bulunduğunuz konuma gelir; lastik tamiri, akü takviyesi ve yakıt ikmali gibi işlemleri yerinde gerçekleştirir.",
    icon: Wrench,
    image: "/images/yol-yardim.jpg",
    features: ["Yerinde Lastik Tamiri", "Yakıt İkmali", "Mobil Mekanik Servis", "Arıza Tespit", "Ekonomik Çözüm"]
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye & Değişim",
    shortDesc: "Aracınızın beynine zarar vermeyen profesyonel cihazlarla akü takviye ve yerinde değişim.",
    longDesc: "Profesyonel Booster cihazlarımızla, aracınızın elektronik aksamına zarar vermeden akü takviyesi yapıyoruz. Akünüz ömrünü tamamladıysa, yerinde sıfır akü değişimi ve garanti aktivasyonu sağlıyoruz.",
    icon: Battery,
    image: "/images/aku-takviye.jpg",
    features: ["Voltaj Korumalı Takviye", "Yerinde Akü Değişimi", "Alternatör Ölçümü", "2 Yıl Garanti"]
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta Kurtarma",
    shortDesc: "Kamyon, Tır, Otobüs ve İş Makineleri için ağır tonajlı vinç ve kurtarıcı hizmeti.",
    longDesc: "Gebze ve Şekerpınar sanayi bölgelerinde, 60 tona kadar kaldırma kapasitesine sahip vinçlerimizle yolda kalan tır, kamyon ve iş makinelerini güvenle kurtarıyoruz.",
    icon: Truck,
    image: "/images/agir-vasita.jpg",
    features: ["60 Ton Kapasite", "Gözlüklü Çekici", "Vinçli Kurtarma", "Şaft Sökme/Takma"]
  },
  {
    id: "motosiklet",
    title: "Motosiklet Transfer",
    shortDesc: "Motosikletler için özel aparatlı, kapalı veya açık kasa güvenli taşıma.",
    longDesc: "Motosikletlerinizi özel ön tekerlek sabitleme aparatları ve kapalı kasa araçlarımızla, çizilmeden ve devrilmeden istediğiniz noktaya taşıyoruz.",
    icon: Bike,
    image: "/images/motosiklet.jpg",
    features: ["Özel Sabitleme Aparatı", "Kapalı Kasa", "Çizilmez Ekipman", "Devrilme Önleyici"]
  },
  {
    id: "sehirler-arasi",
    title: "Şehirler Arası Transfer",
    shortDesc: "Türkiye'nin 81 iline sigortalı, çoklu veya tekli araç taşıma ve transfer hizmeti.",
    longDesc: "Sadece Kocaeli sınırları içinde değil, Türkiye'nin her yerine araç transferi yapıyoruz. Tatil beldelerine araç sevkiyatı, şehir değişikliği veya araç alım-satım durumlarında çoklu çekicilerimizle uygun fiyatlı taşıma sağlıyoruz. Şehirler arası araç taşımacılığında lider firmayız.",
    icon: Globe,
    image: "/images/sehirler-arasi.jpg",
    features: ["81 İle Transfer", "Çoklu Taşıma İndirimi", "Sigortalı Sevkiyat", "Randevulu Sistem"]
  }
];

export const processSteps = [
    { title: "Bizi Arayın", desc: "7/24 çağrı merkezimize ulaşın.", icon: PhoneCall },
    { title: "Konum Paylaşın", desc: "WhatsApp ile konumunuzu iletin.", icon: MapPin },
    { title: "Hızlı Varış", desc: "En yakın ekibimiz yola çıksın.", icon: Truck },
    { title: "Güvenli İşlem", desc: "Aracınız sigortalı taşınsın.", icon: ShieldCheck }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik", "Kartal"
];

export const testimonials = [
    { name: "Murat Yılmaz", role: "Lojistik Müdürü", text: "Şekerpınar gişelerde tırımız arızalandı. Gece 03:00'te aradım, 20 dakikada geldiler.", stars: 5 },
    { name: "Selin Demir", role: "Mimar", text: "Lastiğim patladı, hemen gelip değiştirdiler. Çok nazik ve profesyoneldi.", stars: 5 },
    { name: "Kaan Öztürk", role: "Galeri Sahibi", text: "3 aracı İstanbul'dan Ankara'ya sorunsuz gönderdim. Fiyatlar çok makul.", stars: 5 }
];

export const blogPosts = [
  {
    slug: "yolda-kalinca-yapilmasi-gerekenler",
    title: "Yolda Kaldığınızda Hayat Kurtaran 5 Altın Kural",
    excerpt: "Aracınız arızalandığında paniğe kapılmayın. Güvenliğinizi sağlamak için yapmanız gerekenler.",
    date: "24 Ekim 2024",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000"
  },
  {
    slug: "kis-aylarinda-aku-bakimi",
    title: "Kış Aylarında Akü Bakımı",
    excerpt: "Soğuk havalar akülerin düşmanıdır. Ömrünü uzatmak için ipuçları.",
    date: "12 Kasım 2024",
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000"
  },
  {
    slug: "cekici-cagirirken-dikkat",
    title: "Çekici Çağırırken Dolandırılmayın!",
    excerpt: "Sektörde korsan çekicilere dikkat. Kaskolu taşıma belgesinin önemi.",
    date: "05 Aralık 2024",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000"
  }
];

// AEO ve SEO Odaklı Sıkça Sorulan Sorular
export const faqs = [
  {
    q: "Çayırova ve Gebze bölgesinde en yakın çekici ne kadar sürede gelir?",
    a: "Çayırova, Gebze, Şekerpınar ve Mutlukent bölgelerinde sürekli hareket halinde olan çekici filomuz sayesinde, çağrınızı takiben ortalama 15-20 dakika içerisinde yanınızdayız."
  },
  {
    q: "Şekerpınar veya Dilovası otobanında yolda kaldım, ne yapmalıyım?",
    a: "Öncelikle güvenliğinizi alıp reflektör kullanın. 7/24 hizmet veren firmamız, Kuzey Marmara ve TEM otoyolu üzerindeki arızalara Şekerpınar gişeler ve Dilovası mevkisinden anında müdahale etmektedir."
  },
  {
    q: "Tuzla, Pendik ve Kartal bölgelerine oto kurtarma hizmetiniz var mı?",
    a: "Evet, Kocaeli (Gebze, Darıca) merkezli olmamıza rağmen Tuzla, Pendik ve Kartal gibi İstanbul Anadolu Yakası ilçelerine de hızlı çekici ve yol yardım hizmeti sunuyoruz."
  },
  {
    q: "Oto çekici fiyatları nasıl belirleniyor? Gebze - İstanbul arası ne kadar?",
    a: "Fiyatlar mesafeye ve araç tipine (binek, SUV, ticari) göre değişir. Sitemizdeki 'Fiyat Hesapla' modülünü kullanarak Gebze-İstanbul veya şehir içi taşıma ücretini anında öğrenebilirsiniz."
  },
  {
    q: "Darıca'da gece açık lastikçi veya akü takviye hizmetiniz var mı?",
    a: "Kesinlikle. Darıca, Bayramoğlu ve Eskihisar bölgelerinde 7/24 nöbetçi mobil yol yardım aracımızla lastik tamiri ve akü takviyesi hizmeti veriyoruz."
  },
  {
    q: "Aracım çekilirken sigortalı mı?",
    a: "Evet, taşıdığımız tüm araçlar yükleme anından teslim anına kadar Axa Sigorta güvencesiyle %100 kaskolu (taşıyıcı sorumluluk sigortası) olarak transfer edilmektedir."
  }
];

export const locationPages = [
  {
    slug: "cayirova-cekici",
    title: "Çayırova Çekici & Oto Kurtarma",
    seoTitle: "Çayırova Çekici - En Yakın Oto Kurtarma | 15 Dk'da Yanınızda",
    desc: "Çayırova bölgesinde 7/24 acil çekici ve oto kurtarma hizmeti. Akse, Özgürlük, Emek mahalleleri ve E-5 yan yol üzerinde en hızlı yol yardım.",
    content: {
      intro: "Kocaeli'nin sanayi kalbi Çayırova'da yolda mı kaldınız? Demir Oto Kurtarma olarak, Çayırova'nın tüm mahallelerine ve bağlantı yollarına hakim uzman kadromuzla hizmetinizdeyiz.",
      details: "Özellikle E-5 yan yol, TEM Otoyolu bağlantıları ve Şekerpınar gişeler bölgesinde konumlanan araçlarımızla çağrınıza en hızlı yanıtı veriyoruz. Akse Mahallesi, Cumhuriyet Mahallesi veya sanayi bölgelerinde yaşanan arızalarda, ortalama 15 dakika varış süresi garantisi sunuyoruz.",
      features: ["Çayırova En Yakın Çekici", "Akse Mahallesi Yol Yardım", "Çayırova Oto Sanayi Çekici", "7/24 Nöbetçi Kurtarıcı", "Uygun Fiyatlı Çekici"]
    }
  },
  {
    slug: "gebze-cekici",
    title: "Gebze Çekici & Yol Yardım",
    seoTitle: "Gebze Çekici - 7/24 Acil Oto Kurtarıcı | Gebze OSB Yol Yardım",
    desc: "Gebze merkez, GOSB, Plastikçiler OSB ve tüm köylerde profesyonel oto çekici. Tır, kamyon ve otomobil kurtarma hizmeti.",
    content: {
      intro: "Gebze'nin yoğun sanayi trafiğinde ve kırsal bölgelerinde yaşayabileceğiniz her türlü araç arızasında Demir Oto Kurtarma yanınızda.",
      details: "Gebze Organize Sanayi Bölgesi (GOSB), Sultan Orhan Mahallesi, Tatlıkuyu ve Beylikbağı gibi yoğun bölgelerde 15 dakikada yanınızdayız. Ağır vasıta ve binek araç filomuzla Gebze'nin lider çekici firmasıyız.",
      features: ["Gebze Merkez Çekici", "GOSB Yol Yardım", "Gebze Ağır Vasıta Kurtarma", "Tatlıkuyu Çekici Hizmeti", "Kirazpınar Oto Kurtarıcı"]
    }
  },
  {
    slug: "sekerpinar-cekici",
    title: "Şekerpınar Çekici Hizmetleri",
    seoTitle: "Şekerpınar Çekici - Otoban Gişeler ve Sanayi Bölgesi Kurtarıcı",
    desc: "Şekerpınar gişeler, TEM bağlantı yolu ve sanayi bölgesinde 7/24 çekici. Tır, kamyon ve araba çekme hizmeti.",
    content: {
      intro: "Lojistiğin kalbi Şekerpınar'da, otoban gişeleri ve bağlantı yollarındaki arızalara anında müdahale ediyoruz.",
      details: "Bankalar Caddesi, Şekerpınar Gişeler mevkii ve sanayi kuruluşlarının olduğu bölgelerde nöbetçi ekiplerimiz bulunmaktadır. Özellikle ağır ticari araçlar ve tırlar için büyük vinçli kurtarıcılarımız mevcuttur.",
      features: ["Şekerpınar Otoban Çekici", "Gişeler Bölgesi Yol Yardım", "Ağır Ticari Kurtarma", "Şekerpınar Oto Sanayi", "Tır Çekici"]
    }
  },
  {
    slug: "darica-yol-yardim",
    title: "Darıca Yol Yardım & Çekici",
    seoTitle: "Darıca Yol Yardım ve Çekici - Bayramoğlu ve Merkez Bölgesi",
    desc: "Darıca Bayramoğlu, Osmangazi, Nenehatun ve merkezde güvenilir çekici. Lastik, akü ve araç taşıma hizmeti.",
    content: {
      intro: "Darıca'nın sahil şeridinden dar sokaklarına kadar her noktaya ulaşabilen kompakt çekicilerimizle hizmetinizdeyiz.",
      details: "Bayramoğlu, Osmangazi, Kazım Karabekir ve Nenehatun mahallelerinde 7/24 aktifiz. Sadece çekici değil; lastik patlaması veya akü bitmesi gibi durumlarda Mobil Yol Yardım aracımızla yerinde onarım sağlıyoruz.",
      features: ["Darıca Sahil Çekici", "Bayramoğlu Yol Yardım", "Osmangazi Oto Kurtarma", "Yerinde Akü Değişimi", "Darıca Oto Kurtarıcı"]
    }
  },
  {
    slug: "dilovasi-kurtarici",
    title: "Dilovası Kurtarıcı & Vinç",
    seoTitle: "Dilovası Kurtarıcı - İmes, Mermerciler ve Liman Çekici",
    desc: "Dilovası rampası, İmes OSB, Mermerciler Sanayi ve Liman bölgesinde profesyonel vinç ve kurtarıcı hizmeti.",
    content: {
      intro: "Sanayinin ve limanların merkezi Dilovası'nda, iş makineleri ve ağır vasıta kurtarma konusunda uzmanız.",
      details: "Dilovası Rampası, Kuzey Marmara Otoyolu bağlantıları, İmes ve Mermerciler Sanayi Sitesi içinde yaşanabilecek kazalara karşı vinçli kurtarıcılarımızla müdahale ediyoruz. Fabrikalar arası araç transferi de yapmaktayız.",
      features: ["Dilovası Rampa Çekici", "İmes Sanayi Kurtarıcı", "İş Makinesi Taşıma", "Liman Bölgesi Yol Yardım", "Kuzey Marmara Çekici"]
    }
  }
];
`;

// ------------------------------------------------------------------
// 2. PAGE.TSX (Tasarım Revizesi + FAQ Schema)
// ------------------------------------------------------------------

const pageContent = `
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ProcessSection from "@/components/ProcessSection";
import CallToAction from "@/components/CallToAction";
import CostCalculator from "@/components/CostCalculator";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import { Shield, Trophy, Clock, Users, CheckCircle2, MapPin, Navigation, Car } from "lucide-react";
import Script from "next/script";
import { faqs } from "@/lib/data"; // FAQ verisi import edildi

export default function Home() {

  // FAQ Schema Oluşturma
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-0 overflow-x-hidden">
      {/* FAQ Schema Inject */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      <div className="relative z-30 -mt-10 sm:-mt-24 container mx-auto px-3 sm:px-6 mb-16 sm:mb-24">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-12 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-900"></div>
          <div className="text-center mb-5 sm:mb-8 mt-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
              Ne Kadar Öderim?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 sm:mt-2">
              Mesafenizi girin, tahmini ücreti hemen öğrenin.
            </p>
          </div>
          <CostCalculator />
        </div>
      </div>

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
                poster="https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1000"
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
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">HİZMET AĞIMIZ</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Bölgesel Hizmet Detayları</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Kocaeli ve İstanbul Anadolu Yakası'nda sunduğumuz ayrıcalıklı hizmetler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Kart 1: Gebze & Sanayi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Gebze & Sanayi Bölgeleri</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Gebze OSB (GOSB)</strong>, Plastikçiler OSB ve Sultan Orhan bölgesinde 7/24 nöbetçi çekici. Sanayi kuruluşlarına özel kurumsal anlaşmalı araç taşıma.
              </p>
            </div>

            {/* Kart 2: Otoban & Yol Yardım */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                <Navigation size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Otoban Yol Yardım</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Şekerpınar gişeler</strong>, Kuzey Marmara ve TEM otoyolu bağlantı noktalarında anında müdahale. Yolda kalma durumlarında en hızlı erişim.
              </p>
            </div>

            {/* Kart 3: Anadolu Yakası */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                <Car size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Anadolu Yakası Transfer</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Tuzla, Pendik, Kartal</strong> ve Maltepe ilçelerine hızlı çekici desteği. Şehirler arası araç transferinde güvenilir çözüm ortağınız.
              </p>
            </div>

            {/* Kart 4: 7/24 Destek */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-200 group">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">7/24 Acil Destek</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sadece çekici değil; <strong>Darıca</strong> ve <strong>Dilovası</strong> bölgelerinde yerinde akü takviyesi, lastik değişimi ve yakıt ikmali hizmeti.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
`;

// ------------------------------------------------------------------
// DOSYALARI YAZDIR
// ------------------------------------------------------------------

console.log("🚀 Dosyalar güncelleniyor...");

writeFile("lib/data.ts", libDataContent);
writeFile("app/page.tsx", pageContent);

console.log("✨ Tüm işlemler başarıyla tamamlandı!");
