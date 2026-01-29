import Link from "next/link";

export default function Module3Page() {
  return (
    <div className="space-y-8 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 3
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 3: Building Inspection and WABO Compliance (Weeks 3–4, 70% AI Focus)
      </h1>
      <p className="text-slate-600">
        ~100 hours equivalent content density; heavy hands-on Moltbot + Design Agent + Nano Banana (2D→3D).
      </p>

      <h2>Expanded Learning Objectives</h2>
      <ul>
        <li>Interpret and apply the full WABO Adult Family Home Local Building Inspection Checklist (Form 15-604, April 2024).</li>
        <li>Classify sleeping rooms (Type S, NS1, NS2) and ensure egress compliance per WAC 51-51-0330 / IRC R330.</li>
        <li>Generate, iterate, and validate permit-ready floor plans and 3D models using AI automation.</li>
        <li>Navigate city-specific variations (Centralia, Lacey, Tumwater, Olympia, Chehalis).</li>
        <li>Simulate and troubleshoot common inspection failures (e.g., sill &gt;44″, non-interconnected alarms).</li>
        <li>Use Moltbot to orchestrate data input → design generation → compliance check → output packaging.</li>
      </ul>

      <h2>1. Regulatory Framework Deep Dive</h2>
      <ul>
        <li><strong>WAC 388-76-10685–10795:</strong> Bedrooms private/lockable, 80 sq ft min (WAC 388-76-10690), grab bars (10730), smoke/CO (IRC R314/R315), escape windows sill ≤44″ (R330.6), grab bars 250 lb (R330.8).</li>
        <li><strong>WAC 51-51-0330 (IRC R330):</strong> Type S (stairs/elevators), NS1 (one grade-level egress/ramp), NS2 (two grade-level).</li>
        <li><strong>DSHS / WABO:</strong> Applicant completes Sections 1–4; floor plan 8.5×11, all floors, rooms A–F, dimensions, egress paths, smoke alarms.</li>
        <li><strong>City nuances:</strong> Lacey (ramp permits separate), Olympia (fire access), Chehalis (water hazards, rural).</li>
      </ul>

      <h2>2. Floor Plan and Egress Design Requirements</h2>
      <ul>
        <li>Scaled 1/4″ = 1′ on 8.5×11; label bedrooms A–F, dimensions ≥80 sq ft; egress paths; smoke/CO locations; sill ≤44″, opening ≥5.7 sq ft; doors 32″ min; grab bars 33–36″ high.</li>
        <li>Common failures: sill &gt;44″ (no steps as workaround), non-interconnected alarms, locked doors impeding egress.</li>
      </ul>

      <h2>3. Step-by-Step Workflow for Drawing and Compliance (Expanded)</h2>

      <h3>Step 1: Data Intake</h3>
      <ul>
        <li>Educate client: required data (address, parcel #, dimensions, photos). Use <code>moltbot agent --message "Generate AFH property intake questionnaire..."</code>.</li>
        <li>Secure setup: <code>moltbot config set channels.secureUpload.enabled true</code>; clients send photos/dimensions via channels.</li>
        <li>Automated extraction: <code>moltbot agent --message "Extract key data from uploaded files: parse dimensions, identify rooms, flag hazards" --thinking high</code>.</li>
        <li>Validation: cross-reference bedrooms ≥80 sq ft (WAC 388-76-10690). Output: compiled JSON for design.</li>
      </ul>

      <h3>Step 2: Initial Generation (Base Plan)</h3>
      <ul>
        <li><code>moltbot agent --message "Generate scaled 2D floor plan (1/4 inch = 1 ft) on 8.5x11 PDF from [intake JSON]; label bedrooms A-F ≥80 sq ft, classify Type S/NS1/NS2, show smoke alarm locations per IRC R314" --thinking high</code>.</li>
        <li>City-specific: e.g. Olympia fire access: <code>moltbot agent --message "Adapt base plan for Olympia: include 20 ft fire road access"</code>.</li>
      </ul>

      <h3>Step 3: Validate and Edit</h3>
      <ul>
        <li>Compliance audit: <code>moltbot agent --message "Validate plan against WABO checklist Sections 3-9: grab bars 250 lb, interconnected alarms, sill ≤44″; flag issues" --thinking high</code>.</li>
        <li>Automated fixes: <code>moltbot agent --message "Edit plan: lower Bedroom C sill to 44 inches, recalculate window opening ≥5.7 sq ft"</code>.</li>
        <li>Run 3–5 validation loops until clean.</li>
      </ul>

      <h3>Step 4: 3D Conversion (Nano Banana)</h3>
      <ul>
        <li><code>moltbot agent --message "Convert refined 2D plan to 3D using Nano Banana: extrude rooms, grab bars, ramps 1:12, walkthrough views" --thinking high</code>.</li>
        <li>Export: GLB for interactivity, PNG for static; validate clearances in 3D.</li>
      </ul>

      <h3>Step 5: Packaging</h3>
      <ul>
        <li><code>moltbot agent --message "Compile permit package: merge 2D/3D PDFs, annotate WABO Sections 1-4, cover letter citing WACs 388-76 and 51-51-0330" --thinking high</code>.</li>
      </ul>

      <h3>Step 6: Delivery / Debug</h3>
      <ul>
        <li><code>moltbot message send --to [client] --message "Attached: Final AFH submission package"</code>; <code>moltbot logs --follow</code> for debugging.</li>
      </ul>

      <h2>4. 20 Scripts/Prompts for Drawing Tasks</h2>
      <p className="cite">Use: moltbot agent --message &quot;[prompt]&quot; --thinking high</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Generate a scaled 2D floor plan for 1,500 sq ft single-family AFH conversion; 4 bedrooms ≥80 sq ft, label A–D, Type NS1 per WAC 51-51-0330.</li>
        <li>Add interconnected smoke and CO alarms: one per bedroom, hallway, level; audible throughout per IRC R314/R315.</li>
        <li>Design emergency escape windows for all bedrooms: min 5.7 sq ft opening, sill ≤44″, no steps per R330.6.</li>
        <li>Incorporate grab bars in at least one bathroom: 33–36″ high, 1.25–2″ diameter, 250 lb strength, 1.5″ from wall per R330.8.</li>
        <li>Add ramps for Type NS1: slope max 1:12, handrails per IRC R311.8; show on egress paths.</li>
        <li>Validate bedroom doors: operable from outside when locked, one-hand use per R330.4.</li>
        <li>Convert 2D plan to 3D with Nano Banana; render walkthrough from bedrooms to public way.</li>
        <li>Label fire extinguishers (2A:10B:C) and emergency lighting; accessible per WAC 388-76-10810.</li>
        <li>Design kitchen: safe appliances, ventilation, storage per WAC 388-76-10735.</li>
        <li>Add toilets/baths: one per four residents, grab bars per WAC 388-76-10780.</li>
        <li>Incorporate water hazard fences: ≥48″, self-latching gates, alarms per WAC 388-76-10784.</li>
        <li>Generate common areas: accessible paths, lighting ≥30 fc per WAC 388-76-10705/10740.</li>
        <li>Edit plan for Olympia: fire access road 20 ft wide.</li>
        <li>Check and fix sill heights &gt;44″; replace windows per R330.6.</li>
        <li>Add storage per WAC 388-76-10765.</li>
        <li>Render 3D bathroom with grab bars and 32″ min door width.</li>
        <li>Compile WABO checklist annotations: Sections 3–4 self-cert, egress arrows.</li>
        <li>Simulate Lacey ramp permit: separate ramp drawing, slope/handrails.</li>
        <li>Validate full plan against DSHS Form 10-695: postings, privacy, safety.</li>
        <li>Generate final PDF package: floor plans, 3D renders, cover letter citing WACs.</li>
      </ol>

      <h2>5. Inspection Simulation and Troubleshooting</h2>
      <p>Mock DSHS/WABO inspections (3–5 hours); address common rejections (unlabeled egress, non-hardwired alarms); post fire exit plan conspicuously.</p>

      <h2>6. Practical Exercises</h2>
      <ul>
        <li>Redesign non-compliant single-family plan (add ramp, reclassify rooms).</li>
        <li>Automate full submission for Olympia mock client.</li>
        <li>Capstone: end-to-end package for first-pass approval; peer review.</li>
      </ul>

      <p className="text-sm text-slate-500 mt-8">
        <Link href="/drawing" className="hover:underline">→ Drawing Workflow</Link>
        {" · "}
        <Link href="/moltbot" className="hover:underline">Moltbot Scripts</Link>
        {" · "}
        <Link href="/labs" className="hover:underline">Labs</Link>
      </p>
    </div>
  );
}
