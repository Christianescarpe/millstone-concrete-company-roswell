'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ExternalLink, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { PageData, COMPANY_INFO } from '@/data/content';
import { parsePageContent, ParsedSection } from '@/lib/contentParser';
import PhoneCTA from './PhoneCTA';

interface SectionRendererProps {
  page: PageData;
}

export default function SectionRenderer({ page }: SectionRendererProps) {
  const parsed = parsePageContent(page);

  // Collect defined anchors from spreadsheet columns
  const internalAnchors = [
    { text: page.internalAnchor1Text, url: page.internalAnchor1Url },
    { text: page.internalAnchor2Text, url: page.internalAnchor2Url },
    { text: page.internalAnchor3Text, url: page.internalAnchor3Url },
  ].filter(a => a.text && a.url);

  const hasExternal = Boolean(page.externalAnchorText && page.externalAnchorUrl);

  return (
    <div className="w-full bg-[#0c0d0f] text-gray-200">
      
      {/* HERO SECTION: 2 COLUMNS (H1 + Intro text on Col 1, Construction Image on Col 2) */}
      <section className="relative pt-10 pb-16 md:py-20 border-b border-dark-border bg-grid-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Col 1: H1 & Exact Intro Paragraph from sheet */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                // ROSWELL, GA CONCRETE //
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-black text-white uppercase leading-[0.98] tracking-tight">
                {parsed.h1}
              </h1>

              {/* Exact Intro Paragraph(s) from spreadsheet */}
              {parsed.introHtml && (
                <div 
                  className="prose-dark text-base sm:text-lg text-gray-300 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: parsed.introHtml }}
                />
              )}

              {/* Phone CTA Button (No forms) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PhoneCTA size="lg" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
              </div>
            </motion.div>

            {/* Col 2: High-Resolution Construction Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border shadow-2xl bg-dark-card group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={page.featuredImage || '/images/hero-concrete.webp'}
                    alt={parsed.h1}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 bg-dark-card border-t border-dark-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange block">
                      Millstone Concrete Company
                    </span>
                    <span className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                      Roswell, GA
                    </span>
                  </div>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="p-2.5 rounded-lg bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    title="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTIONS FROM SPREADSHEET */}
      <div className="divide-y divide-dark-border">
        {parsed.sections.map((section, idx) => {
          const isFaq = section.hasH3;
          const isEven = idx % 2 === 0;

          // If FAQ section: Full width structured layout
          if (isFaq) {
            return (
              <section key={section.id || idx} className="py-16 md:py-24 bg-dark-surface/40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mb-10 text-center">
                    <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-1 block">
                      // QUESTIONS &amp; ANSWERS //
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
                      {section.h2}
                    </h2>
                  </div>

                  <div 
                    className="prose-dark prose-dark-faqs bg-dark-card border border-dark-border p-6 sm:p-10 rounded-2xl shadow-xl"
                    dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                  />
                </div>
              </section>
            );
          }

          // If regular H2 section: 2 COLUMNS (H2 + paragraph on one column, Image on the other column)
          return (
            <section key={section.id || idx} className="py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* TEXT COLUMN */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                    <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase">
                      <span className="w-2 h-0.5 bg-brand-orange" />
                      <span>{String(idx + 1).padStart(2, '0')} // SPECIFICATION</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tight leading-tight">
                      {section.h2}
                    </h2>

                    {/* Exact paragraph / list content from spreadsheet */}
                    <div 
                      className="prose-dark text-gray-300 text-base leading-relaxed font-sans"
                      dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
                    />

                    {/* Quick Phone Action */}
                    <div className="pt-2">
                      <PhoneCTA size="sm" variant="outline" customText={`Direct Line: ${COMPANY_INFO.phoneDisplay}`} />
                    </div>
                  </div>

                  {/* IMAGE COLUMN */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border shadow-2xl bg-dark-card group">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={section.image}
                          alt={section.h2}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent" />
                      </div>
                      <div className="p-4 bg-dark-card border-t border-dark-border flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-medium">
                          Millstone Concrete Work
                        </span>
                        <span className="text-brand-orange uppercase font-bold tracking-wider text-[10px]">
                          Roswell, GA
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* REFERENCED TOPICS & SPREADSHEET ANCHORS MODULE */}
      {(internalAnchors.length > 0 || hasExternal) && (
        <section className="py-14 border-t border-dark-border bg-dark-surface/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 md:p-8 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">
                <LinkIcon className="w-4 h-4" />
                <span>Referenced Content &amp; Industry Standards</span>
              </div>
              <h3 className="text-xl font-heading font-black text-white tracking-wide uppercase mb-5">
                Related Pages &amp; Technical References
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {internalAnchors.map((anchor, i) => (
                  <Link
                    key={i}
                    href={anchor.url}
                    className="p-3.5 bg-dark-surface rounded-xl border border-dark-border hover:border-brand-orange group transition-all flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-gray-200 group-hover:text-brand-orange capitalize">
                      {anchor.text}
                    </span>
                    <span className="text-xs text-brand-orange font-bold">→</span>
                  </Link>
                ))}

                {hasExternal && (
                  <a
                    href={page.externalAnchorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-dark-surface rounded-xl border border-dark-border hover:border-amber-400 group transition-all flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-gray-200 group-hover:text-amber-400">
                      {page.externalAnchorText}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FINAL DIRECT PHONE CALL BANNER (NO FORM) */}
      <section className="py-16 border-t border-dark-border bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase block">
            // MILLSTONE CONCRETE COMPANY ROSWELL //
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
            Call For Immediate Concrete Inquiries
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Direct communication with our Roswell, GA crew. Call to schedule your free consultation and estimate.
          </p>
          <div className="pt-2 flex justify-center">
            <PhoneCTA size="lg" variant="solid" customText={`Call (678) 679-8108 Now`} />
          </div>
        </div>
      </section>

    </div>
  );
}
