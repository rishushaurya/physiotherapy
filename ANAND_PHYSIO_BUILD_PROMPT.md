# MASTER BUILD PROMPT — ANAND PHYSIOTHERAPY CENTRE WEBSITE
# Version: 1.0 | Created for: Dr. Ayush Anand | Location: Patna, Bihar, India
# Any AI reading this file can build the complete project from scratch with zero additional context.

---

## CRITICAL RULES FOR ALL AI WORKERS

1. Read this entire file before writing a single line of code.
2. Build every chunk in the exact order listed. Do not skip or reorder.
3. Every CSS value must be a CSS variable — no hardcoded colors, sizes, or fonts anywhere.
4. Mobile-first always. Build for 375px screen first, then scale up. 90% of patients are on phones.
5. No fake data, no placeholder reviews. Mark anything unconfirmed clearly with `<!-- PENDING: description -->`.
6. No guaranteed cure claims, no "100% results" language anywhere — this is a medical website under Indian IT Act 2011.
7. Phone number must NEVER appear as plain text in HTML. Always use the obfuscation system defined in Chunk 03.
8. Google Analytics must NOT fire until the cookie consent banner is accepted by the user.
9. Every image must have a descriptive alt tag in Hindi and English.
10. WhatsApp button must be visible and tappable on every scroll position on mobile.
11. Page must load under 2 seconds on a 4G connection. No heavy libraries. No unnecessary JavaScript.
12. Do not use WordPress, React, Vue, or any framework. Pure HTML + CSS + Vanilla JS only. One file deployment.
13. After completing each chunk, run the verification steps listed at the bottom of that chunk before moving on.
14. UI can be redesigned at any time — all values are tokens. Never hardcode visual properties.

---

## PROJECT IDENTITY

| Field | Value |
|---|---|
| Project Name | Anand Physiotherapy Centre Website |
| Doctor | Dr. Ayush Anand, BPT |
| Clinic | Anand Physiotherapy Centre |
| Location | Ashiana Nagar, Near Hanuman Mandir, Patna, Bihar |
| Target Audience | Patients in Patna seeking physiotherapy — primarily mobile users |
| Primary Language | Hindi (Devanagari script) with English for medical terms and SEO |
| Primary Goal | Convert visitors into WhatsApp/call contacts — no checkout, no login, no database |
| Tech Stack | Static HTML + CSS + Vanilla JS, deployed free on Netlify |
| Total Files | 1 main HTML file + 1 CSS file + 1 JS file + 3 legal HTML pages |
| Hosting Cost | ₹0 (Netlify free tier) |
| Domain | To be purchased: anandphysiotherapy.in (approx ₹500-800/yr) |

---

## CONFIRMED CLINIC DATA (Use exactly as provided — do not invent or change)

| Field | Value |
|---|---|
| Doctor Name | Dr. Ayush Anand |
| Qualification | BPT (Bachelor of Physiotherapy) |
| Experience | 4 Years |
| Clinic Name | Anand Physiotherapy Centre |
| Address | Ashiana Nagar, Near Hanuman Mandir, Patna, Bihar |
| Timing | Monday to Sunday: 7:00 AM – 10:00 PM |
| WhatsApp | 8544154316 (OBFUSCATED — never plain text in HTML) |
| Phone | 8544154316 (OBFUSCATED — never plain text in HTML) |
| Patients Treated | 500+ |
| Fees | Varies by case — do not show a fixed price |
| Registration No. | <!-- PENDING: Ask Dr. Ayush to check BPT certificate. Add to footer when confirmed. --> |
| Doctor Photo | <!-- PENDING: Upload photo. Use professional placeholder until received. --> |

### Home Visit Areas (All 8 — list every one):
Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, Gola Road

### Conditions Treated (All — use these exact Hindi + English labels):
- Sports Injuries / खेल चोटें
- Back & Neck Pain / कमर और गर्दन दर्द
- Post-Surgery Rehabilitation / ऑपरेशन के बाद पुनर्वास
- Elderly Care & Joint Pain / बुजुर्गों की देखभाल और जोड़ों का दर्द
- Paralysis Rehabilitation / लकवे का इलाज
- Neurological Conditions / नसों की समस्याएं
- Knee & Shoulder Pain / घुटने और कंधे का दर्द
- General Pain Management / सामान्य दर्द प्रबंधन

---

## COMPLETE FILE MAP

