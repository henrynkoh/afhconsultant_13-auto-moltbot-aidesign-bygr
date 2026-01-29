"use client";

import { useState } from "react";
import Link from "next/link";

const labs = [
  { id: 1, title: "Property Data Intake and Extraction", time: "1 hr", focus: "70% vision/OCR" },
  { id: 2, title: "Base 2D Floor Plan Generation", time: "1.5 hrs", focus: "From JSON to PDF" },
  { id: 3, title: "Egress and Bedroom Compliance Iteration", time: "2 hrs", focus: "Sill ≤44″, 3 cycles" },
  { id: 4, title: "Safety Feature Addition (Grab Bars, Ramps, Alarms)", time: "1.5 hrs", focus: "R330.8, R311.8" },
  { id: 5, title: "3D Conversion and Walkthrough Rendering", time: "2 hrs", focus: "Nano Banana" },
  { id: 6, title: "City-Specific Adaptation Simulation", time: "2 hrs", focus: "Olympia, Chehalis, Lacey" },
  { id: 7, title: "Full WABO Checklist Validation Loop", time: "2 hrs", focus: "Sections 3–9" },
  { id: 8, title: "Permit Package Compilation", time: "1.5 hrs", focus: "2D/3D PDFs, cover letter" },
  { id: 9, title: "Mock Rejection and Revision", time: "1.5 hrs", focus: "Before/after" },
  { id: 10, title: "Capstone – Full Conversion for Mock Client", time: "4 hrs", focus: "End-to-end" },
];

