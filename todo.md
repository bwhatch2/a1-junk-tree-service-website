# A1 Website Audit Fix Tracker

## Batch 1: Quick Wins (Low effort, all 88 pages)
- [ ] Add `defer` to main.js script tag
- [ ] Add skip-navigation link for accessibility
- [ ] Fix empty alt text on 25 content images (tree service + landscaping pages)

## Batch 2: Broken Links
- [ ] Fix 25 broken internal links on apartment-cleanouts page
- [ ] Fix 25 broken internal links on house-cleanout-services page
- [ ] Fix 1 broken link (/backyard-cleanup) on 3 landscaping pages

## Batch 3: Tailwind CDN Replacement
- [ ] Scan all HTML for Tailwind utility classes used
- [ ] Generate pre-built CSS with only used classes
- [ ] Replace CDN script tag with local CSS file on all 88 pages
- [ ] Verify styling is preserved

## Batch 4: Meta & Headers
- [ ] Create/add favicon
- [ ] Add og:image meta tag to all 88 pages
- [ ] Create Netlify _headers file with security headers
- [ ] Add caching headers for static assets

## Batch 5: Title/Description Length
- [ ] Trim ~40 titles to under 60 characters
- [ ] Trim ~24 meta descriptions to under 160 characters

## Batch 6: Minification
- [ ] Minify style.css
- [ ] Minify main.js

## Not fixing now (future/requires user action):
- Analytics tracking (requires Google account setup)
- manuscdn.com images (only 2 pages, needs re-upload)
- Responsive images (future, when real photos replace placeholders)
- Flower bed text references (natural text, not broken links)
