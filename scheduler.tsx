// Scheduler for periodic trend data fetching
// This file demonstrates how to set up scheduled jobs for fetching trend data

import * as kv from "./kv_store.tsx";

/**
 * This function should be called periodically (e.g., via a cron job or Supabase Edge Functions cron)
 * to fetch and store fresh trend data
 */
export async function scheduledTrendUpdate() {
  console.log(`[Scheduler] Starting scheduled trend update at ${new Date().toISOString()}`);
  
  try {
    const twitterBearerToken = Deno.env.get('TWITTER_BEARER_TOKEN');
    const instagramAccessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    
    const dateStr = new Date().toISOString().split('T')[0];
    
    // Fetch Twitter trends if token is available
    if (twitterBearerToken) {
      console.log('[Scheduler] Fetching Twitter trends...');
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
          } else {
            console.log(`[Scheduler] Twitter API error for "${keyword}": ${response.status}`);
          }
        } catch (err) {
          console.log(`[Scheduler] Error fetching Twitter trends for "${keyword}": ${err}`);
        }
      }
      
      if (allTweets.length > 0) {
        const analysis = analyzeTrendData(allTweets);
        await kv.set(`trends:twitter:${dateStr}`, JSON.stringify(analysis));
        console.log(`[Scheduler] Stored ${allTweets.length} Twitter trends`);
      }
    }
    
    // Fetch Instagram trends if token is available
    if (instagramAccessToken) {
      console.log('[Scheduler] Fetching Instagram trends...');
      // Instagram API implementation would go here
      // Note: Instagram API requires app setup and user authentication
    }
    
    console.log('[Scheduler] Trend update completed successfully');
    return { success: true, timestamp: new Date().toISOString() };
    
  } catch (error) {
    console.error('[Scheduler] Error during scheduled trend update:', error);
    return { success: false, error: String(error) };
  }
}

// Helper function to analyze trend data
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

/**
 * To set up automatic scheduling in Supabase:
 * 
 * 1. Create a new edge function that calls this scheduler
 * 2. Use Supabase's cron trigger feature to run it hourly/daily
 * 
 * Example cron configuration in supabase/functions/_cron/trend-update.tsx:
 * 
 * import { scheduledTrendUpdate } from "../server/scheduler.tsx";
 * 
 * Deno.serve(async () => {
 *   const result = await scheduledTrendUpdate();
 *   return new Response(JSON.stringify(result), {
 *     headers: { "Content-Type": "application/json" }
 *   });
 * });
 */
