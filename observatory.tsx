/**
 * Color Observatory Backend Engine
 * 
 * This module implements the observation infrastructure for the Color Observatory system.
 * It uses the KV store to manage all observation data without requiring custom database tables.
 * 
 * Key Concepts:
 * - Weekly crawl cycle for stability and respect
 * - LAB color space for perceptual accuracy
 * - Cross-industry validation before publication
 * - No image retention, only color data
 * - Human synthesis required for final output
 */

import * as kv from './kv_store.tsx';

// ============================================================================
// INDUSTRY DEFINITIONS
// ============================================================================

export const INDUSTRIES = {
  fashion: {
    id: 'fashion',
    name: 'Fashion & Apparel',
    description: 'Fashion responds quickly to cultural mood and often introduces new color directions before they stabilize elsewhere.',
  },
  interiors: {
    id: 'interiors',
    name: 'Interiors & Furniture',
    description: 'Interior design reflects longer-term cultural values and lifestyle aspirations.',
  },
  tech: {
    id: 'tech',
    name: 'Consumer Tech & UI',
    description: 'Technology products and digital interfaces reveal color preferences at mass scale.',
  },
  beauty: {
    id: 'beauty',
    name: 'Beauty & Wellness',
    description: 'Beauty industries move color from abstract concept to intimate, personal application.',
  },
  mobility: {
    id: 'mobility',
    name: 'Automotive & Mobility',
    description: 'Automotive color choices represent significant consumer commitment and reveal aspirational identity.',
  },
  branding: {
    id: 'branding',
    name: 'Packaging & Branding',
    description: 'Brand identity operates at the intersection of commerce and culture.',
  },
};

// ============================================================================
// CRAWL TARGET DEFINITIONS
// ============================================================================

