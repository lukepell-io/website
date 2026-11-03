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
  // Any fact can be a list: each item then shows on its own line
  facts: {
    client: string;
    role: string | string[];
    tools: string | string[];
    deliverables: string | string[];
    disciplines?: string | string[];
    timeline?: string;
    recognition?: string;
  };
  // A string, or a list of strings for several paragraphs
  brief: string | string[];
  approach: string | string[];
  result: string | string[];
  blurb?: string; // short description on the project card
  credits?: { role: string; names: string; links?: Record<string, string> }[];
  // Links shown under The Result (e.g. a channel or article)
  links?: { label: string; href: string }[];
  // A client quote shown under The Result
  quote?: { text: string; name: string };
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
    slug: "water-truck",
    title: "Water Truck: TODAY Show Feature",
    discipline: "Editing",
    year: "2018",
    summary:
      "A five-minute feature for the TODAY Show's 2018 drought telethon, which raised $7.5 million for farmers, cut in a week and named Nine's best TODAY Show feature edit.",
    blurb:
      "A five-minute feature for the TODAY Show's 2018 drought telethon, which raised $7.5 million. Winner, Feature Edit (TODAY Show), Nine Camera Crew Awards 2018.",
    meta: "Nine Entertainment Co. · TODAY · 2018",
    tags: ["Editing", "Broadcast", "Award Winner"],
    facts: {
      client: "Nine Entertainment Co. (TODAY)",
      role: "Video Editor",
      disciplines: "Offline editorial",
      deliverables: "1 × 4:55 feature for national broadcast",
      tools: "Avid Media Composer",
      timeline: "Within 1 week of receiving the footage",
      recognition: "Winner, Feature Edit (TODAY Show), Nine Camera Crew Awards 2018",
    },
    brief:
      "In 2018 the TODAY Show ran a telethon for drought-stricken Australian farmers, broadcast live over several hours. Producer and reporter Michael Dalton spent several days in the field with a camera operator to shoot Water Truck, a feature for the broadcast, and I was brought in to edit it.",
    approach: [
      "Michael wrote the script from his time on location. I took all the footage the crew had shot and built a number of different edits from it, then we iterated on those together until we had the final cut.",
      "The whole edit was done in Avid Media Composer within a week of the footage coming in.",
    ],
    result:
      "The 4:55 feature aired as part of the telethon, which raised $7.5 million for drought-stricken farmers. Later that year it won Feature Edit (TODAY Show) at Nine's 2018 Camera Crew Awards.",
    stats: [
      { value: "$7.5m", label: "raised by the telethon for drought-stricken farmers" },
      { value: "4:55", label: "feature runtime" },
      { value: "1 week", label: "from footage to final cut" },
    ],
    credits: [
      { role: "Producer & Reporter", names: "Michael Dalton" },
      { role: "Editor", names: "Luke Pelletier" },
    ],
    press: [
      {
        src: "/media/water-truck/press-trophy.jpg",
        alt: "Glass trophy engraved: Nine Camera Crew Awards 2018, Category: Feature Edit TODAY Show, Winner Luke Pelletier, TCN, Water Truck",
        caption: "Nine Camera Crew Awards 2018: Feature Edit, TODAY Show, winner",
        narrow: true,
      },
    ],
    seoTitle: "Water Truck: TODAY Show Feature Edit | Luke Pelletier",
    metaDescription:
      "Editing for Water Truck, a 4:55 feature in the TODAY Show's 2018 drought telethon, which raised $7.5m. Cut in a week; Nine's best TODAY Show feature edit.",
    workSlots: 2,
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
    title: "Prohibition Partners LIVE 2020: Launch Promo",
    discipline: "Launch Promo",
    year: "2020",
    summary:
      "A 32-second hip-hop promo for a global cannabis conference that became the client's most-viewed YouTube video.",
    blurb:
      "A 32-second hip-hop launch promo for Prohibition Partners LIVE 2020, built from webcam footage and motion graphics. The client's most-viewed YouTube video.",
    meta: "Prohibition Partners · Event promo · 2020",
    tags: ["Editing", "Motion Design", "3D"],
    facts: {
      client: "Prohibition Partners",
      role: "Creative Producer, Video Editor & Motion Designer",
      disciplines: "Offline editorial, motion design (2D and 3D)",
      deliverables: "1 × 32s launch promo, an alternate \u201cpremium\u201d cut, social thumbnails",
      tools: "Premiere Pro, After Effects, Blender",
      timeline: "First cut in under 2 days, signed off within 8",
    },
    brief: [
      "Prohibition Partners is a data and events company for the global cannabis industry. With in-person events off the table in 2020, it took its conferences online, and for the second edition of Prohibition Partners LIVE (17–20 November 2020) it needed a 30–40 second promo to launch ticket sales across LinkedIn, Facebook, Twitter and YouTube.",
      "The brief was three words: engaging, bright and bold. The raw material was the opposite: webcam recordings of panels from the June event and a folder of brand assets. The audience was investors, operators and policymakers, and the first cut was due in two days.",
    ],
    approach: [
      "I started with the music. Rather than the usual corporate conference bed, I chose a hip-hop beat from a stock library. It was unexpected in a B2B space, set a fast pace and nodded to the long-running link between hip-hop and cannabis culture. I structured the edit like a fashion promo: minimal words and quick cuts, with the visuals doing the explaining, so it would stop people mid-scroll and hold up to a rewatch.",
      "Motion graphics carry the piece, built on the brand's new gold, green, red and blue palette, so the webcam footage only had to appear in short bursts using the most engaged moments from the June panels. To make \u201cvirtual\u201d obvious at a glance, I built a 3D laptop in Blender that opens and closes on screen, and added a phone shot showing off the platform's matchmaking feature. One brand rule held throughout: no cannabis leaves, and none of the category's tired visual shorthand.",
      "As creative producer, I labelled every text slot in the cut so the client team could rewrite copy against exact on-screen positions. I also delivered an alternate, more premium version (dark background, sleek gold laptop) as a second option for the campaign.",
    ],
    result: [
      "The final 32-second cut was signed off eight days after the brief and rolled out on YouTube, social and the newsletter ahead of the event. It's now the best-performing video on Prohibition Partners' YouTube channel, with 18,000 views.",
      "They later asked me back for more promos, but by then I'd started a new role at Acamar Films.",
    ],
    quote: {
      text: "We love the energy and pace of the video – it also pulls us in a new direction.",
      name: "Matt Freemantle, Product Director, Prohibition Partners LIVE",
    },
    stats: [
      { value: "18,000", label: "YouTube views, the channel's most-viewed video" },
      { value: "32s", label: "launch promo" },
      { value: "<2 days", label: "to the first cut" },
      { value: "8 days", label: "from brief to sign-off" },
    ],
    credits: [
      {
        role: "Prohibition Partners",
        names:
          "Matt Freemantle (Product Director), Stephen Murphy (Co-Founder & MD), Eoin Keenan (Content & Communications Director)",
      },
    ],
    seoTitle: "Prohibition Partners LIVE 2020 Promo | Luke Pelletier",
    metaDescription:
      "A 32-second hip-hop launch promo for Prohibition Partners LIVE 2020: editing, 2D and 3D motion design, and the client's most-viewed YouTube video.",
    youtube: { id: "mxcAunOa5Cw", title: "Prohibition Partners LIVE 2020 launch promo" },
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
    title: "Bing Bunny: International Title Animation",
    discipline: "Motion Design",
    year: "2021–2024",
    summary: "Re-animating Bing's opening titles so four international versions feel like the same show.",
    blurb:
      "Re-animating Bing's opening titles for Japanese, Mandarin, Hindi and Arabic versions, matched beat for beat to the original.",
    meta: "Acamar Films · Bing Bunny · 2021–2024",
    tags: ["Motion Design", "Localisation", "After Effects"],
    facts: {
      client: "Acamar Films (Bing Bunny)",
      role: "Localisation Motion Designer",
      disciplines: "Motion design, localisation",
      deliverables:
        "Opening title sequence for 4 international versions: Japanese (Japan), Mandarin Chinese (Taiwan), Hindi (India) and Arabic (Egypt and the Gulf)",
      tools: "After Effects",
      timeline: "Across 2021–2024, around 3 hours of animation in total",
    },
    brief:
      "As Bing was localised for new markets, each version needed its own opening title. The localised characters look very different from the originals, but the sequence still had to feel like Bing: the same beats, the same timing, the same spirit.",
    approach: [
      "Each time, I started from Brown Bag Films' original title and animated the localised characters in After Effects to match it, keeping the original's timing so every version lands on the same beats.",
      "The animation was the quick part. The hard part was judgement. Once you've watched a sequence over and over, you stop being able to see it properly. Your eye gets used to the differences, and it becomes difficult to tell how close you really are to the original.",
      "So I built distance into the process. Animate, step away, come back with fresh eyes, then give myself a round of notes. I repeated that loop on every title until it held up side by side with the original.",
    ],
    result:
      "Each title went to Mikael Shields, producer and voice director of Bing and CEO of Acamar Films, for approval, and they came back without notes. The self-review rounds had already caught what a reviewer would have flagged. [Where the localised versions aired or streamed]",
    stats: [
      { value: "4", label: "international versions" },
      { value: "~3 hrs", label: "of animation in total" },
      { value: "0", label: "notes at approval" },
      { value: "2021–24", label: "release years" },
    ],
    credits: [
      { role: "Approval", names: "Mikael Shields, Producer & Voice Director of Bing, CEO of Acamar Films" },
      { role: "Original Title Sequence", names: "Brown Bag Films" },
    ],
    seoTitle: "Bing International Title Animation | Luke Pelletier",
    metaDescription:
      "Localisation motion design for Bing Bunny: four international title sequences animated in After Effects to match the original beat for beat.",
    workSlots: 2,
  },
  {
    slug: "bing-creative-content",
    title: "Bing Bunny Creative Content",
    discipline: "Video Production",
    year: "2020–2026",
    summary:
      "Six years making Bing Bunny content, from cinema screens to Amazon Alexa.",
    blurb:
      "Six years of Bing Bunny content: three cinema packages, YouTube compilations and Shorts, music videos, social, Alexa audio stories and investor trailers.",
    meta: "Acamar Films · Bing Bunny · 2020–2026",
    tags: ["Video Editing", "Motion Design", "Cinema"],
    facts: {
      client: "Acamar Films (Bing Bunny)",
      role: [
        "Video Producer (2020)",
        "Senior Video Producer (2023)",
        "Head of Video Production (2026)",
      ],
      disciplines: ["Offline Editorial", "Motion Design", "Art Direction", "Game Design", "Content Pipeline"],
      deliverables: [
        "Cinema DCP Packages",
        "Themed YouTube Compilations",
        "YouTube Shorts",
        "Music Videos",
        "Topical and Product Social",
        "Partner Campaigns",
        "Alexa and App Audio Stories",
        "Stop Motion and Toy Play",
        "Investor Trailers",
      ],
      tools: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Audition"],
      timeline: "October 2020 to 2026",
    },
    brief: [
      "Bing is an International Emmy-winning, BAFTA-nominated pre-school series, made by Acamar Films with Brown Bag Films. Beyond the episodes, Acamar needed a constant flow of new content to keep Bing in front of families wherever they watch: 67 YouTube channels in 35 languages, TikTok, Instagram, the Bing app, Amazon Alexa and cinema screens across the UK and Europe.",
      "I joined in October 2020 as Video Producer, was promoted to Senior Video Producer in January 2023, and became Head of Video Production before leaving in 2026. Over those six years I worked on almost every format Acamar made: sometimes as editor, sometimes as art director, and sometimes building the system the rest of the team worked in.",
    ],
    approach: [
      "Cinema. Three feature-length DCP cinema packages: Bing's Animal Stories (2021), Bing and His Friends at the Cinema (2022) and Bing and Friends Birthday Celebration (2024). Each mixes favourite episodes with cinema-only content. On all three I was Video Editor, covering offline editorial and motion design, and Game Designer, building the play-along games that get toddlers pointing and shouting at the big screen.",
      "YouTube. Themed compilations ran across the channels all year. I edited the biggest of them, It's Christmas Day Today!, and cut YouTube Shorts alongside. Behind them sat the content pipeline I designed: the workflow, naming conventions and automation tools, including Batch Builder.",
      "Music videos. Art Director on the nursery rhyme videos Hickory Dickory Dock and The Stuckie Duckie Song, designing some of the on-screen assets.",
      "Social and partners. Topical-day content for TikTok and Instagram, product shorts for new merchandise, and 9:16 videos with partners such as The Wildlife Trusts for 30 Days Wild.",
      "Audio and app. Visuals for Bing audio stories on Amazon Alexa and the Bing: Watch Play Learn app, plus motion design and editing across Bing's digital platforms.",
      "Stop motion and toy play. Camera operator on stop-motion and toy-play shoots, and editor on some of them.",
      "Investor and corporate. Trailers, animations and presentation videos for Acamar's own use, including trailers that supported funding rounds of up to £500k.",
    ],
    result: [
      "Over six years, Bing grew from 1 billion to 11 billion YouTube views and passed 13 billion lifetime views across 67 channels in 35 languages, with 1.3 million hours watched every day. TikTok went from 0 to 142,000 followers in two years, and Instagram from 15,000 to 75,000.",
      "Channels managed by Acamar's YouTube team. Pipeline, workflow, naming conventions and automation tools by me; QC and delivery by a video team of three, including me.",
    ],
    stats: [
      { value: "13bn+", label: "Lifetime YouTube views, 67 channels, 35 languages" },
      { value: "1bn → 11bn", label: "YouTube views in six years" },
      { value: "1.3m", label: "Viewing hours every day" },
      { value: "3", label: "Cinema packages, 2021–2024" },
    ],
    links: [
      { label: "Getting Ready for Life", href: "/work/getting-ready-for-life" },
      { label: "Hoppity Voosh & the Moonkeeper", href: "/work/hoppity-voosh" },
      { label: "Find and Learn", href: "/work/bing-find-and-learn" },
      { label: "Batch Builder", href: "/work/batch-builder" },
    ],
    seoTitle: "Bing Bunny Creative Content | Luke Pelletier",
    metaDescription:
      "Six years of Bing Bunny content for Acamar Films: three cinema packages, YouTube compilations, music videos, social and Alexa stories.",
    featured: true,
    youtube: { id: "-O3VAWv-Y_A", title: "Themed compilation: It's Christmas Day Today!" },
    work: [
      { id: "x0RLkq90MuU", title: "The Stuckie Duckie Song" },
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
    title: "Bing: Hoppity Voosh & the Moonkeeper",
    discipline: "Animation",
    year: "2022",
    summary:
      "A three-minute Bing bedtime story told in one unbroken shot, taken from first concept to final delivery.",
    blurb:
      "A three-minute, single-shot Bing Bunny story I art directed, edited and animated, now at 1.7M+ YouTube views and sold to broadcasters worldwide.",
    meta: "Acamar Films · Bing Bunny · 2022",
    tags: ["Art Direction", "Animation", "3D"],
    facts: {
      client: "Acamar Films (Bing Bunny), in-house",
      role: "Art Director, Offline Editor, 2D & 3D Animator",
      disciplines:
        "Offline editorial, motion design (After Effects, 3D in Blender), content operations (multi-platform and vertical versioning)",
      deliverables:
        "1 × 3:03 16:9 animated story, 1 × 9:16 version for TikTok and Instagram Reels ([9:16 duration])",
      tools: "Premiere Pro, After Effects, Blender, Illustrator, Photoshop",
      timeline: "6 weeks (released 2022)",
    },
    brief:
      "Bing is an Emmy-winning, BAFTA-nominated pre-school series, first broadcast on the BBC in 2014. Acamar Films needed new visuals for an existing Bing audio story, Hoppity Voosh & the Moonkeeper, which runs across Bing Time on Amazon Alexa, the Bing: Watch Play Learn app and Bing's YouTube channels. The visuals had to hold a pre-school audience for just over three minutes and feel true to the show itself.",
    approach: [
      "I led the project from visual concept through storyboard, animatic and several review passes to final delivery. The storyboards went through a number of different openings and endings before we settled on one. The first idea had Hoppity asleep in a bedroom, but it gave the audience too little to look at, so I moved the story towards something with more movement and wonder.",
      "The biggest creative decision was to tell the whole story in real time with no cuts. Bing episodes deliberately keep cuts to a minimum and stay in real time, so a single continuous shot made the piece feel like part of the show rather than a bolt-on.",
      "That meant joining work from three different pipelines into one shot. The opening street shot came from Brown Bag Films. Our internal 3D team rendered the bedroom in Maya 2014 with mental ray, along with the renders of Hoppity. I built the storybook in Blender and animated it there, illustrating every page myself: vectors in Illustrator, texturing in Photoshop. I then composited the book and bedroom together in After Effects. I also rigged Hoppity in After Effects from the 3D team's renders so I could animate him directly in the comp, and I cut the offline in Premiere Pro.",
    ],
    result:
      "Since its 2022 release, the story has passed 1.7 million views on YouTube and is the third most popular piece to date on both Amazon Alexa and Bing: Watch Play Learn. It has been sold to broadcasters around the world, including as part of a package deal with Rai, Italy's largest TV and radio broadcaster, where it helped secure around £100,000 in additional revenue. I also cut a 9:16 version for TikTok and Instagram Reels.",
    stats: [
      { value: "1.7m+", label: "YouTube views" },
      { value: "3:03", label: "in one unbroken shot" },
      { value: "3rd", label: "most popular on Amazon Alexa and Bing: Watch Play Learn" },
      { value: "~£100k", label: "extra revenue from a Rai package deal" },
    ],
    credits: [
      { role: "Producers", names: "Mikael Shields, Nikica Markot-David" },
      { role: "Creative Producers", names: "Gati Varillas, Laura Alexander" },
      { role: "Design", names: "Angie Kordella, Cheryl Brock" },
      { role: "3D Animation", names: "Amie McGovern, Ellen Conlan Ellis" },
      { role: "Sound Editors", names: "Luke Shrewsbury, Óðinn Ingibergsson" },
      { role: "Opening Street Shot", names: "Brown Bag Films" },
    ],
    seoTitle: "Bing: Hoppity Voosh & the Moonkeeper | Luke Pelletier",
    metaDescription:
      "Art direction, editing and 2D/3D animation for a three-minute, single-shot Bing Bunny story with 1.7M+ YouTube views and worldwide broadcast sales.",
    youtube: { id: "_sW8IlHl3so", title: "Bing: Hoppity Voosh & the Moonkeeper" },
    workSlots: 2,
  },
  {
    slug: "bing-find-and-learn",
    title: "Bing: Find and Learn",
    discipline: "Motion Design",
    year: "2026",
    summary:
      "A seek-and-find series for preschoolers, built on an After Effects template that juniors drive with a few switches.",
    blurb:
      "A seek-and-find series for Bing's YouTube channels, built on one expression-driven After Effects template that saved two to three weeks of production.",
    meta: "Acamar Films · Bing Bunny · 2026",
    tags: ["Motion Design", "Templates", "Content Operations"],
    facts: {
      client: "Acamar Films (Bing Bunny)",
      role: "Technical Artist & Motion Designer (as Head of Video Production)",
      disciplines: "Motion design, content operations (templated pipeline)",
      deliverables: "10 episodes, 7 or 10 items per scene ([episode duration and aspect ratios])",
      tools: "After Effects (expression-driven template)",
      timeline: "Early 2026 ([production length])",
    },
    brief:
      "Acamar wanted a new educational format for the Bing YouTube channels, adapted from Bing's Busy Search and Find, the personalised book by BubblyDoo. Each episode drops viewers into a single Bing scene, such as Bing's kitchen, with a bar of items to spot. Viewers hunt for each one, and the episode celebrates once everything's found. The challenge was making ten episodes without hand-animating every card, prop and camera move from scratch.",
    approach: [
      "Instead of animating each episode, I built one template in After Effects where the item bar, the cards, the props and the camera are all controlled by expressions. Every action an episode needs is a single on/off switch.",
      "Turn one on and a card flips over. Another brings it to the centre of the screen. Another plays the reveal animation on the right prop with its matching highlight strokes. Once those are set, the camera follows the action, so nobody has to keyframe a move by hand.",
      "That meant junior members of the team could assemble episodes on their own, simply by working through the switches in order. My time went into the system rather than into repeating the same animation ten times, and the episodes stayed consistent in timing and feel across the series.",
    ],
    result:
      "The template cut at least two to three weeks from the production schedule. The format has performed well on YouTube, and the YouTube team noticed something unusual: viewers rewind to find the items again, studying the scene closely rather than watching once and moving on. [Views, watch time or retention figures]",
    stats: [
      { value: "2–3 wks", label: "cut from the production schedule" },
      { value: "10", label: "episodes from one template" },
      { value: "7 or 10", label: "items to find per scene" },
      { value: "1", label: "switch per action, no hand keyframing" },
    ],
    credits: [
      { role: "Episode Assembly", names: "Acamar's junior production team [names and roles]" },
      { role: "Format", names: "Based on Bing's Busy Search and Find by BubblyDoo" },
    ],
    seoTitle: "Bing: Find and Learn Template | Luke Pelletier",
    metaDescription:
      "An expression-driven After Effects template for Bing's Find and Learn series: juniors build each episode with switches, saving two to three weeks.",
    youtube: { id: "FxIDi695xwQ", title: "Bing: Find & Learn | Bing's Kitchen" },
    workSlots: 2,
  },
  {
    slug: "again-again-launch",
    title: "Again! Again!: Channel Launch",
    discipline: "Channel Launch",
    year: "2026",
    summary: "[One-line hook for the Again! Again! channel launch.]",
    blurb: "[Card blurb for the Again! Again! channel launch.]",
    meta: "Acamar Films · Again! Again! · 2026",
    tags: ["Channel Launch", "Motion Design", "Content Operations"],
    facts: {
      client: "Acamar Films (Again! Again!)",
      role: "Head of Video Production",
      disciplines: "Offline editorial, content operations and workflow, motion design",
      deliverables: "Channel launch assets: animated logos, coloured backgrounds and an animated character",
      tools: "Premiere Pro, After Effects (Adobe Creative Cloud)",
      timeline: "3 months",
    },
    brief: [
      "In February 2026, Acamar Films announced Again! Again!, a new global YouTube channel for pre-school audiences built on public service values. The idea is gentle, purposeful programming chosen by an advisory board of children's TV and child development experts, with the look and feel of a TV channel and presenters introducing each programme in regular live streams.",
      "The channel launched with 18 titles from producers in the UK and around the world: Bing, Ha Ha Hairies, Buddiworld, Get Well Soon, Jim Henson's Construction Site, Kiki, Mist: Sheepdog Tales, Circle Square, Glow Dogs, Ebb and Flo, Kaia's Discoveries, Jim Henson's Pajanimals, Howie, Jim Henson's Animal Show with Stinky and Jake, Grandpa in My Pocket, Adiboo: Inside the Human Body, Mumfie and Billy Bunny's Animal Songs.",
      "Starting around February, we had about three months to build everything the channel needed to launch: animated logos, coloured backgrounds and an animated character, all made to sit alongside very different shows.",
    ],
    approach: "[2–3 sentences: the launch assets and how you set up the channel's workflow.]",
    result: "[1–2 sentences: the launch and any numbers.]",
    links: [{ label: "Visit the Again! Again! channel on YouTube", href: "https://www.youtube.com/@AgainAgainOfficial" }],
    youtube: { id: "1IEhUxRPkgM", title: "Welcome to Again! Again! (launch video, with the logo animation)" },
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
