"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "curriculum", label: "Curriculum" },
  { id: "drawing", label: "Drawing Workflow" },
  { id: "moltbot", label: "Moltbot Scripts" },
  { id: "questions", label: "Top 100 Questions" },
  { id: "cities", label: "City Guides" },
  { id: "labs", label: "Labs" },
  { id: "cost", label: "Cost Estimator" },
  { id: "references", label: "References" },
] as const;

const FEATURES = [
  {
    id: "curriculum",
    title: "Curriculum (Modules 1–6)",
    href: "/curriculum",
    description:
      "Full 8-week curriculum: AFH basics, licensing, WABO building inspection (expanded Module 3), Initial Inspection Prep, Admin Training, certification. ~70% Design Agent & Moltbot.",
    icon: "📚",
    gradient: "from-violet-500/20 to-purple-600/20",
    border: "border-violet-200",
  },
  {
    id: "drawing",
    title: "Drawing Workflow",
    href: "/drawing",
    description:
      "Step-by-step: Data intake → base plan → validate & edit → 3D conversion (Nano Banana/Gemini) → package PDFs → delivery. DIY permit-ready for city submission.",
    icon: "✏️",
    gradient: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-200",
  },
  {
    id: "moltbot",
    title: "Moltbot / Clawdbot Scripts",
    href: "/moltbot",
    description:
      "Top 10 CLI commands and 20 drawing prompts for WABO-compliant floor plans, egress, grab bars, 3D renders.",
    icon: "🤖",
    gradient: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-200",
  },
  {
    id: "questions",
    title: "Top 100 AFH Admin Questions",
    href: "/questions",
    description:
      "Licensing, building/safety, resident care, operations. Answers with WAC/RCW citations and best-practice reasoning for admin training prep.",
    icon: "❓",
    gradient: "from-rose-500/20 to-pink-600/20",
    border: "border-rose-200",
  },
  {
    id: "cities",
    title: "City Guides (WA)",
    href: "/cities",
    description:
      "Centralia, Lacey, Tumwater, Olympia, Chehalis: permit process, fees, WABO checklist submission, local nuances.",
    icon: "🏙️",
    gradient: "from-sky-500/20 to-blue-600/20",
    border: "border-sky-200",
  },
  {
    id: "labs",
    title: "Labs (Modules 3–5)",
    href: "/labs",
    description:
      "Hands-on labs: data intake, 2D/3D generation, WABO validation, Initial Inspection prep, Top 100 question drills, cost integration.",
    icon: "🧪",
    gradient: "from-indigo-500/20 to-blue-600/20",
    border: "border-indigo-200",
  },
  {
    id: "cost",
    title: "Cost Estimator",
    href: "/cost",
    description:
      "Startup and ongoing costs for 4–6 bed AFH: licensing, training, conversion, insurance; break-even and DSHS references.",
    icon: "💰",
    gradient: "from-lime-500/20 to-green-600/20",
    border: "border-lime-200",
  },
];

