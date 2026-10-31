"use client";

// Unmutes the homepage showreel and plays it from the start, full screen where the browser allows.
export function PlayWithSound() {
  function play() {
    const video = document.querySelector<HTMLVideoElement>(".reel-full video");
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    void video.play();
    video.requestFullscreen?.().catch(() => {});
  }

  return (
    <button type="button" className="btn btn-secondary reel-sound" onClick={play}>
      ▶ Play with sound
    </button>
  );
}
