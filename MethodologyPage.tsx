import React from 'react';
import { Search, Users, BarChart3, FlaskConical, Globe2, Microscope } from 'lucide-react';

export function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-block px-4 py-2 border border-black text-xs tracking-widest uppercase mb-6">
            Our Process
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Prediction<br />Methodology
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            How we identify the colors that will define tomorrow—combining rigorous research, 
            cultural analysis, and decades of expertise in material and color science.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl tracking-tight uppercase mb-6">A Multi-Layered Approach</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Color prediction is not fortune-telling—it's systematic observation and analysis. 
                  The Material Colour Office employs a methodology developed over decades of working 
                  with designers, manufacturers, and cultural institutions worldwide.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-black p-6">
                <div className="text-4xl mb-2">12</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Months Ahead Forecasting
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-4xl mb-2">7</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Industry Sectors Analyzed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">The Six-Phase Process</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <Globe2 size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 1: Global Observation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We monitor cultural, social, and economic trends across all continents through fashion 
                  capitals, design weeks, trade shows, and emerging creative communities.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> Ongoing, year-round
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <Search size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 2: Data Collection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We aggregate data from diverse sources: social media sentiment analysis, color usage 
                  in digital platforms, material innovation reports, fashion week runway analysis, 
                  architectural project databases, and consumer psychology studies. We track which 
                  colors are gaining traction and which are declining.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> Weekly
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <BarChart3 size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 3: Pattern Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our analytical team identifies patterns and convergences. We look for colors appearing 
                  across multiple domains simultaneously—a strong indicator of emerging cultural relevance. 
                  We also analyze the "why" behind color choices: what needs, desires, or anxieties might 
                  be driving particular color preferences?
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> 3 months | <strong>Method:</strong> Quantitative + qualitative analysis
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <FlaskConical size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 4: Psychological Evaluation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Working with color psychologists and cultural theorists, we evaluate the emotional 
                  and psychological resonance of emerging color trends. Why are people drawn to these 
                  colors now? What do they signify about our collective state of mind? What needs do 
                  they fulfill?
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> 2 months | <strong>Team:</strong> Psychologists, sociologists, historians
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <Users size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 5: Expert Synthesis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Material Colour Office's core team convenes to synthesize findings. We debate, 
                  refine, and ultimately select colors that we believe will have the strongest cultural 
                  and commercial impact.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> 1 month
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[80px_1fr] gap-8">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border border-black bg-white flex items-center justify-center">
                  <Microscope size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl tracking-wide uppercase mb-3">Phase 6: Technical Validation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before final announcement, we validate our selections across different materials, 
                  lighting conditions, and digital displays. We test reproducibility across printing 
                  methods, textiles, plastics, and screens. We ensure our predicted colors are not just 
                  culturally resonant but practically applicable.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Duration:</strong> 1 month | <strong>Tests:</strong> 50+ material substrates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes 2027 Different */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">What Makes 2027 Different</h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              For the first time in our history, we selected three colors instead of one. This decision 
              reflects our analysis that 2027 represents a moment of multiplicity—where different needs, 
              aesthetics, and values coexist rather than compete.
            </p>
            
            <p>
              Our research showed that attempting to capture the zeitgeist in a single color would be 
              reductive. Instead, Ashen Iron, Forge Grey, and Smoky Steel work together as a system, 
              each representing different aspects of our contemporary moment while harmonizing as a whole.
            </p>
            
            <p>
              This trinity approach also reflects practical market realities. Different industries have 
              different needs, and by offering three complementary colors, we provide more flexibility 
              while maintaining a cohesive vision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