export const CRAWL_TARGETS = [
  // Fashion & Apparel (8 sources)
  { base_url: 'https://www.vogue.com/fashion-shows', industry_id: 'fashion', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.ssense.com/en-us/editorial', industry_id: 'fashion', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.anothermag.com/fashion-beauty', industry_id: 'fashion', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.dazeddigital.com/fashion', industry_id: 'fashion', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.businessoffashion.com', industry_id: 'fashion', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 8, active: true },
  { base_url: 'https://www.highsnobiety.com/fashion', industry_id: 'fashion', region: 'global', trust_score: 0.75, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://hypebae.com/fashion', industry_id: 'fashion', region: 'global', trust_score: 0.75, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.wgsn.com', industry_id: 'fashion', region: 'global', trust_score: 0.95, crawl_frequency: 'weekly', max_pages: 5, active: true },

  // Interiors & Furniture (8 sources)
  { base_url: 'https://www.dezeen.com/interiors', industry_id: 'interiors', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.designmilk.com', industry_id: 'interiors', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.wallpaper.com/design', industry_id: 'interiors', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.archiproducts.com', industry_id: 'interiors', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.architonic.com', industry_id: 'interiors', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.dwell.com', industry_id: 'interiors', region: 'us', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.elledecor.com', industry_id: 'interiors', region: 'us', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.frameweb.com', industry_id: 'interiors', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 8, active: true },

  // Consumer Tech & UI (7 sources)
  { base_url: 'https://www.theverge.com', industry_id: 'tech', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.wired.com', industry_id: 'tech', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.designboom.com/technology', industry_id: 'tech', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.yankodesign.com', industry_id: 'tech', region: 'global', trust_score: 0.75, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://dribbble.com/shots/popular', industry_id: 'tech', region: 'global', trust_score: 0.7, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.behance.net/galleries/ui-ux', industry_id: 'tech', region: 'global', trust_score: 0.75, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.itsnicethat.com/creative-disciplines/digital', industry_id: 'tech', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 8, active: true },

  // Beauty & Wellness (7 sources)
  { base_url: 'https://www.allure.com', industry_id: 'beauty', region: 'us', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.byrdie.com', industry_id: 'beauty', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.vogue.com/beauty', industry_id: 'beauty', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.thezoereport.com/beauty', industry_id: 'beauty', region: 'us', trust_score: 0.75, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.glossier.com/blog', industry_id: 'beauty', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 5, active: true },
  { base_url: 'https://www.refinery29.com/en-us/beauty', industry_id: 'beauty', region: 'us', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.beautypackaging.com', industry_id: 'beauty', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 8, active: true },

  // Automotive & Mobility (6 sources)
  { base_url: 'https://www.autoblog.com/photos', industry_id: 'mobility', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.motortrend.com', industry_id: 'mobility', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.caranddriver.com', industry_id: 'mobility', region: 'us', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.topgear.com', industry_id: 'mobility', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.dezeen.com/transport', industry_id: 'mobility', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.carbodydesign.com', industry_id: 'mobility', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 8, active: true },

  // Packaging & Branding (8 sources)
  { base_url: 'https://www.thedieline.com', industry_id: 'branding', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.underconsideration.com/brandnew', industry_id: 'branding', region: 'global', trust_score: 0.95, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.packagingoftheworld.com', industry_id: 'branding', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.lovelypackage.com', industry_id: 'branding', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.bp-o.com', industry_id: 'branding', region: 'global', trust_score: 0.9, crawl_frequency: 'weekly', max_pages: 8, active: true },
  { base_url: 'https://www.itsnicethat.com/creative-disciplines/graphic-design', industry_id: 'branding', region: 'global', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://mindsparklemag.com/design/branding', industry_id: 'branding', region: 'global', trust_score: 0.8, crawl_frequency: 'weekly', max_pages: 10, active: true },
  { base_url: 'https://www.designweek.co.uk/branding', industry_id: 'branding', region: 'uk', trust_score: 0.85, crawl_frequency: 'weekly', max_pages: 8, active: true },
];

// ============================================================================
// COLOR EXTRACTION & MEASUREMENT
// ============================================================================

/**
 * Simplified LAB color space conversion
 * In production, use proper color science library
 */
export function rgbToLab(r: number, g: number, b: number): { l: number; a: number; b: number } {
  // Normalize RGB to 0-1
  let rNorm = r / 255;
  let gNorm = g / 255;
  let bNorm = b / 255;

  // Apply sRGB gamma correction
  rNorm = rNorm > 0.04045 ? Math.pow((rNorm + 0.055) / 1.055, 2.4) : rNorm / 12.92;
  gNorm = gNorm > 0.04045 ? Math.pow((gNorm + 0.055) / 1.055, 2.4) : gNorm / 12.92;
  bNorm = bNorm > 0.04045 ? Math.pow((bNorm + 0.055) / 1.055, 2.4) : bNorm / 12.92;

  // Convert to XYZ (D65 illuminant)
  const x = (rNorm * 0.4124 + gNorm * 0.3576 + bNorm * 0.1805) / 0.95047;
  const y = (rNorm * 0.2126 + gNorm * 0.7152 + bNorm * 0.0722) / 1.00000;
  const z = (rNorm * 0.0193 + gNorm * 0.1192 + bNorm * 0.9505) / 1.08883;

  // XYZ to LAB
  const fx = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x + 16 / 116);
  const fy = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y + 16 / 116);
  const fz = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z + 16 / 116);

  const l = Math.max(0, 116 * fy - 16);
  const a = 500 * (fx - fy);
  const bValue = 200 * (fy - fz);

  return { l, a, b: bValue };
}

/**
 * Calculate perceptual color distance using CIEDE2000
 * Simplified implementation
 */
export function colorDistance(
  lab1: { l: number; a: number; b: number },
  lab2: { l: number; a: number; b: number }
): number {
  // Simplified Euclidean distance in LAB space
  // Full CIEDE2000 would be more accurate but more complex
  const dl = lab1.l - lab2.l;
  const da = lab1.a - lab2.a;
  const db = lab1.b - lab2.b;
  return Math.sqrt(dl * dl + da * da + db * db);
}

// ============================================================================
// KV STORE DATA MANAGEMENT
// ============================================================================

/**
 * Store a raw color observation
 * KV Key Pattern: color:raw:{timestamp}:{imageId}:{colorIndex}
 */
export async function storeRawColor(data: {
  page_url: string;
  image_url: string;
  domain: string;
  industry_id: string;
  lab_l: number;
  lab_a: number;
  lab_b: number;
  area_percentage: number;
  role: 'dominant' | 'accent' | 'background';
}) {
  const timestamp = Date.now();
  const imageId = hashString(data.image_url);
  const colorId = hashString(`${data.lab_l}:${data.lab_a}:${data.lab_b}`);
  const key = `color:raw:${timestamp}:${imageId}:${colorId}`;

  await kv.set(key, {
    ...data,
    observed_at: new Date().toISOString(),
  });

  return key;
}

/**
 * Aggregate color data across observations
 * KV Key Pattern: color:aggregate:{labHash}
 */
export async function aggregateColorSignals(weekOffset: number = 0): Promise<any[]> {
  // Get all raw color observations from the specified week
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - (7 * (weekOffset + 1)));
  const weekEnd = new Date();
  weekEnd.setDate(weekEnd.getDate() - (7 * weekOffset));

  const startTimestamp = weekStart.getTime();
  const endTimestamp = weekEnd.getTime();

  // Fetch raw observations for the week
  const rawKeys = await kv.getByPrefix(`color:raw:`);
  const weekObservations = rawKeys.filter((item: any) => {
    const keyParts = item.key.split(':');
    const timestamp = parseInt(keyParts[2]);
    return timestamp >= startTimestamp && timestamp < endTimestamp;
  });

  // Group similar colors (within perceptual threshold)
  const SIMILARITY_THRESHOLD = 10; // LAB distance threshold
  const colorGroups: Map<string, any[]> = new Map();

  for (const obs of weekObservations) {
    const obsData = obs.value;
    const obsLab = { l: obsData.lab_l, a: obsData.lab_a, b: obsData.lab_b };

    // Find existing group or create new one
    let foundGroup = false;
    for (const [groupKey, group] of colorGroups.entries()) {
      const groupLab = group[0];
      if (colorDistance(obsLab, groupLab) < SIMILARITY_THRESHOLD) {
        group.push(obsData);
        foundGroup = true;
        break;
      }
    }

    if (!foundGroup) {
      const groupKey = `${obsLab.l.toFixed(1)}:${obsLab.a.toFixed(1)}:${obsLab.b.toFixed(1)}`;
      colorGroups.set(groupKey, [obsData]);
    }
  }

  // Create aggregate signals
  const signals = [];
  for (const [groupKey, observations] of colorGroups.entries()) {
    // Calculate average LAB values
    const avgL = observations.reduce((sum, obs) => sum + obs.lab_l, 0) / observations.length;
    const avgA = observations.reduce((sum, obs) => sum + obs.lab_a, 0) / observations.length;
    const avgB = observations.reduce((sum, obs) => sum + obs.lab_b, 0) / observations.length;

    // Count unique industries and domains
    const industries = [...new Set(observations.map(obs => obs.industry_id))];
    const domains = [...new Set(observations.map(obs => obs.domain))];

    // Determine status
    let status = 'emerging';
    const aggregateKey = `color:aggregate:${groupKey}`;
    const existing = await kv.get(aggregateKey);
    
    if (existing) {
      const weeksSinceFirst = Math.floor(
        (Date.now() - new Date(existing.first_seen).getTime()) / (1000 * 60 * 60 * 24 * 7)
      );
      
      if (weeksSinceFirst >= 8) {
        status = 'stable';
      } else if (observations.length < existing.frequency * 0.7) {
        status = 'declining';
      }
    }

    const signal = {
      id: groupKey,
      lab_l: avgL,
      lab_a: avgA,
      lab_b: avgB,
      frequency: observations.length,
      industries,
      domain_count: domains.length,
      first_seen: existing?.first_seen || new Date().toISOString(),
      last_seen: new Date().toISOString(),
      status,
    };

    // Store aggregate
    await kv.set(aggregateKey, signal);
    signals.push(signal);
  }

  return signals;
}

/**
 * Get validated trend candidates (passed filtering rules)
 */
export async function getTrendCandidates(): Promise<any[]> {
  const aggregates = await kv.getByPrefix('color:aggregate:');
  
  const candidates = aggregates
    .map((item: any) => item.value)
    .filter((aggregate: any) => {
      // Apply filtering rules
      const weeksSinceFirst = Math.floor(
        (Date.now() - new Date(aggregate.first_seen).getTime()) / (1000 * 60 * 60 * 24 * 7)
      );

      // Minimum 4-week persistence
      if (weeksSinceFirst < 4) return false;

      // Minimum 3 industries
      if (aggregate.industries.length < 3) return false;

      // Minimum frequency
      if (aggregate.frequency < 5) return false;

      return true;
    })
    .sort((a: any, b: any) => {
      // Sort by trend score (frequency * industries * persistence)
      const scoreA = a.frequency * a.industries.length * 
        Math.floor((Date.now() - new Date(a.first_seen).getTime()) / (1000 * 60 * 60 * 24 * 7));
      const scoreB = b.frequency * b.industries.length * 
        Math.floor((Date.now() - new Date(b.first_seen).getTime()) / (1000 * 60 * 60 * 24 * 7));
      return scoreB - scoreA;
    });

  return candidates;
}

/**
 * Store a color family (human synthesis output)
 * KV Key Pattern: color:family:{familyId}
 */
export async function storeColorFamily(family: {
  working_name: string;
  hues: Array<{ l: number; a: number; b: number; hex: string }>;
  emotional_tone: string;
  cultural_drivers: string;
  typical_applications: string[];
  confidence: 'high' | 'medium' | 'experimental';
  status: 'draft' | 'review' | 'approved';
}) {
  const familyId = hashString(family.working_name + Date.now());
  const key = `color:family:${familyId}`;

  await kv.set(key, {
    id: familyId,
    ...family,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  return familyId;
}

/**
 * Get all color families
 */
export async function getColorFamilies(): Promise<any[]> {
  const families = await kv.getByPrefix('color:family:');
  return families.map((item: any) => item.value);
}

/**
 * Publish a color family
 * KV Key Pattern: color:published:{year}:{familyId}
 */
export async function publishColorFamily(familyId: string, data: {
  family_name: string;
  narrative: string;
  industries_to_watch: string[];
  observation_period: string;
}) {
  const family = await kv.get(`color:family:${familyId}`);
  if (!family) {
    throw new Error('Color family not found');
  }

  const year = new Date().getFullYear() + 1; // Next year
  const key = `color:published:${year}:${familyId}`;

  await kv.set(key, {
    id: familyId,
    ...data,
    hues: family.hues,
    confidence: family.confidence,
    published_date: new Date().toISOString(),
  });

  // Update family status
  await kv.set(`color:family:${familyId}`, {
    ...family,
    status: 'approved',
    published_at: new Date().toISOString(),
  });

  return key;
}

/**
 * Get published colors for a specific year
 */
export async function getPublishedColors(year: number): Promise<any[]> {
  const published = await kv.getByPrefix(`color:published:${year}:`);
  return published.map((item: any) => item.value);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

/**
 * Initialize observatory with demo data for 2027
 */
export async function initializeDemoData() {
  // Create demo color families based on the existing 2027 predictions
  const demoFamilies = [
    {
      working_name: 'Industrial Neutrals',
      hues: [
        { l: 29, a: 2, b: -3, hex: '#4a424d' },
        { l: 36, a: 0, b: -5, hex: '#5d6b7a' },
        { l: 38, a: 0, b: -2, hex: '#5c6366' },
      ],
      emotional_tone: 'Grounded, Resilient',
      cultural_drivers: 'Post-digital materiality, industrial craft revival, authentic substance over surface polish.',
      typical_applications: ['Interior architecture', 'Product design', 'Brand identity', 'Textile design'],
      confidence: 'high' as const,
      status: 'approved' as const,
    },
  ];

  for (const family of demoFamilies) {
    const familyId = await storeColorFamily(family);
    
    // Publish for 2027
    await publishColorFamily(familyId, {
      family_name: 'Industrial Resilience',
      narrative: 'A tonal family of mineral greys that emerged across fashion, interiors, and product design throughout 2026. These colors represent a cultural shift toward tangible materiality and industrial craft. As digital fatigue deepens, designers are reaching for colors that evoke weight, substance, and the honest beauty of forged materials.',
      industries_to_watch: ['fashion', 'interiors', 'tech', 'mobility'],
      observation_period: 'Observed January–December 2026',
    });
  }
}