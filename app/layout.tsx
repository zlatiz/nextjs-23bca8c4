import * as React from "react";
import "./globals.css";
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Manrope } from "next/font/google";
import type { Metadata } from 'next';

const inter = Manrope({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'JP Malone Construction INC. | Scottsdale custom home design and build firm',
  description:
    'JP Malone Construction INC. is a Scottsdale, Arizona ​based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...',
  keywords: ['JP Malone', 'custom homes', 'Scottsdale', 'construction'],
  authors: [{ name: 'JP Malone Construction INC.' }],
  openGraph: {
    title: 'JP Malone Construction INC. | Scottsdale custom home design and build firm',
    description:
      'JP Malone Construction INC. is a Scottsdale, Arizona ​based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...',
    type: 'website',
    locale: 'en_US',
    siteName: 'JP Malone Construction INC.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JP Malone Construction INC. | Scottsdale custom home design and build firm',
    description:
      'JP Malone Construction INC. is a Scottsdale, Arizona ​based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in...'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'JP Malone Construction INC.',
              url: 'https://www.jpmalone.com',
              logo: 'https://www.jpmalone.com/logo.png',
              description:
                'JP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes.',
              telephone: '(480) 555-1234',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Scottsdale, AZ',
                addressLocality: 'Scottsdale',
                addressRegion: 'AZ',
                postalCode: '85250',
                addressCountry: 'US'
              }
            })
          }}
        />
      </body>
    </html>
  );
}
