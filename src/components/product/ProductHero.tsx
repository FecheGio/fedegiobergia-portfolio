"use client";

import { motion } from "motion/react";

export default function ProductHero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-end px-8 md:px-16 pb-20 pt-28"
      style={{ background: "var(--product-bg)" }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16 items-end">
          {/* Headline */}
          <div>
            <motion.p
              className="text-[11px] tracking-[0.24em] uppercase mb-10"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              Product & UX Designer
            </motion.p>

            <motion.h1
              className="font-bold leading-[0.95] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 9vw, 10rem)",
                color: "var(--product-text)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}
            >
              Federico
              <br />
              <span className="font-light">Giobergia</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[46ch] text-lg leading-relaxed font-light"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
            >
              Diseño sistemas que se sienten bien y funcionan mejor. Producto, UX, y la distancia entre las dos cosas.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              <a
                href="#trabajo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-[0.06em] btn-press transition-colors"
                style={{
                  background: "var(--product-text)",
                  color: "var(--product-bg)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Ver trabajo
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-[0.08em] uppercase transition-opacity hover:opacity-100 btn-press"
                style={{
                  color: "var(--product-muted)",
                  fontFamily: "var(--font-display)",
                  opacity: 0.55,
                }}
              >
                Descargar CV
              </a>
            </motion.div>
          </div>

          {/* Right: availability badge */}
          <motion.div
            className="hidden md:flex flex-col gap-4 pb-1 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border"
              style={{
                borderColor: "var(--product-border)",
                background: "var(--product-surface)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#22c55e" }}
                aria-hidden
              />
              <span
                className="text-xs tracking-[0.1em]"
                style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
              >
                Disponible para proyectos
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
