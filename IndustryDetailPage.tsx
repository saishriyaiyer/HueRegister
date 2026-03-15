import React from 'react';
import { ArrowLeft, TrendingUp, Activity, Package } from 'lucide-react';

interface IndustryDetailPageProps {
  industryId: string;
  onNavigate: (page: string) => void;
}

const industryData: Record<string, any> = {
  'fashion-apparel': {
    name: 'Fashion & Apparel',
    description: 'Garment systems, textile innovation, wearable culture',
    dominantColors: [
      { name: 'Charcoal Base Systems', hex: '#3a3a3a', confidence: 'HIGH', note: 'Stable across menswear and technical apparel' },
      { name: 'Warm Neutrals', hex: '#b5a393', confidence: 'HIGH', note: 'Dominant in casual and premium segments' },
      { name: 'Deep Navy', hex: '#1a2332', confidence: 'MEDIUM', note: 'Replacing black in formalwear contexts' }
    ],
    emergingShifts: [
      { signal: 'Industrial mid-greys', shift: 'Moving from cool blue-greys to warmer mineral greys', confidence: 'MEDIUM' },
      { signal: 'Oxidised metal tones', shift: 'Replacing traditional metallics in accessories', confidence: 'LOW' },
      { signal: 'Atmospheric neutrals', shift: 'Softer alternatives to stark white', confidence: 'MEDIUM' }
    ],
    cmfNotes: [
      'Heavy bias toward matte and low-sheen finishes in both synthetic and natural fibres',
      'Technical textiles adopting architectural colour language',
      'Increased use of dyed-through materials over surface treatments',
      'Colour depth achieved through fibre blending rather than saturation'
    ]
  },
  'textiles-materials': {
    name: 'Textiles & Materials',
    description: 'Fibre development, technical textiles, material research',
    dominantColors: [
      { name: 'Natural Undyed', hex: '#e8e3d9', confidence: 'HIGH', note: 'Linen, cotton, wool in raw states' },
      { name: 'Carbon Grey', hex: '#4a4a4a', confidence: 'MEDIUM', note: 'Technical performance fabrics' },
      { name: 'Mineral White', hex: '#f5f3ef', confidence: 'HIGH', note: 'Base for experimental treatments' }
    ],
    emergingShifts: [
      { signal: 'Bio-dyed earth tones', shift: 'Natural dye systems producing muted industrial greys', confidence: 'LOW' },
      { signal: 'Recycled fibre colours', shift: 'Accepting inherent colour variation in PCR textiles', confidence: 'MEDIUM' },
      { signal: 'Smart material integration', shift: 'Colour-changing and responsive fibres in neutral palettes', confidence: 'LOW' }
    ],
    cmfNotes: [
      'Colour increasingly determined by material composition rather than dye selection',
      'Acceptance of tonal variation as quality indicator in recycled systems',
      'Technical performance driving colour restraint',
      'Surface texture replacing colour as primary visual differentiator'
    ]
  },
  'interiors-architecture': {
    name: 'Interiors & Architecture',
    description: 'Spatial design, surface systems, built environment',
    dominantColors: [
      { name: 'Concrete Grey', hex: '#a8a8a8', confidence: 'HIGH', note: 'Structural exposure, honest materiality' },
      { name: 'Soft Whites', hex: '#f8f6f2', confidence: 'HIGH', note: 'Wall systems, spatial volume' },
      { name: 'Weathered Steel', hex: '#5d5d5d', confidence: 'MEDIUM', note: 'Architectural hardware, details' }
    ],
    emergingShifts: [
      { signal: 'Industrial warmth', shift: 'Adding subtle warm undertones to grey systems', confidence: 'HIGH' },
      { signal: 'Material honesty', shift: 'Exposed aggregate, raw finishes over painted surfaces', confidence: 'HIGH' },
      { signal: 'Atmospheric depth', shift: 'Layered neutral tones replacing single-colour applications', confidence: 'MEDIUM' }
    ],
    cmfNotes: [
      'Finish selection prioritised over colour selection',
      'Matte and micro-textured surfaces dominant across all material types',
      'Colour continuity across wall, floor, and ceiling planes',
      'Acceptance of material ageing and patina development'
    ]
  },
  'consumer-tech': {
    name: 'Consumer Tech',
    description: 'Electronics, interfaces, personal devices',
    dominantColors: [
      { name: 'Space Grey Systems', hex: '#75787b', confidence: 'HIGH', note: 'Dominant in premium consumer electronics' },
      { name: 'Matte Black', hex: '#2b2b2b', confidence: 'HIGH', note: 'Professional and gaming segments' },
      { name: 'Brushed Aluminium', hex: '#c0c0c0', confidence: 'MEDIUM', note: 'Mid-tier devices, appliances' }
    ],
    emergingShifts: [
      { signal: 'Warmer metal tones', shift: 'Moving from cool greys to mineral-warm neutrals', confidence: 'MEDIUM' },
      { signal: 'Anti-glare finishes', shift: 'Reducing reflective surfaces across product categories', confidence: 'HIGH' },
      { signal: 'Polymer sophistication', shift: 'Matte plastics matching metal quality perception', confidence: 'MEDIUM' }
    ],
    cmfNotes: [
      'Surface engineering more critical than base colour',
      'Anti-fingerprint coatings influencing colour perception',
      'Convergence of metal and polymer visual languages',
      'Colour as system identifier rather than aesthetic choice'
    ]
  },
  'mobility': {
    name: 'Mobility',
    description: 'Transportation design, vehicle interiors, urban systems',
    dominantColors: [
      { name: 'Automotive Grey', hex: '#6d7278', confidence: 'HIGH', note: 'Exterior paint systems' },
      { name: 'Interior Charcoal', hex: '#3d3d3d', confidence: 'HIGH', note: 'Cabin materials, upholstery' },
      { name: 'Technical Blue-Grey', hex: '#677380', confidence: 'MEDIUM', note: 'EV-specific colour language' }
    ],
    emergingShifts: [
      { signal: 'Matte exterior finishes', shift: 'Low-gloss paint systems in premium segments', confidence: 'LOW' },
      { signal: 'Sustainable material colours', shift: 'Recycled interior materials in natural grey tones', confidence: 'MEDIUM' },
      { signal: 'Ambient lighting integration', shift: 'Neutral base colours supporting dynamic lighting', confidence: 'MEDIUM' }
    ],
    cmfNotes: [
      'Long product cycles creating colour conservatism',
      'Interior colour systems increasingly architectural',
      'Material performance requirements limiting colour range',
      'Perceived durability tied to colour restraint'
    ]
  },
  'beauty-packaging': {
    name: 'Beauty & Packaging',
    description: 'Cosmetics, packaging design, retail experience',
    dominantColors: [
      { name: 'Premium Neutrals', hex: '#e5ddd3', confidence: 'HIGH', note: 'Luxury skincare packaging' },
      { name: 'Soft Blacks', hex: '#363636', confidence: 'MEDIUM', note: 'Minimalist beauty brands' },
      { name: 'Frosted Transparency', hex: '#f0f0f0', confidence: 'MEDIUM', note: 'Glass and polymer packaging' }
    ],
    emergingShifts: [
      { signal: 'Industrial refinement', shift: 'Technical materials entering premium beauty', confidence: 'MEDIUM' },
      { signal: 'Mono-material systems', shift: 'Simplified packaging using single-colour strategies', confidence: 'HIGH' },
      { signal: 'Recycled polymer aesthetics', shift: 'Accepting natural PCR colour variation', confidence: 'LOW' }
    ],
    cmfNotes: [
      'Finish sophistication compensating for colour restraint',
      'Tactile surface treatments becoming brand differentiators',
      'Shift from printed graphics to embossed/debossed details',
      'Material transparency signalling ingredient transparency'
    ]
  },
  'craft-cultural': {
    name: 'Craft & Cultural Production',
    description: 'Artisan practices, cultural objects, traditional making',
    dominantColors: [
      { name: 'Natural Clay Tones', hex: '#b8a793', confidence: 'HIGH', note: 'Ceramic and pottery work' },
      { name: 'Undyed Fibres', hex: '#e8e3d6', confidence: 'HIGH', note: 'Textile crafts, weaving' },
      { name: 'Patinated Metals', hex: '#6b6560', confidence: 'MEDIUM', note: 'Metalwork, jewellery' }
    ],
    emergingShifts: [
      { signal: 'Industrial craft hybrid', shift: 'Traditional techniques with contemporary colour restraint', confidence: 'MEDIUM' },
      { signal: 'Material-led colour', shift: 'Celebrating inherent material colours over applied finishes', confidence: 'HIGH' },
      { signal: 'Temporal aesthetics', shift: 'Designing for colour evolution through use', confidence: 'LOW' }
    ],
    cmfNotes: [
      'Colour authenticity tied to material and process honesty',
      'Rejection of synthetic precision in favour of natural variation',
      'Temporal behaviour (ageing, patina) as design feature',
      'Cultural colour meanings influencing contemporary practice'
    ]
  }
};

