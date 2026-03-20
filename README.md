# A1 Junk Removal & Tree Service — Static HTML Website

This is a **pure static HTML website** with no React, no build step, and no SPA.

## Structure

```
public/
├── index.html                 (homepage)
├── about/index.html
├── contact/index.html
├── [89 total service pages]
├── assets/
│   ├── css/
│   │   ├── tailwind.css      (Tailwind utilities)
│   │   └── style.min.css     (custom styles)
│   ├── js/
│   │   └── main.min.js       (vanilla JavaScript)
│   └── images/
├── _redirects                 (Netlify redirects)
├── _headers                   (security headers)
├── sitemap.xml
└── robots.txt
```

## Key Features

- **Pure Static HTML** — All content visible in view source
- **No React, no SPA, no build step** — Just HTML + CSS + vanilla JS
- **89 pages** — Homepage, services, about, contact, etc.
- **SEO-optimized** — Schema markup, meta tags, canonical URLs
- **Mobile-responsive** — Tailwind CSS + custom styles
- **Fast** — No JavaScript framework overhead

## Deployment

Deploy the `public/` folder to Netlify. No build process required.

## Development

Edit HTML files directly in the `public/` folder. CSS is in `public/assets/css/`. JavaScript is in `public/assets/js/`.
