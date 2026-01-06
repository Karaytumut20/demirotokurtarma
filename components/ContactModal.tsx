"use client";
import { X, Phone, PhoneCall } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-in zoom-in-95 duration-300 border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <PhoneCall size={32} className="animate-pulse" />
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-2">Bize Ulaşın</h3>
          <p className="text-slate-500 mb-8">7/24 Oto Kurtarma ve Yol Yardım Hizmeti</p>

          <div className="space-y-4">
            {/* ANA NUMARA */}
            <a
              href="tel:905469514925"
              className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl sm:text-2xl shadow-lg shadow-blue-600/30 transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <Phone size={24} />
              0546 951 49 25
            </a>

            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-bold tracking-widest">Alternatif Hat</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* İKİNCİ NUMARA */}
            <a
              href="tel:905513579525"
              className="flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 py-3 rounded-xl font-bold text-base transition-all"
            >
              <Phone size={18} className="text-slate-400" />
              0551 357 95 25
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}