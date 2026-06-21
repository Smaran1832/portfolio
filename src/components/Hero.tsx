"use client";

import { motion } from "framer-motion";

const NAME_WORDS = ["Smaran", "Das"];
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/J_wave.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: "var(--wave-opacity)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 w-full relative">
        <motion.p
          {...fadeUp(0.1)}
          className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-5"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-end gap-x-5 gap-y-0 mb-8"
        >
          {NAME_WORDS.map((word) => (
            <span
              key={word}
              style={{ overflow: "hidden", display: "inline-block", lineHeight: 1.05 }}
            >
              <motion.span
                variants={wordVariants}
                style={{ display: "inline-block" }}
                className="font-serif font-bold text-[clamp(72px,11vw,144px)] leading-none tracking-tight text-fg"
              >
                {word}
              </motion.span>
            </span>
          ))}

          <span style={{ overflow: "hidden", display: "inline-block", lineHeight: 1.05 }}>
            <motion.span
              variants={wordVariants}
              style={{ display: "inline-block" }}
              className="font-serif font-bold text-[clamp(72px,11vw,144px)] leading-none text-accent"
            >
              .
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.75)}
          className="text-lg text-muted max-w-lg leading-relaxed font-light mb-10"
        >
          A software engineer specializing in full-stack development and AI/ML,
          <em className="text-fg not-italic font-normal"> building things that matter</em>.
        </motion.p>

        <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-fg text-bg text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-rule text-fg text-sm font-medium tracking-wide hover:border-fg transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-muted tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-rule"
        />
      </motion.div>
    </section>
  );
}
