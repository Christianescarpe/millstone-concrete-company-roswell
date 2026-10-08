import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPageBySlug, blogPosts, SITE_URL, getCanonicalUrl } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';
import SchemaScript from '@/components/SchemaScript';
import { getBreadcrumbSchema, getBlogPostingSchema, getFaqSchema } from '@/lib/schema';

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
      type: 'article',
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

export default function BlogPostPage({ params }: BlogPostProps) {
  const slug = `/blog/${params.slug}/`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Blog', url: getCanonicalUrl('/blog/') },
    { name: page.pageTitle, url: getCanonicalUrl(page.cleanSlug) }
  ];

  const schemas = [
    getBreadcrumbSchema(breadcrumbs),
    getBlogPostingSchema(page),
    getFaqSchema(page.contentHtml)
  ].filter(Boolean);

  return (
    <>
      <SchemaScript schema={schemas} />
      <SectionRenderer page={page} />
    </>
  );
}
