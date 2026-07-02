"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Search } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

function ProjectArt({ seed }: { seed: string }) {
  // Elegant abstract placeholder — deterministic gradient per project.
  const hash = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = (hash * 7) % 40; // stays within gold/amber family
  return (
    <div
      className="h-40 rounded-xl relative overflow-hidden border border-line"
      style={{
        background: `linear-gradient(135deg, hsla(${hue + 30}, 60%, 12%, 1), #0a0a0a 60%)`,
      }}
    >
      <div
        className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl opacity-40"
        style={{ background: "#C9A227" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-4xl text-gold/25">
          {seed
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="card-lux max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 text-muted hover:text-gold"
        >
          <X size={20} />
        </button>

        <span className="eyebrow">{project.status} · Case Study</span>
        <h3 className="font-display text-2xl md:text-3xl text-ivory mt-3">
          {project.name}
        </h3>
        <p className="text-muted mt-3 text-sm leading-relaxed">
          {project.tagline}
        </p>

        <div className="divider-gold my-6" />

        <div className="space-y-5 text-sm">
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">OVERVIEW</h4>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">PROBLEM</h4>
            <p className="text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">SOLUTION</h4>
            <p className="text-muted leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">ARCHITECTURE</h4>
            <p className="text-muted leading-relaxed">{project.architecture}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">FEATURES</h4>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-muted leading-relaxed pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-gold/60">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">CHALLENGES</h4>
            <p className="text-muted leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">FUTURE IMPROVEMENTS</h4>
            <p className="text-muted leading-relaxed">{project.future}</p>
          </div>
          <div>
            <h4 className="text-gold font-mono text-xs mb-1.5">KEY LEARNINGS</h4>
            <p className="text-muted leading-relaxed">{project.keyLearnings}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-3 py-1 rounded-full border border-line text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-7">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs border border-lineGold px-4 py-2.5 rounded-full text-ivory hover:bg-gold/10"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs bg-gold-gradient text-[#050505] px-4 py-2.5 rounded-full"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs border border-line text-muted px-4 py-2.5 rounded-full">
              Coming Soon
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Completed" | "In Progress">("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.status === filter;
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.stack.join(" ").toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#080808]">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects, real and in progress."
          description="Two shipped builds from coursework and internship-adjacent problem solving, plus concept explorations I'm scoping next."
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {(["All", "Completed", "In Progress"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-gold-gradient text-[#050505] border-transparent"
                    : "border-line text-muted hover:text-ivory"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="bg-card border border-line rounded-full pl-9 pr-4 py-2 text-xs text-ivory placeholder:text-muted focus:border-gold/60 outline-none w-full sm:w-64"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <TiltCard className="card-lux p-6 h-full flex flex-col">
                <ProjectArt seed={p.name} />
                <div className="flex items-start justify-between mt-5 gap-3">
                  <h3 className="font-display text-lg text-ivory">{p.name}</h3>
                  <span
                    className={`shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                      p.status === "Completed"
                        ? "border-gold/50 text-gold"
                        : "border-line text-muted"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
                  {p.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-line text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <button
                    onClick={() => setActive(p)}
                    className="text-xs text-gold hover:underline underline-offset-4"
                  >
                    Case Study →
                  </button>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-gold"
                      aria-label={`${p.name} GitHub`}
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted text-sm col-span-2 text-center py-10">
              No projects match that search.
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
