import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustriesIndexPageProps {
  onNavigate: (page: string, industryId?: string) => void;
}

const industries = [
  {
    id: 'fashion-apparel',
    name: 'Fashion & Apparel',
    description: 'Garment systems, textile innovation, wearable culture'
  },
  {
    id: 'textiles-materials',
    name: 'Textiles & Materials',
    description: 'Fibre development, technical textiles, material research'
  },
  {
    id: 'interiors-architecture',
    name: 'Interiors & Architecture',
    description: 'Spatial design, surface systems, built environment'
  },
  {
    id: 'consumer-tech',
    name: 'Consumer Tech',
    description: 'Electronics, interfaces, personal devices'
  },
  {
    id: 'mobility',
    name: 'Mobility',
    description: 'Transportation design, vehicle interiors, urban systems'
  },
  {
    id: 'beauty-packaging',
    name: 'Beauty & Packaging',
    description: 'Cosmetics, packaging design, retail experience'
  },
  {
    id: 'craft-cultural',
    name: 'Craft & Cultural Production',
    description: 'Artisan practices, cultural objects, traditional making'
  }
];

export function IndustriesIndexPage({ onNavigate }: IndustriesIndexPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-5xl tracking-tight uppercase mb-6">Industries We Track</h1>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Hue Register monitors colour, material, and finish evolution across seven industry sectors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each industry is evaluated through event-anchored observation cycles and longitudinal tracking with human-led analysis. 
              Confidence levels reflect the strength of emerging signals relative to established patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-black">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => onNavigate('industry-detail', industry.id)}
              className="group border-black text-left transition-colors hover:bg-gray-100"
              style={{
                borderRightWidth: index % 2 === 0 ? '4px' : '0',
                borderBottomWidth: index < industries.length - 2 ? '4px' : '0'
              }}
            >
              <div className="p-12">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl tracking-wide uppercase">{industry.name}</h2>
                  <ArrowRight 
                    size={32} 
                    className="flex-shrink-0 ml-4 transition-transform group-hover:translate-x-2" 
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Methodology Note */}
        <div className="mt-16 border-4 border-black p-12 bg-gray-50">
          <h3 className="text-xl tracking-wide uppercase mb-6">About Industry Tracking</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="tracking-wide uppercase mb-2 text-sm">Observation Frequency</h4>
              <p className="text-sm text-gray-600">
                Weekly analysis of design-led platforms, trade exhibitions, and published collections
              </p>
            </div>
            <div>
              <h4 className="tracking-wide uppercase mb-2 text-sm">Signal Validation</h4>
              <p className="text-sm text-gray-600">
                Cross-industry pattern recognition, material behaviour analysis, cultural context mapping
              </p>
            </div>
            <div>
              <h4 className="tracking-wide uppercase mb-2 text-sm">Confidence Levels</h4>
              <p className="text-sm text-gray-600">
                LOW: Emerging signals | MEDIUM: Established patterns | HIGH: Dominant direction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}