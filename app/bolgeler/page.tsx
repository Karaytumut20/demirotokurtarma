import PageBanner from "@/components/PageBanner";
import { districts } from '@/lib/data';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BolgelerPage() {
  return (
    <main className="bg-white">
      <PageBanner title="HİZMET BÖLGELERİMİZ" />
      <section className="py-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Konya'nın Her Noktasındayız</h2>
            <p className="text-gray-600">Aşağıdaki bölgelerin tamamında 7/24 aktif ekiplerimiz bulunmaktadır.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {districts.map((d, i) => (
                <Link key={i} href="/iletisim" className="flex items-center justify-between p-6 bg-slate-50 rounded-xl hover:bg-orange-600 hover:text-white transition-all group border border-gray-100">
                    <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-orange-600 group-hover:text-white" />
                        <span className="font-bold text-lg">{d} Çekici</span>
                    </div>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
            ))}
        </div>
      </section>
    </main>
  );
}