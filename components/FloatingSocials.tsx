"use client";

import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function FloatingSocials() {
  const socials = [
    {
      icon: <Phone size={24} />,
      label: "HEMEN ARA",
      sub: "7/24 Acil Hat",
      href: "tel:905013338042",
      color: "bg-orange-600",
      textColor: "text-white",
      special: true
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WHATSAPP",
      sub: "Konum Gönder",
      href: "https://wa.me/905013338042?text=Merhaba,%20çekici%20ihtiyacım%20var.",
      color: "bg-[#25D366]",
      textColor: "text-white",
      special: false
    },
    {
      icon: <Instagram size={24} />,
      label: "INSTAGRAM",
      href: "https://www.instagram.com/demirotokurtarma",
      color: "bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600",
      textColor: "text-white",
      special: false
    },
    {
        icon: <MapPin size={24} />,
        label: "ADRESİMİZ",
        href: "/iletisim",
        color: "bg-slate-800",
        textColor: "text-white",
        special: false
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 p-1 hidden lg:flex">
      {socials.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.href.startsWith('http') ? "_blank" : "_self"}
          className={`relative flex items-center justify-center rounded-l-xl shadow-xl transition-all duration-300 group ${item.special ? 'w-16 h-16' : 'w-12 h-12'} ${item.color} ${item.textColor}`}
        >
          {/* Tooltip (Solda Açılan Kısım) */}
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 pointer-events-none">
            <div className="bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-l-lg shadow-2xl border-r-2 border-orange-500 whitespace-nowrap">
                <p className="font-bold text-sm tracking-wider">{item.label}</p>
                {item.sub && <p className="text-[10px] text-orange-400 font-medium">{item.sub}</p>}
            </div>
          </div>

          {/* İkon */}
          <div className={`transition-transform duration-300 group-hover:scale-110 ${item.special ? 'animate-pulse' : ''}`}>
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
}