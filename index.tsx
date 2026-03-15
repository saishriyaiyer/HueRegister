import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import * as observatory from "./observatory.tsx";
import { january2026Events } from "./init_jan2026_data.tsx";
import { february2026Events } from "./init_feb2026_data.tsx";
import { march2026Events } from "./init_mar2026_data.tsx";
import * as confidenceScoring from "./confidence_scoring.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-4bc8a91d/health", (c) => {
  return c.json({ status: "ok" });
});

// Color extraction from text using basic regex
function extractColors(text: string): string[] {
  const colorPatterns = [
    /\b(red|blue|green|yellow|orange|purple|pink|brown|black|white|grey|gray|beige|tan|navy|teal|cyan|magenta|violet|indigo|maroon|olive|lime|aqua|silver|gold|bronze|copper|rust|sage|mint|coral|peach|lavender|mauve|crimson|scarlet|emerald|sapphire|amber|ivory|pearl|charcoal|slate|steel|iron|ash|smoke|fog|mist|stone|clay|sand|earth|moss|forest|ocean|sky|dusk|dawn)\b/gi,
    /#[0-9A-Fa-f]{6}\b/g,
    /#[0-9A-Fa-f]{3}\b/g
  ];
  
  const colors = new Set<string>();
  colorPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      matches.forEach(color => colors.add(color.toLowerCase()));
    }
  });
  
  return Array.from(colors);
}

// Material/finish keywords
function extractMaterials(text: string): string[] {
  const materialPatterns = [
    /\b(metal|metallic|glass|wood|wooden|leather|fabric|textile|cotton|silk|wool|linen|velvet|suede|plastic|ceramic|porcelain|marble|granite|concrete|stone|brick|steel|iron|aluminum|brass|copper|bronze|chrome|gold|silver|matte|glossy|satin|polished|brushed|textured|smooth|rough|recycled|sustainable|organic|natural|synthetic)\b/gi
  ];
  
  const materials = new Set<string>();
  materialPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      matches.forEach(material => materials.add(material.toLowerCase()));
    }
  });
  
  return Array.from(materials);
}

