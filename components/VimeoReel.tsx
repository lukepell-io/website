"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";

// The homepage showreel from Vimeo: a muted loop fills the hero, and
// "Play with sound" opens the full reel with sound and controls in a pop-up.

const base = "https://player.vimeo.com/video/";

export function VimeoReel({ id, title }: { id: string; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const loop = `${base}${id}?background=1&autoplay=1&muted=1&loop=1&autopause=0&dnt=1`;
  const full = `${base}${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;

  function show() {
    setOpen(true);
    dialog.current?.showModal();
  }
  function hide() {
    dialog.current?.close();
  }

  return (
    <>
      <div className="frame reel-vimeo">
        <iframe
          src={loop}
          title={`${title} (muted preview)`}
          allow="autoplay; fullscreen; picture-in-picture"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <button type="button" className="btn btn-secondary reel-sound" onClick={show}>
        <Icon name="sound" />
        Play with sound
      </button>

      <dialog ref={dialog} className="reel-dialog" aria-label={title} onClose={() => setOpen(false)}>
        <button type="button" className="icon-btn reel-close" aria-label="Close showreel" onClick={hide}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="reel-dialog-frame">
          {open && <iframe src={full} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />}
        </div>
      </dialog>
    </>
  );
}
