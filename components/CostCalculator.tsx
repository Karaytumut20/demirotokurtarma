"use client";
import { useState } from 'react';
import { Calculator, Truck } from 'lucide-react';

export default function CostCalculator() {
  const [km, setKm] = useState(0);
  const [vehicleType, setVehicleType] = useState('binek');
  const [price, setPrice] = useState<number | null>(null);

  const calculate = () => {
    // Örnek Fiyatlandırma Mantığı (Tamamen Temsili)
    const basePrice = vehicleType === 'binek' ? 500 : 800; // Açılış ücreti
    const perKm = vehicleType === 'binek' ? 20 : 35; // Km başı ücret
    const total = basePrice + (km * perKm);
    setPrice(total);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><Calculator size={24} /></div>
            <h3 className="text-2xl font-bold text-slate-900">Tahmini Fiyat Hesapla</h3>
        </div>

        <div className="space-y-4">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mesafe (KM)</label>
                <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Örn: 15"
                    onChange={(e) => setKm(Number(e.target.value))}
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Araç Tipi</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                    onChange={(e) => setVehicleType(e.target.value)}
                >
                    <option value="binek">Binek Araç (Sedan, HB)</option>
                    <option value="suv">SUV / Panelvan</option>
                    <option value="ticari">Ticari / Minibüs</option>
                </select>
            </div>

            <button
                onClick={calculate}
                className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
                <Truck size={18} /> HESAPLA
            </button>

            {price !== null && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center animate-in fade-in">
                    <p className="text-sm text-green-800 mb-1">Tahmini Tutar</p>
                    <p className="text-3xl font-black text-green-700">{price} ₺</p>
                    <p className="text-xs text-green-600 mt-2">*Kesin fiyat için arayınız.</p>
                </div>
            )}
        </div>
    </div>
  );
}