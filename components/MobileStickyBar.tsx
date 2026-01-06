"use client";
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] lg:hidden flex shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-white/5 pb-[env(safe-area-inset-bottom)] bg-[#020617]">
      <a
        href="https://wa.me/905469514925"
        className="flex-1 bg-[#25D366] text-white flex flex-col items-center justify-center py-3 active:bg-[#1da851] transition-colors"
      >
        <MessageCircle size={24} className="mb-1" />
        <span className="text-xs font-black uppercase tracking-widest">WhatsApp</span>
      </a>
      <a
        href="tel:905469514925"
        className="flex-[1.5] bg-blue-700 text-white flex flex-col items-center justify-center py-3 relative overflow-hidden active:bg-blue-800 transition-colors"
      >
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        <Phone size={26} className="mb-1 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-widest">ACİL ÇEKİCİ</span>
      </a>
    </div>
  );
}