// Fetch Twitter/X trends (requires API key)
app.get("/make-server-4bc8a91d/trends/twitter", async (c) => {
  try {
    const twitterBearerToken = Deno.env.get('TWITTER_BEARER_TOKEN');
    
    if (!twitterBearerToken) {
      return c.json({ 
        error: "Twitter API credentials not configured",
        mockData: true,
        data: generateMockTwitterTrends()
      }, 200);
    }
    
    // Fetch recent tweets about design, fashion, home decor
    const keywords = ['interior design', 'fashion trends', 'home decor', 'color trends', 'material trends'];
    const allTrends: any[] = [];
    
    for (const keyword of keywords) {
      try {
        const response = await fetch(
          `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(keyword)}&max_results=100&tweet.fields=created_at,public_metrics`,
          {
            headers: {
              'Authorization': `Bearer ${twitterBearerToken}`
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          allTrends.push(...(data.data || []));
        }
      } catch (err) {
        console.log(`Error fetching Twitter trends for ${keyword}: ${err}`);
      }
    }
    
    // Analyze trends
    const analysis = analyzeTrendData(allTrends);
    
    // Store in database
    await kv.set(`trends:twitter:${new Date().toISOString().split('T')[0]}`, JSON.stringify(analysis));
    
    return c.json({ success: true, data: analysis, source: 'twitter' });
  } catch (error) {
    console.log(`Error in Twitter trends endpoint: ${error}`);
    return c.json({ 
      error: String(error), 
      mockData: true,
      data: generateMockTwitterTrends()
    }, 200);
  }
});

// Fetch Instagram trends (requires API key)
app.get("/make-server-4bc8a91d/trends/instagram", async (c) => {
  try {
    const instagramAccessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    
    if (!instagramAccessToken) {
      return c.json({ 
        error: "Instagram API credentials not configured",
        mockData: true,
        data: generateMockInstagramTrends()
      }, 200);
    }
    
    // Fetch hashtag data
    const hashtags = ['interiordesign', 'fashiontrends', 'homedecor', 'colorpalette', 'designtrends'];
    const allData: any[] = [];
    
    for (const hashtag of hashtags) {
      try {
        const response = await fetch(
          `https://graph.instagram.com/ig_hashtag_search?user_id=YOUR_USER_ID&q=${hashtag}&access_token=${instagramAccessToken}`
        );
        
        if (response.ok) {
          const data = await response.json();
          allData.push(data);
        }
      } catch (err) {
        console.log(`Error fetching Instagram trends for ${hashtag}: ${err}`);
      }
    }
    
    const analysis = analyzeInstagramData(allData);
    await kv.set(`trends:instagram:${new Date().toISOString().split('T')[0]}`, JSON.stringify(analysis));
    
    return c.json({ success: true, data: analysis, source: 'instagram' });
  } catch (error) {
    console.log(`Error in Instagram trends endpoint: ${error}`);
    return c.json({ 
      error: String(error),
      mockData: true,
      data: generateMockInstagramTrends()
    }, 200);
  }
});

// Aggregate all trends
app.get("/make-server-4bc8a91d/trends/aggregate", async (c) => {
  try {
    const timeRange = c.req.query('range') || '7'; // days
    const today = new Date();
    const trends: any[] = [];
    
    // Fetch historical data from last N days
    for (let i = 0; i < parseInt(timeRange); i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const twitterData = await kv.get(`trends:twitter:${dateStr}`);
      const instagramData = await kv.get(`trends:instagram:${dateStr}`);
      
      if (twitterData) trends.push({ date: dateStr, source: 'twitter', data: JSON.parse(twitterData) });
      if (instagramData) trends.push({ date: dateStr, source: 'instagram', data: JSON.parse(instagramData) });
    }
    
    // If no historical data, generate mock data
    if (trends.length === 0) {
      return c.json({
        mockData: true,
        data: generateMockAggregatedTrends(parseInt(timeRange))
      });
    }
    
    // Aggregate and analyze
    const aggregated = aggregateTrends(trends);
    
    return c.json({ success: true, data: aggregated });
  } catch (error) {
    console.log(`Error in aggregate trends endpoint: ${error}`);
    return c.json({ 
      error: String(error),
      mockData: true,
      data: generateMockAggregatedTrends(7)
    }, 200);
  }
});

// Get color trends
app.get("/make-server-4bc8a91d/trends/colors", async (c) => {
  try {
    const colorTrends = await kv.getByPrefix('trends:');
    const allColors: { [key: string]: number } = {};
    
    colorTrends.forEach((trend: any) => {
      if (trend && typeof trend === 'string') {
        const data = JSON.parse(trend);
        if (data.colors) {
          Object.entries(data.colors).forEach(([color, count]: [string, any]) => {
            allColors[color] = (allColors[color] || 0) + (count || 0);
          });
        }
      }
    });
    
    const sorted = Object.entries(allColors)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([color, count]) => ({ color, count, trend: 'up' }));
    
    if (sorted.length === 0) {
      return c.json({
        mockData: true,
        data: generateMockColorTrends()
      });
    }
    
    return c.json({ success: true, data: sorted });
  } catch (error) {
    console.log(`Error in color trends endpoint: ${error}`);
    return c.json({ 
      error: String(error),
      mockData: true,
      data: generateMockColorTrends()
    }, 200);
  }
});

// Get material trends
app.get("/make-server-4bc8a91d/trends/materials", async (c) => {
  try {
    const materialTrends = await kv.getByPrefix('trends:');
    const allMaterials: { [key: string]: number } = {};
    
    materialTrends.forEach((trend: any) => {
      if (trend && typeof trend === 'string') {
        const data = JSON.parse(trend);
        if (data.materials) {
          Object.entries(data.materials).forEach(([material, count]: [string, any]) => {
            allMaterials[material] = (allMaterials[material] || 0) + (count || 0);
          });
        }
      }
    });
    
    const sorted = Object.entries(allMaterials)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([material, count]) => ({ material, count, trend: 'up' }));
    
    if (sorted.length === 0) {
      return c.json({
        mockData: true,
        data: generateMockMaterialTrends()
      });
    }
    
    return c.json({ success: true, data: sorted });
  } catch (error) {
    console.log(`Error in material trends endpoint: ${error}`);
    return c.json({ 
      error: String(error),
      mockData: true,
      data: generateMockMaterialTrends()
    }, 200);
  }
});

// Get finish trends
app.get("/make-server-4bc8a91d/trends/finishes", async (c) => {
  try {
    // For now, return mock data - can be enhanced later with real tracking
    return c.json({
      mockData: true,
      data: generateMockFinishTrends()
    });
  } catch (error) {
    console.log(`Error in finish trends endpoint: ${error}`);
    return c.json({ 
      error: String(error),
      mockData: true,
      data: generateMockFinishTrends()
    }, 200);
  }
});

