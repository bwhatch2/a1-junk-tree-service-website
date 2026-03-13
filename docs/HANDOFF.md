# A1 Junk Removal and Tree Service — Project Handoff

Paste this entire document into a new task to carry over all context.

---

## Project Overview

This is an existing website project for **A1 Junk Removal and Tree Service** (formerly A1 Junk Removal of Omaha). The website is fully built with ~118 pages and deployed to Netlify. The code is on GitHub.

- **GitHub repo:** bwhatch2/a1-junk-tree-service-website
- **Netlify site:** admirable-elf-9d2e3c.netlify.app
- **Primary domain:** a1junkremovalandtreeserviceofomaha.com (set up on Netlify, nameservers updated at GoDaddy to dns1-4.p06.nsone.net, DNS propagating)
- **Phone:** (402) 612-2373
- **Email:** bryan@A1JunkRemovalOfOmaha.com (stays on old domain, no email on new domain)
- **Branding:** "formerly A1 Junk Removal of Omaha" in footer
- **Stats:** 253+ Five-Star Reviews, 40-60% less than national companies
- **Framework:** React + Vite, Tailwind CSS, deployed via Netlify with GitHub integration
- **Build:** pnpm, publish directory is `dist/public`
- **Design:** "Omaha Grit" — Navy (#0A1628), Safety Orange (#E8611A), White, Sage Green (#7A9E7E)

---

## DOMAIN SETUP

| Domain | Role | Status |
|---|---|---|
| a1junkremovalandtreeserviceofomaha.com | PRIMARY website | Nameservers updated at GoDaddy, DNS propagating |
| www.a1junkremovalandtreeserviceofomaha.com | Redirects to primary | Set up in Netlify |
| a1junkremovalofomaha.com | Old domain — needs 301 redirects to primary | NOT yet added to Netlify |
| a1junkremovalandtreeservice.com | Redirect to primary | Needs forwarding set up at GoDaddy |
| a1junkandtree.com | Short/easy domain for word-of-mouth | Needs forwarding set up at GoDaddy |

---

## REMAINING TASKS

### Task 1: Update Domain References in Code
Replace every instance of `a1junkremovalandtreeservice.com` with `a1junkremovalandtreeserviceofomaha.com` in the codebase. Known locations:
- `client/index.html` — canonical URL, og:url, JSON-LD LocalBusiness schema
- `client/public/robots.txt` — sitemap URL
- `client/src/components/StructuredData.tsx` — all JSON-LD schema URLs

### Task 2: Add 301 Redirects for Old Domain Migration
A complete redirect mapping exists at `/home/ubuntu/url-redirect-mapping.md`. It maps every URL from the old site (a1junkremovalofomaha.com) to the new site structure. Add these 301 redirect rules to `client/public/_redirects` ABOVE the SPA fallback rule. The file already has the exact Netlify syntax ready to copy.

### Task 3: Content Writing Workflow (Gemini)
The plan for writing/improving service page content:
1. User writes content using Google Gemini (or provides content from Gemini)
2. User gives the content to Manus
3. Manus integrates it into the site code on the correct service pages
4. Save checkpoint, export to GitHub, Netlify auto-deploys
The SEO outlines for every page (titles, keywords, meta descriptions, H-tag structure) are in `seo-sitemap-and-outlines.md`.

### Task 4: Replace 85-90 Placeholder Images
All service page hero images currently use a placeholder (nopicture.jpg). Full list of needed photos is in `photo-list.md`. User will provide actual photos when ready.

### Task 5: Set Up Domain Forwarding
- Forward a1junkremovalandtreeservice.com → a1junkremovalandtreeserviceofomaha.com (at GoDaddy)
- Forward a1junkandtree.com → a1junkremovalandtreeserviceofomaha.com (at GoDaddy)
- Add a1junkremovalofomaha.com as domain alias in Netlify (activates the 301 redirects from Task 2), then update its nameservers at GoDaddy to point to Netlify

### Task 6: Google Search Console Setup
- Add a1junkremovalandtreeserviceofomaha.com to Google Search Console
- Verify ownership via DNS
- Submit XML sitemap
- Use "Change of Address" tool for old domain (a1junkremovalofomaha.com)

### Task 7: Update Google Business Profile
- Go to business.google.com
- Update the Website field to https://a1junkremovalandtreeserviceofomaha.com

### Task 8: Update Directory Listings
Update website URL on all directories where the old URL appears:
- Yelp
- Homeyou
- BBB (Better Business Bureau)
- Facebook
- Any other directories

### Task 9: Future Pages to Add
These pages were identified in the SEO plan as future additions:
- Blog (/blog) — long-form content for informational queries
- Pricing Guide (/pricing) — targets "junk removal cost Omaha" queries
- Coupons/Deals (/coupons) — targets "junk removal coupons Omaha"

---

## KEY FILES

| File | Purpose |
|---|---|
| `seo-sitemap-and-outlines.md` | Complete SEO sitemap, page outlines, meta descriptions, keywords, H-tag structure for every page |
| `photo-list.md` | List of 85-90 placeholder image locations and required photo types |
| `/home/ubuntu/url-redirect-mapping.md` | Complete old-to-new URL redirect mapping with ready-to-use Netlify _redirects syntax |
| `/home/ubuntu/github-netlify-setup-guide.md` | Full GitHub + Netlify deployment and workflow guide |
| `client/public/_redirects` | Netlify redirects file (currently only has SPA fallback) |
| `client/index.html` | Has canonical URL, OG tags, JSON-LD that need domain update |
| `client/src/components/StructuredData.tsx` | Dynamic JSON-LD structured data with domain references |
| `client/src/lib/services-data.ts` | All service page data, business constants |
| `ideas.md` | Design philosophy ("Omaha Grit" approach) |

---

## UPDATE WORKFLOW (for future changes)

1. Make changes in Manus → save checkpoint
2. Go to Settings > GitHub in Manus Management UI → click Export
3. Netlify auto-detects the GitHub update and re-deploys in 60-90 seconds
4. Site is live with changes

---

## USER RULES (MUST FOLLOW)

1. Use **exact on-screen terminology** when giving instructions — never paraphrase button names or menu items
2. **Local SEO is the #1 priority** — every decision should favor local search rankings
3. When comparing items, use a **3-column table** with manual line breaks to prevent horizontal scrolling
4. Use "for example" or "might" when data is not verified as current fact
5. Only provide citations when specifically asked
6. Before high-credit tasks (3+ browser navigations, multi-source research): summarize plan, state it's high-credit, and WAIT for "Proceed"
7. When asking a question, STOP and wait for answer — do not continue
8. If a task would be more efficient with browser takeover, proactively offer it
9. When user asks "Can you do X?" — answer the question only, do NOT start doing it
10. The user's Google Drive folder: https://drive.google.com/drive/folders/1g0-xzS62Na6gRB3p2eEN8CECwLudeULt?usp=sharing
