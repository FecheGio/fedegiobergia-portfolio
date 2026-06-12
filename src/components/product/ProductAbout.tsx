"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ProductAbout() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="px-8 md:px-16 py-28 md:py-36"
      style={{
        background: "var(--product-bg)",
        borderTop: "1px solid var(--product-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2
              className="font-bold tracking-[-0.03em] leading-[1.05]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--product-text)",
              }}
            >
              Sobre mi
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-5"
          >
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              {/* TODO: Insert real bio */}
              Soy Federico Giobergia, product designer con experiencia en [areas]. Trabajo en la
              intersection entre lo que funciona y lo que se siente bien.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              Creo que el buen diseno no se nota, y eso es exactamente el punto.
            </p>

            {/* Skills strip */}
            <div
              className="pt-8 mt-8 flex flex-wrap gap-3"
              style={{ borderTop: "1px solid var(--product-border)" }}
            >
              {[
                "Product Design",
                "UX Research",
                "Figma",
                "Design Systems",
                "Prototyping",
                "User Testing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs tracking-[0.08em] px-3 py-1.5 rounded-full border"
                  style={{
                    color: "var(--product-muted)",
                    fontFamily: "var(--font-display)",
                    borderColor: "var(--product-border)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="mailto:fedegiobergia@gmail.com"
                className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase btn-press transition-opacity hover:opacity-100"
                style={{
                  color: "var(--product-text)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                Hablemos →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
