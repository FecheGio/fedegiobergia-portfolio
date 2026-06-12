import type { Metadata } from "next";
import { Outfit, EB_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fedegiobergia.com.ar"),
  title: {
    default: "Federico Giobergia",
    template: "%s | Federico Giobergia",
  },
  description:
    "Federico Giobergia — escritor y diseñador de producto. Autor publicado y Product & UX Designer.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://fedegiobergia.com.ar",
    siteName: "Federico Giobergia",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${ebGaramond.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
