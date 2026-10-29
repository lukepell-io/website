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
  // How many clips/stills to show in "The work" (in addition to the hero).
  // Any `work` videos fill the first slots; the rest show as placeholders.
  workSlots: number;
  // YouTube links (just the video ID, the bit after watch?v=)
  youtube?: { id: string; title: string }; // the hero video
  work?: { id: string; title: string }[];
  shorts?: { id: string; title: string }[];
  featured?: boolean; // shown on the home page
  stats?: { value: string; label: string }[]; // headline numbers for the page
};

export type Video = { id: string; title: string };

export const projects: Project[] = [
  {
    slug: "getting-ready-for-life",
    title: "Getting Ready for Life",
    discipline: "Brand campaign",
    year: "[Year]",
    summary: "A Bing Bunny brand campaign across Italy, the UK and Poland.",
    meta: "Acamar Films · Bing Bunny · Italy, UK, Poland",
    tags: ["Campaign", "Content pipeline", "Multi-market"],
    facts: {
      client: "Acamar Films (Bing Bunny)",
      role: "Designed and executed the content pipeline",
      tools: "[Tools] · Batch Builder",
      deliverables: "[e.g. episodes, cutdowns and social assets per market]",
    },
    brief: "[2–3 sentences: what the campaign set out to do, and for whom.]",
    approach:
      "[2–3 sentences: how the pipeline let one team deliver every market's assets on time.]",
    result:
      "212.7 million YouTube views across Italy and the UK, with 8.8 million social reach and 10.8 million social views. Poland passed 1 million YouTube views in its first year.",
    stats: [
      { value: "212.7m", label: "YouTube views, Italy + UK" },
      { value: "8.8m", label: "Social reach, Italy + UK" },
      { value: "10.8m", label: "Social views, Italy + UK" },
      { value: "1m+", label: "YouTube views in Poland's first year" },
    ],
    featured: true,
    workSlots: 2,
  },
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
    featured: true,
    youtube: { id: "C1YrjGWKxHk", title: "Nine Network showreel" },
    workSlots: 4,
  },
  {
    slug: "pcuk",
    title: "Pancreatic Cancer UK",
    discipline: "[Discipline]",
    year: "[Year]",
    summary: "[One-line summary of the PCUK project.]",
    meta: "Pancreatic Cancer UK · Third Sector award winner",
    tags: ["[Tag]", "[Tag]"],
    facts: {
      client: "Pancreatic Cancer UK",
      role: "[Your role]",
      tools: "[Tools]",
      deliverables: "[Deliverables]",
    },
    brief: "[2–3 sentences: what PCUK needed.]",
    approach: "[2–3 sentences: how you approached it.]",
    result: "Won a Third Sector award. [Confirm which video, and add any reach numbers.]",
    featured: true,
    youtube: { id: "6QLwYsRF0uY", title: "PCUK “Lost Voices”" },
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
    youtube: { id: "mxcAunOa5Cw", title: "Prohibition Partners 2020 promo" },
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
      role: "Designed and executed the content pipeline",
      tools: "[Tools]",
      deliverables:
        "Themed compilations, cinema games & DCP, social, stop-motion and toy play, educational, Alexa audio story visuals",
    },
    brief: "[2–3 sentences: why Acamar needed new formats, and the scale.]",
    approach: "[2–3 sentences: how you ran the pipeline across formats.]",
    result:
      "Working alongside the YouTube team that ran the channels, the pipeline helped Bing grow from 1 billion to 11 billion YouTube views in six years. TikTok went from 0 to 142,000 followers in two years, and Instagram from 15,000 to 75,000.",
    stats: [
      { value: "13bn+", label: "Lifetime YouTube views, 67 channels, 35 languages" },
      { value: "1bn → 11bn", label: "YouTube views in six years" },
      { value: "1.3m", label: "Viewing hours every day" },
      { value: "0 → 142k", label: "TikTok followers in two years" },
    ],
    featured: true,
    youtube: { id: "-O3VAWv-Y_A", title: "Themed compilation: It's Christmas Day Today!" },
    work: [
      { id: "4b9wuENbRlg", title: "Carrot and Banana music video" },
      { id: "wBh2UfGWc9g", title: "Bing & Coco being artists" },
    ],
    shorts: [
      { id: "lSP4MglE-qw", title: "The Wildlife Trusts collaboration" },
      { id: "ag5qz-wddbo", title: "Live-action paper cutout" },
      { id: "HDUusThf8m4", title: "Guess which musical instrument" },
      { id: "UgsB7p9qLtI", title: "In the garden" },
    ],
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
    youtube: { id: "_sW8IlHl3so", title: "Hoppity Voosh and the Moonkeeper" },
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
    youtube: { id: "FxIDi695xwQ", title: "Bing: Find & Learn | Bing's Kitchen" },
    workSlots: 2,
  },
  {
    slug: "batch-builder",
    title: "Batch Builder",
    discipline: "Tools & workflow",
    year: "[Year]",
    summary:
      "The custom plugin I built to make the Bing Bunny content pipeline fast: [what it does, in one line].",
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
