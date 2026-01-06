import { MetadataRoute } from 'next';
import { blogPosts, services, locationPages } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.muratdemirotokurtarma.com';

  // Statik Sayfalar
  const staticRoutes = [
    '',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/fiyat-hesapla',
    '/blog',
    '/bolgeler',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog Yazıları
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Hizmet Sayfaları
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Bölge Sayfaları
  const locationRoutes = locationPages.map((loc) => ({
    url: `${baseUrl}/bolge/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...locationRoutes];
}