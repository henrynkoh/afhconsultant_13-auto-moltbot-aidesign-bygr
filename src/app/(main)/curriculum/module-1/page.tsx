import Link from "next/link";

export default function Module1Page() {
  return (
    <div className="space-y-6 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 1
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 1: Introduction to AFH Operations and Consultant Role
      </h1>
      <p className="text-slate-600">Week 1 • 5 hours</p>

      <h2>Key Topics</h2>
      <ul>
        <li>
          <strong>AFH Basics:</strong> Definition (regular family abode providing care to 2–6 adults per WAC 388-76-10000), services (personal care, room/board, medication management), market need (aging population in WA).
        </li>
        <li>
          <strong>Challenges for New Operators:</strong> Lack of guidance leading to failed inspections; common pitfalls (e.g., incomplete floor plans, non-compliant safety features).
        </li>
        <li>
          <strong>Consultant Role:</strong> Act as “concierge” – assess client readiness, prepare documents, automate tasks, simulate inspections.
        </li>
        <li>
          <strong>WAC/RCW Overview:</strong> Key regs (WAC 388-76 for licensing, RCW 70.128 for operations); best practices from AFH community (e.g., resident rights, abuse prevention).
        </li>
      </ul>

      <h2>AI Integration (20% of Module)</h2>
      <ul>
        <li>Install Moltbot: <code>moltbot onboard --install-daemon</code>; configure with <code>moltbot config</code> to link WhatsApp/Telegram for client communication.</li>
        <li>Basic command: Send test message via <code>moltbot message send --to [client number] --message "AFH Setup Checklist"</code>.</li>
      </ul>

      <h2>Practical Exercise</h2>
      <p>Role-play: Advise a mock client on feasibility (e.g., budget $50K–$100K startup per DSHS estimates).</p>

      <h2>Question Emphasis</h2>
      <ul>
        <li><strong>Types:</strong> Scenario-based (e.g., “What if a resident refuses meds?”), compliance (e.g., “Min bedroom size?”), best practices (e.g., “How to prevent abuse?”).</li>
        <li><strong>Answering logic:</strong> Cite WAC (e.g., 388-76-10455 for meds), explain reasoning (safety first), cross-reference best practices (e.g., mandatory reporting per RCW 74.34).</li>
      </ul>
    </div>
  );
}
