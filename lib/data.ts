import { Truck, Wrench, Battery, Car } from 'lucide-react';

export const services = [
  {
    id: "oto-cekici",
    title: "Oto Çekici",
    shortDesc: "Çayırova, Gebze ve Şekerpınar bölgesinde 7/24 acil çekici.",
    longDesc: "Aracınız arıza yaptığında veya kaza durumunda, son model kayar kasa araçlarımızla olay yerine hızla ulaşıyoruz. Kocaeli ve İstanbul Anadolu Yakası'nın her noktasına güvenli taşıma sağlıyoruz.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=1000"
  },
  {
    id: "yol-yardim",
    title: "Yol Yardım",
    shortDesc: "Lastik, yakıt ve basit arızalar için mobil servis.",
    longDesc: "Lastiğiniz mi patladı? Yakıtınız mı bitti? Çekiciye gerek kalmadan mobil servis aracımızla bulunduğunuz konuma gelip sorunu yerinde çözüyoruz.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000"
  },
  {
    id: "aku-takviye",
    title: "Akü Takviye",
    shortDesc: "Akü bitmesi durumunda profesyonel takviye.",
    longDesc: "Soğuk havalarda veya unutulan farlar nedeniyle biten akünüz için profesyonel booster cihazlarımızla takviye yapıyoruz.",
    icon: Battery,
    image: "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=1000"
  },
  {
    id: "agir-vasita",
    title: "Ağır Vasıta",
    shortDesc: "Kamyon, Tır ve İş Makinesi taşıma.",
    longDesc: "Şekerpınar sanayi bölgesindeki ağır tonajlı araçlarınız ve iş makineleriniz için özel donanımlı kurtarıcılarımız mevcuttur.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000"
  }
];

export const districts = [
  "Çayırova", "Gebze", "Şekerpınar", "Darıca", "Dilovası", "Tuzla", "Pendik"
];