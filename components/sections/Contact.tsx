"use client";

import { useState } from "react";
import { Github, Linkedin, Code2, Star, Mail, Copy, Check, MapPin } from "lucide-react";
import { personal } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

const socials = [
  { icon: Github, label: "GitHub", href: personal.github },
  { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  { icon: Code2, label: "LeetCode", href: personal.leetcode },
  { icon: Star, label: "HackerRank", href: personal.hackerrank },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Amazing Together"
          description="Open to internships, entry-level roles, and collaborative projects."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 mt-14">
          <Reveal>
            <div className="card-lux glass p-8 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span className="font-mono text-sm text-ivory">
                  {personal.email}
                </span>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="text-muted hover:text-gold ml-auto"
                >
                  {copied ? <Check size={16} className="text-gold" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <MapPin size={18} className="text-gold" />
                <span className="text-muted text-sm">{personal.location}</span>
              </div>

              <div className="divider-gold my-7" />

              <p className="eyebrow mb-4">Elsewhere</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 border border-line rounded-lg px-4 py-3 text-sm text-muted hover:text-gold hover:border-lineGold/60 transition-colors"
                  >
                    <s.icon size={15} />
                    {s.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <MagneticButton href={personal.resumeFile} variant="outline" className="w-full">
                  Download Resume
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-lux glass p-8 flex flex-col gap-5">
              <div>
                <label className="text-xs text-muted font-mono">NAME</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory text-sm mt-1"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted font-mono">EMAIL</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory text-sm mt-1"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted font-mono">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory text-sm mt-1 resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <MagneticButton as="button" type="submit" variant="solid" className="mt-2 self-start">
                {sent ? "Opening your mail app..." : "Send Message"}
              </MagneticButton>
              <p className="text-[11px] text-muted -mt-2">
                This opens your email client with the message pre-filled — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
