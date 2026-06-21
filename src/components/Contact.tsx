"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Smaran1832",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/smarandas1832",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xgojwnnl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-6"
        >
          Contact
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left: info ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="font-serif font-bold leading-tight tracking-tight text-fg text-[clamp(40px,6vw,88px)] mb-10"
            >
              Let&apos;s 
              <br />
              Connect<span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="text-lg text-muted leading-relaxed mb-10"
            >
              Feel free to send me a message.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="flex gap-8"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors duration-200 group relative"
                >
                  {s.icon}
                  {s.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted tracking-[0.15em] uppercase font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-bg border border-rule text-fg placeholder:text-muted/50 text-sm px-4 py-3 outline-none focus:border-fg transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted tracking-[0.15em] uppercase font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="bg-bg border border-rule text-fg placeholder:text-muted/50 text-sm px-4 py-3 outline-none focus:border-fg transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted tracking-[0.15em] uppercase font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about how can I be of assistance..."
                className="bg-bg border border-rule text-fg placeholder:text-muted/50 text-sm px-4 py-3 outline-none focus:border-fg transition-colors duration-200 resize-none"
              />
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-7 py-3.5 bg-fg text-bg text-sm font-medium tracking-wide hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {status === "loading"
                  ? "Sending…"
                  : status === "success"
                  ? "Sent!"
                  : "Send Message"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-muted"
                >
                  Thanks — I&apos;ll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-accent"
                >
                  Something went wrong. Try emailing me directly.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>

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
