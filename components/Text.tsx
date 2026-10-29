// Renders a string, highlighting any [placeholder] text so it's easy to spot
// what still needs writing.
export function Text({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="tbc">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
