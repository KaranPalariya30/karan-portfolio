import Reveal from "./Reveal";

const QUALITIES = [
  {
    label: "Systems over notebooks",
    detail:
      "Takes ML work past the experiment stage — SimpleRAG and LoRALinear are both built as reusable, tested components, not one-off scripts.",
  },
  {
    label: "First-principles depth",
    detail:
      "Implements core techniques from the source paper, such as LoRA's from-scratch forward/backward pass, rather than only calling a library.",
  },
  {
    label: "Full-stack execution",
    detail:
      "Comfortable across the stack — from a Random Forest model to the Flask API and React interface that ships it, as with MediLineage.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">01 · About</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Building the retrieval and adaptation layer of modern AI systems.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
            I'm a Computer Science undergraduate at Graphic Era Hill University, graduating in
            2027, focused on the mechanics underneath large language models — how they retrieve
            context, how they're adapted efficiently, and how those pieces get shipped as real
            software rather than staying in a notebook. Alongside that I work across the backend
            and frontend, so a model I train can actually reach an interface someone uses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {QUALITIES.map((q, i) => (
            <Reveal key={q.label} delay={i * 90}>
              <div className="h-full rounded-lg border border-line bg-panel-raised p-6">
                <p className="font-mono text-xs text-signal">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg text-paper">{q.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{q.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
