import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPageBySlug, locationPages, SITE_URL, getCanonicalUrl } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';
import SchemaScript from '@/components/SchemaScript';
import { getBreadcrumbSchema, getFaqSchema, getLocalBusinessSchema } from '@/lib/schema';

interface CityPageProps {
  params: {
    city: string;
  };
}

export function generateStaticParams() {
  return locationPages
    .filter(l => l.cleanSlug !== '/service-areas/')
    .map(l => {
      const parts = l.cleanSlug.replace(/^\/service-areas\/|\/$/g, '');
      return { city: parts };
    });
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const slug = `/service-areas/${params.city}/`;
  const page = getPageBySlug(slug);
  if (!page) return { title: 'Service Area Not Found' };

  const canonicalUrl = getCanonicalUrl(page.cleanSlug);
  const imageUrl = `${SITE_URL}${page.featuredImage || '/images/hero-concrete.webp'}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const slug = `/service-areas/${params.city}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const cityName = page.pageTitle.replace('Concrete Contractor in ', '');

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Service Areas', url: getCanonicalUrl('/service-areas/') },
    { name: cityName, url: getCanonicalUrl(page.cleanSlug) }
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
