// AboutPage — 关于我们
// 简介三段式 + 数据看板（数字滚动）+ 发展历程 Timeline

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { PageHeader } from '@/components/PageHeader'
import { aboutContent } from '@/data/content'

/** 数字滚动计数器：进入视口时从 0 累加到目标值 */
function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function AboutPage() {
  return (
    <div>
      <PageHeader title={aboutContent.title} subtitle={aboutContent.subtitle} />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* 简介三段 */}
        <div className="grid gap-6 md:grid-cols-3">
          {aboutContent.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-relaxed text-white/70 backdrop-blur-sm md:text-base"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* 数据看板 */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6">
          {aboutContent.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm"
            >
              <div
                className="font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}
              >
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/55">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 发展历程 Timeline */}
        <div className="mt-20">
          <h2 className="mb-8 text-center text-xl font-semibold text-white/80">
            发展历程
          </h2>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#1a56db]/60 via-[#7c3aed]/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {aboutContent.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span
                    className={`absolute top-1.5 h-3 w-3 rounded-full bg-[#7c3aed] ring-4 ring-[#7c3aed]/20 left-3 md:left-auto ${
                      i % 2 === 0 ? 'md:-right-1.5' : 'md:-left-1.5'
                    }`}
                  />
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                    <div className="font-mono text-sm text-[#7c3aed]">{item.year}</div>
                    <div className="mt-1 font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-white/55">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
