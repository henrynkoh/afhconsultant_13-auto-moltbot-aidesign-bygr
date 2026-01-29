import Link from "next/link";

const module3Labs = [
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

const module4Labs = [
  { id: 1, title: "Checklist Intake and Auto-Fill (Form 10-695)", time: "1 hr", focus: "80% AI" },
  { id: 2, title: "Postings and Documentation Setup", time: "1.5 hrs", focus: "Rights, CRU, emergency" },
  { id: 3, title: "Room and Privacy Compliance Check", time: "1.5 hrs", focus: "WAC 388-76-10685/10690" },
  { id: 4, title: "Medication and Safety Storage Setup", time: "1 hr", focus: "WAC 388-76-10455" },
  { id: 5, title: "Emergency and Evacuation Planning", time: "2 hrs", focus: "Drill schedule, 3D routes" },
  { id: 6, title: "Phone and Resident Access Simulation", time: "1 hr", focus: "24/7 access" },
  { id: 7, title: "Mock DSHS Initial Inspection Role-Play", time: "2–3 hrs", focus: "Group" },
  { id: 8, title: "Integration with Building Package", time: "1.5 hrs", focus: "WABO + 10-695" },
  { id: 9, title: "Common Citation Remediation", time: "1.5 hrs", focus: "DSHS citations" },
  { id: 10, title: "Capstone – Full Initial Inspection Prep", time: "3–4 hrs", focus: "Complete binder" },
];

const module5Labs = [
  { id: 1, title: "Licensing/Setup Question Drill (Q1–20)", time: "1 hr", focus: "80% auto-quiz" },
  { id: 2, title: "Building/Safety Scenario Simulation (Q21–50)", time: "1.5 hrs", focus: "Scenarios" },
  { id: 3, title: "Resident Care Question Mastery (Q51–80)", time: "1.5 hrs", focus: "Meds, abuse" },
  { id: 4, title: "Operations/Best Practices Deep Dive (Q81–100)", time: "1 hr", focus: "Group debate" },
  { id: 5, title: "Full Top 100 Timed Quiz", time: "1.5 hrs", focus: "45 min quiz" },
  { id: 6, title: "Mock AFH Admin Training Session", time: "2 hrs", focus: "Deliver training" },
  { id: 7, title: "Reasoning Justification Workshop", time: "1 hr", focus: "WAC cite + logic" },
  { id: 8, title: "Integration Capstone – Full AFH Consultant Simulation", time: "2–3 hrs", focus: "Intake → design → checklist → Q&A" },
];

export default function LabsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Hands-On Labs (Modules 3–5)
        </h1>
        <p className="mt-2 text-slate-600">
          Module 3: Building Inspection & WABO (15–20 hrs). Module 4: Initial
          Inspection Preparation (10–15 hrs). Module 5: AFH Admin Training &
          Question Mastery (8–12 hrs). All use Moltbot/Design Agent for 70–80%
          automation.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Module 3 Labs: Building Inspection and WABO Compliance
        </h2>
        <p className="text-slate-600 text-sm mb-3">
          <Link href="/labs/module-3" className="text-afh-primary font-medium hover:underline">
            Open expanded Module 3 Labs (5× content, case studies, DIY steps) →
          </Link>
        </p>
        <ul className="space-y-2">
          {module3Labs.map((lab) => (
            <li
              key={lab.id}
              className="flex flex-wrap items-center gap-2 rounded border border-slate-200 bg-white px-4 py-2 text-sm"
            >
              <span className="font-mono text-slate-500">Lab {lab.id}</span>
              <span className="font-medium text-afh-primary">{lab.title}</span>
              <span className="text-slate-500">{lab.time}</span>
              <span className="text-slate-400">· {lab.focus}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Module 4 Labs: Initial Inspection Preparation
        </h2>
        <p className="text-slate-600 text-sm mb-3">
          <Link href="/labs/module-4" className="text-afh-primary font-medium hover:underline">
            Open expanded Module 4 Labs (5× content, case studies, DIY steps) →
          </Link>
        </p>
        <ul className="space-y-2">
          {module4Labs.map((lab) => (
            <li
              key={lab.id}
              className="flex flex-wrap items-center gap-2 rounded border border-slate-200 bg-white px-4 py-2 text-sm"
            >
              <span className="font-mono text-slate-500">Lab {lab.id}</span>
              <span className="font-medium text-afh-primary">{lab.title}</span>
              <span className="text-slate-500">{lab.time}</span>
              <span className="text-slate-400">· {lab.focus}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Module 5 Labs: AFH Admin Training and Question Mastery
        </h2>
        <ul className="space-y-2">
          {module5Labs.map((lab) => (
            <li
              key={lab.id}
              className="flex flex-wrap items-center gap-2 rounded border border-slate-200 bg-white px-4 py-2 text-sm"
            >
              <span className="font-mono text-slate-500">Lab {lab.id}</span>
              <span className="font-medium text-afh-primary">{lab.title}</span>
              <span className="text-slate-500">{lab.time}</span>
              <span className="text-slate-400">· {lab.focus}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          Lab Structure (Template)
        </h2>
        <ul className="text-slate-700 text-sm list-disc pl-6 space-y-1">
          <li>Objective: Clear goal tied to module outcomes.</li>
          <li>Prerequisites: Data/tools (Moltbot, sample property, WAC/DSHS).</li>
          <li>Steps: Moltbot commands/prompts; AI automation %.</li>
          <li>Deliverables: Outputs to submit/review.</li>
          <li>Debrief: Pitfalls, best practices, WAC/DSHS tie.</li>
        </ul>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">
          → Curriculum
        </Link>
        {" · "}
        <Link href="/questions" className="hover:underline">
          Top 100 Questions
        </Link>
        {" · "}
        <Link href="/cost" className="hover:underline">
          Cost Estimator
        </Link>
      </p>
    </div>
  );
}
