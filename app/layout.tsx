// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chiza Labs",
  description: "Innovate. Create. Deploy. Chiza Labs builds cutting-edge applications to solve real-world problems.",
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
    <html lang="en">
      <head>
        {/* Add Font Awesome CDN for icons */}
        <script src="https://kit.fontawesome.com/cd03994896.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}