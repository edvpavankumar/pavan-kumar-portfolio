"use client";

import { Github, ExternalLink, Code2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const profiles = [
  {
    icon: Github,
    name: "GitHub",
    username: "@edvpavankumar",
    description: "Explore my repositories and software projects.",
    href: personal.github,
  },
  {
    icon: Code2,
    name: "LeetCode",
    username: "@pavanede",
    description: "Practicing Java, Data Structures & Algorithms.",
    href: personal.leetcode,
  },
  {
    icon: Star,
    name: "HackerRank",
    username: "@edvpavankumar",
    description: "Java 4★ • Silver Badge",
    href: personal.hackerrank,
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative py-28 md:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Where the practice happens."
          description="Live profiles — visit each one directly for up-to-date activity."
        />

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {profiles.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass rounded-2xl p-7 h-full flex flex-col"
              >
                <span className="w-12 h-12 rounded-full bg-gold/10 border border-lineGold flex items-center justify-center">
                  <p.icon size={20} className="text-gold" />
                </span>
                <h3 className="font-display text-ivory mt-5">{p.name}</h3>
                <p className="font-mono text-[13px] text-muted mt-1">{p.username}</p>

                <p className="text-muted text-sm mt-5 leading-relaxed flex-1">
                  {p.description}
                </p>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gold hover:underline underline-offset-4 mt-6"
                >
                  View Profile <ExternalLink size={12} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
