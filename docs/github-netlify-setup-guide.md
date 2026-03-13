# GitHub + Netlify Deployment Guide

## A1 Junk Removal and Tree Service Website

This guide walks you through exporting your website from Manus to GitHub, deploying it on Netlify, connecting your custom domains, and setting up the workflow for future updates.

---

## Part 1: Export Your Code to GitHub

### Step 1: Create a GitHub Account (if you don't have one)

Go to [github.com](https://github.com) and sign up for a free account. Use your business email if possible. Choose a username that's professional (e.g., `a1junkremoval` or your name).

### Step 2: Export from Manus to GitHub

1. Open the **Management UI** panel in Manus (the panel on the right side of your screen).
2. Click on **Settings** in the Management UI.
3. Click on **GitHub** in the settings sidebar.
4. Click **Connect GitHub** and authorize Manus to access your GitHub account.
5. Once connected, choose your GitHub account as the **Owner**.
6. Enter a **Repository Name** — use something like `a1-junk-tree-service-website`.
7. Click **Export** — Manus will push all the website code to your new GitHub repository.
8. You can verify by going to `github.com/YOUR-USERNAME/a1-junk-tree-service-website` — you should see all the project files there.

---

## Part 2: Set Up Netlify

### Step 3: Create a Netlify Account

1. Go to [netlify.com](https://www.netlify.com).
2. Click **Sign Up**.
3. Choose **Sign up with GitHub** — this is the easiest option because it automatically connects your GitHub account.
4. Authorize Netlify to access your GitHub repositories.

### Step 4: Create a New Site from GitHub

1. In the Netlify dashboard, click **"Add new site"**.
2. Select **"Import an existing project"**.
3. Choose **GitHub** as the Git provider.
4. Find and select your `a1-junk-tree-service-website` repository from the list.
5. Netlify will show you the build settings. Configure them as follows:

| Setting | Value |
|---|---|
| **Branch to deploy** | `main` |
| **Build command** | `pnpm run build` |
| **Publish directory** | `dist/public` |

6. Before clicking Deploy, click **"Show advanced"** and add this environment variable:

| Key | Value |
|---|---|
| `NODE_VERSION` | `22` |

7. Click **"Deploy site"**.
8. Netlify will build and deploy your site. This takes about 1-2 minutes.
9. Once complete, Netlify gives you a temporary URL like `random-name-12345.netlify.app` — click it to verify your site is live.

---

## Part 3: Connect Your Custom Domains

### Step 5: Add Your Primary Domain

1. In Netlify, go to **Site configuration** (or **Site settings**) > **Domain management**.
2. Click **"Add a domain"**.
3. Enter your primary domain: `a1junkremovalandtreeservice.com`
4. Click **Verify** and then **Add domain**.
5. Netlify will show you DNS configuration instructions.

### Step 6: Update Your DNS Settings

You have two options for DNS configuration. Option A is recommended.

**Option A: Use Netlify DNS (Recommended)**

1. Netlify will provide you with nameservers (they look like `dns1.p01.nsone.net`, etc.).
2. Go to your domain registrar (GoDaddy, Namecheap, etc.) where you purchased `a1junkremovalandtreeservice.com`.
3. Find the **DNS settings** or **Nameservers** section.
4. Replace the existing nameservers with the ones Netlify provided.
5. Save the changes.
6. DNS propagation takes 15 minutes to 48 hours (usually under 1 hour).

**Option B: Use a CNAME Record (if you prefer to keep your current DNS provider)**

1. Go to your domain registrar's DNS management.
2. Add a **CNAME record**:
   - **Host/Name:** `www`
   - **Value/Points to:** Your Netlify site URL (e.g., `random-name-12345.netlify.app`)
3. For the root domain (no www), you may need an **A record** or **ALIAS record** pointing to Netlify's load balancer IP: `75.2.60.5`
4. Save the changes.

### Step 7: Add the www Version

1. Back in Netlify Domain management, click **"Add a domain"** again.
2. Enter `www.a1junkremovalandtreeservice.com`.
3. Netlify will automatically set up a redirect between the www and non-www versions.

### Step 8: Enable HTTPS/SSL

1. In Netlify Domain management, scroll down to **HTTPS**.
2. Click **"Verify DNS configuration"** (wait until DNS has propagated).
3. Click **"Provision certificate"** — Netlify provides free SSL via Let's Encrypt.
4. Your site is now accessible via `https://a1junkremovalandtreeservice.com`.

---

## Part 4: Set Up Redirect Domains

### Step 9: Redirect Your Other Domains

For each of your other domains, you want them to 301 redirect to your primary domain. You can do this two ways:

**Method A: Add them all to Netlify (Easiest)**

1. In Netlify Domain management, click **"Add a domain"** for each:
   - `a1junkremovalofomaha.com`
   - `www.a1junkremovalofomaha.com`
   - `a1junkremovalandtreeserviceofomaha.com`
   - `www.a1junkremovalandtreeserviceofomaha.com`
   - `a1junkandtree.com`
   - `www.a1junkandtree.com`
2. For each domain, update the DNS/nameservers at your registrar to point to Netlify (same process as Step 6).
3. Netlify automatically redirects all secondary domains to your primary domain.

**Method B: Set up redirects at your domain registrar**

Most registrars (GoDaddy, Namecheap) offer a "URL Forwarding" or "Redirect" feature in their DNS settings. Set each domain to forward to `https://a1junkremovalandtreeservice.com` with a **301 (Permanent)** redirect.

---

## Part 5: Future Updates Workflow

This is how you'll update your live site going forward.

### When Manus Makes Changes:

1. We work on updates together in Manus (new content, design tweaks, new pages, etc.).
2. I save a checkpoint when the changes are ready.
3. You go to **Settings > GitHub** in the Management UI.
4. Click **Export** again — this pushes the updated code to your GitHub repository.
5. Netlify automatically detects the GitHub update and re-deploys your site within 60-90 seconds.
6. Your live site is updated. No manual steps needed beyond the export.

### When You Make Content Changes (e.g., from Gemini):

1. You provide me with the new content (text, FAQ answers, etc.).
2. I integrate it into the site code.
3. I save a checkpoint.
4. You export to GitHub.
5. Netlify auto-deploys.

---

## Part 6: Important Settings to Configure

### Netlify Redirects for Client-Side Routing

I will add a `_redirects` file to the project before you deploy. This file tells Netlify to serve your React app correctly for all URLs. Without it, directly visiting a page like `/services/hot-tub-removal` would show a 404 error. This is already handled — no action needed from you.

### Google Search Console

After your site is live on the new domain:

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Click **"Add property"**.
3. Enter `a1junkremovalandtreeservice.com`.
4. Verify ownership (Netlify DNS makes this easy — choose the DNS verification method).
5. Submit your sitemap URL: `https://a1junkremovalandtreeservice.com/sitemap`.
6. If you had the old domain in Search Console, use the **"Change of Address"** tool to tell Google about the domain move.

### Update Your Google Business Profile

1. Go to [business.google.com](https://business.google.com).
2. Edit your business information.
3. Update the **Website** field to `https://a1junkremovalandtreeservice.com`.

### Update Directory Listings

Over the next few weeks, update your website URL on:
- Yelp
- Homeyou
- BBB (Better Business Bureau)
- Facebook
- Any other directories where your old URL appears

---

## Quick Reference

| Item | Value |
|---|---|
| **Primary Domain** | a1junkremovalandtreeservice.com |
| **Redirect Domain 1** | a1junkremovalofomaha.com |
| **Redirect Domain 2** | a1junkremovalandtreeserviceofomaha.com |
| **Redirect Domain 3** | a1junkandtree.com |
| **Build Command** | `pnpm run build` |
| **Publish Directory** | `dist/public` |
| **Node Version** | 22 |
| **GitHub Repository** | a1-junk-tree-service-website |

---

## Need Help?

If you get stuck on any step, screenshot what you're seeing and send it to me. I can walk you through it.
