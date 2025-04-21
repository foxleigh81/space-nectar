import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Space Nectar",
  description: "Space Nectar - Software Development by Alexander Foxleigh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Space Nectar" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
