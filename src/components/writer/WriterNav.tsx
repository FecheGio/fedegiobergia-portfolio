"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, List, X } from "@phosphor-icons/react";

const LINKS = ["Libro", "Proyectos", "Contacto"];

export default function WriterNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-6 md:px-16"
        style={{ height: "68px" }}
        animate={{
          background:
            scrolled || menuOpen ? "rgba(14,14,14,0.9)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "blur(0px)",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid transparent",
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
          className="hidden sm:block text-sm tracking-[0.06em] font-light"
          style={{
            color: "var(--writer-muted)",
            fontFamily: "var(--font-editorial)",
            fontStyle: "italic",
          }}
        >
          Federico Giobergia
        </p>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-100 btn-press"
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="md:hidden btn-press p-2 -mr-2"
          style={{ color: "var(--writer-text)" }}
        >
          {menuOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
        </button>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[45] md:hidden flex flex-col justify-center px-8"
            style={{ background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 btn-press"
                  style={{
                    color: "var(--writer-text)",
                    fontFamily: "var(--font-editorial)",
                    fontSize: "clamp(2rem, 8vw, 3rem)",
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                >
                  <em>{item}</em>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
