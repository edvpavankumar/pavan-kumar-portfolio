"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Clock, Mail } from "lucide-react";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <section id="blog" className="relative py-28 md:py-36 bg-[#080808]">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the build."
          description="Long-form posts are on the way — here's what's queued up."
        />

        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((c) => (
            <span
              key={c}
              className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-lineGold/40 text-gold"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="card-lux p-6 h-full flex flex-col">
                <span className="eyebrow">{post.category}</span>
                <h3 className="font-display text-lg text-ivory mt-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6 text-[11px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card-lux p-8 md:p-10 mt-14 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="font-display text-xl text-ivory">
                Get new posts first
              </h3>
              <p className="text-muted text-sm mt-2 max-w-sm">
                No spam — just a note whenever a new write-up goes live.
              </p>
            </div>
            {subscribed ? (
              <p className="text-gold text-sm font-mono">
                Subscribed — thank you.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
                className="flex w-full md:w-auto gap-3"
              >
                <div className="relative flex-1">
                  <Mail
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="bg-card border border-line rounded-full pl-9 pr-4 py-3 text-sm text-ivory placeholder:text-muted focus:border-gold/60 outline-none w-full md:w-64"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold-gradient text-[#050505] px-5 rounded-full text-sm font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
