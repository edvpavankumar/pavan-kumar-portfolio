"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg)";
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.35s ease", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
