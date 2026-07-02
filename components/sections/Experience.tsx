"use client";

import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Experience"
          title="6 months, two roles, one workshop."
          description="A hands-on industrial internship at Olympus Motors (AUDI) — where problem-solving habits were formed."
        />

        <div className="mt-16 flex flex-col gap-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.08}>
              <div className="card-lux p-7 md:p-9 grid md:grid-cols-[auto_1fr] gap-6">
                <div className="flex md:flex-col items-start gap-4 md:gap-2">
                  <span className="w-11 h-11 rounded-full bg-gold/10 border border-lineGold flex items-center justify-center">
                    <Briefcase size={18} className="text-gold" />
                  </span>
                  <span className="font-mono text-[11px] text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl text-ivory">
                      {exp.role}
                    </h3>
                    <span className="text-gold text-sm">{exp.company}</span>
                  </div>
                  <p className="text-muted text-xs mt-1">{exp.location}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="text-muted text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold/60"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.skillsGained.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-3 py-1 rounded-full border border-line text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
