import React from 'react';

export function ObservatoryOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            What This System Observes
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6] mb-8">
              This system observes public visual culture across a curated set of design-led websites in fashion, interiors, technology, beauty, mobility, and branding.
            </p>
            <p className="text-[20px] leading-[1.6] mb-8">
              It does not attempt to survey the entire internet. Instead, it samples a stable set of high-signal environments over long periods of time to identify persistent color patterns that appear across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Key Principles */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="uppercase tracking-[0.15em] mb-12">
          Observation Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="uppercase tracking-[0.1em] mb-4">
              Curated, Not Comprehensive
            </h3>
            <p className="text-[16px] leading-[1.6]">
              A fixed list of high-signal sources chosen for visual intentionality and cross-industry relevance.
            </p>
          </div>
          <div>
            <h3 className="uppercase tracking-[0.1em] mb-4">
              Persistent, Not Viral
            </h3>
            <p className="text-[16px] leading-[1.6]">
              Only signals that appear across multiple industries over sustained periods are considered.
            </p>
          </div>
          <div>
            <h3 className="uppercase tracking-[0.1em] mb-4">
              Perceptual, Not Technical
            </h3>
            <p className="text-[16px] leading-[1.6]">
              Colors are measured using perceptual values that reflect how humans see, not how screens encode.
            </p>
          </div>
        </div>
      </div>

      {/* Observation Timeline */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="uppercase tracking-[0.15em] mb-12">
            12-Month Observation Cycle
          </h2>
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="flex gap-8 border-l-2 border-black pl-6 py-4">
                <div className="w-32 flex-shrink-0">
                  <p className="uppercase tracking-[0.1em]">Weeks 1-12</p>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.6]">
                    Initial signal detection across all six industries. Weekly crawls establish baseline patterns.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 border-l-2 border-black pl-6 py-4">
                <div className="w-32 flex-shrink-0">
                  <p className="uppercase tracking-[0.1em]">Weeks 13-24</p>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.6]">
                    Pattern validation and cross-industry correlation analysis. Emerging trends begin to stabilize.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 border-l-2 border-black pl-6 py-4">
                <div className="w-32 flex-shrink-0">
                  <p className="uppercase tracking-[0.1em]">Weeks 25-36</p>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.6]">
                    Long-term persistence verification. Color families named and narratives developed.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 border-l-2 border-black pl-6 py-4">
                <div className="w-32 flex-shrink-0">
                  <p className="uppercase tracking-[0.1em]">Weeks 37-52</p>
                </div>
                <div>
                  <p className="text-[16px] leading-[1.6]">
                    Final synthesis and publication. Only validated, persistent signals are released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
