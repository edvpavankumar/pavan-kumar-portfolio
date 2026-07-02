"use client";

import { education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Education"
          title="Two very different classrooms."
          description="A diploma in Automobile Engineering, followed by a Bachelor's in Information Technology."
        />

        <div className="mt-14 grid gap-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="card-lux p-7 grid md:grid-cols-[auto_1fr_auto] gap-5 items-start">
                <span className="w-11 h-11 rounded-full bg-gold/10 border border-lineGold flex items-center justify-center">
                  <GraduationCap size={18} className="text-gold" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ivory">{e.degree}</h3>
                  <p className="text-muted text-sm mt-1">{e.school}</p>
                  <p className="font-mono text-[11px] text-muted mt-1">{e.period}</p>
                  {e.coursework.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {e.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-line text-muted"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {e.grade && (
                  <span className="font-mono text-sm text-gold whitespace-nowrap">
                    {e.grade}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