// Manual trigger for data collection
app.post("/make-server-4bc8a91d/trends/collect", async (c) => {
  try {
    const twitterBearerToken = Deno.env.get('TWITTER_BEARER_TOKEN');
    
    if (!twitterBearerToken) {
      return c.json({ 
        error: "API credentials not configured. Please set TWITTER_BEARER_TOKEN environment variable.",
        success: false
      }, 400);
    }
    
    console.log('[Manual Collection] Starting trend data collection...');
    const keywords = ['interior design', 'fashion trends', 'home decor', 'color trends', 'material trends'];
    const allTweets: any[] = [];
    
    for (const keyword of keywords) {
      try {
        const response = await fetch(
          `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(keyword)}&max_results=100&tweet.fields=created_at,public_metrics`,
          {
            headers: {
              'Authorization': `Bearer ${twitterBearerToken}`
            }
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          allTweets.push(...(data.data || []));
          console.log(`[Manual Collection] Collected ${data.data?.length || 0} tweets for "${keyword}"`);
        } else {
          console.log(`[Manual Collection] Twitter API error for "${keyword}": ${response.status}`);
        }
      } catch (err) {
        console.log(`[Manual Collection] Error fetching tweets for "${keyword}": ${err}`);
      }
    }
    
    if (allTweets.length > 0) {
      const dateStr = new Date().toISOString().split('T')[0];
      const analysis = analyzeTrendData(allTweets);
      await kv.set(`trends:twitter:${dateStr}`, JSON.stringify(analysis));
      console.log(`[Manual Collection] Stored ${allTweets.length} tweets with analysis`);
      
      return c.json({ 
        success: true, 
        message: `Successfully collected and analyzed ${allTweets.length} tweets`,
        data: analysis
      });
    } else {
      return c.json({ 
        success: false,
        message: 'No tweets collected. Check API credentials and rate limits.'
      }, 400);
    }
    
  } catch (error) {
    console.log(`[Manual Collection] Error: ${error}`);
    return c.json({ 
      success: false,
      error: String(error)
    }, 500);
  }
});

// ============================================================================
// COLOR OBSERVATORY API ROUTES
// ============================================================================

// Admin: Create signal observation
app.post("/make-server-4bc8a91d/admin/signals", async (c) => {
  try {
    const body = await c.req.json();
    const signalId = `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const signalData = {
      id: signalId,
      title: body.title,
      signal_type: body.signal_type,
      status: body.status,
      description: body.description,
      source_type: body.source_type,
      source_reference: body.source_reference,
      industry: body.industry,
      region: body.region,
      date_observed: body.date_observed,
      colours: body.colours || [],
      materials: body.materials || [],
      finishes: body.finishes || [],
      analyst_interpretation: body.analyst_interpretation,
      confidence_assessment: body.confidence_assessment,
      notes: body.notes,
      analyst_name: body.analyst_name,
      created_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 365 days
    };
    
    await kv.set(`cmf_signal:${signalId}`, JSON.stringify(signalData));
    
    console.log(`[Admin] Created signal: ${signalData.title}`);
    return c.json({ success: true, signalId, signal: signalData });
  } catch (error) {
    console.log(`Error creating signal: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Admin: Get all signals
app.get("/make-server-4bc8a91d/admin/signals", async (c) => {
  try {
    const signalKeys = await kv.getByPrefix('cmf_signal:');
    const signals = signalKeys
      .map((s: any) => {
        try {
          return typeof s === 'string' ? JSON.parse(s) : s;
        } catch {
          return null;
        }
      })
      .filter((s: any) => s !== null)
      .filter((s: any) => {
        // Filter out expired signals (older than 365 days)
        if (s.created_at) {
          const createdDate = new Date(s.created_at);
          const now = new Date();
          const daysDiff = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
          return daysDiff <= 365;
        }
        return true;
      })
      .sort((a: any, b: any) => {
        const dateA = new Date(a.date_observed || a.created_at || 0);
        const dateB = new Date(b.date_observed || b.created_at || 0);
        return dateB.getTime() - dateA.getTime();
      });
    
    return c.json({ success: true, signals });
  } catch (error) {
    console.log(`Error fetching signals: ${error}`);
    return c.json({ error: String(error), signals: [] }, 500);
  }
});

// Admin: Delete signal
app.delete("/make-server-4bc8a91d/admin/signals/:id", async (c) => {
  try {
    const id = c.req.param('id');
    await kv.del(`cmf_signal:${id}`);
    
    console.log(`[Admin] Deleted signal: ${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error deleting signal: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Get weekly color signals
app.get("/make-server-4bc8a91d/observatory/weekly-signals", async (c) => {
  try {
    const week = c.req.query('week') || 'current';
    const weekOffset = week === 'current' ? 0 : parseInt(week);
    
    const signals = await observatory.aggregateColorSignals(weekOffset);
    
    return c.json({ success: true, signals, week });
  } catch (error) {
    console.log(`Error fetching weekly signals: ${error}`);
    return c.json({ error: String(error), signals: [] }, 500);
  }
});

// Get color families
app.get("/make-server-4bc8a91d/observatory/color-families", async (c) => {
  try {
    const families = await observatory.getColorFamilies();
    
    return c.json({ success: true, families });
  } catch (error) {
    console.log(`Error fetching color families: ${error}`);
    return c.json({ error: String(error), families: [] }, 500);
  }
});

// Create new color family
app.post("/make-server-4bc8a91d/observatory/color-families", async (c) => {
  try {
    const body = await c.req.json();
    const familyId = await observatory.storeColorFamily(body);
    
    return c.json({ success: true, familyId });
  } catch (error) {
    console.log(`Error creating color family: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Get published colors
app.get("/make-server-4bc8a91d/observatory/published", async (c) => {
  try {
    const year = parseInt(c.req.query('year') || '2027');
    const colors = await observatory.getPublishedColors(year);
    
    return c.json({ success: true, colors, year });
  } catch (error) {
    console.log(`Error fetching published colors: ${error}`);
    return c.json({ error: String(error), colors: [] }, 500);
  }
});

// Publish a color family
app.post("/make-server-4bc8a91d/observatory/publish", async (c) => {
  try {
    const body = await c.req.json();
    const { familyId, ...publishData } = body;
    
    await observatory.publishColorFamily(familyId, publishData);
    
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error publishing color family: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Initialize demo data
app.post("/make-server-4bc8a91d/observatory/init-demo", async (c) => {
  try {
    await observatory.initializeDemoData();
    
    return c.json({ success: true, message: 'Demo data initialized' });
  } catch (error) {
    console.log(`Error initializing demo data: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Get trend candidates
app.get("/make-server-4bc8a91d/observatory/trend-candidates", async (c) => {
  try {
    const candidates = await observatory.getTrendCandidates();
    
    return c.json({ success: true, candidates });
  } catch (error) {
    console.log(`Error fetching trend candidates: ${error}`);
    return c.json({ error: String(error), candidates: [] }, 500);
  }
});

// ============================================================================
// CMF OBSERVATION EVENTS & REPORTS
// ============================================================================

// Store a CMF observation event (monthly input)
app.post("/make-server-4bc8a91d/cmf/events", async (c) => {
  try {
    const body = await c.req.json();
    const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const eventData = {
      id: eventId,
      event_name: body.event_name,
      event_date: body.event_date,
      event_type: body.event_type, // 'Geopolitical', 'Trade Show', 'Fashion', 'Cultural', etc.
      domain: body.domain,
      region: body.region,
      description: body.description,
      source_links: body.source_links || [],
      observed_evidence: {
        colour: body.observed_evidence?.colour || {},
        material: body.observed_evidence?.material || {},
        finish: body.observed_evidence?.finish || {}
      },
      signals: body.signals || [], // Array of extracted signals
      cross_industry_translation: body.cross_industry_translation || {},
      domain_impact: body.domain_impact || '',
      macro_context: body.macro_context || '',
      time_horizon: body.time_horizon || {},
      confidence_inputs: body.confidence_inputs || {},
      editorial_summary: body.editorial_summary || '',
      analyst_name: body.analyst_name || '',
      created_at: new Date().toISOString(),
      observation_cycle: body.observation_cycle || '' // e.g., "2026-01"
    };
    
    await kv.set(`cmf_event:${eventId}`, JSON.stringify(eventData));
    
    // Extract and store individual signals
    if (body.signals && Array.isArray(body.signals)) {
      for (const signal of body.signals) {
        const signalId = `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const signalData = {
          id: signalId,
          title: signal.signal_name,
          signal_type: signal.cmf_type,
          status: signal.maturity || 'Emerging',
          description: signal.description || '',
          source_type: body.event_type,
          source_reference: body.event_name,
          source_event_id: eventId,
          industry: signal.primary_industry || body.domain,
          industries: signal.industries || [],
          region: body.region,
          date_observed: body.event_date,
          colours: signal.colours || [],
          materials: signal.materials || [],
          finishes: signal.finishes || [],
          analyst_interpretation: body.editorial_summary,
          confidence_assessment: signal.confidence_band || 'Medium',
          confidence_breakdown: body.confidence_inputs || {},
          cross_industry_relevance: body.cross_industry_translation || {},
          time_horizon: body.time_horizon || {},
          notes: signal.notes || '',
          analyst_name: body.analyst_name || '',
          observation_cycle: body.observation_cycle,
          created_at: new Date().toISOString()
        };
        
        await kv.set(`cmf_signal:${signalId}`, JSON.stringify(signalData));
      }
    }
    
    console.log(`[CMF] Created event: ${eventData.event_name} with ${body.signals?.length || 0} signals`);
    return c.json({ success: true, eventId, event: eventData });
  } catch (error) {
    console.log(`Error creating CMF event: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Get all CMF events
app.get("/make-server-4bc8a91d/cmf/events", async (c) => {
  try {
    const cycle = c.req.query('cycle'); // e.g., "2026-01"
    
    const eventKeys = await kv.getByPrefix('cmf_event:');
    let events = eventKeys
      .map((e: any) => {
        try {
          return typeof e === 'string' ? JSON.parse(e) : e;
        } catch {
          return null;
        }
      })
      .filter((e: any) => e !== null);
    
    // Filter by cycle if specified
    if (cycle) {
      events = events.filter((e: any) => e.observation_cycle === cycle);
    }
    
    // Sort by date
    events.sort((a: any, b: any) => {
      const dateA = new Date(a.event_date || a.created_at || 0);
      const dateB = new Date(b.event_date || b.created_at || 0);
      return dateB.getTime() - dateA.getTime();
    });
    
    return c.json({ success: true, events, count: events.length });
  } catch (error) {
    console.log(`Error fetching CMF events: ${error}`);
    return c.json({ error: String(error), events: [] }, 500);
  }
});

// Generate monthly CMF report
app.get("/make-server-4bc8a91d/cmf/reports/:cycle", async (c) => {
  try {
    const cycle = c.req.param('cycle'); // e.g., "2026-01"
    
    // Get all events for this cycle
    const eventKeys = await kv.getByPrefix('cmf_event:');
    const events = eventKeys
      .map((e: any) => {
        try {
          return typeof e === 'string' ? JSON.parse(e) : e;
        } catch {
          return null;
        }
      })
      .filter((e: any) => e !== null && e.observation_cycle === cycle);
    
    // Get all signals for this cycle
    const signalKeys = await kv.getByPrefix('cmf_signal:');
    const signals = signalKeys
      .map((s: any) => {
        try {
          return typeof s === 'string' ? JSON.parse(s) : s;
        } catch {
          return null;
        }
      })
      .filter((s: any) => s !== null && s.observation_cycle === cycle);
    
    // Generate report analytics
    const signalsByType = signals.reduce((acc: any, signal: any) => {
      acc[signal.signal_type] = (acc[signal.signal_type] || 0) + 1;
      return acc;
    }, {});
    
    const signalsByStatus = signals.reduce((acc: any, signal: any) => {
      acc[signal.status] = (acc[signal.status] || 0) + 1;
      return acc;
    }, {});
    
    const signalsByConfidence = signals.reduce((acc: any, signal: any) => {
      acc[signal.confidence_assessment] = (acc[signal.confidence_assessment] || 0) + 1;
      return acc;
    }, {});
    
    const industryDistribution = signals.reduce((acc: any, signal: any) => {
      if (signal.industries && Array.isArray(signal.industries)) {
        signal.industries.forEach((ind: string) => {
          acc[ind] = (acc[ind] || 0) + 1;
        });
      }
      return acc;
    }, {});
    
    const topColours = signals.reduce((acc: any, signal: any) => {
      if (signal.colours && Array.isArray(signal.colours)) {
        signal.colours.forEach((colour: string) => {
          acc[colour] = (acc[colour] || 0) + 1;
        });
      }
      return acc;
    }, {});
    
    const topMaterials = signals.reduce((acc: any, signal: any) => {
      if (signal.materials && Array.isArray(signal.materials)) {
        signal.materials.forEach((material: string) => {
          acc[material] = (acc[material] || 0) + 1;
        });
      }
      return acc;
    }, {});
    
    const topFinishes = signals.reduce((acc: any, signal: any) => {
      if (signal.finishes && Array.isArray(signal.finishes)) {
        signal.finishes.forEach((finish: string) => {
          acc[finish] = (acc[finish] || 0) + 1;
        });
      }
      return acc;
    }, {});
    
    const report = {
      cycle,
      generated_at: new Date().toISOString(),
      summary: {
        total_events: events.length,
        total_signals: signals.length,
        signal_types: signalsByType,
        signal_status: signalsByStatus,
        confidence_distribution: signalsByConfidence,
        industry_coverage: industryDistribution
      },
      top_signals: {
        colours: Object.entries(topColours)
          .sort((a: any, b: any) => b[1] - a[1])
          .slice(0, 10)
          .map(([name, count]) => ({ name, count })),
        materials: Object.entries(topMaterials)
          .sort((a: any, b: any) => b[1] - a[1])
          .slice(0, 10)
          .map(([name, count]) => ({ name, count })),
        finishes: Object.entries(topFinishes)
          .sort((a: any, b: any) => b[1] - a[1])
          .slice(0, 10)
          .map(([name, count]) => ({ name, count }))
      },
      events: events.map((e: any) => ({
        id: e.id,
        name: e.event_name,
        date: e.event_date,
        type: e.event_type,
        domain: e.domain,
        signals_count: e.signals?.length || 0
      })),
      signals: signals.map((s: any) => ({
        id: s.id,
        title: s.title,
        type: s.signal_type,
        status: s.status,
        confidence: s.confidence_assessment,
        industries: s.industries,
        source_event: s.source_reference
      }))
    };
    
    return c.json({ success: true, report });
  } catch (error) {
    console.log(`Error generating CMF report: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Get list of all observation cycles
app.get("/make-server-4bc8a91d/cmf/cycles", async (c) => {
  try {
    const eventKeys = await kv.getByPrefix('cmf_event:');
    const events = eventKeys
      .map((e: any) => {
        try {
          return typeof e === 'string' ? JSON.parse(e) : e;
        } catch {
          return null;
        }
      })
      .filter((e: any) => e !== null);
    
    // Extract unique cycles
    const cyclesSet = new Set(events.map((e: any) => e.observation_cycle).filter(Boolean));
    const cycles = Array.from(cyclesSet).sort().reverse();
    
    const cyclesSummary = cycles.map(cycle => {
      const cycleEvents = events.filter((e: any) => e.observation_cycle === cycle);
      const totalSignals = cycleEvents.reduce((sum: number, e: any) => sum + (e.signals?.length || 0), 0);
      
      return {
        cycle,
        events_count: cycleEvents.length,
        signals_count: totalSignals,
        month: cycle.split('-')[1],
        year: cycle.split('-')[0]
      };
    });
    
    return c.json({ success: true, cycles: cyclesSummary });
  } catch (error) {
    console.log(`Error fetching cycles: ${error}`);
    return c.json({ error: String(error), cycles: [] }, 500);
  }
});

// Initialize January 2026 data
app.post("/make-server-4bc8a91d/cmf/init-jan2026", async (c) => {
  try {
    let successCount = 0;
    let errorCount = 0;
    
    for (const event of january2026Events) {
      try {
        const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        const eventData = {
          ...event,
          id: eventId,
          created_at: new Date().toISOString()
        };
        
        await kv.set(`cmf_event:${eventId}`, JSON.stringify(eventData));
        
        // Extract and store individual signals
        if (event.signals && Array.isArray(event.signals)) {
          for (const signal of event.signals) {
            const signalId = `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const signalData = {
              id: signalId,
              title: signal.signal_name,
              signal_type: signal.cmf_type,
              status: signal.maturity || 'Emerging',
              description: signal.description || '',
              source_type: event.event_type,
              source_reference: event.event_name,
              source_event_id: eventId,
              industry: signal.primary_industry || event.domain,
              industries: signal.industries || [],
              region: event.region,
              date_observed: event.event_date,
              colours: signal.colours || [],
              materials: signal.materials || [],
              finishes: signal.finishes || [],
              analyst_interpretation: event.editorial_summary,
              confidence_assessment: signal.confidence_band || 'Medium',
              confidence_breakdown: event.confidence_inputs || {},
              cross_industry_relevance: event.cross_industry_translation || {},
              time_horizon: event.time_horizon || {},
              notes: signal.notes || '',
              analyst_name: event.analyst_name || '',
              observation_cycle: event.observation_cycle,
              created_at: new Date().toISOString()
            };
            
            await kv.set(`cmf_signal:${signalId}`, JSON.stringify(signalData));
          }
        }
        
        successCount++;
        console.log(`[Init] Created event: ${event.event_name}`);
      } catch (err) {
        errorCount++;
        console.log(`[Init] Error creating event: ${event.event_name} - ${err}`);
      }
    }
    
    return c.json({ 
      success: true, 
      message: `Initialized January 2026 data: ${successCount} events created, ${errorCount} errors`,
      events_created: successCount,
      errors: errorCount
    });
  } catch (error) {
    console.log(`Error initializing January 2026 data: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Initialize February 2026 data
app.post("/make-server-4bc8a91d/cmf/init-feb2026", async (c) => {
  try {
    let successCount = 0;
    let errorCount = 0;
    
    for (const event of february2026Events) {
      try {
        const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        const eventData = {
          ...event,
          id: eventId,
          created_at: new Date().toISOString()
        };
        
        await kv.set(`cmf_event:${eventId}`, JSON.stringify(eventData));
        
        // Extract and store individual signals
        if (event.signals && Array.isArray(event.signals)) {
          for (const signal of event.signals) {
            const signalId = `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const signalData = {
              id: signalId,
              title: signal.signal_name,
              signal_type: signal.cmf_type,
              status: signal.maturity || 'Emerging',
              description: signal.description || '',
              source_type: event.event_type,
              source_reference: event.event_name,
              source_event_id: eventId,
              industry: signal.primary_industry || event.domain,
              industries: signal.industries || [],
              region: event.region,
              date_observed: event.event_date,
              colours: signal.colours || [],
              materials: signal.materials || [],
              finishes: signal.finishes || [],
              analyst_interpretation: event.editorial_summary,
              confidence_assessment: signal.confidence_band || 'Medium',
              confidence_breakdown: event.confidence_inputs || {},
              cross_industry_relevance: event.cross_industry_translation || {},
              time_horizon: event.time_horizon || {},
              notes: signal.notes || '',
              analyst_name: event.analyst_name || '',
              observation_cycle: event.observation_cycle,
              created_at: new Date().toISOString()
            };
            
            await kv.set(`cmf_signal:${signalId}`, JSON.stringify(signalData));
          }
        }
        
        successCount++;
        console.log(`[Init] Created event: ${event.event_name}`);
      } catch (err) {
        errorCount++;
        console.log(`[Init] Error creating event: ${event.event_name} - ${err}`);
      }
    }
    
    return c.json({ 
      success: true, 
      message: `Initialized February 2026 data: ${successCount} events created, ${errorCount} errors`,
      events_created: successCount,
      errors: errorCount
    });
  } catch (error) {
    console.log(`Error initializing February 2026 data: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Initialize March 2026 data
app.post("/make-server-4bc8a91d/cmf/init-mar2026", async (c) => {
  try {
    let successCount = 0;
    let errorCount = 0;
    
    for (const event of march2026Events) {
      try {
        const eventId = `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        const eventData = {
          ...event,
          id: eventId,
          created_at: new Date().toISOString()
        };
        
        await kv.set(`cmf_event:${eventId}`, JSON.stringify(eventData));
        
        // Extract and store individual signals
        if (event.signals && Array.isArray(event.signals)) {
          for (const signal of event.signals) {
            const signalId = `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const signalData = {
              id: signalId,
              title: signal.signal_name,
              signal_type: signal.cmf_type,
              status: signal.maturity || 'Emerging',
              description: signal.description || '',
              source_type: event.event_type,
              source_reference: event.event_name,
              source_event_id: eventId,
              industry: signal.primary_industry || event.domain,
              industries: signal.industries || [],
              region: event.region,
              date_observed: event.event_date,
              colours: signal.colours || [],
              materials: signal.materials || [],
              finishes: signal.finishes || [],
              analyst_interpretation: event.editorial_summary,
              confidence_assessment: signal.confidence_band || 'Medium',
              confidence_breakdown: event.confidence_inputs || {},
              cross_industry_relevance: event.cross_industry_translation || {},
              time_horizon: event.time_horizon || {},
              notes: signal.notes || '',
              analyst_name: event.analyst_name || '',
              observation_cycle: event.observation_cycle,
              created_at: new Date().toISOString()
            };
            
            await kv.set(`cmf_signal:${signalId}`, JSON.stringify(signalData));
          }
        }
        
        successCount++;
        console.log(`[Init] Created event: ${event.event_name}`);
      } catch (err) {
        errorCount++;
        console.log(`[Init] Error creating event: ${event.event_name} - ${err}`);
      }
    }
    
    return c.json({ 
      success: true, 
      message: `Initialized March 2026 data: ${successCount} events created, ${errorCount} errors`,
      events_created: successCount,
      errors: errorCount
    });
  } catch (error) {
    console.log(`Error initializing March 2026 data: ${error}`);
    return c.json({ error: String(error) }, 500);
  }
});

// Helper functions
function analyzeTrendData(tweets: any[]) {
  const colors: { [key: string]: number } = {};
  const materials: { [key: string]: number } = {};
  const hashtags: { [key: string]: number } = {};
  
  tweets.forEach(tweet => {
    if (!tweet.text) return;
    
    // Extract colors
    extractColors(tweet.text).forEach(color => {
      colors[color] = (colors[color] || 0) + 1;
    });
    
    // Extract materials
    extractMaterials(tweet.text).forEach(material => {
      materials[material] = (materials[material] || 0) + 1;
    });
    
    // Extract hashtags
    const hashtagMatches = tweet.text.match(/#\w+/g);
    if (hashtagMatches) {
      hashtagMatches.forEach((tag: string) => {
        hashtags[tag.toLowerCase()] = (hashtags[tag.toLowerCase()] || 0) + 1;
      });
    }
  });
  
  return {
    colors,
    materials,
    hashtags,
    totalPosts: tweets.length,
    timestamp: new Date().toISOString()
  };
}

function analyzeInstagramData(posts: any[]) {
  // Similar analysis for Instagram data
  return {
    colors: {},
    materials: {},
    hashtags: {},
    totalPosts: posts.length,
    timestamp: new Date().toISOString()
  };
}

function aggregateTrends(trends: any[]) {
  const aggregated = {
    colors: {} as { [key: string]: number },
    materials: {} as { [key: string]: number },
    hashtags: {} as { [key: string]: number },
    timeline: [] as any[]
  };
  
  trends.forEach(trend => {
    if (trend.data.colors) {
      Object.entries(trend.data.colors).forEach(([color, count]: [string, any]) => {
        aggregated.colors[color] = (aggregated.colors[color] || 0) + count;
      });
    }
    
    if (trend.data.materials) {
      Object.entries(trend.data.materials).forEach(([material, count]: [string, any]) => {
        aggregated.materials[material] = (aggregated.materials[material] || 0) + count;
      });
    }
    
    aggregated.timeline.push({
      date: trend.date,
      source: trend.source,
      totalPosts: trend.data.totalPosts
    });
  });
  
  return aggregated;
}

// Mock data generators
function generateMockTwitterTrends() {
  return {
    colors: {
      'grey': 2847, 'green': 1923, 'blue': 1654, 'beige': 1432, 'brown': 1289,
      'black': 1156, 'white': 1043, 'tan': 876, 'sage': 743, 'navy': 621,
      'charcoal': 589, 'steel': 534, 'olive': 487, 'slate': 445, 'forest': 398
    },
    materials: {
      'wood': 3421, 'metal': 2876, 'fabric': 2543, 'leather': 1987, 'ceramic': 1654,
      'glass': 1432, 'stone': 1289, 'concrete': 1156, 'brass': 987, 'steel': 876,
      'textured': 765, 'matte': 654, 'natural': 598, 'organic': 534, 'sustainable': 487
    },
    hashtags: {
      '#interiordesign': 45632, '#homedecor': 38921, '#designtrends': 24567,
      '#colorpalette': 18943, '#materialtrends': 15678, '#sustainabledesign': 12345,
      '#moderninteriors': 11234, '#fashiontrends': 10987, '#industrialdesign': 9876,
      '#minimalism': 8765
    },
    totalPosts: 15847,
    timestamp: new Date().toISOString()
  };
}

function generateMockInstagramTrends() {
  return {
    colors: {
      'beige': 3421, 'grey': 2987, 'green': 2456, 'brown': 2134, 'tan': 1876,
      'sage': 1654, 'olive': 1432, 'terracotta': 1289, 'clay': 1156, 'rust': 987,
      'ivory': 876, 'sand': 765, 'earth': 654, 'moss': 598, 'fog': 534
    },
    materials: {
      'natural': 4532, 'organic': 3876, 'wood': 3421, 'linen': 2987, 'cotton': 2654,
      'ceramic': 2345, 'stone': 2134, 'rattan': 1876, 'wicker': 1654, 'jute': 1432,
      'sustainable': 1289, 'recycled': 1156, 'textured': 987, 'woven': 876, 'handmade': 765
    },
    hashtags: {
      '#homedecor': 67890, '#interiordesign': 54321, '#homeinspo': 43210,
      '#interiorinspo': 32109, '#designinspiration': 28765, '#naturalhome': 21098,
      '#sustainableliving': 18765, '#neutralhome': 16543, '#organicdesign': 14321,
      '#earthyaesthetic': 12109
    },
    totalPosts: 23456,
    timestamp: new Date().toISOString()
  };
}

function generateMockColorTrends() {
  return [
    { color: 'Grey', hex: '#808080', count: 5834, trend: 'up', change: '+23%' },
    { color: 'Beige', hex: '#d4c5b9', count: 4853, trend: 'up', change: '+18%' },
    { color: 'Green', hex: '#90a955', count: 4379, trend: 'up', change: '+15%' },
    { color: 'Brown', hex: '#87694f', count: 3423, trend: 'up', change: '+12%' },
    { color: 'Tan', hex: '#d2b48c', count: 2752, trend: 'stable', change: '+3%' },
    { color: 'Sage', hex: '#9caf88', count: 2397, trend: 'up', change: '+28%' },
    { color: 'Charcoal', hex: '#4a4a4a', count: 1745, trend: 'up', change: '+9%' },
    { color: 'Steel', hex: '#71797e', count: 1410, trend: 'up', change: '+31%' },
    { color: 'Olive', hex: '#6b7c3c', count: 1319, trend: 'stable', change: '+2%' },
    { color: 'Slate', hex: '#708090', count: 1043, trend: 'up', change: '+16%' },
    { color: 'Ashen Iron', hex: '#4a424d', count: 892, trend: 'up', change: '+34%' },
    { color: 'Forge Grey', hex: '#5d6b7a', count: 745, trend: 'up', change: '+29%' },
    { color: 'Smoky Steel', hex: '#5c6366', count: 687, trend: 'up', change: '+27%' }
  ];
}

function generateMockMaterialTrends() {
  return [
    { material: 'natural', count: 7953, trend: 'up', change: '+34%' },
    { material: 'wood', count: 6842, trend: 'up', change: '+21%' },
    { material: 'metal', count: 5876, trend: 'up', change: '+18%' },
    { material: 'organic', count: 4410, trend: 'up', change: '+42%' },
    { material: 'fabric', count: 5197, trend: 'stable', change: '+5%' },
    { material: 'sustainable', count: 3776, trend: 'up', change: '+56%' },
    { material: 'ceramic', count: 3999, trend: 'up', change: '+12%' },
    { material: 'leather', count: 3621, trend: 'stable', change: '+4%' },
    { material: 'glass', count: 3086, trend: 'up', change: '+8%' },
    { material: 'textured', count: 2752, trend: 'up', change: '+29%' }
  ];
}

function generateMockFinishTrends() {
  return [
    { finish: 'Matte', count: 4567, trend: 'up', change: 25, materials: ['Metal', 'Polymer', 'Ceramic'] },
    { finish: 'Brushed', count: 3892, trend: 'up', change: 22, materials: ['Metal', 'Wood'] },
    { finish: 'Satin', count: 2345, trend: 'up', change: 15, materials: ['Metal', 'Fabric'] },
    { finish: 'Low-Sheen', count: 2187, trend: 'up', change: 18, materials: ['Polymer', 'Wood'] },
    { finish: 'Soft-Touch', count: 1987, trend: 'up', change: 12, materials: ['Polymer', 'Fabric'] },
    { finish: 'Textured', count: 1567, trend: 'up', change: 16, materials: ['Ceramic', 'Polymer', 'Fabric'] },
    { finish: 'Polished', count: 1234, trend: 'stable', change: 3, materials: ['Metal', 'Stone'] },
    { finish: 'Powder-Coated', count: 1089, trend: 'up', change: 14, materials: ['Metal'] },
    { finish: 'Anodised', count: 987, trend: 'up', change: 11, materials: ['Metal'] },
    { finish: 'High-Gloss', count: 765, trend: 'down', change: -9, materials: ['Polymer', 'Wood'] }
  ];
}

function generateMockAggregatedTrends(days: number) {
  const timeline = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    timeline.push({
      date: date.toISOString().split('T')[0],
      twitter: Math.floor(Math.random() * 5000) + 10000,
      instagram: Math.floor(Math.random() * 8000) + 15000,
      totalEngagement: Math.floor(Math.random() * 13000) + 25000
    });
  }
  
  return {
    timeline: timeline.reverse(),
    topColors: generateMockColorTrends().slice(0, 5),
    topMaterials: generateMockMaterialTrends().slice(0, 5),
    insights: [
      { category: 'Color Trends', insight: 'Earthy tones showing 34% increase, led by sage and steel grays' },
      { category: 'Material Focus', insight: 'Sustainable and natural materials up 56% as consumers prioritize eco-friendly design' },
      { category: 'Style Direction', insight: 'Industrial minimalism merging with organic warmth - "soft industrial" aesthetic emerging' },
      { category: 'Forecast', insight: '2027 predictions align with current trajectory: muted metallics and forge-inspired finishes gaining momentum' }
    ]
  };
}

Deno.serve(app.fetch);