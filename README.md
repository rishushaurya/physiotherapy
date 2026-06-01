# Anand Physiotherapy Centre

A high-performance, mobile-first, secure, and search-optimized single-page web application built for **Dr. Ayush Anand's Anand Physiotherapy Centre** in Patna, Bihar.

## Features

- 🌐 **Dynamic Bilingual Engine**: Instantly switch between English and हिन्दी (Hindi). Prefers user preference using local storage, featuring a beautiful frosted-glass language modal on first visit.
- 📱 **Mobile-First Responsive Layout**: Designed using custom CSS tokens to scale beautifully across all screen viewports (from 375px mobile screens to wide desktop monitors) with zero horizontal scrollbars.
- 🔒 **Contact Obfuscation**: Direct phone numbers are encrypted and assembled dynamically in memory at runtime to prevent automated scraper bots from gathering doctor contact details.
- 🩺 **Patient Success Gallery**: Custom animated responsive photo grid showcasing treated patients and recovery stories.
- 🗺 **Patna Location Linkings**: Integrated target map searches for key clinic service areas (Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, Gola Road).
- 🍪 **Privacy Compliant**: Double-opt-in cookie consent banner managing GDPR-compliant Google Analytics 4 tracking scripts.
- ⚡ **Performance Optimized**: Zero dependency frameworks or heavy bundle sizes (< 2 second load times on 4G networks).

## Project Structure

```
├── assets/                  # Core vector icons and static assets
├── images/
│   ├── ayush anand/         # Doctor photo sets (Chief profile and therapy session)
│   └── patients/            # Patient treatment success stories photos
├── index.html               # Main website entry point
├── style.css                # Base styling, layout utilities, and animations
├── main.js                  # Obfuscation, analytics, language switching, and UI effects
├── privacy-policy.html      # IT Act 2000 & 2011 compliant privacy policies
├── disclaimer.html          # Medical disclaimer and emergency warnings
├── terms.html               # Terms of use page
├── robots.txt               # SEO crawling instructions
└── netlify.toml             # Security and CSP header parameters
```

## Deployment & Hosting

### Deploying to Vercel

The site is configured as a static workspace. You can deploy it to Vercel instantly using either:
1. **GitHub integration**: Connect the repository to Vercel via dashboard for automatic builds.
2. **Vercel CLI**: Run `vercel` in the project root.
