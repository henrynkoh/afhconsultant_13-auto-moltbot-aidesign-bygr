import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Introduction to AFH Operations and Consultant Role",
    weeks: "Week 1",
    hours: "5 hours",
    href: "/curriculum/module-1",
    summary:
      "AFH basics (WAC 388-76), challenges for new operators, consultant role, WAC/RCW overview. Moltbot install and first message.",
  },
  {
    id: 2,
    title: "Licensing and Application Process",
    weeks: "Week 2",
    hours: "5 hours",
    href: "/curriculum/module-2",
    summary:
      "Steps to license, 54-hour admin training (WAC 388-112A-0800), AFH Application (Form 10-410), Moltbot checklist generation.",
  },
  {
    id: 3,
    title: "Building Inspection and WABO Compliance (70% AI Focus)",
    weeks: "Weeks 3–4",
    hours: "10 hours (expanded content ~100 hrs equivalent)",
    href: "/curriculum/module-3",
    summary:
      "WABO checklist, floor plans, Type S/NS1/NS2, egress, grab bars, city permits. Design Agent + Moltbot + Nano Banana 2D→3D. 20 drawing prompts.",
  },
  {
    id: 4,
    title: "Initial Inspection Preparation Checklist",
    weeks: "Weeks 5–6",
    hours: "10 hours",
    href: "/curriculum/module-4",
    summary:
      "DSHS Form 10-695, postings, rooms, safety, meds storage. Moltbot automation for checklist prep and policies.",
  },
  {
    id: 5,
    title: "AFH Admin Training and Question Mastery",
    weeks: "Week 7",
    hours: "5 hours",
    href: "/curriculum/module-5",
    summary:
      "54-hour training overview, question types (factual/scenario/best practices), Top 100 questions with WAC/RCW reasoning.",
  },
  {
    id: 6,
    title: "Final Project and Certification",
    weeks: "Week 8",
    hours: "5 hours",
    href: "/curriculum/module-6",
    summary:
      "Guide mock client through full process using Moltbot/Design Agent; certification upon 80% pass rate.",
  },
];

export default function CurriculumPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          AFH Consultant Curriculum
        </h1>
        <p className="mt-2 text-slate-600">
          Single complete curriculum to teach prospective consultants/advisors
          start-to-finish: what to prepare and how to prepare for AFH business
          in compliance with the AFH Initial Inspection Preparation Checklist,
          using Moltbot/Clawdbot to handle most time-consuming paperwork (WAC
          and best practices).
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Overview
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Target: 10–15 prospective consultants per cohort</li>
          <li>Duration: 8 weeks, 40 hours (20 classroom, 20 hands-on)</li>
          <li>~70% of content: Design Agent + Moltbot for permit-ready drawings</li>
          <li>Assessment: weekly quizzes (Top 100 integrated), final project, 80% pass for certification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Modules
        </h2>
        <div className="space-y-4">
          {modules.map((m) => (
            <div
              key={m.id}
              className="p-4 rounded-lg border border-slate-200 bg-white"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>Module {m.id}</span>
                <span>•</span>
                <span>{m.weeks}</span>
                <span>•</span>
                <span>{m.hours}</span>
              </div>
              <h3 className="font-semibold text-afh-primary mt-1">
                <Link href={m.href} className="hover:underline">
                  {m.title}
                </Link>
              </h3>
              <p className="mt-1 text-slate-600 text-sm">{m.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
