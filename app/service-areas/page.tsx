import { Metadata } from 'next';
import { serviceAreasHubPage } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';

export const metadata: Metadata = {
  title: serviceAreasHubPage?.seoTitle || 'Concrete Contractor Service Areas | Millstone Concrete',
  description: serviceAreasHubPage?.metaDescription || 'Millstone Concrete Company serves Roswell and surrounding North Atlanta communities.',
};

export default function ServiceAreasPage() {
  const page = serviceAreasHubPage!;
  return <SectionRenderer page={page} />;
}
