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
      className="relative w-[4.5rem] h-9 rounded-full overflow-hidden flex-shrink-0 focus:outline-none"
      style={{
        boxShadow: isDark
          ? "0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 2px 12px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* ── Day scene ── */}
      <motion.div
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #F9C740 0%, #F0A500 100%)" }}
      >
        <svg
          viewBox="0 0 72 36"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Sun glow */}
          <circle cx="18" cy="22" r="14" fill="#FFE566" opacity="0.55" />
          <circle cx="18" cy="22" r="9"  fill="#FFF5A0" opacity="0.8" />
          {/* Desert mountains — back layer */}
          <polygon points="0,36 18,14 36,36"  fill="#E8960A" />
          <polygon points="22,36 42,10 62,36" fill="#D4820A" />
          {/* Desert mountains — front layer */}
          <polygon points="10,36 26,20 42,36" fill="#C07008" />
          <polygon points="36,36 52,18 68,36" fill="#B56806" />
          {/* Ground fill */}
          <rect x="0" y="30" width="72" height="6" fill="#B56806" />
        </svg>
      </motion.div>

      {/* ── Night scene ── */}
      <motion.div
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #1C2E52 0%, #0D1B35 100%)" }}
      >
        <svg
          viewBox="0 0 72 36"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Stars */}
          <circle cx="40" cy="5"  r="0.9" fill="white" opacity="0.9" />
          <circle cx="48" cy="11" r="0.7" fill="white" opacity="0.7" />
          <circle cx="56" cy="5"  r="0.9" fill="white" opacity="0.85" />
          <circle cx="63" cy="9"  r="0.6" fill="white" opacity="0.9" />
          <circle cx="44" cy="15" r="0.5" fill="white" opacity="0.6" />
          <circle cx="60" cy="14" r="0.7" fill="white" opacity="0.7" />
          <circle cx="52" cy="2"  r="0.6" fill="white" opacity="0.75" />
          {/* Crescent moon */}
          <circle cx="55" cy="10" r="5.5" fill="#DDE6F5" />
          <circle cx="57.5" cy="8" r="4.3" fill="#1C2E52" />
          {/* Mountains — back */}
          <polygon points="28,36 44,16 60,36" fill="#243357" />
          <polygon points="40,36 58,12 72,36" fill="#1E2C4A" />
          {/* Mountains — front */}
          <polygon points="16,36 30,20 44,36" fill="#1A2744" />
          <polygon points="0,36 14,22 28,36"  fill="#16213C" />
          {/* Ground fill */}
          <rect x="0" y="30" width="72" height="6" fill="#16213C" />
        </svg>
      </motion.div>

      {/* ── Sliding circle ── */}
      <motion.div
        animate={{ x: isDark ? 4 : 36 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        className="absolute top-[4px] w-7 h-7 rounded-full bg-white"
        style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.28)" }}
      />
    </button>
  );
}
