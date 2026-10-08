import { PageData, SITE_INFO, SITE_URL, COMPANY_INFO, getCanonicalUrl } from '@/data/content';

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.shortName,
    "url": `${SITE_URL}/`,
    "telephone": COMPANY_INFO.phoneRaw,
    "priceRange": "$$",
    "image": `${SITE_URL}/images/hero-concrete.webp`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11007 Alpharetta Hwy",
      "addressLocality": "Roswell",
      "addressRegion": "GA",
      "postalCode": "30076",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0484583,
      "longitude": -84.3383033
    },
    "hasMap": "https://www.google.com/maps?cid=16826500588825829938",
    "areaServed": [
      { "@type": "City", "name": "Roswell" },
      { "@type": "City", "name": "Dunwoody" },
      { "@type": "City", "name": "Sandy Springs" },
      { "@type": "City", "name": "Brookhaven" },
      { "@type": "City", "name": "Chamblee" },
      { "@type": "City", "name": "Doraville" },
      { "@type": "City", "name": "Peachtree Corners" },
      { "@type": "City", "name": "Norcross" },
      { "@type": "City", "name": "Johns Creek" },
      { "@type": "City", "name": "Alpharetta" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "15:00"
      }
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": `${SITE_URL}/`,
    "name": COMPANY_INFO.name,
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getServiceSchema(page: PageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.pageTitle,
    "description": page.metaDescription,
    "url": getCanonicalUrl(page.cleanSlug),
    "provider": {
      "@type": "GeneralContractor",
      "@id": `${SITE_URL}/#organization`,
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phoneRaw,
      "url": `${SITE_URL}/`
    },
    "areaServed": {
      "@type": "City",
      "name": "Roswell, GA"
    }
  };
}

export function getFaqSchema(html: string) {
  const match = html.match(/<h2[^>]*>(?:Frequently Asked Questions|FAQ[\s\S]*?)<\/h2>([\s\S]*?)(?=<h2|$)/i);
  if (!match) return null;

  const faqBody = match[1];
  const qMatches = [...faqBody.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/gi)];
  if (qMatches.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qMatches.map(m => ({
      "@type": "Question",
      "name": m[1].replace(/<[^>]+>/g, '').trim(),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": m[2].replace(/<[^>]+>/g, '').trim()
      }
    }))
  };
}

export function getBlogPostingSchema(page: PageData) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": page.pageTitle,
    "description": page.metaDescription,
    "url": getCanonicalUrl(page.cleanSlug),
    "image": `${SITE_URL}${page.featuredImage || '/images/hero-concrete.webp'}`,
    "author": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": COMPANY_INFO.name
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/hero-concrete.webp`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": getCanonicalUrl(page.cleanSlug)
    }
  };
}
