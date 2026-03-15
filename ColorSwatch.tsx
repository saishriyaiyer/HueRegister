import React from 'react';

interface ColorSwatchProps {
  name: string;
  hex: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showCode?: boolean;
  className?: string;
}

export function ColorSwatch({ name, hex, size = 'md', showCode = true, className = '' }: ColorSwatchProps) {
  const sizeClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
    xl: 'h-96',
    hero: 'h-[60vh] min-h-[500px]'
  };
  
  return (
    <div className={`border border-black bg-white ${className}`}>
      <div 
        className={`w-full ${sizeClasses[size]}`}
        style={{ backgroundColor: hex }}
      />
      <div className="p-6 space-y-2">
        <div className="text-xl tracking-wide uppercase">{name}</div>
        {showCode && (
          <div className="text-sm text-gray-600 tracking-widest">{hex.toUpperCase()}</div>
        )}
      </div>
    </div>
  );
}
