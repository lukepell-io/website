import fs from "node:fs";
import path from "node:path";

// A frame for one piece of media. If the file exists in public/media,
// it shows it. If not, it shows a labelled placeholder saying exactly
// which file to add and what it should be.

type Ratio = "wide" | "vertical" | "square" | "cinema";

type Props = {
  folder: string; // e.g. "nine-news" -> public/media/nine-news/
  name: string; // e.g. "hero" -> hero.mp4 / hero.jpg
  kind: "video" | "image";
  ratio?: Ratio;
  label: string; // what this slot is, in plain words
  spec: string; // what the file should be
  large?: boolean;
  canopy?: boolean; // green-to-turquoise placeholder instead of the default
  autoplay?: boolean; // muted looping preview (never with sound)
};

const VIDEO_EXT = ["mp4", "webm", "mov"];
const IMAGE_EXT = ["jpg", "jpeg", "png", "webp"];

function find(folder: string, name: string, exts: string[]) {
  for (const ext of exts) {
    const rel = `/media/${folder}/${name}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}

export function Media({
  folder,
  name,
  kind,
  ratio = "wide",
  label,
  spec,
  large,
  canopy,
  autoplay,
}: Props) {
  const image = find(folder, name, IMAGE_EXT);
  const video = kind === "video" ? find(folder, name, VIDEO_EXT) : null;
  const className = `frame frame-${ratio}${large ? " frame-lg" : ""}${canopy ? " canopy" : ""}`;

  if (video) {
    return (
      <div className={className}>
        <video
          src={video}
          poster={image ?? undefined}
          controls
          muted
          playsInline
          loop={autoplay}
          autoPlay={autoplay}
          preload="metadata"
        />
      </div>
    );
  }

  // A still on its own works too (e.g. work-2.jpg with no video).
  if (image) {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={label} />
      </div>
    );
  }

  const target =
    kind === "video"
      ? `public/media/${folder}/${name}.mp4 (+ ${name}.jpg poster)`
      : `public/media/${folder}/${name}.jpg`;

  return (
    <div className={className} role="img" aria-label={`Placeholder: ${label}`}>
      {kind === "video" && <span className="play" aria-hidden="true" />}
      <span className="slot-label">
        <strong>{label}</strong>
        <span>{spec}</span>
        <code>{target}</code>
      </span>
    </div>
  );
}
