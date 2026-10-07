'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/content';

interface PhoneCTAProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  showLabel?: boolean;
  className?: string;
  customText?: string;
}

export default function PhoneCTA({
  size = 'md',
  variant = 'solid',
  showLabel = true,
  className = '',
  customText
}: PhoneCTAProps) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-bold gap-2',
    lg: 'px-7 py-3.5 text-base md:text-lg font-bold gap-3'
  };

  const variantClasses = {
    solid: 'bg-brand-orange hover:bg-brand-hover text-white shadow-lg shadow-brand-orange/20 border border-brand-orange',
    outline: 'bg-transparent hover:bg-brand-orange/10 text-brand-orange border border-brand-orange/60 hover:border-brand-orange',
    ghost: 'bg-transparent hover:bg-white/5 text-white'
  };

  const displayText = customText || COMPANY_INFO.phoneDisplay;

  return (
    <a
      href={`tel:${COMPANY_INFO.phoneRaw}`}
      className={`inline-flex items-center justify-center rounded-lg uppercase tracking-wider transition-all duration-200 active:scale-95 group ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label={`Call Millstone Concrete Company at ${COMPANY_INFO.phoneDisplay}`}
    >
      <Phone className={`${size === 'lg' ? 'w-5 h-5' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-current transition-transform duration-200 group-hover:scale-110`} />
      {showLabel && (
        <span className="font-heading tracking-wide">
          {displayText}
        </span>
      )}
    </a>
  );
}
