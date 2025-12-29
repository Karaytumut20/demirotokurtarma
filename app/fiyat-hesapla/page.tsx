import PageBanner from "@/components/PageBanner";
import CostCalculator from "@/components/CostCalculator";

export default function FiyatPage() {
  return (
    <main className="bg-white">
      <PageBanner title="FİYAT HESAPLA" />
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Çekici Ücreti Ne Kadar?</h2>
                <p className="text-gray-600 mt-2">Mesafe ve araç tipine göre tahmini bir fiyat alın.</p>
            </div>
            <CostCalculator />
        </div>
      </section>
    </main>
  );
}