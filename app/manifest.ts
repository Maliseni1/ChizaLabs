import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chiza Labs',
    short_name: 'ChizaLabs',
    description: 'Innovate. Create. Deploy. Offline-first mobile applications.',
    start_url: '/',
    display: 'standalone', // This hides the browser UI
    background_color: '#0f172a', // Dark mode bg
    theme_color: '#3b82f6', // Blue brand color
    icons: [
      {
        src: '/chizalabs-logo.png', // We use your existing logo
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/chizalabs-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}