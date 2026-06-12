"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* TODO: Replace with Sanity data */
const PLACEHOLDER_REVIEWS = [
  {
    id: 1,
    quote:
      "Un libro que te obliga a detenerte. La prosa de Giobergia tiene una precision que duele.",
    author: "Nombre del Reseñador",
    source: "Medio o publicacion",
  },
  {
    id: 2,
    quote:
      "Hay una honestidad brutal en cada pagina. No es comodo leerlo, y por eso es necesario.",
    author: "Nombre del Reseñador",
    source: "Medio o publicacion",
  },
  {
    id: 3,
    quote:
      "Una voz nueva en la narrativa argentina. Giobergia sabe cuando callarse y cuando insistir.",
    author: "Nombre del Reseñador",
    source: "Medio o publicacion",
  },
];

export default function WriterReviews() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="resenas"
      ref={ref}
      className="px-6 md:px-16 py-28 md:py-36"
      style={{
        background: "var(--writer-bg)",
        borderTop: "1px solid var(--writer-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="mb-16"
          style={{
            fontFamily: "var(--font-editorial)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "var(--writer-text)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          Lo que dicen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--writer-border)" }}>
          {PLACEHOLDER_REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              className="p-10 md:p-12"
              style={{ background: "var(--writer-surface)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {/* Typographic quote mark */}
              <span
                className="block text-6xl leading-none mb-6 select-none"
                style={{
                  color: "var(--writer-accent)",
                  fontFamily: "var(--font-editorial)",
                  opacity: 0.6,
                }}
                aria-hidden
              >
                "
              </span>
              <p
                className="text-base leading-relaxed max-w-[40ch]"
                style={{
                  color: "var(--writer-text)",
                  fontFamily: "var(--font-editorial)",
                  opacity: 0.85,
                }}
              >
                {review.quote}
              </p>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--writer-border)" }}>
                <p
                  className="text-sm"
                  style={{ color: "var(--writer-text)", fontFamily: "var(--font-editorial)" }}
                >
                  {review.author}
                </p>
                <p
                  className="text-xs mt-1 tracking-[0.1em]"
                  style={{
                    color: "var(--writer-muted)",
                    fontFamily: "var(--font-display)",
                    opacity: 0.6,
                  }}
                >
                  {review.source}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
