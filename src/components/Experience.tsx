"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Background
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight tracking-tight text-fg mb-3">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="relative pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 top-1.5 bottom-1.5 w-px bg-rule"
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="absolute -left-[2.125rem] top-1 w-3 h-3 rounded-full bg-bg border-2 border-accent"
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold leading-snug text-fg">
                      {exp.company}
                    </h3>
                    <p className="text-muted text-sm font-medium mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-xs font-medium text-accent tracking-wide whitespace-nowrap mt-0.5">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted leading-relaxed text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
