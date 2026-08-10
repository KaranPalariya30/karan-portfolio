import { skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">02 · Skills</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            The stack behind each project.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <div className="rounded-lg border border-line bg-panel p-6 transition-colors hover:border-signal-dim">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-panel-raised px-3 py-1.5 font-mono text-xs text-paper"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