export function IndustryDetailPage({ industryId, onNavigate }: IndustryDetailPageProps) {
  const industry = industryData[industryId];

  if (!industry) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Industry not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <button
            onClick={() => onNavigate('industries-index')}
            className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 uppercase tracking-wide text-sm"
          >
            <ArrowLeft size={20} />
            Back to All Industries
          </button>
          <h1 className="text-5xl tracking-tight uppercase mb-4">{industry.name}</h1>
          <p className="text-xl text-gray-600">{industry.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16">
        {/* Dominant Colours Today */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Activity size={32} />
            <h2 className="text-3xl tracking-wide uppercase">Dominant Colours Today</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.dominantColors.map((color: any, index: number) => (
              <div key={index} className="border-4 border-black">
                <div 
                  className="h-48 border-b-4 border-black"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="tracking-wide uppercase">{color.name}</h3>
                    <span 
                      className={`text-xs px-3 py-1 border-2 border-black ${
                        color.confidence === 'HIGH' ? 'bg-black text-white' :
                        color.confidence === 'MEDIUM' ? 'bg-gray-300' :
                        'bg-white'
                      }`}
                    >
                      {color.confidence}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{color.hex.toUpperCase()}</p>
                  <p className="text-sm text-gray-700">{color.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Shifts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={32} />
            <h2 className="text-3xl tracking-wide uppercase">Emerging Shifts</h2>
          </div>
          <div className="border-4 border-black">
            {industry.emergingShifts.map((shift: any, index: number) => (
              <div 
                key={index}
                className={`p-8 ${index < industry.emergingShifts.length - 1 ? 'border-b-4 border-black' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl tracking-wide uppercase">{shift.signal}</h3>
                  <span 
                    className={`text-xs px-3 py-1 border-2 border-black ${
                      shift.confidence === 'HIGH' ? 'bg-black text-white' :
                      shift.confidence === 'MEDIUM' ? 'bg-gray-300' :
                      'bg-white'
                    }`}
                  >
                    {shift.confidence}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{shift.shift}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CMF Notes */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Package size={32} />
            <h2 className="text-3xl tracking-wide uppercase">CMF Notes</h2>
          </div>
          <div className="border-4 border-black p-8 bg-gray-50">
            <ul className="space-y-4">
              {industry.cmfNotes.map((note: string, index: number) => (
                <li key={index} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">→</span>
                  <p className="text-gray-700 leading-relaxed">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cross-Reference */}
        <section className="border-t-4 border-black pt-12">
          <h3 className="text-xl tracking-wide uppercase mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('cmf-direction')}
              className="border-4 border-black p-6 text-left hover:bg-gray-100 transition-colors"
            >
              <h4 className="tracking-wide uppercase mb-2">CMF Direction 2027</h4>
              <p className="text-sm text-gray-600">Material and finish specifications</p>
            </button>
            <button
              onClick={() => onNavigate('material-intelligence')}
              className="border-4 border-black p-6 text-left hover:bg-gray-100 transition-colors"
            >
              <h4 className="tracking-wide uppercase mb-2">Material Intelligence</h4>
              <p className="text-sm text-gray-600">Material systems and behaviour</p>
            </button>
            <button
              onClick={() => onNavigate('trend-analyzer')}
              className="block w-full border border-black p-6 hover:bg-gray-100 transition-colors text-left"
            >
              <h4 className="tracking-wide uppercase mb-2">Longitudinal Tracking</h4>
              <p className="text-sm text-gray-600">Event-anchored trend analysis</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}