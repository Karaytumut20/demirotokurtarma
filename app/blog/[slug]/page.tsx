import { blogPosts } from '@/lib/data';
import PageBanner from "@/components/PageBanner";
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  return (
    <main className="bg-white">
      <PageBanner title={post.title} image={post.image} />
      <article className="container mx-auto px-6 py-20 max-w-3xl">
         <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b pb-4">
            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16} /> Admin</span>
         </div>
         <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead font-bold text-xl text-slate-800 mb-6">{post.excerpt}</p>
            <p>
                Buraya blog yazısının tam metni gelecek. Örnek olarak: Yolda kaldığınızda ilk yapmanız gereken güvenli bir yere geçmektir. Ardından dörtlülerinizi yakın ve reflektörünüzü yerleştirin. Demir Oto Kurtarma'yı arayarak konumunuzu paylaşın...
            </p>
            <h3>Güvenlik Önlemleri</h3>
            <p>
                Araç güvenliği kadar kendi güvenliğiniz de önemlidir. Otobanda kaldıysanız araç içinde beklemek yerine bariyer arkasına geçin.
            </p>
         </div>
      </article>
    </main>
  );
}