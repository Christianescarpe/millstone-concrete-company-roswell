import { Metadata } from 'next';
import { homePage, SITE_URL, getCanonicalUrl } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';
import SchemaScript from '@/components/SchemaScript';
import { getLocalBusinessSchema, getWebSiteSchema, getFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: homePage.seoTitle,
  description: homePage.metaDescription,
  alternates: {
    canonical: getCanonicalUrl(homePage.cleanSlug),
  },
  openGraph: {
    title: homePage.seoTitle,
    description: homePage.metaDescription,
    url: getCanonicalUrl(homePage.cleanSlug),
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/hero-concrete.webp`,
        width: 1200,
        height: 630,
        alt: homePage.pageTitle,
      },
    ],
  },
};

export default function HomePage() {
  const schemas = [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    getFaqSchema(homePage.contentHtml)
  ].filter(Boolean);

  return (
    <>
      <SchemaScript schema={schemas} />
      <SectionRenderer page={homePage} />
    </>
  );
}
