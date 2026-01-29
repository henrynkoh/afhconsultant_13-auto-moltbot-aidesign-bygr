# AFH Consultant Curriculum & Permit Tools – Tasks

## Project Overview
Next.js app: single complete curriculum for AFH consultants, drawing workflow (Moltbot/Design Agent/Nano Banana), Top 100 questions, city guides (Centralia, Lacey, Tumwater, Olympia, Chehalis), labs, and cost estimator. ~70% focus on design agent and Moltbot for WABO-compliant permit-ready drawings.

## Completed
- [x] Create Next.js project with App Router, TypeScript, Tailwind
- [x] Curriculum modules 1–6 pages; expanded Module 3 (WABO, 20 drawing prompts, step-by-step workflow)
- [x] Drawing workflow UI (6 steps: data intake → base plan → validate/edit → 3D → package → delivery)
- [x] Moltbot page: Top 10 CLI commands + 20 drawing prompts
- [x] Top 100 AFH admin questions with WAC/RCW citations and reasoning; filter by category
- [x] City guides: Centralia, Lacey, Tumwater, Olympia, Chehalis (process, fees, WABO)
- [x] Labs: Module 3 (10 labs), Module 4 (10 labs), Module 5 (8 labs)
- [x] Cost estimator: startup and ongoing costs; Moltbot prompt for personalized spreadsheet

## Review / Summary of Changes
- **Structure:** `src/app/` with layout, Nav, home; routes: `/curriculum`, `/curriculum/module-1`–`module-6`, `/drawing`, `/moltbot`, `/questions`, `/cities`, `/labs`, `/cost`.
- **Content:** Curriculum text from spec (WAC 388-76, WAC 51-51-0330, RCW 70.128, DSHS Form 10-695, WABO). Module 3 expanded with regulatory framework, floor plan/egress, 6-step workflow, 20 prompts, inspection simulation.
- **Data:** `src/data/questions.ts` – 100 questions in 4 categories with answer, citation, reasoning.
- **UI:** Tailwind; afh-primary/secondary/accent/light in tailwind.config; collapsible steps on drawing page; expandable question cards on questions page.

## Documentation (added)
- **README.md** — Project overview, features, getting started; links to docs.
- **docs/QUICKSTART.md** — Quick start: install, first 5 min, Moltbot, one workflow.
- **docs/MANUAL.md** — Full user manual: app structure, how to use each section.
- **docs/TUTORIAL.md** — Step-by-step tutorial: tour + first drawing workflow + quiz.

## Ads (added in ads/)
- **facebook.md** — Facebook ad (primary text, headline, description, CTA).
- **instagram.md** — Instagram feed caption, short caption, story text, hashtags.
- **threads.md** — Threads posts (4 variants).
- **blogger.md** — Blogger post (title + HTML body).
- **naver-blog.md** — Naver Blog (Korean + English title/body, tags).
- **tistory.md** — Tistory post (Korean title/body, tags).
- **wordpress.md** — WordPress blog post (SEO title, meta description, H2 sections).
- **newsletter.md** — Newsletter section (short/medium/HTML/plain text).
- **email.md** — Promotional email (subject lines, preheader, body plain/HTML, short version).

Replace `[YOUR_URL]` and `[YOUR_CTA]` in ad copy with your actual link and call-to-action.

## Optional Next Steps
- Run `npm install` then `npm run dev` to start dev server (requires network for install).
- Add API route or server action to call Moltbot/Gemini if backend integration desired.
- Add 2D/3D canvas or file upload for drawing workflow (currently instructional).
