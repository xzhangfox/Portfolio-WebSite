'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { personalInfo } from '@/lib/data'

const stats = [
  { value: '5+', label: 'Years Experience', sub: 'at Stout' },
  { value: '3', label: 'AI Platforms', sub: 'Built & Shipped' },
  { value: '∞', label: 'Tokens Processed', sub: 'in production' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="section-divider">
            <span className="section-label">01 · About</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — monogram + decorative element */}
          <FadeIn direction="left" delay={0.1}>
            <div className="relative flex flex-col items-start">
              {/* Large decorative letters */}
              <div className="relative w-full aspect-square max-w-xs">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-full h-full rounded-full border border-gold/10"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(201,168,76,0.15), transparent, rgba(201,168,76,0.05), transparent)',
                    }}
                  />
                  {/* Middle ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-3/4 h-3/4 rounded-full border border-gold/20"
                    style={{ borderStyle: 'dashed' }}
                  />
                  {/* Core */}
                  <div className="relative w-1/2 h-1/2 rounded-full bg-surface-card border border-gold/30 flex flex-col items-center justify-center gap-1">
                    <span className="text-3xl font-bold gold-gradient tracking-widest">XZ</span>
                    <span className="section-label text-white/30 text-[0.5rem] tracking-[0.3em]">PORTFOLIO</span>
                  </div>
                  {/* Orbit dots */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <motion.div
                      key={deg}
                      className="absolute w-1.5 h-1.5 rounded-full bg-gold/60"
                      style={{
                        top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 47}%)`,
                        left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 47}%)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: deg / 300,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Name card */}
              <div className="mt-6 p-4 rounded-xl bg-surface-card border border-gold/15 w-full max-w-xs">
                <p className="text-white font-semibold">{personalInfo.name}</p>
                <p className="text-gold text-sm font-mono mt-0.5">{personalInfo.title}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/40 text-xs font-mono">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — bio + stats */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Where{' '}
                <span className="gold-gradient">artificial intelligence</span>
                {' '}meets{' '}
                <span className="text-white">scalable engineering.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-white/55 text-base leading-relaxed">
                {personalInfo.summary}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-white/45 text-sm leading-relaxed">
                At Stout, I've architected enterprise AI platforms that process thousands of governed
                LLM interactions daily — blending RAG pipelines, graph databases, and full-stack
                delivery. Outside of work, I ship the{' '}
                <span className="text-gold font-medium">Flux</span> product suite: AI-powered platforms
                for career intelligence, financial management, and metabolic tracking.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.45}>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-bold gold-gradient">{stat.value}</span>
                    <span className="text-white/70 text-xs leading-tight">{stat.label}</span>
                    <span className="text-white/30 text-xs font-mono">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
