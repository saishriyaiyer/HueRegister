import React from 'react';
import { Brain, Heart, Eye, Users } from 'lucide-react';

export function PsychologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Color Psychology<br />Laboratory
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            The science and art of how color shapes perception, emotion, and behavior.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl tracking-tight uppercase mb-6">Why Color Matters</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Color is not merely decorative—it's a fundamental part of how we process information, 
                  form judgments, and experience the world. Studies show that up to 90% of snap judgments 
                  about products are based on color alone.
                </p>
                <p>
                  The Material Colour Office's Color Psychology Lab investigates how colors influence 
                  human behavior across contexts: from consumer purchasing decisions to workplace 
                  productivity, from digital interface usability to architectural atmosphere.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">62-90%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Of product assessment based on color
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">42%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Increase in comprehension with color
                </div>
              </div>
              <div className="border border-black p-6">
                <div className="text-3xl mb-2">80%</div>
                <div className="text-sm tracking-wider uppercase text-gray-600">
                  Of visual information retained
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2027 Palette Psychology */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Psychology of the 2027 Palette</h2>
          
          <div className="space-y-12">
            <div className="bg-white border border-black p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="h-48 bg-[#4a424d]" />
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-4">Ashen Iron</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <strong className="block text-black mb-1">Emotional Response:</strong>
                      Stability, strength, resilience. Evokes feelings of groundedness and quiet confidence.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cognitive Effects:</strong>
                      Enhances focus and reduces distraction. Creates sense of containment and safety.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Behavioral Impact:</strong>
                      Encourages deliberate, thoughtful action. Associated with careful craftsmanship and attention to detail.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cultural Associations:</strong>
                      Industrial heritage, artisanal quality, endurance through adversity, dignified aging.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="h-48 bg-[#5d6b7a]" />
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-4">Forge Grey</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <strong className="block text-black mb-1">Emotional Response:</strong>
                      Trust, reliability, competence. Creates feelings of professional assurance and capability.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cognitive Effects:</strong>
                      Promotes clear thinking and logical problem-solving. Associated with precision and expertise.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Behavioral Impact:</strong>
                      Inspires confidence in quality and durability. Encourages investment in lasting value.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cultural Associations:</strong>
                      Craftsmanship, technical skill, workshop culture, maker mentality, hands-on expertise.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                <div className="h-48 bg-[#5c6366]" />
                <div>
                  <h3 className="text-2xl tracking-wide uppercase mb-4">Smoky Steel</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <strong className="block text-black mb-1">Emotional Response:</strong>
                      Balance, neutrality, calm. Provides emotional equilibrium without coldness.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cognitive Effects:</strong>
                      Reduces visual noise, enhances concentration. Creates mental space for complex thinking.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Behavioral Impact:</strong>
                      Facilitates decision-making and reduces overwhelm. Associated with modern sophistication.
                    </div>
                    <div>
                      <strong className="block text-black mb-1">Cultural Associations:</strong>
                      Urban environments, contemporary architecture, digital minimalism, cosmopolitan life.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Our Research Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-black p-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain size={32} />
                <h3 className="text-xl tracking-wide uppercase">Cognitive Science</h3>
              </div>
              <p className="text-gray-700 mb-4">
                How color affects memory, learning, attention, and decision-making processes. We study 
                color's role in information processing and cognitive load.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Current Studies:</strong> Color and digital fatigue, Chromatic memory retention, 
                Decision-making in neutral palettes
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart size={32} />
                <h3 className="text-xl tracking-wide uppercase">Emotional Response</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The affective dimensions of color—how different hues trigger emotional states, influence 
                mood, and shape subjective experience across cultures.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Current Studies:</strong> Grey tones and emotional regulation, Industrial colors 
                and nostalgia, Color and workplace wellbeing
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye size={32} />
                <h3 className="text-xl tracking-wide uppercase">Perception Research</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The mechanics of how we see color—studying visual perception, color constancy, context 
                effects, and the intersection of biology and culture in color vision.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Current Studies:</strong> Screen vs. material color perception, Lighting and color 
                appearance, Cross-cultural color naming
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users size={32} />
                <h3 className="text-xl tracking-wide uppercase">Social & Cultural</h3>
              </div>
              <p className="text-gray-700 mb-4">
                How color meanings are socially constructed and culturally transmitted. Examining color 
                symbolism, trends, and the role of color in identity and group belonging.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Current Studies:</strong> Industrial aesthetics revival, Gender and color 
                preferences evolving, Color in social media
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Applying Color Psychology</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Retail & Commerce</h3>
              <p className="text-gray-700 mb-4">
                The 2027 palette is ideal for premium positioning. Neutral greys signal quality and 
                sophistication while being accessible across demographics. They work particularly well 
                for products where durability and craftsmanship are key selling points.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best practices:</strong> Use with natural materials and textures • Combine with 
                warm metallics for luxury • Pair with white for contemporary minimalism
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Workplace Design</h3>
              <p className="text-gray-700 mb-4">
                These colors create focused, professional environments without the coldness of pure 
                greys or the formality of black. Research shows neutral mid-tone greys reduce visual 
                fatigue and support sustained concentration.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best practices:</strong> Use on large surfaces for calm • Add warmer accent colors 
                for breakout spaces • Ensure adequate lighting to prevent dullness
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Brand Communication</h3>
              <p className="text-gray-700 mb-4">
                From a branding perspective, the 2027 palette communicates reliability, expertise, and 
                contemporary relevance. It's particularly effective for brands wanting to signal substance 
                over flash, quality over quantity.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Best practices:</strong> Pair with bold typography for impact • Use texture and 
                material to add interest • Consider matte finishes to enhance sophistication
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">Recent Publications</h2>
          
          <div className="space-y-6">
            <div className="border border-white p-6">
              <div className="text-sm text-gray-400 mb-2">Atlas of Hues Vol. 12, 2027</div>
              <h3 className="text-lg tracking-wide uppercase mb-2">
                The Psychology of Industrial Greys: Heritage, Memory, and Modern Identity
              </h3>
              <p className="text-gray-300 text-sm">
                A comprehensive study of how industrial color palettes influence contemporary aesthetic 
                preferences and cultural values.
              </p>
            </div>

            <div className="border border-white p-6">
              <div className="text-sm text-gray-400 mb-2">Journal of Color Research, 2026</div>
              <h3 className="text-lg tracking-wide uppercase mb-2">
                Neutral Complexity: How Mid-Tone Greys Support Cognitive Function
              </h3>
              <p className="text-gray-300 text-sm">
                Experimental research on the effects of various grey tones on attention, memory, and 
                task performance in digital and physical environments.
              </p>
            </div>

            <div className="border border-white p-6">
              <div className="text-sm text-gray-400 mb-2">Color Psychology Quarterly, 2026</div>
              <h3 className="text-lg tracking-wide uppercase mb-2">
                Cultural Convergence: The Global Appeal of Industrial Aesthetics
              </h3>
              <p className="text-gray-300 text-sm">
                Cross-cultural analysis of the rising popularity of industrial color palettes across 
                diverse geographic and demographic segments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
