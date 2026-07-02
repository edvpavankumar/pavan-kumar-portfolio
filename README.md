# Ede Dinesh Venkata Pavan Kumar — Portfolio (V3.5)

A luxury, premium personal portfolio for an AI & Software Developer — dark executive theme, gold accents, built with Next.js 15 App Router.

**Live demo:** _deploy to Vercel and add your link here_

---

## What's new in V3.5

- Hero rewritten with the exact final headline/subtitle and reordered CTAs (View Projects → Download Resume → Contact Me → Hire Me)
- About section now tells a natural, non-generic story in `aboutStory` (`lib/data.ts`) instead of the resume's formal summary
- Skills consolidated to exactly four categories — Programming Languages, Core Computer Science, Database, Developer Tools — each with an icon, glass card, and gold glow on hover; no progress bars or percentages anywhere
- Every project case study now includes **Overview** and **Key Learnings** in addition to Problem/Solution/Architecture/Features/Challenges/Future — the two concept projects are labeled **In Progress** (not "Completed") so nothing is overstated
- Coding Profiles reduced to the minimum honest surface: platform icon, username, one-line description, and a single "View Profile" link — zero fabricated stats
- Achievements expanded to 5 cards (HackerRank 4★, Internship, AI Projects, Academic Performance, Technical Skills) with a responsive grid
- Added `opengraph-image.tsx` / `twitter-image.tsx` — a real generated OG image (not a placeholder file) via `next/og`

## What's new in V2.0

- Full-name stacked branding in the navbar (`EDE DINESH VENKATA / PAVAN KUMAR`) with an `AI · SOFTWARE DEVELOPER` tagline, replacing the old `EV.PK` mark
- Navbar hides on scroll-down and reappears on scroll-up, with a glass/blur background and an animated underline on the active link
- Updated palette: primary gold `#C9A227`, hover gold `#E4C76A`, pure white text, matching the V2 brief exactly
- Redesigned hero: new headline ("Engineering Intelligent Software."), typewriter-style rotating titles, canvas particle field, cursor spotlight, floating tech chips, and a profile-photo placeholder
- Journey timeline re-sequenced to: Diploma → B.Tech (IT) → Java & DSA → Artificial Intelligence → Software Development → Future Software Engineer
- Coding Profiles section now shows **no fabricated numbers** — real badges/tags only, with direct links to each live profile
- Achievements includes a CGPA card instead of a generic "core subjects" card
- Contact heading updated to "Let's Build Something Amazing Together," contact cards use glassmorphism
- Footer redesigned: "Designed & Developed by" credit, tech-stack line, GitHub/LinkedIn/Resume links, back-to-top
- 3D tilt hover added to project cards

## Overview

This is a handcrafted, single-page portfolio built from a single source of truth (`lib/data.ts`), which is populated directly from the uploaded resume and LinkedIn export. Two projects marked **Concept** in the Projects section (`AI Product Intelligence System`, `Lung Cancer Detection System`) were requested in the design brief but don't appear in the resume — they're kept as clearly labeled, honest placeholders rather than presented as completed work.

## Features

- **Luxury Executive design system** — near-black (`#050505`) background, gold (`#D4AF37`) accent, Space Grotesk / Inter / JetBrains Mono type stack
- Animated hero with rotating role titles, floating tech chips, magnetic CTA buttons
- Gold-thread animated journey timeline (Diploma → Engineering → AI → Software → Future)
- Categorized, hover-interactive skills grid
- Experience timeline sourced from the resume's internship history
- Project showcase with filtering, search, and a full case-study modal (problem, solution, architecture, features, stack, challenges, future work)
- Interactive education timeline
- Achievements with animated count-up numbers
- Coding-profile dashboard (GitHub / LeetCode / HackerRank) with placeholder stat widgets ready to wire to live APIs
- Blog section with categories, tags, and a newsletter signup UI
- Contact section with a `mailto:`-based form, copy-email button, and social links
- Sticky nav with scroll-spy, mobile menu, smooth scroll (Lenis), scroll progress bar, loading screen, custom 404, `sitemap.xml` / `robots.txt`, Open Graph + JSON-LD structured data

## Folder Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css        Design tokens, base styles
  not-found.tsx       Custom 404
  sitemap.ts / robots.ts
components/
  sections/           One component per page section (Hero, About, Skills, ...)
  ui/                 Reusable primitives (MagneticButton, Reveal, ScrollProgress, ...)
lib/
  data.ts             Single source of truth — all resume-derived content
  utils.ts            cn() className helper
public/
  EDE-Dinesh-Venkata-Pavan-Kumar-Resume.pdf   Downloadable resume
```

## Technologies Used

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lenis (smooth scroll) · Lucide Icons

## Installation

This project's source was generated in an offline sandbox, so dependencies are **not** pre-installed. On your machine, with Node.js 18.18+ installed:

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Deployment to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy** — Vercel will give you a free `*.vercel.app` domain.

## Customization Guide

- **Personal info, projects, skills, experience, education, achievements** — edit `lib/data.ts` only. Every section reads from this file.
- **Colors** — edit the `gold` / `base` / `card` values in `tailwind.config.ts`.
- **Fonts** — swap the `next/font/google` imports in `app/layout.tsx`.
- **Resume file** — replace `public/EDE-Dinesh-Venkata-Pavan-Kumar-Resume.pdf` with an updated PDF of the same filename (or update `personal.resumeFile` in `lib/data.ts`).
- **Live coding stats** — `components/sections/CodingProfiles.tsx` currently renders illustrative placeholders for LeetCode/GitHub stats. Wire these to the GitHub REST API or a LeetCode stats API of your choice.
- **Favicon** — add a `favicon.ico` to `app/` (Next.js picks it up automatically).

## License

MIT — free to use and adapt.
