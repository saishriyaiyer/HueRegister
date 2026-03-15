import React from 'react';
import { ColorSwatch } from '../ColorSwatch';
import { ArrowRight } from 'lucide-react';

interface ColorPredictionsPageProps {
  onNavigate: (page: string) => void;
}

export function ColorPredictionsPage({ onNavigate }: ColorPredictionsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-block px-4 py-2 border border-black text-xs tracking-widest uppercase">
            2027 Color of the Year
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase">
            The Industrial<br />Renaissance
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For the first time in our history, The Material Colour Office presents not one, 
            but three colors of the year. This trinity represents the multifaceted nature of 
            our contemporary moment—where heritage meets innovation, strength embraces subtlety, 
            and tradition forges new paths forward.
          </p>
        </div>
      </section>

      {/* The Three Colors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl tracking-tight uppercase mb-4">The 2027 Palette</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Each color tells a story. Together, they narrate the zeitgeist of 2027.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <ColorSwatch name="Ashen Iron" hex="#4a424d" size="lg" />
              <button 
                onClick={() => onNavigate('ashen-iron')}
                className="w-full flex items-center justify-between border border-black px-6 py-4 hover:bg-black hover:text-white transition-colors normal-case"
              >
                <span className="text-sm tracking-wider uppercase">Deep Dive Analysis</span>
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="space-y-6">
              <ColorSwatch name="Forge Grey" hex="#5d6b7a" size="lg" />
              <button 
                onClick={() => onNavigate('forge-grey')}
                className="w-full flex items-center justify-between border border-black px-6 py-4 hover:bg-black hover:text-white transition-colors normal-case"
              >
                <span className="text-sm tracking-wider uppercase">Deep Dive Analysis</span>
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="space-y-6">
              <ColorSwatch name="Smoky Steel" hex="#5c6366" size="lg" />
              <button 
                onClick={() => onNavigate('smoky-steel')}
                className="w-full flex items-center justify-between border border-black px-6 py-4 hover:bg-black hover:text-white transition-colors normal-case"
              >
                <span className="text-sm tracking-wider uppercase">Deep Dive Analysis</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-8">The Story Behind the Selection</h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              2027 marks a pivotal moment in cultural history. As societies worldwide grapple with 
              rapid technological advancement while simultaneously seeking connection to heritage and 
              authenticity, our color selections reflect this duality.
            </p>
            
            <p>
              <strong className="text-black">Ashen Iron (#4A424D)</strong> embodies resilience. 
              It's the color of forged metal, of strength tested by fire. In our research, we observed 
              a global trend toward valuing durability over disposability, substance over superficiality. 
              This warm, deep grey with its subtle purple undertones speaks to dignified endurance.
            </p>
            
            <p>
              <strong className="text-black">Forge Grey (#5D6B7A)</strong> represents industrial 
              heritage reimagined. With its blue-grey tonality, it evokes the workshops and factories 
              that built modernity, now being reclaimed as spaces of artisanal innovation. It's a bridge 
              between past and future, honoring craft while embracing progress.
            </p>
            
            <p>
              <strong className="text-black">Smoky Steel (#5C6366)</strong> is the great neutralizer. 
              In an increasingly polarized world, this balanced grey offers equilibrium. It's the color 
              of urban skylines at dawn, of architectural concrete, of the spaces where diverse ideas 
              converge and create something new.
            </p>
            
            <p>
              Together, these three colors form a palette that is both grounded and forward-thinking, 
              industrial yet refined, strong yet nuanced. They reject the notion that a single color 
              can capture our complex moment, instead offering a spectrum of possibility.
            </p>
          </div>
        </div>
      </section>

      {/* Color Harmonies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Color Harmonies</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-6">Primary Combinations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#4a424d' }} />
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                  <span className="text-sm">Ashen Iron + Forge Grey</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#5c6366' }} />
                  <span className="text-sm">Forge Grey + Smoky Steel</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#4a424d' }} />
                  <div className="w-16 h-16 border border-black" style={{ backgroundColor: '#5c6366' }} />
                  <span className="text-sm">Ashen Iron + Smoky Steel</span>
                </div>
              </div>
            </div>
            
            <div className="border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-6">The Complete Trinity</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 border border-black" style={{ backgroundColor: '#4a424d' }} />
                <div className="w-20 h-20 border border-black" style={{ backgroundColor: '#5d6b7a' }} />
                <div className="w-20 h-20 border border-black" style={{ backgroundColor: '#5c6366' }} />
              </div>
              <p className="text-sm text-gray-600">
                When used together, these three colors create a sophisticated, grounded palette 
                that works across all design disciplines—from fashion to architecture, digital to print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl tracking-tight uppercase">Explore Each Color in Depth</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dive deep into the psychology, cultural significance, and practical applications 
            of each color in our 2027 palette.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('ashen-iron')}
              className="bg-[#4a424d] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-opacity-80 transition-colors"
            >
              Ashen Iron
            </button>
            <button 
              onClick={() => onNavigate('forge-grey')}
              className="bg-[#5d6b7a] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-opacity-80 transition-colors"
            >
              Forge Grey
            </button>
            <button 
              onClick={() => onNavigate('smoky-steel')}
              className="bg-[#5c6366] text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-opacity-80 transition-colors"
            >
              Smoky Steel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
