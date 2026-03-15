import React, { useState } from 'react';
import { Boxes, ChevronDown, ChevronUp } from 'lucide-react';

interface MaterialSystem {
  id: string;
  title: string;
  description: string;
  subcategories: string[];
  cmfRelevance: string;
  example: string;
}

const materialSystems: MaterialSystem[] = [
  {
    id: 'metallic',
    title: '1️⃣ Metallic Systems',
    description: 'Not just "metal"; defined by composition and surface treatment.',
    subcategories: [
      'Ferrous: cast iron, carbon steel, weathering steel',
      'Non-ferrous: aluminium, brass, copper, zinc',
      'Engineered alloys: stainless steel grades, titanium alloys',
      'Surface-modified metals: anodised, PVD-coated, heat-treated',
      'Powder-coated metals'
    ],
    cmfRelevance: 'Reflectivity, thermal perception, structural honesty, precision vs mass',
    example: 'Ashen Iron aligns with ferrous and powder-coated metals where surface restraint reinforces visual weight.'
  },
  {
    id: 'mineral',
    title: '2️⃣ Mineral & Inorganic Systems',
    description: 'Permanence, weight perception, light interaction.',
    subcategories: [
      'Stone-based: granite, basalt, slate',
      'Engineered stone: quartz composites, terrazzo',
      'Ceramics: porcelain, stoneware, technical ceramics',
      'Glass systems: clear, frosted, smoked, laminated',
      'Cementitious: concrete, fibre cement, microcement'
    ],
    cmfRelevance: 'Permanence, weight perception, light interaction',
    example: 'Forge Grey performs strongly on mineral systems with controlled porosity and matte finishes.'
  },
  {
    id: 'polymer',
    title: '3️⃣ Polymer & Synthetic Systems',
    description: 'Where most CMF applications occur; focus on engineered behaviour.',
    subcategories: [
      'Commodity polymers: ABS, PP, PE',
      'Engineering plastics: PC, PA (nylon), PBT',
      'Elastomers: TPU, TPE, silicone',
      'Recycled polymers: PCR plastics, blended recyclates',
      'Bio-polymers: PLA, PHA, cellulose-based plastics'
    ],
    cmfRelevance: 'Engineered behaviour, surface engineering, colour stability',
    example: 'Smoky Steel translates effectively onto matte polymer systems, maintaining depth without metallic glare.'
  },
  {
    id: 'fibrous',
    title: '4️⃣ Fibrous & Textile Systems',
    description: 'Not just fabric; includes natural, synthetic, and technical fibres.',
    subcategories: [
      'Natural fibres: cotton, wool, silk, linen',
      'Regenerated fibres: viscose, modal, lyocell',
      'Synthetic fibres: polyester, nylon, acrylic',
      'Technical textiles: spacer fabrics, nonwovens, meshes',
      'Blended systems: fibre mixes for performance'
    ],
    cmfRelevance: 'Tactility, drape, surface texture, light absorption',
    example: 'Ashen Iron gains warmth and tactility when applied to dense fibrous textiles.'
  },
  {
    id: 'composite',
    title: '5️⃣ Composite & Hybrid Systems',
    description: 'Critical for contemporary CMF; multi-material performance.',
    subcategories: [
      'Fibre-reinforced composites: carbon fibre, glass fibre',
      'Layered composites: laminated panels, bonded structures',
      'Bio-composites: natural fibre + resin blends',
      'Sandwich panels: lightweight structural systems',
      'Multi-material assemblies: metal–polymer hybrids'
    ],
    cmfRelevance: 'Structural integration, visual continuity, performance optimization',
    example: 'Forge Grey supports composite systems where visual continuity masks structural complexity.'
  },
  {
    id: 'surface-engineered',
    title: '6️⃣ Surface-Engineered Materials',
    description: 'Defined by treatment rather than base substance.',
    subcategories: [
      'Coated surfaces: paint systems, lacquers',
      'Anodised layers',
      'PVD / CVD coatings',
      'Soft-touch coatings',
      'Anti-fingerprint / anti-glare finishes'
    ],
    cmfRelevance: 'Finish quality, durability, haptic response',
    example: 'CMF intent prioritises surface-engineered materials that resist visual wear.'
  },
  {
    id: 'bio-based',
    title: '7️⃣ Bio-based & Alternative Materials',
    description: 'Ethical and experimental, used with measured language.',
    subcategories: [
      'Mycelium-based materials',
      'Algae-based materials',
      'Plant-fibre composites',
      'Recycled cellulose boards',
      'Lab-grown leather alternatives'
    ],
    cmfRelevance: 'Material variability, surface character, sustainability narrative',
    example: 'These materials introduce variability that aligns with the atmospheric softness of Smoky Steel.'
  },
  {
    id: 'temporal',
    title: '8️⃣ Temporal Material Behaviour',
    description: 'How materials change over time.',
    subcategories: [
      'UV ageing',
      'Oxidation & patina development',
      'Softening or abrasion',
      'Colour shift / mellowing',
      'Edge burnishing'
    ],
    cmfRelevance: 'Long-term colour stability, designed ageing',
    example: 'Hue Register colours are designed to age quietly, developing surface character rather than visual degradation.'
  }
];

