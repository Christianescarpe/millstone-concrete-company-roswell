import { PageData } from '@/data/content';

export interface ParsedSection {
  id: string;
  h2: string;
  bodyHtml: string;
  hasList: boolean;
  hasH3: boolean;
  isTwoColumnCandidate: boolean;
  image: string;
}

export interface ParsedPage {
  h1: string;
  introHtml: string;
  sections: ParsedSection[];
}

const fallbackImages = [
  '/images/driveway-1.webp',
  '/images/patio-1.webp',
  '/images/stamped-1.webp',
  '/images/slab-1.webp',
  '/images/walkway-1.webp',
  '/images/steps-1.webp',
  '/images/repair-1.webp',
  '/images/commercial-1.webp',
  '/images/retaining-wall-1.webp',
  '/images/pool-deck-1.webp',
  '/images/finishing-1.webp',
  '/images/resurfacing-1.webp',
  '/images/compactor.webp',
  '/images/driveway-2.webp',
  '/images/patio-2.webp',
  '/images/slab-2.webp',
  '/images/walkway-2.webp',
  '/images/finishing-2.webp',
  '/images/banner-concrete.webp',
  '/images/hero-concrete.webp'
];

function selectImageForHeading(heading: string, pageImage: string, index: number): string {
  const h = heading.toLowerCase();
  if (h.includes('driveway') || h.includes('parking')) return '/images/driveway-1.webp';
  if (h.includes('patio')) return '/images/patio-1.webp';
  if (h.includes('stamp') || h.includes('pattern') || h.includes('texture')) return '/images/stamped-1.webp';
  if (h.includes('decorative') || h.includes('color') || h.includes('stain')) return '/images/decorative-1.webp';
  if (h.includes('walkway') || h.includes('sidewalk') || h.includes('path')) return '/images/walkway-1.webp';
  if (h.includes('step') || h.includes('stair')) return '/images/steps-1.webp';
  if (h.includes('slab')) return '/images/slab-1.webp';
  if (h.includes('foundation') || h.includes('structural')) return '/images/foundation-1.webp';
  if (h.includes('wall') || h.includes('retaining')) return '/images/retaining-wall-1.webp';
  if (h.includes('pool')) return '/images/pool-deck-1.webp';
  if (h.includes('repair') || h.includes('restoration') || h.includes('patch')) return '/images/repair-1.webp';
  if (h.includes('resurfac')) return '/images/resurfacing-1.webp';
  if (h.includes('commercial') || h.includes('warehouse')) return '/images/commercial-1.webp';
  if (h.includes('process') || h.includes('step-by-step') || h.includes('pour')) return '/images/banner-concrete.webp';
  if (h.includes('standard') || h.includes('cure') || h.includes('quality')) return '/images/finishing-1.webp';
  if (h.includes('sub-base') || h.includes('soil') || h.includes('grade')) return '/images/compactor.webp';
  if (h.includes('area') || h.includes('serve') || h.includes('roswell')) return '/images/hero-concrete.webp';
  
  return fallbackImages[index % fallbackImages.length];
}

export function parsePageContent(page: PageData): ParsedPage {
  const rawHtml = page.contentHtml;
  const parts = rawHtml.split(/(?=<h2)/i);
  
  const heroPart = parts[0] || '';
  const h1Match = heroPart.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : page.pageTitle;
  const introHtml = heroPart.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim();

  const sections: ParsedSection[] = parts.slice(1).map((part, index) => {
    const h2Match = part.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : '';
    const bodyHtml = part.replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, '').trim();
    
    const hasList = /<(ul|ol)/i.test(bodyHtml);
    const hasH3 = /<h3/i.test(bodyHtml);
    
    // An H2 section qualifies for 2-column if it has descriptive paragraph text (even if short)
    // and is not purely a giant list or FAQ block.
    // Also, if it has a list with only a few items, it can still be 2-column!
    const isTwoColumnCandidate = !hasH3;

    const image = selectImageForHeading(h2, page.featuredImage || '/images/hero-concrete.webp', index);
    const id = h2.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return {
      id,
      h2,
      bodyHtml,
      hasList,
      hasH3,
      isTwoColumnCandidate,
      image
    };
  });

  return {
    h1,
    introHtml,
    sections
  };
}
