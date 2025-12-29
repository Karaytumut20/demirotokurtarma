import PageBanner from "@/components/PageBanner";
import CostCalculator from "@/components/CostCalculator";

export default function FiyatPage() {
  return (
    <main className="bg-slate-50">
      <PageBanner title="FİYAT HESAPLA" />
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-[#0f172a]">Tahmini Ücret Hesaplama</h2>
                <p className="text-gray-600 mt-2">Mesafeye göre ortalama çekici ücretini öğrenin.</p>
            </div>
            <CostCalculator />
        </div>
      </section>
    </main>
  );
}