import React from 'react';
import { Logo } from '../Logo';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <Logo size="lg" />
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6 mt-8">
            About<br />The Hue Register
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            The definitive source for color intelligence, trend forecasting, and material innovation, 
            published by The Material Colour Office.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">Our Story</h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Founded in 2025, The Hue Register is a research-driven individual-level platform dedicated to 
              rigorous color intelligence and material trend forecasting. What makes us distinct is our commitment 
              to scientific methodology over intuition, and our focus on serving design professionals across 
              separate industries with actionable, evidence-based insights.
            </p>
            
            <p>
              The Material Colour Office was created to address a gap in the design industry: the need for 
              independent, unbiased color research that doesn't serve commercial interests. We combine color 
              science, perceptual psychology, material research, and computational analysis to create the most 
              comprehensive color intelligence platform available to professionals worldwide.
            </p>
            
            <p>
              Our name reflects our dual mission: to "register" or document the colors that shape our 
              material world, while maintaining a registry of trend signals that inform future directions. 
              We track color, material, and finish evolution across fashion, interiors, mobility, consumer 
              technology, packaging, and architecture—providing cross-industry intelligence that individual 
              designers and studios need to stay ahead.
            </p>
            
            <p>
              Unlike trend forecasting services that charge tens of thousands annually, The Hue Register 
              operates as an open research platform, making professional-grade color intelligence accessible 
              to individual practitioners, independent studios, and emerging designers who are shaping the 
              future of material culture.
            </p>
          </div>
        </div>
      </section>

      {/* The Material Colour Office */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">The Material Colour Office</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The Material Colour Office is an independent research platform dedicated to understanding 
                the role of color in contemporary design culture. We combine methodologies from color science, 
                perceptual psychology, material research, computational analysis, and cultural observation to 
                create actionable trend intelligence.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Our longitudinal tracking system monitors design signals across 7 major industries, analyzing 
                color, material, and finish trends through event-anchored observation cycles. Every computational signal undergoes human 
                review by expert designers before publication—ensuring that technology enhances, rather than 
                replaces, human expertise.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-black p-6 bg-white">
                <div className="text-3xl mb-2">2025</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Platform Founded
                </div>
              </div>
              <div className="border border-black p-6 bg-white">
                <div className="text-3xl mb-2">7</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Industries Monitored
                </div>
              </div>
              <div className="border border-black p-6 bg-white">
                <div className="text-3xl mb-2">100%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Human-Reviewed Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atlas of Hues */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Atlas of Hues Editorial</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Our flagship editorial series, Atlas of Hues, provides in-depth analysis of color 
                trends, cultural shifts, and material innovations. Published quarterly in both print 
                and digital formats, each issue explores a specific theme through original research, 
                case studies, and expert commentary.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Past issues have covered topics ranging from "The New Naturals: Earth Tones in the 
                Digital Age" to "Chromatic Politics: How Color Shapes Social Movements" to "Material 
                Futures: The Colors of Sustainable Design."
              </p>
            </div>
            
            <div className="border border-black p-8 bg-gray-50">
              <h3 className="text-xl tracking-wide uppercase mb-4">Upcoming Issues</h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-black pl-4">
                  <div className="text-gray-600 mb-1">Vol. 1, Winter 2026</div>
                  <div className="tracking-wide uppercase">Industrial Renaissance</div>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="text-gray-600 mb-1">Vol. 1, Fall 2026</div>
                  <div className="tracking-wide uppercase">The Craft Revival</div>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="text-gray-600 mb-1">Vol. 1, Summer 2026</div>
                  <div className="tracking-wide uppercase">Digital Materiality</div>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="text-gray-600 mb-1">Vol. 1, Spring 2026</div>
                  <div className="tracking-wide uppercase">Colors of Climate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Our Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Research-Driven</h3>
              <p className="text-gray-700">
                Every prediction is grounded in months of research, data analysis, and expert 
                consultation. We don't guess—we observe, analyze, and forecast based on evidence.
              </p>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Industry-Focused</h3>
              <p className="text-gray-700">
                We understand that color doesn't exist in a vacuum. Our predictions consider 
                practical application across materials, manufacturing processes, and market realities.
              </p>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Globally Informed</h3>
              <p className="text-gray-700">
                Color trends don't originate in a single place. We track developments worldwide, 
                understanding both global movements and regional variations.
              </p>
            </div>

            <div className="border border-black p-8 bg-white">
              <h3 className="text-xl tracking-wide uppercase mb-4">Community-Supported</h3>
              <p className="text-gray-700">
                Our work is enriched by a global community of practitioners who share insights, 
                challenges, and innovations, making our forecasts more accurate and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Users size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Founder</h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-black p-8">
              <div className="w-full h-64 bg-[#5c6366] mb-4" />
              <h3 className="text-lg tracking-wide uppercase mb-1">Saishriya Iyer</h3>
              <div className="text-sm text-gray-600 mb-3">R&D Designer at Ddecor Exports Pvt. Ltd.</div>
              <div className="text-sm text-gray-600 mb-3">Alumni: NID Ahmedabad</div>
              <p className="text-sm text-gray-700 mt-4">
                <strong>Get in touch:</strong> saishriya_i@alumni.nid.edu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Logo variant="dark" size="md" className="mx-auto mb-6" />
          <p className="text-sm text-gray-400">
            Rigorous color intelligence for design professionals since 2025
          </p>
        </div>
      </section>
    </div>
  );
}