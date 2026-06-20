"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...reveal(0)}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-4">
            About
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight tracking-tight text-fg mb-3">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            {...reveal(0.15)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m a{" "}
              <span className="text-fg font-medium">software engineer</span> based in
              Dublin, Ireland, with an MSc in Computer Science (First Class Honours) from
              Trinity College Dublin. I specialize in full-stack development and AI/ML,
              building systems that are both technically rigorous and user-focused.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My experience spans AI/ML engineering, spatial computing, and web development
              across Ireland, the United States, and India — from deploying predictive
              models on cloud platforms to delivering immersive VR applications.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I&apos;ve also co-authored two{" "}
              <span className="text-fg font-medium">peer-reviewed publications</span>{" "}
              on cryptocurrency price prediction using machine learning, exploring the
              intersection of data science and financial markets.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.25)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          >
            <p className="text-xs text-muted tracking-[0.2em] uppercase font-medium mb-6">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.04 }}
                  className="px-4 py-2 bg-card border border-rule text-fg text-sm font-medium cursor-default hover:bg-fg hover:text-bg hover:border-fg transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
