import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Build an 8-Figure Business in 2025 with BOOP Labs | BOOP Blog",
  description: "Learn how to build a wildly profitable 8-figure business while working only 4 hours a day. Discover proven systems, automation strategies, and how BOOP Labs can help scale your business effortlessly.",
  keywords: [
    "8-figure business",
    "business scaling",
    "automation",
    "business systems",
    "team building",
    "business growth",
    "BOOP Labs",
    "business strategy",
    "monetization",
    "business automation"
  ],
  openGraph: {
    title: "How Build an 8-Figure Business in 2025 with BOOP Labs",
    description: "Learn how to build a wildly profitable 8-figure business with proven systems and automation strategies.",
    type: "article",
    publishedTime: "2024-03-15T00:00:00.000Z",
    authors: ["BOOP Labs"],
    tags: ["Business Strategy", "Growth", "Success"],
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 