```
project-root/
├── index.html          — Main single-page website (all 9 sections)
├── style.css           — All styles using CSS variables only
├── main.js             — Phone obfuscation, cookie consent, analytics, scroll effects
├── privacy-policy.html — Privacy policy (IT Act 2011 compliant)
├── disclaimer.html     — Medical disclaimer (liability protection)
├── terms.html          — Terms of use
└── assets/
    └── doctor.jpg      — PENDING: Doctor photo (placeholder until received)
```

---

## BUILD ORDER (Follow exactly — each chunk depends on the previous)

| Chunk | Name | Depends On | Parallel OK | Status |
|---|---|---|---|---|
| 00 | Design Tokens + CSS Variables | Nothing | No | [ ] |
| 01 | HTML Skeleton + Head + SEO | 00 | No | [ ] |
| 02 | Navbar + Hero Section | 01 | No | [ ] |
| 03 | Phone Obfuscation System | 01 | No | [ ] |
| 04 | About + How It Works Sections | 02, 03 | No | [ ] |
| 05 | Services + Home Visit Areas | 04 | No | [ ] |
| 06 | Patient Reviews + FAQ | 05 | No | [ ] |
| 07 | Footer + Legal Pages | 06 | No | [ ] |
| 08 | Google Analytics + Cookie Consent | 07 | No | [ ] |
| 09 | WhatsApp Float + Scroll Effects + Final Polish | 08 | No | [ ] |
| 10 | Verification + Netlify Deploy Instructions | 09 | No | [ ] |

---

## DESIGN SYSTEM (All values defined here — never hardcode anywhere else)

### Color Tokens
```css
:root {
  --color-primary: #1558C0;        /* Medical blue — main CTAs, headings */
  --color-primary-dark: #0D3E8A;   /* Hover states, footer */
  --color-secondary: #00A896;      /* Teal — trust badges, icons, accents */
  --color-secondary-light: #E6F7F5;/* Light teal — card backgrounds */
  --color-white: #FFFFFF;
  --color-bg: #F8FAFB;             /* Off-white page background */
  --color-text: #1A1A2E;           /* Primary text */
  --color-text-muted: #5A6270;     /* Secondary text, captions */
  --color-border: #E2E8F0;         /* Dividers, card borders */
  --color-success: #22C55E;        /* Star ratings, positive badges */
  --color-whatsapp: #25D366;       /* WhatsApp button only */
  --color-whatsapp-dark: #1DA851;  /* WhatsApp hover */
  --color-overlay: rgba(21,88,192,0.06); /* Section tint */
}
```

### Typography Tokens
```css
:root {
  --font-primary: 'Hind', sans-serif;     /* Supports Hindi Devanagari + Latin */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.25;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.75;
}
```

### Spacing Tokens
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --section-padding: var(--space-16) var(--space-4); /* mobile default */
}
```

### Component Tokens
```css
:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
  --shadow-card: 0 2px 12px rgba(21,88,192,0.08);
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --max-width: 1100px;
  --nav-height: 64px;
}
```

---

## SECTION-BY-SECTION SPECIFICATIONS

---

### CHUNK 00 — GOOGLE FONTS IMPORT
Load only what is needed. Add to `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&display=swap" rel="stylesheet">
```
Hind supports Devanagari (Hindi) and Latin. No other font library needed.

---

### CHUNK 01 — HTML HEAD + SEO META TAGS

Complete `<head>` block required:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#1558C0">

<!-- SEO -->
<title>Physiotherapist in Patna | Home Visit & Online Consultation | Dr. Ayush Anand</title>
<meta name="description" content="Patna के विश्वसनीय Physiotherapist Dr. Ayush Anand। घर पर Physiotherapy, Online Consultation, और Clinic Visit। Ashiana Nagar, Boring Road, Kankarbagh में Home Visit उपलब्ध। अभी WhatsApp करें।">
<meta name="keywords" content="physiotherapist in patna, home visit physiotherapy patna, back pain doctor patna, physiotherapy ashiana nagar, Dr Ayush Anand physiotherapist, online physiotherapy consultation patna, knee pain treatment patna, sports injury patna">
<meta name="author" content="Dr. Ayush Anand">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://anandphysiotherapy.in/">

<!-- Open Graph (for WhatsApp/Facebook link previews) -->
<meta property="og:title" content="Dr. Ayush Anand — Physiotherapist in Patna">
<meta property="og:description" content="घर पर Physiotherapy उपलब्ध। 500+ संतुष्ट मरीज़। अभी WhatsApp करें।">
<meta property="og:type" content="website">
<meta property="og:url" content="https://anandphysiotherapy.in/">
<meta property="og:locale" content="hi_IN">

<!-- Schema Markup (LocalBusiness + Physician — tells Google exactly who this is) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "name": "Anand Physiotherapy Centre",
  "description": "Professional physiotherapy clinic offering home visits and online consultations in Patna",
  "url": "https://anandphysiotherapy.in",
  "telephone": "OBFUSCATED_DO_NOT_EXPOSE",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Hanuman Mandir, Ashiana Nagar",
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "800025",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.5941",
    "longitude": "85.1376"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "22:00"
  }],
  "medicalSpecialty": "Physiotherapy",
  "priceRange": "Varies by case"
}
</script>
```

