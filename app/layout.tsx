import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));
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
      </head>
      <body className="">
        <Header />
        {children}
        <Footer copyRight="© 2026 TickTock Loans. All rights reserved." />
       
      </body>
    </html>
  );
}