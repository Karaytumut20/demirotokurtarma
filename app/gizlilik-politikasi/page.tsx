// app/gizlilik-politikasi/page.tsx
import PageBanner from "@/components/PageBanner";

export default function GizlilikPage() {
  return (
    <main>
      <PageBanner 
        title="GİZLİLİK POLİTİKASI" 
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80" 
      />

      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="prose prose-lg text-gray-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Veri Güvenliği Hakkında</h2>
          <p className="mb-6">
            Zentral Gayrimenkul Yatırım A.Ş. (Şirket) olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verinin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Kişisel Verilerin Toplanması</h2>
          <p className="mb-6">
            Kişisel verileriniz, Şirketimiz tarafından sağlanan hizmet ve Şirketimizin ticari faaliyetlerine bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, Şirketimiz birimleri ve ofisler, Topluluk Şirketleri, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. İletişim</h2>
          <p>
            Kişisel verilerinizle ilgili her türlü soru ve görüşleriniz için <strong>zentralgayrimenkul@gmail.com</strong> adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </main>
  );
}