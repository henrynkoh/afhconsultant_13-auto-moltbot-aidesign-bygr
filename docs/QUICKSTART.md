# AFH Consultant Curriculum & Permit Tools — Quick Start

Get running in a few minutes.

---

## 1. Install and run (3 steps)

```bash
# Clone or open the project folder, then:
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 2. First 5 minutes in the app

| Action | Where |
|--------|--------|
| See everything the app offers | **Home** |
| Start the 8-week curriculum | **Curriculum** → Module 1 |
| See the permit drawing workflow | **Drawing Workflow** → expand each step |
| Get Moltbot commands and 20 drawing prompts | **Moltbot Scripts** |
| Practice AFH admin questions | **Top 100 Questions** → filter by category, click to see answers |
| Check your target city | **City Guides** |
| See labs for Modules 3–5 | **Labs** |
| Estimate AFH costs | **Cost Estimator** |

---

## 3. Moltbot (optional, for automation)

- **Node ≥ 22.**  
- Install: `npm install -g moltbot@latest` or `pnpm add -g moltbot@latest`  
- Setup: `moltbot onboard --install-daemon`  
- Send a drawing prompt: `moltbot agent --message "Generate a scaled 2D floor plan for 1,500 sq ft AFH conversion; 4 bedrooms ≥80 sq ft, label A-D, Type NS1 per WAC 51-51-0330" --thinking high`  

Full command list and 20 prompts: use the **Moltbot Scripts** page in the app.

---

## 4. One workflow to remember

1. **Data intake** → client property data (dimensions, photos).  
2. **Base plan** → Moltbot/Design Agent generates 2D floor plan (WABO-compliant).  
3. **Validate & edit** → check WABO checklist (sill ≤44″, grab bars, alarms); fix with prompts.  
4. **3D** → Nano Banana/Gemini for 3D renders.  
5. **Package** → PDFs + WABO sections + cover letter.  
6. **Delivery** → send to client; use Moltbot for messaging/debug.

---

## 5. Key references

- **WAC 388-76** — AFH licensing  
- **WAC 51-51-0330** (IRC R330) — Building/safety for AFH  
- **DSHS Form 10-695** — Initial Inspection Preparation  
- **WABO** — www.wabo.org, Local Building Inspection Checklist  

---

## 6. More help

- **Full manual:** `docs/MANUAL.md`  
- **Step-by-step tutorial:** `docs/TUTORIAL.md`  
- **Project overview:** `README.md`  