NOTE: Do NOT put the actual phone number in schema markup. Omit or use a generic placeholder. The obfuscation system in Chunk 03 is the only place the number exists.

---

### CHUNK 02 — NAVBAR

Requirements:
- Fixed to top, `z-index: 1000`
- Height: `var(--nav-height)` = 64px
- Logo: Text-based — "⚕ Anand Physiotherapy Centre" styled with `--color-primary`
- Right side: Single CTA button — "Appointment लें" — opens WhatsApp (uses obfuscated link from Chunk 03)
- On mobile: Logo left, button right — no hamburger menu needed (single page, no nav links)
- Adds `box-shadow: var(--shadow-sm)` on scroll via JS class toggle
- Background: `var(--color-white)` with subtle bottom border

---

### CHUNK 02B — HERO SECTION

This is the most important section. Every element must push toward WhatsApp contact.

Requirements:
- Background: White with a subtle blue radial gradient in top-right corner
- Layout on mobile: Stacked — text first, then doctor photo below
- Layout on desktop: Two columns — text left, photo right
- Doctor photo: Circular or soft-rounded card shape, subtle blue border glow — `<!-- PENDING: doctor.jpg -->`
- Trust badges row (3 badges, horizontal scroll on mobile):
  - "500+ संतुष्ट मरीज़"
  - "4 साल का अनुभव"
  - "Home Visit उपलब्ध"
- Main heading (H1): "घर बैठे पाएं दर्द से राहत" — large, bold, `--color-text`
- Subheading: "Patna के विश्वसनीय Physiotherapist — Online Consultation और Home Visit"
- Doctor name line: "Dr. Ayush Anand | BPT | Anand Physiotherapy Centre, Ashiana Nagar"
- Two CTA buttons (full width on mobile, side by side on desktop):
  - Primary: WhatsApp button — green (`--color-whatsapp`), WhatsApp SVG icon + "WhatsApp करें"
  - Secondary: Call button — outlined blue, phone SVG icon + "Call करें"
- Both buttons use the obfuscated contact system from Chunk 03
- Small reassurance line below buttons: "सोमवार से रविवार | सुबह 7 बजे से रात 10 बजे तक"

---

### CHUNK 03 — PHONE NUMBER OBFUSCATION SYSTEM (CRITICAL SECURITY)

This system must be implemented in `main.js`. The actual digits must NEVER appear as readable text in HTML source.

