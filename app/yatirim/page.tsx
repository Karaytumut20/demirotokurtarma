// app/yatirim/page.tsx
"use client"; // Pop-up (Etkileşim) olduğu için bu satır şart

import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // State kontrolü için
import { 
  TrendingUp, PieChart, Shield, Globe, ArrowRight, CheckCircle2, 
  Landmark, Building, Briefcase, Coins, Map, AreaChart, X, ExternalLink
} from "lucide-react";

export default function YatirimPage() {
  // Pop-up'ın açık/kapalı durumunu tutan state
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  // Linkleri buradan yönetebilirsin
  const links = {
    sahibinden: "https://zentralgayrimenkul.sahibinden.com/", 
    hepsiemlak: "https://www.hepsiemlak.com/emlak-ofisi/zentral-gayrimenkul-161271",
  };

  return (
    <main className="bg-white text-slate-800">
      {/* 1. HERO BANNER */}
      <PageBanner 
        title="YATIRIM & VARLIK YÖNETİMİ" 
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80" 
      />

      {/* 2. GİRİŞ: KRİZ FIRSATÇILIĞI (HOOK) */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <div className="inline-block px-3 py-1 bg-red-100 text-red-600 font-bold text-xs rounded-full mb-4 animate-pulse">
                EKONOMİK GERÇEKLER
             </div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
               Paranızın Erimesine <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                 Seyirci Kalmayın.
               </span>
             </h2>
             <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               Enflasyonist ortamda nakitte kalmak, kaybetmeyi kabul etmektir. Zentral Gayrimenkul olarak, 
               sadece mülk satmıyoruz; <strong>servet koruma ve büyütme stratejileri</strong> sunuyoruz. 
               Döviz ve altının durağanlığına inat, toprak yatırımı ve ticari mülklerle reel büyüme vadediyoruz.
             </p>
             
             <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-yellow-600 shadow-sm">
                <p className="font-serif italic text-slate-700">
                  "Toprak üretilemeyen tek şeydir, bu yüzden ona yatırım yapın."
                </p>
                <p className="text-right text-sm text-yellow-600 font-bold mt-2">- Mark Twain</p>
             </div>
          </div>

          {/* Görsel Grafik İllüstrasyonu */}
          <div className="w-full lg:w-1/2 bg-slate-900 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600 rounded-full blur-[120px] opacity-20"></div>
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <AreaChart className="text-yellow-500" />
               <span>Son 5 Yıl Getiri Analizi</span>
             </h3>
             
             {/* Grafik Barları */}
             <div className="space-y-6">
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>Gayrimenkul (Arsa/Ticari)</span>
                   <span className="text-green-400">%850+</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[95%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>Altın / Döviz</span>
                   <span className="text-yellow-400">%420</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[60%]"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1 text-gray-400">
                   <span>Mevduat Faizi</span>
                   <span className="text-red-400">%210</span>
                 </div>
                 <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500 w-[30%] opacity-70"></div>
                 </div>
               </div>
             </div>
             <p className="text-xs text-gray-500 mt-6">*Veriler Konya ili sanayi ve imarlı arsa ortalamaları baz alınarak temsil edilmiştir.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Geleceğinizi Bugün İnşa Edin</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-xl leading-relaxed">
            Sınırlı sayıdaki fırsat portföylerimiz ve lansmana özel fiyatlarımız için yatırım danışmanlarımızla iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/iletisim" className="bg-yellow-600 text-white px-10 py-4 font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(202,138,4,0.5)] transform hover:scale-105">
               ÜCRETSİZ DANIŞMANLIK AL
             </Link>
             
             {/* POP-UP TETİKLEYİCİ BUTON */}
             {/* Artık Link yerine button kullanıyoruz */}
             <button 
               onClick={() => setIsPortfolioModalOpen(true)}
               className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
             >
               GÜNCEL FIRSATLARI GÖR
               <ExternalLink size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* 3. YATIRIM MODELLERİ (4 ANA KART) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Yatırım Modellerimiz</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Risk profilinize ve bütçenize en uygun enstrümanı seçin, uzmanlarımız yönetsin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Model 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-yellow-600">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                <Map size={30} className="text-yellow-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Arsa Geliştirme</h3>
              <p className="text-gray-600 text-sm mb-4">
                İmara açılacak veya imarı yeni gelmiş ham toprak yatırımı. En yüksek getiri potansiyeli buradadır.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Uzun Vade (3-5 Yıl)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Yüksek Kâr Marjı</li>
              </ul>
            </div>

            {/* Model 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-blue-600">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <Briefcase size={30} className="text-blue-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ticari Mülk</h3>
              <p className="text-gray-600 text-sm mb-4">
                Kurumsal kiracılı dükkan, mağaza ve ofis yatırımları. Düzenli kira geliri ve amortisman odaklıdır.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Düzenli Nakit Akışı</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Kurumsal Kiracı</li>
              </ul>
            </div>

            {/* Model 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-emerald-600">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                <Building size={30} className="text-emerald-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kentsel Dönüşüm</h3>
              <p className="text-gray-600 text-sm mb-4">
                Eski yapıların yıkılıp yenilenmesi sürecine ortaklık. Kat karşılığı veya pay alımı ile değer artışı.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Orta Vade (1-2 Yıl)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Risksiz Yenileme</li>
              </ul>
            </div>

             {/* Model 4 */}
             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-t-4 border-purple-600">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <Coins size={30} className="text-purple-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Topraktan Giriş</h3>
              <p className="text-gray-600 text-sm mb-4">
                Konut projelerine temel aşamasında (lansman) girip, proje bitiminde yüksek primle çıkış modeli.
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Kısa Vade Al-Sat</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> Lansman İndirimi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 6. SİMÜLASYON / ÖRNEK SENARYO */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Örnek Senaryo: Arsa Yatırımı</h3>
              <p className="text-gray-600 mb-6">
                2020 yılında Konya Yazır bölgesinden m²'si 200 TL'den alınan 1000m² arsanın bugünkü piyasa değeri analizi.
              </p>
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold text-gray-500">Başlangıç Yatırımı (2020)</span>
                    <span className="font-bold text-slate-900">200.000 ₺</span>
                 </div>
                 <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold text-gray-500">Mevcut Değer (2025)</span>
                    <span className="font-bold text-slate-900">3.500.000 ₺</span>
                 </div>
                 <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                    <span className="font-bold text-green-700">NET KAZANÇ</span>
                    <span className="font-bold text-green-700 text-xl">%1650 Artış</span>
                 </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20"></div>
               <div className="relative bg-slate-900 text-white p-8 rounded-2xl text-center transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Landmark size={48} className="mx-auto text-yellow-500 mb-4" />
                  <p className="text-lg font-light opacity-90">Gayrimenkul, siz uyurken bile sizin için çalışmaya devam eden tek yatırımdır.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. STRATEJİK BÖLGELER (KONYA ODAKLI) */}
 
      {/* 5. SÜREÇ: NASIL ÇALIŞIR? */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Profesyonel Yatırım Yönetimi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={40} />, title: "Pazar Analizi", desc: "Veriye dayalı analizlerle şehrin en hızlı değerlenen noktalarını tespit ediyoruz." },
              { icon: <Shield size={40} />, title: "Güvenli Alım", desc: "Hukuki (Tapu/İmar) kontrolleri yapılmış sorunsuz mülkleri portföye ekliyoruz." },
              { icon: <TrendingUp size={40} />, title: "Değer Katma", desc: "Tarlayı arsaya, arsayı projeye dönüştürerek değer artışı sağlıyoruz." },
              { icon: <PieChart size={40} />, title: "Kâr Realizasyonu", desc: "Doğru zamanda, en yüksek fiyattan satış yaparak kârı realize ediyoruz." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-yellow-500 transition-all group relative z-10">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Ok işareti (Son eleman hariç) */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-300 z-0">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
     <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">HOTSPOTS</h4>
              <h2 className="text-3xl md:text-4xl font-bold">Yatırımın Gözbebeği Lokasyonlar</h2>
            </div>
            <Link href="/iletisim" className="mt-4 md:mt-0 border border-white/20 px-6 py-3 rounded-full hover:bg-yellow-600 hover:border-yellow-600 transition-all">
              Bölge Analiz Raporu İste
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Lokasyon 1 */}
             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" alt="Sanayi" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Yeni Sanayi Aksı</h3>
                  <p className="text-gray-300 text-sm">Fabrika ve depo arzının yetersiz olduğu bölgelerde sanayi imarlı arsalar.</p>
                </div>
             </div>
             
             {/* Lokasyon 2 */}
             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1000" alt="Konut" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Üniversite & Hastane Çevresi</h3>
                  <p className="text-gray-300 text-sm">1+1 ve 2+1 daire talebinin hiç bitmediği, kira garantili lokasyonlar.</p>
                </div>
             </div>

             {/* Lokasyon 3 */}
             <div className="relative group overflow-hidden rounded-2xl h-80">
                <Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000" alt="Tarla" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Gelişim Vadisi</h3>
                  <p className="text-gray-300 text-sm">Şehrin genişleme yönünde yer alan, henüz imara açılmamış fırsat tarlaları.</p>
                </div>
             </div>
          </div>
        </div>
      </section>



      {/* 7. CTA BANNER (Harekete Geçirici Mesaj) */}

      {/* --- PORTFOLYO SEÇİM MODALI (POP-UP) --- */}
      {isPortfolioModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[in_0.2s_ease-out_fade-in]">
          
          {/* BOKEH EFFECT (Arka Plan Bulanıklığı) */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-300"
            onClick={() => setIsPortfolioModalOpen(false)} // Boşluğa tıklayınca kapat
          ></div>

          {/* MODAL KUTUSU */}
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden transform transition-all animate-[in_0.3s_ease-out_zoom-in_slide-in-from-bottom-4]">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Map size={24} className="text-yellow-500" />
                Portföy Seçimi
              </h3>
              <button 
                onClick={() => setIsPortfolioModalOpen(false)}
                className="hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal İçerik */}
            <div className="p-8">
              <p className="text-center text-gray-500 mb-8">
                Tüm ilanlarımıza ve güncel fırsatlarımıza aşağıdaki platform mağazalarımızdan ulaşabilirsiniz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. SAHİBİNDEN BUTONU */}
                <a 
                  href={links.sahibinden}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-yellow-400 bg-slate-50 hover:bg-yellow-50 transition-all duration-300"
                >
                  <div className="w-24 h-24 relative bg-white rounded-xl shadow-md p-2 flex items-center justify-center overflow-hidden">
                     {/* LOGO YERİ: Buraya sahibinden logosu gelecek */}
                     {/* Eğer resim yoksa 'S' harfi gösterir */}
                     <Image 
                        src="/Yeni klasör (2)/sahibinden.png" // BURAYA RESİM YOLUNU YAZ
                        alt="Sahibinden"
                        fill
                        className="object-contain"
                        // Resim yoksa hata vermemesi için fallback bir görünüm sağlarız ama sen logo yükleyince bu çalışır
                     />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-yellow-700 transition-colors">SAHİBİNDEN</h4>
                    <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider">MAĞAZAMIZI ZİYARET ET</p>
                  </div>
                </a>

                {/* 2. HEPSİEMLAK BUTONU */}
                <a 
                  href={links.hepsiemlak}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-red-500 bg-slate-50 hover:bg-red-50 transition-all duration-300"
                >
                  <div className="w-24 h-24 relative bg-white rounded-xl shadow-md p-2 flex items-center justify-center overflow-hidden">
                      {/* LOGO YERİ: Buraya hepsiemlak logosu gelecek */}
                       <Image 
                        src="/Yeni klasör (2)/hepsiemlak.png" // BURAYA RESİM YOLUNU YAZ
                        alt="Hepsiemlak"
                        fill
                        className="object-contain"
                     />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-red-600 transition-colors">HEPSİEMLAK</h4>
                    <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider">PORTFÖYÜMÜZÜ İNCELE</p>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}