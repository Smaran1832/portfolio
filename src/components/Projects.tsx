"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Work
          </p>
          <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight tracking-tight text-fg mb-3">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group block p-6 bg-bg border border-rule hover:border-fg transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl font-bold text-rule group-hover:text-accent transition-colors duration-300 leading-none">
                  {project.id}
                </span>
                <span className="text-[10px] text-muted tracking-[0.15em] uppercase mt-2">
                  {project.category}
                </span>
              </div>

              {/* Image placeholder — replace with <Image> when you have screenshots */}
              <div className="aspect-video overflow-hidden mb-6 bg-rule/20 border border-rule">
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 bg-rule/10" />
              </div>

              <h3 className="font-serif text-xl font-bold mb-2 leading-snug text-fg">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 border border-rule text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-fg group-hover:text-accent transition-colors duration-300">
                View Project
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
