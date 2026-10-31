// All the words on the site that aren't case studies live here.
// Text in [square brackets] is a placeholder: swap it for the real thing.

export const site = {
  name: "Luke Pelletier",
  wordmark: "lukepell",
  title: "Digital Video Producer & Motion Designer",
  email: "luke@lukepell.io",
  location: "Sydney, Australia",
  abn: "44 342 727 741",
  linkedin: "https://www.linkedin.com/in/lukepelletier1991/",
  // Swap for your Calendly link when it's set up
  bookingUrl: "mailto:luke@lukepell.io?subject=15-minute%20call",
  availabilityUrl: "mailto:luke@lukepell.io?subject=Availability",
  // Drop your resume into the public folder with exactly this name
  resumeUrl: "/Luke-Pelletier-Resume.pdf",

  hero: {
    eyebrow: "Digital Video Producer & Motion Designer",
    // Each line of the headline shows on its own line; the second is in the brand colour
    headline: ["Video Editing & Motion Design for agencies.", "Content Systems for brands."],
    intro:
      "Thirteen years in video, from cutting national news at 9News Sydney to building the pipeline behind 67 YouTube channels.",
    proof:
      "Most recently, I designed the content pipeline for a global kids' entertainment brand's 67 YouTube channels. It turned out around 60 compilations a week in 35 languages, with a team of three.",
    location: "Based in Sydney, working in studio or remotely.",
  },

  doorsTitle: "Two Ways to Work Together",
  doors: [
    {
      href: "/brands",
      title: "For Brands and Companies",
      line: "Your own video team and the systems to make more, for less, or a one-off video.",
      tag: "Audit and retainer, or a project fee for one-off videos",
      action: "See how I work with brands",
    },
    {
      href: "/agencies",
      title: "For Agencies",
      line: "A senior editor, motion designer or animation producer, by the day.",
      tag: "Day or project rate",
      action: "See how I work with agencies",
    },
  ],

  proof: {
    label: "The systems behind the numbers",
    sentence:
      "At Acamar Films, I designed and ran the content pipeline behind the global digital channels for Bing and Again! Again!",
    footnote:
      "Channels managed by Acamar's YouTube team. Pipeline, workflow, naming conventions and automation tools by me; QC and delivery by a video team of three, including me.",
    // Each number counts up and fades in as it scrolls into view
    stats: [
      { value: 13, prefix: "", suffix: "bn+", label: "lifetime views" },
      { value: 67, prefix: "", suffix: "", label: "YouTube channels" },
      { value: 35, prefix: "", suffix: "", label: "languages" },
      { value: 60, prefix: "~", suffix: "", label: "compilations a week" },
    ],
  },

  brands: {
    metaTitle: "Video Systems & In-House Teams for Brands",
    metaDescription:
      "Sydney-based Video Producer who helps brands build in-house video teams: audit, workflow, custom tools, hiring and training.",
    headline: "Build your own video team, and the system it runs on.",
    intro:
      "The content that works usually comes from steady output: lots of pieces, tried on real audiences, with the winners turned into more. I help you hire the person to make it, set up the workflow around them and train them to run it. Need one video rather than a team? I make one-off videos too, priced per project.",
    stepsTitle: "How We'd Work Together",
    steps: [
      {
        title: "1. Audit",
        tag: "$3,600 + GST, credited in full to the Build",
        body: "Four days, one written plan. We start with what video needs to do for your business, such as bringing in leads or sales. Then I look at what you're making now, what it costs and the tools you already have. You get a plan covering the role you need, the workflow to build and how you'll know it's working, within two weeks of our first session.",
      },
      {
        title: "2. Build",
        tag: "Monthly retainer, usually 1 to 3 months",
        body: "I set up the workflow in your existing software, code custom tools where they save time and write the documentation. I help you write the role, sit in on interviews and choose the right person, then onboard and train them.",
      },
      {
        title: "3. Handover",
        tag: "",
        body: "Your new hire runs it, testing formats and making more each week. If you'd like check-ins afterwards, we'll set them up however suits you.",
      },
    ],
    proofTitle: "Proof",
    proof:
      "For a global kids' entertainment brand, I designed the content pipeline behind 67 YouTube channels: around 60 compilations a week in 35 languages, with a team of three. I led and mentored that team, and onboarded and trained the staff and freelancers who joined it.",
    faqTitle: "Questions Brands Usually Ask",
    faq: [
      {
        q: "We don't have anyone doing video yet. Is that a problem?",
        a: "It's a good place to start. I'll help you decide on the role, hire for it and set them up properly from day one.",
      },
      {
        q: "We already have our own tools. Do we need to switch?",
        a: "No. I'll work with what you have and make it run better. If something's missing, I can build it.",
      },
      {
        q: "Do you film?",
        a: "No. Your new hire might, or I'll set up the workflow around footage, animation or whatever formats suit you best.",
      },
      {
        q: "Can you just make one video for us?",
        a: "Yes. I make one-off videos too, from Video Editing and Motion Design to animation, priced per project.",
      },
      {
        q: "What does it cost?",
        a: "The audit is $3,600 + GST, which is four days of my time, and it comes off the Build if you go ahead. The Build is a monthly retainer, scoped after the audit so you know the total upfront.",
      },
    ],
    closing: "Tell me where your video is now, and where you want it to be.",
  },

  agencies: {
    metaTitle: "Freelance Editor & Motion Designer for Agencies",
    metaDescription:
      "Sydney-based Senior Editor, Motion Designer and Animation Producer for screens of every size. I slot into your team, your software and your workflow.",
    headline: "Senior Video Editing, Motion Design and Animation Producing, slotted straight into your team.",
    intro:
      "I've spent over a decade cutting for national TV news and making content for a global kids' entertainment brand. I work in your software, follow your naming and versioning, and hand back project files your team can pick up without a briefing.",
    rate: "$900 + GST a day, or a project rate for longer jobs. Your first day is risk-free.",
    offersTitle: "What I Can Pick Up",
    offers: [
      {
        title: "Video Editing",
        body: "Offline and Online Editing for broadcast, social and brand, with Colour Grading in DaVinci Resolve. Versions, cut-downs and aspect ratios included.",
      },
      {
        title: "Motion Design",
        body: "2D and 3D Motion Design for social, broadcast, large-format LED screens and apps. Titles, animated assets and templates, built to the exact resolution and spec of each screen.",
      },
      {
        title: "Producing for Animation",
        body: "I run animation projects from script and storyboard through to delivery, coordinating animators and partners along the way.",
      },
    ],
    teamTitle: "How I Work With Your Team",
    team: [
      "On my own kit: Premiere Pro, After Effects, Blender, and DaVinci Resolve for colour",
      "In your studio, on Avid Media Composer or whatever you run",
      "In studio around Sydney, or remote",
    ],
    trialTitle: "Try Me for a Day",
    trial: "If you're not happy with my first day, tell me by the end of it and the day's on me.",
    creditsTitle: "Credits",
    credits: [
      "Senior Video Editor at 9News Sydney, leading a shift of eight editors and motion designers",
      "Camera Crew Awards 2018: Best TODAY Show Feature Edit",
      "Third Sector Awards 2022: Communications Campaign of the Year, as Creative Producer and 2D Animator",
      "Art Director and Animator on an animated special sold to Italian broadcaster Rai",
    ],
    faqTitle: "Questions Producers Usually Ask",
    faq: [
      {
        q: "What's your rate?",
        a: "$900 + GST a day. If you need me for a few weeks, I'll quote a project rate instead. Either way, your first day with me is risk-free.",
      },
      {
        q: "Can you take something on at short notice?",
        a: "Send me your dates and I'll confirm my availability within one working day.",
      },
      { q: "Do you shoot?", a: "No. I edit footage your crew has shot, and produce animation." },
      {
        q: "Do you do the sound mix?",
        a: "I lay up audio cleanly for your sound team, but I don't do final mixes.",
      },
    ],
    closing: "Got a project coming up? Let me know the dates.",
  },

  services: {
    metaDescription:
      "Freelance Video Editing, Motion Design and Animation Producing for agencies, plus one-off videos and in-house video teams for brands. Based in Sydney.",
    headline: "From one edit to a whole video team.",
    intro:
      "Agencies book Video Editing, Motion Design and Animation Producing by the day or project. Brands can start with a one-off video, or with an audit and a build.",
    list: [
      {
        id: "systems",
        title: "Content Systems and In-House Video Teams",
        tag: "For brands and companies · Audit, then a monthly retainer",
        problem: "Each video starts from scratch, costs a lot, and nobody in-house owns what happens next.",
        does: "I audit your goals, your current output and your tools. Then I build the workflow in the software you already use, code custom tools where they save time, and help you hire and train someone to run it.",
        gets: "A person making video every week, and a documented system they can run without me. Builds usually take 1 to 3 months.",
        link: { href: "/brands", label: "How I work with brands →" },
      },
      {
        id: "editing",
        title: "Video Editing",
        tag: "For agencies and brands · Day or project rate",
        problem: "The footage is in, the deadline's moved and your editors are booked.",
        does: "Offline and Online Editing for broadcast, social and brand, with Colour Grading in DaVinci Resolve. Versions, cut-downs and aspect ratios included.",
        gets: "Clean timelines and project files, labelled to your conventions and ready for your sound team.",
        link: { href: "/work", label: "See the case studies →" },
      },
      {
        id: "motion",
        title: "Motion Design",
        tag: "For agencies and brands · Day or project rate",
        problem: "Your content needs to look right on a phone, a broadcast feed and a building-sized LED screen.",
        does: "2D and 3D Motion Design in After Effects and Blender, built to the exact resolution and spec of each screen, including apps.",
        gets: "Finished renders, plus editable templates your team can reuse.",
        link: { href: "/work", label: "See the case studies →" },
      },
      {
        id: "animation",
        title: "Producing for Animation",
        tag: "For agencies and brands · Day or project rate",
        problem: "You've got an animated project and nobody free to run it.",
        does: "I take it from script and storyboard through art direction, animators and partners to final delivery, including localised versions for other markets.",
        gets: "One person accountable from first draft to final file. I've art directed and animated a special sold to Italian broadcaster Rai, and coordinated international partners for localised releases.",
        link: { href: "/work", label: "See the case studies →" },
      },
    ],
    alongsideTitle: "Working Alongside Others",
    alongside: "For filming and final sound mixes, I work alongside your crew and sound team.",
    closing: "Tell me what you're working on.",
  },

  about: {
    metaDescription:
      "Thirteen years in video, from 9News Sydney to Acamar Films in London. Now a freelance Video Producer and Motion Designer back in Sydney.",
    heading: "Hi, I'm Luke.",
    intro: "I'm a Digital Video Producer and Motion Designer based in Sydney, working with agencies and brands.",
    storyTitle: "How I Got Here",
    story: [
      "I started in 2013 in the ingest room at SBS, then moved to Nine. By 2018 I was a Senior Editor at 9News Sydney, leading a shift of eight editors and motion designers.",
      "In 2020 I moved to London and joined Acamar Films, the studio behind Bing. Over six years I took projects from script to delivery. I also designed the content pipeline for Bing's 67 YouTube channels and its digital platforms: the Bing app, Facebook, Instagram and TikTok. Most recently, I set up the pipeline for the new Again! Again! channel.",
      "Now I'm back in Sydney, working for myself.",
    ],
    quotesTitle: "What People Say",
    quotes: [
      {
        text: "Luke combines strong creative judgement with a very organised and practical approach.",
        name: "Vale De Felice",
        role: "Marketing Strategy and Global Campaigns. Worked with Luke at Acamar Films.",
      },
      {
        text: "His dedication to up-skilling the entire team and enhancing our workflows was truly impressive.",
        name: "Laura Alexander",
        role: "Video Producer, Bauer Media Group. Managed Luke at Acamar Films.",
      },
      {
        text: "Luke also brings good humour and is always a friendly face in the office.",
        name: "Alex Joy",
        role: "Production Manager and CG Generalist. Worked with Luke at Acamar Films.",
      },
    ],
    factsTitle: "Fun Facts",
    facts: [
      "I have a blue belt in Brazilian Jiu-Jitsu.",
      "I do life drawing.",
      "I've run the City2Surf seven times, and I do it every year I can.",
    ],
    signOff: "Want to work together? Email me at",
  },

  contact: {
    metaDescription:
      "Book a 15-minute call or email luke@lukepell.io. Freelance Video Producer and Motion Designer based in Sydney.",
    headline: "Tell me what you need.",
    intro: "The quickest way is a 15-minute call. If you'd rather write, email works just as well.",
    brands: {
      title: "For Brands and Companies",
      body: "Tell me about the video you need, or talk me through where your content is now and where you'd like it to be.",
    },
    agencies: {
      title: "For Agencies",
      body: "Send me your dates and a line about the job, and I'll confirm my availability within one working day.",
    },
    emailTitle: "Or Just Email",
    emailHint: "It helps to include what you're making, rough dates, and a budget if you have one.",
    details: "Based in Sydney (AEST), working in studio around Sydney or remotely",
  },

  footer: {
    line: "Digital Video Producer and Motion Designer, based in Sydney.",
  },

  ctas: {
    call: "Book a 15-minute call",
    availability: "Check my availability",
    resumeNav: "Resume (PDF)",
    resumeBody: "Download my resume (PDF)",
    hiring: "Hiring for a role?",
  },
} as const;

// Vertical (9:16) pieces for the Shorts shelf on the home page.
// `youtube` is the video ID (the bit after /shorts/).
export const shorts = [
  { id: "short-1", youtube: "lSP4MglE-qw", title: "The Wildlife Trusts collaboration", credit: "Bing Bunny · YouTube Shorts · [Year]" },
  { id: "short-2", youtube: "ag5qz-wddbo", title: "Live-action paper cutout", credit: "Bing Bunny · YouTube Shorts · [Year]" },
  { id: "short-3", youtube: "HDUusThf8m4", title: "Guess which musical instrument", credit: "Bing Bunny · YouTube Shorts · [Year]" },
  { id: "short-4", youtube: "UgsB7p9qLtI", title: "In the garden", credit: "Bing Bunny · YouTube Shorts · [Year]" },
];
