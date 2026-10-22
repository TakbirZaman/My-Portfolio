# Takbir Zaman Bhuiyan - Portfolio

Personal portfolio for junior full-stack development opportunities. Built with React 19, Vite, Tailwind CSS, and Framer Motion.

## What to review

- Three selected projects with problem statements, contributions, technical decisions, source evidence, and walkthroughs.
- Additional projects grouped by category.
- Experience, education, academic methods, a downloadable resume, and an email-draft contact flow.

## Run locally

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm test
npm run lint
npm run build
npm run preview
```

## Content maintenance

- Portfolio content: `src/data/portfolioData.js`.
- Case studies: the `caseStudy` objects include supporting source links. Links point to repository evidence; they do not imply those projects' tests were rerun during a portfolio update.
- Keep exactly three selected projects with a unique case-study rank.
- Add performance, usage, or research scores only when a measurement method and supporting report can be linked. Method descriptions remain visible when evaluation reports are not published.
- Resume: `public/TakbirZamanBhuiyan_Resume.pdf` preserves the approved uploaded format. Install Python `PyMuPDF` and run `python scripts/build_resume.py` to synchronize the BSc dates to 2022–2026 without rebuilding the layout. Render and review any wording or layout edits before committing.
- LinkedIn drafts: `docs/recruiter-profile.md`. Posting those drafts is a separate account action.
- Local test credentials from project repositories are not published as public demo credentials. Do not use live previews for real purchases.