export default function LandingPage() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-full min-h-0 bg-gradient-to-br from-slate-50 via-white to-afh-light/40">
      {/* Left sidebar - sticky, scrollable nav */}
      <aside className="sticky top-0 h-full max-h-screen w-56 shrink-0 overflow-y-auto border-r border-slate-200/80 bg-white/80 backdrop-blur-sm lg:w-64">
        <div className="flex h-full flex-col py-6 pl-4 pr-2">
          <div className="mb-4 px-2">
            <Link
              href="/"
              className="text-sm font-semibold text-afh-primary hover:text-afh-secondary"
            >
              AFH Consultant
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto overflow-x-hidden">
            <ul className="space-y-0.5">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      activeId === id
                        ? "bg-afh-primary text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main scrollable content */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* Hero */}
        <section
          id="hero"
          className="relative px-6 py-16 sm:px-8 md:py-24 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <h1 className="bg-gradient-to-r from-afh-primary via-afh-secondary to-afh-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              AFH Consultant Curriculum & Permit Tools
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              A single complete curriculum and toolset for prospective AFH
              consultants, advisors, and concierges: WABO-compliant drawings,
              Moltbot/Design Agent automation, city permits (Centralia, Lacey,
              Tumwater, Olympia, Chehalis), and AFH Initial Inspection
              Preparation Checklist.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/curriculum"
                className="inline-flex items-center rounded-xl bg-afh-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-afh-primary/25 transition hover:bg-afh-secondary"
              >
                Start curriculum
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("curriculum")}
                className="inline-flex items-center rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-afh-accent hover:text-afh-primary"
              >
                Explore below
              </button>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section
          id="curriculum"
          className="scroll-mt-8 border-t border-slate-200/80 bg-gradient-to-b from-violet-50/50 to-transparent px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Curriculum
            </h2>
            <p className="mt-2 text-slate-600">
              8-week curriculum (6 modules): AFH basics, licensing, WABO
              building inspection, Initial Inspection Prep, Admin Training,
              certification.
            </p>
            <div className="mt-8">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-700 shadow-sm transition hover:bg-violet-50"
              >
                View curriculum →
              </Link>
            </div>
          </div>
        </section>

        {/* Features grid - all sections visible */}
        <section
          id="drawing"
          className="scroll-mt-8 border-t border-slate-200/80 px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Features & Functions
            </h2>
            <p className="mt-2 text-slate-600">
              All tools in one place: curriculum, drawing workflow, Moltbot
              scripts, Top 100 questions, city guides, labs, cost estimator.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {FEATURES.map((f) => (
                <Link
                  key={f.id}
                  href={f.href}
                  className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg ${f.border} hover:border-opacity-80`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-50 transition group-hover:opacity-70`}
                    aria-hidden
                  />
                  <div className="relative">
                    <span className="text-2xl" aria-hidden>
                      {f.icon}
                    </span>
                    <h3 className="mt-3 font-semibold text-slate-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{f.description}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-afh-primary group-hover:underline">
                      Open →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Moltbot highlight */}
        <section
          id="moltbot"
          className="scroll-mt-8 border-t border-slate-200/80 bg-gradient-to-b from-amber-50/50 to-transparent px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Moltbot / Clawdbot
            </h2>
            <p className="mt-2 text-slate-600">
              Top 10 CLI commands and 20 drawing prompts for WABO-compliant
              designs. Use{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
                moltbot agent --message &quot;...&quot; --thinking high
              </code>{" "}
              for automation.
            </p>
            <div className="mt-6">
              <Link
                href="/moltbot"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-5 py-2.5 text-sm font-medium text-amber-800 shadow-sm transition hover:bg-amber-50"
              >
                Moltbot scripts →
              </Link>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          id="questions"
          className="scroll-mt-8 border-t border-slate-200/80 px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Top 100 AFH Admin Questions
            </h2>
            <p className="mt-2 text-slate-600">
              Licensing (1–20), Building/Safety (21–50), Resident Care (51–80),
              Operations (81–100). Answers with WAC/RCW citations and
              reasoning.
            </p>
            <Link
              href="/questions"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-5 py-2.5 text-sm font-medium text-rose-800 shadow-sm transition hover:bg-rose-50"
            >
              Open questions →
            </Link>
          </div>
        </section>

        {/* Cities */}
        <section
          id="cities"
          className="scroll-mt-8 border-t border-slate-200/80 bg-gradient-to-b from-sky-50/50 to-transparent px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              City Guides (WA)
            </h2>
            <p className="mt-2 text-slate-600">
              Centralia, Lacey, Tumwater, Olympia, Chehalis: permit process,
              fees, WABO checklist submission, local nuances.
            </p>
            <Link
              href="/cities"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-sky-800 shadow-sm transition hover:bg-sky-50"
            >
              City guides →
            </Link>
          </div>
        </section>

        {/* Labs */}
        <section
          id="labs"
          className="scroll-mt-8 border-t border-slate-200/80 px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Labs (Modules 3–5)
            </h2>
            <p className="mt-2 text-slate-600">
              Hands-on labs: Module 3 (10 labs), Module 4 (10 labs), Module 5
              (8 labs). Moltbot/Design Agent practice.
            </p>
            <Link
              href="/labs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-sm font-medium text-indigo-800 shadow-sm transition hover:bg-indigo-50"
            >
              Labs →
            </Link>
          </div>
        </section>

        {/* Cost */}
        <section
          id="cost"
          className="scroll-mt-8 border-t border-slate-200/80 bg-gradient-to-b from-lime-50/50 to-transparent px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Cost Estimator
            </h2>
            <p className="mt-2 text-slate-600">
              Startup and ongoing costs for 4–6 bed AFH: licensing, training,
              conversion, insurance; break-even and DSHS references.
            </p>
            <Link
              href="/cost"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-lime-200 bg-white px-5 py-2.5 text-sm font-medium text-lime-800 shadow-sm transition hover:bg-lime-50"
            >
              Cost estimator →
            </Link>
          </div>
        </section>

        {/* References */}
        <section
          id="references"
          className="scroll-mt-8 border-t border-slate-200/80 px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              References
            </h2>
            <p className="mt-2 text-slate-600">
              WAC 388-76, WAC 51-51-0330 (IRC R330), RCW 70.128, DSHS Form
              10-695, WABO Local Building Inspection Checklist, www.wabo.org
            </p>
          </div>
        </section>
      </div>

      {/* Bottom-right: GitHub link */}
      <a
        href="https://github.com/henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-10 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg ring-2 ring-white/20 transition hover:bg-slate-800 hover:scale-105"
        aria-label="Open on GitHub"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        GitHub
      </a>
    </div>
  );
}
