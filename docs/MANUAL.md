# AFH Consultant Curriculum & Permit Tools — User Manual

## 1. Introduction

This app is a **single complete curriculum and toolset** for prospective AFH (Adult Family Home) consultants, advisors, and concierges in Washington State. It teaches how to prepare and operate an AFH business in compliance with the **AFH Initial Inspection Preparation Checklist** (WAC, RCW, DSHS) and how to use **Moltbot/Clawdbot** and **Design Agent** to automate ~70% of permit-ready drawings and paperwork.

**Who it’s for:** Consultants, advisors, and concierges who will walk clients from start to finish through AFH setup—including WABO-compliant drawings and city permits (Centralia, Lacey, Tumwater, Olympia, Chehalis).

---

## 2. App Structure

| Section | Purpose |
|--------|---------|
| **Home** | Overview and links to all sections. |
| **Curriculum** | Full 8-week curriculum (Modules 1–6). |
| **Drawing Workflow** | Six steps: data intake → base plan → validate/edit → 3D → package → delivery. |
| **Moltbot Scripts** | Top 10 CLI commands and 20 drawing prompts. |
| **Top 100 Questions** | AFH admin training questions with WAC/RCW answers. |
| **City Guides** | Permit info for Centralia, Lacey, Tumwater, Olympia, Chehalis. |
| **Labs** | Hands-on labs for Modules 3, 4, and 5. |
| **Cost Estimator** | Startup and ongoing cost ranges; Moltbot prompt for spreadsheets. |

---

## 3. How to Use Each Section

### 3.1 Curriculum

- **Path:** Click **Curriculum** in the nav (or go to `/curriculum`).
- **Overview:** Lists all 6 modules with week, hours, and short summary.
- **Module pages:** Click a module (e.g. “Module 3: Building Inspection and WABO”) to read full content: learning objectives, WAC/IRC references, step-by-step workflow, 20 drawing prompts, inspection simulation, exercises.
- **Use case:** Study in order (Module 1 → 6) or jump to a module (e.g. Module 3 for WABO and drawing).

### 3.2 Drawing Workflow

- **Path:** **Drawing Workflow** in the nav (or `/drawing`).
- **Behavior:** Six steps are listed; click a step to expand and see details and Moltbot commands.
- **Use case:** Follow the workflow with a client: (1) Data intake, (2) Base plan generation, (3) Validate & edit, (4) 3D conversion (Nano Banana/Gemini), (5) Package PDFs, (6) Delivery/debug. Use the “Entry mode” note when you have basic floor plan and dimension data for DIY permit prep.

### 3.3 Moltbot Scripts

- **Path:** **Moltbot Scripts** in the nav (or `/moltbot`).
- **Content:** Top 10 Moltbot/Clawdbot CLI commands (onboard, gateway, channels login, message send, agent, doctor, status, models status, logs, config) with examples. Plus 20 copy-paste prompts for drawing tasks (floor plan, egress, grab bars, ramps, 3D, city-specific, etc.).
- **Use case:** Install Moltbot (Node ≥22), run commands from the manual, and use the 20 prompts with `moltbot agent --message "[prompt]" --thinking high` for WABO-compliant designs.

### 3.4 Top 100 Questions

- **Path:** **Top 100 Questions** (or `/questions`).
- **Behavior:** Filter by category (All, Licensing/Setup, Building/Safety, Resident Care, Operations/Best Practices). Click a question to expand and see **Answer**, **Citation** (WAC/RCW), and **Reasoning**.
- **Use case:** Prepare for AFH admin training and inspections; practice selecting the right answer using WAC, RCW, and best practices.

### 3.5 City Guides

- **Path:** **City Guides** (or `/cities`).
- **Content:** For Centralia, Lacey, Tumwater, Olympia, and Chehalis: summary, permit process, fees, and references. Plus common requirements and WABO (www.wabo.org).
- **Use case:** Before submitting to a city, read that city’s guide and align drawings and checklist with local requirements.

### 3.6 Labs

- **Path:** **Labs** (or `/labs`).
- **Content:** Module 3 labs (10), Module 4 labs (10), Module 5 labs (8) with title, time, and focus.
- **Use case:** Run labs in order with Moltbot/Design Agent; use for classroom or self-study.

### 3.7 Cost Estimator

- **Path:** **Cost Estimator** (or `/cost`).
- **Content:** Tables for startup costs (license, training, conversion, insurance, furnishings, etc.) and monthly operating costs; revenue note; and a Moltbot prompt to generate a personalized spreadsheet.
- **Use case:** Advise clients on realistic startup and operating costs; run the Moltbot prompt for a custom 6-bed (e.g. Olympia) breakdown.

---

## 4. Running the App

- **Install:** `npm install` (requires network).
- **Dev:** `npm run dev` → open http://localhost:3000.
- **Build:** `npm run build` then `npm start` for production.

---

## 5. References (WAC, RCW, DSHS, WABO)

- **WAC 388-76** – AFH Minimum Licensing Requirements  
- **WAC 51-51-0330** (IRC R330) – AFH structural/safety  
- **RCW 70.128** – Adult Family Homes statute  
- **DSHS** – Form 10-695 (Initial Inspection Preparation), Form 10-410 (Application)  
- **WABO** – www.wabo.org, Local Building Inspection Checklist  

---

## 6. Support and Next Steps

- Use **Curriculum** and **Labs** for full training.
- Use **Drawing Workflow** and **Moltbot Scripts** for permit-ready drawings.
- Use **Top 100 Questions** and **City Guides** for exam and permit prep.
- Use **Cost Estimator** for client advisories.
- For deeper automation, install and configure Moltbot (see Moltbot Scripts page and README).
