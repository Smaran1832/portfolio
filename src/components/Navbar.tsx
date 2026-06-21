"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);

  return (
    <motion.nav
      ref={menuRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-[background-color,border-color] duration-500 ${
        scrolled || menuOpen ? "bg-bg/90 border-rule" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/Smaran_Das_Logo.svg"
            alt="Smaran Das"
            width={72}
            height={72}
            className="object-contain"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-muted hover:text-fg transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-fg origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-fg"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-px bg-fg origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-rule"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm text-muted hover:text-fg border-b border-rule last:border-0 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
