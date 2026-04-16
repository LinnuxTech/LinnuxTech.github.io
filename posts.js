// ─────────────────────────────────────────────
//  LinnuxTech — Blog Posts
//  To add a post, copy one of the objects below
//  and fill in your details. Severity options:
//  "high" (amber), "medium" (cyan), "low" (green)
// ─────────────────────────────────────────────

const POSTS = [
  {
    title:    "Automating SOC Alert Triage with Logic Apps",
    excerpt:  "How I built a Logic Apps flow that ingests Defender alerts, scores them by severity, and routes them to the right analyst queue — cutting manual triage time by over 60%.",
    date:     "2026-04-14",
    domain:   "Automation",
    severity: "high",
    featured: true,
  },
  {
    title:    "MDCA Policy Gaps: What Shadow IT Actually Looks Like",
    excerpt:  "After running a 30-day MDCA discovery sweep, the results were not what leadership expected. A breakdown of the unsanctioned apps found and how we responded.",
    date:     "2026-04-10",
    domain:   "MDCA",
    severity: "high",
    featured: false,
  },
  {
    title:    "Building a Legal Hold Intake Workflow in Microsoft Purview",
    excerpt:  "Step-by-step notes on wiring up a Purview legal hold process with automated custodian notifications, acknowledgment tracking, and audit logging via Power Automate.",
    date:     "2026-04-06",
    domain:   "Legal Hold",
    severity: "medium",
    featured: false,
  },
  {
    title:    "Copilot Studio as a First Responder: Incident Intake Bot",
    excerpt:  "Experimenting with Copilot Studio to handle the first touch on reported incidents — collecting structured data, checking against known issues, and escalating when needed.",
    date:     "2026-03-29",
    domain:   "AI",
    severity: "medium",
    featured: false,
  },
  {
    title:    "eDiscovery Export Notes: Maintaining Chain of Custody",
    excerpt:  "Lessons learned from a content search export gone wrong. What to check before, during, and after exporting mailbox data to keep the chain of custody intact.",
    date:     "2026-03-21",
    domain:   "eDiscovery",
    severity: "low",
    featured: false,
  },
  {
    title:    "Power Automate vs Logic Apps: Choosing the Right Tool",
    excerpt:  "A practical comparison based on real workflows built in both. Not a feature matrix — a field guide for when each one actually makes sense to reach for.",
    date:     "2026-03-15",
    domain:   "Automation",
    severity: "low",
    featured: false,
  },
];
