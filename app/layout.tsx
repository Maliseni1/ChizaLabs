// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from 'nextjs-toploader';
import Preloader from './components/Preloader';
import SupportWidget from './components/SupportWidget';
import GlobalSearch from './components/GlobalSearch';

const inter = Inter({ subsets: ["latin"] });

// Viewport settings for PWA (disables zooming for app-like feel)
export const viewport: Viewport = {
  themeColor: "#0f172a", // Matches your dark mode background
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

export const metadata: Metadata = {
  metadataBase: new URL('https://chizalabs.vercel.app'),
  title: {
    default: 'Chiza Labs | Innovate. Create. Deploy.',
    template: '%s | Chiza Labs'
  },
  description: "Chiza Labs builds cutting-edge offline-first mobile applications and AI tools to solve real-world problems in Africa and beyond.",
  keywords: ['Chiza Labs', 'Software Development', 'Zambia', 'AI', 'Offline Apps', 'Audire', 'Nyumba', 'CutCam', 'Flutter', 'Next.js'],
  authors: [{ name: 'Maliseni' }],
  creator: 'Chiza Labs',
  
  // --- PWA CONFIGURATION ---
  manifest: "/manifest.json", // Link to the manifest we created
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Chiza Labs",
  },
  // -------------------------

  verification: {
    google: 'RK9QhQoZxKAGN4ayVJNWB5OMl5-o1H0FGEZn_oYg9f4',
  },
  openGraph: {
    title: 'Chiza Labs - Innovate. Create. Deploy.',
    description: 'Building the next generation of AI and utility apps like Audire and Nyumba.',
    url: 'https://chizalabs.vercel.app',
    siteName: 'Chiza Labs',
    images: [
      {
        url: '/chizalabs-logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiza Labs',
    description: 'Innovate. Create. Deploy.',
    images: ['/chizalabs-logo.png'],
  },
  icons: {
    icon: '/c.logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Providers>
            {/* 3. Add Preloader (Runs once on refresh) */}
            <Preloader />
            
            {/* 4. Add TopLoader (Runs on route changes) */}
            <NextTopLoader 
              color="#3B82F6" // Your brand blue
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false} // Clean look without the spinner circle
              easing="ease"
              speed={200}
              shadow="0 0 10px #3B82F6,0 0 5px #3B82F6"
            />

            {/* Global Command Palette */}
            <GlobalSearch />

            {children}
            <Analytics />

            {/* Live Chat Widget */}
            <SupportWidget />

        </Providers>
      </body>
    </html>
  );
}