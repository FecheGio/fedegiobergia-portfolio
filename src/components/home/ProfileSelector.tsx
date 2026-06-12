"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import Link from "next/link";

type Profile = "writer" | "designer" | null;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

export default function ProfileSelector() {
  const [hovered, setHovered] = useState<Profile>(null);
  const [exiting, setExiting] = useState<Profile>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const mouseX = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });

  /* Split ratio driven by spring — writer left gets wider on hover */
  const writerWidth = useTransform(
    springX,
    [0, 0.5, 1],
    ["62%", "50%", "38%"]
  );
  const designerWidth = useTransform(
    springX,
    [0, 0.5, 1],
    ["38%", "50%", "62%"]
  );

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
  }

  function onMouseLeave() {
    mouseX.set(0.5);
    setHovered(null);
  }

  function handleNavigate(profile: Profile) {
    setExiting(profile);
  }

  /* On touch (mobile) there is no hover, so each panel always shows its
     revealed state. On desktop, reveal follows the pointer. */
  const writerActive = !isDesktop || hovered === "writer";
  const designerActive = !isDesktop || hovered === "designer";

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col md:flex-row min-h-[100dvh] w-full overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* ── Writer side ─────────────────────────────────── */}
      <motion.div
        style={isDesktop ? { width: writerWidth } : undefined}
        className="relative flex w-full min-h-[50dvh] md:min-h-0 flex-col items-start justify-end overflow-hidden cursor-pointer group"
        onHoverStart={() => setHovered("writer")}
        onHoverEnd={() => setHovered(null)}
        onClick={() => handleNavigate("writer")}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0e0e0e]" />

        {/* Atmospheric gradient that intensifies on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background:
              writerActive
                ? "radial-gradient(ellipse 80% 60% at 30% 70%, rgba(201,178,122,0.12) 0%, transparent 70%)"
                : "radial-gradient(ellipse 80% 60% at 30% 70%, rgba(201,178,122,0.04) 0%, transparent 70%)",
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Divider line — bottom on mobile, right on desktop */}
        <div className="absolute bottom-0 left-0 w-full h-px md:right-0 md:top-0 md:left-auto md:h-full md:w-px bg-white/[0.06] z-10" />

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 pb-14 md:pb-20 w-full">
          {/* Label */}
          <motion.p
            className="text-[11px] tracking-[0.22em] uppercase font-[var(--font-display)] mb-8"
            style={{ color: "var(--writer-muted)" }}
            animate={{ opacity: writerActive ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            Escritor
          </motion.p>

          {/* Name — editorial serif */}
          <motion.h2
            className="font-[var(--font-editorial)] leading-[1.05] pb-1"
            style={{ color: "var(--writer-text)" }}
            animate={{
              fontSize: writerActive ? "clamp(3rem, 6vw, 6rem)" : "clamp(2.5rem, 5vw, 5rem)",
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Federico
            <br />
            <span style={{ color: "var(--writer-accent)", fontStyle: "italic" }}>
              Giobergia
            </span>
          </motion.h2>

          {/* Descriptor */}
          <motion.p
            className="mt-6 max-w-[32ch] text-base leading-relaxed font-[var(--font-editorial)]"
            style={{ color: "var(--writer-muted)" }}
            animate={{ opacity: writerActive ? 0.9 : 0.5, y: writerActive ? 0 : 4 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            Autor publicado. Proyectos en camino. Palabras con intención.
          </motion.p>

          {/* CTA arrow */}
          <motion.div
            className="mt-10 flex items-center gap-3 btn-press"
            animate={{
              opacity: writerActive ? 1 : 0,
              x: writerActive ? 0 : -8,
            }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <span
              className="text-sm tracking-[0.12em] uppercase font-[var(--font-display)]"
              style={{ color: "var(--writer-accent)" }}
            >
              Entrar
            </span>
            <span style={{ color: "var(--writer-accent)" }}>→</span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Designer side ────────────────────────────────── */}
      <motion.div
        style={isDesktop ? { width: designerWidth } : undefined}
        className="relative flex w-full min-h-[50dvh] md:min-h-0 flex-col items-start justify-end overflow-hidden cursor-pointer group"
        onHoverStart={() => setHovered("designer")}
        onHoverEnd={() => setHovered(null)}
        onClick={() => handleNavigate("designer")}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#f5f4f0]" />

        {/* Atmospheric gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background:
              designerActive
                ? "radial-gradient(ellipse 80% 60% at 70% 70%, rgba(17,17,17,0.06) 0%, transparent 70%)"
                : "radial-gradient(ellipse 80% 60% at 70% 70%, rgba(17,17,17,0.02) 0%, transparent 70%)",
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 pb-14 md:pb-20 w-full">
          {/* Label */}
          <motion.p
            className="text-[11px] tracking-[0.22em] uppercase font-[var(--font-display)] mb-8"
            style={{ color: "var(--product-muted)" }}
            animate={{ opacity: designerActive ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            Product Designer
          </motion.p>

          {/* Name — sans display */}
          <motion.h2
            className="font-[var(--font-display)] font-extrabold leading-[1.0] tracking-[-0.03em]"
            style={{ color: "var(--product-text)" }}
            animate={{
              fontSize: designerActive ? "clamp(3rem, 6vw, 6rem)" : "clamp(2.5rem, 5vw, 5rem)",
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Federico
            <br />
            <span className="font-light">Giobergia</span>
          </motion.h2>

          {/* Descriptor */}
          <motion.p
            className="mt-6 max-w-[32ch] text-base leading-relaxed font-[var(--font-display)] font-light"
            style={{ color: "var(--product-muted)" }}
            animate={{ opacity: designerActive ? 0.9 : 0.5, y: designerActive ? 0 : 4 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            Product & UX designer. Sistemas que se sienten bien y funcionan mejor.
          </motion.p>

          {/* CTA arrow */}
          <motion.div
            className="mt-10 flex items-center gap-3 btn-press"
            animate={{
              opacity: designerActive ? 1 : 0,
              x: designerActive ? 0 : -8,
            }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <span
              className="text-sm tracking-[0.12em] uppercase font-[var(--font-display)]"
              style={{ color: "var(--product-accent)" }}
            >
              Entrar
            </span>
            <span style={{ color: "var(--product-accent)" }}>→</span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Center name (desktop-only initial state, fades on hover) ── */}
      <motion.div
        className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-20"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="text-center select-none">
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-[var(--font-display)] mix-blend-difference"
            style={{ color: "#888" }}
          >
            Fede Giobergia
          </p>
          <p
            className="mt-2 text-xs tracking-[0.18em] uppercase font-[var(--font-display)] mix-blend-difference"
            style={{ color: "#555" }}
          >
            Elegia tu mundo
          </p>
        </div>
      </motion.div>

      {/* Navigation links (hidden, triggered by click handlers above) */}
      <Link
        href="/escritor"
        id="writer-link"
        className="sr-only"
        tabIndex={-1}
        aria-hidden
      />
      <Link
        href="/product-design"
        id="designer-link"
        className="sr-only"
        tabIndex={-1}
        aria-hidden
      />

      {/* Page transition overlay */}
      <NavigationOverlay target={exiting} />
    </div>
  );
}

function NavigationOverlay({ target }: { target: Profile }) {
  if (!target) return null;

  const href = target === "writer" ? "/escritor" : "/product-design";
  const bg = target === "writer" ? "#0e0e0e" : "#f5f4f0";

  return (
    <motion.div
      className="absolute inset-0 z-50 pointer-events-none"
      style={{ background: bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      onAnimationComplete={() => {
        window.location.href = href;
      }}
    />
  );
}
