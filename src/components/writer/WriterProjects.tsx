"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* TODO: Replace with Sanity data */
const PLACEHOLDER_PROJECTS = [
  {
    id: 1,
    title: "Proyecto en curso",
    genre: "Novela",
    status: "En escritura",
    description:
      "Una descripcion breve del proyecto en curso. Lo que es, lo que sera, por que existe.",
  },
  {
    id: 2,
    title: "Otro proyecto",
    genre: "Cuento",
    status: "En revision",
    description:
      "Descripcion de otro proyecto literario. Placeholder hasta que Federico complete los detalles.",
  },
];

export default function WriterProjects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="px-6 md:px-16 py-28 md:py-36"
      style={{
        background: "var(--writer-surface)",
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
          Proyectos en camino
        </motion.h2>

        <div className="space-y-px" style={{ background: "var(--writer-border)" }}>
          {PLACEHOLDER_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-8 items-start p-10 md:p-12"
              style={{ background: "var(--writer-bg)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mb-3"
                  style={{
                    color: "var(--writer-accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {project.genre}
                </p>
                <h3
                  className="text-2xl leading-tight"
                  style={{
                    fontFamily: "var(--font-editorial)",
                    color: "var(--writer-text)",
                  }}
                >
                  <em>{project.title}</em>
                </h3>
              </div>

              <p
                className="text-base leading-relaxed max-w-[40ch]"
                style={{
                  color: "var(--writer-muted)",
                  fontFamily: "var(--font-editorial)",
                }}
              >
                {project.description}
              </p>

              <span
                className="text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border"
                style={{
                  color: "var(--writer-muted)",
                  fontFamily: "var(--font-display)",
                  borderColor: "var(--writer-border)",
                  whiteSpace: "nowrap",
                  opacity: 0.7,
                }}
              >
                {project.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
