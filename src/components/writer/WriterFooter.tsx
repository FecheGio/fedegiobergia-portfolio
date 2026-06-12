import Link from "next/link";

export default function WriterFooter() {
  return (
    <footer
      className="px-8 md:px-16 py-12"
      style={{
        borderTop: "1px solid var(--writer-border)",
        background: "var(--writer-bg)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p
          className="text-sm"
          style={{
            color: "var(--writer-muted)",
            fontFamily: "var(--font-editorial)",
            fontStyle: "italic",
            opacity: 0.5,
          }}
        >
          Federico Giobergia, {new Date().getFullYear()}
        </p>

        <Link
          href="/product-design"
          className="text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-100 btn-press"
          style={{
            color: "var(--writer-muted)",
            fontFamily: "var(--font-display)",
            opacity: 0.4,
          }}
        >
          Ver perfil de designer →
        </Link>
      </div>
    </footer>
  );
}
