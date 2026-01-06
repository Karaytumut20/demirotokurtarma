import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'İletişim | Demir Oto Kurtarma',
  description: '7/24 Oto Kurtarma ve Yol Yardım için bize ulaşın. Adres, telefon ve konum bilgileri.',
};

export default function IletisimPage() {
  return (
    <main className="bg-slate-50">
      <PageBanner title="İLETİŞİM" />

      <section className="py-24 container mx-auto px-6">
        <div className="bg-white rounded shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 space-y-10">
            <h2 className="text-3xl font-black text-[#0f172a]">Bize Ulaşın</h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-blue-800 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-lg">Telefon</h4>
                  <a
                    href="tel:905469514925"
                    className="text-xl font-bold text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    0546 951 49 25
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-blue-800 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-lg">Adres</h4>
                  <p className="text-slate-600 max-w-sm uppercase leading-relaxed">
                    CUMHURİYET MAH. MUSTAFA KEMAL CAD. <br />
                    ŞEKERPINAR TİC.İŞ MERKEZİ NO: 16 <br />
                    İÇ KAPI NO: 36 <br />
                    ÇAYIROVA/ KOCAELİ
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-blue-800 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-lg">E-Posta</h4>
                  <span className="text-slate-600">emredemiir25@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-200 h-[400px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.266224357734!2d29.3811113!3d40.8333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzAwLjAiTiAyOcKwMjMnMDAuMCJF!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str" // Örnek embed link
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
              title="Demir Oto Kurtarma Konum"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}