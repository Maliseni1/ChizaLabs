import { MetadataRoute } from 'next';
import { appDetails } from './data/releases';
import { blogPosts } from './data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chizalabs.vercel.app';

  // 1. Static Routes
  const routes = [
    '',       // Homepage
    '/blog',  // Blog Index
    '/lab',   // Lab Page (New)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));

  // 2. Dynamic App Routes (e.g. /apps/audire)
  const appRoutes = Object.keys(appDetails).map((slug) => ({
    url: `${baseUrl}/apps/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Dynamic Blog Routes (e.g. /blog/why-business-needs-modern-website)
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...appRoutes, ...blogRoutes];
}