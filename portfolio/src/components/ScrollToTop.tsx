import { useScrolled } from "../hooks";

export default function ScrollToTop() {
  const visible = useScrolled(480);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel-raised font-mono text-signal shadow-lg transition-all duration-300 hover:border-signal ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
