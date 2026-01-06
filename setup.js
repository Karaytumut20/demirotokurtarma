const fs = require("fs");
const path = require("path");
const https = require("https");

// --- AYARLAR ---
const imagesDir = path.join(__dirname, "public", "images");
const dataFilePath = path.join(__dirname, "lib", "data.ts");

// İndirilecek Resimler Listesi (Eski URL -> Yeni Dosya Adı)
const imagesToDownload = [
  {
    url: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000",
    filename: "oto-cekici.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    filename: "yol-yardim.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000",
    filename: "aku-takviye.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000",
    filename: "agir-vasita.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000",
    filename: "motosiklet.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=1000",
    filename: "sehirler-arasi.jpg",
  },
];

// --- YARDIMCI FONKSİYONLAR ---

// Klasör oluşturma
function ensureDirectoryExistence(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Klasör oluşturuldu: ${dirPath}`);
  }
}

// Resim indirme fonksiyonu
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`✅ İndirildi: ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}); // Hata olursa yarım dosyayı sil
        console.error(`❌ İndirme Hatası (${filename}): ${err.message}`);
        reject(err);
      });
  });
}

// lib/data.ts dosyasını güncelleme içeriği
const newDataContent = `
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

export const faqs = [
  { q: "Çekici hizmetiniz sigortalı mı?", a: "Evet, tüm taşımalarımız Axa Sigorta güvencesindedir." },
  { q: "Gece geç saatte arayabilir miyim?", a: "7/24 kesintisiz hizmet veriyoruz." },
  { q: "Ortalama varış süreniz nedir?", a: "Bölgemiz içinde ortalama 15-20 dakikadır." },
  { q: "Kredi kartı geçerli mi?", a: "Evet, mobil POS cihazımız mevcuttur." }
];

export const galleryImages = [
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800",
    "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=800",
    "https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=800",
    "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=800",
    "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
    "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=800",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800",
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=800"
];

// --- SEO BÖLGE SAYFALARI VERİSİ ---
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

// --- ANA İŞLEM AKIŞI ---
async function main() {
  console.log("🚀 Setup Başlatılıyor...");

  // 1. Resim Klasörünü Oluştur
  ensureDirectoryExistence(imagesDir);

  // 2. Resimleri İndir
  console.log("📥 Resimler indiriliyor...");
  for (const img of imagesToDownload) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (e) {
      console.log(`⚠️ ${img.filename} indirilemedi, devam ediliyor...`);
    }
  }

  // 3. lib/data.ts Dosyasını Güncelle
  console.log("📝 lib/data.ts güncelleniyor...");
  try {
    const libDir = path.dirname(dataFilePath);
    ensureDirectoryExistence(libDir);
    fs.writeFileSync(dataFilePath, newDataContent.trim(), "utf8");
    console.log("✅ lib/data.ts başarıyla güncellendi.");
  } catch (e) {
    console.error("❌ Dosya yazma hatası:", e);
  }

  console.log("\n🎉 TÜM İŞLEMLER TAMAMLANDI!");
  console.log(
    "👉 Artık resimler '/public/images' klasöründen yerel olarak çekiliyor."
  );
}

main();
