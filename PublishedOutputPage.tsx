import React, { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface PublishedColor {
  id: string;
  family_name: string;
  narrative: string;
  confidence: 'high' | 'medium' | 'experimental';
  industries_to_watch: string[];
  hues: Array<{ hex: string; lab_l: number; lab_a: number; lab_b: number }>;
  published_date: string;
  observation_period: string;
}

export function PublishedOutputPage() {
  const [publishedColors, setPublishedColors] = useState<PublishedColor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2027');

  useEffect(() => {
    loadPublishedColors();
  }, [selectedYear]);

  const loadPublishedColors = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/observatory/published?year=${selectedYear}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPublishedColors(data.colors || []);
      }
    } catch (error) {
      console.error('Error loading published colors:', error);
    } finally {
      setLoading(false);
    }
  };

  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return 'bg-black text-white';
      case 'medium':
        return 'bg-gray-600 text-white';
      case 'experimental':
        return 'border-2 border-black bg-white';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            Published Color Intelligence
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6] mb-8">
              Only validated, persistent signals appear here. Each published color family represents months of observation, cross-industry validation, and human synthesis.
            </p>
            <p className="text-[16px] leading-[1.6] uppercase tracking-[0.1em]">
              Publication Year: {selectedYear}
            </p>
          </div>
        </div>
      </div>

      {/* Publication Standards */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-black mb-4" />
              <p className="uppercase tracking-[0.1em] text-[14px] mb-2">High Confidence</p>
              <p className="text-[14px] leading-[1.6]">
                8+ weeks observation, 4+ industries, strong cultural narrative
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-600 mb-4" />
              <p className="uppercase tracking-[0.1em] text-[14px] mb-2">Medium Confidence</p>
              <p className="text-[14px] leading-[1.6]">
                4-8 weeks observation, 3+ industries, emerging narrative
              </p>
            </div>
            <div>
              <div className="w-12 h-12 border-2 border-black mb-4" />
              <p className="uppercase tracking-[0.1em] text-[14px] mb-2">Experimental</p>
              <p className="text-[14px] leading-[1.6]">
                Strong conceptual coherence, limited temporal validation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Published Colors */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        {loading ? (
          <div className="text-center py-20">
            <p className="uppercase tracking-[0.1em]">Loading published colors...</p>
          </div>
        ) : publishedColors.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[18px] leading-[1.6] mb-8">
              No colors published for {selectedYear} yet.
            </p>
            <p className="text-[14px] leading-[1.6] uppercase tracking-[0.1em]">
              Publication occurs only after multi-month validation. Check Color Family Decision Board for families in development.
            </p>
          </div>
        ) : (
          <div className="space-y-20">
            {publishedColors.map((color) => (
              <div key={color.id} className="border-4 border-black">
                {/* Color Swatches */}
                <div className="grid grid-cols-5 h-48">
                  {color.hues.map((hue, idx) => (
                    <div
                      key={idx}
                      className="border-r border-black last:border-r-0"
                      style={{ backgroundColor: hue.hex }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="p-12">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h2 className="uppercase tracking-[0.2em] mb-4 text-[32px]">
                        {color.family_name}
                      </h2>
                      <p className="text-[14px] uppercase tracking-[0.1em]">
                        {color.observation_period}
                      </p>
                    </div>
                    <div className={`${getConfidenceBadge(color.confidence)} px-6 py-3`}>
                      <p className="text-[14px] uppercase tracking-[0.1em]">
                        {color.confidence} Confidence
                      </p>
                    </div>
                  </div>

                  {/* Narrative */}
                  <div className="max-w-4xl mb-12">
                    <p className="text-[20px] leading-[1.8]">
                      {color.narrative}
                    </p>
                  </div>

                  {/* Industries & Meta */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-black pt-8">
                    <div>
                      <p className="uppercase tracking-[0.1em] text-[12px] mb-4">
                        Industries to Watch
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {color.industries_to_watch.map((industry, idx) => (
                          <div key={idx} className="border-2 border-black px-4 py-2">
                            <p className="text-[14px] uppercase tracking-[0.05em]">{industry}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.1em] text-[12px] mb-4">
                        Color Values
                      </p>
                      <div className="space-y-2">
                        {color.hues.map((hue, idx) => (
                          <div key={idx} className="flex gap-4 text-[14px]">
                            <div className="w-8 h-8 border border-black" style={{ backgroundColor: hue.hex }} />
                            <div className="flex gap-6">
                              <span>{hue.hex.toUpperCase()}</span>
                              <span className="text-gray-600">
                                L{hue.lab_l.toFixed(0)} A{hue.lab_a.toFixed(0)} B{hue.lab_b.toFixed(0)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Publication Philosophy */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="uppercase tracking-[0.15em] mb-12">
            What Publication Means
          </h2>
          <div className="max-w-4xl space-y-8">
            <p className="text-[18px] leading-[1.6]">
              Published colors are not predictions. They are observations of what is already emerging in visual culture, validated across time and industries.
            </p>
            <p className="text-[18px] leading-[1.6]">
              Publication indicates that a color family has demonstrated persistence, cross-industry relevance, and cultural coherence sufficient to merit professional attention.
            </p>
            <p className="text-[18px] leading-[1.6]">
              Confidence levels reflect temporal validation and cross-industry breadth, not subjective certainty. Even experimental signals undergo rigorous filtering before publication.
            </p>
          </div>
        </div>
      </div>

      {/* Mirroring Note */}
      <div className="border-t border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <p className="text-[14px] uppercase tracking-[0.1em] mb-4">
            System Integration
          </p>
          <p className="text-[16px] leading-[1.6]">
            This published output mirrors directly to the main Hue Register website. When colors reach publication status here, they automatically populate the 2027 predictions and color deep-dive pages.
          </p>
        </div>
      </div>
    </div>
  );
}
