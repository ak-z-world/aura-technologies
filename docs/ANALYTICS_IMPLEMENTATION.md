# Vertex Loop Analytics Implementation & Measurement Strategy

## Executive Summary

This document details the Google Analytics 4 (GA4) setup and event tracking architecture across the Vertex Loop website (`https://www.vertexloop.in/`).

---

## 1. Global GA4 Architecture

- **Measurement ID**: `G-91YN9MYRL0`
- **Implementation Strategy**: Centralized root-level component `<GoogleAnalytics />` rendered inside `RootLayout` (`src/app/layout.tsx`) with Next.js `<Script strategy="afterInteractive">` and `<Suspense>`.
- **Page Coverage**:
  - Global Root: `/`
  - Core Brand: `/about`, `/contact`, `/ecosystem`, `/why-us`
  - Services Hub & Details: `/services`, `/services/ai-development`, `/services/custom-software-development`, `/services/cloud-architecture`, `/services/digital-marketing`
  - Products Hub & Details: `/products`, `/products/erp`, `/products/invoicing`, `/products/hrms`, `/products/scripten`
  - Academy Transition: `/academy`
  - Legal Compliance: `/privacy-policy`, `/terms-conditions`

---

## 2. Analytics vs. Crawler Indexing Distinction

> [!IMPORTANT]
> Google Analytics 4 tracks user interactions, sessions, page views, and conversion funnels. GA4 does NOT report or control search engine crawler indexing or Googlebot behavior. Crawler visibility and indexation are managed separately via Google Search Console, Bing Webmaster Tools, XML Sitemaps (`/sitemap.xml`), `robots.txt`, and structured schema data (`JsonLd`).

---

## 3. Custom Event Tracking Functions

The tracking module in `src/components/analytics/GoogleAnalytics.tsx` exposes global utility functions:

```typescript
// Generic Event Tracking
export function trackGAEvent(action: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, params)
  }
}

// Outbound Ecosystem Clicks
export function trackCrackLeapClick(sourcePage: string) {
  trackGAEvent('external_crackleap_click', {
    destination: 'https://crackleap.vertexloop.in',
    source_page: sourcePage,
  })
}
```

---

## 4. Privacy & Compliance

- GA4 is configured to collect anonymized user metrics without exposing sensitive user credentials or personal identity information.
- Clear disclosures regarding Google Analytics first-party cookies are documented in `/privacy-policy`.
