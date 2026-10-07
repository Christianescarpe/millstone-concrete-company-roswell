import React from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, MapPin } from 'lucide-react';
import { coreServices, locationPages, COMPANY_INFO } from '@/data/content';
import PhoneCTA from './PhoneCTA';

interface SidebarProps {
  currentSlug: string;
}

export default function RelatedServicesSidebar({ currentSlug }: SidebarProps) {
  return (
    <aside className="space-y-8">
      
      {/* Phone Call Box */}
      <div className="p-6 rounded-2xl bg-dark-card border-2 border-brand-orange/40 shadow-xl text-center">
        <div className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange mx-auto flex items-center justify-center mb-3">
          <Phone className="w-5 h-5" />
        </div>
        <h4 className="font-heading text-xl font-black text-white uppercase tracking-wider">
          Speak With An Estimator
        </h4>
        <p className="text-xs text-gray-400 mt-1 mb-5">
          Call Millstone Concrete Company for prompt scheduling &amp; expert estimates.
        </p>
        <PhoneCTA size="lg" variant="solid" className="w-full" customText={COMPANY_INFO.phoneDisplay} />
        <div className="mt-3 text-[11px] text-gray-500">
          Serving Roswell, GA &amp; Surrounding Areas
        </div>
      </div>

      {/* Concrete Services List */}
      <div className="p-6 rounded-2xl bg-dark-card border border-dark-border">
        <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
          Concrete Services
        </h4>
        <ul className="space-y-1.5 text-xs">
          {coreServices.map((srv) => {
            const isCurrent = srv.cleanSlug === currentSlug;
            return (
              <li key={srv.slug}>
                <Link
                  href={srv.cleanSlug}
                  className={`flex items-center justify-between p-2.5 rounded-lg transition-colors ${
                    isCurrent 
                      ? 'bg-brand-orange/15 text-brand-orange font-bold' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{srv.pageTitle}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-brand-orange' : 'text-gray-500'}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Service Areas */}
      <div className="p-6 rounded-2xl bg-dark-card border border-dark-border">
        <h4 className="font-heading text-lg font-black text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
          Nearby Service Areas
        </h4>
        <ul className="space-y-1.5 text-xs">
          {locationPages.filter(l => l.cleanSlug !== '/service-areas/').map((loc) => {
            const isCurrent = loc.cleanSlug === currentSlug;
            const cityName = loc.pageTitle.replace('Concrete Contractor in ', '');
            return (
              <li key={loc.slug}>
                <Link
                  href={loc.cleanSlug}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                    isCurrent 
                      ? 'bg-brand-orange/15 text-brand-orange font-bold' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-brand-orange" />
                    {cityName}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-brand-orange' : 'text-gray-500'}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    </aside>
  );
}
