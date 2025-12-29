"use client";
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] lg:hidden flex shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <a
        href="https://wa.me/905013338042?text=Merhaba,%20yolda%20kaldım.%20Acil%20yardım%20gerekli."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-3 active:bg-[#1da851] transition-colors"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
      </a>
      <a
        href="tel:905013338042"
        className="flex-[1.5] bg-orange-600 text-white flex flex-col items-center justify-center py-3 relative overflow-hidden active:bg-orange-700 transition-colors"
      >
        {/* Shine Efekti */}
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        <Phone size={24} className="mb-1 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wide">HEMEN ARA</span>
      </a>
    </div>
  );
}