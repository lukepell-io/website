// Renders a sentence where {curly-bracketed} parts are highlighted.
export function Highlight({ children }: { children: string }) {
  const parts = children.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{") && part.endsWith("}") ? (
          <strong key={i} className="hl">
            {part.slice(1, -1)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
