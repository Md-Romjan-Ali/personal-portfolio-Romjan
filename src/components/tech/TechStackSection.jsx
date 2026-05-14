"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const JSIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 3h18v18H3V3zm16.525 15.623c-.115-.372-.346-.577-.812-.686-.188-.046-.403-.046-.531 0-.308.109-.434.332-.416.686.035.48.337.669.833.686.435.014.868-.137.926-.686zm-1.897-4.108c-.018-.754.498-1.121 1.054-1.121.751 0 1.066.522 1.066 1.054v4.549h-2.12v-4.482zm-8.868 3.518c.036.577.443.833 1.054.833.565 0 .902-.248.902-.686 0-.38-.266-.549-.814-.686l-.796-.195c-1.026-.248-1.558-.814-1.558-1.77 0-1.15 1.009-1.877 2.408-1.877 1.487 0 2.372.726 2.372 1.947h-2.018c-.018-.549-.336-.779-.885-.779-.442 0-.743.195-.743.513 0 .319.23.478.726.584l.796.195c1.15.283 1.682.814 1.682 1.77 0 1.346-1.08 2.018-2.673 2.018-1.735 0-2.523-.744-2.452-2.142h2z" />
  </svg>
);

const ReactIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NextIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.499-.054z" />
  </svg>
);

const NodeIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.937-1.737c-.439-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.036.151-.023.218.017l2.256 1.339c.082.047.198.047.274 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242L11.13 1.608c-.081-.047-.196-.047-.274 0L2.062 6.68c-.086.05-.140.145-.140.243v10.148c0 .097.054.190.137.236l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.254.256-.254h1.115c.139 0 .255.112.255.254v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.28 18.467A1.856 1.856 0 0 1 .36 16.85V6.699c0-.666.354-1.284.927-1.617L9.075.006c.558-.329 1.297-.329 1.853 0l8.787 5.076c.573.333.929.951.929 1.617v10.148c0 .668-.356 1.283-.929 1.617l-8.795 5.079C12.638 23.916 12.319 24 11.998 24zm2.719-6.986c-3.849 0-4.654-1.768-4.654-3.251 0-.142.115-.254.256-.254h1.138c.127 0 .233.091.251.217.171 1.156.682 1.737 3.013 1.737 1.852 0 2.641-.42 2.641-1.404 0-.567-.224-.989-3.109-1.272-2.415-.24-3.907-.77-3.907-2.694 0-1.775 1.496-2.834 4.002-2.834 2.814 0 4.208.977 4.383 3.079.006.071-.019.140-.068.190a.252.252 0 0 1-.184.081h-1.143a.256.256 0 0 1-.247-.193c-.274-1.218-.942-1.608-2.741-1.608-2.018 0-2.252.703-2.252 1.228 0 .637.277.823 3.013 1.183 2.707.356 3.995.86 3.995 2.771-.006 1.922-1.600 3.024-4.386 3.024z" />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.284l-.145-.871v-.53zm1.132-.228h9.542c-.05-3.747-2.508-5.851-5.183-5.851A5.35 5.35 0 0 0 1.134 11.348z" />
  </svg>
);

const MongoIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.154-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

const GitIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
  </svg>
);

const VercelIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

const RestIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DOMIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Cards Data ───────────────────────────────────────────────────────────────
const techCards = [
  {
    id: 1, title: "JavaScript", subtitle: "ES6+ Modern Syntax",
    tag: "Language", color: "#F7DF1E",
    glow: "rgba(247,223,30,0.15)", border: "rgba(247,223,30,0.25)",
    icon: <JSIcon />,
  },
  {
    id: 2, title: "DOM & APIs", subtitle: "DOM Manipulation / Fetch API",
    tag: "Browser", color: "#F7DF1E",
    glow: "rgba(247,223,30,0.10)", border: "rgba(247,223,30,0.18)",
    icon: <DOMIcon />,
  },
  {
    id: 3, title: "React", subtitle: "Component Architecture & Hooks",
    tag: "Frontend", color: "#61DAFB",
    glow: "rgba(97,218,251,0.15)", border: "rgba(97,218,251,0.25)",
    icon: <ReactIcon />,
  },
  {
    id: 4, title: "Next.js", subtitle: "SSR / SSG / App Router",
    tag: "Framework", color: "#ffffff",
    glow: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.14)",
    icon: <NextIcon />,
  },
  {
    id: 5, title: "Node.js", subtitle: "Runtime & Backend Logic",
    tag: "Backend", color: "#68A063",
    glow: "rgba(104,160,99,0.15)", border: "rgba(104,160,99,0.25)",
    icon: <NodeIcon />,
  },
  {
    id: 6, title: "Express", subtitle: "RESTful API Development",
    tag: "Backend", color: "#68A063",
    glow: "rgba(104,160,99,0.10)", border: "rgba(104,160,99,0.18)",
    icon: <ExpressIcon />,
  },
  {
    id: 7, title: "MongoDB", subtitle: "NoSQL Database Design",
    tag: "Database", color: "#47A248",
    glow: "rgba(71,162,72,0.15)", border: "rgba(71,162,72,0.25)",
    icon: <MongoIcon />,
  },
  {
    id: 8, title: "REST APIs", subtitle: "API Design & Integration",
    tag: "Architecture", color: "#FF6B6B",
    glow: "rgba(255,107,107,0.15)", border: "rgba(255,107,107,0.25)",
    icon: <RestIcon />,
  },
  {
    id: 9, title: "Git", subtitle: "Version Control & Workflow",
    tag: "DevOps", color: "#F05032",
    glow: "rgba(240,80,50,0.15)", border: "rgba(240,80,50,0.25)",
    icon: <GitIcon />,
  },
  {
    id: 10, title: "Vercel / Netlify", subtitle: "Deployment & CI/CD",
    tag: "DevOps", color: "#A78BFA",
    glow: "rgba(167,139,250,0.15)", border: "rgba(167,139,250,0.25)",
    icon: <VercelIcon />,
  },
];