const industryMapping = [
  { industry: 'Fashion & Apparel', focus: 'Fibrous, blended, technical textiles' },
  { industry: 'Interiors & Architecture', focus: 'Mineral, cementitious, engineered metals' },
  { industry: 'Consumer Tech', focus: 'Polymers, surface-engineered metals' },
  { industry: 'Mobility', focus: 'Metal alloys, composites, performance polymers' },
  { industry: 'Packaging', focus: 'Polymers, bio-composites, surface coatings' },
  { industry: 'Product & Craft', focus: 'Composites, polymers, natural fibres' }
];

export function MaterialIntelligencePage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['metallic']);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id)
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-black bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex items-center gap-4 mb-6">
            <Boxes size={48} />
            <h1 className="text-5xl tracking-tight uppercase">Material Intelligence</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-6">
            Hue Register evaluates materials as engineered systems, not aesthetic labels. Material is defined not 
            only by substance but by origin, processing, behaviour, and temporal performance.
          </p>
          <p className="text-sm text-gray-600 max-w-3xl">
            This taxonomy provides context for CMF decisions across industries, helping designers understand how 
            colour behaves when applied to different material substrates and surface treatments.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Material Systems */}
        <div className="space-y-0 border-4 border-black">
          {materialSystems.map((system, index) => (
            <div 
              key={system.id}
              className={index < materialSystems.length - 1 ? 'border-b-4 border-black' : ''}
            >
              <button
                onClick={() => toggleSection(system.id)}
                className="w-full text-left p-8 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl tracking-wide uppercase mb-2">{system.title}</h2>
                    <p className="text-gray-600">{system.description}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedSections.includes(system.id) ? (
                      <ChevronUp size={32} />
                    ) : (
                      <ChevronDown size={32} />
                    )}
                  </div>
                </div>
              </button>

              {expandedSections.includes(system.id) && (
                <div className="px-8 pb-8 space-y-6 bg-white">
                  {/* Subcategories */}
                  <div>
                    <h3 className="tracking-wide uppercase text-sm mb-3 text-gray-500">Sub-categories</h3>
                    <ul className="space-y-2">
                      {system.subcategories.map((subcat, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-gray-400">→</span>
                          <span className="text-gray-700">{subcat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CMF Relevance */}
                  <div className="border-l-4 border-black pl-6 py-3 bg-gray-50">
                    <h3 className="tracking-wide uppercase text-sm mb-2 text-gray-500">CMF Relevance</h3>
                    <p className="text-gray-700">{system.cmfRelevance}</p>
                  </div>

                  {/* Example */}
                  <div className="border-4 border-black p-6 bg-gray-50">
                    <h3 className="tracking-wide uppercase text-sm mb-3 text-gray-500">Example Application</h3>
                    <p className="text-gray-700 italic">"{system.example}"</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Material × Industry Mapping */}
        <div className="mt-24">
          <div className="border-4 border-black bg-gray-50 p-12">
            <div className="flex items-center gap-3 mb-8">
              <Boxes size={32} />
              <h2 className="text-3xl tracking-wide uppercase">9️⃣ Material × Industry Mapping</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Allows users to see which materials best support colour behaviour in context.
            </p>

            <div className="border-4 border-black bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-2 border-b-4 border-black">
                <div className="p-6 border-r-4 border-black">
                  <h3 className="tracking-wide uppercase">Industry</h3>
                </div>
                <div className="p-6">
                  <h3 className="tracking-wide uppercase">Key Material Focus</h3>
                </div>
              </div>

              {/* Table Rows */}
              {industryMapping.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-2 ${index < industryMapping.length - 1 ? 'border-b-4 border-black' : ''}`}
                >
                  <div className="p-6 border-r-4 border-black">
                    <p className="text-gray-700">{row.industry}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">{row.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 border-t-4 border-black pt-12">
          <h3 className="text-xl tracking-wide uppercase mb-6">Usage Notes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6">
              <h4 className="tracking-wide uppercase text-sm mb-3">For Designers</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Use this taxonomy to understand how your chosen colour will translate across different material 
                substrates and surface treatments. Material selection significantly impacts colour perception.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h4 className="tracking-wide uppercase text-sm mb-3">For Forecasters</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Material trends often precede colour trends. Monitoring material innovation and adoption patterns 
                provides early signals for emerging colour directions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
