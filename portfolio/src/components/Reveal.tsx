import type { ReactNode } from "react";
import { useReveal } from "../hooks";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible ? `reveal 0.7s cubic-bezier(0.16,1,0.3,1) both` : undefined,
        animationDelay: visible ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
