// Everything on the home page that isn't a case study lives here.
// Text in [square brackets] is a placeholder: swap it for the real thing.

export const site = {
  name: "Luke Pelletier",
  wordmark: "lukepell",
  email: "luke@lukepell.io",
  location: "Sydney, Australia",
  linkedin: "https://www.linkedin.com/in/lukepelletier1991/",

  hero: {
    eyebrow: "Video · Content · Motion",
    headline: "Stories that move, cut with care.",
    intro:
      "I edit, finish and animate video for brands and creators, and build the workflows that keep it shipping.",
    clients: [
      "Acamar Films",
      "Nine Entertainment Co.",
      "Prohibition Partners",
      "London Business TV",
    ],
  },

  about: {
    eyebrow: "About",
    heading: "Hi, I'm Luke.",
    paragraphs: [
      "I'm a video editor and motion designer, now based in Sydney after years in London. I work across offline and online editorial, audio post and motion design.",
      "I spent six years in-house at Acamar Films on Bing Bunny, where I led the operations behind every new content format: themed compilations, cinema games, social, stop-motion, educational content and Alexa audio stories.",
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
