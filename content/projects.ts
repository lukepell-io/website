// The case studies. Order here = order on the site.
// Text in [square brackets] is a placeholder: swap it for the real thing.
// RULE: every title is in Title Case (titles, headings, labels, job titles, skills).
// Media files go in public/media/<slug>/ — see ASSETS.md for the full list.

export type Project = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  summary: string;
  meta: string; // one line under the card title
  tags: string[];
  facts: {
    client: string;
    role: string;
    tools: string;
    deliverables: string;
    disciplines?: string;
    timeline?: string;
  };
  // A string, or a list of strings for several paragraphs
  brief: string | string[];
  approach: string | string[];
  result: string | string[];
  blurb?: string; // short description on the project card
  credits?: { role: string; names: string; links?: Record<string, string> }[];
  seoTitle?: string; // the browser tab / Google title, written in full
  metaDescription?: string; // the Google snippet, under 155 characters
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
    title: "Bing Bunny: Getting Ready for Life",
    discipline: "Brand Campaign",
    year: "2024",
    summary:
      "A vertical brand campaign showing parents how Bing helps little ones get ready for life, one feeling at a time.",
    blurb:
      "A vertical brand campaign for Bing Bunny across four European markets, built around each episode's core emotion. 213m+ YouTube views.",
    meta: "Acamar Films · Bing Bunny · UK, Italy, Poland, Benelux",
    tags: ["Editing", "Motion Design", "Localisation"],
    facts: {
      client: "Acamar Films (Bing Bunny)",
      role: "Creative Producer, Art Director, Editor & Motion Designer",
      disciplines:
        "Offline editorial, motion design, content operations (localisation and high-volume social delivery)",
      deliverables:
        "52 × 9:16 videos per market, each under 90s, for the UK, Italy, Poland and the Netherlands/Benelux, running paid and organic",
      tools: "Premiere Pro, After Effects (mix by Óðinn Ingibergsson in Pro Tools)",
      timeline: "Two 3-month bursts of 26 videos per market, from October 2024",
    },
    brief:
      "Acamar Films wanted a brand campaign that showed parents what Bing gives their children: stories that mirror a young child's everyday life, and help them understand new emotions, navigate first experiences and build resilience. It ran as paid media and organically on Bing's own social channels. Every video had to be vertical and under 90 seconds, and the format had to hold up in four languages at a volume of 52 videos per market.",
    approach: [
      "Laura Alexander and I each drafted different ways of showing what Bing gives young children. The format we landed on takes the tension and resolution from a single episode, with a voiceover that walks parents through what Bing is feeling and how he works through it. It's built on something true of the whole show: every episode is developed with child development experts and centres on one core emotion.",
      "In one, Bing is crushed when a picnic he's been looking forward to falls through, and the episode resolves into how he copes with not knowing what happens next. The voiceover sums it up: \u201cOh, plans might change… but so can feelings.\u201d",
      "Once creative directors Mikael Shields and Niki Markot-David signed off the format, I art directed its look: the background colour, the typeface, and the placement and animation of on-screen text. I then built the branding assets the wider team of editors and motion designers used to produce the series. That kit is what kept every market's version consistent, however many hands touched it and whichever language it was voiced in.",
    ],
    result:
      "Across Italy, the UK and Poland, the campaign has passed 213 million YouTube views across its playlists and Shorts, plus more than 10 million social views. Italy leads on YouTube with 116.3 million views; the UK leads on social with 9.9 million views and 7.6 million reach. Poland launched in 2026 and has already passed 1 million YouTube views, with 161,000 social reach. The Dutch/Benelux version is now live too.",
    stats: [
      { value: "212.7m", label: "YouTube views, Italy + UK" },
      { value: "8.8m", label: "Social reach, Italy + UK" },
      { value: "10.8m", label: "Social views, Italy + UK" },
      { value: "1m+", label: "YouTube views in Poland since launch" },
    ],
    credits: [
      { role: "Creative Direction & Production", names: "Mikael Shields, Niki Markot-David" },
      { role: "Creative Producer & Editor", names: "Laura Alexander" },
      { role: "Assistant Producer", names: "Elliot Barnes" },
      {
        role: "Voiceover",
        names: "Niki Markot-David (UK), Vale De Felice (Italian), Aneta Piotrowska (Polish)",
      },
      {
        role: "Sound Mix",
        names: "Óðinn Ingibergsson, Luke Shrewsbury",
      },
      {
        role: "Scheduling & Paid Implementation",
        names: "Vale De Felice (Head of Communications), Kirk Rutter (Social Media Manager)",
      },
    ],
    seoTitle: "Bing Bunny Getting Ready for Life Campaign | Luke Pelletier",
    metaDescription:
      "How I art directed and edited Bing Bunny's Getting Ready for Life campaign for Acamar Films: 9:16 videos in four languages, 213m+ YouTube views.",
    featured: true,
    workSlots: 2,
  },
  {
    slug: "nine-news",
    title: "News Stories for Nine",
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
    title: "Bing Bunny International Title Animation",
    discipline: "Motion Design",
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
    title: "Bing Bunny Creative Content",
    discipline: "Content Operations",
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
      { id: "lSP4MglE-qw", title: "The Wildlife Trusts Collaboration" },
      { id: "ag5qz-wddbo", title: "Live-Action Paper Cutout" },
      { id: "HDUusThf8m4", title: "Guess Which Musical Instrument" },
      { id: "UgsB7p9qLtI", title: "In the Garden" },
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
    discipline: "Tools & Workflow",
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
