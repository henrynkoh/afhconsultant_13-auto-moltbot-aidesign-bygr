"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Data Intake",
    desc: "Client uploads property data (photos, dimensions) via Moltbot",
    detail:
      "Educate client on required data (address, parcel #, dimensions, photos). Use moltbot agent to generate intake questionnaire. Secure uploads via moltbot config; extract dimensions with OCR/AI. Validate bedrooms ≥80 sq ft (WAC 388-76-10690). Output: JSON dataset.",
  },
  {
    id: 2,
    title: "Initial Generation",
    desc: "Use agent for base plan",
    detail:
      "moltbot agent --message \"Generate scaled 2D floor plan (1/4 inch = 1 ft) on 8.5x11 PDF from [intake JSON]; label bedrooms A-F ≥80 sq ft, classify Type S/NS1/NS2, show smoke alarm locations per IRC R314\" --thinking high. City-specific tweaks (e.g. Olympia fire access). Output: base 2D PDF.",
  },
  {
    id: 3,
    title: "Validate and Edit",
    desc: "Compliance audit and iteration",
    detail:
      "moltbot agent --message \"Validate plan against WABO checklist Sections 3-9: grab bars 250 lb, interconnected alarms, sill ≤44″; flag issues\" --thinking high. Automated fixes (e.g. lower sill, add compliant window). Run 3–5 loops until clean.",
  },
  {
    id: 4,
    title: "3D Conversion",
    desc: "Nano Banana / Gemini for renders",
    detail:
      "moltbot agent --message \"Convert refined 2D plan to 3D using Nano Banana: extrude rooms, grab bars, ramps 1:12, walkthrough views\" --thinking high. Export GLB/PNG; validate clearances in 3D.",
  },
  {
    id: 5,
    title: "Packaging",
    desc: "Compile PDFs for permit submission",
    detail:
      "moltbot agent --message \"Compile permit package: merge 2D/3D PDFs, annotate WABO Sections 1-4, cover letter citing WACs 388-76 and 51-51-0330\" --thinking high. Include fire exit diagram, materials list.",
  },
  {
    id: 6,
    title: "Delivery / Debug",
    desc: "Send and log",
    detail:
      "moltbot message send --to [client] --message \"Attached: Final AFH submission package – submit to [city dept]\". moltbot logs --follow for debugging; archive with moltbot status --all.",
  },
];

export default function DrawingPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Drawing Workflow for AFH Permit
        </h1>
        <p className="mt-2 text-slate-600">
          Step-by-step workflow using Moltbot and Design Agent: data intake →
          base plan → validate & edit → 3D conversion (Nano Banana/Gemini) →
          package PDFs → delivery. DIY permit-ready for Centralia, Lacey,
          Tumwater, Olympia, Chehalis.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Workflow Steps
        </h2>
        <div className="space-y-3">
          {steps.map((s) => (
            <div
              key={s.id}
              className="rounded-lg border border-slate-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActiveStep(activeStep === s.id ? null : s.id)}
                className="w-full text-left p-4 flex items-center justify-between hover:bg-slate-50"
              >
                <span className="font-medium text-afh-primary">
                  {s.id}. {s.title}
                </span>
                <span className="text-slate-500 text-sm">{s.desc}</span>
              </button>
              {activeStep === s.id && (
                <div className="px-4 pb-4 pt-0 text-slate-600 text-sm border-t border-slate-100">
                  {s.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          Entry Mode: Basic Floor Plan Data
        </h2>
        <p className="text-slate-700 text-sm">
          When the entry form is filled with basic floor plan data and dimension
          data of a property, use Moltbot + Design Agent + Nano Banana (or other
          AI-powered tools) to turn 2D into fully functioning 3D for submission
          to the city (Centralia, Lacey, Tumwater, Olympia, Chehalis) without
          using a third-party architect or designer, in preparation for city
          permit application.
        </p>
        <p className="mt-2 text-slate-600 text-sm">
          ~70% of this app is allocated to Design Agent and Moltbot for
          automatically making drawings good enough to meet all requirements by
          local building inspectors specialized in AFH permit (WABO,
          www.wabo.org).
        </p>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/curriculum/module-3" className="hover:underline">
          → Module 3 (WABO Compliance)
        </Link>
        {" · "}
        <Link href="/moltbot" className="hover:underline">
          Moltbot Scripts & 20 Prompts
        </Link>
        {" · "}
        <Link href="/cities" className="hover:underline">
          City Guides
        </Link>
      </p>
    </div>
  );
}
