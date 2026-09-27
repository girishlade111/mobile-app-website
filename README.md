# Rucript — Mobile App Website

A vibrant landing page for **Rucript**, a notes/productivity mobile app. Centerpiece is an animated CSS phone mockup showing the app's notes UI (documents, folders, reminders, stats), wrapped in a colorful gradient backdrop with staggered load animations — plus a feature grid, testimonials-style cards, and download CTAs.

**Live demo:** https://girishlade111.github.io/mobile-app-website/

## Features

- **Animated phone mockup** — pure-CSS phone frame (status bar, dynamic-island style notch) rendering a notes-app UI: folders, document cards, reminder chips, activity stats
- **Gradient hero backdrop** — animated floating blurred gradient blobs over a cyan→blue→purple gradient
- **Staggered entrance animations** — sections fade/slide in on load with sequenced delays
- **Feature grid** — document editing, folders/organization, reminders, analytics, privacy cards with lucide icons
- **Responsive layout** — mobile-first, adapts from phones to wide desktop
- **Static-export ready** — builds to plain HTML/CSS/JS (`output: 'export'`), deployable anywhere including GitHub Pages

## Tech stack

- **Next.js 15** (App Router, static export) + **React 19** + TypeScript
- **Tailwind CSS** + custom keyframe animations in `app/globals.css`
- **Geist** font, **lucide-react** icons, **@vercel/analytics**

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # outputs to ./out
```

## Project structure

```
app/
  page.tsx        # The whole landing page (hero + phone mockup + features)
  layout.tsx      # Root layout + metadata
  globals.css     # Tailwind + custom animations (float, fade, pulse)
components/
  ui/button.tsx
  ui/badge.tsx
  theme-provider.tsx
public/           # Placeholder images
next.config.mjs   # output: 'export', images unoptimized
```

## Notes

- `basePath: '/mobile-app-website'` is set in `next.config.mjs` so asset URLs resolve under the GitHub Pages subpath. Remove it if you deploy to a root domain or Vercel.
- Next.js was bumped from 15.2.4 to 15.2.8 for the React2Shell (CVE-2025-55182) security patch.

## Original v0 project

This repository was initialized from a [v0](https://v0.app) project. Any changes made in the v0 chat are automatically synced here.

---

Built by Girish Lade — https://ladestack.in
