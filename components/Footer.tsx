import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, Instagram } from "lucide-react";

export default function Footer() {
  const corporateLinks = [
    { title: "Anasayfa", href: "/" },
    { title: "Hakkımızda", href: "/hakkımızda" },
    { title: "Hizmetler", href: "/hizmetler" },
    { title: "İletişim", href: "/iletisim" },
  ];

  const districtLinks = [
    { title: "Çayırova Çekici", href: "/bolge/cayirova-cekici" },
    { title: "Gebze Çekici", href: "/bolge/gebze-cekici" },
    { title: "Şekerpınar Çekici", href: "/bolge/sekerpinar-cekici" },
    { title: "Darıca Yol Yardım", href: "/bolge/darica-yol-yardim" },
    { title: "Dilovası Kurtarıcı", href: "/bolge/dilovasi-kurtarici" },
  ];

  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/5 pb-20 lg:pb-0 font-sans">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              {/* LOGO GÜNCELLEMESİ: Navbar'daki logo buraya uyarlandı */}
              <div className="relative h-16 w-16 overflow-visible transition-transform group-hover:scale-105">
                <Image
                  src="/logo copy.png"
                  alt="Murat Demir Oto Kurtarma Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">
                  MURAT DEMİR
                </span>
                <span className="text-[10px] text-blue-500 font-bold tracking-widest">
                  DEMİR OTO KURTARMA
                </span>
              </div>
            </Link>
            <p className="text-sm leading-7 text-slate-500">
              Çayırova ve Şekerpınar bölgesinin lider oto kurtarma firması.
              Profesyonel ekip ve uygun fiyat garantisiyle 7/24 hizmetinizdeyiz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/demiirotokurtarma"
                target="_blank"
                className="w-10 h-10 rounded bg-[#0f172a] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-white/5 hover:border-blue-500"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span>{" "}
              Kurumsal
            </h3>
            <ul className="space-y-3">
              {corporateLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-600 group-hover:translate-x-1 transition-transform"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span> Hizmet
              Bölgeleri
            </h3>
            <ul className="space-y-3">
              {districtLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-blue-600 group-hover:translate-x-1 transition-transform"
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-full"></span>{" "}
              İletişim
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm leading-relaxed">
                  Şekerpınar, Çayırova / KOCAELİ
                  <br />
                  <span className="text-xs text-slate-600">7/24 Açık</span>
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:905539820188"
                  className="text-lg font-bold text-white hover:text-blue-500 transition-colors"
                >
                  0553 982 01 88
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-[#0f172a] rounded text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">info@demirotokurtarma.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>© 2024 Murat Demir - Demir Oto Kurtarma.</p>
          <div className="flex space-x-6">
            <Link
              href="/gizlilik-politikasi"
              className="hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="hover:text-white transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
