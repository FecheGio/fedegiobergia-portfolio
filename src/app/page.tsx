import type { Metadata } from "next";
import ProfileSelector from "@/components/home/ProfileSelector";

export const metadata: Metadata = {
  title: "Federico Giobergia",
  description:
    "Federico Giobergia — escritor y diseñador de producto.",
  openGraph: {
    title: "Federico Giobergia",
    description: "Escritor y diseñador de producto.",
    url: "https://fedegiobergia.com.ar",
  },
};

export default function HomePage() {
  return <ProfileSelector />;
}
