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
    recognition?: string;
  };
  // A string, or a list of strings for several paragraphs
  brief: string | string[];
  approach: string | string[];
  result: string | string[];
  blurb?: string; // short description on the project card
  credits?: { role: string; names: string; links?: Record<string, string> }[];
  // Screenshots shown under The Result (awards, press, posts). Files go in public/media/<slug>/
  press?: { src: string; alt: string; caption: string; href?: string; narrow?: boolean }[];
  seoTitle?: string; // the browser tab / Google title, written in full
  metaDescription?: string; // the Google snippet, under 155 characters
  // How many clips/stills to show in "The work" (in addition to the hero).
  // Any `work` videos fill the first slots; the rest show as placeholders.
  workSlots: number;
  // Captions for local work stills/clips (work-1, work-2, …), in order
  workCaptions?: string[];
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
      tools: "Premiere Pro, After Effects (mix by Óðinn Ingibergsson and Luke Shrewsbury in Pro Tools)",
      timeline: "Two 3-month bursts of 26 videos per market, from October 2024",
    },
    brief:
      "Acamar Films wanted a brand campaign that showed parents what Bing gives their children: stories that mirror a young child's everyday life, and help them understand new emotions, navigate first experiences and build resilience. It ran as paid media and organically on Bing's own social channels. Every video had to be vertical and under 90 seconds, and the format had to hold up in four languages at a volume of 52 videos per market.",
    approach: [
      "Laura Alexander and I each drafted different ways of showing what Bing gives young children. The format we landed on takes the tension and resolution from a single episode, with a voiceover that walks parents through what Bing is feeling and how he works through it. It's built on something true of the whole show: every episode is developed with child development experts and centres on one core emotion.",
      "In one, Bing is crushed when a picnic he's been looking forward to falls through, and the episode resolves into how he copes with not knowing what happens next. The voiceover sums it up: \u201cOh, plans might change… but so can feelings.\u201d",
      "Once creative directors Mikael Shields and Niki Markot-David signed off the format, I art directed its look: the background colour, the typeface, and the placement and animation of on-screen text. I then built the branding assets the wider team of editors and motion designers used to produce the series. That kit is what kept every market's version consistent, however many hands touched it and whichever language it was voiced in. Every video closes on the same line: \u201cGetting ready for life… It's a Bing thing!\u201d",
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
    title: "Lost Voices: An Award-Winning Animation for Pancreatic Cancer UK",
    discipline: "Motion Design",
    year: "2021",
    summary:
      "Kinetic typography that turned the voices of people lost to pancreatic cancer into an award-winning film, made in four days.",
    blurb:
      "Kinetic typography for Pancreatic Cancer UK's Lost Voices, made in four days. Winner, Communications Campaign of the Year, Third Sector Awards 2022.",
    meta: "Pancreatic Cancer UK · Acamar Films · 2021",
    tags: ["Art Direction", "Motion Design", "Kinetic Typography"],
    facts: {
      client: "Pancreatic Cancer UK (animation by Acamar Films)",
      role: "Art Director & Motion Designer",
      disciplines: "Art direction, motion design",
      deliverables: "1 × 60s animated film, in 16:9 and 9:16",
      tools: "Photoshop, Illustrator, After Effects, Premiere Pro",
      timeline: "4 days",
      recognition: "Winner, Communications Campaign of the Year, Third Sector Awards 2022",
    },
    brief:
      "Pancreatic cancer is the deadliest common cancer. More than half of people diagnosed die within three months, yet only 8% of the UK public could name its most common symptoms. With few survivors to front a campaign, Pancreatic Cancer UK built Lost Voices around the voices of well-known people who had died of the disease, including Alan Rickman, Sir John Hurt, Aretha Franklin and Steve Jobs. Jon Holmes wove them into an audio piece. My job was to turn the 1-minute version into an animated film, in four days, in time for Pancreatic Cancer Awareness Month.",
    approach: [
      "The voices are the star of the piece, so I made them the visuals. I built the film as kinetic typography, with each line set in type drawn from the film or TV show it came from. Viewers recognise the voice and the design at the same moment, which lands the reveal before the hard facts arrive. Everything else stayed in Pancreatic Cancer UK's own colour palette, so the borrowed type carried the variety and the film still read as the charity's.",
      "What made four days possible was trust. There was no storyboard to get signed off, so I designed the type treatments in Photoshop and Illustrator, animated them in After Effects and cut them to the audio in Premiere Pro without stopping for approval rounds. The finished film went through with no notes. I delivered it in 16:9 and 9:16 for broadcast-style and social placements.",
      "Acamar Films donated the animation, which meant the charity got broadcast-quality work on a small charity budget.",
    ],
    result: [
      "Lost Voices launched in November 2021. The campaign generated 97 pieces of media coverage with a combined potential reach of 37 million, drove a record 12,500+ visitors to the charity's website on launch day, and reached over 170,000 people on social media. A later screening event for the film raised more than £50,000.",
      "In September 2022 the campaign won Communications Campaign of the Year at the Third Sector Awards. The judges called it \u201can ingenious, innovative campaign\u201d, and Pancreatic Cancer UK publicly credited me for creating the animation.",
    ],
    stats: [
      { value: "37m", label: "potential media reach" },
      { value: "12,500+", label: "website visitors on launch day" },
      { value: "170k+", label: "people reached on social" },
      { value: "£50k+", label: "raised at a screening event" },
    ],
    credits: [
      { role: "Client", names: "Pancreatic Cancer UK" },
      { role: "Campaign Lead", names: "Olivia Williams, ambassador for Pancreatic Cancer UK" },
      { role: "Audio", names: "Jon Holmes and Unusual Productions" },
      { role: "Animation Studio", names: "Acamar Films" },
      { role: "Art Direction & Motion Design", names: "Luke Pelletier" },
    ],
    press: [
      {
        src: "/media/pcuk/press-third-sector.jpg",
        alt: "Third Sector Awards listing: Lost Voices by Pancreatic Cancer UK, winner of Communications Campaign of the Year",
        caption: "Third Sector Awards 2022: Communications Campaign of the Year, winner",
      },
      {
        src: "/media/pcuk/press-pcuk-post.jpg",
        alt: "Pancreatic Cancer UK post thanking Olivia Williams, Jon Holmes and Luke Pelletier, with the team holding the award",
        caption: "Pancreatic Cancer UK on X, 1 October 2022",
        narrow: true,
      },
    ],
    seoTitle: "Lost Voices for Pancreatic Cancer UK | Luke Pelletier",
    metaDescription:
      "Award-winning kinetic typography for Pancreatic Cancer UK's Lost Voices campaign. Art direction and motion design by Luke Pelletier, made in four days.",
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
    title: "London Business TV: A Multi-Cam Studio in a Garden Shed",
    discipline: "Content Operations",
    year: "2020",
    summary:
      "In the first week of lockdown, I turned a large garden shed into a virtual-set studio that an MP used to address his constituents.",
    blurb:
      "In lockdown, I built a multi-cam virtual-set studio in a garden shed, along with the brand. An MP used it to address his constituents.",
    meta: "London Business TV · Freelance · 2020",
    tags: ["Virtual Set", "Brand Identity", "Editing"],
    facts: {
      client: "London Business TV, a start-up virtual events and business broadcaster",
      role: "Digital & Video Producer (freelance)",
      disciplines: "Content operations, motion design, offline and online editorial, audio post",
      deliverables:
        "1 × multi-cam virtual-set studio, brand identity and logo, motion graphics, charity and corporate videos",
      tools:
        "NewTek TriCaster, X-keys programmable keypad, Audio-Technica PRO 70 lav mics, Behringer in-ear monitoring, Adobe Creative Cloud",
      timeline: "March to July 2020",
    },
    brief:
      "I started on 16 March 2020, a week before the UK went into lockdown. The founder wanted to launch a business offering live virtual events and broadcasts. The studio, the brand and the product all had to be built together, on a fixed budget, in a large shed at the bottom of a garden.",
    approach: [
      "I built a green-screen virtual set around a NewTek TriCaster, keying the presenter into a 3D news-desk environment at 1080/25p. Remote guests joined over Skype and Zoom and appeared on the set's on-screen monitor, so a home video call looked like a studio interview.",
      "With a crew of one or two, I mapped the show onto a 24-key X-keys pad. Each hand-labelled key fired a TriCaster macro: presenter shot, Skype guest, VT1, VT2, guest captions, track in and out, record start and stop. That let a single operator run a multi-cam show live without hunting through menus.",
      "The presenter wore a lav mic and heard remote guests through an in-ear monitor. That kept the guests' audio off the room mic and out of the stream.",
      "I also designed the London Business TV identity, a navy-and-white serif wordmark, and produced the motion graphics, budgets and event plans used to pitch the studio to clients.",
      "Between shows, I led the edit on charity and corporate videos. One was a film for Lola's Homeless Helpers, an East London volunteer group supporting people sleeping rough. It was made to raise awareness, bring in donations and recruit volunteers.",
    ],
    result: [
      "The studio came in on budget and within scope. Jerome Mayhew, then MP for Broadland, first used it to run a Zoom meeting, then came back to deliver a message to his constituents from the virtual set.",
      "The Lola's Homeless Helpers film did its job, helping the group raise awareness, funds and new volunteers.",
      "Henry Mayhew, Executive Producer & Director, said he was \u201coften impressed by his ability to pick things up, learn, and solve problems quickly\u201d.",
    ],
    seoTitle: "Lockdown Virtual-Set Studio | Luke Pelletier",
    metaDescription:
      "How I turned a garden shed into a TriCaster virtual-set studio in spring 2020, used by an MP to address constituents, plus the brand and a charity film.",
    workSlots: 4,
    workCaptions: [
      "The X-keys pad, with a hand-labelled key for every TriCaster macro, beside the in-ear monitor pack and lav mic",
      "Keying the presenter into the 3D news-desk set with TriCaster's LiveMatte",
      "The control desk: TriCaster Mini, programme monitor and multiview, with the green screen behind",
      "Recording in the shed, with the TriCaster running the show live",
    ],
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
    year: "2025",
    summary:
      "A Premiere Pro extension I built in three weekends that turned minutes of compilation assembly into seconds.",
    blurb:
      "A Premiere Pro extension I built to assemble ~60 weekly YouTube compilations in seconds, with automatic intros, markers and file naming.",
    meta: "Acamar Films · Premiere Pro extension · In-house",
    tags: ["Automation", "Content Operations", "Premiere Pro"],
    facts: {
      client: "Acamar Films, producers of Bing Bunny (in-house)",
      role: "Content Pipeline Lead; designer and developer of the tool",
      disciplines: "Content operations, offline editorial",
      deliverables:
        "Custom Premiere Pro CEP extension and matching project template, used by 3 editors producing ~60 compilations a week across 35 territories",
      tools: "Premiere Pro, CEP (HTML/JavaScript, ExtendScript)",
      timeline: "About three weekends, built in my own time",
    },
    brief:
      "Bing's YouTube channels published around 60 episode compilations a week across 35 territories. Each one meant pulling episodes into a sequence by hand, adding the right series intro and naming the file to convention: 3–5 minutes of work, repeated dozens of times a week by three editors. The team considered it the most boring part of the job, and it was exactly the kind of repetitive task where naming mistakes creep in.",
    approach: [
      "I didn't want to write a longer process doc or hand the team another app to learn. So I built the fix into Premiere itself, as a panel that sits in the editor's workspace.",
      "The key was designing the tool and the project template together. Every master project shares the same bin structure: pre-nested episode sequences split by edit variant (with and without the opening street shot), series intros, end screens, and a bin for finished compilations. Because the extension knows where everything lives, the editor only types the episode numbers in running order. Ranges like 1–3, 5, 7–9 are expanded automatically. Then they pick the variant and the series.",
      "One click builds the sequence: episodes in order from a 10:00:00:00 start, the series intro if needed, start and end markers, and a filename assembled from the compilation number, version and editor tag. A Validate button checks the input before anything touches the timeline.",
    ],
    result: [
      "Assembly dropped from 3–5 minutes to under 5 seconds per compilation. At ~60 compilations a week, that's roughly 3–5 hours of editor time back every week. Naming errors stopped, and every file follows the same convention whoever builds it.",
      "The job the team liked least became the quickest part of their week, and they were very happy with it.",
    ],
    stats: [
      { value: "<5 sec", label: "per compilation, down from 3–5 minutes" },
      { value: "3–5 hrs", label: "editor time saved every week" },
      { value: "~60", label: "compilations a week" },
      { value: "35", label: "territories" },
    ],
    seoTitle: "Batch Builder – Premiere Pro Automation | Luke Pelletier",
    metaDescription:
      "How Luke Pelletier built a Premiere Pro extension that cut YouTube compilation assembly from minutes to seconds across 35 territories at Acamar Films.",
    workSlots: 2,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
