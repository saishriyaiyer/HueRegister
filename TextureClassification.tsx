import React from 'react';
import { Layers, Hand, Eye, Cog, Clock } from 'lucide-react';

interface TextureClassificationProps {
  colorName: string;
  colorHex: string;
}

export function TextureClassification({ colorName, colorHex }: TextureClassificationProps) {
  return (
    <section className="py-20 bg-gray-50 border-y border-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl tracking-tight uppercase mb-12">
          Texture & Finish Intelligence
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Understanding how {colorName} performs across different texture types is critical for CMF 
          (Color, Material, Finish) decisions. Our texture classification system provides industry-standard 
          guidance for material specification and application.
        </p>

        {/* Surface Texture */}
        <div className="mb-12 border border-black bg-white">
          <div className="border-b border-black p-6 bg-[#4a424d] text-white flex items-center gap-4">
            <Hand size={32} />
            <div>
              <h3 className="text-xl tracking-wide uppercase">1. Surface Texture (Physical / Tactile)</h3>
              <p className="text-sm text-gray-300 mt-1">What the hand feels — measurable and CMF-standard</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Common Categories</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Smooth</strong> – polished, moulded, coated surfaces
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Micro-textured</strong> – fine grain, bead-blasted, soft-touch finishes
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Coarse / Rough</strong> – sandblasted, raw cast, heavy weave
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Directional</strong> – brushed, ribbed, fluted patterns
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Patterned relief</strong> – knurled, embossed, perforated
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Where to Use</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Product casings, hardware, furniture frames, packaging surfaces
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4 mt-6">
                  <div className="text-xs tracking-[0.1em] uppercase mb-2 text-gray-600">CMF Recommendation</div>
                  <p className="text-sm text-gray-700">
                    {colorName} performs best on micro-textured and sandblasted surfaces where tactile 
                    restraint reinforces visual weight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Texture */}
        <div className="mb-12 border border-black bg-white">
          <div className="border-b border-black p-6 bg-[#5d6b7a] text-white flex items-center gap-4">
            <Layers size={32} />
            <div>
              <h3 className="text-xl tracking-wide uppercase">2. Material Texture (Inherent to Material)</h3>
              <p className="text-sm text-gray-300 mt-1">What the material naturally expresses</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Material Categories</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Metallic grain</strong> – brushed steel, anodised aluminium
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Mineral / stone-like</strong> – concrete, terrazzo, ceramic
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Fibrous</strong> – wool, felt, paper pulp, nonwovens
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Polymeric</strong> – matte plastics, rubberised surfaces
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Composite</strong> – fibre cement, recycled blends
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Where to Use</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Architecture, interiors, mobility, textiles
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4 mt-6">
                  <div className="text-xs tracking-[0.1em] uppercase mb-2 text-gray-600">CMF Recommendation</div>
                  <p className="text-sm text-gray-700">
                    {colorName} gains dimensional depth on brushed metallic grains and technical polymer 
                    surfaces, where material honesty reinforces industrial character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Texture */}
        <div className="mb-12 border border-black bg-white">
          <div className="border-b border-black p-6 bg-[#5c6366] text-white flex items-center gap-4">
            <Eye size={32} />
            <div>
              <h3 className="text-xl tracking-wide uppercase">3. Visual Texture (Optical, Not Tactile)</h3>
              <p className="text-sm text-gray-300 mt-1">What the eye perceives, even if the surface is smooth</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Visual Categories</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Matte absorption</strong> – low reflectivity, color depth
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Soft diffusion</strong> – satin, low-sheen finishes
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Subtle reflectivity</strong> – controlled highlights
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Layered opacity</strong> – smoked, frosted, translucent
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Depth illusion</strong> – tonal variation, shadow play
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Where to Use</h4>
                <p className="text-sm text-gray-700 mb-4">
                  UI hardware, lighting environments, glass/coatings, digital-physical interfaces
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4 mt-6">
                  <div className="text-xs tracking-[0.1em] uppercase mb-2 text-gray-600">CMF Recommendation</div>
                  <p className="text-sm text-gray-700">
                    {colorName} relies on visual texture — diffusing light rather than reflecting it — to 
                    create atmospheric depth in environments and surfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Texture */}
        <div className="mb-12 border border-black bg-white">
          <div className="border-b border-black p-6 bg-[#4a424d] text-white flex items-center gap-4">
            <Cog size={32} />
            <div>
              <h3 className="text-xl tracking-wide uppercase">4. Construction / Structural Texture</h3>
              <p className="text-sm text-gray-300 mt-1">How texture is created through making</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Construction Methods</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Woven / knitted</strong> – plain, twill, technical knits
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Layered</strong> – laminated, bonded, coated
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Moulded</strong> – injection moulding, compression
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Cast / formed</strong> – die-cast, extruded, forged
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Stitched / assembled</strong> – seams, quilting, paneling
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Where to Use</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Fashion, soft furnishings, automotive interiors, wearables
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4 mt-6">
                  <div className="text-xs tracking-[0.1em] uppercase mb-2 text-gray-600">CMF Recommendation</div>
                  <p className="text-sm text-gray-700">
                    In textiles, {colorName} benefits from dense constructions that reinforce its grounded 
                    character. Twill weaves and technical knits provide appropriate structural expression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Age & Use Texture */}
        <div className="mb-12 border border-black bg-white">
          <div className="border-b border-black p-6 bg-[#5d6b7a] text-white flex items-center gap-4">
            <Clock size={32} />
            <div>
              <h3 className="text-xl tracking-wide uppercase">5. Age & Use Texture (Temporal Texture)</h3>
              <p className="text-sm text-gray-300 mt-1">How texture evolves over time</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Temporal Changes</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Patina development</strong> – oxidation, wear marks
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Wear softening</strong> – fabric breakdown, polish
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Edge burnishing</strong> – contact-point aging
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Colour mellowing</strong> – UV fade, depth increase
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <div>
                      <strong>Surface fatigue</strong> – character lines, memory
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-gray-600">Where to Use</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Furniture, architecture, mobility, long-life products
                </p>
                <div className="bg-gray-50 border border-gray-300 p-4 mt-6">
                  <div className="text-xs tracking-[0.1em] uppercase mb-2 text-gray-600">CMF Recommendation</div>
                  <p className="text-sm text-gray-700">
                    {colorName} is designed to age quietly, developing surface character rather than visual 
                    degradation. Patina on metals and wear on textiles enhance rather than diminish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Quick Map */}
        <div className="border border-black bg-white p-8">
          <h3 className="text-xl tracking-wide uppercase mb-6">Texture × Industry Quick Reference</h3>
          <p className="text-sm text-gray-600 mb-6">
            Guidance for selecting texture focus based on your industry context
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Fashion</strong>
              <span className="text-gray-600">Fibrous, woven, layered</span>
            </div>
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Interiors</strong>
              <span className="text-gray-600">Mineral, matte, structural</span>
            </div>
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Consumer Tech</strong>
              <span className="text-gray-600">Micro-textured, satin, soft-touch</span>
            </div>
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Mobility</strong>
              <span className="text-gray-600">Durable, grain-controlled, wear-aware</span>
            </div>
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Packaging</strong>
              <span className="text-gray-600">Tactile contrast, matte vs satin</span>
            </div>
            <div className="border border-gray-300 p-4">
              <strong className="block mb-2">Architecture</strong>
              <span className="text-gray-600">Patina, surface honesty, temporal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
