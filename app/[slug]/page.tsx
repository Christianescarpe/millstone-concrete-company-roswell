import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages, getPageBySlug } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';

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

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default function GenericPage({ params }: PageProps) {
  const page = getPageBySlug(`/${params.slug}/`);
  if (!page) {
    notFound();
  }

  return <SectionRenderer page={page} />;
}
