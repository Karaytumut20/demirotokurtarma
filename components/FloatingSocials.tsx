"use client";
import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function FloatingSocials() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 p-0 hidden lg:flex">
      <a href="tel:905013338042" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-blue-600 relative overflow-hidden">
         <Phone size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">HEMEN ARA</span>
      </a>
      <a href="https://wa.me/905013338042" target="_blank" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-[#25D366]">
         <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">WHATSAPP</span>
      </a>
      <a href="https://www.instagram.com/demirotokurtarma" target="_blank" className="group flex items-center bg-[#0f172a] text-white p-3 rounded-l-lg hover:pr-6 transition-all duration-300 shadow-xl border-r-4 border-purple-600">
         <Instagram size={24} className="group-hover:scale-110 transition-transform" />
         <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-3 font-bold whitespace-nowrap transition-all duration-300">INSTAGRAM</span>
      </a>
    </div>
  );
}