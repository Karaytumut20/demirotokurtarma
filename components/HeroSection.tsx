import Link from 'next/link';
import { PhoneCall, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    // min-h-[100dvh] -> Mobil tarayıcılarda adres çubuğu sorununu çözer
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-[#020617]/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
         <img
            src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1920"
            alt="Demir Oto Kurtarma"
            className="w-full h-full object-cover opacity-50 animate-[pulse_20s_infinite_alternate]"
         />
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center pt-24 pb-12">
        <div className="inline-flex items-center gap-2 sm:gap-3 border border-blue-500/30 bg-blue-900/20 backdrop-blur-md px-4 py-1.5 sm:px-6 sm:py-2 rounded-full mb-6 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
           <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
           <span className="text-blue-200 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Kocaeli & İstanbul Anadolu Yakası</span>
        </div>

        {/* Mobilde text-4xl, Masaüstünde text-8xl */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-[0.95] tracking-tight drop-shadow-2xl animate-in fade-in zoom-in duration-700">
          GÜVENLİ TAŞIMA <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">PROFESYONEL</span> HİZMET
        </h1>

        <p className="text-slate-300 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-2">
          Yolda kaldığınızda endişelenmeyin. Bölgenin en geniş araç filosu ve uzman ekibiyle <strong className="text-white">15 dakikada</strong> yanınızdayız.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full px-4 sm:px-0">
          <a
            href="tel:905539820188"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-white text-[#0f172a] px-8 py-4 sm:px-10 sm:py-5 rounded font-black text-lg sm:text-xl hover:bg-blue-50 transition-all overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <PhoneCall size={22} className="text-blue-700" />
            HEMEN ARA
          </a>

          <Link
             href="/hizmetler"
             className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm"
          >
             Hizmetlerimiz
          </Link>
        </div>

        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 md:gap-16 border-t border-white/10 pt-8 animate-in fade-in duration-1000 delay-500">
            {[
                { i: Clock, t: "15 Dk Varış" },
                { i: ShieldCheck, t: "Kaskolu Taşıma" },
                { i: MapPin, t: "7/24 Takip" }
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-400">
                    <item.i className="text-blue-500" size={18} />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">{item.t}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}