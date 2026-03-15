import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Layers, Filter, ChevronDown, ChevronUp, Eye, FileText, BarChart3 } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface CMFSignal {
  id: string;
  title: string;
  signal_type: string;
  status: string;
  description: string;
  source_type: string;
  source_reference: string;
  industry: string;
  region: string;
  date_observed: string;
  colours: string[];
  materials: string[];
  finishes: string[];
  analyst_interpretation: string;
  confidence_assessment: string;
  notes: string;
  analyst_name: string;
  created_at: string;
}

interface ObservationCycle {
  period: string;
  month: string;
  year: string;
  signals: CMFSignal[];
  eventsCount: number;
  signalCount: number;
}

export function TrendAnalyzerPage() {
  const [signals, setSignals] = useState<CMFSignal[]>([]);
  const [loading, setLoading] = useState(true);
  const [cycles, setCycles] = useState<ObservationCycle[]>([]);
  const [selectedCycle, setSelectedCycle] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'signals' | 'analytics'>('timeline');
  const [initializing, setInitializing] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    loadSignals();
  }, []);

  useEffect(() => {
    if (signals.length > 0) {
      organizeCycles();
    }
  }, [signals]);

  const loadSignals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/admin/signals`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSignals(data.signals || []);
      }
    } catch (err) {
      console.error('Error loading signals:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadJanuaryData = async () => {
    setInitializing(true);
    setInitError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/cmf/init-jan2026`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to initialize: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('January 2026 initialization result:', result);
      
      // Refresh data
      await loadSignals();
      
      alert(`✅ Successfully loaded January 2026 data!\n${result.events_created} events created`);
    } catch (error) {
      console.error('Error loading January data:', error);
      setInitError(error instanceof Error ? error.message : 'Failed to load January data');
      alert(`❌ Error: ${error instanceof Error ? error.message : 'Failed to load January data'}`);
    } finally {
      setInitializing(false);
    }
  };

  const loadFebruaryData = async () => {
    setInitializing(true);
    setInitError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/cmf/init-feb2026`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to initialize: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('February 2026 initialization result:', result);
      
      // Refresh data
      await loadSignals();
      
      alert(`✅ Successfully loaded February 2026 data!\n${result.events_created} events created`);
    } catch (error) {
      console.error('Error loading February data:', error);
      setInitError(error instanceof Error ? error.message : 'Failed to load February data');
      alert(`❌ Error: ${error instanceof Error ? error.message : 'Failed to load February data'}`);
    } finally {
      setInitializing(false);
    }
  };

  const loadMarchData = async () => {
    setInitializing(true);
    setInitError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/cmf/init-mar2026`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to initialize: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('March 2026 initialization result:', result);
      
      // Refresh data
      await loadSignals();
      
      alert(`✅ Successfully loaded March 2026 data!\n${result.events_created} events created`);
    } catch (error) {
      console.error('Error loading March data:', error);
      setInitError(error instanceof Error ? error.message : 'Failed to load March data');
      alert(`❌ Error: ${error instanceof Error ? error.message : 'Failed to load March data'}`);
    } finally {
      setInitializing(false);
    }
  };

  const organizeCycles = () => {
    const cycleMap = new Map<string, CMFSignal[]>();

    signals.forEach(signal => {
      const date = new Date(signal.date_observed);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!cycleMap.has(key)) {
        cycleMap.set(key, []);
      }
      cycleMap.get(key)!.push(signal);
    });

    const organizedCycles: ObservationCycle[] = Array.from(cycleMap.entries())
      .map(([key, signals]) => {
        const [year, month] = key.split('-');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        
        // Count unique events based on source_reference
        const uniqueSources = new Set(signals.map(s => s.source_reference || s.title));
        
        return {
          period: key,
          month: monthNames[parseInt(month) - 1],
          year,
          signals,
          eventsCount: uniqueSources.size,
          signalCount: signals.length
        };
      })
      .sort((a, b) => b.period.localeCompare(a.period));

    setCycles(organizedCycles);
    if (organizedCycles.length > 0 && !selectedCycle) {
      setSelectedCycle(organizedCycles[0].period);
    }
  };

  const getFilteredSignals = (cycleSignals: CMFSignal[]) => {
    return cycleSignals.filter(signal => {
      if (filterType !== 'all' && signal.signal_type !== filterType) return false;
      if (filterIndustry !== 'all' && signal.industry !== filterIndustry) return false;
      if (filterStatus !== 'all' && signal.status !== filterStatus) return false;
      return true;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Emerging': return 'border-yellow-600 bg-yellow-50';
      case 'Strong': return 'border-green-600 bg-green-50';
      case 'Established': return 'border-blue-600 bg-blue-50';
      case 'Archived': return 'border-gray-400 bg-gray-50';
      default: return 'border-gray-600 bg-gray-50';
    }
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'High': return 'text-green-700';
      case 'Medium': return 'text-yellow-700';
      case 'Low': return 'text-red-700';
      default: return 'text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Colour': return '🎨';
      case 'Material': return '🧱';
      case 'Finish': return '✨';
      case 'Cross-CMF': return '🔗';
      default: return '📊';
    }
  };

  const renderTimeline = () => {
    return (
      <div className="space-y-8">
        <div className="border-4 border-black p-8 bg-white">
          <h2 className="text-2xl tracking-wide uppercase mb-4">Observation Cycles</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            The Longitudinal Tracker accumulates CMF intelligence through monthly observation cycles. 
            Each cycle represents human-curated signal data from diverse sources including geopolitical events, 
            trade shows, cultural moments, and industry launches. Signals are evaluated based on source diversity, 
            temporal consistency, cross-industry presence, and human validation.
          </p>
        </div>

        <div className="space-y-4">
          {cycles.map((cycle) => {
            const isSelected = selectedCycle === cycle.period;
            const filteredSignals = getFilteredSignals(cycle.signals);
            
            return (
              <div key={cycle.period} className="border-4 border-black bg-white">
                <button
                  onClick={() => setSelectedCycle(isSelected ? null : cycle.period)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5" />
                        <h3 className="text-xl tracking-wide uppercase">{cycle.month} {cycle.year}</h3>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span>{cycle.eventsCount} Event{cycle.eventsCount !== 1 ? 's' : ''}</span>
                        <span>•</span>
                        <span>{cycle.signalCount} Signal{cycle.signalCount !== 1 ? 's' : ''} Extracted</span>
                        {filteredSignals.length !== cycle.signalCount && (
                          <>
                            <span>•</span>
                            <span className="text-gray-500">({filteredSignals.length} filtered)</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isSelected ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                </button>

                {isSelected && (
                  <div className="border-t-4 border-black p-6 bg-gray-50">
                    {filteredSignals.length === 0 ? (
                      <p className="text-sm text-gray-600 italic">No signals match current filters</p>
                    ) : (
                      <div className="space-y-4">
                        {filteredSignals.map((signal) => (
                          <div 
                            key={signal.id} 
                            className={`border-2 p-4 ${getStatusColor(signal.status)}`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start gap-3 flex-1">
                                <span className="text-2xl">{getTypeIcon(signal.signal_type)}</span>
                                <div className="flex-1">
                                  <h4 className="font-medium text-base uppercase tracking-wide mb-1">
                                    {signal.title}
                                  </h4>
                                  <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="px-2 py-1 bg-white border border-black">
                                      {signal.signal_type}
                                    </span>
                                    <span className="px-2 py-1 bg-white border border-black">
                                      {signal.status}
                                    </span>
                                    <span className={`px-2 py-1 bg-white border border-black ${getConfidenceColor(signal.confidence_assessment)}`}>
                                      Confidence: {signal.confidence_assessment}
                                    </span>
                                    {signal.industry && (
                                      <span className="px-2 py-1 bg-white border border-black">
                                        {signal.industry}
                                      </span>
                                    )}
                                    {signal.region && (
                                      <span className="px-2 py-1 bg-white border border-black">
                                        {signal.region}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => setExpandedSignal(expandedSignal === signal.id ? null : signal.id)}
                                className="ml-4 p-2 hover:bg-white/50 rounded transition-colors"
                              >
                                <Eye size={20} />
                              </button>
                            </div>

                            {signal.description && (
                              <p className="text-sm text-gray-700 mb-3">{signal.description}</p>
                            )}

                            <div className="flex flex-wrap gap-4 text-xs">
                              {signal.colours && signal.colours.length > 0 && (
                                <div>
                                  <span className="font-medium uppercase text-gray-500">Colours:</span>
                                  <span className="ml-2">{signal.colours.join(', ')}</span>
                                </div>
                              )}
                              {signal.materials && signal.materials.length > 0 && (
                                <div>
                                  <span className="font-medium uppercase text-gray-500">Materials:</span>
                                  <span className="ml-2">{signal.materials.join(', ')}</span>
                                </div>
                              )}
                              {signal.finishes && signal.finishes.length > 0 && (
                                <div>
                                  <span className="font-medium uppercase text-gray-500">Finishes:</span>
                                  <span className="ml-2">{signal.finishes.join(', ')}</span>
                                </div>
                              )}
                            </div>

                            {expandedSignal === signal.id && (
                              <div className="mt-4 pt-4 border-t-2 border-black/20 space-y-3">
                                {signal.source_type && (
                                  <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Source Type</p>
                                    <p className="text-sm">{signal.source_type}</p>
                                  </div>
                                )}
                                {signal.source_reference && (
                                  <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Source Reference</p>
                                    <p className="text-sm">{signal.source_reference}</p>
                                  </div>
                                )}
                                {signal.analyst_interpretation && (
                                  <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Analyst Interpretation</p>
                                    <p className="text-sm leading-relaxed">{signal.analyst_interpretation}</p>
                                  </div>
                                )}
                                {signal.notes && (
                                  <div>
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Notes</p>
                                    <p className="text-sm leading-relaxed">{signal.notes}</p>
                                  </div>
                                )}
                                {signal.analyst_name && (
                                  <div className="flex items-center gap-2 text-xs text-gray-600 pt-2">
                                    <span>Analyst:</span>
                                    <span className="font-medium">{signal.analyst_name}</span>
                                    <span>•</span>
                                    <span>{new Date(signal.date_observed).toLocaleDateString()}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {cycles.length === 0 && !loading && (
          <div className="border-4 border-black p-12 bg-white text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl tracking-wide uppercase mb-2">No Observation Cycles Yet</h3>
            <p className="text-sm text-gray-600 mb-6">
              CMF signals will appear here once observation data is entered through the admin dashboard.
            </p>
            <button
              onClick={loadJanuaryData}
              disabled={initializing}
              className="px-6 py-3 bg-black text-white text-sm tracking-wide uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {initializing ? 'Initializing...' : 'Load January 2026 Data'}
            </button>
            {initError && (
              <p className="mt-4 text-sm text-red-700">{initError}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderSignalsList = () => {
    const allSignals = signals.filter(signal => {
      if (filterType !== 'all' && signal.signal_type !== filterType) return false;
      if (filterIndustry !== 'all' && signal.industry !== filterIndustry) return false;
      if (filterStatus !== 'all' && signal.status !== filterStatus) return false;
      return true;
    });

    return (
      <div className="space-y-6">
        <div className="border-4 border-black p-8 bg-white">
          <h2 className="text-2xl tracking-wide uppercase mb-4">All Signals</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Comprehensive view of all CMF signals in the system, sorted by observation date.
          </p>
        </div>

        <div className="space-y-4">
          {allSignals.length === 0 ? (
            <div className="border-4 border-black p-12 bg-white text-center">
              <p className="text-sm text-gray-600">No signals match current filters</p>
            </div>
          ) : (
            allSignals.map((signal) => (
              <div 
                key={signal.id} 
                className={`border-4 border-black p-6 ${getStatusColor(signal.status)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-3xl">{getTypeIcon(signal.signal_type)}</span>
                    <div className="flex-1">
                      <h3 className="text-xl uppercase tracking-wide mb-2">{signal.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs mb-3">
                        <span className="px-2 py-1 bg-white border-2 border-black">
                          {signal.signal_type}
                        </span>
                        <span className="px-2 py-1 bg-white border-2 border-black">
                          {signal.status}
                        </span>
                        <span className={`px-2 py-1 bg-white border-2 border-black ${getConfidenceColor(signal.confidence_assessment)}`}>
                          {signal.confidence_assessment} Confidence
                        </span>
                        {signal.industry && (
                          <span className="px-2 py-1 bg-white border-2 border-black">
                            {signal.industry}
                          </span>
                        )}
                        {signal.region && (
                          <span className="px-2 py-1 bg-white border-2 border-black">
                            {signal.region}
                          </span>
                        )}
                        <span className="px-2 py-1 bg-white border-2 border-black">
                          {new Date(signal.date_observed).toLocaleDateString()}
                        </span>
                      </div>
                      {signal.description && (
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">{signal.description}</p>
                      )}
                      {signal.analyst_interpretation && (
                        <p className="text-sm text-gray-600 leading-relaxed italic">{signal.analyst_interpretation}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedSignal(expandedSignal === signal.id ? null : signal.id)}
                    className="ml-4 p-2 hover:bg-white/50 rounded transition-colors"
                  >
                    <Eye size={20} />
                  </button>
                </div>

                {expandedSignal === signal.id && (
                  <div className="mt-4 pt-4 border-t-2 border-black/20 grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {signal.colours && signal.colours.length > 0 && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Colours</p>
                          <p className="text-sm">{signal.colours.join(', ')}</p>
                        </div>
                      )}
                      {signal.materials && signal.materials.length > 0 && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Materials</p>
                          <p className="text-sm">{signal.materials.join(', ')}</p>
                        </div>
                      )}
                      {signal.finishes && signal.finishes.length > 0 && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Finishes</p>
                          <p className="text-sm">{signal.finishes.join(', ')}</p>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      {signal.source_type && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Source Type</p>
                          <p className="text-sm">{signal.source_type}</p>
                        </div>
                      )}
                      {signal.source_reference && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Source</p>
                          <p className="text-sm break-words">{signal.source_reference}</p>
                        </div>
                      )}
                      {signal.analyst_name && (
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Analyst</p>
                          <p className="text-sm">{signal.analyst_name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  const renderAnalytics = () => {
    const typeDistribution = signals.reduce((acc, signal) => {
      acc[signal.signal_type] = (acc[signal.signal_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const statusDistribution = signals.reduce((acc, signal) => {
      acc[signal.status] = (acc[signal.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const industryDistribution = signals.reduce((acc, signal) => {
      if (signal.industry) {
        acc[signal.industry] = (acc[signal.industry] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const confidenceDistribution = signals.reduce((acc, signal) => {
      acc[signal.confidence_assessment] = (acc[signal.confidence_assessment] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return (
      <div className="space-y-8">
        <div className="border-4 border-black p-8 bg-white">
          <h2 className="text-2xl tracking-wide uppercase mb-4">Signal Analytics</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Aggregate patterns across all observation cycles showing signal distribution, maturity progression, 
            and cross-industry patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Total Signals */}
          <div className="border-4 border-black p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-6 h-6" />
              <h3 className="text-xl tracking-wide uppercase">Total Signals</h3>
            </div>
            <div className="text-5xl font-light mb-2">{signals.length}</div>
            <p className="text-sm text-gray-600">Across {cycles.length} observation cycles</p>
          </div>

          {/* Observation Cycles */}
          <div className="border-4 border-black p-6 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6" />
              <h3 className="text-xl tracking-wide uppercase">Observation Cycles</h3>
            </div>
            <div className="text-5xl font-light mb-2">{cycles.length}</div>
            <p className="text-sm text-gray-600">
              {cycles.length > 0 
                ? `Latest: ${cycles[0].month} ${cycles[0].year}` 
                : 'No cycles yet'}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* CMF Type Distribution */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg tracking-wide uppercase mb-6">CMF Type Distribution</h3>
            <div className="space-y-3">
              {Object.entries(typeDistribution).map(([type, count]) => {
                const percentage = ((count / signals.length) * 100).toFixed(1);
                return (
                  <div key={type}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm flex items-center gap-2">
                        <span>{getTypeIcon(type)}</span>
                        <span>{type}</span>
                      </span>
                      <span className="text-sm font-medium">{count} ({percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 border border-black">
                      <div 
                        className="h-full bg-black" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Signal Status Distribution */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg tracking-wide uppercase mb-6">Signal Maturity</h3>
            <div className="space-y-3">
              {Object.entries(statusDistribution).map(([status, count]) => {
                const percentage = ((count / signals.length) * 100).toFixed(1);
                return (
                  <div key={status}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{status}</span>
                      <span className="text-sm font-medium">{count} ({percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 border border-black">
                      <div 
                        className={`h-full ${
                          status === 'Emerging' ? 'bg-yellow-500' :
                          status === 'Strong' ? 'bg-green-600' :
                          status === 'Established' ? 'bg-blue-600' :
                          'bg-gray-400'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Confidence Distribution */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg tracking-wide uppercase mb-6">Confidence Assessment</h3>
            <div className="space-y-3">
              {Object.entries(confidenceDistribution).map(([confidence, count]) => {
                const percentage = ((count / signals.length) * 100).toFixed(1);
                return (
                  <div key={confidence}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm ${getConfidenceColor(confidence)}`}>{confidence}</span>
                      <span className="text-sm font-medium">{count} ({percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 border border-black">
                      <div 
                        className={`h-full ${
                          confidence === 'High' ? 'bg-green-600' :
                          confidence === 'Medium' ? 'bg-yellow-500' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industry Distribution */}
          <div className="border-4 border-black p-6 bg-white">
            <h3 className="text-lg tracking-wide uppercase mb-6">Industry Coverage</h3>
            <div className="space-y-3">
              {Object.entries(industryDistribution)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([industry, count]) => {
                  const percentage = ((count / signals.length) * 100).toFixed(1);
                  return (
                    <div key={industry}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{industry}</span>
                        <span className="text-sm font-medium">{count} ({percentage}%)</span>
                      </div>
                      <div className="h-2 bg-gray-200 border border-black">
                        <div 
                          className="h-full bg-black" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const industries = Array.from(new Set(signals.map(s => s.industry).filter(Boolean)));
  const signalTypes = ['Colour', 'Material', 'Finish', 'Cross-CMF'];
  const statuses = ['Emerging', 'Strong', 'Established', 'Archived'];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="border-4 border-black p-12 bg-white text-center">
            <p className="text-sm text-gray-600">Loading observation cycles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl tracking-wide uppercase mb-6">Longitudinal Tracker</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Event-anchored CMF intelligence system tracking accumulated signals through human-interpreted 
            observation cycles. Each entry represents curated trend data with confidence scoring based on 
            source diversity, temporal consistency, cross-industry presence, and analyst validation.
          </p>
          
          {/* Data Initialization Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={loadJanuaryData}
              disabled={initializing}
              className="px-6 py-3 bg-black text-white text-sm tracking-wide uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400 border-4 border-black"
            >
              {initializing ? 'Loading...' : 'Load January 2026 Data'}
            </button>
            <button
              onClick={loadFebruaryData}
              disabled={initializing}
              className="px-6 py-3 bg-black text-white text-sm tracking-wide uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400 border-4 border-black"
            >
              {initializing ? 'Loading...' : 'Load February 2026 Data'}
            </button>
            <button
              onClick={loadMarchData}
              disabled={initializing}
              className="px-6 py-3 bg-black text-white text-sm tracking-wide uppercase hover:bg-gray-800 transition-colors disabled:bg-gray-400 border-4 border-black"
            >
              {initializing ? 'Loading...' : 'Load March 2026 Data'}
            </button>
          </div>
          
          {initError && (
            <div className="mt-4 p-4 bg-red-50 border-2 border-red-600 text-red-800 text-sm">
              Error: {initError}
            </div>
          )}
        </div>

        {/* View Mode Tabs */}
        <div className="mb-8 border-4 border-black bg-white">
          <div className="flex border-b-4 border-black">
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex-1 px-6 py-4 text-sm tracking-wide uppercase transition-colors ${
                viewMode === 'timeline' 
                  ? 'bg-black text-white' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-4 h-4 inline-block mr-2" />
              Timeline View
            </button>
            <button
              onClick={() => setViewMode('signals')}
              className={`flex-1 px-6 py-4 text-sm tracking-wide uppercase border-l-4 border-black transition-colors ${
                viewMode === 'signals' 
                  ? 'bg-black text-white' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline-block mr-2" />
              All Signals
            </button>
            <button
              onClick={() => setViewMode('analytics')}
              className={`flex-1 px-6 py-4 text-sm tracking-wide uppercase border-l-4 border-black transition-colors ${
                viewMode === 'analytics' 
                  ? 'bg-black text-white' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-4 h-4 inline-block mr-2" />
              Analytics
            </button>
          </div>

          {/* Filters */}
          <div className="p-6 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-4 h-4" />
              <h3 className="text-sm tracking-wide uppercase text-gray-700">Filters</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Signal Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-black text-sm"
                >
                  <option value="all">All Types</option>
                  {signalTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Industry
                </label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-black text-sm"
                >
                  <option value="all">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-black text-sm"
                >
                  <option value="all">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'timeline' && renderTimeline()}
        {viewMode === 'signals' && renderSignalsList()}
        {viewMode === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}