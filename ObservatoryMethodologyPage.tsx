import React from 'react';

export function ObservatoryMethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            Methodology
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6]">
              A systematic approach to observing color in visual culture. This methodology prioritizes persistence over novelty, cross-industry validation over isolated signals, and human interpretation over algorithmic output.
            </p>
          </div>
        </div>
      </div>

      {/* Six Steps */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex gap-8">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">1</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Source Selection
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                A fixed list of 20–50 public, design-led websites is maintained. These sources are chosen for visual intentionality, regular updates, and cross-industry relevance.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Selection Criteria:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• Design-led editorial control</li>
                  <li>• Regular content updates</li>
                  <li>• High-quality visual documentation</li>
                  <li>• Industry leadership position</li>
                  <li>• Public accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-8 border-t border-black pt-16">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">2</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Observation Cycle
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                Each source is observed on a weekly basis. Only publicly accessible content is considered. Observation focuses on primary visual content, not metadata or text descriptions.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Observation Constraints:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• Weekly crawl frequency only</li>
                  <li>• Respect for robots.txt directives</li>
                  <li>• Maximum 10 pages per source per week</li>
                  <li>• Images larger than 300×300 pixels only</li>
                  <li>• No retention of source imagery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-8 border-t border-black pt-16">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">3</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Color Measurement
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                Colors are measured using perceptual color values (LAB color space) to reflect how humans see color, not how screens encode it. Only numerical color data is retained.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Measurement Approach:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• LAB color space for perceptual accuracy</li>
                  <li>• Area-weighted color extraction</li>
                  <li>• Dominant and accent color identification</li>
                  <li>• Source imagery discarded post-extraction</li>
                  <li>• Only color coordinates stored</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-8 border-t border-black pt-16">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">4</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Filtering & Validation
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                Short-lived spikes, single-brand dominance, and isolated industry signals are filtered out. Only patterns that persist across time and industries advance to human review.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Filtering Rules:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• Minimum 4-week persistence required</li>
                  <li>• Minimum 3 industries showing signal</li>
                  <li>• Maximum 40% from single source domain</li>
                  <li>• Weighted by source trust score</li>
                  <li>• Seasonal color excluded unless multi-year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-8 border-t border-black pt-16">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">5</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Human Synthesis
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                Analysts review validated signals to define color families, narratives, and relevance. This stage introduces meaning, context, and cultural interpretation to numerical data.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Synthesis Activities:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• Group related hues into color families</li>
                  <li>• Identify emotional and cultural drivers</li>
                  <li>• Name color families with intentionality</li>
                  <li>• Draft narrative context paragraphs</li>
                  <li>• Assign confidence levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-8 border-t border-black pt-16">
            <div className="w-24 flex-shrink-0">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center">
                <span className="text-[32px]">6</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="uppercase tracking-[0.15em] mb-4">
                Publication
              </h2>
              <p className="text-[18px] leading-[1.6] max-w-3xl mb-6">
                Only signals that persist over time and across industries are published. Publication includes color family definition, narrative context, confidence assessment, and recommended applications.
              </p>
              <div className="border-l-2 border-black pl-6 mt-6">
                <p className="text-[16px] leading-[1.6] mb-3">
                  <span className="uppercase tracking-[0.1em] text-[14px]">Publication Components:</span>
                </p>
                <ul className="space-y-2 text-[16px] leading-[1.6]">
                  <li>• Color family name and definition</li>
                  <li>• Narrative paragraph with cultural context</li>
                  <li>• Confidence level (High / Medium / Experimental)</li>
                  <li>• Industries to watch</li>
                  <li>• Application recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="uppercase tracking-[0.15em] mb-8">
            What This System Does Not Do
          </h2>
          <div className="max-w-4xl space-y-6 text-[18px] leading-[1.6]">
            <p>
              This system does not predict color trends. It observes patterns already emerging in visual culture and validates their persistence.
            </p>
            <p>
              This system does not survey consumer preference. It observes professional design decisions made by brands, studios, and creative directors.
            </p>
            <p>
              This system does not track social media virality. It monitors curated, design-led environments where visual choices are made with intentionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
