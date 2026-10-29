"use client";

import { useState } from "react";

// YouTube thumbnail in the Shoreline frame. The real player only loads
// when someone clicks play, which keeps pages fast and avoids YouTube's
// tracking until then (uses the privacy-enhanced youtube-nocookie domain).

type Props = {
  id: string;
  title: string;
  vertical?: boolean; // YouTube Shorts (9:16)
  large?: boolean;
  thumbOnly?: boolean; // just the picture, no player (for cards)
};

export function YouTubeThumb({ id, title, vertical }: { id: string; title: string; vertical?: boolean }) {
  const first = vertical
    ? `https://i.ytimg.com/vi/${id}/oardefault.jpg`
    : `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const [src, setSrc] = useState(first);
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => src !== fallback && setSrc(fallback)}
      onLoad={(e) => {
        // YouTube serves a tiny grey image when a size is missing
        if (e.currentTarget.naturalWidth <= 120 && src !== fallback) setSrc(fallback);
      }}
    />
  );
}

export function YouTube({ id, title, vertical, large, thumbOnly }: Props) {
  const [playing, setPlaying] = useState(false);
  const className = `frame ${vertical ? "frame-vertical" : "frame-wide"}${large ? " frame-lg" : ""}`;

  if (thumbOnly) {
    return (
      <div className={className}>
        <YouTubeThumb id={id} title={title} vertical={vertical} />
      </div>
    );
  }

  if (playing) {
    return (
      <div className={className}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <button type="button" className="yt-facade" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
        <YouTubeThumb id={id} title={title} vertical={vertical} />
        <span className="play" aria-hidden="true" />
      </button>
    </div>
  );
}
