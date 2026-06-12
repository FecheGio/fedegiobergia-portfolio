"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function WriterBook() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="libro"
      ref={ref}
      className="px-6 md:px-16 py-28 md:py-36"
      style={{
        background: "var(--writer-surface)",
        borderTop: "1px solid var(--writer-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
          {/* Book cover placeholder — replace with real cover */}
          <motion.div
            className="relative aspect-[3/4] w-full max-w-sm mx-auto md:mx-0 overflow-hidden rounded-sm"
            style={{
              background: "var(--writer-border)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Placeholder — swap for real cover via next/image */}
            <div
              className="absolute inset-0 flex items-end p-8"
              style={{
                background: "linear-gradient(160deg, #1a1612 0%, #0e0c09 100%)",
              }}
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--writer-accent)", fontFamily: "var(--font-display)" }}
                >
                  {/* Book title — update when ready */}
                  Próximamente
                </p>
                <p
                  className="text-3xl leading-tight"
                  style={{ color: "var(--writer-text)", fontFamily: "var(--font-editorial)" }}
                >
                  {/* TODO: Insert book title */}
                  Titulo del
                  <br />
                  <em>Libro</em>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Book info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-8"
              style={{ color: "var(--writer-accent)", fontFamily: "var(--font-display)" }}
            >
              Libro publicado
            </p>

            <h2
              className="leading-[1.05] pb-1"
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--writer-text)",
              }}
            >
              {/* TODO: Insert actual book title */}
              <em>Titulo del libro</em>
            </h2>

            <div
              className="mt-8 space-y-5 text-base leading-relaxed max-w-[55ch]"
              style={{ color: "var(--writer-muted)", fontFamily: "var(--font-editorial)" }}
            >
              {/* TODO: Insert actual book description */}
              <p>
                Una descripcion del libro que va a ir aca. Placeholder hasta que Federico lo complete con el
                texto real sobre su obra publicada.
              </p>
              <p>
                El libro. Lo que representa. Por que escribirlo. Una segunda idea sobre el trabajo.
              </p>
            </div>

            {/* Book metadata strip */}
            <div
              className="mt-10 pt-8 grid grid-cols-2 md:grid-cols-3 gap-6"
              style={{ borderTop: "1px solid var(--writer-border)" }}
            >
              {[
                { label: "Editorial", value: "Por completar" },
                { label: "Año", value: "2024" },
                { label: "Género", value: "Por completar" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--writer-muted)", fontFamily: "var(--font-display)", opacity: 0.5 }}
                  >
                    {label}
                  </p>
                  <p
                    style={{ color: "var(--writer-text)", fontFamily: "var(--font-editorial)" }}
                    className="text-sm"
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
