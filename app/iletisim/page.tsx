import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function IletisimPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageBanner title="İLETİŞİM" />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 mb-8">Bize Ulaşın</h2>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                        <Phone size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">7/24 Acil Hat</h4>
                        <p className="text-gray-500 mb-1">Günün her saati arayabilirsiniz.</p>
                        <a href="tel:905013338042" className="text-2xl font-black text-orange-600 hover:text-slate-900 transition-colors">0501 333 80 42</a>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">Adres</h4>
                        <p className="text-gray-600 max-w-xs">Cumhuriyet Mah. Mustafa Kemal Cad. Şekerpınar Tic. İş Merkezi No: 16 İç Kapı No: 36, 41420 Çayırova/Kocaeli</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                        <Mail size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg">E-Posta</h4>
                        <a href="mailto:info@demirotokurtarma.com" className="text-gray-600 hover:text-orange-600">info@demirotokurtarma.com</a>
                    </div>
                </div>
            </div>

            {/* Harita */}
            <div className="h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.687453472098!2d29.3585!3d40.8359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzA5LjIiTiAyOcKwMjEnMzAuNiJF!5e0!3m2!1str!2str!4v1630000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>

        </div>
      </section>
    </main>
  );
}