import Link from "next/link";

export default function Module2Page() {
  return (
    <div className="space-y-6 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 2
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 2: Licensing and Application Process
      </h1>
      <p className="text-slate-600">Week 2 • 5 hours</p>

      <h2>Key Topics</h2>
      <ul>
        <li><strong>Steps to License:</strong> Background checks, 54-hour admin training (WAC 388-112A-0800), application submission to DSHS.</li>
        <li><strong>Preparation Documents:</strong> AFH Application (Form 10-410), financial plans, policies (e.g., emergency disaster plan per WAC 388-76-10865).</li>
        <li><strong>Relocation/Conversion Rules:</strong> New license for address changes (WAC 388-76-10110); converting single-family homes (e.g., add ramps, smoke alarms per IRC R330).</li>
      </ul>

      <h2>AI Integration (30% of Module)</h2>
      <ul>
        <li>Use <code>moltbot agent --message "Generate AFH license app checklist from WAC 388-76" --thinking high</code> to auto-create customizable checklists.</li>
        <li>Automate form filling: integrate skills for pulling client data (e.g., via browser control) and populating PDFs.</li>
      </ul>

      <h2>Practical Exercise</h2>
      <p>Use Moltbot to draft a sample application; review for compliance.</p>
    </div>
  );
}
