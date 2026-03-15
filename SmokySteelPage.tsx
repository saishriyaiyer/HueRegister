import React from 'react';
import { ColorSwatch } from '../ColorSwatch';
import { TextureClassification } from '../TextureClassification';
import { Palette, TrendingUp, Lightbulb, Building2 } from 'lucide-react';

export function SmokySteelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Color Block */}
      <section className="relative h-[70vh] min-h-[500px] bg-[#5c6366] flex items-center justify-center text-white border-b border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="text-xs tracking-widest uppercase opacity-80">2027 Color of the Year</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            Smoky Steel
          </h1>
          <div className="text-3xl tracking-widest">#5C6366</div>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            The great neutralizer—where contrasts converge and balance emerges
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
                  Smoky Steel is the most neutral of our 2027 trio, a perfectly balanced grey that 
                  refuses to lean too warm or too cool. It's the color of urban landscapes at dawn, 
                  of weathered concrete, of the patina that forms on steel exposed to the elements.
                </p>
                <p>
                  This is a color of mediation and synthesis. In a world of increasing polarization, 
                  Smoky Steel represents the middle ground—not as compromise, but as the space where 
                  different forces meet and create something new.
                </p>
              </div>
              
              <div className="mt-8 border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-4">Technical Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">HEX</span>
                    <span className="tracking-wider">#5C6366</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RGB</span>
                    <span className="tracking-wider">92, 99, 102</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMYK</span>
                    <span className="tracking-wider">10, 3, 0, 60</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HSL</span>
                    <span className="tracking-wider">198°, 5%, 38%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ColorSwatch name="Smoky Steel" hex="#5c6366" size="xl" showCode={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Texture Classification */}
      <TextureClassification colorName="Smoky Steel" colorHex="#5c6366" />

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
                  <div className="w-2 h-2 bg-[#5c6366] mt-2 flex-shrink-0" />
                  <span><strong>Balance:</strong> Creates equilibrium and visual harmony</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5c6366] mt-2 flex-shrink-0" />
                  <span><strong>Clarity:</strong> Provides mental space and reduces visual noise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5c6366] mt-2 flex-shrink-0" />
                  <span><strong>Modernity:</strong> Evokes contemporary urban environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#5c6366] mt-2 flex-shrink-0" />
                  <span><strong>Adaptability:</strong> Works harmoniously with almost any palette</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">Cultural Significance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smoky Steel emerges from our observation of global urbanization and the ways cities 
                are evolving. As metropolitan areas become increasingly dense and diverse, there's a 
                need for colors that can mediate between different aesthetic traditions and preferences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This color represents the concrete and steel that literally builds our shared spaces, 
                but also the metaphorical grey zone where different cultures, ideas, and aesthetics 
                intersect to create something uniquely contemporary.
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
                Smoky Steel is the ultimate wardrobe neutral—sophisticated enough for professional 
                settings, versatile enough for casual wear. It provides endless styling possibilities 
                without the starkness of black or the fragility of white.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Suiting, knitwear, athleisure, accessories, footwear
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Interior Design</h3>
              <p className="text-gray-700 mb-4">
                In interiors, Smoky Steel creates a gallery-like backdrop that allows other elements 
                to shine. It's particularly effective in open-plan spaces and small apartments where 
                visual cohesion is essential.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Walls, flooring, fixtures, furniture, textiles
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Product Design</h3>
              <p className="text-gray-700 mb-4">
                For consumer products, Smoky Steel signals contemporary design without dating quickly. 
                It's the color of premium tech products, modern appliances, and design-forward everyday 
                objects.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Electronics, appliances, furniture, automotive interiors
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Digital Media</h3>
              <p className="text-gray-700 mb-4">
                In digital contexts, Smoky Steel provides the perfect foundation for content-first 
                design. It offers enough contrast for readability while maintaining a sophisticated, 
                distraction-free environment.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> UI backgrounds, content platforms, minimalist interfaces, apps
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
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5c6366' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#ffffff' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#000000' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Monochrome Mastery</h3>
              <p className="text-gray-600">
                Smoky Steel + Pure White + Deep Black for timeless, graphic sophistication
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5c6366' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#e8b4b8' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#6b8e9e' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Soft Contrast</h3>
              <p className="text-gray-600">
                Smoky Steel + Dusty Rose + Muted Teal for contemporary, approachable design
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5c6366' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#4a424d' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">2027 Trinity</h3>
              <p className="text-gray-600">
                The complete 2027 palette—Smoky Steel harmonizes Ashen Iron and Forge Grey
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
              Smoky Steel has the strongest crossover potential of our three 2027 colors. Its 
              perfect neutrality makes it accessible to a wide range of industries and applications. 
              We predict it will be the first adopted and the longest lasting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">92%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Predicted Cross-Industry Adoption
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">Year-Round</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Continuous Relevance
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">7+</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Years Projected Lifespan
                </div>
              </div>
            </div>
            
            <p>
              Mid-tone greys have historically shown the strongest staying power in design contexts, 
              and Smoky Steel's particular balance gives it near-universal applicability. We anticipate 
              it will transition from "trendy" to "essential" within 18 months, establishing itself as 
              a new standard neutral alongside black, white, and navy.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#5c6366] text-white border-y border-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6">
            "Smoky Steel doesn't demand attention—it creates space for everything else to matter. 
            In a noisy world, it offers clarity. In a divided moment, it offers common ground."
          </blockquote>
          <cite className="text-sm tracking-widest uppercase not-italic opacity-80">
            — The Material Colour Office, Atlas of Hues Editorial
          </cite>
        </div>
      </section>
    </div>
  );
}