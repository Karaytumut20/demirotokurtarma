import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">

      {/* Süslemeler */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-slate-950/50 skew-y-3 transform origin-bottom-left z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000"
                alt="Demir Oto Kurtarma Filosu"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs">
                 <p className="text-4xl font-black text-orange-600 mb-1">15+</p>
                 <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Yıllık Tecrübe</p>
                 <p className="text-xs text-slate-400 mt-2">Binlerce başarılı operasyon.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-1 w-12 bg-orange-600 rounded-full"></div>
               <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">KURUMSAL</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Yolda Kalmak <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Artık Sorun Değil.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Demir Oto Kurtarma olarak, kurulduğumuz günden bu yana "Önce Güven" ilkesiyle hareket ediyoruz. Konya'nın her noktasına en kısa sürede ulaşarak mağduriyetinizi gideriyoruz. Modern araç filomuz ve tecrübeli operatörlerimizle aracınızı güvenle taşıyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {["Hızlı Varış Garantisi", "Ekonomik Fiyatlar", "Uzman Personel", "Sigortalı Taşıma", "7/24 Müşteri Desteği", "Son Model Çekiciler"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-orange-500 flex-shrink-0" size={20} />
                      <span className="font-medium text-gray-200">{item}</span>
                  </div>
              ))}
            </div>

            <div className="flex gap-4">
                <Link href="/kurumsal" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all border border-white/10">
                  Hakkımızda
                </Link>
                <a href="tel:905551234567" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20">
                  <Phone size={20}/> Bize Ulaşın
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}