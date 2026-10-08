import { MetadataRoute } from 'next';
import { allPages, SITE_URL, getCanonicalUrl } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  return allPages.map((page) => {
    const url = getCanonicalUrl(page.cleanSlug);
    let priority = 0.8;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly';

    if (page.cleanSlug === '/') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (page.cleanSlug === '/concrete-services/' || page.cleanSlug === '/service-areas/') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (page.cleanSlug.startsWith('/blog/')) {
      priority = 0.7;
      changeFrequency = 'monthly';
    } else if (page.cleanSlug === '/contact/' || page.cleanSlug === '/about/') {
      priority = 0.8;
      changeFrequency = 'monthly';
    }

    return {
      url,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
