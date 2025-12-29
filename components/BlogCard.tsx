import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded text-xs font-bold flex items-center gap-2">
            <Calendar size={12} className="text-orange-600" /> {post.date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
            Devamını Oku <ArrowRight size={16} className="text-orange-600" />
        </span>
      </div>
    </Link>
  );
}