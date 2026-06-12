import type { Metadata } from "next";
import WriterHero from "@/components/writer/WriterHero";
import WriterBook from "@/components/writer/WriterBook";
import WriterReviews from "@/components/writer/WriterReviews";
import WriterProjects from "@/components/writer/WriterProjects";
import WriterNav from "@/components/writer/WriterNav";
import WriterFooter from "@/components/writer/WriterFooter";

export const metadata: Metadata = {
  title: "Federico Giobergia — Escritor",
  description:
    "Federico Giobergia, escritor argentino. Conoce su libro, reseñas y proyectos literarios.",
  alternates: {
    canonical: "https://fedegiobergia.com.ar/escritor",
  },
};

export default function WriterPage() {
  return (
    <>
      <WriterNav />
      <main>
        <WriterHero />
        <WriterBook />
        <WriterReviews />
        <WriterProjects />
      </main>
      <WriterFooter />
    </>
  );
}
