import { Metadata } from 'next';
import { appDetails } from '../../data/releases';
import AppReleaseView from './AppReleaseView';

// 1. Generate SEO Metadata (Server Side)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // @ts-ignore
  const app = appDetails[slug];

  if (!app) {
    return {
      title: 'App Not Found',
    };
  }

  return {
    title: `${app.name} - Download & Release History`,
    description: app.description,
    openGraph: {
      title: `${app.name} | Chiza Labs`,
      description: app.tagline,
      images: [app.icon],
    },
  };
}

// 2. Main Page Component (Server Side)
export default async function AppReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Render the Client Component with the slug
  return <AppReleaseView slug={slug} />;
}