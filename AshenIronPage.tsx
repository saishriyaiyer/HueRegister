import React from 'react';
import { ColorSwatch } from '../ColorSwatch';
import { TextureClassification } from '../TextureClassification';
import { Palette, TrendingUp, Lightbulb, Building2 } from 'lucide-react';

export function AshenIronPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Color Block */}
      <section className="relative h-[70vh] min-h-[500px] bg-[#4a424d] flex items-center justify-center text-white border-b border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="text-xs tracking-widest uppercase opacity-80">2027 Color of the Year</div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            Ashen Iron
          </h1>
          <div className="text-3xl tracking-widest">#4A424D</div>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            The color of resilience, forged in fire and tempered by time
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
                  Ashen Iron is a deep, warm grey with subtle purple undertones that evoke the 
                  color of forged metal cooled from the crucible. It's neither purely warm nor 
                  cold, occupying a sophisticated middle ground that speaks to balance and strength.
                </p>
                <p>
                  This color carries weight—both visually and conceptually. It suggests permanence, 
                  craftsmanship, and the kind of beauty that emerges from function and purpose rather 
                  than decoration.
                </p>
              </div>
              
              <div className="mt-8 border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-4">Technical Specifications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">HEX</span>
                    <span className="tracking-wider">#4A424D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RGB</span>
                    <span className="tracking-wider">74, 66, 77</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CMYK</span>
                    <span className="tracking-wider">4, 14, 0, 70</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HSL</span>
                    <span className="tracking-wider">284°, 8%, 28%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ColorSwatch name="Ashen Iron" hex="#4a424d" size="xl" showCode={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Texture Classification */}
      <TextureClassification colorName="Ashen Iron" colorHex="#4a424d" />

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
                  <div className="w-2 h-2 bg-[#4a424d] mt-2 flex-shrink-0" />
                  <span><strong>Resilience:</strong> Evokes strength that has been tested and proven</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4a424d] mt-2 flex-shrink-0" />
                  <span><strong>Dignity:</strong> Carries a sense of quiet authority and self-assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4a424d] mt-2 flex-shrink-0" />
                  <span><strong>Depth:</strong> Suggests complexity and substance beneath the surface</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4a424d] mt-2 flex-shrink-0" />
                  <span><strong>Timelessness:</strong> Transcends trends, feeling both ancient and modern</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">Cultural Significance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In our global research, we identified a fascinating cultural moment: the rehabilitation 
                of industrial aesthetics. From Tokyo to Detroit, abandoned factories are being transformed 
                into cultural centers, co-working spaces, and homes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ashen Iron captures this spirit—it's the color of the raw materials that built modernity, 
                now being reclaimed and recontextualized for a new era. It speaks to a generation that 
                values authenticity, durability, and the visible evidence of process and craft.
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
                Ashen Iron works exceptionally well in premium fabrics—think wool suiting, cashmere, 
                and heavy linens. It's sophisticated enough for formal wear yet grounded enough for 
                everyday pieces.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Outerwear, tailoring, luxury basics, accessories
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Interior Design</h3>
              <p className="text-gray-700 mb-4">
                In interiors, Ashen Iron creates spaces that feel both cocooning and refined. 
                It works beautifully on walls, particularly in spaces where concentration and 
                calm are desired.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Home offices, bedrooms, accent walls, cabinetry
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Product Design</h3>
              <p className="text-gray-700 mb-4">
                For consumer products, Ashen Iron signals quality and durability. It's particularly 
                effective for items that should feel substantial and long-lasting.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Electronics, kitchenware, furniture, tools
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Digital Media</h3>
              <p className="text-gray-700 mb-4">
                In digital contexts, Ashen Iron provides excellent contrast without the harshness 
                of pure black. It's ideal for interfaces that prioritize readability and reduced 
                eye strain.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Backgrounds, UI elements, typography, dark modes
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
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#4a424d' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#ffffff' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#d4a373' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Warm Sophistication</h3>
              <p className="text-gray-600">
                Ashen Iron + Pure White + Warm Caramel creates an inviting, luxurious palette
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#4a424d' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#e8e8e8' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Industrial Harmony</h3>
              <p className="text-gray-600">
                Ashen Iron + Forge Grey + Soft Silver for a cohesive, material-forward aesthetic
              </p>
            </div>
            
            <div className="border border-black p-8 bg-white">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#4a424d' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#c9a66b' }} />
                <div className="w-24 h-24 border border-black" style={{ backgroundColor: '#2d4a3e' }} />
              </div>
              <h3 className="text-lg tracking-wide uppercase mb-2">Natural Grounding</h3>
              <p className="text-gray-600">
                Ashen Iron + Antique Gold + Deep Forest brings organic richness
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
              Our predictive models suggest Ashen Iron will see peak adoption in Q2-Q3 2027, 
              particularly in the premium fashion and interior design sectors. Early adopters 
              are already incorporating it into Spring 2027 collections.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">78%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Predicted Fashion Adoption
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">Q2-Q3</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Peak Market Presence
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">3-5</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Years Expected Relevance
                </div>
              </div>
            </div>
            
            <p>
              Unlike trend-driven colors that burn bright and fade fast, Ashen Iron has the 
              characteristics of a modern classic. We anticipate it will remain relevant through 
              2030, evolving from "color of the moment" to "timeless neutral."
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#4a424d] text-white border-y border-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6">
            "Ashen Iron is the color of strength that doesn't need to shout. It's the quiet 
            confidence of something built to last, refined by fire, and ready for whatever comes next."
          </blockquote>
          <cite className="text-sm tracking-widest uppercase not-italic opacity-80">
            — The Material Colour Office, Atlas of Hues Editorial
          </cite>
        </div>
      </section>
    </div>
  );
}