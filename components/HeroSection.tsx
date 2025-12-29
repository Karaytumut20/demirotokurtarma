import Link from 'next/link';
import { PhoneCall, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-[#020617]/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
         {/* Profesyonel bir gece çekimi veya koyu tonlu araç resmi */}
         <img
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1920"
            alt="Demir Oto Kurtarma"
            className="w-full h-full object-cover opacity-50"
         />
      </div>

      <div className="relative z-20 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 border border-blue-500/30 bg-blue-900/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
               <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
               <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">Kocaeli & İstanbul Anadolu Yakası</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl animate-in fade-in zoom-in duration-700">
              GÜVENLİ TAŞIMA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">PROFESYONEL</span> HİZMET
            </h1>

            <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Yolda kaldığınızda endişelenmeyin. Bölgenin en geniş araç filosu ve uzman ekibiyle <strong className="text-white">15 dakikada</strong> yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <a
                href="tel:905013338042"
                className="group relative flex items-center justify-center gap-3 bg-white text-[#0f172a] px-10 py-5 rounded font-black text-xl hover:bg-blue-50 transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 w-1 bg-blue-600 transition-all duration-300 group-hover:w-full opacity-10"></div>
                <PhoneCall size={24} className="text-blue-700" />
                ACİL KURTARICI
              </a>

              <Link
                 href="/hizmetler"
                 className="flex items-center justify-center gap-3 px-10 py-5 rounded font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto backdrop-blur-sm"
              >
                 Hizmetlerimiz
              </Link>
            </div>

            {/* Alt Özellikler */}
            <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 animate-in fade-in duration-1000 delay-500">
                {[
                    { i: Clock, t: "15 Dk Varış" },
                    { i: ShieldCheck, t: "Kaskolu Taşıma" },
                    { i: MapPin, t: "7/24 Takip" }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-400">
                        <item.i className="text-blue-500" size={20} />
                        <span className="text-sm font-bold uppercase tracking-wider">{item.t}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}