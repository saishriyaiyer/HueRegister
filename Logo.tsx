import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', variant = 'light', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  
  const bgColor = variant === 'light' ? 'bg-black' : 'bg-white';
  const textColor = variant === 'light' ? 'text-white' : 'text-black';
  
  return (
    <div className={`inline-flex flex-col items-start gap-0.5 ${className}`}>
      <div className={`${bgColor} ${textColor} px-3 py-1.5 ${sizeClasses[size]} tracking-wider uppercase`}>
        Hue Register
      </div>
      <div className={`text-[0.65em] tracking-wide uppercase pl-0.5 ${variant === 'light' ? 'text-black' : 'text-white'}`}>
        The Material Colour Office
      </div>
    </div>
  );
}
