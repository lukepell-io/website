// All the words on the site that aren't case studies live here.
// RULE: every title is in Title Case (titles, headings, labels, job titles, skills).
// Buttons and body text stay in sentence case.
// Text in [square brackets] is a placeholder: swap it for the real thing.

export const site = {
  name: "Luke Pelletier",
  wordmark: "lukepell",
  title: "Digital Video Producer & Motion Designer",
  email: "luke@lukepell.io",
  location: "Sydney, Australia",
  abn: "44 342 727 741",
  linkedin: "https://www.linkedin.com/in/lukepelletier1991/",
  // Google Calendar booking page: "15 mins with Luke"
  bookingUrl: "https://calendar.app.google/tP9weX8ggABgKpYF7",
  availabilityUrl: "mailto:luke@lukepell.io?subject=Availability",
  // The homepage showreel on Vimeo (the number at the end of the Vimeo link)
  // Leave empty to use public/media/home/showreel.mp4. Vimeo blocks embedding 406275939 for now.
  showreelVimeo: "",
  // Drop your resume into the public folder with exactly this name
  resumeUrl: "/Luke-Pelletier-Resume.pdf",

  hero: {
    // Each line of the headline shows on its own line; the second is in the brand colour
    role: "Digital Video Producer & Motion Designer",
    headline: ["Production & Motion Design for Agencies.", "Content Systems for Brands."],
    intro:
      "13+ years in production, from cutting news at 9News Sydney to leading video production at Acamar Films, home of the International Emmy-winning, BAFTA-nominated Bing.",
    proof:
      "Most recently, I designed the content pipeline for a global kids' entertainment brand's 67 YouTube channels. It turned out around 60 compilations a week in 35 languages, with a team of three.",
    location: "Based in Sydney, working in studio or remotely.",
  },

  doorsTitle: "Two Ways to Work Together",
  doors: [
    {
      href: "/brands",
      title: "For Brands and Companies",
      line: "One-off videos, or a video team of your own. The pipeline I designed for Bing turned out around 60 compilations a week with a team of three.",
      tag: "Audit and retainer, or a project fee for one-off videos",
      action: "See how I work with brands",
    },
    {
      href: "/agencies",
      title: "For Agencies",
      line: "A freelance Producer who runs your video and animation jobs from brief to delivery, or a Senior Video Editor and Motion Designer when you need hands on the timeline.",
      tag: "Day or project rate",
      action: "See my day rate",
    },
  ],

  proof: {
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
    headline: "Build Your Own Video Team, and the System It Runs On.",
    intro:
      "I help you hire the person to make your videos, set up the workflow around them and train them to run it.",
    stepsTitle: "How We'd Work Together",
    steps: [
      {
        title: "1. Audit",
        icon: "audit",
        tag: "$3,600 + GST, credited in full to the Build",
        body: "Four days, one written plan. We start with what video needs to do for your business, such as bringing in leads or sales. Then I look at what you're making now, what it costs and the tools you already have. You get a plan covering the role you need, the workflow to build and how you'll know it's working, within two weeks of our first session.",
      },
      {
        title: "2. Build",
        icon: "build",
        tag: "Monthly retainer, usually 1 to 3 months",
        body: "I set up the workflow in your existing software, code custom tools where they save time and write the documentation. I help you write the role, sit in on interviews and choose the right person, then onboard and train them.",
      },
      {
        title: "3. Handover",
        icon: "handover",
        tag: "",
        body: "Your new hire runs it, testing formats and making more each week. If you'd like check-ins afterwards, we'll set them up however suits you.",
      },
    ],
    proofTitle: "Proof",
    proof:
      "At Acamar Films, I designed the content pipeline behind Bing's 67 YouTube channels: around 60 compilations a week in 35 languages, with a team of three. I led and mentored that team, and onboarded and trained the staff and freelancers who joined it.",
    faqTitle: "Questions Brands Usually Ask",
    faq: [
      {
        q: "We Don't Have Anyone Doing Video Yet. Is That a Problem?",
        a: "It's a good place to start. I'll help you decide on the role, hire for it and set them up properly from day one.",
      },
      {
        q: "We Already Have Our Own Tools. Do We Need to Switch?",
        a: "No. I'll work with what you have and make it run better. If something's missing, I can build it.",
      },
      {
        q: "Do You Film?",
        a: "No. Your new hire might, or I'll set up the workflow around footage, animation or whatever formats suit you best.",
      },
      {
        q: "Can You Just Make One Video for Us?",
        a: "Yes. I make one-off videos too, from Video Editing and Motion Design to animation, priced per project.",
      },
      {
        q: "What Does It Cost?",
        a: "The audit is $3,600 + GST, which is four days of my time, and it comes off the Build if you go ahead. The Build is a monthly retainer, scoped after the audit so you know the total upfront.",
      },
    ],
    closing: "Tell Me Where Your Video Is Now, and Where You Want It to Be.",
  },

  agencies: {
    metaTitle: "Freelance Producer, Editor & Motion Designer for Agencies",
    metaDescription:
      "Sydney-based freelance Producer, Senior Video Editor and Motion Designer. Former Head of Video Production at Acamar Films (Bing). By the day or project.",
    headline: "A Freelance Producer, Slotted Straight Into Your Team.",
    intro:
      "I run video and animation jobs from brief to delivery in your software and your naming, and I can edit or animate when the timeline needs another pair of hands.",
    rate: "From $900 + GST for a 10-hour day, or a project rate for longer jobs. Your first day is risk-free.",
    offersTitle: "What I Can Pick Up",
    offers: [
      {
        title: "Producing",
        icon: "producing",
        rate: "From $1,000 + GST a day",
        body: "Video and animation jobs from brief, script and storyboard to delivery. I schedule, track budgets, brief freelancers and partners, and handle localised versions for other markets.",
      },
      {
        title: "Video Editing",
        icon: "editing",
        rate: "From $900 + GST a day",
        body: "Offline and Online Editing for broadcast, social and brand, with Colour Grading in DaVinci Resolve. Versions, cut-downs and aspect ratios included.",
      },
      {
        title: "Motion Design",
        icon: "motion",
        rate: "From $900 + GST a day",
        body: "2D and 3D Motion Design for social, broadcast, large-format LED screens and apps. Titles, animated assets and templates, built to the exact resolution and spec of each screen.",
      },
    ],
    teamTitle: "How I Work With Your Team",
    team: [
      { icon: "tasks", text: "Producing in your project tools: Airtable, ClickUp, Notion or whatever you run" },
      { icon: "kit", text: "On my own kit: Premiere Pro, After Effects, Blender, and DaVinci Resolve for colour" },
      { icon: "studio", text: "In your studio, on Avid Media Composer or whatever you run" },
      { icon: "location", text: "In studio around Sydney, or remote" },
    ],
    trialTitle: "Try Me for a Day",
    trial: "If you're not happy with my first day, tell me by the end of it and the day's on me.",
    creditsTitle: "Credits",
    credits: [
      "Head of Video Production at Acamar Films, the studio behind Bing",
      "Senior Video Editor at 9News Sydney, leading a shift of eight editors and motion designers",
      "Camera Crew Awards 2018: Best TODAY Show Feature Edit",
      "Third Sector Awards 2022: Communications Campaign of the Year, as Creative Producer and 2D Animator",
      "Art Director and Animator on an animated special sold to Italian broadcaster Rai",
    ],
    faqTitle: "Questions Producers Usually Ask",
    faq: [
      {
        q: "What's Your Rate?",
        a: "Producing is from $1,000 + GST a day, and Video Editing and Motion Design from $900 + GST, all for a 10-hour day. If you need me for a few weeks, I'll quote a project rate instead. Either way, your first day with me is risk-free.",
      },
      {
        q: "Can You Take Something On at Short Notice?",
        a: "Send me your dates and I'll confirm my availability within one working day.",
      },
      { q: "Do You Shoot?", a: "No. I produce and edit, and work alongside the crew who film." },
      {
        q: "Do You Do the Sound Mix?",
        a: "I lay up audio cleanly for your sound team, but I don't do final mixes.",
      },
    ],
    closing: "Got a Project Coming Up? Let Me Know the Dates.",
  },

  services: {
    metaDescription:
      "Freelance Video Editing, Motion Design and Animation Producing for agencies, plus one-off videos and in-house video teams for brands. Based in Sydney.",
    headline: "From One Edit to a Whole Video Team.",
    intro:
      "Agencies book me as a Producer, Video Editor or Motion Designer, by the day or project. Brands can start with a one-off video, or with an audit and a build.",
    list: [
      {
        id: "systems",
        icon: "systems",
        title: "Content Systems and In‑House Video Teams", // non-breaking hyphen keeps "In-House" together
        short: "Content Systems", // label for the jump button at the top of the page
        tag: "For brands and companies. Audit, then a monthly retainer.",
        problem: "Each video starts from scratch, costs a lot, and nobody in-house owns what happens next.",
        does: "I audit your goals, your current output and your tools. Then I build the workflow in the software you already use, code custom tools where they save time, and help you hire and train someone to run it.",
        gets: "A person making video every week, and a documented system they can run without me. Builds usually take 1 to 3 months.",
        link: { href: "/brands", label: "How I work with brands" },
      },
      {
        id: "animation",
        icon: "producing",
        title: "Producing",
        tag: "For agencies and brands. From $1,000 + GST a day.",
        problem: "You've won the job and nobody's free to run it.",
        does: "I take video and animation jobs from brief, script and storyboard through art direction, freelancers and partners to final delivery, including localised versions for other markets.",
        gets: "One person accountable from first draft to final file. I've art directed and animated a special sold to Italian broadcaster Rai, and coordinated international partners for localised releases.",
        link: { href: "/agencies", label: "How I work with agencies" },
      },
      {
        id: "editing",
        icon: "editing",
        title: "Video Editing",
        tag: "For agencies and brands. From $900 + GST a day.",
        problem: "The footage is in, the deadline's moved and your editors are booked.",
        does: "Offline and Online Editing for broadcast, social and brand, with Colour Grading in DaVinci Resolve. Versions, cut-downs and aspect ratios included.",
        gets: "Clean timelines and project files, labelled to your conventions and ready for your sound team.",
        link: { href: "/work", label: "See the case studies" },
      },
      {
        id: "motion",
        icon: "motion",
        title: "Motion Design",
        tag: "For agencies and brands. From $900 + GST a day.",
        problem: "Your content needs to look right on a phone, a broadcast feed and a building-sized LED screen.",
        does: "2D and 3D Motion Design in After Effects and Blender, built to the exact resolution and spec of each screen, including apps.",
        gets: "Finished renders, plus editable templates your team can reuse.",
        link: { href: "/work", label: "See the case studies" },
      },
    ],
    alongsideTitle: "Working Alongside Others",
    alongside: "For filming and final sound mixes, I work alongside your crew and sound team.",
    closing: "Tell Me What You're Working On.",
  },

  about: {
    metaDescription:
      "13+ years in production, from 9News Sydney to Head of Video Production at Acamar Films in London. Now a freelance Producer and Motion Designer back in Sydney.",
    heading: "Hi, I'm Luke.",
    intro:
      "I'm a Digital Video Producer and Motion Designer in Sydney. Agencies book me to run their video and animation jobs, and brands bring me in to build a video team of their own.",
    storyTitle: "How I Got Here",
    story: [
      "I started at SBS in 2013, then moved to Nine. By 2018 I was a Senior Video Editor at 9News Sydney, leading a shift of eight.",
      "In 2020 I joined Acamar Films in London, the studio behind Bing, and finished as Head of Video Production. I took projects from script to delivery and designed the content pipeline behind Bing's 67 YouTube channels, then the new Again! Again! channel.",
      "Now I'm back in Sydney, working for myself.",
    ],
    whyTitle: "Steady Output Beats One Big Video",
    why: [
      "The content that works usually comes from steady output: lots of pieces, tried on real audiences, with the winners turned into more. I learned that cutting stories to air every day at 9News, and again at Acamar, where around 60 compilations a week went out in 35 languages with a team of three.",
      "Batch Builder came from the same place. I built a Premiere Pro plugin that cut each compile from about three minutes to under five seconds, and the team still uses it.",
      "So when you book me, you get a producer who has cut the edits himself and knows where a schedule loses its hours.",
    ],
    quotesTitle: "What People Say",
    quotes: [
      {
        text: "Luke combines strong creative judgement with a very organised and practical approach.",
        name: "Vale De Felice",
        photo: "/media/about/vale-de-felice.jpg",
        role: "Marketing Strategy and Global Campaigns. Worked with Luke at Acamar Films.",
      },
      {
        text: "His dedication to up-skilling the entire team and enhancing our workflows was truly impressive.",
        name: "Laura Alexander",
        photo: "/media/about/laura-alexander.jpg",
        role: "Video Producer, Bauer Media Group. Managed Luke at Acamar Films.",
      },
      {
        text: "Luke also brings good humour and is always a friendly face in the office.",
        name: "Alex Joy",
        photo: "/media/about/alex-joy.jpg",
        role: "Production Manager and CG Generalist. Worked with Luke at Acamar Films.",
      },
    ],
    factsTitle: "Fun Facts",
    facts: [
      "I have a blue belt in Brazilian Jiu-Jitsu.",
      "I do life drawing.",
      "I've run the City2Surf seven times, and I do it every year I can.",
    ],
    closingTitle: "Tell Me What You're Working On.",
    closingLine: "A 15-minute call is the quickest way to see if I'm the right fit for the job.",
  },

  contact: {
    metaDescription:
      "Book a 15-minute call or email luke@lukepell.io. Freelance Video Producer and Motion Designer based in Sydney.",
    headline: "Tell Me What You Need.",
    intro: "Send me a message and I'll reply within one working day. If you'd rather talk, book a 15-minute call.",
    talkTitle: "Prefer to Talk?",
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

  // The contact form. Paste your Web3Forms access key between the quotes to switch it on.
  contactForm: {
    accessKey: "f34e1e48-ae5f-487e-bd2c-369590d16dbf",
    nameLabel: "Name",
    emailLabel: "Email",
    whoLabel: "Who's getting in touch?",
    whoOptions: ["An agency", "A brand or company", "Something else"],
    messageLabel: "Message",
    messageHint: "What you're making, rough dates, and a budget if you have one.",
    submit: "Send message",
    sending: "Sending…",
    privacy: "I'll only use your details to reply to you.",
    notConnected: "This form isn't connected yet. Please email luke@lukepell.io for now.",
    sentTitle: "Thanks, your message is in.",
    sentBody: "I'll reply within one working day.",
    error: "That didn't send. Please try again, or email luke@lukepell.io.",
  },

  footer: {
    line: "Digital Video Producer & Motion Designer, based in Sydney.",
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
  { id: "short-1", youtube: "lSP4MglE-qw", title: "The Wildlife Trusts Collaboration", credit: "A Bing Bunny YouTube Short, [Year]" },
  { id: "short-2", youtube: "ag5qz-wddbo", title: "Live-Action Paper Cutout", credit: "A Bing Bunny YouTube Short, [Year]" },
  { id: "short-3", youtube: "HDUusThf8m4", title: "Guess Which Musical Instrument", credit: "A Bing Bunny YouTube Short, [Year]" },
  { id: "short-4", youtube: "UgsB7p9qLtI", title: "In the Garden", credit: "A Bing Bunny YouTube Short, [Year]" },
];
