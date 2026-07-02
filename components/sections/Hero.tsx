"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, User } from "lucide-react";
import { personal } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

function useTypewriter(words: string[], typeSpeed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? typeSpeed / 2 : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, pause]);

  return text;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const count = Math.min(60, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.5 + 0.15,
    }));

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${p.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el!.style.setProperty("--spot-x", `${x}%`);
      el!.style.setProperty("--spot-y", `${y}%`);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}

const orbitTech = ["Java", "Python", "Flask", "MySQL", "Git", "DSA"];

export default function Hero() {
  const typed = useTypewriter(personal.rotatingTitles);
  const spotlightRef = useSpotlight();

  return (
    <section
      id="top"
      ref={spotlightRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(201,162,39,0.07), transparent 60%)",
      }}
    >
      <ParticleField />

      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div
        className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "#C9A227" }}
      />

      <div className="absolute inset-0 hidden md:block pointer-events-none">
        {orbitTech.map((t, i) => (
          <motion.span
            key={t}
            className="absolute font-mono text-[11px] tracking-widest text-gold/50 border border-lineGold/40 rounded-full px-3 py-1 animate-float"
            style={{
              top: `${14 + i * 13}%`,
              left: i % 2 === 0 ? "6%" : "88%",
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="container-lux relative z-10 grid lg:grid-cols-[1.3fr_auto] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Hello, I&apos;m {personal.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading text-[11.5vw] leading-[1] md:text-[4.6rem] md:leading-[1.03] mt-6 text-ivory text-balance"
          >
            <span className="gold-text">{personal.heroHeadline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted max-w-xl mt-6 text-[15px] md:text-base leading-relaxed"
          >
            {personal.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 h-7 flex items-center"
          >
            <span className="font-mono text-gold text-sm md:text-base tracking-wide">
              {typed}
              <span className="inline-block w-[2px] h-[1em] bg-gold ml-0.5 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center gap-2 mt-6 text-muted text-sm"
          >
            <MapPin size={14} className="text-gold" />
            {personal.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <MagneticButton href="#projects" variant="solid">
              View Projects
            </MagneticButton>
            <MagneticButton href={personal.resumeFile} variant="outline">
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Contact Me
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Hire Me →
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-56 h-56 xl:w-64 xl:h-64">
            <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-2xl animate-float" />
            <div className="relative w-full h-full rounded-full glass border-2 border-lineGold flex items-center justify-center overflow-hidden">
              <User size={64} className="text-gold/40" strokeWidth={1} />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest2 text-muted uppercase whitespace-nowrap">
              Photo coming soon
            </span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-gold"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
