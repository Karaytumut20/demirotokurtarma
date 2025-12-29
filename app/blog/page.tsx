import PageBanner from "@/components/PageBanner";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageBanner title="BLOG & İPUÇLARI" />
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
                <BlogCard key={idx} post={post} />
            ))}
        </div>
      </section>
    </main>
  );
}