import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

/* TODO: Replace with actual Sanity fetch */
async function getCaseStudy(slug: string) {
  // Placeholder — swap for: return client.fetch(caseStudyQuery, { slug })
  const placeholder = {
    slug,
    title: "Nombre del proyecto",
    category: "Product Design",
    year: "2024",
    client: "Cliente",
    role: "Lead Designer",
    summary:
      "Una descripcion del proyecto. Que problema resuelve, cual fue tu enfoque y que aprendiste.",
    coverImage: `https://picsum.photos/seed/${slug}-cover/1600/900`,
    content: null, // Portable Text from Sanity
  };
  return placeholder;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | Federico Giobergia`,
      description: cs.summary,
      images: [cs.coverImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <div style={{ background: "var(--product-bg)", color: "var(--product-text)", minHeight: "100dvh" }}>
      {/* Back nav */}
      <div className="px-8 md:px-16 pt-8 pb-4 max-w-[1400px] mx-auto">
        <Link
          href="/product-design"
          className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase transition-opacity hover:opacity-100 btn-press"
          style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)", opacity: 0.5 }}
        >
          <ArrowLeft size={14} weight="light" />
          Trabajo
        </Link>
      </div>

      {/* Cover */}
      <div className="px-8 md:px-16 pt-8 max-w-[1400px] mx-auto">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cs.coverImage}
            alt={cs.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Header */}
      <div className="px-8 md:px-16 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-start">
          <div>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-6"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              {cs.category}
            </p>
            <h1
              className="font-bold tracking-[-0.03em] leading-[1.0]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                color: "var(--product-text)",
              }}
            >
              {cs.title}
            </h1>
            <p
              className="mt-6 max-w-[55ch] text-lg leading-relaxed font-light"
              style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
            >
              {cs.summary}
            </p>
          </div>

          {/* Metadata */}
          <div className="space-y-6">
            {[
              { label: "Cliente", value: cs.client },
              { label: "Rol", value: cs.role },
              { label: "Año", value: cs.year },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mb-1"
                  style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)", opacity: 0.5 }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--product-text)", fontFamily: "var(--font-display)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portable Text content from Sanity will render here */}
      <div
        className="px-8 md:px-16 pb-28 max-w-[860px] mx-auto"
        style={{ borderTop: "1px solid var(--product-border)" }}
      >
        <p
          className="pt-16 text-base leading-relaxed font-light"
          style={{ color: "var(--product-muted)", fontFamily: "var(--font-display)" }}
        >
          El contenido detallado del case study se cargara desde Sanity CMS.
        </p>
      </div>
    </div>
  );
}
