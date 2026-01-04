import { Truck, Wrench, Battery, Car, MapPin, ShieldCheck, PhoneCall, Anchor, Bike } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Profesyonel Oto Çekici",
    shortDesc: "Çayırova, Gebze, Şekerpınar ve Tuzla bölgesinde 7/24 sigortalı, kaskolu ve garantili oto çekici hizmeti.",
    longDesc: "Yolda kalmak her sürücünün korkulu rüyasıdır, ancak Demir Oto Kurtarma ile bu durum bir krize dönüşmez. 15 yıllık tecrübemizle, lüks spor araçlardan standart binek araçlara, SUV modellerden hafif ticari araçlara kadar her türlü taşıtı büyük bir titizlikle taşıyoruz. Araçlarınız, özel hidrolik kayar kasa sistemine sahip son model çekicilerimizle, yerinden milim oynatılmadan yüklenir. Taşıma sürecinde aracınız, firmamızın 'Tam Kapsamlı Taşıma Sigortası' güvencesi altındadır. Operatörlerimiz, aracınızın şasesine veya kaportasına zarar vermeyecek özel bağlantı ekipmanları kullanır. Gece veya gündüz fark etmeksizin, GPS takipli araçlarımızla konumunuza en yakın ekibimizi 15 dakika içerisinde yönlendiriyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000",
    features: ["Axa Sigorta Güvencesi", "GPS Takip Sistemi", "Hidrolik Kayar Kasa", "Yumuşak Bağlantı Aparatları", "7/24 Canlı Destek", "Şehirler Arası Transfer"]
  },
  {
    id: "yol-yardim",
    title: "Acil Yol Yardım",
    shortDesc: "Lastik değişimi, yakıt ikmali ve basit mekanik arızalar için yerinde mobil servis hizmeti.",
    longDesc: "Her arıza çekici gerektirmez. Bazen patlayan bir lastik, biten bir akü veya tükenen yakıt sizi yolda bırakabilir. Demir Oto Kurtarma 'Mobil Yol Yardım' ekipleri, tam donanımlı servis araçlarıyla bulunduğunuz konuma gelir. Lastik tamiri, stepne değişimi, yakıt ikmali, motor suyu takviyesi gibi işlemleri yerinde gerçekleştirerek sizi en kısa sürede yolunuza döndürürüz. Bu hizmetimiz, çekici maliyetinden tasarruf etmenizi sağlar ve zaman kazandırır. Ekiplerimiz, temel mekanik arızaları tespit edebilecek teknik bilgiye ve diyagnostik cihazlara sahiptir.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    features: ["Yerinde Lastik Tamiri", "Yakıt İkmali (Benzin/Dizel)", "Mobil Mekanik Servis", "Arıza Tespit (Diyagnostik)", "7/24 Ulaşılabilirlik", "Ekonomik Çözüm"]
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye & Değişim",
    shortDesc: "Aracınızın beynine zarar vermeyen profesyonel cihazlarla akü takviye ve yerinde değişim.",
    longDesc: "Soğuk havalarda veya açık unutulan farlar nedeniyle biten aküler için profesyonel çözüm sunuyoruz. Kullandığımız 'Booster' cihazları, yeni nesil araçların hassas elektronik beyin (ECU) sistemlerine zarar vermeyecek şekilde voltaj düzenlemesi yapar. Piyasadaki amatör takviye yöntemlerinin aksine, voltaj dalgalanmalarını önleyen cihazlarımızla aracınızı güvenle çalıştırıyoruz. Ayrıca, akünüzün ömrünü tamamladığı durumlarda, aracınıza uygun amper ve modelde (Varta, Mutlu, İnci vb.) sıfır akü getirip montajını ve garanti aktivasyonunu yerinde yapıyoruz.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000",
    features: ["Voltaj Korumalı Takviye", "Yerinde Akü Değişimi", "Alternatör Ölçümü", "Kaçak Akım Testi", "Marka Akü Seçenekleri", "2 Yıl Garanti"]
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta Kurtarma",
    shortDesc: "Kamyon, Tır, Otobüs ve İş Makineleri için ağır tonajlı vinç ve kurtarıcı hizmeti.",
    longDesc: "Gebze ve Şekerpınar sanayi bölgelerinin kalbinde, ağır sanayinin yükünü taşıyoruz. 60 tona kadar kaldırma ve çekme kapasitesine sahip özel vinçlerimiz ve ağır vasıta çekicilerimizle; yolda kalan tır, kamyon, otobüs ve iş makinelerine müdahale ediyoruz. Çamura saplanan, devrilen veya makaslayan ağır vasıtalar, uzman 'Kurtarma Operatörlerimiz' tarafından matematiksel hesaplamalarla, araca ek hasar vermeden kurtarılır. Filomuzda bulunan 'Gözlüklü Çekici' sistemlerimizle, şaft sökülmesine gerek kalmadan güvenli taşıma yapabiliyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000",
    features: ["60 Ton Kapasite", "Gözlüklü Çekici", "Vinçli Kurtarma", "Şaft Sökme/Takma", "Hava Yastığı Desteği", "Sanayi Odaklı Hizmet"]
  },
  {
    id: "tekne-tasima",
    title: "Tekne & Yat Taşıma",
    shortDesc: "Tekne ve yatlarınız için özel römorklu, sigortalı transfer hizmeti.",
    longDesc: "Deniz araçlarınızın karadaki transferi için özel donanımlı araçlarımızla hizmetinizdeyiz. 12 metreye kadar olan tekne ve yatlarınızı, marinadan marinaya, tersaneye veya kışlama alanlarına güvenle taşıyoruz. Tekne gövdesine (karina) zarar vermeyen özel destek pedleri ve sarsıntı önleyici havalı süspansiyon sistemine sahip römorklarımızla, tekneniz dalgalardaki kadar güvende. Taşıma öncesi 'Yol İzin Belgesi' ve 'Geniş Araç Eskort' hizmetlerini de profesyonel ekibimiz organize etmektedir.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1000",
    features: ["Özel Tekne Römorku", "Karina Koruma Sistemi", "Sigortalı Transfer", "Tüm Marinalara Hizmet", "İzin ve Eskort", "Profesyonel Bağlama"]
  },
  {
    id: "motosiklet",
    title: "Motosiklet Transfer",
    shortDesc: "Motosikletler için özel aparatlı, kapalı veya açık kasa güvenli taşıma.",
    longDesc: "Motosiklet bir tutkudur ve biz bu tutkuya saygı duyuyoruz. Motosiklet taşımacılığı, otomobil taşımacılığından çok daha farklı ve hassas bir süreçtir. Aracınızın devrilmemesi için özel ön tekerlek sabitleme aparatları (wheel chock) ve yumuşak gergili spanzetler kullanıyoruz. İster arıza durumunda, ister şehirler arası transferde; Racing, Chopper, Enduro veya Scooter fark etmeksizin tüm modelleri çiziksiz taşıyoruz. İsteğe bağlı olarak kapalı kasa araçlarımızla, hava koşullarından etkilenmeden transfer sağlıyoruz.",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000",
    features: ["Özel Sabitleme Aparatı", "Kapalı Kasa Seçeneği", "Çizilmez Ekipman", "Devrilme Önleyici Sistem", "Tüm Modellere Uygun", "Hızlı Teslimat"]
  }
];

