import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-br from-[#4a424d] via-[#5d6b7a] to-[#5c6366] flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-block px-4 py-2 border border-white text-xs tracking-widest uppercase mb-4">
            2027 Color of the Year
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
            The Era of<br />Industrial Elegance
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Three colors. One vision. The Material Colour Office presents the definitive palette for 2027.
          </p>
          <button 
            onClick={() => onNavigate('2027-predictions')}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors"
          >
            Explore the Colors
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Three Colors Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl tracking-tight uppercase">2027 Color Predictions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A trinity of hues that define the intersection of heritage, innovation, and resilience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border border-black">
            <button 
              onClick={() => onNavigate('ashen-iron')}
              className="group relative overflow-hidden normal-case text-left"
            >
              <div className="h-96 bg-[#4a424d] transition-transform group-hover:scale-105" />
              <div className="p-8 border-r border-black bg-white">
                <div className="text-2xl tracking-wide uppercase mb-2">Ashen Iron</div>
                <div className="text-sm text-gray-600 tracking-widest mb-4">#4A424D</div>
                <p className="text-sm leading-relaxed text-gray-700">
                  The color of forged strength and quiet determination. A deep, warm grey with subtle purple undertones.
                </p>
              </div>
            </button>
            
            <button 
              onClick={() => onNavigate('forge-grey')}
              className="group relative overflow-hidden normal-case text-left"
            >
              <div className="h-96 bg-[#5d6b7a] transition-transform group-hover:scale-105" />
              <div className="p-8 border-r border-black bg-white">
                <div className="text-2xl tracking-wide uppercase mb-2">Forge Grey</div>
                <div className="text-sm text-gray-600 tracking-widest mb-4">#5D6B7A</div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Inspired by industrial heritage, this blue-grey embodies reliability and timeless craftsmanship.
                </p>
              </div>
            </button>
            
            <button 
              onClick={() => onNavigate('smoky-steel')}
              className="group relative overflow-hidden normal-case text-left"
            >
              <div className="h-96 bg-[#5c6366] transition-transform group-hover:scale-105" />
              <div className="p-8 bg-white">
                <div className="text-2xl tracking-wide uppercase mb-2">Smoky Steel</div>
                <div className="text-sm text-gray-600 tracking-widest mb-4">#5C6366</div>
                <p className="text-sm leading-relaxed text-gray-700">
                  A balanced neutral that bridges tradition and modernity, evoking urban landscapes.
                </p>
              </div>
            </button>
          </div>
          
          {/* CMF Direction CTA - Prominent */}
          <div className="mt-12 border-4 border-black p-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-6">🧩</div>
              <h3 className="text-3xl tracking-tight uppercase mb-4">CMF Direction 2027</h3>
              <p className="text-lg text-gray-700 mb-2">Quiet Industrialism</p>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore detailed material compatibility, finish recommendations, and application guidance 
                for each color. A complete CMF specification system for designers and manufacturers.
              </p>
              <button 
                onClick={() => onNavigate('cmf-direction')}
                className="inline-flex items-center gap-2 bg-black text-white px-12 py-5 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
              >
                View CMF Specifications
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 border border-black text-xs tracking-widest uppercase mb-6">
                Our Methodology
              </div>
              <h2 className="text-4xl tracking-tight uppercase mb-6">
                Science Meets Intuition
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                The Material Colour Office employs a rigorous, multi-layered approach to color forecasting. 
                Our predictions are grounded in global cultural analysis, material innovation tracking, 
                and psychological research.
              </p>
              <button 
                onClick={() => onNavigate('methodology')}
                className="inline-flex items-center gap-2 border border-black px-6 py-3 text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-colors"
              >
                Learn Our Process
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="border border-black p-8 bg-white">
                <div className="text-3xl mb-2">12</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">Months of Research</div>
              </div>
              <div className="border border-black p-8 bg-white">
                <div className="text-3xl mb-2">500+</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">Global Trend Sources</div>
              </div>
              <div className="border border-black p-8 bg-white">
                <div className="text-3xl mb-2">7</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">Industry Sectors Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl tracking-tight uppercase mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These colors transcend aesthetics—they're tools for brands, designers, and innovators
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Fashion & Textiles', desc: 'Runway to retail color guidance' },
              { title: 'Interior Design', desc: 'Spatial color psychology' },
              { title: 'Product Design', desc: 'Consumer appeal strategies' },
              { title: 'Digital Media', desc: 'Screen-optimized palettes' },
            ].map((app, index) => (
              <div key={index} className="border border-black p-6 hover:bg-gray-50 transition-colors">
                <div className="text-lg tracking-wide uppercase mb-3">{app.title}</div>
                <p className="text-sm text-gray-600">{app.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('applications')}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
            >
              Explore All Applications
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl tracking-wide uppercase mb-4">Industries We Track</h3>
              <p className="text-gray-300 mb-6">
                Explore dominant colors, emerging shifts, and CMF notes across 7 industry sectors
              </p>
              <button 
                onClick={() => onNavigate('industries-index')}
                className="text-sm tracking-wider uppercase hover:text-gray-300 transition-colors inline-flex items-center gap-2"
              >
                View All Industries <ArrowRight size={16} />
              </button>
            </div>
            
            <div>
              <h3 className="text-2xl tracking-wide uppercase mb-4">Material Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive material taxonomy and CMF compatibility system for designers
              </p>
              <button 
                onClick={() => onNavigate('material-intelligence')}
                className="text-sm tracking-wider uppercase hover:text-gray-300 transition-colors inline-flex items-center gap-2"
              >
                Explore Materials <ArrowRight size={16} />
              </button>
            </div>
            
            <div>
              <h3 className="text-2xl tracking-wide uppercase mb-4">Longitudinal Tracker</h3>
              <p className="text-gray-300 mb-6">
                Event-anchored CMF intelligence tracking accumulated signals from monthly observation cycles
              </p>
              <button 
                onClick={() => onNavigate('trend-analyzer')}
                className="text-sm tracking-wider uppercase hover:text-gray-300 transition-colors inline-flex items-center gap-2"
              >
                View Intelligence Data <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon: Colour Lab */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-4 border-black p-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 border-2 border-black text-xs tracking-widest uppercase mb-6">
                Coming Soon
              </div>
              <h2 className="text-4xl tracking-tight uppercase mb-6">Colour Lab</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                An interactive playground for designers, researchers, and makers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Hue Register Colour Lab will let you explore our 2027 palette across materials, textures, 
                and finishes, experimenting with combinations across different scenarios. All insights will remain grounded 
                in our human-led Longitudinal Colour Tracking, ensuring every suggestion is research-driven 
                and interpretive.
              </p>
              <div className="border-l-4 border-black pl-6 py-4 bg-white inline-block text-left">
                <p className="text-sm text-gray-600">
                  For now, the Colour Lab is under development — stay tuned for a hands-on experience in CMF exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-600">
              © 2027 The Material Colour Office. All rights reserved.
            </div>
            <div className="text-xs tracking-widest uppercase text-gray-500">
              Atlas of Hues Editorial Series
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}