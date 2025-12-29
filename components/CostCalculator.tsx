"use client";
import { useState } from 'react';
import { Calculator, Truck } from 'lucide-react';

export default function CostCalculator() {
  const [km, setKm] = useState(0);
  const [price, setPrice] = useState<number | null>(null);

  const calculate = () => {
    // Temsili: Açılış 800 + KM*30
    setPrice(800 + (km * 30));
  };

  return (
    <div className="bg-white p-8 rounded shadow-xl border-t-4 border-blue-900">
        <div className="flex items-center gap-3 mb-6">
            <Calculator size={28} className="text-blue-900" />
            <h3 className="text-2xl font-black text-slate-900">Fiyat Hesapla</h3>
        </div>

        <div className="space-y-5">
            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mesafe (KM)</label>
                <input
                    type="number"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-900 outline-none font-bold text-slate-900"
                    placeholder="Örn: 20"
                    onChange={(e) => setKm(Number(e.target.value))}
                />
            </div>

            <button
                onClick={calculate}
                className="w-full bg-[#0f172a] text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
                HESAPLA
            </button>

            {price !== null && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded text-center">
                    <p className="text-xs font-bold text-blue-800 uppercase">TAHMİNİ TUTAR</p>
                    <p className="text-3xl font-black text-[#0f172a]">{price} ₺</p>
                </div>
            )}
        </div>
    </div>
  );
}