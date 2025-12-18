import { Metadata } from 'next';
import { appDetails } from '../../data/releases';
import AppReleaseView from './AppReleaseView';

// Define the shape of app details to avoid 'any' issues
interface AppDetail {
  name: string;
  description: string;
  tagline: string;
  icon: string;
}

// Define the shape of the full appDetails object
interface AppDetailsType {
  [key: string]: AppDetail | undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Cast appDetails to our interface to avoid implicit 'any' error
  const details = appDetails as AppDetailsType;
  const app = details[slug];

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

export default async function AppReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <AppReleaseView slug={slug} />;
}