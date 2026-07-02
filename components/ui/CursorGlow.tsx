"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let raf = 0;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0;

    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function tick() {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