const expandedContent: Record<number, { caseStudies: string[]; steps: string[]; sampleData?: string; diyTips: string[]; deliverables: string[]; debrief: string }> = {
  1: {
    caseStudies: [
      "Case Study A – 1960s ranch, Lacey: Single-owner home, 1,650 sq ft, 3 bedrooms, 2 baths. No existing floor plan. Owner has iPhone photos and handwritten room dimensions. DIY: Use Moltbot to generate intake form; client uploads 12 photos (exterior, each room, windows). OCR extracts handwritten notes; agent parses to JSON. Outcome: JSON with 3 bedrooms (10×12, 11×13, 9×11), sill heights 42″, 48″, 38″ – Bedroom 2 flagged for sill >44″.",
      "Case Study B – Two-story, Olympia: 1,900 sq ft, 4 bedrooms (2 up, 2 down), basement unused. Owner has tax assessor sketch and tape-measure dimensions. DIY: Intake form requests parcel #, zoning, and floor-by-floor dimensions. Agent extracts from PDF + photos; validates 4 bedrooms ≥80 sq ft. Outcome: JSON with Type S (upstairs) and NS1 (downstairs) classification; fire access road noted for Olympia.",
      "Case Study C – Rural Chehalis with pond: 1,400 sq ft, 2 bedrooms, large lot with unfenced pond. DIY: Intake must capture water hazards (WAC 388-76-10783/10784). Agent questionnaire adds ‘bodies of water, pools, distance from dwelling.’ Outcome: JSON plus hazard flag – fence ≥48″ and self-latching gate required; fed into later labs.",
    ],
    steps: [
      "Create intake questionnaire: moltbot agent --message \"Generate AFH property intake form: fields for address, parcel #, zoning, each room dimensions (L×W), ceiling height, window locations and sill height, existing smoke/CO alarms, photos of each room and exterior, water hazards\" --thinking high.",
      "Save output as PDF or form link; send to mock client (or use your own property).",
      "Simulate client upload: place 5–10 photos and a dimension sketch in a folder; or use sample files from curriculum.",
      "Run extraction: moltbot agent --message \"Extract key data from [uploaded files or paste description]: output JSON with rooms (name, width_ft, length_ft, sq_ft), windows (room, sill_inches, opening_sqft), hazards, existing_alarms\" --thinking high.",
      "Validate: Check every bedroom has sq_ft ≥ 80 (WAC 388-76-10690). If any room < 80, note ‘Not usable as bedroom’ or plan modification.",
      "Document gaps: List missing sill heights, missing room dimensions, or unclear egress; re-request from client or assume worst case (e.g. sill 48″) for iteration.",
    ],
    sampleData: '{"address":"123 Main St, Lacey, WA","parcel":"123456789","floors":[{"level":"main","rooms":[{"name":"Bedroom 1","width_ft":10,"length_ft":12,"sq_ft":120,"sill_inches":42},{"name":"Bedroom 2","width_ft":11,"length_ft":13,"sq_ft":143,"sill_inches":48}]}]}',
    diyTips: [
      "Use a tape measure and write dimensions on a hand-drawn sketch; photo the sketch and upload – AI can parse it.",
      "Measure sill height from floor to bottom of window opening; round down if between 44–45″ to avoid rejection.",
      "If you don’t have parcel #, get it from county assessor website (e.g. Thurston County parcel search).",
      "One photo per room plus one full exterior is minimum; more angles improve extraction.",
    ],
    deliverables: ["Intake questionnaire (PDF or link)", "Extraction JSON with rooms, windows, hazards", "Gap list (missing data or compliance flags)", "Validation note: all bedrooms ≥80 sq ft or exception list"],
    debrief: "WAC 388-76-10690 requires 80 sq ft usable per bedroom; WAC 388-76-10783/10784 require water hazard controls. Incomplete intake causes rework in Labs 2–3. DIY success depends on clear photos and dimensions.",
  },
  2: {
    caseStudies: [
      "Case Study A – Same Lacey ranch: From Lab 1 JSON (3 bedrooms, one sill 48″). DIY: Feed JSON into agent; request 8.5×11, 1/4″=1′, label A–C, Type NS1 (one grade egress). Outcome: PDF with Bedroom B still showing high window – to be fixed in Lab 3.",
      "Case Study B – Olympia two-story: JSON has 4 bedrooms, 2 up / 2 down. DIY: Request two sheets (first floor, second floor); classify upstairs as Type S, downstairs as NS1. Add smoke alarm symbols per IRC R314 (one per bedroom, hall, level). Outcome: 2-page PDF, ready for egress iteration.",
      "Case Study C – Chehalis: 2 bedrooms, pond on property. DIY: Base plan includes ‘water hazard – fence zone’ note on site; floor plan shows 2 bedrooms, NS1. Outcome: Plan plus note for Lab 6 city adaptation (fence detail).",
    ],
    steps: [
      "Prepare JSON: Use output from Lab 1 or the sample JSON from Lab 1 section.",
      "Generate base plan: moltbot agent --message \"Generate scaled 2D floor plan (1/4 inch = 1 foot) on 8.5x11 PDF from this JSON: [paste JSON]. Label bedrooms A, B, C... with dimensions. Classify sleeping rooms Type S or NS1 per WAC 51-51-0330. Show smoke alarm locations: one per bedroom, hallway, each level per IRC R314\" --thinking high.",
      "If multi-floor: Request one page per floor; label ‘First Floor’ and ‘Second Floor’.",
      "Add scale bar and north arrow if your city expects it (e.g. Olympia).",
      "Export/save PDF; name it e.g. AFH_BasePlan_123Main_Lacey.pdf.",
    ],
    diyTips: [
      "Keep JSON minimal but complete: room names, dimensions, floor level. Extra fields (sill height) can be used in Lab 3.",
      "If agent output is not to scale, prompt again: ‘Ensure scale 1/4 inch = 1 foot and show scale bar.’",
      "Use 8.5×11 so it matches WABO checklist submission size.",
    ],
    deliverables: ["Base 2D floor plan PDF (8.5×11, scaled)", "Bedrooms labeled A–F (or as many as applicable)", "Smoke alarm symbols per IRC R314", "Type S/NS1/NS2 noted on plan or in caption"],
    debrief: "WAC 51-51-0330 and IRC R330 define Type S/NS1/NS2. Base plan is the foundation for all later edits; errors here propagate. DIY: no CAD required – AI generates from JSON.",
  },
  3: {
    caseStudies: [
      "Case Study A – Lacey ranch, Bedroom B sill 48″: DIY: Run validation prompt; get ‘Bedroom B sill 48″ – exceeds 44″ per R330.6.’ Edit prompt: ‘Lower Bedroom B window sill to 42 inches; show replacement window with 5.7 sq ft clear opening, min 24\" high × 20\" wide.’ Re-run validation; repeat until clean. Outcome: Plan v2 with compliant window; 3 cycles typical.",
      "Case Study B – Olympia, one bedroom 78 sq ft: Validation flags ‘Bedroom 2 usable area 78 sq ft < 80 sq ft (WAC 388-76-10690).’ DIY: Option 1 – remove closet from bedroom area and recalc; Option 2 – expand room (wall move). Edit prompt: ‘Increase Bedroom 2 to 80 sq ft minimum; show modified layout.’ Outcome: Revised plan with 80+ sq ft.",
      "Case Study C – Egress path blocked: Validation: ‘Path from Bedroom C to exterior passes through lockable door.’ DIY: Edit prompt: ‘Ensure all egress paths use doors openable from inside without key per R330.4; no deadbolts only.’ Outcome: Plan annotated with hardware note.",
    ],
    steps: [
      "Run validation: moltbot agent --message \"Validate this floor plan against WABO checklist Sections 3–9: (1) Every bedroom window sill ≤44 inches AFF, clear opening ≥5.7 sq ft, 24\" high × 20\" wide per R330.6. (2) Every bedroom ≥80 sq ft usable per WAC 388-76-10690. (3) Egress paths unobstructed; no lockable-from-outside-only doors blocking exit per R330.4. List every violation with room and rule.\" --thinking high.",
      "Paste or attach current plan; get violation list.",
      "For each violation, run an edit prompt: e.g. moltbot agent --message \"Edit plan: [specific fix, e.g. lower Bedroom B sill to 42 inches, replace window with 5.7 sq ft opening]. Keep scale and labels.\" --thinking high.",
      "Re-run validation on the edited plan. Repeat Steps 1–3 until zero violations (or document accepted exceptions).",
      "Cycle 1: Sill/egress fixes. Cycle 2: Area/grab-bar prep. Cycle 3: Final pass.",
    ],
    diyTips: [
      "R330.6: No steps or platforms count toward sill height; sill must be ≤44″ from floor. Document replacement window specs for contractor.",
      "If a room can’t meet 80 sq ft without major construction, it cannot be a bedroom – mark as den/office and don’t count toward resident capacity.",
      "Keep a change log (Plan v1, v2, v3) with one-line description per fix for inspector.",
    ],
    deliverables: ["Validated floor plan PDF (no unresolved violations)", "Change log (list of edits from validation)", "Notes for any follow-up construction (e.g. window replacement, door hardware)"],
    debrief: "IRC R330.6 and WAC 388-76-10690 are the two most common failure points. Three iteration cycles are realistic for DIY; more cycles if multiple bedrooms have sills >44″.",
  },
  4: {
    caseStudies: [
      "Case Study A – Lacey ranch: Add grab bars in one full bath (R330.8: 33–36″ height, 1.25–2″ diameter, 250 lb, 1.5″ from wall); add ramp at front door for NS1 (slope 1:12, handrails per R311.8); add interconnected smoke/CO per R314/R315. DIY: Single prompt for all; then separate prompt for ramp detail sheet for Lacey permit. Outcome: Plan with symbols + one ramp detail page.",
      "Case Study B – Olympia two-story: Two baths – put grab bars in both for better resident access. Alarms: one per bedroom, hall, each level; CO on each level. No ramp needed (two grade-level doors). Outcome: Plan annotated with alarm and grab-bar locations.",
      "Case Study C – Chehalis with pond: Same safety features plus ‘Fence zone 48\" min, self-latching gate’ per WAC 388-76-10784. DIY: Prompt for fence location on site plan; note alarm on gate if required by jurisdiction. Outcome: Floor plan + site note for fence.",
    ],
    steps: [
      "Grab bars: moltbot agent --message \"Add grab bars to at least one bathroom on this plan per R330.8: height 33–36 inches, diameter 1.25–2 inches, 250 lb strength, 1.5 inches from wall. Show location (beside toilet, in shower/tub).\" --thinking high.",
      "Ramps (if NS1 and not grade-level): moltbot agent --message \"Add ramp for accessible egress: max slope 1:12, handrails both sides per IRC R311.8. Show ramp on plan and provide separate detail: plan view, section, dimensions.\" --thinking high.",
      "Smoke/CO: moltbot agent --message \"Add interconnected smoke and CO alarm locations per IRC R314/R315: one per bedroom, one per hallway, one per level. Mark as interconnected/hardwired.\" --thinking high.",
      "Fire extinguisher: Label 2A:10B:C type, accessible locations (e.g. kitchen, near exit).",
    ],
    diyTips: [
      "Lacey often requires a separate permit for ramps; generate a ramp detail page for that submission.",
      "Grab bars: 33–36″ height is standard; show both vertical and horizontal positions where applicable.",
      "If using battery alarms for existing construction, confirm with city – many jurisdictions require hardwired/interconnected for AFH.",
    ],
    deliverables: ["Floor plan with grab bars, ramp (if any), smoke/CO, extinguisher", "Ramp detail sheet if ramp added", "One-line spec list (e.g. ‘Smoke/CO: hardwired, interconnected’)"],
    debrief: "R330.8 (grab bars) and R311.8 (ramps) and IRC R314/R315 (alarms) are WABO checklist items. DIY: order grab bars and alarm models that meet specs; ramp usually requires contractor unless you have construction experience.",
  },
  5: {
    caseStudies: [
      "Case Study A – Lacey ranch: From Lab 4 plan (2D with grab bars, ramp, alarms). DIY: Prompt Nano Banana (or Gemini) via Moltbot: ‘Convert this 2D AFH floor plan to 3D: extrude walls, show grab bars in bath, ramp at entry, smoke alarms on ceiling. Generate two walkthrough views: (1) from front door through living area to bedroom hall, (2) from bedroom hall to bathroom.’ Outcome: 3D renders (PNG/GLB) for client and inspector.",
      "Case Study B – Olympia two-story: Request 3D with two levels; highlight egress path from upstairs bedroom to exterior. Outcome: 3D with path arrow or color-coded egress.",
      "Case Study C – Chehalis: 3D of interior plus one exterior view showing fence zone. Outcome: Interior 3D + site 3D or overlay.",
    ],
    steps: [
      "Prepare: Have the latest 2D plan (PDF or image) from Labs 2–4.",
      "Convert to 3D: moltbot agent --message \"Convert this 2D AFH floor plan to 3D model using Nano Banana (or Gemini): extrude rooms with standard ceiling height, show grab bars in bathroom, smoke alarms on ceiling, ramp with 1:12 slope if present. Export 3D as walkthrough views.\" --thinking high.",
      "Request specific views: e.g. ‘Generate view from bedroom A toward window’ and ‘View from bathroom showing grab bars.’",
      "Export: Save as PNG for submission; GLB if interactive viewer needed.",
      "Validate: Check that egress path is visible and clearances look correct (e.g. 32″ door width).",
    ],
    diyTips: [
      "Nano Banana / Gemini: Describe the 2D plan in text if image upload isn’t available (e.g. ‘3-bedroom ranch, bathroom with grab bars left of toilet, ramp at front’).",
      "Use 3D for client presentations and for inspector clarity; 2D plan remains the legal submission.",
      "If 3D tool fails, a simple isometric hand sketch with dimensions can supplement 2D for some jurisdictions.",
    ],
    deliverables: ["3D renders (PNG or GLB) – at least 2 views", "Short caption per view (e.g. ‘Egress from Bedroom A to exterior’)", "Optional: 360° or walkthrough link if tool supports it"],
    debrief: "3D is not required by WABO but helps inspectors and clients visualize. DIY: free tools (Gemini, Nano Banana) can produce good-enough renders; professional 3D is optional.",
  },
  6: {
    caseStudies: [
      "Case Study A – Lacey: Plan from Lab 5. DIY: Lacey ramp – create separate ramp detail (plan, section, slope 1:12, handrails). Add to package as ‘Ramp permit detail.’ Zoning: Confirm AFH allowed (LMC 16.06.095); add one-line note on cover. Outcome: Same plan + Lacey ramp sheet + zoning note.",
      "Case Study B – Olympia: Add fire access road note: ‘Fire apparatus access 20 ft width per [local code].’ Ensure CO alarms on each level are explicit. Outcome: Plan + fire access note.",
      "Case Study C – Chehalis: Add site detail: fence 48″ min around pond, self-latching gate; optional gate alarm per WAC 388-76-10784. Coordinate with Lewis County for septic/well if rural. Outcome: Plan + site/fence note + note ‘Septic/well review per Lewis County.’",
    ],
    steps: [
      "Choose target city: Olympia, Lacey, Tumwater, Centralia, or Chehalis.",
      "Olympia: moltbot agent --message \"Adapt this AFH plan for Olympia submission: add fire access road 20 ft width note; ensure CO alarms each level; add any Olympia Community Development requirement note.\" --thinking high.",
      "Lacey: moltbot agent --message \"Adapt for Lacey: add separate ramp detail sheet (plan, section, 1:12 slope, handrails) for ramp permit; note LMC 16.06.095 AFH as family dwelling.\" --thinking high.",
      "Chehalis/Centralia (Lewis): moltbot agent --message \"Adapt for Lewis County/Chehalis: add water hazard fence note (48\" min, self-latching gate); add note for septic/well review if rural.\" --thinking high.",
      "Tumwater: Similar to Olympia; add fire access if applicable.",
      "Save city-specific package: e.g. AFH_123Main_Lacey_Submission.pdf.",
    ],
    diyTips: [
      "Call or check city website for current AFH/permit checklist – some cities add local forms.",
      "Ramp permit in Lacey can be separate; submit building plan + ramp detail together if doing both.",
      "Rural: Lewis County often requires septic approval; get that before or with building permit.",
    ],
    deliverables: ["City-adapted plan (with city-specific notes)", "Ramp detail sheet (Lacey if ramp)", "Site/fence note (Chehalis if water hazard)", "One-page city checklist or link to city page"],
    debrief: "Each city has small differences; one base plan can be adapted for all five with add-on sheets and notes. DIY: one afternoon per city to research and add notes.",
  },
  7: {
    caseStudies: [
      "Case Study A – Full audit: Run WABO Sections 3–9 against Lacey ranch plan. Sections 3–4: applicant self-cert (property info, floor plan). Sections 5–9: inspector use – we simulate. DIY: Prompt agent to check each item: egress classification, sill heights, alarms, grab bars, extinguisher, address numbers, etc. Outcome: Checklist with Pass/Fail per item; fix any Fail.",
      "Case Study B – Two-story: Audit both floors; ensure Type S and NS1 clearly labeled and paths shown. Outcome: Audit report + updated plan with labels.",
      "Case Study C – After rejection: Simulate inspector finding ‘Smoke alarms not shown in Bedroom C.’ Add alarm symbol; re-run audit. Outcome: Clean audit and revised plan.",
    ],
    steps: [
      "Obtain WABO AFH Local Building Inspection Checklist (Form from www.wabo.org or DSHS). Sections 3–9 cover: property/floor plan (3–4), inspector verification of egress, alarms, grab bars, etc. (5–9).",
      "Run full validation: moltbot agent --message \"Act as WABO checklist auditor. For this AFH floor plan, check: (Section 3–4) Property info, floor plan 8.5x11, rooms labeled A–F, dimensions, egress paths. (Sections 5–9) Each bedroom: egress type, window sill ≤44\", opening ≥5.7 sq ft. Whole home: smoke/CO interconnected, grab bars in bath, fire extinguisher 2A:10B:C, address numbers. Output Pass/Fail per item and list fixes needed.\" --thinking high.",
      "Apply fixes for every Fail; re-run until all Pass.",
      "Document: Keep final audit output as part of permit package.",
    ],
    diyTips: [
      "Use the actual WABO form PDF so you don’t miss items; cross-check agent output against form.",
      "Address numbers 6″ min – often missed; add to plan or photo of installed numbers.",
      "If one item can’t be fixed (e.g. existing non-compliant window), document ‘To be replaced before occupancy’ and get inspector sign-off.",
    ],
    deliverables: ["Completed WABO checklist (Sections 3–4 filled; 5–9 simulated or ready for inspector)", "Audit report (Pass/Fail list)", "Revised plan with all fixes"],
    debrief: "WABO checklist is what the local building official uses. DIY: doing the audit yourself catches 90% of issues before submission.",
  },
  8: {
    caseStudies: [
      "Case Study A – Lacey ranch: Compile (1) WABO checklist pages 1–4 completed, (2) 2D floor plan PDF, (3) 3D views (2 PNGs), (4) Ramp detail sheet, (5) Cover letter: ‘AFH conversion 123 Main St, Lacey; WAC 388-76, 51-51-0330; request building inspection.’ Outcome: Single PDF or zip for upload.",
      "Case Study B – Olympia: Same structure; replace ramp sheet with fire-access note if no ramp. Outcome: Package ready for Olympia portal.",
      "Case Study C – Chehalis: Add fence/site sheet. Outcome: Package with site detail.",
    ],
    steps: [
      "Gather: WABO checklist (1–4), final 2D plan, 3D renders, city-specific sheets (ramp, fence, fire access), spec list (alarms, grab bars).",
      "Cover letter: moltbot agent --message \"Write a one-page cover letter for AFH building permit submission: address [City] Building Dept, property address, brief description (e.g. single-family to AFH conversion), reference WAC 388-76 and WAC 51-51-0330, request inspection. Professional tone.\" --thinking high.",
      "Merge PDFs: Use a PDF tool (e.g. Preview, Adobe, or free online) to combine in order: cover letter, checklist, 2D plan, 3D, ramp/site sheets. Or keep as separate files in one folder and zip.",
      "Name: AFH_ [address]_ [City]_Submission.pdf (or .zip).",
    ],
    diyTips: [
      "Some cities accept one combined PDF; others want separate files. Check city portal or permit desk.",
      "Include a short ‘Summary of Modifications’ (e.g. ‘Window replacement Bedroom B; ramp at front; grab bars in bath’) so inspector sees scope quickly.",
    ],
    deliverables: ["Combined permit package (PDF or zip)", "Cover letter", "Summary of modifications (optional but helpful)"],
    debrief: "A complete package reduces back-and-forth. DIY: 30–60 minutes to assemble after all prior labs are done.",
  },
  9: {
    caseStudies: [
      "Case Study A – Rejection: ‘Bedroom B window sill height not verified.’ DIY: Add a detail or note on plan: ‘Window replacement: sill 42″ AFF, 5.7 sq ft clear opening.’ Re-submit with note. Outcome: Before (plan only) / After (plan + detail note).",
      "Case Study B – Rejection: ‘Smoke alarms not shown in Bedroom C.’ DIY: Add alarm symbol in Bedroom C; note ‘Hardwired, interconnected.’ Re-run Lab 7 audit; resubmit. Outcome: Revised plan + audit.",
      "Case Study C – Rejection: ‘Ramp handrail not continuous.’ DIY: Edit ramp detail to show handrail continuous full length; resubmit ramp sheet. Outcome: Revised ramp detail.",
    ],
    steps: [
      "Simulate rejection: Use a sample comment (e.g. ‘Sill height Bedroom B not shown’ or ‘Grab bar spec missing’).",
      "Identify fix: Map comment to WAC/IRC (e.g. R330.6 for sill).",
      "Apply fix: Use same edit/validation prompts from Labs 3–4; add note or detail as needed.",
      "Document before/after: Keep v1 (rejected) and v2 (revised) with one-line description of fix.",
      "Re-run Lab 7 validation on v2 to ensure no new issues.",
    ],
    diyTips: [
      "Real rejections often ask for ‘verification’ – add a note or detail that explicitly states the requirement and compliance.",
      "Keep a log of inspector comments and your fixes for future projects.",
    ],
    deliverables: ["Before plan (rejection version)", "After plan (revised with fix)", "Short narrative: rejection reason + fix applied"],
    debrief: "Mock rejection trains you for real ones. DIY: most first-time submissions get one round of comments; revising quickly avoids delay.",
  },
  10: {
    caseStudies: [
      "Case Study A – Full DIY from scratch: Use a real or mock property (e.g. 123 Oak St, Lacey – 3 bed, 1 bath ranch). Complete Labs 1–9 in sequence: intake → JSON → base plan → egress iteration → safety features → 3D → Lacey adaptation → WABO audit → package. Time: 4 hours with Moltbot. Outcome: Submission-ready package for 123 Oak St.",
      "Case Study B – Two clients in one day: Property 1 – Olympia (no ramp); Property 2 – Chehalis (pond). Do intake and base plan for both; then city-adapt and package each. Outcome: Two complete packages.",
      "Case Study C – With real client: Client has 4-bed home in Tumwater. You do intake call, receive photos/dimensions, run Labs 1–8, send draft package for client review, then add cover letter and submit. Outcome: Real submission + client sign-off.",
    ],
    steps: [
      "Select property: Real (with permission) or mock (invent address, use sample dimensions).",
      "Lab 1: Intake form → client upload or paste data → extraction → JSON. (30 min)",
      "Lab 2: Base 2D plan from JSON. (20 min)",
      "Lab 3: Validate → edit → validate (3 cycles). (45 min)",
      "Lab 4: Grab bars, ramp if needed, alarms, extinguisher. (25 min)",
      "Lab 5: 3D conversion, 2 views. (25 min)",
      "Lab 6: City-specific sheets and notes. (20 min)",
      "Lab 7: Full WABO audit; fix until clean. (30 min)",
      "Lab 8: Compile package, cover letter. (25 min)",
      "Lab 9: Simulate one rejection; fix and document. (20 min)",
      "Review: Walk through package as if you are the inspector; fix any last gaps.",
    ],
    sampleData: undefined,
    diyTips: [
      "Use a timer per lab to stay within 4 hours total; skip 3D if time is short (2D is sufficient for permit).",
      "Template your cover letter and checklist so you only fill in address and city.",
      "After capstone, save a ‘master’ package as template for same city.",
    ],
    deliverables: ["Complete permit package (PDF or zip) for one property", "Checklist of labs completed", "Time log (optional)", "One-page reflection: what you’d do differently next time"],
    debrief: "End-to-end in 4 hours is achievable with Moltbot once you’ve done Labs 1–9 once. DIY: no architect needed; consultant can offer this as a fixed-scope service.",
  },
};

