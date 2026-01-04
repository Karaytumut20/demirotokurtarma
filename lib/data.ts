import { Truck, Wrench, Battery, Car, MapPin, ShieldCheck, PhoneCall, CheckCircle } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Oto Çekici",
    shortDesc: "Çayırova, Gebze ve Şekerpınar bölgesinde 7/24 profesyonel çekici.",
    longDesc: "Lüks spor araçlardan standart binek araçlara kadar tüm modelleri, özel donanımlı kayar kasa araçlarımızla çizmeden, hasarsız taşıyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000",
    features: ["Hasarsız Taşıma", "15 Dk Varış", "Kaskolu"]
  },
  {
    id: "yol-yardim",
    title: "Yol Yardım",
    shortDesc: "Lastik, yakıt ve basit arızalar için yerinde müdahale.",
    longDesc: "Aracınızın basit arızaları için çekiciye binmesine gerek yok. Mobil servis aracımızla geliyor, lastik değişimi ve yakıt ikmali yapıyoruz.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000",
    features: ["Mobil Servis", "Lastik Değişimi", "Yakıt İkmali"]
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye",
    shortDesc: "Profesyonel cihazlarla akü takviye ve değişim.",
    longDesc: "Akü kaynaklı yolda kalmalarda, aracın elektroniğine zarar vermeyen profesyonel booster cihazlarımızla takviye yapıyoruz.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000",
    features: ["Zararsız Takviye", "Akü Ölçümü", "7/24 Destek"]
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta",
    shortDesc: "Kamyon, Tır ve İş Makinesi kurtarma hizmetleri.",
    longDesc: "Sanayi bölgesindeki iş ortaklarımız için ağır tonajlı araç taşıma ve kurtarma operasyonlarını titizlikle yönetiyoruz.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000",
    features: ["60 Ton Kapasite", "Vinç Desteği", "Sanayi Odaklı"]
  }
];

export const processSteps = [
    { title: "Bizi Arayın", desc: "7/24 çağrı merkezimize ulaşın.", icon: PhoneCall },
    { title: "Konum Atın", desc: "WhatsApp üzerinden konum paylaşın.", icon: MapPin },
    { title: "Ekip Geliyor", desc: "En yakın aracımız yola çıksın.", icon: Truck },
    { title: "Güvenli Teslimat", desc: "Aracınız sigortalı taşınsın.", icon: ShieldCheck }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik", "Kartal"
];

export const testimonials = [
    { name: "Murat Yılmaz", role: "İşletmeci", text: "Şekerpınar'da aracım arızalandı. Gece 03:00 olmasına rağmen 15 dakikada geldiler. Araçları çok temiz ve yeniydi.", stars: 5 },
    { name: "Selin Demir", role: "Mimar", text: "Lastiğim patladı ve bijonları sökemedim. Mobil ekip hemen gelip halletti. Çok nazik ve profesyoneller.", stars: 5 },
    { name: "Kaan Öztürk", role: "Nakliyeci", text: "Kamyonum çamura saplandı, ağır vasıta kurtarıcıları tereyağından kıl çeker gibi çıkardı. Helal olsun.", stars: 5 }
];

export const galleryImages = [
    "https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=800",
    "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=800",
    "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=800",
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800",
    "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=800"
];