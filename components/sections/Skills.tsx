"use client";

import { Code2, Cpu, Database, Wrench, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Core Computer Science": Cpu,
  Database: Database,
  "Developer Tools": Wrench,
};

const categoryOrder = Object.keys(skills) as (keyof typeof skills)[];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#080808]">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, organized by discipline."
          description="Grounded in computer-science fundamentals, applied through a practical development stack."
        />

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {categoryOrder.map((cat, i) => {
            const Icon = categoryIcons[cat] ?? Code2;
            return (
              <Reveal key={cat} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-2xl p-7 h-full group relative overflow-hidden"
                >
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: "#C9A227" }}
                  />
                  <div className="flex items-center justify-between relative">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-gold/10 border border-lineGold flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-gold" />
                      </span>
                      <h3 className="font-display text-ivory">{cat}</h3>
                    </div>
                    <span className="font-mono text-[11px] text-muted">
                      {skills[cat].length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="divider-gold my-5" />
                  <ul className="flex flex-wrap gap-2 relative">
                    {skills[cat].map((s) => (
                      <li
                        key={s}
                        className="text-[13px] px-3 py-1.5 rounded-full border border-line text-muted hover:!text-gold hover:!border-gold/60 hover:shadow-gold transition-all duration-300"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