// ─── TechCard ─────────────────────────────────────────────────────────────────
function TechCard({ card, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  // GSAP 3D tilt
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      gsap.to(el, { rotateX: -dy * 14, rotateY: dx * 14, duration: 0.3, ease: "power2.out", transformPerspective: 900 });
    };
    const onLeave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 55, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ transformStyle: "preserve-3d", height: "100%" }}
    >
      <div
        className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden cursor-pointer h-full"
        style={{
          background: hovered ? `radial-gradient(circle at 50% 10%, ${card.glow} 0%, #0e0e0e 65%)` : "#0e0e0e",
          border: `1px solid ${hovered ? card.border : "rgba(255,255,255,0.07)"}`,
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
          boxShadow: hovered ? `0 8px 40px ${card.glow}, 0 0 0 1px ${card.border}` : "none",
        }}
      >
        {/* Sweep shimmer */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl z-10"
              initial={{ x: "-120%", skewX: "-15deg" }}
              animate={{ x: "220%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)", width: "60%" }}
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center relative z-10 shrink-0"
          style={{ background: card.glow, color: card.color }}
          animate={hovered ? { scale: 1.15, rotate: [0, -10, 10, -5, 0] } : { scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          {card.icon}
          {/* Pulsing dot */}
          <motion.span
            className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
            style={{ background: card.color }}
            animate={hovered ? { scale: [1, 1.8, 1], opacity: [1, 0.5, 1] } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />
        </motion.div>

        {/* Tag */}
        <motion.span
          className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
          style={{ background: card.glow, color: card.color, border: `1px solid ${card.border}` }}
          animate={hovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {card.tag}
        </motion.span>

        {/* Text */}
        <div className="relative z-10 mt-auto">
          <motion.h3
            className="text-base font-bold text-white mb-1 leading-snug"
            animate={hovered ? { x: 5, color: card.color } : { x: 0, color: "#ffffff" }}
            transition={{ duration: 0.25 }}
          >
            {card.title}
          </motion.h3>
          <p className="text-zinc-500 text-xs font-light leading-snug">{card.subtitle}</p>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{ background: card.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: hovered ? "100%" : "28%" } : { width: 0 }}
          transition={{ duration: hovered ? 0.35 : 0.7, ease: "easeOut", delay: hovered ? 0 : index * 0.07 + 0.4 }}
        />
      </div>
    </motion.div>
  );
}

// ─── Cursor Orb ───────────────────────────────────────────────────────────────
function CursorOrb() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => gsap.to(ref.current, { x: e.clientX - 200, y: e.clientY - 200, duration: 0.9, ease: "power2.out" });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div ref={ref} className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(59,130,246,0.055) 0%, transparent 70%)", filter: "blur(40px)", top: 0, left: 0 }}
    />
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function TechStack() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const countRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Count-up
  useEffect(() => {
    if (!isHeaderInView || !countRef.current) return;
    gsap.fromTo(countRef.current, { innerText: 0 }, {
      innerText: techCards.length, duration: 1.4, delay: 0.9,
      ease: "power2.out", snap: { innerText: 1 },
    });
  }, [isHeaderInView]);

  // Particles
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fp").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 0, opacity: 0.5 },
          { y: -(90 + i * 28), x: Math.sin(i * 1.4) * 45, opacity: 0, duration: 4 + i * 0.4, repeat: -1, ease: "power1.inOut", delay: i * 0.55 }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const particleColors = ["#3b82f6","#8b5cf6","#06b6d4","#10b981","#f97316","#ec4899","#f59e0b","#6366f1"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

        .tech-section {
          font-family: 'Outfit', sans-serif;
         
          position: relative;
          overflow: hidden;
        }

        .syne { font-family: 'Syne', sans-serif; }

        .fp {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 38px 38px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
        }

        .ambient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 45% at 15% 15%, rgba(59,130,246,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 55% 40% at 85% 85%, rgba(139,92,246,0.06) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <CursorOrb />

      <section ref={sectionRef} id="tech-stack"
        className=" tech-section flex items-center justify-center py-28 px-6 sm:px-12 lg:px-20"
      >

        {/* Particles */}
        {particleColors.map((c, i) => (
          <div key={i} className="fp"
            style={{ width: `${3 + i * 1.6}px`, height: `${3 + i * 1.6}px`, left: `${8 + i * 11}%`, bottom: `${10 + i * 7}%`, background: c }}
          />
        ))}

        <div className="max-w-6xl w-full relative z-10">
          {/* Header */}
          <motion.div ref={headerRef} className="mb-20" initial="hidden" animate={isHeaderInView ? "visible" : "hidden"}>

            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span className="w-2 h-2 rounded-full bg-blue-500"
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-[0.3em]">Technical Expertise</span>
            </motion.div>

            {/* H1 */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}
                className="syne text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.0]"
              >
                My Tech{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">Stack</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0, opacity: 0 }}
                    animate={isHeaderInView ? { width: "100%", opacity: 1 } : {}}
                    transition={{ delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </motion.h1>
            </div>

            {/* Sub + counter */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6">
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } } }}
                className="text-zinc-400 text-base max-w-sm font-light leading-relaxed"
              >
                Every technology I work with — each given its own space to shine.
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.55, duration: 0.5, ease: "backOut" } } }}
                className="flex items-baseline gap-2 shrink-0"
              >
                <span ref={countRef} className="syne text-5xl font-bold text-white tabular-nums">0</span>
                <span className="text-zinc-500 text-sm">technologies</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {techCards.map((card, i) => (
              <TechCard key={card.id} card={card} index={i} />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            className="mt-16 flex items-center gap-4 text-zinc-700 text-[10px] tracking-[0.25em] uppercase"
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3.5, repeat: Infinity }}>
              & always learning more
            </motion.span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
}