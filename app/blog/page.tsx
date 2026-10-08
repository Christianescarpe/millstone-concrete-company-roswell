import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, COMPANY_INFO, SITE_URL, getCanonicalUrl } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import PhoneCTA from '@/components/PhoneCTA';
import SchemaScript from '@/components/SchemaScript';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Blog | Millstone Concrete Company Roswell',
  description: 'Articles and guides on concrete driveway costs, stamped concrete, curing times, and slab maintenance from Millstone Concrete Company in Roswell, GA.',
  alternates: {
    canonical: getCanonicalUrl('/blog/'),
  },
  openGraph: {
    title: 'Blog | Millstone Concrete Company Roswell',
    description: 'Articles and guides on concrete driveway costs, stamped concrete, curing times, and slab maintenance from Millstone Concrete Company in Roswell, GA.',
    url: getCanonicalUrl('/blog/'),
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/blog-curing-time.webp`,
        width: 1200,
        height: 630,
        alt: 'Millstone Concrete Articles & Guides',
      },
    ],
  },
};

export default function BlogHubPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Blog', url: getCanonicalUrl('/blog/') }
  ];

  return (
    <div className="bg-[#0c0d0f] min-h-screen text-gray-200">
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:py-20 border-b border-dark-border bg-dark-surface/60 overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              // BLOG &amp; GUIDES //
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
              Millstone Concrete Articles &amp; Guides
            </h1>
            <div className="pt-2">
              <PhoneCTA size="md" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="industrial-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-dark-card">
                  <Image
                    src={post.featuredImage || '/images/hero-concrete.webp'}
                    alt={post.pageTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/30">
                    Guide #{idx + 1}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-heading text-xl font-black text-white uppercase tracking-wide group-hover:text-brand-orange transition-colors line-clamp-2">
                    <Link href={post.cleanSlug}>
                      {post.pageTitle}
                    </Link>
                  </h2>
                  <p className="text-xs text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-dark-border/40 mt-4 flex items-center justify-between">
                <Link
                  href={post.cleanSlug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
