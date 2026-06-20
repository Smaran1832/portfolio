"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/Smaran1832" },
  { label: "LinkedIn", href: "https://linkedin.com/in/smarandas1832" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold leading-tight tracking-tight text-fg text-[clamp(44px,7vw,100px)] mb-12"
        >
          Let&apos;s work
          <br />
          together<span className="text-accent">.</span>
        </motion.h2>

        <motion.a
          href="mailto:dassm@tcd.ie"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-2xl sm:text-3xl font-medium text-fg border-b-2 border-rule hover:border-accent pb-1 transition-colors duration-300 mb-16"
        >
          dassm@tcd.ie
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm text-muted hover:text-fg transition-colors duration-200 group"
            >
              {s.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        <div className="mt-24 pt-8 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-muted">
            © {new Date().getFullYear()} Smaran Das. All rights reserved.
          </span>
          <span className="text-xs text-muted">Designed &amp; built with care.</span>
        </div>
      </div>
    </section>
  );
}
