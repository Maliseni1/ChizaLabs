import { Metadata } from 'next';
import { blogPosts } from '../../data/posts';
import BlogPostView from './BlogPostView';

// 1. Generate SEO Metadata (Server Side)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Chiza Labs Insights`,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

// 2. Main Page Component (Server Side)
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return <BlogPostView slug={slug} />;
}