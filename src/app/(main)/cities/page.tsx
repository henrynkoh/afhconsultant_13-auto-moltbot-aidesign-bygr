import Link from "next/link";

const cities = [
  {
    name: "Centralia",
    county: "Lewis County",
    summary:
      "Emphasizes septic/well inspections for rural homes; permits via Lewis County Community Development. Fees ~$300; focus on water hazards.",
    process:
      "Submit WABO checklist page 1 + plans; coordinate with Lewis County Community Development. Rural sites may require septic/well review.",
    ref: "Lewis County Community Development",
  },
  {
    name: "Lacey",
    county: "Thurston County",
    summary:
      "Requires separate permits for ramps/alterations; zoning under LMC 16.06.095 defines AFH as family abode. Submit via online portal; inspections align with WABO plus environmental reviews.",
    process:
      "Permit required for alterations (enlarge, repair, change occupancy); ramp permits separate. Submit WABO checklist page 1 + plans. Lacey municipal code 16.06.095.",
    ref: "Lacey Municipal Code (LMC)",
  },
  {
    name: "Tumwater",
    county: "Thurston County",
    summary:
      "Similar to Lacey; prioritizes fire access (min 20 ft roads). Reduced fees possible for minor mods.",
    process:
      "Submit WABO checklist + floor plans; fire access roads min 20 ft where applicable. Community Development.",
    ref: "Tumwater Community Development",
  },
  {
    name: "Olympia",
    county: "Thurston County",
    summary:
      "Strict on egress and CO alarms; applications through Community Planning & Development. Timelines 4–6 weeks.",
    process:
      "Submit WABO checklist + plans; focus on egress, fire plans, CO alarms. Fire access road 20 ft where required. Olympia Community Planning & Development.",
    ref: "Olympia Community Planning & Development",
  },
  {
    name: "Chehalis",
    county: "Lewis County",
    summary:
      "Rural focus on site safety (e.g. fences for bodies of water); coordinate with Chehalis Building Dept.",
    process:
      "Submit WABO checklist + plans; water hazard fences ≥48\", self-latching gates. Coordinate with Chehalis Building Dept and Lewis County for rural sites.",
    ref: "Chehalis Building Dept, Lewis County",
  },
];

export default function CitiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          City Guides (WA): AFH Permit Submission
        </h1>
        <p className="mt-2 text-slate-600">
          Centralia, Lacey, Tumwater, Olympia, Chehalis. Permit process, fees,
          WABO checklist submission, and local nuances for AFH conversion and
          initial inspection prep.
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          Common Across All
        </h2>
        <ul className="text-slate-700 text-sm list-disc pl-6 space-y-1">
          <li>No occupancy change without permit; conversions treated as Group R-3 per IRC.</li>
          <li>Submit WABO Local Building Inspection Checklist (inspector completes pages 4–9).</li>
          <li>Floor plan 8.5×11, all floors, labeled rooms A–F, dimensions, egress paths, smoke alarms.</li>
          <li>Fees typically $200–$1,000 per permit; timelines 4–12 weeks.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          City-Specific Guides
        </h2>
        <div className="space-y-4">
          {cities.map((c) => (
            <div
              key={c.name}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <h3 className="font-semibold text-afh-primary">
                {c.name} ({c.county})
              </h3>
              <p className="mt-1 text-slate-600 text-sm">{c.summary}</p>
              <p className="mt-2 text-slate-700 text-sm">
                <strong>Process:</strong> {c.process}
              </p>
              <p className="mt-1 text-slate-500 text-xs">
                Ref: {c.ref}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-sm text-slate-600">
        <p>
          <strong>WABO:</strong> Washington Association of Building Officials —
          www.wabo.org. Local building official in Washington; adult family
          home requirements, checklist, floor plan, and related documents for
          AFH permit available on inspector information page.
        </p>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/curriculum/module-3" className="hover:underline">
          → Module 3 (WABO Compliance)
        </Link>
        {" · "}
        <Link href="/drawing" className="hover:underline">
          Drawing Workflow
        </Link>
      </p>
    </div>
  );
}
