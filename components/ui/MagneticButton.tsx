"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "solid",
  as,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  as?: "a" | "button";
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap";
  const variants: Record<string, string> = {
    solid:
      "bg-gold-gradient text-[#050505] hover:shadow-gold shadow-[0_0_0_0_rgba(212,175,55,0)]",
    outline:
      "border border-lineGold text-ivory hover:bg-gold/10",
    ghost: "text-muted hover:text-gold",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out inline-block"
    >
      <motion.div whileTap={{ scale: 0.96 }}>
        {as === "button" ? (
          <button
            type={type}
            onClick={onClick}
            className={cn(base, variants[variant], className)}
          >
            {children}
          </button>
        ) : (
          <a
            href={href}
            onClick={onClick}
            className={cn(base, variants[variant], className)}
          >
            {children}
          </a>
        )}
      </motion.div>
    </div>
  );
}
