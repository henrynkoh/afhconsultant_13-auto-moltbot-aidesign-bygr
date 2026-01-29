"use client";

import { useState } from "react";
import {
  questions,
  categories,
  type AfhQuestion,
  type QuestionCategory,
} from "@/data/questions";
import Link from "next/link";

export default function QuestionsPage() {
  const [filter, setFilter] = useState<QuestionCategory | "All">("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? questions
      : questions.filter((q) => q.category === filter);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Top 100 AFH Admin Training Questions
        </h1>
        <p className="mt-2 text-slate-600">
          Licensing/Setup (1–20), Building/Safety (21–50), Resident Care
          (51–80), Operations/Best Practices (81–100). Answers with WAC/RCW
          citations and reasoning for logical selection.
        </p>
      </header>

      <section>
        <h2 className="text-lg font-semibold text-afh-secondary mb-2">
          Filter by category
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("All")}
            className={`px-3 py-1.5 rounded text-sm ${
              filter === "All"
                ? "bg-afh-primary text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded text-sm ${
                filter === c
                  ? "bg-afh-primary text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-afh-secondary mb-3">
          Questions ({filtered.length})
        </h2>
        <div className="space-y-2">
          {filtered.map((q) => (
            <QuestionCard
              key={q.id}
              q={q}
              expanded={expanded === q.id}
              onToggle={() => setExpanded(expanded === q.id ? null : q.id)}
            />
          ))}
        </div>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/curriculum/module-5" className="hover:underline">
          → Module 5 (Admin Training)
        </Link>
        {" · "}
        <Link href="/labs" className="hover:underline">
          Module 5 Labs
        </Link>
      </p>
    </div>
  );
}

function QuestionCard({
  q,
  expanded,
  onToggle,
}: {
  q: AfhQuestion;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-4 flex items-start gap-2 hover:bg-slate-50"
      >
        <span className="text-slate-500 font-mono text-sm shrink-0">
          #{q.id}
        </span>
        <span className="font-medium text-afh-primary flex-1">{q.question}</span>
        <span className="text-slate-400 text-xs shrink-0">
          {expanded ? "▼" : "▶"}
        </span>
      </button>
      {expanded && (
        <div className="px-4 pb-4 pt-0 border-t border-slate-100 space-y-2 text-sm">
          <p>
            <strong className="text-afh-secondary">Answer:</strong> {q.answer}
          </p>
          <p className="text-slate-600">
            <strong>Citation:</strong> {q.citation}
          </p>
          <p className="text-slate-600">
            <strong>Reasoning:</strong> {q.reasoning}
          </p>
        </div>
      )}
    </div>
  );
}
