# A1 Junk Removal and Tree Service — Remaining Tasks Checklist

**Primary Domain:** a1junkremovalandtreeserviceofomaha.com
**Date:** March 13, 2026

---

## DO NOW (new Manus task — paste HANDOFF.md and say "Do tasks 1 and 2")

### Task 1: Update Domain References in Code
- [ ] Replace `a1junkremovalandtreeservice.com` with `a1junkremovalandtreeserviceofomaha.com` in all code files
- [ ] Save checkpoint and export to GitHub

### Task 2: Add 301 Redirects to _redirects File
- [ ] Copy redirect rules from url-redirect-mapping.md into the Netlify _redirects file
- [ ] Save checkpoint and export to GitHub

---

## DO AFTER DNS PROPAGATES (hours to 48 hours)

### Task 3: Verify Site Is Live
- [ ] Visit a1junkremovalandtreeserviceofomaha.com — confirm it loads
- [ ] Visit www.a1junkremovalandtreeserviceofomaha.com — confirm it redirects
- [ ] Check HTTPS works (lock icon in browser)

### Task 4: Set Up Domain Forwarding at GoDaddy
- [ ] Forward a1junkremovalandtreeservice.com → a1junkremovalandtreeserviceofomaha.com
- [ ] Forward a1junkandtree.com → a1junkremovalandtreeserviceofomaha.com
- [ ] Add a1junkremovalofomaha.com as domain alias in Netlify + update its nameservers (activates 301 redirects)

### Task 5: Google Search Console
- [ ] Add a1junkremovalandtreeserviceofomaha.com to Search Console
- [ ] Verify ownership via DNS
- [ ] Submit XML sitemap
- [ ] Use "Change of Address" tool for old domain

### Task 6: Update Google Business Profile
- [ ] Go to business.google.com
- [ ] Change Website field to https://a1junkremovalandtreeserviceofomaha.com

### Task 7: Update Directory Listings
- [ ] Yelp
- [ ] Homeyou
- [ ] BBB
- [ ] Facebook
- [ ] Any other directories with old URL

---

## DO WHEN READY (ongoing improvements)

### Task 8: Write Service Page Content with Gemini
- [ ] Use Google Gemini to write unique content for each service page
- [ ] Reference seo-sitemap-and-outlines.md for each page's keywords, title, and H-tag structure
- [ ] Give content to Manus to integrate into the site
- [ ] Save checkpoint → export to GitHub → Netlify auto-deploys

### Task 9: Replace Placeholder Images (85-90 photos needed)
- [ ] Take/gather photos of crew, trucks, jobs, before/after shots
- [ ] See photo-list.md for full list of what's needed and where each goes
- [ ] Upload to Manus and ask it to swap them in

### Task 10: Add Future Pages
- [ ] Blog (/blog) — long-form content for informational queries
- [ ] Pricing Guide (/pricing) — targets "junk removal cost Omaha"
- [ ] Coupons/Deals (/coupons) — targets "junk removal coupons Omaha"

---

## KEEP THESE DOMAINS REGISTERED (do not let expire)

| Domain | Purpose |
|---|---|
| a1junkremovalandtreeserviceofomaha.com | PRIMARY website |
| a1junkremovalofomaha.com | Old domain — keep redirecting 1-2 years minimum for SEO |
| a1junkremovalandtreeservice.com | Redirect to primary |
| a1junkandtree.com | Short/easy domain for word-of-mouth, business cards, truck wraps |

---

## HOW TO UPDATE THE LIVE SITE

1. Make changes in Manus → save checkpoint
2. Go to Settings > GitHub in Manus → click Export
3. Netlify auto-deploys in 60-90 seconds
4. Site is live with changes