export default function Module3LabsPage() {
  const [openLab, setOpenLab] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-500">
        <Link href="/labs" className="hover:underline">Labs</Link>
        {" → "}
        Module 3
      </p>
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Module 3 Labs: Building Inspection and WABO Compliance (Expanded)
        </h1>
        <p className="mt-2 text-slate-600">
          Detailed, DIY-friendly labs with realistic case studies. Use Moltbot/Design Agent for ~70% automation. Apply on your own property or mock clients.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Lab list
        </h2>
        <div className="space-y-2">
          {labs.map((lab) => {
            const expanded = expandedContent[lab.id];
            const isOpen = openLab === lab.id;
            return (
              <div
                key={lab.id}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenLab(isOpen ? null : lab.id)}
                  className="w-full text-left px-4 py-3 flex flex-wrap items-center gap-2 hover:bg-slate-50"
                >
                  <span className="font-mono text-slate-500">Lab {lab.id}</span>
                  <span className="font-medium text-afh-primary">{lab.title}</span>
                  <span className="text-slate-500 text-sm">{lab.time}</span>
                  <span className="text-slate-400 text-sm">· {lab.focus}</span>
                  <span className="ml-auto text-slate-400">{isOpen ? "▼" : "▶"}</span>
                </button>
                {isOpen && expanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-slate-100 space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold text-slate-800 mt-3">Case studies (DIY)</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-2 text-slate-700">
                        {expanded.caseStudies.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Steps</h3>
                      <ol className="list-decimal pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </div>
                    {expanded.sampleData && (
                      <div>
                        <h3 className="font-semibold text-slate-800">Sample data (JSON)</h3>
                        <pre className="mt-1 p-2 bg-slate-100 rounded text-xs overflow-x-auto whitespace-pre-wrap">
                          {expanded.sampleData}
                        </pre>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-slate-800">DIY tips</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.diyTips.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Deliverables</h3>
                      <ul className="list-disc pl-6 mt-1 space-y-1 text-slate-700">
                        {expanded.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Debrief</h3>
                      <p className="mt-1 text-slate-700">{expanded.debrief}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          How to use these labs (DIY)
        </h2>
        <ul className="text-slate-700 text-sm list-disc pl-6 space-y-1">
          <li>Work in order: Lab 1 → 10. Each lab builds on the previous.</li>
          <li>Use one mock property (e.g. 1960s ranch, Lacey) for Labs 1–9; do Lab 10 as full capstone with the same or a second property.</li>
          <li>Replace sample addresses and dimensions with your own (or a client’s) when doing real work.</li>
          <li>Moltbot commands assume Node ≥22 and <code className="bg-white px-1 rounded">moltbot agent</code> with <code className="bg-white px-1 rounded">--thinking high</code> for complex prompts.</li>
          <li>WAC/IRC references: WAC 388-76 (AFH), WAC 51-51-0330 / IRC R330 (building), R314/R315 (alarms), R311.8 (ramps).</li>
        </ul>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/labs" className="hover:underline">← Labs</Link>
        {" · "}
        <Link href="/curriculum/module-3" className="hover:underline">Module 3</Link>
        {" · "}
        <Link href="/drawing" className="hover:underline">Drawing Workflow</Link>
      </p>
    </div>
  );
}