#### Method: Split encoding with JS assembly
```javascript
// Split the number into non-obvious parts. Never store as full string.
// These parts look meaningless without context.
const _p = ['85', '44', '15', '43', '16'];
const _n = () => _p.join('');
const _wa = () => `https://wa.me/91${_n()}?text=${encodeURIComponent('नमस्ते Dr. Ayush, मेरा नाम ___ है। मेरी समस्या ___ है। मुझे appointment चाहिए।')}`;
const _tel = () => `tel:+91${_n()}`;
```

#### WhatsApp Pre-filled Message (exact text):
```
नमस्ते Dr. Ayush, मेरा नाम ___ है। मेरी समस्या ___ है। मुझे appointment चाहिए।
```
Patient fills in their name and problem before sending. Doctor gets full context instantly.

#### "Show Number" Button Behavior:
- Button shows "📞 नंबर देखें"
- On click: assembles number from parts, replaces button with clickable `tel:` link
- Number is shown only for the session, never written to DOM as static text
- On desktop: number appears in place; on mobile: triggers direct call via `tel:`

#### Apply to ALL contact elements:
- Navbar "Appointment लें" button → WhatsApp link
- Hero WhatsApp button → WhatsApp link
- Hero Call button → tel link with show-number behavior
- Floating WhatsApp button → WhatsApp link
- Footer contact section → show-number button

---

### CHUNK 04 — ABOUT THE DOCTOR SECTION

Section heading: "Dr. Ayush Anand के बारे में"

Content requirements:
- Doctor's photo (left on desktop, top on mobile)
- Qualification badge: "BPT — Bachelor of Physiotherapy"
- Experience badge: "4 साल का अनुभव"
- A warm 3-4 line bio in Hindi explaining his approach:
  - He believes in treating the root cause, not just the pain
  - He comes to your home so you don't have to travel when you're in pain
  - He's treated 500+ patients across Patna
  - He takes online calls to first understand the problem before visiting
- Registration number line: `<!-- PENDING: Add registration number here when confirmed by Dr. Ayush -->`
- End with a single WhatsApp CTA: "आज ही consultation लें"

---

### CHUNK 04B — HOW IT WORKS SECTION

Section heading: "कैसे काम करता है?"
Subheading: "3 आसान कदम — दर्द से राहत तक"

3 steps, displayed as numbered cards (horizontal on desktop, vertical on mobile):

| Step | Icon (SVG) | Hindi Heading | Hindi Description |
|---|---|---|---|
| 1 | Phone/WhatsApp | WhatsApp या Call करें | अपनी समस्या बताएं — Dr. Ayush आपकी बात सुनेंगे |
| 2 | Video/Laptop | Online Consultation | Video call पर diagnosis और treatment plan बनेगा |
| 3 | House/Location | Home Visit (जरूरत पड़ने पर) | Dr. Ayush आपके घर आकर treatment करेंगे |

Connecting arrows between steps on desktop. On mobile: vertical timeline style.
CTA below: "अभी शुरू करें — WhatsApp करें"

---

### CHUNK 05 — SERVICES SECTION

Section heading: "हम किन समस्याओं का इलाज करते हैं?"

8 service cards in a responsive grid (2 columns mobile, 4 columns desktop):
Each card: SVG icon (medical, not emoji) + Hindi name + English name below it

Services (use confirmed list from Project Identity section above — all 8).

Card design:
- White background, `var(--shadow-card)`, `var(--radius-md)`
- Icon in `--color-secondary` teal circle
- Hover: slight upward translate, shadow increases
- Tap on mobile: brief scale pulse

Highlight two cards differently (blue border + badge):
- "Online Consultation" — badge: "घर बैठे"
- "Home Visit" — badge: "Patna में"

---

### CHUNK 05B — HOME VISIT AREAS SECTION

Section heading: "Home Visit उपलब्ध है इन areas में"
Background: `--color-overlay` light blue tint

Layout: Pills/tags grid — all 8 areas as clickable location pills
Each pill: location pin SVG icon + area name
On click: opens Google Maps search for that area + "physiotherapist"

Areas (all 8 confirmed): Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, Gola Road

Below pills: "आपका area इस list में नहीं है? WhatsApp पर पूछें →" (links to WhatsApp)

---

### CHUNK 06 — PATIENT REVIEWS SECTION

Section heading: "मरीज़ों की राय"
Star summary badge: "★★★★★ — 500+ संतुष्ट मरीज़"

IMPORTANT RULE: Do NOT invent fake reviews. Use this placeholder structure:
```html
<!-- PENDING: Replace with real patient reviews from Dr. Ayush.
     Collect via: Ask patients to send a WhatsApp message with their name,
     area, and what they felt. 4-6 reviews minimum before launch.
     Format needed: Name, Area, Star rating (1-5), Review text in Hindi -->
