"use client";

import { ArrowUp, Github, Linkedin, Download } from "lucide-react";
import { personal } from "@/lib/data";

const builtWith = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

const links = [
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Download, href: personal.resumeFile, label: "Resume", download: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="eyebrow">Designed &amp; Developed by</p>
            <p className="font-display font-bold text-ivory mt-2 tracking-wide">
              EDE DINESH VENKATA PAVAN KUMAR
            </p>
          </div>

          <div className="flex items-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={l.download}
                aria-label={l.label}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-gold hover:border-lineGold/60 transition-colors"
              >
                <l.icon size={15} />
              </a>
            ))}
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs text-muted hover:text-gold border border-line hover:border-lineGold/60 rounded-full px-4 py-2 transition-colors"
          >
            <ArrowUp size={13} /> Back to top
          </a>
        </div>

        <div className="divider-gold my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[11px]">
            Built using{" "}
            {builtWith.map((t, i) => (
              <span key={t}>
                <span className="text-gold/80">{t}</span>
                {i < builtWith.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <p className="text-muted text-[11px]">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
