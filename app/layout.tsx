import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/data/content';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Concrete Contractor Roswell GA',
  description: 'Millstone Concrete Company is a Roswell, GA concrete contractor for driveways, patios, stamped concrete and repairs. Call for a free estimate.',
  verification: {
    google: 'nIGwFA4jSJnJbOv7IbN_eNnTLqv9FOYUluGRDr0t7xs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/`,
    siteName: 'Millstone Concrete Company Roswell',
    title: 'Concrete Contractor Roswell GA',
    description: 'Millstone Concrete Company is a Roswell, GA concrete contractor for driveways, patios, stamped concrete and repairs. Call for a free estimate.',
    images: [
      {
        url: `${SITE_URL}/images/hero-concrete.webp`,
        width: 1200,
        height: 630,
        alt: 'Millstone Concrete Company Roswell - Concrete Contractor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete Contractor Roswell GA',
    description: 'Millstone Concrete Company is a Roswell, GA concrete contractor for driveways, patios, stamped concrete and repairs.',
    images: [`${SITE_URL}/images/hero-concrete.webp`],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="nIGwFA4jSJnJbOv7IbN_eNnTLqv9FOYUluGRDr0t7xs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0c0d0f] text-gray-200 antialiased selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
