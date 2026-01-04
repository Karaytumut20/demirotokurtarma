"use client";
import { faqs } from '@/lib/data';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">MERAK EDİLENLER</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-2">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-500 mt-4">Hizmetlerimiz hakkında aklınıza takılan tüm soruların cevapları.</p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="font-bold text-lg text-[#0f172a]">{faq.q}</span>
                        {openIndex === idx ? <Minus className="text-blue-600 shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
                    </button>
                    <div className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}