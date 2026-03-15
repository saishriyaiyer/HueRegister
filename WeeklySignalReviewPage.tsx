import React, { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface ColorSignal {
  id: string;
  lab_l: number;
  lab_a: number;
  lab_b: number;
  frequency: number;
  industries: string[];
  first_seen: string;
  last_seen: string;
  status: 'emerging' | 'stable' | 'declining';
  domain_count: number;
}

export function WeeklySignalReviewPage() {
  const [signals, setSignals] = useState<ColorSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState('current');

  useEffect(() => {
    loadWeeklySignals();
  }, [selectedWeek]);

  const loadWeeklySignals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/observatory/weekly-signals?week=${selectedWeek}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSignals(data.signals || []);
      }
    } catch (error) {
      console.error('Error loading weekly signals:', error);
    } finally {
      setLoading(false);
    }
  };

  const labToRgb = (l: number, a: number, b: number): string => {
    // Simplified LAB to RGB conversion for display
    // This is a simplified version - full conversion would use proper color space transformation
    const y = (l + 16) / 116;
    const x = a / 500 + y;
    const z = y - b / 200;

    const r = Math.round(Math.max(0, Math.min(255, (3.2406 * x - 1.5372 * y - 0.4986 * z) * 255)));
    const g = Math.round(Math.max(0, Math.min(255, (-0.9689 * x + 1.8758 * y + 0.0415 * z) * 255)));
    const bl = Math.round(Math.max(0, Math.min(255, (0.0557 * x - 0.2040 * y + 1.0570 * z) * 255)));

    return `rgb(${r}, ${g}, ${bl})`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'emerging':
        return 'border-green-600';
      case 'stable':
        return 'border-blue-600';
      case 'declining':
        return 'border-red-600';
      default:
        return 'border-black';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h1 className="uppercase tracking-[0.2em] mb-12">
            Weekly Signal Review
          </h1>
          <div className="max-w-3xl">
            <p className="text-[20px] leading-[1.6] mb-8">
              Raw color signals detected across observed sources. No naming or interpretation at this stage—only numerical measurement, frequency tracking, and cross-industry validation.
            </p>
            <p className="text-[16px] leading-[1.6] uppercase tracking-[0.1em]">
              Observation Week: {selectedWeek === 'current' ? 'Current' : selectedWeek}
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="max-w-4xl">
            <p className="text-[14px] leading-[1.6] uppercase tracking-[0.1em] mb-4">
              Reading This Review
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] leading-[1.6]">
              <div>
                <p className="uppercase tracking-[0.1em] mb-2">Emerging</p>
                <p>First detected within past 4 weeks</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.1em] mb-2">Stable</p>
                <p>Consistent presence for 4+ weeks</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.1em] mb-2">Declining</p>
                <p>Frequency decreasing over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signal Cards */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        {loading ? (
          <div className="text-center py-20">
            <p className="uppercase tracking-[0.1em]">Loading signals...</p>
          </div>
        ) : signals.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[18px] leading-[1.6] mb-8">
              No signals detected for this observation period.
            </p>
            <p className="text-[14px] leading-[1.6] uppercase tracking-[0.1em]">
              Weekly observation cycle begins automatically. Check back next week.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signals.map((signal) => (
              <div key={signal.id} className={`border-2 ${getStatusColor(signal.status)} p-6`}>
                {/* Color Swatch */}
                <div
                  className="w-full h-32 mb-6"
                  style={{ backgroundColor: labToRgb(signal.lab_l, signal.lab_a, signal.lab_b) }}
                />

                {/* LAB Values */}
                <div className="mb-6">
                  <p className="text-[12px] uppercase tracking-[0.1em] mb-2">LAB Values</p>
                  <div className="grid grid-cols-3 gap-2 text-[14px]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.05em]">L</p>
                      <p>{signal.lab_l.toFixed(1)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.05em]">A</p>
                      <p>{signal.lab_a.toFixed(1)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.05em]">B</p>
                      <p>{signal.lab_b.toFixed(1)}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.1em] mb-1">Frequency</p>
                    <p className="text-[14px]">{signal.frequency} observations</p>
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.1em] mb-1">Industries</p>
                    <p className="text-[14px]">{signal.industries.length} of 6</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {signal.industries.map((industry, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-[0.05em] border border-black px-2 py-1">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.1em] mb-1">Source Domains</p>
                    <p className="text-[14px]">{signal.domain_count} domains</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="border-t border-black pt-4">
                  <div className="grid grid-cols-2 gap-4 text-[12px]">
                    <div>
                      <p className="uppercase tracking-[0.1em] mb-1">First Seen</p>
                      <p>{new Date(signal.first_seen).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.1em] mb-1">Last Seen</p>
                      <p>{new Date(signal.last_seen).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="uppercase tracking-[0.1em] text-[12px]">
                      Status: <span className={signal.status === 'emerging' ? 'text-green-600' : signal.status === 'stable' ? 'text-blue-600' : 'text-red-600'}>{signal.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Note */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="max-w-4xl">
            <p className="text-[14px] leading-[1.6] uppercase tracking-[0.1em] mb-4">
              Important Note
            </p>
            <p className="text-[16px] leading-[1.6]">
              These are uninterpreted signals. Color naming, cultural context, and narrative development occur during the Human Synthesis phase after multi-week validation. Not all signals advance to publication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
