import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Federico Giobergia — Product Designer",
    template: "%s | Federico Giobergia",
  },
  description:
    "Federico Giobergia, Product & UX Designer. Sistemas que se sienten bien y funcionan mejor.",
  keywords: [
    "Federico Giobergia",
    "product designer",
    "UX designer",
    "diseñador de producto",
    "UX Argentina",
  ],
  openGraph: {
    title: "Federico Giobergia — Product Designer",
    description: "Product & UX Designer. Sistemas que se sienten bien y funcionan mejor.",
    url: "https://fedegiobergia.com.ar/product-design",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--product-bg)",
        color: "var(--product-text)",
        fontFamily: "var(--font-display), system-ui, sans-serif",
        minHeight: "100dvh",
      }}
    >
      {children}
    </div>
  );
}
