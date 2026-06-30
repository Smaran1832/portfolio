"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

/* ── Per-project illustrated placeholders ── */
function CityVisual() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="city-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F2D3D" />
          <stop offset="100%" stopColor="#071A28" />
        </linearGradient>
        <linearGradient id="city-glow" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#00C2A8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00C2A8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#city-bg)" />
      {/* Grid lines */}
      {[40, 80, 120, 160, 200].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#00C2A8" strokeOpacity="0.08" strokeWidth="1" />
      ))}
      {[50, 100, 150, 200, 250, 300, 350].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="225" stroke="#00C2A8" strokeOpacity="0.08" strokeWidth="1" />
      ))}
      {/* City skyline */}
      <rect x="30"  y="130" width="28" height="95"  fill="#1A4A5E" />
      <rect x="36"  y="118" width="16" height="12"  fill="#1A4A5E" />
      <rect x="70"  y="100" width="40" height="125" fill="#155068" />
      <rect x="78"  y="88"  width="24" height="12"  fill="#155068" />
      <rect x="122" y="140" width="22" height="85"  fill="#1A4A5E" />
      <rect x="156" y="110" width="50" height="115" fill="#0E3D52" />
      <rect x="164" y="96"  width="34" height="14"  fill="#0E3D52" />
      <rect x="218" y="125" width="30" height="100" fill="#1A4A5E" />
      <rect x="260" y="90"  width="45" height="135" fill="#155068" />
      <rect x="268" y="78"  width="29" height="12"  fill="#155068" />
      <rect x="316" y="135" width="25" height="90"  fill="#1A4A5E" />
      <rect x="352" y="105" width="35" height="120" fill="#0E3D52" />
      {/* Windows */}
      {[[76,105],[84,105],[76,120],[84,120],[76,135],[84,135],[162,114],[170,114],[162,130],[170,130],[264,96],[272,96],[264,112],[272,112]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="6" height="5" fill="#00C2A8" opacity="0.6" rx="0.5" />
      ))}
      {/* Glow overlay */}
      <rect width="400" height="225" fill="url(#city-glow)" />
      {/* Chart bars at bottom */}
      {[
        { x: 30,  h: 30, o: 0.5 },
        { x: 60,  h: 50, o: 0.7 },
        { x: 90,  h: 40, o: 0.5 },
        { x: 120, h: 65, o: 0.9 },
        { x: 150, h: 45, o: 0.6 },
        { x: 180, h: 55, o: 0.75 },
        { x: 210, h: 35, o: 0.5 },
        { x: 240, h: 70, o: 0.9 },
        { x: 270, h: 48, o: 0.65 },
        { x: 300, h: 58, o: 0.8 },
        { x: 330, h: 42, o: 0.6 },
        { x: 360, h: 62, o: 0.85 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={225 - b.h} width="20" height={b.h} fill="#00C2A8" opacity={b.o * 0.35} />
      ))}
      {/* Accent line */}
      <polyline
        points="30,185 60,165 90,175 120,150 150,160 180,145 210,170 240,140 270,155 300,143 330,158 370,138"
        fill="none" stroke="#00C2A8" strokeWidth="1.5" strokeOpacity="0.7"
      />
      <circle cx="240" cy="140" r="3" fill="#00C2A8" opacity="0.9" />
    </svg>
  );
}

function CaptchaVisual() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cap-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A0A2E" />
          <stop offset="100%" stopColor="#0D0518" />
        </linearGradient>
        <radialGradient id="cap-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="225" fill="url(#cap-bg)" />
      <rect width="400" height="225" fill="url(#cap-glow)" />
      {/* Neural network nodes */}
      {[
        // Input layer
        { cx: 70,  cy: 60  }, { cx: 70,  cy: 113 }, { cx: 70,  cy: 165 },
        // Hidden layer 1
        { cx: 160, cy: 40  }, { cx: 160, cy: 85  }, { cx: 160, cy: 130 }, { cx: 160, cy: 175 },
        // Hidden layer 2
        { cx: 250, cy: 55  }, { cx: 250, cy: 100 }, { cx: 250, cy: 145 }, { cx: 250, cy: 190 },
        // Output layer
        { cx: 340, cy: 80  }, { cx: 340, cy: 145 },
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="8" fill="#1A0A2E" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.8" />
      ))}
      {/* Connections — input to hidden1 */}
      {[[70,60,160,40],[70,60,160,85],[70,60,160,130],[70,113,160,85],[70,113,160,130],[70,113,160,175],[70,165,160,130],[70,165,160,175]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7C3AED" strokeOpacity="0.2" strokeWidth="1" />
      ))}
      {/* Connections — hidden1 to hidden2 */}
      {[[160,40,250,55],[160,40,250,100],[160,85,250,55],[160,85,250,100],[160,85,250,145],[160,130,250,100],[160,130,250,145],[160,130,250,190],[160,175,250,145],[160,175,250,190]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A855F7" strokeOpacity="0.2" strokeWidth="1" />
      ))}
      {/* Connections — hidden2 to output */}
      {[[250,55,340,80],[250,100,340,80],[250,100,340,145],[250,145,340,80],[250,145,340,145],[250,190,340,145]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C084FC" strokeOpacity="0.3" strokeWidth="1" />
      ))}
      {/* Active path highlight */}
      <line x1="70" y1="113" x2="160" y2="85"  stroke="#A855F7" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="160" y1="85"  x2="250" y2="100" stroke="#A855F7" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="250" y1="100" x2="340" y2="80"  stroke="#C084FC" strokeOpacity="0.9" strokeWidth="1.5" />
      <circle cx="70"  cy="113" r="8" fill="#3B0764" stroke="#A855F7" strokeWidth="2" />
      <circle cx="160" cy="85"  r="8" fill="#3B0764" stroke="#A855F7" strokeWidth="2" />
      <circle cx="250" cy="100" r="8" fill="#3B0764" stroke="#C084FC" strokeWidth="2" />
      <circle cx="340" cy="80"  r="8" fill="#4C1D95" stroke="#C084FC" strokeWidth="2.5" />
      {/* Accuracy badge */}
      <rect x="290" y="170" width="88" height="32" rx="4" fill="#2D1B69" opacity="0.9" />
      <text x="334" y="191" textAnchor="middle" fill="#C084FC" fontSize="13" fontFamily="monospace" fontWeight="bold">90% acc</text>
    </svg>
  );
}

