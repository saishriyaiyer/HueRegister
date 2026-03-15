import React, { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { Plus, Save, Eye, Trash2, TrendingUp, Calendar, Building2, Palette, Info } from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface SignalFormData {
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
}

interface ConfidenceBreakdown {
  source_diversity_score: number;
  temporal_consistency_score: number;
  cross_industry_score: number;
  geographic_spread_score: number;
  human_validation_score: number;
}

const INDUSTRIES = [
  'Fashion',
  'Interior Design',
  'Automotive',
  'Product Design',
  'Digital/Tech',
  'Architecture',
  'Packaging'
];

const REGIONS = [
  'Europe',
  'North America',
  'APAC',
  'Middle East',
  'Latin America',
  'Africa'
];

const SOURCE_TYPES = [
  'Runway / Fashion Week',
  'Retail Observation',
  'Brand Launch',
  'Architecture / Interiors',
  'Digital Platforms',
  'Cultural Event',
  'Media / Editorial',
  'Trade Fair / Expo'
];

const SIGNAL_TYPES = [
  'Colour',
  'Material',
  'Finish',
  'Cross-CMF'
];

const STATUS_OPTIONS = [
  'Emerging',
  'Strong',
  'Archived'
];

const CONFIDENCE_LEVELS = [
  'Low',
  'Medium',
  'High'
];

export function AdminDashboardPage() {
  const [signals, setSignals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('add-signal');
  const [formData, setFormData] = useState<SignalFormData>({
    title: '',
    signal_type: 'Colour',
    status: 'Emerging',
    description: '',
    source_type: '',
    source_reference: '',
    industry: '',
    region: '',
    date_observed: new Date().toISOString().split('T')[0],
    colours: [],
    materials: [],
    finishes: [],
    analyst_interpretation: '',
    confidence_assessment: 'Medium',
    notes: '',
    analyst_name: ''
  });

  const [colourInput, setColourInput] = useState('');
  const [materialInput, setMaterialInput] = useState('');
  const [finishInput, setFinishInput] = useState('');

  useEffect(() => {
    loadSignals();
  }, []);

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
      setError('Failed to load signals');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/admin/signals`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccess(`Signal "${formData.title}" added successfully!`);
        
        // Reset form
        setFormData({
          title: '',
          signal_type: 'Colour',
          status: 'Emerging',
          description: '',
          source_type: '',
          source_reference: '',
          industry: '',
          region: '',
          date_observed: new Date().toISOString().split('T')[0],
          colours: [],
          materials: [],
          finishes: [],
          analyst_interpretation: '',
          confidence_assessment: 'Medium',
          notes: '',
          analyst_name: ''
        });
        setColourInput('');
        setMaterialInput('');
        setFinishInput('');
        
        // Reload signals
        await loadSignals();
        
        // Switch to view tab
        setTimeout(() => setActiveTab('view-signals'), 1000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add signal');
      }
    } catch (err) {
      console.error('Error submitting signal:', err);
      setError('Network error. Please try again.');
    }
  };

  const addColour = () => {
    if (colourInput.trim() && !formData.colours.includes(colourInput.trim())) {
      setFormData({
        ...formData,
        colours: [...formData.colours, colourInput.trim()]
      });
      setColourInput('');
    }
  };

  const addMaterial = () => {
    if (materialInput.trim() && !formData.materials.includes(materialInput.trim())) {
      setFormData({
        ...formData,
        materials: [...formData.materials, materialInput.trim()]
      });
      setMaterialInput('');
    }
  };

  const addFinish = () => {
    if (finishInput.trim() && !formData.finishes.includes(finishInput.trim())) {
      setFormData({
        ...formData,
        finishes: [...formData.finishes, finishInput.trim()]
      });
      setFinishInput('');
    }
  };

  const removeColour = (colour: string) => {
    setFormData({
      ...formData,
      colours: formData.colours.filter(c => c !== colour)
    });
  };

  const removeMaterial = (material: string) => {
    setFormData({
      ...formData,
      materials: formData.materials.filter(m => m !== material)
    });
  };

  const removeFinish = (finish: string) => {
    setFormData({
      ...formData,
      finishes: formData.finishes.filter(f => f !== finish)
    });
  };

  const deleteSignal = async (signalId: string) => {
    if (!confirm('Are you sure you want to delete this signal?')) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4bc8a91d/admin/signals/${signalId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );

      if (response.ok) {
        setSuccess('Signal deleted successfully');
        await loadSignals();
      } else {
        setError('Failed to delete signal');
      }
    } catch (err) {
      console.error('Error deleting signal:', err);
      setError('Network error');
    }
  };

  const getConfidenceColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Strong': return 'bg-blue-100 text-blue-800';
      case 'Emerging': return 'bg-purple-100 text-purple-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-wider uppercase mb-2">
            CMF INTELLIGENCE ADMIN
          </h1>
          <p className="text-sm text-gray-600 tracking-wide">
            Event-Anchored Longitudinal Observation System
          </p>
        </div>

        {error && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="add-signal" className="uppercase tracking-wider text-xs">
              Add Observation Cycle
            </TabsTrigger>
            <TabsTrigger value="view-signals" className="uppercase tracking-wider text-xs">
              View Signals
            </TabsTrigger>
            <TabsTrigger value="reports" className="uppercase tracking-wider text-xs">
              Generate Report
            </TabsTrigger>
          </TabsList>

          {/* ADD SIGNAL TAB */}
          <TabsContent value="add-signal">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Core Metadata */}
              <Card className="p-6 border-black">
                <h2 className="text-lg font-light tracking-wider uppercase mb-6 border-b border-black pb-2">
                  Core Metadata
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-xs tracking-wider uppercase">
                      Signal Title *
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Industrial Renaissance in Milan Design Week"
                      required
                      className="border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signal_type" className="text-xs tracking-wider uppercase">
                      Signal Type *
                    </Label>
                    <Select
                      value={formData.signal_type}
                      onValueChange={(value) => setFormData({ ...formData, signal_type: value })}
                    >
                      <SelectTrigger className="border-black">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {SIGNAL_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date_observed" className="text-xs tracking-wider uppercase">
                      Date Observed *
                    </Label>
                    <Input
                      id="date_observed"
                      type="date"
                      value={formData.date_observed}
                      onChange={(e) => setFormData({ ...formData, date_observed: e.target.value })}
                      required
                      className="border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="analyst_name" className="text-xs tracking-wider uppercase">
                      Analyst Name *
                    </Label>
                    <Input
                      id="analyst_name"
                      value={formData.analyst_name}
                      onChange={(e) => setFormData({ ...formData, analyst_name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="border-black"
                    />
                  </div>
                </div>
              </Card>

              {/* Source Logging */}
              <Card className="p-6 border-black">
                <h2 className="text-lg font-light tracking-wider uppercase mb-6 border-b border-black pb-2">
                  Source Logging
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="source_type" className="text-xs tracking-wider uppercase">
                      Source Type *
                    </Label>
                    <Select
                      value={formData.source_type}
                      onValueChange={(value) => setFormData({ ...formData, source_type: value })}
                    >
                      <SelectTrigger className="border-black">
                        <SelectValue placeholder="Select source type" />
                      </SelectTrigger>
                      <SelectContent>
                        {SOURCE_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="source_reference" className="text-xs tracking-wider uppercase">
                      Source Reference
                    </Label>
                    <Input
                      id="source_reference"
                      value={formData.source_reference}
                      onChange={(e) => setFormData({ ...formData, source_reference: e.target.value })}
                      placeholder="URL, event name, or image reference"
                      className="border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region" className="text-xs tracking-wider uppercase">
                      Region *
                    </Label>
                    <Select
                      value={formData.region}
                      onValueChange={(value) => setFormData({ ...formData, region: value })}
                    >
                      <SelectTrigger className="border-black">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {REGIONS.map((region) => (
                          <SelectItem key={region} value={region}>{region}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-xs tracking-wider uppercase">
                      Industry *
                    </Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData({ ...formData, industry: value })}
                    >
                      <SelectTrigger className="border-black">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDUSTRIES.map((industry) => (
                          <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* CMF Attribution */}
              <Card className="p-6 border-black">
                <h2 className="text-lg font-light tracking-wider uppercase mb-6 border-b border-black pb-2">
                  CMF Attribution
                </h2>
                <div className="space-y-6">
                  {/* Colours */}
                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase">Primary Colours</Label>
                    <div className="flex gap-2">
                      <Input
                        value={colourInput}
                        onChange={(e) => setColourInput(e.target.value)}
                        placeholder="e.g., Ashen Iron, Slate Grey"
                        className="border-black"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addColour())}
                      />
                      <Button type="button" onClick={addColour} className="bg-black text-white">
                        <Plus size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.colours.map((colour, idx) => (
                        <Badge key={idx} variant="outline" className="border-black">
                          {colour}
                          <button
                            type="button"
                            onClick={() => removeColour(colour)}
                            className="ml-2 hover:text-red-600"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase">Associated Materials</Label>
                    <div className="flex gap-2">
                      <Input
                        value={materialInput}
                        onChange={(e) => setMaterialInput(e.target.value)}
                        placeholder="e.g., Brushed Aluminum, Merino Wool"
                        className="border-black"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addMaterial())}
                      />
                      <Button type="button" onClick={addMaterial} className="bg-black text-white">
                        <Plus size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="border-black">
                          {material}
                          <button
                            type="button"
                            onClick={() => removeMaterial(material)}
                            className="ml-2 hover:text-red-600"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Finishes */}
                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase">Associated Finishes</Label>
                    <div className="flex gap-2">
                      <Input
                        value={finishInput}
                        onChange={(e) => setFinishInput(e.target.value)}
                        placeholder="e.g., Matte, Satin, Anodized"
                        className="border-black"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFinish())}
                      />
                      <Button type="button" onClick={addFinish} className="bg-black text-white">
                        <Plus size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.finishes.map((finish, idx) => (
                        <Badge key={idx} variant="outline" className="border-black">
                          {finish}
                          <button
                            type="button"
                            onClick={() => removeFinish(finish)}
                            className="ml-2 hover:text-red-600"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Human Interpretation */}
              <Card className="p-6 border-black">
                <h2 className="text-lg font-light tracking-wider uppercase mb-6 border-b border-black pb-2">
                  Human Interpretation
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-xs tracking-wider uppercase">
                      Signal Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief description of the observed signal"
                      required
                      rows={3}
                      className="border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="analyst_interpretation" className="text-xs tracking-wider uppercase">
                      Analyst Interpretation *
                    </Label>
                    <Textarea
                      id="analyst_interpretation"
                      value={formData.analyst_interpretation}
                      onChange={(e) => setFormData({ ...formData, analyst_interpretation: e.target.value })}
                      placeholder="What does this signal represent culturally, technologically, or economically?"
                      required
                      rows={4}
                      className="border-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="confidence_assessment" className="text-xs tracking-wider uppercase">
                        Confidence Assessment *
                      </Label>
                      <Select
                        value={formData.confidence_assessment}
                        onValueChange={(value) => setFormData({ ...formData, confidence_assessment: value })}
                      >
                        <SelectTrigger className="border-black">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CONFIDENCE_LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>{level}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status" className="text-xs tracking-wider uppercase">
                        Status *
                      </Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger className="border-black">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUS_OPTIONS.map((status) => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-xs tracking-wider uppercase">
                      Notes / Caveats
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., trend may be sector-specific, regionally limited, or experimental"
                      rows={3}
                      className="border-black"
                    />
                  </div>
                </div>
              </Card>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="bg-black text-white uppercase tracking-wider">
                  <Save size={16} className="mr-2" />
                  Log Observation Cycle
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* VIEW SIGNALS TAB */}
          <TabsContent value="view-signals">
            <Card className="border-black">
              <div className="p-6 border-b border-black">
                <h2 className="text-lg font-light tracking-wider uppercase">
                  Observation Cycles
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  {signals.length} CMF markers reviewed
                </p>
              </div>

              {loading ? (
                <div className="p-12 text-center text-gray-400">Loading signals...</div>
              ) : signals.length === 0 ? (
                <div className="p-12 text-center text-gray-400">
                  No signals recorded yet. Add your first observation cycle.
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {signals.map((signal: any) => (
                    <div key={signal.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-base font-medium">{signal.title}</h3>
                            <Badge className={getStatusColor(signal.status)}>
                              {signal.status}
                            </Badge>
                            <Badge className={getConfidenceColor(signal.confidence_assessment)}>
                              {signal.confidence_assessment} Confidence
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(signal.date_observed).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Building2 size={12} />
                              {signal.industry} · {signal.region}
                            </span>
                            <span className="flex items-center gap-1">
                              <Palette size={12} />
                              {signal.signal_type}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSignal(signal.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>

                      <p className="text-sm text-gray-700 mb-3">{signal.description}</p>

                      {signal.analyst_interpretation && (
                        <div className="bg-gray-50 p-3 mb-3 border-l-2 border-black">
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                            Analyst Interpretation
                          </p>
                          <p className="text-sm text-gray-700">{signal.analyst_interpretation}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-4 text-xs">
                        {signal.colours && signal.colours.length > 0 && (
                          <div>
                            <p className="uppercase tracking-wider text-gray-500 mb-1">Colours</p>
                            <div className="flex flex-wrap gap-1">
                              {signal.colours.map((c: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {c}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {signal.materials && signal.materials.length > 0 && (
                          <div>
                            <p className="uppercase tracking-wider text-gray-500 mb-1">Materials</p>
                            <div className="flex flex-wrap gap-1">
                              {signal.materials.map((m: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {m}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {signal.finishes && signal.finishes.length > 0 && (
                          <div>
                            <p className="uppercase tracking-wider text-gray-500 mb-1">Finishes</p>
                            <div className="flex flex-wrap gap-1">
                              {signal.finishes.map((f: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {f}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {signal.source_type && (
                        <p className="text-xs text-gray-500 mt-3">
                          Source: {signal.source_type}
                          {signal.source_reference && ` · ${signal.source_reference}`}
                        </p>
                      )}

                      {signal.analyst_name && (
                        <p className="text-xs text-gray-500 mt-1">
                          Reviewed by: {signal.analyst_name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>

          {/* REPORTS TAB */}
          <TabsContent value="reports">
            <Card className="p-8 border-black text-center">
              <TrendingUp size={48} className="mx-auto mb-4 text-gray-400" />
              <h2 className="text-lg font-light tracking-wider uppercase mb-2">
                Trend Report Generation
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Automatic report generation based on signals accumulated over the last 365 days
              </p>
              <Alert className="mb-6 text-left bg-blue-50 border-blue-200">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm text-blue-900">
                  Reports analyze signal strength, temporal consistency, cross-industry presence, 
                  and geographic spread to provide confidence-scored trend intelligence.
                </AlertDescription>
              </Alert>
              <Button className="bg-black text-white uppercase tracking-wider">
                Generate Annual Report
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Coming soon: Quarterly reports, industry-specific analysis, and export functionality
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
