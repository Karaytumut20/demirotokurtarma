import PageBanner from "@/components/PageBanner";

export default function KullanimSartlariPage() {
  return (
    <main>
      <PageBanner
        title="KULLANIM ŞARTLARI"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80"
      />

      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            Bu internet sitesine girmeniz veya bu internet sitesindeki herhangi bir bilgiyi kullanmanız aşağıdaki koşulları kabul ettiğiniz anlamına gelir.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Fikri Mülkiyet Hakları</h2>
          <p className="mb-6">
            Bu internet sitesinde bulunan bilgiler, yazılar, resimler, markalar, slogan ve diğer işaretler ile sair sınaî ve fikri mülkiyet haklarına ilişkin bilgilerin korunmasına yönelik programlarla, sayfa düzeni ve işbu internet sitesinin sunumu <strong>Murat Demir - Demir Oto Kurtarma</strong> mülkiyetindedir.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Sorumluluk Reddi</h2>
          <p className="mb-6">
            <strong>Murat Demir - Demir Oto Kurtarma</strong>, bu internet sitesinde yer alan bütün ürün ve hizmetleri, sayfaları, bilgileri, görsel unsurları önceden bildirimde bulunmadan değiştirme hakkını saklı tutar.
          </p>
        </div>
      </section>
    </main>
  );
}