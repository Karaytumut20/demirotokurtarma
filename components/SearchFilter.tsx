// components/SearchFilter.tsx
"use client";
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchFilter() {
  const [activeTab, setActiveTab] = useState<'satilik' | 'kiralik'>('satilik');

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto -mt-10 relative z-20">
      {/* Tab Seçimi */}
      <div className="flex gap-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab('satilik')}
          className={`pb-2 font-semibold transition-colors ${activeTab === 'satilik' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Satılık
        </button>
        <button
          onClick={() => setActiveTab('kiralik')}
          className={`pb-2 font-semibold transition-colors ${activeTab === 'kiralik' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Kiralık
        </button>
      </div>

      {/* Form Alanları */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Konum</label>
          <input 
            type="text" 
            placeholder="İlçe, Mahalle..." 
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Emlak Tipi</label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option>Daire</option>
            <option>Villa</option>
            <option>Arsa</option>
            <option>Ofis</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase">Fiyat Aralığı</label>
          <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option>Tümü</option>
            <option>0 - 1.000.000 ₺</option>
            <option>1M - 3M ₺</option>
            <option>3M - 5M ₺</option>
            <option>5M ₺ +</option>
          </select>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Search size={20} />
            İlan Ara
          </button>
        </div>
      </div>
    </div>
  );
}