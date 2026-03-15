import React from 'react';
import { TrendingUp, Globe, BarChart, Calendar } from 'lucide-react';

export function TrendIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Trend Intelligence<br />Hub
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
            Event-anchored insights into color trends, market adoption, and emerging patterns shaping 
            the future of design.
          </p>
          
          {/* Human in the Loop Declaration */}
          <div className="bg-black text-white px-8 py-6 border-l-4 border-[#4a424d] max-w-3xl">
            <div className="text-xs tracking-[0.15em] mb-3 text-gray-300">HUMAN IN THE LOOP — RESEARCH INTEGRITY</div>
            <p className="text-sm leading-relaxed">
              All computational signals are reviewed, filtered, and interpreted by human designers 
              before publication. Our longitudinal tracking combines technological precision with 
              expert judgment to ensure actionable, contextually-informed trend intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Current Trends */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Current Trend Signals</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest uppercase mb-4">
                Strong Signal
              </div>
              <h3 className="text-xl tracking-wide uppercase mb-3">Industrial Renaissance</h3>
              <p className="text-gray-700 mb-4">
                Continued and accelerating interest in industrial aesthetics across fashion, interiors, 
                and product design. This isn't nostalgia—it's a reframing of industrial heritage as a 
                foundation for innovation.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Evidence:</strong> 340% increase in searches for "industrial design" • Rising 
                popularity of workshop-style retail spaces • Material innovation in metals and concrete
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest uppercase mb-4">
                Strong Signal
              </div>
              <h3 className="text-xl tracking-wide uppercase mb-3">Neutral Sophistication</h3>
              <p className="text-gray-700 mb-4">
                Move away from saturated color toward complex neutrals. Consumers increasingly value 
                versatility and longevity over trend-driven bright colors. Neutrals signal quality and 
                considered design.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Evidence:</strong> Premium brands adopting neutral palettes • "Quiet luxury" 
                movement • Increased sales of grey-toned products
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="inline-block px-3 py-1 bg-gray-800 text-white text-xs tracking-widest uppercase mb-4">
                Emerging Signal
              </div>
              <h3 className="text-xl tracking-wide uppercase mb-3">Material Honesty</h3>
              <p className="text-gray-700 mb-4">
                Growing preference for materials that look like what they are—uncoated metals, raw 
                concrete, natural textiles. Colors that reflect material reality rather than applied 
                decoration.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Evidence:</strong> Architecture emphasizing exposed materials • Fashion returning 
                to natural dyeing • Product design showcasing manufacturing processes
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="inline-block px-3 py-1 bg-gray-800 text-white text-xs tracking-widest uppercase mb-4">
                Emerging Signal
              </div>
              <h3 className="text-xl tracking-wide uppercase mb-3">Digital Minimalism</h3>
              <p className="text-gray-700 mb-4">
                As digital interfaces become more ubiquitous, there's movement toward visual restraint 
                and reduced color palettes. Priority on readability and reduced cognitive load.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Evidence:</strong> Major platforms simplifying color schemes • Growth in "focus 
                mode" features • Preference for grey-based UI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Adoption */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <BarChart size={40} />
            <h2 className="text-3xl tracking-tight uppercase">2027 Palette Adoption Tracking</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-2">Fashion & Apparel</h3>
                  <div className="text-sm text-gray-600">Updated: December 2026</div>
                </div>
                <div className="text-3xl">73%</div>
              </div>
              <div className="h-4 bg-gray-200 mb-4">
                <div className="h-full bg-[#5d6b7a]" style={{ width: '73%' }} />
              </div>
              <p className="text-gray-700 text-sm">
                Strong early adoption in premium and contemporary sectors. Ashen Iron appearing in FW27 
                collections. Forge Grey gaining traction in workwear and technical apparel.
              </p>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-2">Interior Design</h3>
                  <div className="text-sm text-gray-600">Updated: December 2026</div>
                </div>
                <div className="text-3xl">68%</div>
              </div>
              <div className="h-4 bg-gray-200 mb-4">
                <div className="h-full bg-[#5c6366]" style={{ width: '68%' }} />
              </div>
              <p className="text-gray-700 text-sm">
                Smoky Steel leading adoption in commercial spaces. Residential applications growing. 
                Paint manufacturers adding similar shades to collections.
              </p>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-2">Product Design</h3>
                  <div className="text-sm text-gray-600">Updated: December 2026</div>
                </div>
                <div className="text-3xl">81%</div>
              </div>
              <div className="h-4 bg-gray-200 mb-4">
                <div className="h-full bg-[#4a424d]" style={{ width: '81%' }} />
              </div>
              <p className="text-gray-700 text-sm">
                Highest adoption rate. Tech products and home goods leading. Multiple major launches 
                planned in similar color families for early 2027.
              </p>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-2">Digital & UI Design</h3>
                  <div className="text-sm text-gray-600">Updated: December 2026</div>
                </div>
                <div className="text-3xl">89%</div>
              </div>
              <div className="h-4 bg-gray-200 mb-4">
                <div className="h-full bg-[#5d6b7a]" style={{ width: '89%' }} />
              </div>
              <p className="text-gray-700 text-sm">
                Rapid adoption in digital contexts. Aligns with existing moves toward neutral, 
                accessibility-focused design systems. Low barrier to implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Insights */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Globe size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Regional Trend Variations</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">North America</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Leading Color:</strong> Smoky Steel<br />
                  Driven by tech sector influence and minimalist aesthetic in West Coast markets. Strong 
                  adoption in commercial architecture.
                </p>
                <p>
                  <strong>Key Sectors:</strong> Tech, commercial interiors, athleisure<br />
                  <strong>Adoption Timeline:</strong> Early Q1 2027
                </p>
              </div>
            </div>

            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Europe</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Leading Color:</strong> Forge Grey<br />
                  Resonates with European design heritage and craft traditions. Particularly strong in 
                  Scandinavia and Central Europe.
                </p>
                <p>
                  <strong>Key Sectors:</strong> Fashion, furniture, automotive interiors<br />
                  <strong>Adoption Timeline:</strong> Q4 2026 (already underway)
                </p>
              </div>
            </div>

            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Asia-Pacific</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Leading Color:</strong> Ashen Iron<br />
                  Appeals to luxury market and aligns with minimalist Japanese aesthetic influence. 
                  Growing interest in premium neutral palettes.
                </p>
                <p>
                  <strong>Key Sectors:</strong> Luxury goods, consumer electronics, hospitality<br />
                  <strong>Adoption Timeline:</strong> Q2 2027
                </p>
              </div>
            </div>

            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Middle East</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Leading Colors:</strong> Smoky Steel + Ashen Iron<br />
                  Modern neutrals provide sophistication in luxury contexts. Architectural applications 
                  particularly strong.
                </p>
                <p>
                  <strong>Key Sectors:</strong> Architecture, luxury retail, hospitality<br />
                  <strong>Adoption Timeline:</strong> Q1-Q2 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Calendar size={40} />
            <h2 className="text-3xl tracking-tight uppercase">12-Month Forecast</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-[120px_1fr] gap-6 bg-white border border-black p-6">
              <div className="text-2xl tracking-wide">Q1 2027</div>
              <div>
                <p className="text-gray-700">
                  <strong>Early Adopters Launch:</strong> Fashion week debuts, tech product releases, 
                  digital platform redesigns. Expect significant media coverage and industry conversation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-6 bg-white border border-black p-6">
              <div className="text-2xl tracking-wide">Q2 2027</div>
              <div>
                <p className="text-gray-700">
                  <strong>Mainstream Adoption:</strong> Retail availability increases. Paint companies 
                  release matching colors. Interior design projects begin completion. Peak media presence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-6 bg-white border border-black p-6">
              <div className="text-2xl tracking-wide">Q3 2027</div>
              <div>
                <p className="text-gray-700">
                  <strong>Market Saturation:</strong> Widespread availability across all sectors. 
                  Consumer familiarity high. Beginning of complementary trend development.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-6 bg-white border border-black p-6">
              <div className="text-2xl tracking-wide">Q4 2027</div>
              <div>
                <p className="text-gray-700">
                  <strong>Establishment Phase:</strong> Colors transition from "trendy" to "standard." 
                  Industry begins looking to 2028 predictions while 2027 palette solidifies as reference point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl tracking-tight uppercase mb-6">Stay Ahead of the Curve</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our quarterly Trend Intelligence Report for detailed analysis, market data, 
            and predictive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white px-6 py-4 text-sm tracking-wider uppercase placeholder:text-gray-500"
            />
            <button className="bg-white text-black px-8 py-4 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-4">
            Free for individual designers • Premium insights for professionals
          </div>
        </div>
      </section>
    </div>
  );
}