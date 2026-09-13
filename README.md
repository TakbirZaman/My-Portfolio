# Takbir Zaman Bhuiyan — Portfolio

Live: **https://takbirzaman.github.io/** · React 19 + Vite + Tailwind CSS

## Stack

- **React 19** + **Vite 8** — SPA with code-split below-fold (`src/App.jsx:1` lazy + `vite.config.js:9` manualChunks)
- **Tailwind CSS 3** — design system in `src/index.css:20` (`card`, `btn-primary`, `gradient-text`)
- **Framer Motion 11** — scroll reveals via `react-intersection-observer`
- **Lucide React 0.511** (pinned) + **React Icons** — icons
- **Sharp 0.35** — WebP build pipeline (72% saving: 1948kB→548kB, `src/assets/*.webp`)

## Quick Start

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # vite build → dist/ (manualChunks: react/motion/icons)
npm run preview
npm run lint     # eslint.config.js (react + hooks)
```

## Deploy (GitHub Pages — user site `takbirzaman.github.io`)

- `vite.config.js:6` `base: '/'` — correct for `https://takbirzaman.github.io/` (user site). For repo site use `base: '/Takbir-Portfolio/'`.
- `public/robots.txt` + `public/sitemap.xml` (hash URLs removed).
- `public/og-image.jpg` + absolute OG URLs in `index.html:17`.
- Push `dist/` via `gh-pages` or GitHub Actions (`.github/workflows/deploy.yml`).

## Content

All content in `src/data/portfolioData.js` — 12 curated projects (5 categories: `Full Stack`, `AI/ML`, `Automation`, `Game Dev`, `Graphics` vs previous 8). Edit there; categories auto-derive in `src/components/Projects.jsx:15`.

## Performance Notes

- WebP assets in `src/assets/*.webp` (originals kept but unimported). `decoding="async"` + `loading="lazy"` on all except hero (`fetchPriority="high"`).
- OG image must be absolute URL — fixed.
- Navbar now has scroll-spy (`IntersectionObserver`) + `aria-current` + focus trap for a11y.

