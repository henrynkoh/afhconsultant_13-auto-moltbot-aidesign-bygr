"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/drawing", label: "Drawing Workflow" },
  { href: "/moltbot", label: "Moltbot Scripts" },
  { href: "/questions", label: "Top 100 Questions" },
  { href: "/cities", label: "City Guides" },
  { href: "/labs", label: "Labs" },
  { href: "/cost", label: "Cost Estimator" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-afh-primary text-white shadow">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-wrap gap-x-4 gap-y-2 py-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "font-medium underline underline-offset-4"
                  : "hover:underline"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
