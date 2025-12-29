import { PhoneCall, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
         <img
            src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1920"
            alt="Çayırova Şekerpınar Oto Kurtarma"
            className="w-full h-full object-cover opacity-60"
         />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">

        {/* Bölge Etiketi */}
        <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in zoom-in duration-700">
           <MapPin size={14} /> Şekerpınar & Çayırova Bölgesi
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          YOLDA KALMA, <br/>
          <span className="text-orange-600">BİZİ ARA.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-medium">
          Kocaeli'nin en hızlı kurtarma ekibi 15 dakika içinde yanınızda.
          <span className="block text-orange-500 font-bold mt-2">Endişelenmeyin, çözüm bir telefon uzağınızda.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:905013338042"
            className="relative overflow-hidden group bg-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-orange-700 transition-all shadow-[0_0_50px_rgba(234,88,12,0.5)] transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
            <span className="relative flex items-center gap-3">
               <PhoneCall className="animate-bounce" /> HEMEN ÇAĞIR
            </span>
          </a>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2"><Clock className="text-orange-600" /> 15 Dk Varış</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-orange-600" /> Kaskolu Taşıma</div>
            <div className="flex items-center gap-2"><MapPin className="text-orange-600" /> Tüm Kocaeli</div>
        </div>

      </div>
    </div>
  );
}