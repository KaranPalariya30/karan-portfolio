import { certifications, education } from "../data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            04 · Education
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Education & certifications.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber">School</h3>
            <ul className="mt-5 space-y-6">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-line pl-5">
                  <p className="font-display text-lg text-paper">{e.school}</p>
                  <p className="mt-1 text-sm text-mist">{e.degree}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-mist">
                    <span>{e.period}</span>
                    {e.detail && (
                      <>
                        <span className="text-line">·</span>
                        <span className="text-signal">{e.detail}</span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              Certifications
            </h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal-dim"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-base text-paper">{c.name}</p>
                    <span className="whitespace-nowrap font-mono text-xs text-mist">
                      {c.year}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-mist">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
