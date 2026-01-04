import { services } from '@/lib/data';
import PageBanner from "@/components/PageBanner";
import { notFound } from 'next/navigation';
import { CheckCircle2, Phone, AlertTriangle, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.id === resolvedParams.id);

  if (!service) return notFound();

  return (
    <main className="bg-slate-50">
      <PageBanner title={service.title} image={service.image} />

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
         <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6">{service.title} Hizmeti</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.longDesc}</p>

                <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600 mb-8">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><ShieldCheck size={20}/> %100 Sigortalı Taşıma</h4>
                    <p className="text-blue-800 text-sm">Bu hizmet kapsamında aracınız, firmamızın sorumluluğu altındayken oluşabilecek her türlü riske karşı Axa Sigorta güvencesi altındadır.</p>
                </div>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Teknik Özellikler ve Avantajlar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features && service.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <CheckCircle2 size={16} />
                            </div>
                            <span className="text-slate-700 font-bold">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ekstra Süreç Bilgisi - Sayfayı Doldurmak İçin */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Nasıl Çalışır?</h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h5 className="font-bold text-lg mb-1">Talep Oluşturma</h5>
                            <p className="text-gray-600">Çağrı merkezimizi arayarak veya WhatsApp üzerinden konumunuzu paylaşarak talebinizi iletin.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h5 className="font-bold text-lg mb-1">Ekip Yönlendirme</h5>
                            <p className="text-gray-600">Operatörlerimiz, aracınızın durumuna en uygun ekipmanı (Kayar kasa, ahtapot vb.) belirler ve yönlendirir.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h5 className="font-bold text-lg mb-1">Güvenli Transfer</h5>
                            <p className="text-gray-600">Aracınız uzman personelimizce yüklenir, sabitlenir ve istediğiniz servise teslim edilir.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div className="lg:w-1/3 space-y-8">
            <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Phone size={120} /></div>
                <h4 className="font-bold text-2xl mb-2 relative z-10">Acil Yardım Hattı</h4>
                <p className="text-slate-400 mb-8 text-sm relative z-10">Müşteri temsilcimiz hattın diğer ucunda bekliyor.</p>

                <a href="tel:905539820188" className="block w-full bg-white text-[#0f172a] text-center py-4 rounded-xl font-black hover:bg-blue-50 transition-all mb-4 relative z-10">
                    0553 982 01 88
                </a>
                <div className="flex items-center gap-2 justify-center text-xs text-slate-400 relative z-10">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Şu an müsait
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 border-b pb-4">Hizmet Bölgeleri</h4>
                <ul className="space-y-3">
                    {["Çayırova", "Gebze", "Şekerpınar", "Darıca", "Tuzla", "Dilovası"].map(d => (
                        <li key={d} className="flex items-center gap-2 text-gray-600 text-sm">
                            <MapPin size={16} className="text-blue-600" /> {d} Çekici
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="text-orange-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-orange-800 text-sm mb-1">Güvenlik Uyarısı</h4>
                        <p className="text-xs text-orange-700 leading-relaxed">
                            Aracınızın etrafında güvenlik önlemi almadan beklemeyiniz. Reflektörünüzü en az 30 metre geriye koyunuz.
                        </p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </main>
  );
}