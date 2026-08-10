import { projects } from "../data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            03 · Projects
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Shipped, measured, and written up.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Four systems spanning retrieval, fine-tuning, full-stack ML, and computer vision —
            each with its own scope and result.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-line bg-panel-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_0_40px_-12px_rgba(53,224,193,0.35)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-paper">{p.name}</h3>
                    <p className="mt-1 text-sm text-mist">{p.tagline}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mist">
                    {p.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-dim" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-xl text-signal">{m.value}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-mist">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-mist"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
