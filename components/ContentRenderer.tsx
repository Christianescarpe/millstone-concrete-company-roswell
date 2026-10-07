import React from 'react';
import Link from 'next/link';
import { ExternalLink, Link as LinkIcon, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PageData, COMPANY_INFO } from '@/data/content';
import PhoneCTA from './PhoneCTA';

interface ContentRendererProps {
  page: PageData;
}

export default function ContentRenderer({ page }: ContentRendererProps) {
  // Collect defined anchors from spreadsheet columns
  const internalAnchors = [
    { text: page.internalAnchor1Text, url: page.internalAnchor1Url },
    { text: page.internalAnchor2Text, url: page.internalAnchor2Url },
    { text: page.internalAnchor3Text, url: page.internalAnchor3Url },
  ].filter(a => a.text && a.url);

  const hasExternal = Boolean(page.externalAnchorText && page.externalAnchorUrl);

  return (
    <article className="w-full">
      {/* Spreadsheet HTML Content */}
      <div 
        className="prose-dark leading-relaxed font-sans"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />

      {/* Structured Anchors & Links Box */}
      {(internalAnchors.length > 0 || hasExternal) && (
        <div className="mt-12 p-6 md:p-8 bg-dark-card border border-dark-border rounded-2xl shadow-xl">
          <div className="flex items-center gap-2.5 text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
            <LinkIcon className="w-4 h-4" />
            <span>Referenced Topics & Official Resources</span>
          </div>
          <h3 className="text-xl font-heading font-black text-white tracking-wide uppercase mb-4">
            Related Links & Standards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internalAnchors.map((anchor, idx) => (
              <Link
                key={idx}
                href={anchor.url}
                className="flex items-center justify-between p-3.5 bg-dark-surface rounded-xl border border-dark-border hover:border-brand-orange/60 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white capitalize">
                    {anchor.text}
                  </span>
                </div>
                <span className="text-xs text-brand-orange font-medium group-hover:translate-x-1 transition-transform">
                  Explore →
                </span>
              </Link>
            ))}

            {hasExternal && (
              <a
                href={page.externalAnchorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-dark-surface rounded-xl border border-dark-border hover:border-brand-orange/60 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                    {page.externalAnchorText}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Immediate Phone CTA Box (No form) */}
      <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-dark-surface to-[#151922] border-2 border-brand-orange/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase block mb-1">
            // FREE ESTIMATE IN ROSWELL, GA //
          </span>
          <h4 className="text-xl md:text-2xl font-heading font-black text-white tracking-wide uppercase">
            Speak With Our Concrete Specialists Today
          </h4>
          <p className="text-sm text-gray-400 mt-1 max-w-lg">
            Direct consultation with our expert team. Transparent estimates and superior craftsmanship.
          </p>
        </div>
        <div className="shrink-0">
          <PhoneCTA size="lg" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
        </div>
      </div>
    </article>
  );
}
