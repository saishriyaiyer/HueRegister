import React from 'react';

const industries = [
  {
    name: 'Fashion & Apparel',
    description: 'Fashion responds quickly to cultural mood and often introduces new color directions before they stabilize elsewhere. Observing runway collections, lookbooks, editorial campaigns, and retail launches provides early signals of emerging color consciousness.',
    sources: ['Runway archives', 'Brand lookbooks', 'Editorial campaigns', 'Retail collections']
  },
  {
    name: 'Interiors & Furniture',
    description: 'Interior design reflects longer-term cultural values and lifestyle aspirations. Furniture, textiles, and spatial color choices reveal how people want to live and what emotional environments they seek to create.',
    sources: ['Furniture collections', 'Textile launches', 'Showroom displays', 'Design fairs']
  },
  {
    name: 'Consumer Tech & UI',
    description: 'Technology products and digital interfaces reveal color preferences at mass scale. Hardware finishes, UI palettes, and brand identity choices reflect both technical constraints and cultural taste.',
    sources: ['Product launches', 'Interface design', 'Brand systems', 'App ecosystems']
  },
  {
    name: 'Beauty & Wellness',
    description: 'Beauty and wellness industries move color from abstract concept to intimate, personal application. Packaging, product formulation, and brand positioning reveal deeply felt cultural associations with specific hues.',
    sources: ['Product packaging', 'Brand campaigns', 'Wellness spaces', 'Cosmetic launches']
  },
  {
    name: 'Automotive & Mobility',
    description: 'Automotive color choices represent significant consumer commitment and reveal aspirational identity. Vehicle finishes, interior materials, and mobility brand systems show how color communicates status and values.',
    sources: ['Vehicle launches', 'Concept vehicles', 'Interior materials', 'Brand identity']
  },
  {
    name: 'Packaging & Branding',
    description: 'Packaging and brand identity operate at the intersection of commerce and culture. Color decisions in this space reflect market positioning, category norms, and strategic differentiation.',
    sources: ['Brand launches', 'Packaging systems', 'Visual identity', 'Retail presence']
  }
];

export function IndustriesObservedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            Industries Observed
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6]">
              Six industries selected for their design intentionality, visual leadership, and cultural influence. Each industry offers distinct insights into how color moves through contemporary culture.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Cards */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="space-y-20">
          {industries.map((industry, index) => (
            <div key={index} className="border-l-4 border-black pl-8">
              <h2 className="uppercase tracking-[0.15em] mb-6">
                {industry.name}
              </h2>
              <div className="max-w-3xl mb-8">
                <p className="text-[18px] leading-[1.6]">
                  {industry.description}
                </p>
              </div>
              <div>
                <p className="uppercase tracking-[0.1em] text-[14px] mb-4">
                  Observed Sources
                </p>
                <div className="flex flex-wrap gap-3">
                  {industry.sources.map((source, idx) => (
                    <div key={idx} className="border border-black px-4 py-2">
                      <p className="text-[14px]">{source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Industry Signals */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="uppercase tracking-[0.15em] mb-12">
            Cross-Industry Pattern Recognition
          </h2>
          <div className="max-w-4xl">
            <p className="text-[18px] leading-[1.6] mb-8">
              The most significant color signals appear when the same hue family emerges independently across multiple industries. This cross-pollination indicates genuine cultural movement rather than isolated trend cycles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border-t-2 border-black pt-6">
                <h3 className="uppercase tracking-[0.1em] mb-4">
                  Weak Signal
                </h3>
                <p className="text-[16px] leading-[1.6]">
                  Color appears in 1-2 industries only. Likely category-specific or brand-driven.
                </p>
              </div>
              <div className="border-t-2 border-black pt-6">
                <h3 className="uppercase tracking-[0.1em] mb-4">
                  Strong Signal
                </h3>
                <p className="text-[16px] leading-[1.6]">
                  Color appears in 4+ industries over sustained periods. Indicates cultural resonance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
