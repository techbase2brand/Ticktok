import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

import { Paytone_One, Inter } from "next/font/google";
import CTAWrapper from "./inner-pages-component/CTAWrapper";
const headingFont = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "TickTock Loans", 
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
         <link 
            rel="preload" 
            as="font" 
            type="font/woff2"
            href="/fonts/FONTSPRINGDEMO-BalginBold.woff2"
            crossOrigin="anonymous"
            aria-label="fonts"
          />
          <link 
              rel="preload" 
              as="font" 
              type="font/woff2"
              href="/fonts/FONTSPRINGDEMO-BalginRegular.woff2"
              crossOrigin="anonymous"
              aria-label="fonts"/>
              
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
          <main className="">
            {children}
          </main>
          <CTAWrapper />
        <Footer copyRight="© 2026 TickTock Loans. All rights reserved." />
       
      </body>
    </html>
  );
}