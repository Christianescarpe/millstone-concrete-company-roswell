import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Hammer, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, coreServices, locationPages, blogPosts } from '@/data/content';
import PhoneCTA from './PhoneCTA';

export default function Footer() {
  return (
    <footer className="bg-[#08090b] border-t border-dark-border text-gray-400">
      
      {/* Top CTA Row */}
      <div className="border-b border-dark-border/60 bg-dark-surface/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-1 block">
                // ROSWELL, GA //
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-wider">
                Millstone Concrete Company Roswell
              </h2>
            </div>
            <div>
              <PhoneCTA size="lg" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Google Map Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: NAP & Contact Details from Sheet Note 8 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center text-white">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="font-heading text-lg font-black text-white tracking-wider">
                MILLSTONE <span className="text-brand-orange">CONCRETE</span>
              </span>
            </Link>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-gray-300">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="text-white font-bold hover:text-brand-orange transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Concrete Services */}
          <div>
            <h3 className="font-heading text-base font-bold text-white tracking-wider uppercase mb-3 border-l-2 border-brand-orange pl-2.5">
              Concrete Services
            </h3>
            <ul className="space-y-2 text-xs">
              {coreServices.slice(0, 8).map((srv) => (
                <li key={srv.slug}>
                  <Link 
                    href={srv.cleanSlug}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-orange/60" />
                    <span>{srv.pageTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/concrete-services/" 
                  className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  All Concrete Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="font-heading text-base font-bold text-white tracking-wider uppercase mb-3 border-l-2 border-brand-orange pl-2.5">
              Service Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {locationPages.filter(l => l.cleanSlug !== '/service-areas/').map((loc) => (
                <li key={loc.slug}>
                  <Link 
                    href={loc.cleanSlug}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-orange/60" />
                    <span>{loc.pageTitle.replace('Concrete Contractor in ', '')}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/service-areas/" 
                  className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog Articles */}
          <div>
            <h3 className="font-heading text-base font-bold text-white tracking-wider uppercase mb-3 border-l-2 border-brand-orange pl-2.5">
              Blog &amp; Guides
            </h3>
            <ul className="space-y-2 text-xs">
              {blogPosts.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <Link 
                    href={post.cleanSlug}
                    className="hover:text-white transition-colors block line-clamp-1"
                  >
                    • {post.pageTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/blog/" 
                  className="text-brand-orange font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  All Blog Guides →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* GOOGLE MAP EMBED: Visible as requested */}
        <div className="mt-10 pt-8 border-t border-dark-border">
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                // MAP LOCATION //
              </span>
              <h3 className="text-lg font-heading font-black text-white tracking-wide uppercase">
                Millstone Concrete Company Roswell
              </h3>
            </div>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-dark-border shadow-2xl relative bg-dark-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7936970868004!2d-84.33830329999999!3d34.04845830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575801a683b4f%3A0xe98063d08ce25d32!2sMillstone%20Concrete%20Company%20Roswell!5e1!3m2!1sen!2sph!4v1791378874103!5m2!1sen!2sph" 
              width="100%" 
              height="360" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Millstone Concrete Company Roswell Location Map"
            />
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-dark-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Millstone Concrete Company Roswell. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/concrete-services/" className="hover:text-white transition-colors">Services</Link>
            <Link href="/service-areas/" className="hover:text-white transition-colors">Service Areas</Link>
            <Link href="/gallery/" className="hover:text-white transition-colors">Gallery</Link>
            <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about/" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact/" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
