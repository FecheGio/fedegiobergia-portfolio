import type { Metadata } from "next";
import ProductNav from "@/components/product/ProductNav";
import ProductHero from "@/components/product/ProductHero";
import ProductWork from "@/components/product/ProductWork";
import ProductAbout from "@/components/product/ProductAbout";
import ProductFooter from "@/components/product/ProductFooter";

export const metadata: Metadata = {
  title: "Federico Giobergia — Product Designer",
  description:
    "Product & UX Designer. Portfolio de proyectos, case studies y experiencia en diseño de producto.",
  alternates: {
    canonical: "https://fedegiobergia.com.ar/product-design",
  },
};

export default function ProductPage() {
  return (
    <>
      <ProductNav />
      <main>
        <ProductHero />
        <ProductWork />
        <ProductAbout />
      </main>
      <ProductFooter />
    </>
  );
}
