# AFH Consultant Curriculum & Permit Tools — Tutorial

This tutorial walks you through the app and a **first permit-ready workflow** in about 30–45 minutes.

---

## Part 1: Tour the App (10 min)

### Step 1.1 — Open the app

1. Run `npm install` then `npm run dev`.
2. Open **http://localhost:3000** in your browser.

### Step 1.2 — Home and navigation

1. On **Home**, read the short description and the cards for Curriculum, Drawing Workflow, Moltbot Scripts, Top 100 Questions, City Guides, Labs, Cost Estimator.
2. Use the **top navigation bar** to move between sections. The current page is underlined.

### Step 1.3 — Curriculum

1. Click **Curriculum**.
2. Read the **Overview** (8 weeks, 40 hours, ~70% Design Agent/Moltbot).
3. Click **Module 3: Building Inspection and WABO Compliance**.
4. Skim: learning objectives, regulatory framework, **6-step workflow**, and **20 drawing prompts**. This is the core for permit-ready drawings.

### Step 1.4 — Drawing Workflow

1. Click **Drawing Workflow** in the nav.
2. Click each of the **6 steps** to expand. Note: Data Intake → Base Plan → Validate & Edit → 3D Conversion → Packaging → Delivery/Debug.
3. Read the **Entry mode** box: when you have basic floor plan and dimension data, use this workflow for DIY permit prep to the city.

### Step 1.5 — Moltbot Scripts

1. Click **Moltbot Scripts**.
2. Scroll through the **Top 10 commands** (onboard, gateway, agent, etc.).
3. Scroll to the **20 drawing prompts**. These are the prompts you use with `moltbot agent --message "..." --thinking high` for WABO-compliant plans.

### Step 1.6 — Top 100 Questions

1. Click **Top 100 Questions**.
2. Use the **Filter** buttons: All, Licensing/Setup, Building/Safety, Resident Care, Operations/Best Practices.
3. Click any **question** to expand and see Answer, Citation (WAC/RCW), and Reasoning.

### Step 1.7 — City Guides and Cost

1. Click **City Guides**. Pick one city (e.g. Olympia) and read summary and process.
2. Click **Cost Estimator**. Review startup and monthly cost tables and the Moltbot prompt for a personalized spreadsheet.

---

## Part 2: Simulate a First Drawing Workflow (20–25 min)

This part uses the app as a guide; you can do it without Moltbot installed (read-only) or with Moltbot (hands-on).

### Step 2.1 — Choose a city and property

1. Go to **City Guides** and choose a target city (e.g. **Lacey** or **Olympia**).
2. Assume a simple property: e.g. 1,500 sq ft single-family home, 3 bedrooms, one bathroom. You’ll “prepare” a permit package for AFH conversion.

### Step 2.2 — Data intake (Drawing Workflow Step 1)

1. Go to **Drawing Workflow** and expand **Step 1: Data Intake**.
2. List what you’d collect: address, parcel #, room dimensions (e.g. 10×12, 12×14), photos, existing alarms. Ensure bedrooms ≥80 sq ft (WAC 388-76-10690).
3. If Moltbot is installed: run the intake prompt from the app or Module 3 to generate an intake questionnaire.

### Step 2.3 — Base plan (Step 2)

1. Expand **Step 2: Initial Generation**.
2. Copy the “Generate scaled 2D floor plan…” prompt from **Moltbot Scripts** (prompt #1) or from **Module 3**.
3. If using Moltbot: `moltbot agent --message "Generate a scaled 2D floor plan for 1,500 sq ft single-family home conversion to AFH; 4 bedrooms ≥80 sq ft, label A-D, Type NS1 per WAC 51-51-0330" --thinking high`. Otherwise, just note the output described (8.5×11 PDF, rooms A–D, egress, smoke alarms).

### Step 2.4 — Validate and edit (Step 3)

1. Expand **Step 3: Validate and Edit**.
2. Use the **validation prompt** from the workflow or Moltbot page: validate against WABO checklist (sill ≤44″, grab bars, interconnected alarms). If Moltbot returns issues, use the “Edit plan…” prompt to fix (e.g. lower sill, add compliant window).

### Step 2.5 — 3D and package (Steps 4–5)

1. Expand **Step 4: 3D Conversion** and **Step 5: Packaging**.
2. Note: 3D via Nano Banana/Gemini; package = merge 2D/3D PDFs, WABO Sections 1–4, cover letter citing WACs.
3. If using Moltbot, run the “Convert 2D plan to 3D…” and “Compile permit package…” prompts from the 20 prompts list.

### Step 2.6 — Delivery (Step 6)

1. Expand **Step 6: Delivery / Debug**.
2. Note: send package to client via `moltbot message send`; use `moltbot logs --follow` for debugging.

---

## Part 3: Quiz Yourself (5–10 min)

1. Go to **Top 100 Questions**.
2. Filter **Building/Safety**.
3. Open 5 questions (e.g. min bedroom size, egress sill height, grab bar strength, fire extinguisher rating, Type NS1).
4. Check your answers against the app’s Answer and Citation.

---

## Done

You’ve toured the app, simulated the 6-step drawing workflow, and practiced with the Top 100 questions. Next: work through **Curriculum** modules in order, run **Labs** (Module 3–5), and use **City Guides** and **Cost Estimator** for real clients.

For install and commands, see **README** and **QUICKSTART**.