```

Show a visually complete review card layout with 5 PENDING slots already styled.

Each review card contains:
- Star rating (5 yellow stars SVG)
- Review text in Hindi (PENDING placeholder)
- Patient name + area (PENDING placeholder)
- "Verified Patient" badge in teal

Carousel on mobile (swipeable), grid on desktop (3 columns).

---

### CHUNK 06B — FAQ SECTION

Section heading: "अक्सर पूछे जाने वाले सवाल"

6 FAQ items as accordion (click to expand — CSS only, no JS needed):

| Question (Hindi) | Answer (Hindi) |
|---|---|
| क्या online consultation से सच में फायदा होता है? | हाँ — Dr. Ayush पहले आपकी पूरी समस्या समझते हैं, फिर सही treatment plan बनाते हैं। कई cases में online guidance से ही राहत मिल जाती है। |
| Home visit में कितना charge लगता है? | Fees हर case के हिसाब से अलग होती है। WhatsApp पर बात करके exact जानकारी लें। |
| क्या पहले consultation के लिए clinic आना जरूरी है? | नहीं। आप WhatsApp या call पर directly appointment ले सकते हैं। |
| Patna के किन areas में home visit होती है? | Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, और Gola Road में home visit उपलब्ध है। |
| क्या आप sports injury का इलाज करते हैं? | हाँ — Dr. Ayush sports injuries, muscle strains, ligament injuries सभी का इलाज करते हैं। |
| Clinic का timing क्या है? | सोमवार से रविवार, सुबह 7:00 बजे से रात 10:00 बजे तक। Appointment पहले से लेना जरूरी है। |

Accordion: Pure CSS using `<details>` + `<summary>` — no JavaScript needed.

---

### CHUNK 07 — FOOTER

Four columns on desktop, stacked on mobile:

**Column 1 — Clinic Info:**
- Logo text: "Anand Physiotherapy Centre"
- Address: Near Hanuman Mandir, Ashiana Nagar, Patna, Bihar
- Timing: Mon–Sun | 7:00 AM – 10:00 PM
- Registration: `<!-- PENDING: Reg No. --> BPT Registration: [Confirm with Dr. Ayush]`

**Column 2 — Quick Links:**
- Services
- How It Works
- Home Visit Areas
- FAQ

**Column 3 — Legal:**
- Privacy Policy (links to privacy-policy.html)
- Medical Disclaimer (links to disclaimer.html)
- Terms of Use (links to terms.html)

**Column 4 — Contact:**
- WhatsApp button (obfuscated)
- "Show Number" button (obfuscated)
- Google Maps link: "Clinic में कैसे पहुँचें?"

**Bottom bar:**
- "© 2024 Anand Physiotherapy Centre. All rights reserved."
- "Website content is for informational purposes only and does not constitute medical advice."

---

### CHUNK 07B — THREE LEGAL PAGES

All three pages must be separate HTML files with the same design as the main site (same navbar, footer, CSS).

#### privacy-policy.html
Must cover under Indian IT Act 2000 + IT (Amendment) Act 2008 + IT Rules 2011:
- What data is collected: Only Google Analytics (anonymised, no personal data stored on server)
- No contact form = no personal data collected by the website itself
- WhatsApp communications are governed by WhatsApp's privacy policy (link it)
- Google Analytics data: page views, device type, city-level location — no names, no phone numbers
- Cookie usage: Google Analytics cookies only, loaded AFTER consent
- User rights: Can refuse cookies via the consent banner
- Contact for privacy queries: via WhatsApp (obfuscated link)
- Effective date and "last updated" date

#### disclaimer.html
Medical disclaimer — CRITICAL for liability protection:
- Content on this website is for general informational purposes only
- It is NOT a substitute for professional medical diagnosis or treatment
- Do not delay seeking medical advice because of something read on this website
- Results may vary — no guaranteed outcomes are implied or stated
- Dr. Ayush Anand is a qualified BPT physiotherapist but this website does not constitute a doctor-patient relationship until a formal consultation is conducted
- Emergency disclaimer: For medical emergencies, call 108 immediately

#### terms.html
Terms of use:
- Website is for informational purposes and appointment initiation only
- Users must not misuse contact channels
- All content is copyright of Anand Physiotherapy Centre
- Testimonials are from real patients and are used with implied consent
- Fees are subject to change and must be confirmed directly with the clinic
- Governing law: Laws of India, jurisdiction: Patna, Bihar

---

### CHUNK 08 — GOOGLE ANALYTICS + COOKIE CONSENT

#### Cookie Consent Banner (must appear on first visit, bottom of screen):
```
हम Google Analytics उपयोग करते हैं ताकि website को बेहतर बना सकें।
कोई personal data collect नहीं होता।
[ठीक है, मंजूर है]  [नहीं, धन्यवाद]
```

Rules:
- Banner appears BEFORE Analytics loads
- If user clicks accept: set `localStorage.setItem('cookie_consent', 'accepted')`, then load GA
- If user clicks decline: set `localStorage.setItem('cookie_consent', 'declined')`, never load GA
- On subsequent visits: check localStorage, load GA only if accepted
- Banner must not block content — fixed to bottom, 80px height max
- Must be dismissible and readable on 375px screens

#### Google Analytics 4 Setup:
```html
<!-- Load ONLY after consent. Injected by main.js consent system. -->
<!-- Replace G-XXXXXXXXXX with actual GA4 Measurement ID -->
```

GA events to track (fire these on user actions):
- `whatsapp_click` — when any WhatsApp button is tapped
- `call_click` — when call button is tapped or number is revealed
- `page_scroll_50` — when user scrolls past 50% of page
- `page_scroll_90` — when user scrolls past 90% of page

These 4 events tell Dr. Ayush exactly how many people are trying to contact him.

---

### CHUNK 09 — FLOATING WHATSAPP BUTTON

The most important conversion element on mobile. Requirements:
- Fixed position: bottom-right, `bottom: 24px`, `right: 20px`
- Size: 60px × 60px circle on mobile, 56px on desktop
- Color: `--color-whatsapp` green
- Icon: Official WhatsApp SVG logo (white on green)
- Shadow: `0 4px 20px rgba(37, 211, 102, 0.4)` — green glow
- Pulse animation: Subtle scale pulse every 3 seconds to draw attention
- Tooltip on desktop hover: "WhatsApp पर Appointment लें"
- Hides when user is within 200px of hero section's WhatsApp button (no duplicate visible)
- `aria-label="WhatsApp पर appointment लें"` for accessibility
- Uses obfuscated WhatsApp link from Chunk 03

---

### CHUNK 09B — SCROLL EFFECTS + FINAL POLISH

Scroll effects (CSS + minimal JS — no libraries):
- Navbar: gains shadow on scroll past 80px
- Section headings: fade-in + slide-up when entering viewport (IntersectionObserver)
- Service cards: stagger fade-in (each card 100ms delay after previous)
- Trust badges in hero: count-up animation (500+, 4 years) on first viewport entry
- Review cards: fade-in from sides

Performance rules:
- All animations use `transform` and `opacity` only — never animate `height`, `width`, `top`, `left`
- `will-change: transform` only on elements that actually animate
- Lazy load doctor photo: `loading="lazy"`
- All SVG icons inline — no icon font library, no external icon requests

Accessibility:
- All interactive elements have `:focus-visible` styles in `--color-primary`
- Minimum tap target size: 44px × 44px (all buttons)
- Color contrast: All text meets WCAG AA (4.5:1 minimum)
- `lang="hi"` on `<html>` tag
- Skip-to-main-content link for screen readers

---

## MOBILE RESPONSIVENESS RULES (Non-negotiable)

Build mobile-first. Every layout decision starts at 375px.

```css
/* Base styles: 375px mobile */

