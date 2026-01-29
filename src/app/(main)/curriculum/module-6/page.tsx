import Link from "next/link";

export default function Module6Page() {
  return (
    <div className="space-y-6 prose prose-afh max-w-none">
      <p className="text-sm text-slate-500">
        <Link href="/curriculum" className="hover:underline">Curriculum</Link>
        {" → "}
        Module 6
      </p>
      <h1 className="text-2xl font-bold text-afh-primary">
        Module 6: Final Project and Certification
      </h1>
      <p className="text-slate-600">Week 8 • 5 hours</p>

      <h2>Project</h2>
      <p>Guide mock client through full process using Moltbot/Design Agent; automate ~70% of tasks (intake → base plan → validate → 3D → package → delivery).</p>

      <h2>Review</h2>
      <p>Debug with <code>moltbot status --all</code>; emphasize AI for efficiency.</p>

      <h2>Certification</h2>
      <p>Pass Top 100 quiz; ongoing Moltbot use for client support. Certification upon 80% pass rate.</p>

      <p className="text-sm text-slate-500 mt-6">
        <Link href="/questions" className="hover:underline">→ Top 100 Questions</Link>
        {" · "}
        <Link href="/cost" className="hover:underline">Cost Estimator</Link>
      </p>
    </div>
  );
}
