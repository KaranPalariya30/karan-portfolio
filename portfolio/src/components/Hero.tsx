import { profile } from "../data";
import EmbeddingField from "./EmbeddingField";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute inset-0">
        <EmbeddingField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="reveal max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            <span className="text-amber">$</span> whoami
          </p>

          <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 font-mono text-base text-mist sm:text-lg">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              View my work
            </button>
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Download resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-mist">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-signal"
            >
              github.com/KaranPalariya30
            </a>
            <span className="text-line">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-signal"
            >
              linkedin.com/in/karan-palariya
            </a>
            <span className="text-line">·</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
        scroll
      </div>
    </section>
  );
}
