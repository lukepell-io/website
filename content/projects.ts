// The case studies. Order here = order on the site.
// Text in [square brackets] is a placeholder: swap it for the real thing.
// Media files go in public/media/<slug>/ — see ASSETS.md for the full list.

export type Project = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  summary: string;
  meta: string; // one line under the card title
  tags: string[];
  facts: { client: string; role: string; tools: string; deliverables: string };
  brief: string;
  approach: string;
  result: string;
  // How many extra clips/stills to show in "The work" (in addition to the hero)
  workSlots: number;
};

export const projects: Project[] = [
  {
    slug: "nine-news",
    title: "News stories for Nine",
    discipline: "Editing",
    year: "[Year]",
    summary: "A compilation of news stories I cut for Nine Entertainment Co.",
    meta: "Nine Entertainment Co. · News · [Year]",
    tags: ["Editing", "News"],
    facts: {
      client: "Nine Entertainment Co.",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[e.g. 12 news packages]",
    },
    brief: "[2–3 sentences: what Nine needed, and the turnaround.]",
    approach: "[2–3 sentences: how you cut the stories, what made it work.]",
    result: "[1–2 sentences: what aired, any numbers or feedback.]",
    workSlots: 4,
  },
  {
    slug: "pcuk",
    title: "PCUK",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of the PCUK project.]",
    meta: "PCUK · [Format] · [Year]",
    tags: ["[Tag]", "[Tag]"],
    facts: {
      client: "PCUK",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what PCUK needed.]",
    approach: "[2–3 sentences: how you approached it.]",
    result: "[1–2 sentences: the outcome.]",
    workSlots: 2,
  },
  {
    slug: "prohibition-partners",
    title: "Prohibition Partners",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of the Prohibition Partners project.]",
    meta: "Prohibition Partners · [Format] · [Year]",
    tags: ["[Tag]", "[Tag]"],
    facts: {
      client: "Prohibition Partners",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what Prohibition Partners needed.]",
    approach: "[2–3 sentences: how you approached it.]",
    result: "[1–2 sentences: the outcome.]",
    workSlots: 2,
  },
  {
    slug: "london-business-tv",
    title: "London Business TV",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of the London Business TV project.]",
    meta: "London Business TV · [Format] · [Year]",
    tags: ["[Tag]", "[Tag]"],
    facts: {
      client: "London Business TV",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what London Business TV needed.]",
    approach: "[2–3 sentences: how you approached it.]",
    result: "[1–2 sentences: the outcome.]",
    workSlots: 2,
  },
  {
    slug: "bing-title-animation",
    title: "Bing Bunny international title animation",
    discipline: "Motion design",
    year: "[Year]",
    summary: "The title animation for Bing Bunny's international release.",
    meta: "Acamar Films · Title sequence · [Year]",
    tags: ["Motion", "Animation"],
    facts: {
      client: "Acamar Films",
      role: "[Your role]",
      tools: "[e.g. After Effects]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what the international titles needed to do.]",
    approach: "[2–3 sentences: design and animation choices.]",
    result: "[1–2 sentences: where it runs, how many territories.]",
    workSlots: 2,
  },
  {
    slug: "bing-creative-content",
    title: "Bing Bunny creative content",
    discipline: "Content operations",
    year: "[Years]",
    summary:
      "Operational lead on every new Bing Bunny content format, from cinema to Alexa.",
    meta: "Acamar Films · New formats · [Years]",
    tags: ["Operations", "Social", "Cinema"],
    facts: {
      client: "Acamar Films",
      role: "Operational lead, new formats",
      tools: "[Tools]",
      deliverables:
        "Themed compilations, cinema games & DCP, social, stop-motion and toy play, educational, Alexa audio story visuals",
    },
    brief: "[2–3 sentences: why Acamar needed new formats, and the scale.]",
    approach: "[2–3 sentences: how you ran the pipeline across formats.]",
    result: "[1–2 sentences: output volume, reach, results.]",
    workSlots: 4,
  },
  {
    slug: "hoppity-voosh",
    title: "Hoppity Voosh and the Moonkeeper",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of Hoppity Voosh and the Moonkeeper.]",
    meta: "Acamar Films · [Format] · [Year]",
    tags: ["[Tag]", "[Tag]"],
    facts: {
      client: "Acamar Films",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what the project was.]",
    approach: "[2–3 sentences: your part in it.]",
    result: "[1–2 sentences: the outcome.]",
    workSlots: 2,
  },
  {
    slug: "bing-find-and-learn",
    title: "Bing: Find & Learn",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of Bing: Find & Learn.]",
    meta: "Acamar Films · Educational · [Year]",
    tags: ["Educational", "[Tag]"],
    facts: {
      client: "Acamar Films",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what Find & Learn is and who it's for.]",
    approach: "[2–3 sentences: your part in it.]",
    result: "[1–2 sentences: the outcome.]",
    workSlots: 2,
  },
  {
    slug: "batch-builder",
    title: "Batch Builder",
    discipline: "Tools & workflow",
    year: "[Year]",
    summary: "A plugin I designed to [what Batch Builder does].",
    meta: "Plugin · [Host app] · [Year]",
    tags: ["Workflow", "Plugin"],
    facts: {
      client: "[Personal / client]",
      role: "Designer",
      tools: "[Tools]",
      deliverables: "[e.g. After Effects plugin]",
    },
    brief: "[2–3 sentences: the problem Batch Builder solves.]",
    approach: "[2–3 sentences: how it works.]",
    result: "[1–2 sentences: time saved, who uses it.]",
    workSlots: 2,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
