import PageBanner from "@/components/PageBanner";
import { districts } from '@/lib/data';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BolgelerPage() {
  return (
    <main className="bg-slate-50">
      <PageBanner title="HİZMET BÖLGELERİMİZ" />
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {districts.map((d, i) => (
                <Link key={i} href="/iletisim" className="flex items-center justify-between p-6 bg-white rounded shadow-sm hover:shadow-lg border border-slate-100 transition-all group">
                    <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{d} Çekici</span>
                    </div>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>
            ))}
        </div>
      </section>
    </main>
  );
}