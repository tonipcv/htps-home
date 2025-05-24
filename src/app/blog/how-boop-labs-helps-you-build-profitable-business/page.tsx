'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function BlogPost() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed w-full top-0 border-b border-zinc-900 backdrop-blur-md z-40">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center">
            <div className="w-20">
              <Link href="/blog" className="text-white/60 hover:text-white transition-colors duration-300">
                ← Back to Blog
              </Link>
            </div>
            <h1 className="text-base sm:text-lg font-thin tracking-[0.8em] text-white/80 hover:text-white transition-colors duration-300">
              BOOP
            </h1>
            <div className="w-20">
              <a 
                href="https://app.booplabs.com/auth/signin" 
                className="text-xs sm:text-sm font-thin tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12 mt-32">
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Article Header */}
          <div className="mb-16">
            <div className="text-[#00F5D4] text-sm mb-4">Business Growth</div>
            <h1 className="text-4xl sm:text-5xl font-thin mb-6 !leading-tight">
              How BOOP Labs Helps You Build an Insanely Profitable Business and Design Your Dream Life
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span>March 14, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-8 text-zinc-300">
            <p className="text-xl font-light !leading-relaxed">
              Ever imagine running a <strong>wildly profitable business</strong> without sacrificing your personal life? Welcome to <strong>BOOP Labs</strong>, the platform that helps you <strong>build better habits</strong>, <strong>maximize productivity</strong>, and ultimately <strong>design the life of your dreams</strong>.
            </p>

            <p>
              With BOOP Labs, you'll find that consistent growth, financial success, and personal fulfillment can—and should—go hand in hand.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 my-12">
              <h2 className="text-xl font-thin mb-4 text-white">In this post, we'll explore:</h2>
              <ul className="list-none space-y-3 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1">→</span>
                  <span>How to <strong>transform</strong> your daily routine to boost your income and elevate your lifestyle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1">→</span>
                  <span>The <strong>key features</strong> of BOOP Labs that sharpen your focus on what matters most.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1">→</span>
                  <span>Simple strategies to <strong>maintain momentum</strong>, grow your business, and stay balanced personally.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-thin mt-16 mb-8">1. The BOOP Labs Advantage: Profit and Lifestyle Combined</h2>
            <p>
              Building a thriving business doesn't need to mean working 24/7. <strong>BOOP Labs</strong> lets you set up routines that prioritize <strong>profit-driving actions</strong> while also making space for the things that keep you inspired—like health, family, and downtime.
            </p>

            <h3 className="text-2xl font-thin mt-12 mb-6">Key Benefits:</h3>
            <div className="grid gap-6">
              <div className="border border-zinc-800 rounded-lg p-6 hover:border-[#00F5D4]/20 transition-colors">
                <h4 className="text-lg font-medium mb-2 text-white">Clarity on What Matters</h4>
                <p className="m-0">Stop getting lost in low-impact tasks. BOOP Labs helps you stay laser-focused on the work that boosts your revenue and impact.</p>
              </div>
              <div className="border border-zinc-800 rounded-lg p-6 hover:border-[#00F5D4]/20 transition-colors">
                <h4 className="text-lg font-medium mb-2 text-white">Daily Wins</h4>
                <p className="m-0">Each day, you'll complete the goals and habits that move your business forward—whether it's generating leads, closing deals, or creating standout content.</p>
              </div>
              <div className="border border-zinc-800 rounded-lg p-6 hover:border-[#00F5D4]/20 transition-colors">
                <h4 className="text-lg font-medium mb-2 text-white">Life by Design</h4>
                <p className="m-0">By tracking personal habits like workouts, family time, or creative pursuits, you ensure that success doesn't come at the cost of your well-being.</p>
              </div>
            </div>

            <div className="border-l-2 border-[#00F5D4] pl-6 my-16">
              <p className="text-xl italic mb-4">
                "BOOP Labs revolutionized my day-to-day approach. Within months, I scaled my side hustle into a full-fledged business and still had time to travel. The habit tracking and daily check-ins kept me focused on my top goals every single day!"
              </p>
              <p className="text-sm text-zinc-400">
                — Sarah T., Entrepreneur & Travel Blogger
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 my-16">
              <h2 className="text-2xl font-thin mb-6">Ready to take the leap?</h2>
              <p className="mb-8">
                Your dream business—and your dream life—are closer than you think. With the right <strong>strategies, habits, and mindset</strong>, you can achieve them both.
              </p>
              <a 
                href="https://app.booplabs.com/auth/register"
                className="inline-block px-8 py-4 bg-[#00F5D4]/10 hover:bg-[#00F5D4]/20 border border-[#00F5D4]/20 rounded-lg text-[#00F5D4] transition-all duration-300"
              >
                Try BOOP Labs Now →
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-white/5 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
          <p className="text-center text-gray-500 font-extralight tracking-[0.3em] text-[10px] sm:text-xs">
            © 2024 BOOP
          </p>
        </div>
      </footer>
    </div>
  )
} 