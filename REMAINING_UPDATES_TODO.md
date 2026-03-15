# Remaining Updates Checklist

## ✅ Completed
1. Added "Load January 2026 Data" button to Longitudinal Tracker
2. Created admin access instructions document
3. Fixed HomePage - removed "Live" and "Real-Time" mentions
4. Fixed MethodologyPage - removed \n characters in Phase 2 and Phase 5
5. Backend routes created for CMF events and reports
6. January 2026 data prepared in `/supabase/functions/server/init_jan2026_data.tsx`

## 🔧 Still To Do

### 1. MethodologyPage.tsx
- ❌ Remove "Our Track Record" section entirely (lines 188-230)
- ❌ Fix remaining \n characters in "What Makes 2027 Different" section

### 2. AboutPage.tsx
- ❌ Change "6 industries" to "7 industries" (line 75-76)
- ❌ Remove "real-time" mention (line 76)
- ❌ Change "Recent Issues" to "Upcoming Issues"
- ❌ Change all volume numbers to "Vol. 1"
- ❌ Remove "Recognition and Awards" section
- ❌ Change "Leadership Team" to "Founder: Saishriya Iyer"
- ❌ Remove "Get in Touch" section
- ❌ Remove "General Inquiries" contact info

### 3. TrendIntelligencePage.tsx
- ❌ Remove "Real-time insights" mention (line 14)
- ❌ Update statistics based on January 2026 trends:
  - Update signal counts
  - Update top colours based on Jan data
  - Update top materials based on Jan data
  - Update industry breakdown

### 4. IndustriesIndexPage.tsx
- ❌ Remove "real-time observation" mention (line 58)

### 5. IndustryDetailPage.tsx
- ❌ Change "Real-time trend analysis" to "Longitudinal tracking" (line 286)

### 6. HomePage.tsx
- ❌ Fix navigation error on line 227 (should be `onNavigate` not `navigate`)

### 7. PublishedOutputPage.tsx (if exists)
- ❌ Change "Recent Publications" to "Upcoming Publications"
- ❌ All volumes to "Vol. 1"

### 8. Admin Dashboard
- ❌ Ensure AdminDashboardPage is NOT in Navigation component
- ❌ Create backend-only access (direct URL only)

### 9. Smoky Steel Color Code
- ❌ Verify #5C6366 is correctly used everywhere for Smoky Steel

## 📋 Search & Replace Patterns Needed

### Remove all "real-time" and "live" mentions:
```bash
Files to check:
- TrendIntelligencePage.tsx
- AboutPage.tsx  
- IndustriesIndexPage.tsx
- IndustryDetailPage.tsx
- ObservatoryMethodologyPage.tsx
```

Replace:
- "real-time" → "event-anchored" or "longitudinal"
- "Real-time" → "Event-anchored" or "Longitudinal"
- "live" → "accumulated" or "curated"
- "Live" → "Accumulated" or "Curated"

### Remove \n characters:
Files:
- MethodologyPage.tsx (What Makes 2027 Different section)

### Recent → Upcoming Publications:
Files:
- AboutPage.tsx
- Any publication-related pages

### Volume numbers:
Replace all "Volume 2", "Volume 3", etc. with "Vol. 1"

## 🎯 Priority Order
1. Fix Navigation for admin dashboard (highest priority - security)
2. Remove all "live" and "real-time" mentions
3. Update AboutPage with correct info
4. Update TrendIntelligencePage with Jan 2026 data
5. Fix remaining \n characters
6. Clean up volume numbers and publication titles