export const processSteps = [
    { title: "Bizi Arayın", desc: "7/24 çağrı merkezimize ulaşın.", icon: PhoneCall },
    { title: "Konum Paylaşın", desc: "WhatsApp ile konumunuzu iletin.", icon: MapPin },
    { title: "Hızlı Varış", desc: "En yakın ekibimiz yola çıksın.", icon: Truck },
    { title: "Güvenli İşlem", desc: "Aracınız sigortalı taşınsın.", icon: ShieldCheck }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik", "Kartal", "Maltepe", "Orhanlı", "Tepeören", "Pelitli"
];

export const testimonials = [
    { name: "Murat Yılmaz", role: "Lojistik Müdürü", text: "Şekerpınar gişelerde tırımız arızalandı. Gece 03:00'te aradım, 20 dakikada geldiler. Teşekkürler.", stars: 5 },
    { name: "Selin Demir", role: "Mimar", text: "Lastiğim patladı, Ahmet Bey hemen gelip değiştirdi. Çok nazik ve profesyoneldi.", stars: 5 },
    { name: "Kaan Öztürk", role: "Galeri Sahibi", text: "3 aracı İstanbul'dan Ankara'ya sorunsuz gönderdim. Fiyatlar çok makul.", stars: 5 },
    { name: "Hakan Vural", role: "Motosiklet Tutkunu", text: "Motorumu özenle taşıdılar, aparatları çok iyiydi.", stars: 5 }
];

export const blogPosts = [
  {
    slug: "yolda-kalinca-yapilmasi-gerekenler",
    title: "Yolda Kaldığınızda Hayat Kurtaran 5 Altın Kural",
    excerpt: "Aracınız arızalandığında veya kaza yaptığınızda paniğe kapılmayın. Güvenliğinizi sağlamak için yapmanız gereken ilk adımları uzmanlarımızdan öğrenin.",
    date: "24 Ekim 2024",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000"
  },
  {
    slug: "kis-aylarinda-aku-bakimi",
    title: "Kış Aylarında Akü Bakımı ve Ömrünü Uzatma Yolları",
    excerpt: "Soğuk havalar akülerin en büyük düşmanıdır. Sabahları aracınızın zor çalışmasını istemiyorsanız bu bakım ipuçlarına göz atın.",
    date: "12 Kasım 2024",
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000"
  },
  {
    slug: "cekici-cagirirken-dikkat",
    title: "Çekici Çağırırken Dolandırılmayın! Nelere Dikkat Etmeli?",
    excerpt: "Sektörde korsan çekiciler hem cebinize hem aracınıza zarar verebilir. Kaskolu taşıma belgesinin önemi.",
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

// --- GENİŞLETİLMİŞ GALERİ GÖRSELLERİ ---
export const galleryImages = [
    // Operasyonel / Çekici
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800",
    "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=800",
    "https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=800",
    // Lüks Araç / Detay
    "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=800",
    "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
    "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?q=80&w=800",
    // Gece / Zorlu Şartlar
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800",
    // Tamir / Müdahale
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800",
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800",
    // Tır / Ağır Vasıta
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800",
    // Motosiklet
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=800"
];