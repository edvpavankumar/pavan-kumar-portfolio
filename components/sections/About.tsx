"use client";

import { motion } from "framer-motion";
import { journey, strengths, aboutStory } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="About"
          title="From the workshop floor to the terminal."
          description="A deliberate pivot, not a detour — every stage below fed directly into the next."
        />

        <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-4">
          {aboutStory.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed text-[15px]">
              {para}
            </p>
          ))}
        </Reveal>

        {/* Signature: gold-thread journey timeline */}
        <div className="relative mt-20">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lineGold to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {journey.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-14 md:ml-0" : "md:pl-14 md:ml-auto"
                }`}
              >
                <span
                  className="absolute left-[9px] md:left-auto top-1.5 w-3 h-3 rounded-full bg-gold shadow-gold"
                  style={
                    i % 2 === 0
                      ? { right: "-6.5px", left: "auto" }
                      : { left: "-6.5px" }
                  }
                />
                <div className="card-lux p-6 transition-colors">
                  <span className="eyebrow">{step.year} · {step.stage}</span>
                  <h3 className="font-display text-lg text-ivory mt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm mt-1">{step.place}</p>
                  <p className="text-muted/80 text-sm mt-3 leading-relaxed">
                    {step.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-24">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card-lux p-6 h-full">
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <h4 className="font-display text-ivory mt-3">{s.title}</h4>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
