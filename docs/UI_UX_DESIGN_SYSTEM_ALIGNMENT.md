# UI/UX & Design System Alignment Strategy

## Executive Summary

This document outlines the UI/UX refactoring and design system alignment executed for Vertex Loop. The primary goal was to bring all newly created **Services** (`/services/*`) and **Products** (`/products/*`) pages into full visual and structural alignment with the existing Vertex Loop light-themed design system.

---

## 1. Design System Tokens & Aesthetics

The source of truth for the Vertex Loop design system is defined by `/about`, `/contact`, `/ecosystem`, and `/why-us`.

### Palette Tokens
- **Background Base**: Soft light backgrounds (`#f6f4f0`, `#f4f1f9`, `#f0f4f8`)
- **Card Styles**:
  - `glass-card`: `bg-white/80 backdrop-blur-xl border border-white/80 shadow-glass rounded-3xl`
  - `glass-card-strong`: `bg-white/90 backdrop-blur-2xl border border-white/80 shadow-glass-lg rounded-3xl`
- **Typography Tokens**:
  - Heading: `text-display font-semibold text-slate-ink tracking-[-0.03em]`
  - Body: `text-slate-mid text-sm leading-relaxed font-light`
  - Subtle/Dim: `text-slate-dim text-xs`
- **Accent Colors**:
  - Lavender: `#7c6fad` (AI Development / SCRIPTen)
  - Gold: `#a07830` (Custom Software / HRMS)
  - Mint: `#3d8c7a` (Cloud Architecture / Invoicing)
  - Rose: `#b04a4a` (Digital Marketing / SEO)
  - Blue: `#4a7fa5` (Crack Leap / Ecosystem / ERP)

---

## 2. Shared Components & Hero Standard

All top-level marketing pages utilize standard UI primitives:
1. `<PageHero />` (`@/components/ui/PageHero.tsx`): Parallax background orbs, geometric SVG decorations, animated section label, H1 headline, and subline.
2. `<SectionLabel />` (`@/components/ui/SectionLabel.tsx`): Mono-badge section identifiers with color accent fills.
3. `<ServicePageLayout />` (`@/components/services/ServicePageLayout.tsx`): Standardized light layout for service detail routes.
4. `<ProductPageLayout />` (`@/components/products/ProductPageLayout.tsx`): Standardized light layout for product detail routes.

---

## 3. Navigation Dropdown & External Brand Mappings

### Dropdown Hover Bridge
- Refactored `Navbar.tsx` to introduce a hover grace period (150ms timeout) and transparent hover bridge (`pt-2 top-full`) preventing premature dropdown menu closures during cursor movement.

### External Brand Link Mappings
- **Crack Leap**: Dedicated technology education platform.
  - Display Name: `Crack Leap` (with space between Crack and Leap)
  - External URL: `https://crackleap.vertexloop.in`
- **SCRIPTen**: Generative AI content creation tool.
  - Display Name: `SCRIPTen`
  - External URL: `https://scripten.arivuon.in/`

---

## 4. Page Refactoring Audit Matrix

| Route | Theme Prior | Theme Current | Hero Standardized | External URL Integration |
|---|---|---|---|---|
| `/services` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<PageHero />` | Crack Leap (`https://crackleap.vertexloop.in`) |
| `/services/ai-development` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ServicePageLayout />` | Contact / Discovery CTA |
| `/services/custom-software-development` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ServicePageLayout />` | Contact / Discovery CTA |
| `/services/cloud-architecture` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ServicePageLayout />` | Contact / Discovery CTA |
| `/services/digital-marketing` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ServicePageLayout />` | Contact / Discovery CTA |
| `/products` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<PageHero />` | SCRIPTen (`https://scripten.arivuon.in/`) |
| `/products/scripten` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ProductPageLayout />` | SCRIPTen (`https://scripten.arivuon.in/`) |
| `/products/erp` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ProductPageLayout />` | Contact Demo CTA |
| `/products/invoicing` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ProductPageLayout />` | Contact Demo CTA |
| `/products/hrms` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<ProductPageLayout />` | Contact Demo CTA |
| `/academy` | Dark (`bg-slate-950`) | Light (`#f6f4f0`) | `<PageHero />` | Crack Leap (`https://crackleap.vertexloop.in`) |
