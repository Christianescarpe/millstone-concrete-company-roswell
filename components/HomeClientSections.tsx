'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Layers, 
  MapPin, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Ruler, 
  Building2, 
  Sparkles,
  ChevronRight,
  Phone
} from 'lucide-react';
import { 
  PageData, 
  COMPANY_INFO, 
  coreServices, 
  locationPages, 
  blogPosts 
} from '@/data/content';
import PhoneCTA from './PhoneCTA';

interface HomeClientSectionsProps {
  homePage: PageData;
}

export default function HomeClientSections({ homePage }: HomeClientSectionsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const featuredHighlights = [
    {
      title: "Precision Sub-Base & Soil Preparation",
      desc: "Engineered excavation, soil compaction, and graded aggregate base ensure structural stability and eliminate settlement cracks in Georgia's clay soils.",
      image: "/images/compactor.webp",
      tag: "Sub-Base Engineering"
    },
    {
      title: "Monolithic Pouring & Steel Reinforcement",
      desc: "High-strength ready-mix concrete reinforced with rebar grids or synthetic fibers poured to exact dimensional tolerances for heavy vehicle loads.",
      image: "/images/banner-concrete.webp",
      tag: "Structural Integrity"
    },
    {
      title: "Architectural Stamping & Decorative Finishing",
      desc: "Ashlar slate, cobblestone, flagstone textures, and integral coloring sealed with UV-resistant coatings for lasting curb appeal.",
      image: "/images/stamped-1.webp",
      tag: "Artisan Craftsmanship"
    },
    {
      title: "Controlled Jointing & Proper Curing",
      desc: "Planned control joints cut at specified intervals paired with premium curing techniques maximize concrete compressive strength over 28 days.",
      image: "/images/finishing-1.webp",
      tag: "ACI Standards"
    }
  ];

  return (
    <div className="w-full bg-[#0c0d0f] text-gray-200">

      {/* HERO SECTION - Styled exactly after the reference template */}
      <section className="relative pt-10 pb-20 md:py-24 border-b border-dark-border overflow-hidden bg-grid-pattern">
        {/* Glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtext, Phone Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                // ROSWELL, GA CONCRETE CONTRACTOR //
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white uppercase leading-[0.95] tracking-tight">
                CONCRETE CONTRACTOR <span className="text-brand-orange">ROSWELL GA</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Millstone Concrete Company delivers top-rated residential and commercial concrete solutions throughout Roswell and North Fulton. From durable driveways and elegant stamped patios to solid foundations and retaining walls, we construct lasting hardscapes built to highest industry standards.
              </p>

              {/* Action Buttons: Phone CTA Only as requested */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <PhoneCTA size="lg" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-dark-border bg-dark-card hover:bg-dark-cardHover text-gray-200 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2 text-brand-orange" />
                  Roswell & North Fulton
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-dark-border/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-xs text-gray-400 font-medium">Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-xs text-gray-400 font-medium">ACI Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-xs text-gray-400 font-medium">100% Free Estimates</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero Media Layout */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border shadow-2xl bg-dark-card group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero-concrete.webp"
                    alt="Millstone Concrete Company Roswell - Expert Concrete Pouring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Floating badge over image */}
                <div className="p-6 bg-dark-card/95 border-t border-dark-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                        Craftsmanship &amp; Reliability
                      </div>
                      <div className="text-lg font-heading font-black text-white uppercase tracking-wider mt-0.5">
                        Millstone Concrete Company
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-orange/30">
                      <Phone className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-400">
                    Roswell, Alpharetta, Dunwoody, Sandy Springs &amp; surrounding North Fulton communities.
                  </div>
                </div>
              </div>

              {/* Decorative industrial corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-orange rounded-br-2xl pointer-events-none opacity-60" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS BAR - Matching the template's stats row */}
      <section className="bg-dark-surface border-b border-dark-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                14<span className="text-brand-orange">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1">
                Concrete Services
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                9<span className="text-brand-orange">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1">
                North Fulton Cities Served
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                100<span className="text-brand-orange">%</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1">
                Free On-Site Estimates
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                ACI<span className="text-brand-orange">★</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1">
                Standard Compliance
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES GRID SECTION - Matching the template's "ADVANCED SOLUTIONS" cards */}
      <section className="py-20 md:py-28 border-b border-dark-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                // COMPREHENSIVE CONCRETE SOLUTIONS //
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
                OUR CONCRETE SERVICES
              </h2>
            </div>
            <Link 
              href="/concrete-services/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover group"
            >
              <span>Explore All 14 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const num = String(index + 1).padStart(2, '0');
              return (
                <motion.div
                  key={service.slug}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="industrial-card rounded-2xl p-6 md:p-7 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-heading text-lg font-bold text-brand-orange tracking-wider">
                        [{num}]
                      </span>
                      <span className="text-xs text-dark-muted uppercase tracking-widest font-semibold">
                        Roswell, GA
                      </span>
                    </div>

                    <h3 className="font-heading text-xl lg:text-2xl font-black text-white uppercase tracking-wide group-hover:text-brand-orange transition-colors">
                      {service.pageTitle}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mt-2.5 line-clamp-3">
                      {service.metaDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-dark-border flex items-center justify-between">
                    <Link
                      href={service.cleanSlug}
                      className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-brand-orange inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a 
                      href={`tel:${COMPANY_INFO.phoneRaw}`} 
                      className="p-2 rounded-lg bg-dark-surface border border-dark-border text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-colors"
                      title="Call for estimate"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE FEATURE SHOWCASE - Matching "PROTECTING PEOPLE AND THE PLANET" */}
      <section className="py-20 md:py-28 border-b border-dark-border bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              // ENGINEERING & STANDARDS //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
              PRECISION CONCRETE STANDARDS
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mt-2">
              Every pour follows strict guidelines established by the American Concrete Institute (ACI) for sub-base compaction, reinforcement spacing, mix design, and finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Tab List */}
            <div className="lg:col-span-6 space-y-4">
              {featuredHighlights.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all text-left block ${
                      isActive 
                        ? 'bg-dark-card border-brand-orange shadow-lg shadow-brand-orange/10' 
                        : 'bg-dark-card/50 border-dark-border hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? 'text-brand-orange' : 'text-gray-400'}`}>
                        {item.tag}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-orange rotate-90' : 'text-gray-500'}`} />
                    </div>
                    <div className="font-heading text-lg lg:text-xl font-black text-white uppercase tracking-wide">
                      {item.title}
                    </div>
                    {isActive && (
                      <p className="text-sm text-gray-300 mt-2.5 leading-relaxed animate-in fade-in duration-300">
                        {item.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Feature Image Display */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border bg-dark-card shadow-2xl">
                <div className="aspect-[16/11] relative">
                  <Image
                    src={featuredHighlights[activeTab].image}
                    alt={featuredHighlights[activeTab].title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent" />
                </div>
                <div className="p-6 bg-dark-card border-t border-dark-border flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-brand-orange tracking-widest">
                      Quality Benchmark
                    </span>
                    <h4 className="text-lg font-heading font-black text-white uppercase tracking-wider">
                      {featuredHighlights[activeTab].title}
                    </h4>
                  </div>
                  <PhoneCTA size="sm" variant="solid" customText="Get Quote" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE AREAS SECTION - Grid of Cities */}
      <section className="py-20 md:py-28 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                // GEOGRAPHIC COVERAGE //
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
                SERVICE AREAS IN NORTH GEORGIA
              </h2>
              <p className="text-gray-400 text-sm mt-1 max-w-xl">
                Millstone Concrete Company provides complete residential and commercial concrete contracting across Roswell and neighboring communities.
              </p>
            </div>
            <Link 
              href="/service-areas/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover"
            >
              <span>View All Service Areas Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locationPages.filter(l => l.cleanSlug !== '/service-areas/').map((loc) => {
              const cityName = loc.pageTitle.replace('Concrete Contractor in ', '');
              return (
                <Link
                  key={loc.slug}
                  href={loc.cleanSlug}
                  className="industrial-card p-5 rounded-xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider group-hover:text-brand-orange transition-colors">
                        {cityName}
                      </h4>
                      <p className="text-xs text-dark-muted">Roswell &amp; Surrounding</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* BLOG / EDUCATIONAL GUIDES SECTION */}
      <section className="py-20 md:py-28 border-b border-dark-border bg-dark-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                // EXPERT GUIDES &amp; ARTICLES //
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tight">
                CONCRETE INSIGHTS &amp; BLOG
              </h2>
            </div>
            <Link 
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover"
            >
              <span>View All 7 Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <article 
                key={post.slug}
                className="industrial-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden bg-dark-surface">
                    <Image
                      src={post.featuredImage || '/images/hero-concrete.webp'}
                      alt={post.pageTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-orange border border-brand-orange/30">
                      Concrete Guide
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-xl font-black text-white uppercase tracking-wide group-hover:text-brand-orange transition-colors line-clamp-2">
                      <Link href={post.cleanSlug}>
                        {post.pageTitle}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-400 mt-2.5 line-clamp-3 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={post.cleanSlug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-hover transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FULL HTML CONTENT SECTION FROM SPREADSHEET (ENSURING 100% OF HOME CONTENT & ANCHORS ARE PRESENT) */}
      <section className="py-20 md:py-24 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-1 block">
              // COMPLETE OVERVIEW //
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wider">
              About Millstone Concrete Company Roswell
            </h2>
          </div>

          <div 
            className="prose-dark leading-relaxed"
            dangerouslySetInnerHTML={{ __html: homePage.contentHtml }}
          />

          {/* Home Page Anchors explicitly displayed */}
          <div className="mt-12 p-6 bg-dark-card border border-dark-border rounded-xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Explore Featured Concrete Services:
            </h4>
            <div className="flex flex-wrap gap-3">
              {homePage.internalAnchor1Url && (
                <Link
                  href={homePage.internalAnchor1Url}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-surface border border-dark-border text-xs font-semibold text-brand-orange hover:border-brand-orange transition-colors"
                >
                  {homePage.internalAnchor1Text} →
                </Link>
              )}
              {homePage.internalAnchor2Url && (
                <Link
                  href={homePage.internalAnchor2Url}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-surface border border-dark-border text-xs font-semibold text-brand-orange hover:border-brand-orange transition-colors"
                >
                  {homePage.internalAnchor2Text} →
                </Link>
              )}
              {homePage.internalAnchor3Url && (
                <Link
                  href={homePage.internalAnchor3Url}
                  className="px-3.5 py-1.5 rounded-lg bg-dark-surface border border-dark-border text-xs font-semibold text-brand-orange hover:border-brand-orange transition-colors"
                >
                  {homePage.internalAnchor3Text} →
                </Link>
              )}
              {homePage.externalAnchorUrl && (
                <a
                  href={homePage.externalAnchorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-dark-surface border border-dark-border text-xs font-semibold text-amber-400 hover:border-amber-400 transition-colors"
                >
                  {homePage.externalAnchorText} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER - Large Phone Button as required */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-dark-bg to-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            // READY TO GET STARTED? //
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none">
            START YOUR CONCRETE PROJECT IN ROSWELL, GA
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Contact Millstone Concrete Company today for a free on-site consultation and prompt quote. No forms required — give us a direct call to speak with an experienced specialist.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PhoneCTA size="lg" variant="solid" customText={`Call (678) 679-8108 Now`} />
          </div>
        </div>
      </section>

    </div>
  );
}
