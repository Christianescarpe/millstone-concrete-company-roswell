import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages, getPageBySlug, SITE_URL, getCanonicalUrl } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';
import SchemaScript from '@/components/SchemaScript';
import { getBreadcrumbSchema, getServiceSchema, getFaqSchema, getLocalBusinessSchema } from '@/lib/schema';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return allPages
    .filter(p => {
      const s = p.cleanSlug;
      return s !== '/' && !s.startsWith('/blog/') && !s.startsWith('/service-areas/');
    })
    .map(p => ({
      slug: p.cleanSlug.replace(/^\/|\/$/g, '')
    }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getPageBySlug(`/${params.slug}/`);
  if (!page) return { title: 'Page Not Found' };

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

export default function GenericPage({ params }: PageProps) {
  const page = getPageBySlug(`/${params.slug}/`);
  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: page.pageTitle, url: getCanonicalUrl(page.cleanSlug) }
  ];

  const schemas: any[] = [
    getBreadcrumbSchema(breadcrumbs),
    getFaqSchema(page.contentHtml),
  ];

  if (page.type === 'service') {
    schemas.push(getServiceSchema(page));
  } else if (page.cleanSlug === '/about/' || page.cleanSlug === '/contact/') {
    schemas.push(getLocalBusinessSchema());
  }

  return (
    <>
      <SchemaScript schema={schemas.filter(Boolean)} />
      <SectionRenderer page={page} />
    </>
  );
}
