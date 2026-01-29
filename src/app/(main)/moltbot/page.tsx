import Link from "next/link";

const top10Commands = [
  {
    name: "onboard",
    what: "Guided setup wizard; can install Gateway (launchd/systemd user service)",
    example: "moltbot onboard --install-daemon\n# or (headless): pnpm moltbot onboard --yes",
  },
  {
    name: "gateway",
    what: "Start the long‑running Gateway process (WebSocket control plane)",
    example: "moltbot gateway --port 18789 --verbose",
  },
  {
    name: "channels login",
    what: "Log in / pair channel adapters (e.g., WhatsApp Web QR)",
    example: "moltbot channels login",
  },
  {
    name: "message send",
    what: "Send a single message to a target (verify outbound channel)",
    example: 'moltbot message send --to +15555550123 --message "Hello from Moltbot"',
  },
  {
    name: "agent",
    what: "Send messages to the agent (with thinking/priority flags); routes back to channels if desired",
    example: 'moltbot agent --message "Ship checklist" --thinking high',
  },
  {
    name: "doctor",
    what: "Run diagnostic checks and optionally repair common issues",
    example: "moltbot doctor\nmoltbot doctor --repair\nmoltbot doctor --repair --force\nmoltbot doctor --deep",
  },
  {
    name: "status",
    what: "Quick snapshot of gateway/agent health and basic config",
    example: "moltbot status\nmoltbot status --all\nmoltbot gateway status",
  },
  {
    name: "models status",
    what: "Check model/provider authentication and availability (Anthropic, OpenAI fallbacks)",
    example: "moltbot models status",
  },
  {
    name: "logs",
    what: "View gateway or service logs; useful for debugging",
    example: "moltbot logs --follow",
  },
  {
    name: "config",
    what: "View and modify Moltbot config (~/.clawdbot/moltbot.json); interactive wizard if run without subcommand",
    example:
      'moltbot config\nmoltbot config get channels.whatsapp.allowFrom\nmoltbot config set messages.groupChat.mentionPatterns \'["@clawd"]\'',
  },
];

const drawingPrompts = [
  "Generate a scaled 2D floor plan for a 1,500 sq ft single-family home conversion to AFH; include 4 bedrooms (each ≥80 sq ft), label A-D, show dimensions, classify as Type NS1 with one grade-level egress per WAC 51-51-0330",
  "Add interconnected smoke and CO alarms to this floor plan: one in each bedroom, hallway, and level; ensure audible throughout per IRC R314/R315",
  "Design emergency escape windows for all bedrooms: min 5.7 sq ft opening, sill ≤44 inches, no steps allowed per R330.6",
  "Incorporate grab bars in at least one bathroom: 33-36 inches high, 1.25-2 inch diameter, 250 lb strength, spacing 1.5 inches from wall per R330.8",
  "Add ramps for Type NS1 classification: slope max 1:12, handrails, per IRC R311.8; show on egress paths",
  "Validate bedroom doors: operable from outside when locked, one-hand use, no tight grasping per R330.4",
  "Convert 2D plan to 3D model using Nano Banana; render walkthrough views showing egress from bedrooms to public way",
  "Label fire extinguishers (2A:10B:C) and emergency lighting on plan; ensure accessible per WAC 388-76-10810",
  "Design kitchen facilities: safe appliances, ventilation, storage; comply with WAC 388-76-10735",
  "Add toilets/baths: one per four residents, grab bars, per WAC 388-76-10780",
  "Incorporate water hazard fences: ≥48 inches, self-latching gates, alarms per WAC 388-76-10784",
  "Generate common areas: accessible paths, lighting ≥30 fc, per WAC 388-76-10705/10740",
  "Edit plan for Olympia-specific: add fire access road details, 20 ft wide",
  "Check and fix sill heights >44 inches; replace windows as needed per R330.6",
  "Add storage spaces: adequate for residents, per WAC 388-76-10765",
  "Render 3D bathroom with grab bars and widened doors (32 inches min) for accessibility",
  "Compile WABO checklist annotations on plan: sections 3-4 self-cert, egress arrows",
  "Simulate Lacey ramp permit: detail separate ramp drawing, slope/handrails",
  "Validate full plan against DSHS Form 10-695: postings, privacy, safety features",
  "Generate final PDF package: floor plans, 3D renders, cover letter citing WACs 388-76 and 51-51-0330",
];

export default function MoltbotPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-afh-primary">
          Moltbot / Clawdbot Scripts & Prompts
        </h1>
        <p className="mt-2 text-slate-600">
          Top 10 CLI commands and 20 drawing prompts for AFH permit-ready
          designs. Use <code className="bg-slate-100 px-1 rounded">moltbot agent --message &quot;[prompt]&quot; --thinking high</code> for drawing tasks.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Prerequisite: Node ≥22. Install: <code className="bg-slate-100 px-1 rounded">npm install -g moltbot@latest</code> or <code className="bg-slate-100 px-1 rounded">pnpm add -g moltbot@latest</code>. Clawdbot is a compatibility alias.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          Top 10 Moltbot / Clawdbot Commands
        </h2>
        <div className="space-y-4">
          {top10Commands.map((c) => (
            <div
              key={c.name}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <h3 className="font-mono font-semibold text-afh-primary">
                {c.name}
              </h3>
              <p className="text-slate-600 text-sm mt-1">{c.what}</p>
              <pre className="mt-2 p-3 bg-slate-100 rounded text-xs overflow-x-auto whitespace-pre-wrap">
                {c.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-afh-secondary mb-3">
          20 Scripts/Prompts for Drawing Tasks
        </h2>
        <p className="text-slate-600 text-sm mb-3">
          Use: <code className="bg-slate-100 px-1 rounded">moltbot agent --message &quot;[prompt below]&quot; --thinking high</code>
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          {drawingPrompts.map((prompt, i) => (
            <li key={i} className="text-slate-700 text-sm">
              {prompt}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-lg border border-slate-200 bg-afh-light/30 p-4">
        <h2 className="text-lg font-semibold text-afh-primary mb-2">
          Quick Tips
        </h2>
        <ul className="text-slate-700 text-sm space-y-1 list-disc pl-6">
          <li>Use <code className="bg-white px-1 rounded">--yes</code> for headless operations (e.g. moltbot doctor --yes).</li>
          <li>Use <code className="bg-white px-1 rounded">moltbot logs --follow</code> while reproducing an issue to stream live output.</li>
          <li>Multiple Gateways: CLAWDBOT_CONFIG_PATH=~/.clawdbot/a.json CLAWDBOT_STATE_DIR=~/.clawdbot-a moltbot gateway --port 19001.</li>
          <li>Debugging: moltbot models status, moltbot doctor, moltbot gateway status, moltbot health --verbose.</li>
        </ul>
      </section>

      <p className="text-sm text-slate-500">
        <Link href="/curriculum/module-3" className="hover:underline">
          → Module 3 (WABO)
        </Link>
        {" · "}
        <Link href="/drawing" className="hover:underline">
          Drawing Workflow
        </Link>
      </p>
    </div>
  );
}
