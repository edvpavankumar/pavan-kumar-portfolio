"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#coding", label: "Coding" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-lux flex items-center justify-between h-16 md:h-20 gap-4">
        <a href="#top" className="group shrink-0 leading-none">
          <span className="block font-display font-bold text-[13px] md:text-base tracking-wide text-ivory whitespace-nowrap">
            EDE DINESH VENKATA
          </span>
          <span className="block font-display font-bold text-[13px] md:text-base tracking-wide gold-text whitespace-nowrap -mt-0.5">
            PAVAN KUMAR
          </span>
          <span className="hidden sm:block font-mono text-[9px] tracking-widest2 text-muted mt-1 group-hover:text-gold transition-colors">
            AI &middot; SOFTWARE DEVELOPER
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 shrink-0">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors pb-1 ${
                  active === l.href ? "text-gold" : "text-muted hover:text-ivory"
                }`}
              >
                {l.label}
              </a>
              {active === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-px bg-gold-gradient"
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>

        <a
          href={personal.resumeFile}
          download
          className="hidden lg:inline-flex items-center gap-2 text-[13px] border border-lineGold px-4 py-2 rounded-full text-ivory hover:bg-gold/10 transition-colors shrink-0"
        >
          <Download size={14} className="text-gold" />
          Resume
        </a>

        <button
          className="lg:hidden text-ivory shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass"
          >
            <ul className="container-lux flex flex-col py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm text-muted hover:text-gold border-b border-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={personal.resumeFile}
                  download
                  className="inline-flex items-center gap-2 text-sm text-gold"
                >
                  <Download size={14} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
