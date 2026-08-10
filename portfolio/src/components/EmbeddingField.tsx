import { useEffect, useRef } from "react";

/**
 * Signature visual: a field of points in "embedding space." A query point
 * drifts through the field; points within its cosine-similarity radius
 * light up and connect — a direct, literal nod to the retrieval mechanics
 * behind SimpleRAG (L2-normalized cosine-similarity search). Reacts gently
 * to the pointer, otherwise animates on its own.
 */
export default function EmbeddingField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let query = { x: 0, y: 0, tx: 0, ty: 0 };
    let pointer: { x: number; y: number } | null = null;
    let raf = 0;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(36, Math.min(90, Math.floor((width * height) / 12000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.1 + Math.random() * 1.4,
      }));
      query = { x: width * 0.5, y: height * 0.5, tx: width * 0.5, ty: height * 0.5 };
    }

    function pickTarget() {
      query.tx = width * (0.15 + Math.random() * 0.7);
      query.ty = height * (0.15 + Math.random() * 0.7);
    }

    let sinceTarget = 0;

    function frame() {
      sinceTarget += 1;
      if (sinceTarget > 220) {
        pickTarget();
        sinceTarget = 0;
      }

      const followX = pointer ? pointer.x : query.tx;
      const followY = pointer ? pointer.y : query.ty;
      query.x += (followX - query.x) * 0.02;
      query.y += (followY - query.y) * 0.02;

      ctx!.clearRect(0, 0, width, height);

      const radius = Math.min(width, height) * 0.34;

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - query.x;
        const dy = p.y - query.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < radius;
        const strength = inRange ? 1 - dist / radius : 0;

        if (inRange) {
          ctx!.beginPath();
          ctx!.moveTo(query.x, query.y);
          ctx!.lineTo(p.x, p.y);
          ctx!.strokeStyle = `rgba(53, 224, 193, ${0.05 + strength * 0.22})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r + strength * 1.4, 0, Math.PI * 2);
        ctx!.fillStyle = inRange
          ? `rgba(53, 224, 193, ${0.35 + strength * 0.5})`
          : "rgba(139, 150, 179, 0.35)";
        ctx!.fill();
      }

      // query point
      ctx!.beginPath();
      ctx!.arc(query.x, query.y, 4, 0, Math.PI * 2);
      ctx!.fillStyle = "#f2b25c";
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(query.x, query.y, radius, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(242, 178, 92, 0.15)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      raf = requestAnimationFrame(frame);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handlePointerLeave() {
      pointer = null;
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    if (prefersReducedMotion) {
      // Draw a single static frame instead of animating.
      frame();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-80"
    />
  );
}
