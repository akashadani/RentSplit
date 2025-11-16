# CatholicHeart Landing Pages

Beautiful, mobile-optimized landing pages for CatholicHeart - a faith-centered Catholic dating platform. Built for Facebook ad A/B testing with integrated profile submission.

## Overview

This project contains 5 landing page variations, each designed to address specific user concerns:

1. **Landing 1 - Faith Compatibility** (`catholic-dating-1.html`)
   - Headline: "Find someone who shares your faith"
   - Focus: Faith-centered connections
   - Target: Catholics prioritizing faith in relationships

2. **Landing 2 - Serious Relationships** (`catholic-dating-2.html`)
   - Headline: "No games. No hookups. Just marriage."
   - Focus: Marriage-minded community
   - Target: Catholics seeking serious, lifelong commitment

3. **Landing 3 - Safety/Verification** (`catholic-dating-3.html`)
   - Headline: "Every profile is verified Catholic"
   - Focus: Verified profiles and safety
   - Target: Catholics concerned about authenticity

4. **Landing 4 - Community Size** (`catholic-dating-4.html`)
   - Headline: "Join 50,000+ active Catholics"
   - Focus: Large, active community
   - Target: Catholics wanting many options

5. **Landing All - Combined** (`catholic-dating-all.html`)
   - Headline: "Catholic dating for serious relationships"
   - Focus: All value props in one page
   - Target: General audience, good starting point

## Features

- **Mobile-first design** - Everything above the fold on mobile
- **Consistent branding** - Elegant rose/purple gradient
- **Profile submission** - Lightweight dating profile capture
- **Source tracking** - Know which landing page each lead came from
- **No dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **A/B test ready** - Perfect for Facebook ads testing
- **Toast notifications** - Smooth "We'll be in touch soon!" feedback

## Profile Fields Captured

Each submission collects:
- **Name** (First name)
- **Age** (18-99)
- **Gender** (Male/Female)
- **Location** (City, State)
- **Email**
- **Source** (which landing page)

All fields are required for submission.

## Email Lead Capture

All landing pages are connected to a Google Apps Script that saves profiles to Google Sheets.

### How It Works

1. User fills out lightweight profile form
2. Clicks "Join Now"
3. Form submits to Google Apps Script
4. Profile saved to "CatholicDating" sheet with timestamp
5. Toast notification shows "We'll be in touch soon!"
6. Form clears for next submission

### Source Tracking

Each landing page sends a unique source identifier:

- `landing-1-faith` - From faith compatibility page
- `landing-2-serious` - From serious relationships page
- `landing-3-verified` - From safety/verification page
- `landing-4-community` - From community size page
- `landing-all-combined` - From combined page

### Google Sheets Setup

1. **Open Google Sheet**: https://docs.google.com/spreadsheets/d/19g0Bf1QgAnZeFkfxXV0ELrUJjvs3zg4EvIGAmdZOTtY

2. **Go to Apps Script**:
   - Click Extensions → Apps Script

3. **Update the code** to add CatholicDating routing (see `google-apps-script.js` in this repo)

4. **Deploy**:
   - Click Deploy → Manage deployments
   - Click pencil icon (Edit)
   - Select "New version"
   - Click Deploy

5. **Test**: Submit a profile from any landing page

The "CatholicDating" sheet will be auto-created with columns:
- Timestamp
- Name
- Age
- Gender
- Location
- Email
- Source

## Design Specifications

### Colors
- **Background**: Deep rose/purple gradient (#4a1942 → #6b2d5c → #8b3a62)
- **Accent**: Rose pink (#f8b4d9)
- **Text**: White with varying opacity

### Typography
- **Font**: System font stack (-apple-system, BlinkMacSystemFont)
- **Logo**: 2.5rem, bold "CatholicHeart"
- **Tagline**: 0.8rem, uppercase, subtle
- **Headline**: 1.75rem, bold
- **Body**: 1rem

### Layout
- **Max width**: 400px
- **Padding**: 20px
- **Full viewport**: 100vh with centered content
- **Above fold**: All content visible without scrolling on mobile

## File Structure

```
catholic-dating-landing-pages/
├── README.md
├── google-apps-script.js          # Backend script for profile collection
├── catholic-dating-1.html         # Faith compatibility page
├── catholic-dating-2.html         # Serious relationships page
├── catholic-dating-3.html         # Safety/verification page
├── catholic-dating-4.html         # Community size page
└── catholic-dating-all.html       # Combined value props page
```

## Facebook Ads Setup

### Initial Campaign

Start with **catholic-dating-all.html** as your baseline.

### A/B Testing Strategy

**Method 1: Sequential Testing**
- Week 1: Run ads to `yourdomain.com/faith`
- Week 2: Run ads to `yourdomain.com/serious`
- Compare conversion rates

**Method 2: Facebook Split Testing**
- Create campaign with multiple ad sets
- Each ad set points to different landing page URL
- Facebook automatically splits traffic
- View results in Ads Manager

**Method 3: Audience Targeting**
- Faith-focused audiences → landing-1 (faith compatibility)
- Marriage-seeking users → landing-2 (serious relationships)
- Safety-conscious users → landing-3 (verified profiles)
- General Catholic singles → landing-all (combined)

### URL Structure

Host all pages at different URLs:
```
yourdomain.com/faith       → catholic-dating-1.html
yourdomain.com/serious     → catholic-dating-2.html
yourdomain.com/verified    → catholic-dating-3.html
yourdomain.com/community   → catholic-dating-4.html
yourdomain.com/join        → catholic-dating-all.html
```

## Deployment

### Option 1: Static Hosting (Recommended)

Upload to any static host:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Option 2: Simple Web Server

```bash
# Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000/catholic-dating-all.html
```

### Option 3: Direct File Access

Open any `.html` file directly in a browser for local testing.

## Testing Checklist

- [ ] Profile submission works on all 5 pages
- [ ] All fields are required and validate correctly
- [ ] Age field accepts only numbers 18-99
- [ ] Gender dropdown works
- [ ] Profiles appear in "CatholicDating" sheet in Google Sheets
- [ ] Source tracking is correct for each page
- [ ] Toast notification appears after submission
- [ ] Form clears after submission
- [ ] Mobile responsive (test on actual device)
- [ ] All content above the fold on mobile
- [ ] Button states work (normal, submitting)

## License

Private project for CatholicHeart.
