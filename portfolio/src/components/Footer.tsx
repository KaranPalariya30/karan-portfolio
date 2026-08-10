import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm text-paper">{profile.name}</p>
          <p className="mt-1 font-mono text-xs text-mist">
            Retrieval, fine-tuning, and full-stack ML systems.
          </p>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-mist">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal">
            Email
          </a>
        </div>

        <p className="font-mono text-xs text-mist">© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
