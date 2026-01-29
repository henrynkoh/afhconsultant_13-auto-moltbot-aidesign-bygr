import Link from "next/link";

export default function Module5Page() {
  return (
    <div className="space-y-6 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 5
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 5: AFH Admin Training and Question Mastery
      </h1>
      <p className="text-slate-600">Week 7 • 5 hours</p>

      <h2>Key Topics</h2>
      <ul>
        <li><strong>Training Overview:</strong> 54 hours on management (WAC 388-112A-0800); focus on meds, rights, activities.</li>
        <li><strong>Question Types and Logic:</strong> Factual (cite WAC, e.g. “Max residents? 6 per WAC 388-76-10000”); Scenario (reason logically, e.g. resident fall → assess, report if abuse suspected); Best practices (AFH community, cohorting per LHJ).</li>
        <li><strong>How to Select Answers:</strong> Prioritize safety/WAC; explain (e.g. “Choose B: Isolate per WAC 388-76-10865 for infection control”).</li>
      </ul>

      <h2>Top 100 Questions</h2>
      <p>Grouped: Licensing/Setup (1–20), Building/Safety (21–50), Resident Care (51–80), Operations/Best Practices (81–100). Answers with WAC/RCW citations and reasoning.</p>

      <p className="text-sm text-slate-500 mt-6">
        <Link href="/questions" className="hover:underline">→ Top 100 AFH Admin Questions</Link>
        {" · "}
        <Link href="/labs" className="hover:underline">Module 5 Labs</Link>
      </p>
    </div>
  );
}
