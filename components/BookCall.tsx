import { site } from "@/content/site";
import { Icon } from "./Icon";

// The "Book a 15-minute call" button. Opens Luke's Google Calendar booking page
// in a new tab, so the visitor keeps the site open behind it.
export function BookCall() {
  return (
    <a
      className="btn btn-primary"
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.ctas.call} (opens your calendar booking page in a new tab)`}
    >
      <Icon name="calendar" />
      {site.ctas.call}
    </a>
  );
}
