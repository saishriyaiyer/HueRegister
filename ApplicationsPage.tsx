import React from 'react';
import { Shirt, Home, Package, Monitor, Building, Palette } from 'lucide-react';

export function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Industry<br />Applications
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            How the 2027 palette translates across sectors—from fashion to architecture, 
            digital to physical.
          </p>
        </div>
      </section>

      {/* Fashion */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Shirt size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Fashion & Textiles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The 2027 palette speaks directly to fashion's current moment: the return to quality, 
                the appreciation for workwear aesthetics, and the desire for colors that transcend seasons.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#4a424d] pl-4">
                  <h3 className="tracking-wide uppercase mb-2">Ashen Iron in Fashion</h3>
                  <p className="text-sm text-gray-600">
                    Premium tailoring, luxury knitwear, leather goods. Works beautifully in wool, 
                    cashmere, and heavy cotton.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#5d6b7a] pl-4">
                  <h3 className="tracking-wide uppercase mb-2">Forge Grey in Fashion</h3>
                  <p className="text-sm text-gray-600">
                    Workwear-inspired collections, denim, technical fabrics, activewear. Ideal for 
                    bridging utility and style.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#5c6366] pl-4">
                  <h3 className="tracking-wide uppercase mb-2">Smoky Steel in Fashion</h3>
                  <p className="text-sm text-gray-600">
                    The new wardrobe neutral. Works across all categories from formal to casual, 
                    accessories to footwear.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-3">Seasonal Application</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Spring/Summer:</strong> Lightweight fabrics, mixed with whites and naturals</div>
                  <div><strong>Fall/Winter:</strong> Heavy textiles, layered with darker accents</div>
                </div>
              </div>
              
              <div className="border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-3">Market Segments</h3>
                <div className="space-y-2 text-sm">
                  <div>• Premium/Luxury: High color adoption expected</div>
                  <div>• Contemporary: Strong presence in transitional pieces</div>
                  <div>• Streetwear: Technical fabrications in these shades</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Home size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Interior Design</h2>
          </div>
          
          <div className="space-y-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              In interiors, the 2027 palette offers sophistication without severity. These colors create 
              spaces that feel both grounded and contemporary, professional yet livable.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-black p-8">
                <div className="h-32 bg-[#4a424d] mb-4" />
                <h3 className="text-lg tracking-wide uppercase mb-3">Residential</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Bedrooms, studies, accent walls. Creates cocooning, intimate spaces perfect for 
                  relaxation and focus.
                </p>
                <div className="text-xs text-gray-600">Ashen Iron</div>
              </div>
              
              <div className="bg-white border border-black p-8">
                <div className="h-32 bg-[#5d6b7a] mb-4" />
                <h3 className="text-lg tracking-wide uppercase mb-3">Commercial</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Offices, co-working spaces, retail. Provides professional atmosphere while maintaining 
                  approachability.
                </p>
                <div className="text-xs text-gray-600">Forge Grey</div>
              </div>
              
              <div className="bg-white border border-black p-8">
                <div className="h-32 bg-[#5c6366] mb-4" />
                <h3 className="text-lg tracking-wide uppercase mb-3">Hospitality</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Hotels, restaurants, lobbies. Neutral enough for diverse clientele, sophisticated 
                  enough for premium positioning.
                </p>
                <div className="text-xs text-gray-600">Smoky Steel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Design */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Package size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Product Design</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              For consumer products, the 2027 palette signals quality, durability, and thoughtful design. 
              These colors work particularly well for items meant to last.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-black p-8">
                <h3 className="text-xl tracking-wide uppercase mb-4">Consumer Electronics</h3>
                <p className="text-gray-700 mb-4">
                  Premium audio equipment, smart home devices, personal technology. The palette conveys 
                  sophistication and reliability.
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#4a424d] border border-black" />
                  <div className="w-12 h-12 bg-[#5d6b7a] border border-black" />
                  <div className="w-12 h-12 bg-[#5c6366] border border-black" />
                </div>
              </div>
              
              <div className="border border-black p-8">
                <h3 className="text-xl tracking-wide uppercase mb-4">Home & Kitchen</h3>
                <p className="text-gray-700 mb-4">
                  Appliances, cookware, tools. These colors suggest professional quality and timeless design.
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#5d6b7a] border border-black" />
                  <div className="w-12 h-12 bg-[#5c6366] border border-black" />
                </div>
              </div>
              
              <div className="border border-black p-8">
                <h3 className="text-xl tracking-wide uppercase mb-4">Furniture & Fixtures</h3>
                <p className="text-gray-700 mb-4">
                  Seating, storage, lighting. Works across styles from industrial to contemporary to minimalist.
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#4a424d] border border-black" />
                  <div className="w-12 h-12 bg-[#5c6366] border border-black" />
                </div>
              </div>
              
              <div className="border border-black p-8">
                <h3 className="text-xl tracking-wide uppercase mb-4">Tools & Equipment</h3>
                <p className="text-gray-700 mb-4">
                  Professional and consumer tools. The palette naturally evokes craftsmanship and precision.
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#5d6b7a] border border-black" />
                  <div className="w-12 h-12 bg-[#4a424d] border border-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Media */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Monitor size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Digital Media</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In digital contexts, the 2027 palette excels. These colors provide excellent contrast 
                without harshness, work well across light and dark modes, and maintain legibility at all scales.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-black p-6">
                  <h3 className="tracking-wide uppercase mb-2">UI/UX Design</h3>
                  <p className="text-sm text-gray-600">
                    Perfect for professional tools, dashboards, and content platforms. Provides structure 
                    without overwhelming content.
                  </p>
                </div>
                
                <div className="bg-white border border-black p-6">
                  <h3 className="tracking-wide uppercase mb-2">Brand Digital</h3>
                  <p className="text-sm text-gray-600">
                    Websites, apps, social media. Conveys professionalism and reliability while remaining 
                    contemporary.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-black p-8">
              <h3 className="text-lg tracking-wide uppercase mb-4">Accessibility Considerations</h3>
              <p className="text-gray-700 mb-6">
                All three colors meet WCAG AA standards when paired with white or light backgrounds. 
                For AAA compliance, use with pure white (#FFFFFF).
              </p>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span>Ashen Iron on White</span>
                  <span className="tracking-wider">8.2:1</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span>Forge Grey on White</span>
                  <span className="tracking-wider">5.8:1</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span>Smoky Steel on White</span>
                  <span className="tracking-wider">6.4:1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Building size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Architecture & Exteriors</h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The 2027 palette works beautifully in architectural applications, evoking industrial heritage 
              while remaining thoroughly contemporary. These colors age gracefully and complement both natural 
              and urban environments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-3">Cladding & Facades</h3>
                <p className="text-sm text-gray-700">
                  Metal panels, fiber cement, concrete. Particularly effective for industrial conversions 
                  and contemporary commercial buildings.
                </p>
              </div>
              
              <div className="border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-3">Urban Furniture</h3>
                <p className="text-sm text-gray-700">
                  Benches, planters, signage, bike racks. Coordinates with existing urban infrastructure 
                  while feeling fresh.
                </p>
              </div>
              
              <div className="border border-black p-6">
                <h3 className="text-lg tracking-wide uppercase mb-3">Landscape Elements</h3>
                <p className="text-sm text-gray-700">
                  Hardscaping, water features, boundaries. Provides contrast with greenery while blending 
                  with stone and concrete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Insights */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Palette size={40} />
            <h2 className="text-4xl tracking-tight uppercase">Cross-Industry Insights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">What Makes This Palette Universal</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Unlike trend-driven colors that work in specific contexts, the 2027 palette has unusual 
                versatility. All three colors share industrial origins, giving them natural coherence across 
                materials and applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                They're sophisticated without being precious, contemporary without being trendy, and neutral 
                enough to support bold accents while being interesting enough to stand alone.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl tracking-wide uppercase mb-4">Implementation Timeline</h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-white pl-4">
                  <div className="text-gray-400">Q1 2027</div>
                  <div>Early adoption in fashion and digital</div>
                </div>
                <div className="border-l-2 border-white pl-4">
                  <div className="text-gray-400">Q2-Q3 2027</div>
                  <div>Product launches and interior projects</div>
                </div>
                <div className="border-l-2 border-white pl-4">
                  <div className="text-gray-400">Q4 2027</div>
                  <div>Peak market saturation across sectors</div>
                </div>
                <div className="border-l-2 border-white pl-4">
                  <div className="text-gray-400">2028+</div>
                  <div>Transition to modern classics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
