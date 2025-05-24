import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How BOOP Labs Helps You Build an Insanely Profitable Business | BOOP Blog",
  description: "Discover how BOOP Labs can skyrocket your business profits and help you create a life you truly love—thanks to powerful habit tracking, cutting-edge productivity tools, and a daily system that keeps you on track.",
  keywords: [
    "business growth",
    "productivity tools",
    "habit tracking",
    "business automation",
    "BOOP Labs",
    "business success",
    "performance tracking",
    "business scaling",
    "productivity system",
    "business management"
  ],
  openGraph: {
    title: "How BOOP Labs Helps You Build an Insanely Profitable Business",
    description: "Discover how BOOP Labs can skyrocket your business profits and help you create a life you truly love.",
    type: "article",
    publishedTime: "2024-03-14T00:00:00.000Z",
    authors: ["BOOP Labs"],
    tags: ["Business Growth", "Productivity", "Success"],
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 