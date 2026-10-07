import { Metadata } from 'next';
import { homePage } from '@/data/content';
import SectionRenderer from '@/components/SectionRenderer';

export const metadata: Metadata = {
  title: homePage.seoTitle,
  description: homePage.metaDescription,
};

export default function HomePage() {
  return <SectionRenderer page={homePage} />;
}
