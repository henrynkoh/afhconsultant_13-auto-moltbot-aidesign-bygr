import Link from "next/link";

export default function Module4Page() {
  return (
    <div className="space-y-6 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 4
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 4: Initial Inspection Preparation Checklist
      </h1>
      <p className="text-slate-600">Weeks 5–6 • 10 hours • 70% AI Focus</p>

      <h2>Key Topics</h2>
      <ul>
        <li><strong>Checklist Breakdown:</strong> DSHS Form 10-695 – Postings (rights, complaints), rooms (bedding, privacy), safety (evac drills, meds storage per WAC 388-76-10455).</li>
        <li><strong>Paperwork Automation:</strong> Policies, resident assessments, nutrition plans.</li>
        <li><strong>Best Practices:</strong> Abuse prevention (mandatory reporting RCW 74.34), resident rights (WAC 388-76-10500).</li>
      </ul>

      <h2>AI Integration (70%)</h2>
      <ul>
        <li><code>moltbot agent --message "Automate checklist prep: Generate policies from WAC, fill forms with client data"</code>.</li>
        <li>Design Agent for visuals: compliant floor plans/3D (e.g. “Visualize emergency exits in 3D”).</li>
        <li>Schedule daily checks via Moltbot skills (e.g. monitor compliance docs).</li>
      </ul>

      <h2>Practical Exercise</h2>
      <p>Automate a full checklist for a mock inspection; use <code>moltbot logs --follow</code> to debug.</p>

      <p className="text-sm text-slate-500 mt-6">
        <Link href="/labs" className="hover:underline">→ Module 4 Labs</Link>
      </p>
    </div>
  );
}
