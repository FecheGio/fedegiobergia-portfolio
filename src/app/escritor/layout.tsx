import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Federico Giobergia — Escritor",
    template: "%s | Federico Giobergia",
  },
  description:
    "Federico Giobergia, escritor argentino. Autor publicado, proyectos literarios en curso.",
  keywords: ["Federico Giobergia", "escritor", "libro", "autor argentino", "literatura"],
  openGraph: {
    title: "Federico Giobergia — Escritor",
    description: "Autor publicado. Proyectos en camino. Palabras con intención.",
    url: "https://fedegiobergia.com.ar/escritor",
  },
};

export default function WriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--writer-bg)",
        color: "var(--writer-text)",
        fontFamily: "var(--font-editorial), 'EB Garamond', Georgia, serif",
        minHeight: "100dvh",
      }}
    >
      {children}
    </div>
  );
}
