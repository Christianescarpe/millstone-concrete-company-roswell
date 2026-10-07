import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPageBySlug, blogPosts } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map(p => {
    const slug = p.cleanSlug.replace(/^\/blog\/|\/$/g, '');
    return { slug };
  });
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const slug = `/blog/${params.slug}/`;
  const page = getPageBySlug(slug);
  if (!page) return { title: 'Article Not Found' };

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const slug = `/blog/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <SectionRenderer page={page} />;
}
