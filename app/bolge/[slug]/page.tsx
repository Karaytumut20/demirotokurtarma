import { locationPages } from "@/lib/data";
import PageBanner from "@/components/PageBanner";
import CallToAction from "@/components/CallToAction";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const pageData = locationPages.find((p) => p.slug === resolvedParams.slug);

  if (!pageData) {
    return { title: "Sayfa Bulunamadı" };
  }

  return {
    title: pageData.seoTitle,
    description: pageData.desc,
  };
}

export default async function BolgePage({ params }: Props) {
  const resolvedParams = await params;
  const pageData = locationPages.find((p) => p.slug === resolvedParams.slug);

  if (!pageData) return notFound();

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageBanner
        title={pageData.title}
        subtitle="7/24 Profesyonel, Sigortalı ve Hızlı Çekici Hizmeti"
      />

      <section className="py-16 lg:py-24 container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
                  {pageData.title}
                </h2>
              </div>

              <div className="prose prose-lg text-gray-600 leading-relaxed mb-10">
                <p className="font-semibold text-slate-800 text-lg mb-4">
                  {pageData.content.intro}
                </p>
                <p>{pageData.content.details}</p>
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                Hizmet Özellikleri
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pageData.content.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <CheckCircle2
                      className="text-blue-600 shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-slate-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
                <Clock className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900">15 Dk Varış</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Bölgeye hakim ekipler.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
                <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900">Kaskolu Taşıma</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Axa Sigorta güvencesi.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900">7/24 Destek</h3>
                <p className="text-xs text-gray-500 mt-1">Kesintisiz hizmet.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#0f172a] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden text-center">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-2">
                    Yolda Mı Kaldınız?
                  </h3>
                  <p className="text-slate-400 mb-6 text-sm">
                    En yakın ekibimiz size sadece bir telefon kadar uzak.
                  </p>
                  <a
                    href="tel:905469514925"
                    className="block w-full bg-blue-600 text-white py-4 rounded-xl font-black text-xl hover:bg-blue-50 transition-all shadow-lg shadow-blue-900/50 mb-4 animate-pulse"
                  >
                    0546 951 49 25
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 pb-2 border-b border-slate-100 text-[#0f172a]">
                  Diğer Hizmet Bölgeleri
                </h4>
                <ul className="space-y-2">
                  {locationPages
                    .filter((p) => p.slug !== resolvedParams.slug)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/bolge/${p.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 text-gray-600 hover:text-blue-600 transition-all group"
                        >
                          <MapPin
                            size={18}
                            className="text-slate-400 group-hover:text-blue-500"
                          />
                          <span className="font-medium text-sm">{p.title}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}