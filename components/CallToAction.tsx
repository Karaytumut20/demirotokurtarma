import { PhoneCall } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-[#0f172a] relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Yolda Mı Kaldınız?</h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                En yakın çekici ekibimiz size sadece bir telefon kadar uzak.
            </p>
            <a href="tel:905013338042" className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-10 py-5 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl">
                <PhoneCall size={32} className="text-blue-700 animate-bounce" />
                0501 333 80 42
            </a>
        </div>
    </section>
  );
}