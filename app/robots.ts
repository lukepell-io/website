import type { MetadataRoute } from "next";

// PRE-LAUNCH: tells every search engine to stay out.
// On launch day, change `disallow: "/"` to `allow: "/"`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
