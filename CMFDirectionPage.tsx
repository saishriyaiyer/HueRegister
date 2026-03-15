import React from 'react';
import { Layers, Eye, Palette, Settings, Briefcase } from 'lucide-react';

export function CMFDirectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-black bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={48} />
            <h1 className="text-5xl tracking-tight uppercase">🧩 CMF Direction 2027</h1>
          </div>
          <p className="text-2xl text-gray-700 mb-4">Quiet Industrialism</p>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            A restrained CMF language shaped by permanence, material honesty, and emotional neutrality.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16 space-y-24">
        {/* ASHEN IRON */}
        <section className="border-4 border-black">
          {/* Color Sample */}
          <div className="h-64 border-b-4 border-black bg-[#4a424d] flex items-end p-8">
            <div className="bg-white border-2 border-black px-6 py-3">
              <span className="text-2xl tracking-wide uppercase">1️⃣ ASHEN IRON</span>
            </div>
          </div>

          <div className="p-12 space-y-10">
            {/* CMF Intent */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Intent</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ashen Iron represents the densest expression of industrial neutrality. It draws from oxidised metal 
                surfaces and mineral-rich environments where colour is subdued by time, use, and exposure. The shade 
                communicates durability, restraint, and functional calm.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This colour anchors CMF systems that prioritise longevity over visual novelty.
              </p>
            </div>

            {/* Colour Behaviour */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Colour Behaviour</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ashen Iron reads as a deep, mineral grey with subtle warm undertones that soften its industrial character. 
                It absorbs light rather than reflecting it, creating a grounded visual weight across surfaces.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Under natural or diffused lighting, the colour appears stable and composed. Under sharp lighting, it reveals 
                nuanced depth rather than contrast.
              </p>
            </div>

            {/* Material Compatibility */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Layers size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Material Compatibility</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Metals</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Cast iron</li>
                    <li>• Powder-coated steel</li>
                    <li>• Dark anodised aluminium</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Textiles</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dense wool</li>
                    <li>• Recycled polyester twill</li>
                    <li>• Felted blends</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Surfaces</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Stone composites</li>
                    <li>• Ceramic tiles</li>
                    <li>• Fibre cement</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                On textiles, Ashen Iron gains warmth and tactility. On metal and hard surfaces, it sharpens into a serious, 
                utilitarian presence.
              </p>
            </div>

            {/* Finish Recommendations */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Settings size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Finish Recommendations</h3>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 mb-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#4a424d] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Matte</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#4a424d] border-2 border-black mb-2" style={{ opacity: 0.9 }} />
                    <p className="text-xs uppercase tracking-wide">Low-Sheen Powder</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#4a424d] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Micro-Textured</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#4a424d] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Soft-Touch</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Gloss finishes are discouraged</strong>, as they disrupt the colour's intended restraint.
              </p>
            </div>

            {/* CMF Applications */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Applications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Automotive interiors</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Architectural hardware</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Wearable technology casings</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Furniture frames and structural elements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORGE GREY */}
        <section className="border-4 border-black">
          {/* Color Sample */}
          <div className="h-64 border-b-4 border-black bg-[#5d6b7a] flex items-end p-8">
            <div className="bg-white border-2 border-black px-6 py-3">
              <span className="text-2xl tracking-wide uppercase">2️⃣ FORGE GREY</span>
            </div>
          </div>

          <div className="p-12 space-y-10">
            {/* CMF Intent */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Intent</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Forge Grey captures the moment of transformation — material shaped by heat, pressure, and precision. 
                It sits between warmth and coolness, offering balance and adaptability across industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This colour functions as a system connector, bridging darker anchors and lighter industrial neutrals.
              </p>
            </div>

            {/* Colour Behaviour */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Colour Behaviour</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Forge Grey is a balanced mid-tone industrial grey with cool undertones that remain stable across lighting 
                conditions. It reflects light softly, reducing glare and visual noise while maintaining clarity of form.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The colour adapts well to both large surfaces and detailed components.
              </p>
            </div>

            {/* Material Compatibility */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Layers size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Material Compatibility</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Metals</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Brushed steel</li>
                    <li>• Bead-blasted aluminium</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Textiles</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Technical knits</li>
                    <li>• Coated fabrics</li>
                    <li>• Upholstery blends</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Polymers</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Matte ABS</li>
                    <li>• Recycled plastics</li>
                    <li>• TPU</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Forge Grey performs especially well on brushed and directional surfaces, where texture enhances its dimensionality.
              </p>
            </div>

            {/* Finish Recommendations */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Settings size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Finish Recommendations</h3>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 mb-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5d6b7a] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Brushed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5d6b7a] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Satin Matte</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5d6b7a] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Bead-Blasted</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5d6b7a] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Fine-Grain Powder</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>High-polish finishes flatten the colour</strong> and are not recommended.
              </p>
            </div>

            {/* CMF Applications */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Applications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Consumer electronics</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Kitchen and appliance panels</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Office furniture systems</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Interior architectural elements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SMOKY STEEL */}
        <section className="border-4 border-black">
          {/* Color Sample */}
          <div className="h-64 border-b-4 border-black bg-[#5c6366] flex items-end p-8">
            <div className="bg-white border-2 border-black px-6 py-3">
              <span className="text-2xl tracking-wide uppercase">3️⃣ SMOKY STEEL</span>
            </div>
          </div>

          <div className="p-12 space-y-10">
            {/* CMF Intent */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Intent</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smoky Steel introduces atmospheric softness into industrial CMF palettes. Inspired by heat-treated metals 
                and filtered industrial environments, it balances technical precision with emotional accessibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This colour is ideal where industrial language must feel human and approachable.
              </p>
            </div>

            {/* Colour Behaviour */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Colour Behaviour</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smoky Steel is a cool metallic grey diffused by soft, smoky undertones. It reacts sensitively to lighting, 
                appearing lighter in open environments and deeper in enclosed or low-light settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The colour creates visual depth without sharp contrast.
              </p>
            </div>

            {/* Material Compatibility */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Layers size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Material Compatibility</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Metals</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Stainless steel</li>
                    <li>• Smoke-anodised aluminium</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Textiles</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Smooth weaves</li>
                    <li>• Technical jerseys</li>
                    <li>• Mesh structures</li>
                  </ul>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="tracking-wide uppercase text-sm mb-2">Surfaces</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Glass coatings</li>
                    <li>• Ceramic glazes</li>
                    <li>• Composite panels</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                On metal, Smoky Steel feels refined and technical. On textiles, it becomes lighter and more fluid.
              </p>
            </div>

            {/* Finish Recommendations */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Settings size={24} />
                <h3 className="text-2xl tracking-wide uppercase">Finish Recommendations</h3>
              </div>
              <div className="bg-gray-50 border-4 border-black p-6 mb-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5c6366] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Satin</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5c6366] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Low-Gloss Metallic</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5c6366] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Fine Brushed</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-[#5c6366] border-2 border-black mb-2" />
                    <p className="text-xs uppercase tracking-wide">Soft Anodised</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Avoid coarse textures</strong>, which disrupt the colour's atmospheric quality.
              </p>
            </div>

            {/* CMF Applications */}
            <div className="border-t-4 border-black pt-10">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={24} />
                <h3 className="text-2xl tracking-wide uppercase">CMF Applications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Personal electronics</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Packaging for premium tech and beauty</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Interior accessories</p>
                </div>
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-gray-700">Mobility and transit interiors</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
