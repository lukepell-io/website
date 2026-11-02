// A list of names where some names link out (e.g. to LinkedIn).
export function LinkedNames({ names, links }: { names: string; links?: Record<string, string> }) {
  if (!links || Object.keys(links).length === 0) return <>{names}</>;
  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${Object.keys(links).map(escape).join("|")})`, "g");
  return (
    <>
      {names.split(pattern).map((part, i) =>
        links[part] ? (
          <a key={i} href={links[part]} className="text-link" target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
