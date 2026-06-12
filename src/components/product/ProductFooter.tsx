import Link from "next/link";

export default function ProductFooter() {
  return (
    <footer
      className="px-8 md:px-16 py-12"
      style={{
        borderTop: "1px solid var(--product-border)",
        background: "var(--product-surface)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p
          className="text-sm font-light"
          style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
        >
          Federico Giobergia, {new Date().getFullYear()}
        </p>

        <Link
          href="/escritor"
          className="text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-100 btn-press"
          style={{
            color: "var(--product-muted)",
            fontFamily: "var(--font-display)",
            opacity: 0.4,
          }}
        >
          Ver perfil de escritor →
        </Link>
      </div>
    </footer>
  );
}
