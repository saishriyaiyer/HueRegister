import React from 'react';
import { MessageCircle, Users, Award, Calendar } from 'lucide-react';

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-black py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl tracking-tight uppercase mb-6">
            Community<br />Forum
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Connect with color professionals, share insights, and participate in the global 
            conversation about design, trends, and the future of color.
          </p>
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <MessageCircle size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Featured Discussions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border border-black p-8 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest uppercase mb-3">
                    Hot Topic
                  </div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Implementing Ashen Iron in Fashion Collections
                  </h3>
                  <div className="text-sm text-gray-600">
                    Started by @ColorDirectorNYC • 342 replies • Last activity 2 hours ago
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Sharing experiences with dye houses and fabric mills getting Ashen Iron right. 
                What's working? What challenges have you encountered? Let's compile resources.
              </p>
              <div className="flex gap-3 text-xs tracking-wider uppercase text-gray-600">
                <span>#Fashion</span>
                <span>#TextileTechnology</span>
                <span>#2027Colors</span>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Forge Grey in Digital: Accessibility Considerations
                  </h3>
                  <div className="text-sm text-gray-600">
                    Started by @A11yDesigner • 89 replies • Last activity 5 hours ago
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Exploring contrast ratios, pairing strategies, and best practices for using Forge Grey 
                in digital interfaces while maintaining WCAG compliance.
              </p>
              <div className="flex gap-3 text-xs tracking-wider uppercase text-gray-600">
                <span>#DigitalDesign</span>
                <span>#Accessibility</span>
                <span>#UI/UX</span>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Material Pairings for the 2027 Palette
                  </h3>
                  <div className="text-sm text-gray-600">
                    Started by @InteriorStudioLA • 156 replies • Last activity yesterday
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                What materials are you pairing with these colors? Share photos of your projects. 
                Discussing wood tones, metals, stone, and textiles that complement the palette.
              </p>
              <div className="flex gap-3 text-xs tracking-wider uppercase text-gray-600">
                <span>#InteriorDesign</span>
                <span>#MaterialDesign</span>
                <span>#ProjectShowcase</span>
              </div>
            </div>

            <div className="border border-black p-8 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Regional Color Perception: How 2027 Palette Translates Globally
                  </h3>
                  <div className="text-sm text-gray-600">
                    Started by @GlobalTrendWatch • 67 replies • Last activity 2 days ago
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Fascinating discussion on how these industrial greys are being received in different 
                markets. Cultural associations, regional preferences, and localization strategies.
              </p>
              <div className="flex gap-3 text-xs tracking-wider uppercase text-gray-600">
                <span>#CulturalStudies</span>
                <span>#GlobalDesign</span>
                <span>#MarketResearch</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-black text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors">
              View All Discussions
            </button>
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl tracking-tight uppercase mb-12">Forum Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Color Predictions & Analysis</h3>
              <p className="text-gray-700 mb-4">
                Discuss color forecasting, trend analysis, and the methodology behind predictions. 
                Share your own observations and insights.
              </p>
              <div className="text-sm text-gray-600">
                1,847 discussions • 12,384 members
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Industry Applications</h3>
              <p className="text-gray-700 mb-4">
                Sector-specific discussions: fashion, interior design, product design, digital, 
                architecture. Share project experiences and technical challenges.
              </p>
              <div className="text-sm text-gray-600">
                2,456 discussions • 18,923 members
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Technical Resources</h3>
              <p className="text-gray-700 mb-4">
                Color matching, material specifications, printing challenges, digital color management. 
                Get technical help from experienced practitioners.
              </p>
              <div className="text-sm text-gray-600">
                987 discussions • 7,234 members
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Project Showcase</h3>
              <p className="text-gray-700 mb-4">
                Share your work using the 2027 palette. Get feedback, inspire others, and be featured 
                in our case studies and Atlas of Hues editorial.
              </p>
              <div className="text-sm text-gray-600">
                1,234 discussions • 15,678 members
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Color Psychology</h3>
              <p className="text-gray-700 mb-4">
                Explore the psychological, emotional, and cultural dimensions of color. Share research, 
                discuss theories, and debate interpretations.
              </p>
              <div className="text-sm text-gray-600">
                654 discussions • 5,432 members
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <h3 className="text-xl tracking-wide uppercase mb-4">Professional Development</h3>
              <p className="text-gray-700 mb-4">
                Career advice, business strategies, client education, pricing guidance. Supporting 
                color professionals at all stages of their careers.
              </p>
              <div className="text-sm text-gray-600">
                432 discussions • 3,891 members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Spotlight */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Award size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Member Spotlight</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-black p-8">
              <div className="w-full h-48 bg-[#4a424d] mb-4" />
              <h3 className="text-lg tracking-wide uppercase mb-2">@MariaColorist</h3>
              <div className="text-sm text-gray-600 mb-3">Textile Designer, Milan</div>
              <p className="text-sm text-gray-700 mb-4">
                "Featured for her innovative work translating Ashen Iron across natural and synthetic 
                fibers, sharing detailed dyeing protocols with the community."
              </p>
              <div className="text-xs tracking-wider uppercase text-gray-600">
                142 posts • 2,847 reputation
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="w-full h-48 bg-[#5d6b7a] mb-4" />
              <h3 className="text-lg tracking-wide uppercase mb-2">@ArchitectJones</h3>
              <div className="text-sm text-gray-600 mb-3">Architect, Copenhagen</div>
              <p className="text-sm text-gray-700 mb-4">
                "Recognized for comprehensive documentation of Forge Grey in architectural applications, 
                including detailed lighting and material pairing studies."
              </p>
              <div className="text-xs tracking-wider uppercase text-gray-600">
                98 posts • 1,923 reputation
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="w-full h-48 bg-[#5c6366] mb-4" />
              <h3 className="text-lg tracking-wide uppercase mb-2">@DigitalStudio</h3>
              <div className="text-sm text-gray-600 mb-3">UI Designer, San Francisco</div>
              <p className="text-sm text-gray-700 mb-4">
                "Celebrated for creating and sharing an open-source design system built around the 2027 
                palette, with extensive accessibility documentation."
              </p>
              <div className="text-xs tracking-wider uppercase text-gray-600">
                267 posts • 4,156 reputation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50 border-y border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Calendar size={40} />
            <h2 className="text-3xl tracking-tight uppercase">Community Events</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest uppercase mb-3">
                    Upcoming
                  </div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Monthly Color Critique: January 2027
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    January 15, 2027 • 2:00 PM EST • Virtual Event
                  </div>
                  <p className="text-gray-700 mb-4">
                    Submit your work for peer review and expert feedback. This month focusing on 
                    fashion and textile applications of the 2027 palette.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Register Free
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest uppercase mb-3">
                    Upcoming
                  </div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Masterclass: Color Psychology in Practice
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    February 3, 2027 • 10:00 AM EST • Virtual Workshop
                  </div>
                  <p className="text-gray-700 mb-4">
                    Deep dive into applying color psychology research to real-world projects. 
                    Led by Material Colour Office researchers.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Reserve Spot
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black p-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-block px-3 py-1 bg-gray-600 text-white text-xs tracking-widest uppercase mb-3">
                    Recurring
                  </div>
                  <h3 className="text-xl tracking-wide uppercase mb-2">
                    Weekly Design Office Hours
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    Every Thursday • 3:00 PM EST • Casual Q&A
                  </div>
                  <p className="text-gray-700 mb-4">
                    Drop-in sessions with color professionals. Bring your questions about color 
                    selection, client communication, technical challenges, or anything color-related.
                  </p>
                  <button className="text-sm tracking-wider uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                    Join Next Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users size={48} />
          </div>
          <h2 className="text-4xl tracking-tight uppercase mb-6">Join the Community</h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect with over 45,000 color professionals worldwide. Free membership includes 
            forum access, monthly newsletters, and event invitations.
          </p>
          <button className="bg-white text-black px-12 py-4 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
            Create Free Account
          </button>
          <div className="mt-6 text-sm text-gray-400">
            Already a member? <span className="text-white underline cursor-pointer">Sign In</span>
          </div>
        </div>
      </section>
    </div>
  );
}
