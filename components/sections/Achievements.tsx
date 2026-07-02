"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Award } from "lucide-react";

function Counter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const match = target.match(/[\d.]+/);
  const numeric = match ? parseFloat(match[0]) : NaN;
  const decimals = match && match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const suffix = target.replace(/[\d.]/g, "");

  useEffect(() => {
    if (!inView || isNaN(numeric)) {
      if (isNaN(numeric)) setDisplay(target);
      return;
    }
    const duration = 900;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = progress * numeric;
      setDisplay(`${value.toFixed(decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, numeric, decimals, suffix, target]);

  return <span ref={ref}>{display}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36 bg-[#080808]">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof, in small but real numbers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-14">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-lux p-7 h-full flex flex-col"
              >
                <Award size={18} className="text-gold" />
                <div className="font-display text-3xl text-ivory mt-4">
                  <Counter target={a.metric} />
                  {a.metricLabel && (
                    <span className="text-sm text-muted ml-1.5 font-body">
                      {a.metricLabel}
                    </span>
                  )}
                </div>
                <h4 className="font-display text-sm text-ivory mt-3">
                  {a.title}
                </h4>
                <p className="text-muted text-xs mt-2 leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
