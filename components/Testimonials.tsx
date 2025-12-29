import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Ahmet Yılmaz",
        role: "Konya",
        text: "Gece yarısı Konya-Ankara yolunda kaldım. Aradığımda 20 dakika içinde yanımdaydılar. Profesyonel ve güler yüzlü hizmet için teşekkürler.",
        rating: 5
    },
    {
        name: "Mehmet Demir",
        role: "Meram",
        text: "Aküm bitmişti, pazar günü olmasına rağmen çok hızlı geldiler. Fiyatları da piyasaya göre gayet makul. Tavsiye ederim.",
        rating: 5
    },
    {
        name: "Ayşe Kaya",
        role: "Selçuklu",
        text: "Lastiğim patladı ve değiştiremedim. Yol yardım ekibi hemen geldi, 10 dakikada halledip beni yola devam ettirdiler. Harika hizmet.",
        rating: 5
    }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4">Müşteri Yorumları</h2>
                <p className="text-gray-500">Bizimle çalışan müşterilerimizin deneyimleri.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                        <Quote className="absolute top-6 right-6 text-orange-100" size={48} />
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-600 mb-6 italic relative z-10">"{review.text}"</p>
                        <div>
                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                            <span className="text-xs text-orange-600 font-bold uppercase tracking-wider">{review.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}