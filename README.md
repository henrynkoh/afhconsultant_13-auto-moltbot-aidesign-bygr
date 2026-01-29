# AFH Consultant Curriculum & Permit Tools

A **Next.js** app that delivers a single complete curriculum and toolset for prospective AFH (Adult Family Home) consultants, advisors, and concierges in Washington State. It focuses on WABO-compliant permit-ready drawings using Moltbot/Clawdbot and Design Agent (~70% automation), city permits (Centralia, Lacey, Tumwater, Olympia, Chehalis), and the AFH Initial Inspection Preparation Checklist (WAC, RCW, DSHS).

## Features

- **Curriculum (Modules 1–6):** AFH basics, licensing, **Building Inspection & WABO (Module 3 expanded)**, Initial Inspection Prep, Admin Training, certification. Module 3 includes 10× expanded content, step-by-step drawing workflow, and 20 Moltbot drawing prompts.
- **Drawing Workflow:** Data intake → base plan → validate & edit → 3D conversion (Nano Banana/Gemini) → package PDFs → delivery. DIY permit-ready for city submission without a third-party architect.
- **Moltbot / Clawdbot:** Top 10 CLI commands and 20 drawing prompts for WABO-compliant floor plans, egress, grab bars, 3D renders.
- **Top 100 AFH Admin Questions:** Licensing/Setup (1–20), Building/Safety (21–50), Resident Care (51–80), Operations/Best Practices (81–100). Answers with WAC/RCW citations and reasoning.
- **City Guides:** Centralia, Lacey, Tumwater, Olympia, Chehalis — permit process, fees, WABO checklist submission.
- **Labs:** Module 3 (10 labs), Module 4 (10 labs), Module 5 (8 labs). Hands-on Moltbot/Design Agent practice.
- **Cost Estimator:** Startup and ongoing costs for 4–6 bed AFH; Moltbot prompt for personalized spreadsheets.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Getting Started

1. **Install dependencies** (requires network):
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## References

- **WAC 388-76** – Adult Family Home Minimum Licensing Requirements  
- **WAC 51-51-0330** (IRC R330) – Adult Family Home structural/safety  
- **RCW 70.128** – Adult Family Homes statute  
- **DSHS** – Form 10-695 (Initial Inspection Preparation), Form 10-410 (Application)  
- **WABO** – www.wabo.org, Local Building Inspection Checklist  

## Documentation

- **Quick Start** — [docs/QUICKSTART.md](docs/QUICKSTART.md) — Get running in minutes.
- **User Manual** — [docs/MANUAL.md](docs/MANUAL.md) — Full guide to every section.
- **Tutorial** — [docs/TUTORIAL.md](docs/TUTORIAL.md) — Step-by-step tour and first workflow.

## Moltbot / Clawdbot

- Node ≥ 22. Install: `npm install -g moltbot@latest` or `pnpm add -g moltbot@latest`.
- Use `moltbot agent --message "[prompt]" --thinking high` for drawing and checklist automation.
- See **Moltbot Scripts** page in the app for Top 10 commands and 20 drawing prompts.
