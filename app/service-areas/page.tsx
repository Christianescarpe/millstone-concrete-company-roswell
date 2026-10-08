import { Metadata } from 'next';
import { serviceAreasHubPage, SITE_URL, getCanonicalUrl } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';
import SchemaScript from '@/components/SchemaScript';
import { getBreadcrumbSchema, getFaqSchema, getLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: serviceAreasHubPage?.seoTitle || 'Concrete Contractor Service Areas',
  description: serviceAreasHubPage?.metaDescription || 'Millstone Concrete Company serves Roswell and surrounding North Atlanta communities.',
  alternates: {
    canonical: getCanonicalUrl('/service-areas/'),
  },
  openGraph: {
    title: serviceAreasHubPage?.seoTitle,
    description: serviceAreasHubPage?.metaDescription,
    url: getCanonicalUrl('/service-areas/'),
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/banner-concrete.webp`,
        width: 1200,
        height: 630,
        alt: 'Concrete Contractor Service Areas Around Roswell, GA',
      },
    ],
  },
};

export default function ServiceAreasPage() {
  const page = serviceAreasHubPage!;

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Service Areas', url: getCanonicalUrl('/service-areas/') }
  ];

  const schemas = [
    getBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema(),
    getFaqSchema(page.contentHtml)
  ].filter(Boolean);

  return (
    <>
      <SchemaScript schema={schemas} />
      <SectionRenderer page={page} />
    </>
  );
}