function VRVisual() {
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="vr-bg" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1C0A3A" />
          <stop offset="100%" stopColor="#0A0518" />
        </linearGradient>
        <radialGradient id="vr-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="100%" stopColor="#C4A45E" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="vr-torchL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vr-torchR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="225" fill="url(#vr-bg)" />
      {/* Stars */}
      {[[30,20],[80,15],[130,30],[200,10],[260,25],[310,12],[370,22],[50,50],[170,45],[330,40],[90,70],[280,60],[350,55],[20,80],[150,75]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.2 : 0.7} fill="white" opacity={0.4 + (i % 4) * 0.15} />
      ))}
      {/* Moon */}
      <circle cx="330" cy="42" r="22" fill="url(#vr-moon)" opacity="0.85" />
      <circle cx="340" cy="36" r="17" fill="#1C0A3A" />
      {/* Distant mountains */}
      <polygon points="0,160 60,90 120,160"   fill="#2A1250" />
      <polygon points="80,160 160,75 240,160"  fill="#231048" />
      <polygon points="200,160 290,80 380,160" fill="#1E0D40" />
      <polygon points="300,160 370,95 400,160" fill="#2A1250" />
      {/* Castle wall base */}
      <rect x="80" y="150" width="240" height="75" fill="#1A0A32" />
      {/* Main tower */}
      <rect x="170" y="80" width="60" height="145" fill="#230E42" />
      {/* Tower battlements */}
      {[170,182,194,206,218].map((x,i) => (
        <rect key={i} x={x} y="70" width="8" height="12" fill="#230E42" />
      ))}
      {/* Left turret */}
      <rect x="105" y="110" width="38" height="115" fill="#1E0C3A" />
      {[105,115,125,135].map((x,i) => (
        <rect key={i} x={x} y="102" width="7" height="10" fill="#1E0C3A" />
      ))}
      {/* Right turret */}
      <rect x="257" y="110" width="38" height="115" fill="#1E0C3A" />
      {[257,267,277,287].map((x,i) => (
        <rect key={i} x={x} y="102" width="7" height="10" fill="#1E0C3A" />
      ))}
      {/* Gate arch */}
      <path d="M185,225 L185,170 Q200,155 215,170 L215,225 Z" fill="#0A0518" />
      {/* Main tower window (pointed arch) */}
      <path d="M191,120 L191,100 Q200,90 209,100 L209,120 Z" fill="#C4A45E" opacity="0.5" />
      {/* Torch glows */}
      <ellipse cx="140" cy="128" rx="18" ry="18" fill="url(#vr-torchL)" />
      <ellipse cx="260" cy="128" rx="18" ry="18" fill="url(#vr-torchR)" />
      <circle cx="140" cy="128" r="3" fill="#FF9933" opacity="0.9" />
      <circle cx="260" cy="128" r="3" fill="#FF9933" opacity="0.9" />
      {/* Ground fog */}
      <rect x="0" y="205" width="400" height="20" fill="#1C0A3A" opacity="0.6" />
    </svg>
  );
}

const VISUALS: Record<string, React.ReactNode> = {
  "01": <CityVisual />,
  "02": <CaptchaVisual />,
  "03": <VRVisual />,
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group flex flex-col p-6 bg-bg border border-rule hover:border-fg transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-5xl font-bold text-rule group-hover:text-accent transition-colors duration-300 leading-none">
                  {project.id}
                </span>
                <span className="text-[10px] text-muted tracking-[0.15em] uppercase mt-2">
                  {project.category}
                </span>
              </div>

              {/* Illustrated visual */}
              <div className="aspect-video overflow-hidden mb-6 border border-rule">
                {VISUALS[project.id]}
              </div>

              <h3 className="font-serif text-xl font-bold mb-2 leading-snug text-fg">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

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

              <div className="flex items-center justify-between pt-4 border-t border-rule">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-muted group-hover:text-accent text-lg leading-none">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
