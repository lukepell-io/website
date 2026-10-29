// A small hand-drawn wave line. Used under the wordmark, under the
// current page in the nav, and between the steps of the pipeline.
// Slightly irregular on purpose, so it reads as drawn, not generated.
export function Wave({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7.5C9 3.2 15.5 2.6 23 6.4S36.5 11.2 45 7.2 58.8 1.9 67.5 5.9 81 10.6 94 5.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
