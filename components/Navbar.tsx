'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Hammer, ChevronDown } from 'lucide-react';
import { navLinks, COMPANY_INFO, coreServices, locationPages } from '@/data/content';
import PhoneCTA from './PhoneCTA';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0c0d0fe6] backdrop-blur-md border-b border-dark-border shadow-2xl py-3' 
        : 'bg-[#0c0d0f] border-b border-dark-border/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center text-white shadow-md shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-200">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-xl md:text-2xl font-black tracking-wider text-white flex items-center gap-1.5 leading-none">
                MILLSTONE <span className="text-brand-orange">CONCRETE</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-dark-muted font-medium mt-0.5">
                Roswell, GA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.name === 'Services') {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-150 py-2 ${
                        isActive ? 'text-brand-orange' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-72 bg-dark-card border border-dark-border rounded-xl shadow-2xl py-3 px-2 z-50 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        <Link
                          href="/concrete-services/"
                          className="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-orange hover:bg-brand-orange/10 transition-colors"
                        >
                          All Concrete Services →
                        </Link>
                        <div className="h-px bg-dark-border my-1" />
                        <div className="max-h-80 overflow-y-auto pr-1 space-y-0.5">
                          {coreServices.map((srv) => (
                            <Link
                              key={srv.slug}
                              href={srv.cleanSlug}
                              className="block px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {srv.pageTitle}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'Service Areas') {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setAreasDropdown(true)}
                    onMouseLeave={() => setAreasDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-150 py-2 ${
                        isActive ? 'text-brand-orange' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Service Areas Dropdown */}
                    {areasDropdown && (
                      <div className="absolute top-full left-0 w-72 bg-dark-card border border-dark-border rounded-xl shadow-2xl py-3 px-2 z-50 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        <Link
                          href="/service-areas/"
                          className="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-orange hover:bg-brand-orange/10 transition-colors"
                        >
                          All Service Areas →
                        </Link>
                        <div className="h-px bg-dark-border my-1" />
                        <div className="max-h-80 overflow-y-auto pr-1 space-y-0.5">
                          {locationPages.filter(l => l.cleanSlug !== '/service-areas/').map((loc) => (
                            <Link
                              key={loc.slug}
                              href={loc.cleanSlug}
                              className="block px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {loc.pageTitle.replace('Concrete Contractor in ', '')}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-150 py-2 ${
                    isActive ? 'text-brand-orange' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA: Phone Only */}
          <div className="hidden lg:flex items-center gap-4">
            <PhoneCTA size="md" variant="solid" customText={`Call: ${COMPANY_INFO.phoneDisplay}`} />
          </div>

          {/* Mobile Menu & Phone Button */}
          <div className="flex lg:hidden items-center gap-2">
            <PhoneCTA size="sm" variant="solid" customText="Call Us" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-card border-b border-dark-border px-4 py-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-base font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'bg-brand-orange/15 text-brand-orange' : 'text-gray-200 hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-3 border-t border-dark-border">
              <p className="text-xs text-dark-muted uppercase tracking-wider mb-2 px-3">
                Immediate Phone Estimate:
              </p>
              <PhoneCTA size="lg" variant="solid" className="w-full" customText={COMPANY_INFO.phoneDisplay} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
