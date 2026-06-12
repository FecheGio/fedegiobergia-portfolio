"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";

export default function WriterNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-8 md:px-16"
      style={{ height: "68px" }}
      animate={{
        background: scrolled ? "rgba(14,14,14,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-70 btn-press"
        style={{ color: "var(--writer-muted)", fontFamily: "var(--font-display)" }}
      >
        <ArrowLeft size={14} weight="light" />
        Inicio
      </Link>

      <p
        className="text-sm tracking-[0.06em] font-light"
        style={{
          color: "var(--writer-muted)",
          fontFamily: "var(--font-editorial)",
          fontStyle: "italic",
        }}
      >
        Federico Giobergia
      </p>

      <nav className="hidden md:flex items-center gap-8">
        {["Libro", "Proyectos", "Contacto"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-[0.14em] uppercase transition-all hover:opacity-100 btn-press"
            style={{
              color: "var(--writer-muted)",
              fontFamily: "var(--font-display)",
              opacity: 0.6,
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.nav>
  );
}
