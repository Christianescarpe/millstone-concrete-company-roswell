import pagesJson from '../pages_data.json';

export interface PageData {
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  slug: string;
  cleanSlug: string;
  contentHtml: string;
  internalAnchor1Text: string;
  internalAnchor1Url: string;
  internalAnchor2Text: string;
  internalAnchor2Url: string;
  internalAnchor3Text: string;
  internalAnchor3Url: string;
  externalAnchorText: string;
  externalAnchorUrl: string;
  type: string;
  featuredImage?: string;
}

export const COMPANY_INFO = {
  name: "Millstone Concrete Company Roswell",
  shortName: "Millstone Concrete",
  phoneDisplay: "(678) 679-8108",
  phoneRaw: "+16786798108",
  address: "11007 Alpharetta Hwy, Roswell, GA 30076, United States",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7936970868004!2d-84.33830329999999!3d34.04845830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575801a683b4f%3A0xe98063d08ce25d32!2sMillstone%20Concrete%20Company%20Roswell!5e1!3m2!1sen!2sph!4v1791378874103!5m2!1sen!2sph"
};

const imageMappingBySlug: Record<string, string> = {
  '/': '/images/hero-concrete.webp',
  '/about/': '/images/about-hero.webp',
  '/contact/': '/images/contact-hero.webp',
  '/gallery/': '/images/finishing-1.webp',
  '/concrete-services/': '/images/hero-concrete.webp',
  '/concrete-driveways/': '/images/driveway-1.webp',
  '/concrete-driveway-replacement/': '/images/driveway-replacement.webp',
  '/concrete-patios/': '/images/patio-1.webp',
  '/stamped-concrete/': '/images/stamped-1.webp',
  '/decorative-concrete/': '/images/decorative-1.webp',
  '/concrete-walkways/': '/images/walkway-1.webp',
  '/concrete-steps/': '/images/steps-1.webp',
  '/concrete-slabs/': '/images/slab-1.webp',
  '/concrete-foundations/': '/images/foundation-1.webp',
  '/concrete-retaining-walls/': '/images/retaining-wall-1.webp',
  '/concrete-pool-decks/': '/images/pool-deck-1.webp',
  '/concrete-repair/': '/images/repair-1.webp',
  '/concrete-resurfacing/': '/images/resurfacing-1.webp',
  '/commercial-concrete/': '/images/commercial-1.webp',
  '/service-areas/': '/images/banner-concrete.webp',
  '/service-areas/dunwoody-ga/': '/images/driveway-2.webp',
  '/service-areas/sandy-springs-ga/': '/images/patio-2.webp',
  '/service-areas/brookhaven-ga/': '/images/slab-2.webp',
  '/service-areas/chamblee-ga/': '/images/walkway-2.webp',
  '/service-areas/doraville-ga/': '/images/finishing-2.webp',
  '/service-areas/peachtree-corners-ga/': '/images/compactor.webp',
  '/service-areas/norcross-ga/': '/images/banner-concrete.webp',
  '/service-areas/roswell-ga/': '/images/hero-concrete.webp',
  '/service-areas/johns-creek-ga/': '/images/driveway-1.webp',
  '/blog/concrete-driveway-cost/': '/images/blog-driveway-cost.webp',
  '/blog/driveway-repair-vs-replacement/': '/images/blog-repair-vs-replace.webp',
  '/blog/stamped-concrete-vs-pavers/': '/images/blog-stamped-vs-pavers.webp',
  '/blog/concrete-patio-cost/': '/images/blog-patio-cost.webp',
  '/blog/concrete-curing-time/': '/images/blog-curing-time.webp',
  '/blog/concrete-slab-thickness/': '/images/blog-slab-thickness.webp',
  '/blog/prevent-concrete-cracks/': '/images/blog-prevent-cracks.webp',
};

export const allPages: PageData[] = (pagesJson as any[]).map((p) => {
  return {
    ...p,
    featuredImage: imageMappingBySlug[p.cleanSlug] || '/images/hero-concrete.webp'
  };
});

export function normalizeSlug(slug: string): string {
  let s = slug.trim();
  if (!s.startsWith('/')) s = '/' + s;
  if (!s.endsWith('/')) s = s + '/';
  if (s === '//') return '/';
  return s;
}

export function getPageBySlug(slug: string): PageData | undefined {
  const norm = normalizeSlug(slug);
  return allPages.find(p => normalizeSlug(p.cleanSlug) === norm);
}

export const homePage = allPages.find(p => p.type === 'home') || allPages[0];
export const servicesHubPage = allPages.find(p => p.cleanSlug === '/concrete-services/');
export const serviceAreasHubPage = allPages.find(p => p.cleanSlug === '/service-areas/');
export const aboutPage = allPages.find(p => p.cleanSlug === '/about/');
export const contactPage = allPages.find(p => p.cleanSlug === '/contact/');
export const galleryPage = allPages.find(p => p.cleanSlug === '/gallery/');

export const coreServices = allPages.filter(p => p.type === 'service');
export const locationPages = allPages.filter(p => p.type === 'location');
export const blogPosts = allPages.filter(p => p.type === 'blog');

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/concrete-services/' },
  { name: 'Service Areas', href: '/service-areas/' },
  { name: 'Gallery', href: '/gallery/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'About Us', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];
