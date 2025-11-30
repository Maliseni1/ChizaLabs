// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from 'nextjs-toploader'; // 1. Import TopLoader
import Preloader from './components/Preloader'; // 2. Import Preloader

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chiza Labs",
  description: "Innovate. Create. Deploy. Chiza Labs builds cutting-edge applications.",
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

            {children}
            <Analytics />
        </Providers>
      </body>
    </html>
  );
}