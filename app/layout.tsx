import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "TickTock Loans", // Tumhari website ka naam
  description: "Your trusted loan partner",
  icons: {
    icon: [
      { url: '/favicon-icon', sizes: 'any' },
      { url: '/logo.svg', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest', // optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="">
        <Header />
        {children}
        <Footer copyRight="© 2026 TickTock Loans. All rights reserved." />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            AOS.init({
              duration: 1000,
              once: true,
            });
          `
        }} />
      </body>
    </html>
  );
}