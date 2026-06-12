"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "@phosphor-icons/react";

export default function ProductNav() {
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
        background: scrolled ? "rgba(245,244,240,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid transparent",
      }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-60 btn-press"
        style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
      >
        <ArrowLeft size={14} weight="light" />
        Inicio
      </Link>

      <p
        className="text-sm tracking-[-0.02em] font-semibold"
        style={{ color: "var(--product-text)", fontFamily: "var(--font-display)" }}
      >
        FG
      </p>

      <nav className="hidden md:flex items-center gap-8">
        {["Trabajo", "Sobre mi", "CV"].map((item) => (
          <a
            key={item}
            href={item === "CV" ? "/cv.pdf" : `#${item.toLowerCase().replace(" ", "-")}`}
            target={item === "CV" ? "_blank" : undefined}
            rel={item === "CV" ? "noopener noreferrer" : undefined}
            className="text-xs tracking-[0.12em] uppercase transition-opacity hover:opacity-100 btn-press"
            style={{
              color: "var(--product-muted)",
              fontFamily: "var(--font-display)",
              opacity: 0.55,
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.nav>
  );
}
