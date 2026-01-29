import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "AFH Consultant Curriculum & Permit Tools",
  description:
    "Curriculum and tools for AFH consultants: WABO compliance, Moltbot/Design Agent workflows, city permits (Centralia, Lacey, Tumwater, Olympia, Chehalis), Top 100 questions, and Initial Inspection Preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 min-h-0">{children}</main>
      </body>
    </html>
  );
}
