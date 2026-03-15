import React from 'react';
import { Download, FileText, Palette, BookOpen } from 'lucide-react';

export function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-block px-4 py-2 border border-black text-xs tracking-widest uppercase mb-6">
            For Professionals
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Professional<br />Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Comprehensive tools and materials for designers, brands, and color professionals 
            working with the 2027 palette.
          </p>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Downloadable Assets</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <Download size={32} className="flex-shrink-0" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">Color Swatch Libraries</h3>
                  <p className="text-gray-700 mb-4">
                    Complete swatch libraries for Adobe Creative Suite (Photoshop, Illustrator, InDesign), 
                    Figma, Sketch, and other professional design tools.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Download All Formats
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <FileText size={32} className="flex-shrink-0" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">Technical Specifications</h3>
                  <p className="text-gray-700 mb-4">
                    Detailed color data including RGB, CMYK, HEX, HSL, LAB, and Pantone TPX equivalents 
                    for accurate color reproduction across all media.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <Palette size={32} className="flex-shrink-0" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">Extended Palettes</h3>
                  <p className="text-gray-700 mb-4">
                    Curated complementary and accent color suggestions for each of the three 2027 colors, 
                    with recommended pairing ratios and use cases.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Download Guide
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <BookOpen size={32} className="flex-shrink-0" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">Brand Guidelines Template</h3>
                  <p className="text-gray-700 mb-4">
                    Customizable brand guideline templates showing how to incorporate 2027 colors into 
                    corporate identity systems, with usage examples.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Download Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Specifications */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Material-Specific Guidance</h2>
          
          <div className="space-y-8">
            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Textile & Fashion</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Natural Fibers</div>
                  <p className="text-sm text-gray-700">
                    Cotton, wool, linen, silk — includes dye formulas and color-fastness recommendations
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Synthetic Fibers</div>
                  <p className="text-sm text-gray-700">
                    Polyester, nylon, acrylic — optimal dyeing processes and color matching specifications
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Leather & Suede</div>
                  <p className="text-sm text-gray-700">
                    Finishing techniques and color variations across different tanning methods
                  </p>
                </div>
              </div>
              <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                View Textile Guide
              </button>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Architectural & Interior</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Paint & Coatings</div>
                  <p className="text-sm text-gray-700">
                    Formulations for matte, satin, and gloss finishes with lighting considerations
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Ceramics & Stone</div>
                  <p className="text-sm text-gray-700">
                    Glazing specifications and natural stone selection matching guidelines
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Concrete & Metal</div>
                  <p className="text-sm text-gray-700">
                    Pigmentation for concrete and powder coating specifications for metals
                  </p>
                </div>
              </div>
              <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                View Architecture Guide
              </button>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Product & Industrial Design</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Plastics & Polymers</div>
                  <p className="text-sm text-gray-700">
                    Injection molding color-matching for ABS, polypropylene, and other plastics
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Wood & Composites</div>
                  <p className="text-sm text-gray-700">
                    Staining and finishing techniques to achieve the 2027 palette on wood surfaces
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Glass & Acrylics</div>
                  <p className="text-sm text-gray-700">
                    Tinting specifications for transparent and opaque applications
                  </p>
                </div>
              </div>
              <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                View Product Design Guide
              </button>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Digital & Print Media</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Screen Display</div>
                  <p className="text-sm text-gray-700">
                    RGB values optimized for different display technologies and calibration guides
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Print Production</div>
                  <p className="text-sm text-gray-700">
                    CMYK specifications for offset, digital, and screen printing processes
                  </p>
                </div>
                <div>
                  <div className="text-sm tracking-wider uppercase text-gray-600 mb-2">Accessibility</div>
                  <p className="text-sm text-gray-700">
                    WCAG-compliant color combinations and contrast ratio recommendations
                  </p>
                </div>
              </div>
              <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                View Digital Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Application Case Studies</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 border border-black p-8">
              <div className="h-48 bg-[#4a424d]" />
              <div>
                <div className="text-xs tracking-widest uppercase text-gray-600 mb-2">Fashion Brand Relaunch</div>
                <h3 className="text-xl tracking-wide uppercase mb-3">Urban Outerwear Collection</h3>
                <p className="text-gray-700 mb-4">
                  How a heritage workwear brand used Ashen Iron as their primary color to signal a 
                  contemporary repositioning while honoring their industrial roots. Includes color 
                  application across garments, packaging, and retail environments.
                </p>
                <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-[300px_1fr] gap-8 border border-black p-8">
              <div className="h-48 bg-[#5d6b7a]" />
              <div>
                <div className="text-xs tracking-widest uppercase text-gray-600 mb-2">Interior Design Project</div>
                <h3 className="text-xl tracking-wide uppercase mb-3">Co-Working Space Redesign</h3>
                <p className="text-gray-700 mb-4">
                  A complete workplace transformation using Forge Grey as the foundation color, creating 
                  professional yet approachable environments. Details on material selection, lighting 
                  integration, and spatial psychology.
                </p>
                <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-[300px_1fr] gap-8 border border-black p-8">
              <div className="h-48 bg-[#5c6366]" />
              <div>
                <div className="text-xs tracking-widest uppercase text-gray-600 mb-2">Product Launch</div>
                <h3 className="text-xl tracking-wide uppercase mb-3">Premium Electronics Line</h3>
                <p className="text-gray-700 mb-4">
                  Smoky Steel as the signature color for a new line of audio equipment, chosen for its 
                  timeless appeal and premium positioning. Covers industrial design, packaging, and 
                  brand communications.
                </p>
                <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">Professional Licensing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Individual Designer</h3>
              <div className="text-3xl mb-4">Free</div>
              <ul className="space-y-3 text-sm mb-6">
                <li>• Personal project use</li>
                <li>• Basic swatch files</li>
                <li>• Community forum access</li>
                <li>• Educational resources</li>
              </ul>
              <button className="w-full bg-white text-black px-6 py-3 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="border border-white p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Studio/Agency</h3>
              <div className="text-3xl mb-4">Contact</div>
              <ul className="space-y-3 text-sm mb-6">
                <li>• Commercial project use</li>
                <li>• Full asset library</li>
                <li>• Technical support</li>
                <li>• Case study features</li>
              </ul>
              <button className="w-full bg-white text-black px-6 py-3 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>

            <div className="border border-white p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Enterprise</h3>
              <div className="text-3xl mb-4">Custom</div>
              <ul className="space-y-3 text-sm mb-6">
                <li>• Unlimited usage rights</li>
                <li>• Custom color development</li>
                <li>• Dedicated consulting</li>
                <li>• Training workshops</li>
              </ul>
              <button className="w-full bg-white text-black px-6 py-3 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