/* Tablet */
@media (min-width: 640px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1280px) { }
```

Mobile-specific requirements:
- Floating WhatsApp button never overlaps other tappable elements
- All font sizes minimum 16px for body text (prevents iOS zoom on input focus)
- Touch targets minimum 44px height
- Horizontal scroll must NEVER occur on any screen width
- Hero section: doctor photo below text on mobile (not side by side)
- Service cards: 2 columns on mobile (not 1, not 4)
- FAQ accordion: full-width tap area (not just the text)
- Cookie banner: full width, readable, two buttons side by side with enough padding
- Footer: single column on mobile, readable without zooming

---

## SEO CHECKLIST (Verify before launch)

- [ ] `<title>` contains "Physiotherapist in Patna" + doctor name
- [ ] `<meta name="description">` is 150-160 characters, contains Hindi and "Patna"
- [ ] H1 tag exists and is unique on the page
- [ ] H2 tags used for all section headings
- [ ] All images have descriptive `alt` attributes
- [ ] Schema markup validates at schema.org/validator
- [ ] Page loads in under 2 seconds (test at PageSpeed Insights)
- [ ] `robots.txt` allows crawling
- [ ] Canonical URL set correctly
- [ ] Google Search Console connected after deployment
- [ ] Google Business Profile created and linked to website

---

## SECURITY CHECKLIST (Verify before launch)

- [ ] Phone number does NOT appear in HTML source as plain text
- [ ] Phone number does NOT appear in schema markup
- [ ] Google Analytics does NOT fire before cookie consent
- [ ] localStorage is used only for cookie consent flag (no sensitive data)
- [ ] No inline event handlers (no `onclick=""` in HTML — all handlers in main.js)
- [ ] HTTPS enforced (Netlify auto-SSL)
- [ ] No external scripts except Google Fonts + GA (after consent)
- [ ] No contact form = no CSRF risk, no spam database, no data breach risk
- [ ] Content Security Policy header set in `netlify.toml`
- [ ] No console.log statements in production code

---

## LEGAL COMPLIANCE CHECKLIST (India — verify before launch)

- [ ] Privacy Policy page exists and is linked from footer
- [ ] Medical Disclaimer page exists and is linked from footer
- [ ] Terms of Use page exists and is linked from footer
- [ ] No "guaranteed cure" or "100% results" language anywhere
- [ ] No before/after patient photos without written consent
- [ ] All testimonials are from real patients (no fabricated reviews)
- [ ] Fees stated as "varies by case" — no fixed price that could be disputed
- [ ] Registration number added to footer (PENDING — get from Dr. Ayush)
- [ ] Cookie consent banner implemented for Google Analytics
- [ ] Emergency disclaimer present (call 108 for emergencies)
- [ ] Copyright notice in footer

---

## NETLIFY DEPLOYMENT INSTRUCTIONS (For the human — not AI)

1. Create free account at netlify.com
2. Drag and drop the project folder onto the Netlify deploy zone
3. Site goes live instantly with a random URL (e.g. anand-physio-abc123.netlify.app)
4. Go to Domain Settings → Add custom domain → Enter anandphysiotherapy.in
5. Update domain DNS at your registrar to point to Netlify's nameservers
6. SSL certificate activates automatically within minutes
7. Any future update: just drag and drop the updated folder again

---

## CONTENT STILL NEEDED FROM DR. AYUSH (Collect before launch)

Mark these in code as `<!-- PENDING -->` until received:

- [ ] Professional photo of Dr. Ayush (even a good phone photo is fine)
- [ ] State Physiotherapy Council registration number (check BPT certificate)
- [ ] 4–6 real patient reviews (name, area, Hindi review text, star rating)
- [ ] Confirmation of exact clinic address on Google Maps
- [ ] Google Analytics Measurement ID (get after creating GA4 property)
- [ ] Domain purchase confirmation (anandphysiotherapy.in or similar)

---

## UI DESIGN DIRECTION FOR THE AI BUILDING THIS

Style: Medical minimalism with warmth. Think "trusted family doctor" not "corporate hospital."
- Lots of white space — breathing room between sections
- Blue is the authority color — used for headings, CTAs, accents
- Teal is the warmth/healing color — used for icons, badges, success states
- No decorative gradients on sections — just clean white and light tints
- Cards have soft shadows, not hard borders
- Typography is generous — large enough to read on a phone without squinting
- The floating WhatsApp button is the hero of mobile — it should always feel accessible
- Hindi text must be comfortable to read — line-height 1.7 minimum for Devanagari
- Photos (when added) should feel human and warm — no stock photo clinical sterility
- The overall impression: "This doctor is real, nearby, experienced, and easy to reach."

---

## VERIFICATION STEPS (Run after each chunk)

After Chunk 01-03: Open HTML in browser. Confirm no phone number visible in page source (Ctrl+U).
After Chunk 04-06: Check all sections render correctly at 375px width (Chrome DevTools mobile view).
After Chunk 07: Click all legal page links. Confirm they open and load the same design.
After Chunk 08: Open site, accept cookies, check GA fires in Network tab. Reload, decline cookies, confirm GA does NOT fire.
After Chunk 09: On mobile, confirm floating WhatsApp button is always visible, never overlapping text.
Final: Run Google PageSpeed Insights. Score must be 85+ on mobile before launch.

---

## WHAT SUCCESS LOOKS LIKE

When a patient in Patna searches "physiotherapist near me" or "home visit physiotherapy Patna":
1. The website appears in Google results (SEO done right)
2. They tap it and the page loads in under 2 seconds
3. They immediately see Dr. Ayush's name, photo, and "Home Visit Available"
4. They tap the green WhatsApp button
5. A pre-filled message opens — they just edit their name and problem and send
6. Dr. Ayush receives it and calls back

That is the entire user journey. Everything on the website exists to make that journey frictionless.
