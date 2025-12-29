// components/LatestProjects.tsx
import Image from 'next/image';
import { MapPin, ArrowUpRight, ExternalLink, Building2, Factory, Gem, Sparkles } from 'lucide-react';

// Kategori verileri - Etkileyici görseller ve başlıklar
const categories = [
  {
    id: 1,
    title: "Sanayi & Lojistik Yatırımları",
    subtitle: "Yüksek Kira Getirili Fabrika & Depo Arsaları",
    location: "Konya OSB & Gelişim Aksları",
    count: "18+ Fırsat Dosyası",
    icon: <Factory size={28} />,
    image: "https://images.unsplash.com/photo-1565793979206-10951493332d?q=80&w=1000" // Etkileyici bir sanayi/antrepo görseli
  },
  {
    id: 2,
    title: "Ultra Lüks Yaşam Alanları",
    subtitle: "Meram & Selçuklu'da Prestijli Villalar",
    location: "Meram, Yaka & Selçuklu",
    count: "25+ Özel Portföy",
    icon: <Gem size={28} />,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000" // Lüks havuzlu villa görseli
  },
  {
    id: 3,
    title: "Ticari Merkez & Plazalar",
    subtitle: "Şehrin Kalbinde Kurumsal Ofisler",
    location: "Konya Finans Merkezi",
    count: "12+ Ticari Ünite",
    icon: <Building2 size={28} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" // Modern plaza görseli
  }
];

export default function LatestProjects() {
  // BURAYA KENDİ SAHİBİNDEN MAĞAZA LİNKİNİZİ YAPIŞTIRIN
  const SAHIBINDEN_LINK = "https://www.sahibinden.com"; 

  return (
    <section className="py-28 bg-[#0B0F19] text-white relative overflow-hidden">
      
      {/* ARKAPLAN EFEKTLERİ (Göz Doyuran Kısımlar) */}
      {/* 1. Devasa Silik Yazı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-slate-800/20 pointer-events-none select-none whitespace-nowrap z-0">
        PREMIUM PORTFOLIO
      </div>
      {/* 2. Bulanık Işık Topları */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/30 rounded-full blur-[180px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[180px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* BAŞLIK VE GİRİŞ KISMI */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
              </div>
              <span className="text-yellow-500 font-bold tracking-[0.3em] text-sm uppercase flex items-center gap-2">
                <Sparkles size={16} /> CANLI VİTRİN
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Sadece En İyiler. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Fırsatları Keşfedin.
              </span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              Konya'nın en prestijli ve yüksek getiri potansiyeline sahip gayrimenkulleri, uzman ekibimiz tarafından sizin için seçildi. Aşağıdaki kategorilere tıklayarak güncel mağazamıza ulaşabilirsiniz.
            </p>
          </div>

          {/* MASAÜSTÜ SAHİBİNDEN BUTONU (Dikkat Çekici) */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <a 
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 px-10 py-6 rounded-lg font-extrabold text-xl uppercase tracking-wider hover:scale-[1.02] transition-transform"
            >
              <span>TÜM İLANLARI GÖR</span>
              <ExternalLink className="group-hover:rotate-45 transition-transform duration-300 bg-white/20 p-1 rounded-full w-8 h-8" />
            </a>
          </div>
        </div>

        {/* KARTLAR (Göz Alıcı Kısım) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[550px] rounded-[2rem] overflow-hidden cursor-pointer perspective-1000"
            >
              {/* NEON GLOW BORDER EFEKTİ (Hoverda Çıkan Çerçeve) */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-500 via-white to-yellow-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 z-0"></div>
              
              {/* KARTIN KENDİSİ */}
              <div className="relative h-full w-full bg-slate-900 rounded-[2rem] overflow-hidden z-10 border border-slate-800 group-hover:border-transparent transition-colors">
                {/* Resim */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Koyu ve Renkli Overlayler */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent opacity-90"></div>
                {/* Hoverda çıkan spot ışığı efekti */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>

                {/* İçerik */}
                <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
                  
                  {/* Üst Kısım: İkon ve Sayaç */}
                  <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="bg-yellow-500/20 backdrop-blur-md text-yellow-400 p-4 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                      {cat.icon}
                    </div>
                    <div className="bg-slate-800/80 backdrop-blur-sm text-yellow-400 font-bold text-sm px-4 py-2 rounded-full border border-yellow-500/30 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                      </span>
                      {cat.count}
                    </div>
                  </div>

                  {/* Alt Kısım: Başlıklar ve Buton */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                     <h3 className="text-3xl font-extrabold mb-2 text-white group-hover:text-yellow-400 transition-colors">{cat.title}</h3>
                     <p className="text-slate-300 text-lg mb-6 opacity-90">{cat.subtitle}</p>
                     
                     {/* Lokasyon ve Buton */}
                     <div className="flex items-center justify-between border-t border-slate-700/50 pt-6 group-hover:border-yellow-500/30">
                        <div className="flex items-center text-slate-400 text-sm font-medium">
                           <MapPin size={18} className="mr-2 text-yellow-500" />
                           {cat.location}
                        </div>
                        
                        {/* Hoverda çıkan "İncele" butonu */}
                        <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                           İncele <ArrowUpRight size={20} className="bg-yellow-400/20 rounded-full p-1" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* MOBİL BUTON (Sadece mobilde görünür, o da cafcaflı) */}
        <div className="mt-16 md:hidden relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-75 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a 
              href={SAHIBINDEN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center items-center gap-3 bg-slate-900 text-yellow-400 px-6 py-5 w-full rounded-lg font-extrabold shadow-2xl uppercase tracking-widest"
            >
               TÜM İLANLARI GÖR
               <ExternalLink size={24} className="animate-bounce" />
            </a>
        </div>
      </div>
    </section>
  );
}