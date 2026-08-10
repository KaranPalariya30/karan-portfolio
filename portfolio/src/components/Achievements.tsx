import { achievements } from "../data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            05 · Achievements
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Leadership & recognition.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-line bg-panel-raised p-6">
                <span className="mt-1 font-mono text-signal">◆</span>
                <div>
                  <p className="font-display text-base text-paper">{a.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
