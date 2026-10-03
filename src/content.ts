// All site copy and links live here. Edit text without touching components.
// Any link left as "" is not rendered.

export const links = {
  github: "https://github.com/dev-s-chauhan",
  linkedin: "https://www.linkedin.com/in/dev-singh-chauhan-319592149",
  weddingPlanner: "http://letsgetanushkamarried.online/",
  resume: "/Dev-FullStack.pdf",
  weddingPlannerRepo: "",
  corporateWayToSay: "",
};

export const site = {
  title: "Dev Singh Chauhan — Full-stack developer",
  description:
    "Full-stack developer (React, Next.js, Node, Postgres). I build features from schema to screen, and I write down what every decision cost.",
  url: "https://dev-s-chauhan.github.io/",
  email: "dev.dev.singh.chauhan@gmail.com",
};

export const nav = {
  mark: "DSC / Full-stack",
  links: [
    { label: "Work", href: "#work" },
    { label: "Decisions", href: "#decisions" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  availability: "Open to full-stack roles · Noida / Remote",
};

export const hero = {
  kicker: "Full-stack developer — React · Next.js · Node · Postgres",
  firstName: "Dev Singh",
  lastName: "Chauhan",
  thesis: {
    before: "I build features ",
    emphasis: "from schema to screen",
    after: ", and I write down what every decision cost.",
  },
  ctas: {
    work: "See the work",
    resume: "Résumé",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  sliderLabel: "Pull the layers apart",
  legend: [
    { n: "01", name: "Interface", color: "#2448d8", detail: "React · Next.js · PWA" },
    { n: "02", name: "Access", color: "#0e1318", detail: "Supabase Auth · roles" },
    { n: "03", name: "Data", color: "#e4501b", detail: "Postgres · row-level security" },
  ],
  slabs: {
    data: {
      tag: "03 · Data",
      badge: "RLS on",
      tables: ["weddings", "wedding_members", "events", "guests", "expenses", "vendors", "tasks"],
      code: "is_wedding_member(wedding_id)",
    },
    access: {
      tag: "02 · Access",
      badge: "Supabase Auth",
      roles: [
        { role: "owner", pad: 6, grants: "everything" },
        { role: "editor", pad: 5, grants: "all shared rows" },
        { role: "contributor", pad: 0, grants: "own rows" },
      ],
      code: "created_by = auth.uid()",
    },
    ui: {
      tag: "01 · Interface",
      image: { src: "/slab-ui.webp", width: 652, height: 434, alt: "Wedding Planner home screen with countdown and budget" },
    },
  },
};

export type Decision = {
  id: string;
  layer: string;
  layerColor: string;
  title: string;
  context: string;
  decision: string;
  cost: string;
};

export const project = {
  eyebrow: "Featured · Sheet 01",
  title: ["Wedding", "Planner"],
  liveLabel: "Open the live app ↗",
  repoLabel: "Source on GitHub ↗",
  titleBlock: [
    { label: "Project", value: "Multi-tenant wedding-planning SaaS" },
    { label: "Status", value: "Live in production", live: true },
    { label: "Users", value: "A real user is planning her wedding on it" },
    { label: "Built", value: "Solo — schema, access rules, UI, deploy" },
    { label: "Stack", value: "Next.js · Supabase Auth · Postgres RLS · PWA" },
  ],
  shots: {
    desktop: {
      src: "/dashboard-crop.webp",
      width: 1400,
      height: 855,
      alt: "Wedding Planner dashboard on desktop: countdown, next event, budget and tasks due",
    },
    phone: {
      src: "/events-phone.webp",
      width: 387,
      height: 768,
      alt: "Events screen on a phone: each event with countdown, budget used and tasks done",
    },
  },
  decisionsEyebrow: "Decision records",
  decisionsTitle: "Three calls I made, and what each one cost.",
  decisions: [
    {
      id: "ADR-001",
      layer: "Data layer",
      layerColor: "#e4501b",
      title: "Every row belongs to a wedding, and the database checks",
      context:
        "Couples, family and planners share one database. One missing filter in app code would show a stranger's guest list or budget.",
      decision:
        "Every table carries a wedding_id, and row-level security calls one helper, is_wedding_member(), on every read. The database refuses rows from other weddings even when a query is wrong.",
      cost: "Every query pays for a membership lookup, and a bug in that one function would reach every table at once.",
    },
    {
      id: "ADR-002",
      layer: "Access layer",
      layerColor: "#0e1318",
      title: "Three roles, checked on every row",
      context:
        "A wedding has an owner, people who plan alongside them, and relatives who only add things. Some spending is for the owner's eyes only.",
      decision:
        "Owner, editor and contributor roles. Contributors edit only rows they created. Private expenses are filtered inside the policy, so they never leave the database for anyone but the owner.",
      cost: "The same rule repeats across the policies for events, guests, vendors, tasks and expenses. Changing what a role can do means editing many policies.",
    },
    {
      id: "ADR-003",
      layer: "Interface layer",
      layerColor: "#2448d8",
      title: "Installable PWA, no offline mode",
      context: "Planning happens on phones. Users wanted an icon on the home screen, not an app-store download.",
      decision: "Ship an installable PWA with push notifications. Leave offline support out of the first version.",
      cost: "The app needs a connection. Offline sync and conflict handling were more work than any current user needed.",
    },
  ] satisfies Decision[],
};

export const upNext = {
  eyebrow: "Up next · Sheet 02",
  title: "RAG assistant",
  badge: "Planned",
  body: "Answers grounded in your own documents, built on Next.js and Supabase. This is my next build.",
};

export const experience = {
  eyebrow: "Experience",
  title: "Work",
  jobs: [
    {
      when: "Jul 2025 — now",
      role: "Technical Consultant",
      org: "Protiviti India Member Firm · Noida",
      summary:
        "Dedicated offshore engineer for a UAE government free-zone authority. I own production features for its B2B marketplace and public website end to end, building React client extensions from data flow and API integration through UI, testing and release.",
    },
    {
      when: "Feb — Jun 2025",
      role: "Full-Stack Developer Intern",
      org: "Protiviti India Member Firm",
      summary: "Shipped React and full-stack features for a client project that reached production on schedule.",
    },
    {
      when: "Dec 2023 — Jun 2024",
      role: "Full-Stack Developer Intern",
      org: "Tutcart · Remote",
      summary: "Founding-team engineer on the MVP: map-based search, REST APIs, authentication and role-based access.",
    },
  ],
};

export const smallBuilds = {
  eyebrow: "Smaller builds",
  title: "Side work",
  items: [
    {
      kind: "GenAI web app",
      name: "CorporateWayToSay",
      body: "Rewrites everyday language as corporate speak. I did the prompt design and the LLM API integration.",
      href: links.corporateWayToSay,
    },
  ],
};

export const toolkit = {
  eyebrow: "Toolkit, by layer",
  title: "Stack",
  layers: [
    { name: "Interface", color: "#2448d8", items: ["React, Next.js", "React Native", "TypeScript", "Redux, Tailwind CSS"] },
    { name: "API", color: "#0e1318", items: ["Node.js, Express", "REST APIs", "Prisma, NextAuth", "Auth and RBAC"] },
    { name: "Data", color: "#e4501b", items: ["PostgreSQL, Supabase", "Redis", "MongoDB", "SQL"] },
    { name: "AI + Ship", color: "transparent", items: ["Anthropic, OpenAI APIs", "RAG, prompt design", "Vercel, Docker", "AWS, GCP, CI/CD"] },
  ],
};

export const contact = {
  kicker: "Hiring for a full-stack role?",
  title: { before: "Let's ", accent: "talk." },
  copyLabel: "Copy email",
  copiedLabel: "Copied",
  footLeft: "Dev Singh Chauhan · Noida, India",
  footRight: "B.Tech CSE · SIRT Bhopal · 2024",
};
