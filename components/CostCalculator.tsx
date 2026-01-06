"use client";
import { useState } from 'react';
import { Calculator, Navigation, Car, Bike, Truck, Bus, Send } from 'lucide-react';

export default function CostCalculator() {
  const [km, setKm] = useState<number | string>("");
  const [vehicleType, setVehicleType] = useState("binek");
  const [price, setPrice] = useState<number | null>(null);

  const prices = {
    motosiklet: { base: 1000, perKm: 35 },
    binek: { base: 1500, perKm: 40 },
    suv: { base: 1800, perKm: 45 },
    ticari: { base: 2500, perKm: 60 }
  };

  const calculate = () => {
    const mesafe = Number(km);
    if (mesafe > 0) {
      const selected = prices[vehicleType as keyof typeof prices];
      const total = selected.base + (mesafe * selected.perKm);
      setPrice(total);
    }
  };

  const getWhatsAppLink = () => {
    if (!price) return "#";
    const message = `Merhaba, web sitenizden fiyat hesapladım. ${km} KM mesafe için ${vehicleType.toUpperCase()} araç çekimi yaklaşık ${price} TL görünüyor. Müsait aracınız var mı?`;
    return `https://wa.me/905469514925?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full">
        {/* Araç Tipi Seçimi - Grid Mobilde 2, Masaüstünde 4 kolon */}
        {/* Gap değerini küçülttük (gap-3 -> gap-2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
                { id: 'motosiklet', label: 'Motosiklet', icon: Bike },
                { id: 'binek', label: 'Otomobil', icon: Car },
                { id: 'suv', label: 'SUV / Jeep', icon: Truck },
                { id: 'ticari', label: 'Ticari', icon: Bus }
            ].map((v) => (
                <button
                    key={v.id}
                    onClick={() => { setVehicleType(v.id); setPrice(null); }}
                    // Paddingleri mobilde azalttık (p-2), text boyutunu ayarladık
                    className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl border transition-all active:scale-95 h-20 sm:h-auto ${vehicleType === v.id ? 'bg-blue-50 border-blue-600 text-blue-700 ring-1 ring-blue-200 shadow-md' : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300'}`}
                >
                    <v.icon size={20} className="mb-1 sm:mb-2 sm:w-6 sm:h-6" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase">{v.label}</span>
                </button>
            ))}
        </div>

        {/* Input & Button - Mobilde alt alta (flex-col), Masaüstünde yan yana */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="relative w-full flex-1">
                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="number"
                    value={km}
                    // Mobilde input yüksekliğini ayarladık (py-3)
                    className="w-full pl-11 pr-4 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none font-bold text-slate-900 text-base transition-all placeholder:text-sm sm:placeholder:text-base"
                    placeholder="Mesafe (KM)"
                    onChange={(e) => { setKm(e.target.value); setPrice(null); }}
                />
            </div>
            <button
                onClick={calculate}
                // Butonu mobilde daha belirgin ve kolay tıklanır yaptık
                className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-[#0f172a] hover:bg-blue-800 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base"
            >
                <Calculator size={18} /> HESAPLA
            </button>
        </div>

        {/* Sonuç Alanı */}
        {price !== null && (
            <div className="mt-4 sm:mt-6 animate-in fade-in slide-in-from-top-4">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-center mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5">
                       <Calculator size={64} />
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">TAHMİNİ TUTAR</p>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">{price}</span>
                        <span className="text-lg sm:text-xl font-bold text-slate-500 mt-2">₺</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">*Tahmini fiyattır, kesin bilgi için arayınız.</p>
                </div>

                <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white text-center py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
                >
                    <Send size={18} /> SİPARİŞİ TAMAMLA
                </a>
            </div>
        )}
    </div>
  );
}
