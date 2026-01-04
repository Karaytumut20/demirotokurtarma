"use client";
import { useState } from 'react';
import { Calculator, Navigation } from 'lucide-react';

export default function CostCalculator() {
  const [km, setKm] = useState(0);
  const [price, setPrice] = useState<number | null>(null);

  const calculate = () => {
    // Temsili Mantık: Açılış 1500 TL + KM başı 40 TL
    // (Fiyatları güncel tutmak için yüksek yazdım)
    if (km > 0) {
        setPrice(1500 + (km * 40));
    }
  };

  return (
    <div className="w-full">
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full flex-1">
                <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="number"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none font-bold text-slate-900 transition-all"
                    placeholder="Tahmini Mesafe (KM)"
                    onChange={(e) => setKm(Number(e.target.value))}
                />
            </div>
            <button
                onClick={calculate}
                className="w-full md:w-auto px-8 py-4 bg-[#0f172a] hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
                <Calculator size={20} /> HESAPLA
            </button>
        </div>

        {price !== null && (
            <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-xl text-center animate-in fade-in slide-in-from-top-4">
                <p className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-1">TAHMİNİ HİZMET BEDELİ</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-black text-[#0f172a]">{price}</span>
                    <span className="text-xl font-bold text-slate-500 mt-3">₺</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Fiyatlar trafik durumu ve araç tipine göre değişiklik gösterebilir.</p>
            </div>
        )}
    </div>
  );
}