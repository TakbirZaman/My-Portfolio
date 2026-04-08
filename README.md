# Takbir Zaman — Portfolio v3

Redesigned React + Tailwind CSS portfolio. Dynamic, colorful, recruiter-friendly.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **React Intersection Observer** for scroll-triggered reveals
- **Lucide React** + **React Icons** for icons

## Quick Start

```bash
npm install
npm run dev
```

## Structure

```
src/
├── data/
│   └── portfolioData.js   ← All CV content lives here — edit this!
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Research.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Photos

Place your photos in the `/public` folder:
- `takbir.jpg` — Hero section (portrait)
- `takbir1.jpg` — About section collage
- `takbir2.jpg` — About section collage (secondary)

## Updating Content

All content is centralized in `src/data/portfolioData.js`. Update:
- `personalInfo` — name, bio, links, photo paths
- `education` — degrees, CGPA, highlights
- `experience` — work history
- `projects` — project cards
- `research` — research papers
- `skillTags` — skill categories and tags

## Deploy to Netlify / Vercel

```bash
npm run build
# deploy the /dist folder
```

## Contact Form

The contact form in `Contact.jsx` has a `handleSubmit` stub. Wire it to:
- [Formspree](https://formspree.io) — simplest, free tier available
- [EmailJS](https://www.emailjs.com) — no backend needed
- Your own API endpoint
