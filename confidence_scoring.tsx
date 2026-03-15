// Source Credibility Index (SCI) System
// Confidence scoring based on 4 pillars: Source, Repetition, Breadth, Stability

export interface SourceCredibilityWeights {
  'Global Design Fairs': 1.0;
  'Fashion Weeks': 0.9;
  'Automotive Expos': 0.9;
  'Brand Launches': 0.8;
  'Trade Publications': 0.7;
  'Social/Cultural Signals': 0.4;
}

export const SOURCE_WEIGHTS: Record<string, number> = {
  'Global Design Fairs': 1.0,
  'Fashion Weeks': 0.9,
  'Automotive Expos': 0.9,
  'Brand Launches': 0.8,
  'Trade Publications': 0.7,
  'Social/Cultural Signals': 0.4,
  
  // Aliases for common event types
  'Trade Show': 0.9,
  'Fashion Event': 0.9,
  'Design Fair': 1.0,
  'Product Launch': 0.8,
  'Cultural Event': 0.4,
  'Geopolitical Event': 0.7,
  'Exhibition': 0.7,
  'Architectural': 0.8,
  'Celebrity Style': 0.6,
  'Product': 0.8,
  'Tech Report': 0.7,
  'CES Exhibition': 0.9
};

// Get source weight for an event type
export function getSourceWeight(eventType: string): number {
  // Check exact match first
  if (SOURCE_WEIGHTS[eventType]) {
    return SOURCE_WEIGHTS[eventType];
  }
  
  // Check partial matches
  const lowerType = eventType.toLowerCase();
  if (lowerType.includes('fashion')) return 0.9;
  if (lowerType.includes('design fair') || lowerType.includes('design week')) return 1.0;
  if (lowerType.includes('automotive') || lowerType.includes('auto')) return 0.9;
  if (lowerType.includes('launch')) return 0.8;
  if (lowerType.includes('exhibition') || lowerType.includes('expo')) return 0.9;
  if (lowerType.includes('trade')) return 0.7;
  if (lowerType.includes('social') || lowerType.includes('cultural')) return 0.4;
  
  // Default for unknown types
  return 0.5;
}

// Signal Repetition Score
export function getRepetitionScore(appearances: number): { score: number; interpretation: string } {
  if (appearances === 1) {
    return { score: 0.25, interpretation: 'Weak signal' };
  } else if (appearances >= 2 && appearances <= 3) {
    return { score: 0.5, interpretation: 'Emerging' };
  } else if (appearances >= 4 && appearances <= 6) {
    return { score: 0.75, interpretation: 'Confirming' };
  } else {
    return { score: 1.0, interpretation: 'Established' };
  }
}

// Cross-Industry Spread (Breadth Score)
export function getBreadthScore(industriesCount: number): number {
  if (industriesCount === 1) return 0.3;
  if (industriesCount >= 2 && industriesCount <= 3) return 0.6;
  return 1.0; // 4+ industries
}

// Material-Finish Consistency (Stability Score)
export function getStabilityScore(materialsCount: number, finishesCount: number): number {
  const totalVariety = materialsCount + finishesCount;
  
  if (totalVariety <= 1) return 0.3;
  if (totalVariety >= 2 && totalVariety <= 3) return 0.6;
  return 1.0; // 4+ materials & finishes
}

// Master Confidence Calculation
export interface ConfidenceInputs {
  sourceType: string;
  appearances: number;
  industriesCount: number;
  materialsCount: number;
  finishesCount: number;
}

export interface ConfidenceResult {
  score: number; // 0-100
  breakdown: {
    source: { weight: number; score: number };
    repetition: { appearances: number; score: number; interpretation: string };
    breadth: { industries: number; score: number };
    stability: { materials: number; finishes: number; score: number };
  };
  band: 'Low' | 'Low-Med' | 'Medium' | 'Medium-High' | 'High';
}

export function calculateConfidence(inputs: ConfidenceInputs): ConfidenceResult {
  const sourceWeight = getSourceWeight(inputs.sourceType);
  const repetition = getRepetitionScore(inputs.appearances);
  const breadthScore = getBreadthScore(inputs.industriesCount);
  const stabilityScore = getStabilityScore(inputs.materialsCount, inputs.finishesCount);
  
  // Weighted formula
  const confidence = (
    sourceWeight * 0.30 +
    repetition.score * 0.30 +
    breadthScore * 0.20 +
    stabilityScore * 0.20
  ) * 100;
  
  // Determine confidence band
  let band: 'Low' | 'Low-Med' | 'Medium' | 'Medium-High' | 'High';
  if (confidence >= 80) band = 'High';
  else if (confidence >= 65) band = 'Medium-High';
  else if (confidence >= 50) band = 'Medium';
  else if (confidence >= 35) band = 'Low-Med';
  else band = 'Low';
  
  return {
    score: Math.round(confidence),
    breakdown: {
      source: { weight: sourceWeight, score: sourceWeight * 30 },
      repetition: { 
        appearances: inputs.appearances, 
        score: repetition.score * 30,
        interpretation: repetition.interpretation
      },
      breadth: { industries: inputs.industriesCount, score: breadthScore * 20 },
      stability: { 
        materials: inputs.materialsCount, 
        finishes: inputs.finishesCount, 
        score: stabilityScore * 20 
      }
    },
    band
  };
}

// Analyze a signal and calculate its confidence
export function analyzeSignalConfidence(signal: any, allSignals: any[]): ConfidenceResult {
  // Count appearances of this signal's key elements across all signals
  const signalTitle = signal.title.toLowerCase();
  const appearances = allSignals.filter((s: any) => {
    return s.title.toLowerCase().includes(signalTitle.split(' ')[0]) || 
           signalTitle.includes(s.title.toLowerCase().split(' ')[0]);
  }).length;
  
  const industriesCount = signal.industries?.length || 1;
  const materialsCount = signal.materials?.length || 0;
  const finishesCount = signal.finishes?.length || 0;
  
  return calculateConfidence({
    sourceType: signal.source_type || 'Unknown',
    appearances,
    industriesCount,
    materialsCount,
    finishesCount
  });
}

// Get explanatory text for confidence score
export function getConfidenceExplanation(result: ConfidenceResult): string {
  const parts: string[] = [];
  
  parts.push(`Source credibility: ${(result.breakdown.source.weight * 100).toFixed(0)}%`);
  parts.push(`Signal repetition: ${result.breakdown.repetition.interpretation}`);
  parts.push(`Cross-industry presence: ${result.breakdown.breadth.industries} industries`);
  parts.push(`Material-finish stability: ${result.breakdown.stability.materials + result.breakdown.stability.finishes} varieties`);
  
  return parts.join(' • ');
}
