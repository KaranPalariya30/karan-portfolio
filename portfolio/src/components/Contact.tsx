import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">06 · Contact</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            Let's talk about what you're building.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Open to Software Engineering, AI/ML, and Backend internships. The fastest way to
            reach me is email.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-mist">Email</p>
                <p className="mt-1 font-display text-base text-paper">{profile.email}</p>
              </div>
              <span className="font-mono text-signal">→</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-between rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-mist">Phone</p>
                <p className="mt-1 font-display text-base text-paper">{profile.phone}</p>
              </div>
              <span className="font-mono text-signal">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-mist">LinkedIn</p>
                <p className="mt-1 font-display text-base text-paper">karan-palariya</p>
              </div>
              <span className="font-mono text-signal">→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-panel p-5 transition-colors hover:border-signal"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-mist">GitHub</p>
                <p className="mt-1 font-display text-base text-paper">KaranPalariya30</p>
              </div>
              <span className="font-mono text-signal">→</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-mist">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="Jane Recruiter"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-mist">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-md border border-line bg-panel px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-mist">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-md border border-line bg-panel px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="Tell me about the role..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:brightness-110"
              >
                Send message
              </button>
              {sent && (
                <p className="font-mono text-xs text-signal">
                  Opening your email client to send this — thanks for reaching out.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
