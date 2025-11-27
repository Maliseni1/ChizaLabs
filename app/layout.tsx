// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Import the provider
import { Analytics } from "@vercel/analytics/react";

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
        {/* Wrap children in Providers */}
        <Providers>
            {children}
            <Analytics />
        </Providers>
      </body>
    </html>
  );
}