import React, { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface ColorFamily {
  id: string;
  working_name: string;
  hues: Array<{ l: number; a: number; b: number; hex: string }>;
  emotional_tone: string;
  cultural_drivers: string;
  typical_applications: string[];
  confidence: 'high' | 'medium' | 'experimental';
  status: 'draft' | 'review' | 'approved';
}

export function ColorFamilyDecisionPage() {
  const [families, setFamilies] = useState<ColorFamily[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadColorFamilies();
  }, []);

  const loadColorFamilies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/observatory/color-families`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFamilies(data.families || []);
      }
    } catch (error) {
      console.error('Error loading color families:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      draft: 'bg-gray-200',
      review: 'bg-yellow-100',
      approved: 'bg-green-100',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-200';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            Color Family Decision Board
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6] mb-8">
              This is where validated signals receive meaning. Analysts group related hues, identify emotional drivers, and define cultural context. Each board represents a potential published color family.
            </p>
            <p className="text-[16px] leading-[1.6] uppercase tracking-[0.1em]">
              Current Status: {families.filter(f => f.status === 'review').length} families in review
            </p>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="uppercase tracking-[0.1em] text-[14px] mb-3">Draft</p>
              <p className="text-[14px] leading-[1.6]">
                Initial grouping of related hues. Working name assigned. Preliminary analysis.
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.1em] text-[14px] mb-3">Review</p>
              <p className="text-[14px] leading-[1.6]">
                Cultural drivers identified. Narrative drafted. Applications mapped. Confidence assessed.
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.1em] text-[14px] mb-3">Approved</p>
              <p className="text-[14px] leading-[1.6]">
                Final validation complete. Ready for publication. Monitoring continues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Family Boards */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        {loading ? (
          <div className="text-center py-20">
            <p className="uppercase tracking-[0.1em]">Loading color families...</p>
          </div>
        ) : families.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[18px] leading-[1.6] mb-8">
              No color families in development at this time.
            </p>
            <p className="text-[14px] leading-[1.6] uppercase tracking-[0.1em]">
              Color families emerge from multi-week signal validation. Check weekly signal review for emerging patterns.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {families.map((family) => (
              <div key={family.id} className="border-2 border-black p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="uppercase tracking-[0.15em] mb-2">
                      {family.working_name}
                    </h2>
                    <p className="text-[14px] uppercase tracking-[0.1em]">
                      Working Family Name
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className={`${getStatusBadge(family.status)} px-4 py-2`}>
                      <p className="text-[12px] uppercase tracking-[0.1em]">{family.status}</p>
                    </div>
                    <div className="border border-black px-4 py-2">
                      <p className="text-[12px] uppercase tracking-[0.1em]">
                        Confidence: {family.confidence}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hue Swatches */}
                <div className="mb-8">
                  <p className="text-[12px] uppercase tracking-[0.1em] mb-4">
                    Related Hues ({family.hues.length})
                  </p>
                  <div className="grid grid-cols-7 gap-2">
                    {family.hues.map((hue, idx) => (
                      <div key={idx}>
                        <div
                          className="w-full h-24 border border-black"
                          style={{ backgroundColor: hue.hex }}
                        />
                        <p className="text-[10px] mt-1 uppercase tracking-[0.05em]">
                          L{hue.l.toFixed(0)} A{hue.a.toFixed(0)} B{hue.b.toFixed(0)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analysis Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[12px] uppercase tracking-[0.1em] mb-3">
                      Emotional Tone
                    </p>
                    <p className="text-[18px] leading-[1.6]">
                      {family.emotional_tone}
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[12px] uppercase tracking-[0.1em] mb-3">
                      Cultural Drivers
                    </p>
                    <p className="text-[16px] leading-[1.6]">
                      {family.cultural_drivers}
                    </p>
                  </div>
                </div>

                {/* Applications */}
                <div className="border-t border-black pt-6">
                  <p className="text-[12px] uppercase tracking-[0.1em] mb-4">
                    Typical Applications
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {family.typical_applications.map((app, idx) => (
                      <div key={idx} className="border border-black px-4 py-2">
                        <p className="text-[14px]">{app}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guidelines */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="uppercase tracking-[0.15em] mb-12">
            Decision Guidelines
          </h2>
          <div className="max-w-4xl space-y-8">
            <div className="border-l-2 border-black pl-6">
              <h3 className="uppercase tracking-[0.1em] mb-3">
                When to Group Hues
              </h3>
              <p className="text-[16px] leading-[1.6]">
                Hues should be grouped when they share perceptual similarity, appear in similar contexts across industries, and suggest a common emotional or cultural driver. Technical proximity alone is insufficient.
              </p>
            </div>
            <div className="border-l-2 border-black pl-6">
              <h3 className="uppercase tracking-[0.1em] mb-3">
                Naming Principles
              </h3>
              <p className="text-[16px] leading-[1.6]">
                Working names should be neutral and descriptive until cultural context is clear. Final names should evoke the emotional territory and cultural moment without excessive poetry or marketing language.
              </p>
            </div>
            <div className="border-l-2 border-black pl-6">
              <h3 className="uppercase tracking-[0.1em] mb-3">
                Confidence Assessment
              </h3>
              <p className="text-[16px] leading-[1.6]">
                High confidence requires 8+ weeks of persistence across 4+ industries. Medium confidence accepts 4-8 weeks across 3+ industries. Experimental signals show strong conceptual coherence but limited temporal validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
