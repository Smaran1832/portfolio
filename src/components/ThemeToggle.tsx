"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{ background: "var(--border)" }}
      className="relative w-11 h-6 rounded-full flex-shrink-0 transition-colors duration-300"
    >
      <motion.div
        animate={{ x: isDark ? 22 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-5 h-5 rounded-full"
        style={{ background: isDark ? "var(--accent)" : "var(--fg)" }}
      />
    </button>
  );
}
