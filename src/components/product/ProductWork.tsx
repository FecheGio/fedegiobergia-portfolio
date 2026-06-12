"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

/* TODO: Replace with Sanity data via getCaseStudies() */
const PLACEHOLDER_CASES = [
  {
    slug: "case-study-1",
    title: "Nombre del proyecto",
    category: "Product Design",
    year: "2024",
    description:
      "Una descripcion breve del proyecto. Que problema resuelve, cual fue tu rol.",
    image: "https://picsum.photos/seed/product-case-1/800/500",
    tags: ["UX Research", "Interface Design"],
  },
  {
    slug: "case-study-2",
    title: "Otro proyecto",
    category: "UX Design",
    year: "2023",
    description:
      "Descripcion breve del segundo proyecto. El contexto y el resultado.",
    image: "https://picsum.photos/seed/product-case-2/800/500",
    tags: ["Design System", "Prototyping"],
  },
  {
    slug: "case-study-3",
    title: "Tercer proyecto",
    category: "Product Strategy",
    year: "2023",
    description:
      "Contexto del proyecto. Que hiciste, como, y que impacto tuvo.",
    image: "https://picsum.photos/seed/product-case-3/800/500",
    tags: ["User Testing", "Flows"],
  },
];

export default function ProductWork() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="trabajo"
      ref={ref}
      className="px-8 md:px-16 py-28 md:py-36"
      style={{
        background: "var(--product-surface)",
        borderTop: "1px solid var(--product-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          className="mb-16 font-bold tracking-[-0.03em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "var(--product-text)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          Trabajo seleccionado
        </motion.h2>

        <div className="space-y-px" style={{ background: "var(--product-border)" }}>
          {PLACEHOLDER_CASES.map((cs, i) => (
            <CaseStudyRow key={cs.slug} cs={cs} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({
  cs,
  index,
  inView,
}: {
  cs: (typeof PLACEHOLDER_CASES)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href={`/product-design/${cs.slug}`}
        className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 p-8 md:p-10 transition-all btn-press"
        style={{ background: "var(--product-bg)" }}
      >
        {/* Image */}
        <div className="relative w-full md:w-48 aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-sm flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cs.image}
            alt={cs.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              {cs.category}
            </span>
            <span style={{ color: "var(--product-border)" }}>|</span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              {cs.year}
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-3"
            style={{ color: "var(--product-text)", fontFamily: "var(--font-display)" }}
          >
            {cs.title}
          </h3>

          <p
            className="text-sm leading-relaxed max-w-[50ch] font-light"
            style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
          >
            {cs.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full border"
                style={{
                  color: "var(--product-muted)",
                  fontFamily: "var(--font-display)",
                  borderColor: "var(--product-border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <span
          className="hidden md:block text-lg transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: "var(--product-muted)", opacity: 0.4 }}
          aria-hidden
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
