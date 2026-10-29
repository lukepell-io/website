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
export const shorts = [
  { id: "short-1", title: "[Vertical piece 1]", credit: "[Client · format · year]" },
  { id: "short-2", title: "[Vertical piece 2]", credit: "[Client · format · year]" },
  { id: "short-3", title: "[Vertical piece 3]", credit: "[Client · format · year]" },
  { id: "short-4", title: "[Vertical piece 4]", credit: "[Client · format · year]" },
];
