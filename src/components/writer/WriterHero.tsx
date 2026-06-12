"use client";

import { motion } from "motion/react";

const STAGGER = 0.08;

export default function WriterHero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end px-8 md:px-16 pb-20 pt-28"
      style={{ background: "var(--writer-bg)" }}
    >
      {/* Subtle top gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(201,178,122,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left: headline */}
          <div>
            <motion.p
              className="text-[11px] tracking-[0.24em] uppercase mb-10"
              style={{
                color: "var(--writer-muted)",
                fontFamily: "var(--font-display)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: STAGGER * 0, ease: [0.23, 1, 0.32, 1] }}
            >
              Escritor
            </motion.p>

            <motion.h1
              className="leading-[1.0] pb-2"
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "clamp(3.5rem, 8vw, 9rem)",
                color: "var(--writer-text)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: STAGGER * 1, ease: [0.23, 1, 0.32, 1] }}
            >
              Federico
              <br />
              <em style={{ color: "var(--writer-accent)" }}>Giobergia</em>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[48ch] text-lg leading-relaxed"
              style={{
                color: "var(--writer-muted)",
                fontFamily: "var(--font-editorial)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: STAGGER * 2, ease: [0.23, 1, 0.32, 1] }}
            >
              Autor publicado. Cada libro es una apuesta sobre lo que merece existir.
            </motion.p>

            <motion.a
              href="#libro"
              className="inline-flex items-center gap-3 mt-10 btn-press"
              style={{
                color: "var(--writer-accent)",
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: STAGGER * 3, ease: [0.23, 1, 0.32, 1] }}
            >
              Ver el libro
              <span>→</span>
            </motion.a>
          </div>

          {/* Right: small metadata */}
          <motion.div
            className="hidden md:flex flex-col items-end gap-4 pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {[
              { label: "Género", value: "Ficción" },
              { label: "País", value: "Argentina" },
            ].map(({ label, value }) => (
              <div key={label} className="text-right">
                <p
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--writer-muted)", fontFamily: "var(--font-display)", opacity: 0.5 }}
                >
                  {label}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--writer-text)", fontFamily: "var(--font-editorial)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
