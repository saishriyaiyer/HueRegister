# Admin Dashboard Access Instructions

## How to Access the Backend Admin Dashboard

The admin dashboard is now backend-only and not accessible through the frontend navigation.

### Method 1: Direct URL Access
Navigate directly to: `/admin-dashboard`

You can bookmark this URL for easy access.

### Method 2: Browser Console
Open your browser console and run:
```javascript
window.location.href = '/admin-dashboard';
```

## How to Add Monthly CMF Observation Data

### Step 1: Prepare Your Data
Structure your monthly observation data following this format:

```javascript
{
  event_name: "Event Title",
  event_date: "YYYY-MM-DD",
  event_type: "Event Type (e.g., 'Trade Show', 'Fashion Event', 'Cultural Event')",
  domain: "Primary Domain",
  region: "Region (e.g., 'Global', 'Europe', 'Asia')",
  description: "Event description",
  source_links: ["source1", "source2"],
  observation_cycle: "YYYY-MM" (e.g., "2026-02" for February 2026),
  analyst_name: "Your Name",
  observed_evidence: {
    colour: {
      dominant: "Description",
      accents: "Description"
    },
    material: {
      base: "Description"
    },
    finish: {
      surface: "Description"
    }
  },
  signals: [
    {
      signal_name: "Signal Title",
      cmf_type: "Colour" | "Material" | "Finish" | "Cross-CMF",
      maturity: "Emerging" | "Strong" | "Established",
      description: "Signal description",
      industries: ["Industry1", "Industry2"],
      confidence_band: "High" | "Medium" | "Low",
      primary_industry: "Primary industry"
    }
  ],
  editorial_summary: "Summary paragraph",
  macro_context: "Context description",
  time_horizon: {
    immediate: "0-6 months description",
    mid: "6-12 months description",
    long: "12-24 months description"
  },
  confidence_inputs: {
    source_authority: 1-5,
    cross_domain_alignment: 1-5,
    material_feasibility: 1-5,
    cultural_resonance: 1-5
  }
}
```

### Step 2: Submit via API

#### Option A: Use the Admin Dashboard
1. Navigate to `/admin-dashboard`
2. Use the "Add Signal" form to manually input individual signals
3. Each signal will be stored and associated with the current month

#### Option B: Use the Backend API Directly
Send a POST request to:
```
https://<your-project-id>.supabase.co/functions/v1/make-server-4bc8a91d/cmf/events
```

Headers:
```
Authorization: Bearer <your-public-anon-key>
Content-Type: application/json
```

Body: Your event data in JSON format

### Step 3: Verify Data
1. Navigate to the Longitudinal Tracker page
2. Check that your new observation cycle appears
3. Verify all signals are correctly displayed

## Monthly Workflow

1. **Collect Observations** - Gather CMF events throughout the month
2. **Structure Data** - Format each event using the template above
3. **Submit to Backend** - Use admin dashboard or API
4. **Generate Reports** - Reports are automatically generated based on observation cycles
5. **Review Frontend** - Check Longitudinal Tracker for accurate display

## Generated Reports

Reports are automatically generated at:
```
GET /cmf/reports/:cycle
```

Example: `/cmf/reports/2026-01` for January 2026

Reports include:
- Total events and signals count
- Signal type distribution
- Confidence assessment breakdown
- Top colours, materials, and finishes
- Industry coverage analysis

## Important Notes

- The admin dashboard is intentionally not linked in the navigation
- Only you (as editor) should have access to the admin dashboard URL
- Frontend users can only view the generated signals and reports in the Longitudinal Tracker
- All data persists in the backend KV store
- Signals automatically link to their source events
