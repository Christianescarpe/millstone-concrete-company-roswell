import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import PhoneCTA from './PhoneCTA';
import { COMPANY_INFO } from '@/data/content';

interface PageHeroProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function PageHero({
  title,
  category,
  description,
  image = '/images/hero-concrete.webp',
  breadcrumbs
}: PageHeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:py-20 border-b border-dark-border bg-dark-surface/60 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-dark-muted mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3 h-3 text-brand-orange" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-gray-300 font-semibold">{b.name}</span>
                ) : (
                  <Link href={b.href} className="hover:text-white transition-colors">{b.name}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              // {category} //
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase leading-[1.05] tracking-tight">
              {title}
            </h1>

            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <PhoneCTA size="lg" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-xs text-gray-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Licensed Concrete Contractor • Roswell, GA</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border shadow-2xl bg-dark-card aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                <span className="bg-black/70 px-2.5 py-1 rounded font-semibold text-brand-orange uppercase tracking-wider text-[10px]">
                  Millstone Concrete
                </span>
                <span className="text-gray-400">Roswell &amp; North Fulton</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
