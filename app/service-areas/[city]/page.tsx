import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPageBySlug, locationPages } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';

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

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const slug = `/service-areas/${params.city}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <SectionRenderer page={page} />;
}
