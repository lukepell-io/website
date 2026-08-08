export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3a3835_0%,_#161514_35%,_#050505_75%)]" />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-[url('/noise.png')]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[clamp(4rem,12vw,10rem)] font-light tracking-[-0.06em] leading-none">
          lukepell.io
        </h1>

    

        <nav className="mt-10 flex items-center gap-8 text-xs tracking-[0.35em] text-white/70">
          <a
            href="https://www.linkedin.com/in/lukepelletier1991/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 transition hover:text-white"
          >
            LINKEDIN
            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <span className="text-white/30">•</span>

          <a
            href="mailto:luke@lukepell.io"
            className="group flex items-center gap-3 transition hover:text-white"
          >
            E-MAIL
            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </main>
  );
}