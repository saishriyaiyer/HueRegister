import React from 'react';
import { ColorSwatch } from '../ColorSwatch';
import { TextureClassification } from '../TextureClassification';
import { Palette, TrendingUp, Lightbulb, Building2 } from 'lucide-react';

export function ForgeGreyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Color Block */}
      <section className="relative h-[70vh] min-h-[500px] bg-[#5d6b7a] flex items-center justify-center text-white border-b border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="text-xs tracking-widest uppercase opacity-80">2027 Color of the Year</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            Forge Grey
          </h1>
          <div className="text-3xl tracking-widest">#5D6B7A</div>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Where industrial heritage meets artisanal innovation
          </p>
        </div>
      </section>

      {/* Color Description */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl tracking-tight uppercase mb-6">The Color</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Forge Grey is a blue-leaning grey that captures the essence of skilled craftsmanship. 
                  Its cool undertones evoke the steel of precision tools, the blue-grey of industrial 
                  aprons, and the atmospheric quality of workshop spaces where tradition meets innovation.
                </p>
                <p>
                  This is a color with integrity—it suggests reliability, expertise, and the kind of 
                  quality that comes from generations of refined practice. It's neither flashy nor 
                  retiring, but rather occupies a confident middle ground.
                </p>
              </div>
              
              <div className="mt-8 border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-4">Technical Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">HEX</span>
                    <span className="tracking-wider">#5D6B7A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RGB</span>
                    <span className="tracking-wider">93, 107, 122</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMYK</span>
                    <span className="tracking-wider">24, 12, 0, 52</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HSL</span>
                    <span className="tracking-wider">211°, 13%, 42%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ColorSwatch name="Forge Grey" hex="#5d6b7a" size="xl" showCode={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Texture Classification */}
      <TextureClassification colorName="Forge Grey" colorHex="#5d6b7a" />

      {/* Psychology */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb size={32} />
            <h2 className="text-3xl tracking-tight uppercase">Color Psychology</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">Emotional Associations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5d6b7a] mt-2 flex-shrink-0" />
                  <span><strong>Reliability:</strong> Evokes trustworthiness and dependability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5d6b7a] mt-2 flex-shrink-0" />
                  <span><strong>Craftsmanship:</strong> Suggests expertise and attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5d6b7a] mt-2 flex-shrink-0" />
                  <span><strong>Stability:</strong> Provides a sense of grounding and permanence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5d6b7a] mt-2 flex-shrink-0" />
                  <span><strong>Heritage:</strong> Connects to historical traditions of making</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">Cultural Significance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Forge Grey emerges at a time when consumers are rediscovering the value of things made 
                to last. From the resurgence of repair culture to the boom in artisanal goods, there's 
                a growing appreciation for the skills and knowledge embedded in well-made objects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This color speaks directly to that sensibility. It's the color of the blacksmith's 
                workshop, the machinist's studio, the ceramicist's kiln room—spaces where material 
                transformation happens through skill, patience, and respect for process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Building2 size={32} />
            <h2 className="text-3xl tracking-tight uppercase">Industry Applications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Fashion & Textiles</h3>
              <p className="text-gray-700 mb-4">
                Forge Grey excels in workwear-inspired fashion and technical fabrics. It bridges 
                the gap between utility and style, working equally well in performance wear and 
                everyday essentials.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Denim, workwear, activewear, shirting, knitwear
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Interior Design</h3>
              <p className="text-gray-700 mb-4">
                In interiors, Forge Grey creates spaces that feel both professional and comfortable. 
                It's particularly effective in spaces that blend living and working, providing 
                structure without formality.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Home offices, kitchens, studios, feature walls
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Product Design</h3>
              <p className="text-gray-700 mb-4">
                For products, Forge Grey communicates precision and quality. It's especially 
                effective for tools, equipment, and items where functionality is paramount.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Professional tools, kitchen equipment, tech accessories
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Digital Media</h3>
              <p className="text-gray-700 mb-4">
                In digital design, Forge Grey provides a professional, trustworthy foundation. 
                It's ideal for platforms that need to communicate reliability and expertise.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Corporate sites, financial apps, professional tools, dashboards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Pairings */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Palette size={32} />
            <h2 className="text-3xl tracking-tight uppercase">Recommended Pairings</h2>
          </div>
          
          <div className="space-y-8">
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#f5f5f5' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#d4a574' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Workshop Aesthetic</h3>
              <p className="text-gray-600">
                Forge Grey + Soft White + Brass accents for an artisanal, maker-space feel
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5c6366' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#2c3e50' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Industrial Depth</h3>
              <p className="text-gray-600">
                Forge Grey + Smoky Steel + Deep Navy for a robust, professional palette
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#e8dcc8' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#4a6b5c' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Natural Workshop</h3>
              <p className="text-gray-600">
                Forge Grey + Raw Linen + Sage Green for an organic, grounded combination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trend Analysis */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={32} />
            <h2 className="text-3xl tracking-tight uppercase">Trend Forecast</h2>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Forge Grey sits at the intersection of several major consumer trends: the return to 
              craft, the appreciation for durability, and the blending of work and life spaces. 
              We expect strong adoption across both B2B and B2C sectors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">85%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Predicted Design Adoption
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">Q1-Q4</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Year-Round Relevance
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">5+</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Years Projected Lifespan
                </div>
              </div>
            </div>
            
            <p>
              The blue-grey family has historically shown strong longevity in design contexts, 
              and Forge Grey's particular balance makes it especially versatile. We anticipate 
              it will become a staple neutral, particularly in professional and creative environments.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#5d6b7a] text-white border-y border-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6">
            "Forge Grey honors the wisdom of hands that have made things for generations, while 
            remaining open to what those hands might create next. It's a color that respects 
            the past and trusts the future."
          </blockquote>
          <cite className="text-sm tracking-widest uppercase not-italic opacity-80">
            — The Material Colour Office, Atlas of Hues Editorial
          </cite>
        </div>
      </section>
    </div>
  );
}