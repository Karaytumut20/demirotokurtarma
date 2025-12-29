"use client";
import PageBanner from "@/components/PageBanner";
import { ShieldCheck, Users, Target, CheckCircle2 } from "lucide-react";

export default function KurumsalPage() {
  return (
    <main className="bg-white text-slate-800">
      <PageBanner
        title="HAKKIMIZDA"
        image="https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=1920"
      />

      {/* Hikayemiz */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">Konya'nın En Güçlü Kurtarma Ekibi</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Demir Oto Kurtarma olarak, 15 yılı aşkın süredir Konya ve çevre illerde oto kurtarma, yol yardım ve vinç hizmetleri sunmaktayız. Sektördeki tecrübemiz ve geniş araç filomuzla, yolda kalan sürücülerin en güvenilir dostu olmayı başardık.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Misyonumuz, müşterilerimizin zor anlarında yanlarında olarak, en hızlı ve güvenli şekilde problemlerini çözmektir. Araç güvenliğini her şeyin üzerinde tutarak, kaskolu ve garantili taşıma hizmeti veriyoruz.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {["Profesyonel Kadro", "Geniş Araç Filosu", "Uygun Fiyat", "Müşteri Memnuniyeti"].map(item => (
                        <div key={item} className="flex items-center gap-2 font-bold text-slate-800">
                            <CheckCircle2 className="text-orange-600" /> {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=1000" className="object-cover w-full h-full" alt="Hakkımızda" />
            </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-600">
                <ShieldCheck size={48} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Güvenilirlik</h3>
                <p className="text-gray-600">Aracınız bizimle güvende. Taşıma sırasında oluşabilecek tüm risklere karşı tam kapsamlı sigorta güvencesi sunuyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-900">
                <Target size={48} className="text-slate-900 mb-4" />
                <h3 className="text-xl font-bold mb-3">Hız ve Dakiklik</h3>
                <p className="text-gray-600">Çağrınızı aldığımız anda harekete geçiyor, GPS takibi ile en yakın ekibimizi size yönlendiriyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-600">
                <Users size={48} className="text-orange-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Uzman Ekip</h3>
                <p className="text-gray-600">Alanında uzman, gerekli belgelere sahip ve tecrübeli operatörlerimizle hizmet veriyoruz.</p>
            </div>
        </div>
      </section>
    </main>
  );
}