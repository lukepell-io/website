// All the words on the site that aren't case studies live here.
// Text in [square brackets] is a placeholder: swap it for the real thing.

export const site = {
  name: "Luke Pelletier",
  wordmark: "lukepell",
  email: "luke@lukepell.io",
  location: "Sydney, Australia",
  linkedin: "https://www.linkedin.com/in/lukepelletier1991/",
  // Swap for a real booking link (e.g. Cal.com or Calendly) when you have one
  bookingUrl: "mailto:luke@lukepell.io?subject=Let's%20talk",
  availabilityUrl: "mailto:luke@lukepell.io?subject=Availability",

  hero: {
    headline: "I make the video, and build the system that keeps it shipping.",
    intro:
      "Editor, motion designer and content operations lead in Sydney. From the first plan to the final delivery, and the pipeline behind it.",
  },

  doors: [
    {
      href: "/services#brands",
      title: "For brands & companies",
      line: "Content systems and production, built around your team.",
      action: "Book a call",
    },
    {
      href: "/services#agencies",
      title: "For agencies",
      line: "A safe pair of hands for edit and motion, by the day.",
      action: "Check availability",
    },
  ],

  pipeline: ["Plan", "Edit", "Motion", "Finish", "Deliver", "Systems"],

  proof: {
    label: "The systems behind the numbers",
    // Numbers in {curly brackets} are highlighted
    sentence:
      "At Acamar Films I designed and ran the content pipeline behind Bing Bunny's global YouTube channels. Alongside the channel team, it helped reach {13bn+ lifetime views} across {67 channels} in {35 languages}, and {1.3m hours watched every day}.",
    footnote: "Channels managed by Acamar's YouTube team. Pipeline, tooling and delivery by me.",
  },

  services: {
    brands: {
      title: "For brands & companies",
      intro:
        "For heads of comms, marketing teams and business owners who need more content, made well, without hiring a department.",
      offers: [
        {
          title: "Content pipeline design",
          body: "I map how your content gets made today, then design a simpler way: templates, automation and tooling that let a small team ship far more.",
        },
        {
          title: "Production, end to end",
          body: "Planning, editing, motion design, finishing and delivery in every format and language you need. One person, one point of contact.",
        },
        {
          title: "Ongoing content",
          body: "A steady monthly rhythm of content for your channels, run on the system we build together.",
        },
      ],
      price: "Projects from [$X]",
      action: "Book a call",
    },
    agencies: {
      title: "For agencies",
      intro:
        "For producers who need someone reliable in the edit: fast, organised, easy to work with, and on spec first time.",
      offers: [
        {
          title: "Edit",
          body: "Offline and online, from rough cut to final conform.",
        },
        {
          title: "Motion",
          body: "Titles, graphics and animation in After Effects.",
        },
        {
          title: "Finish & deliver",
          body: "Audio post, versioning and delivery to spec, including multi-language and social cutdowns.",
        },
      ],
      rate: "[Day rate] AUD + GST",
      details: "Remote or on-site in Sydney · Premiere Pro, After Effects, Media Encoder, [others]",
      action: "Check availability",
    },
  },

  about: {
    heading: "Hi, I'm Luke.",
    paragraphs: [
      "I'm a video editor and motion designer, now based in Sydney after years in London. I work across offline and online editorial, audio post and motion design.",
      "I spent six years in-house at Acamar Films on Bing Bunny. I designed and ran the content pipeline behind every new format: themed compilations, cinema games, social, stop-motion, educational content and Alexa audio stories. Along the way I built Batch Builder, a custom plugin that made producing at that scale possible.",
      "[A line on what you're looking for next, and who you'd love to work with.]",
    ],
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
