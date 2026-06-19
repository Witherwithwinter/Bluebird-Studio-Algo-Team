// HomePage — 首页 / Hero
// 全屏首屏：Logo + 团队名 + Slogan + 引导进入按钮

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/content'

export function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-0px)] flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <motion.img
        src={siteConfig.logo}
        alt={siteConfig.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8 h-24 w-24 object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.4)] md:h-32 md:w-32"
      />

      {/* 团队名（字间距展开动效） */}
      <motion.h1
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, letterSpacing: '0.05em' }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="font-bold text-white"
        style={{ fontSize: 'clamp(2.25rem, 7vw, 5rem)' }}
      >
        {siteConfig.name}
      </motion.h1>

      {/* 英文名 */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-3 font-mono text-sm uppercase tracking-[0.3em] text-white/50 md:text-base"
      >
        {siteConfig.nameEn}
      </motion.p>

      {/* 分隔线 */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent md:w-64"
      />

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="font-semibold text-white"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
      >
        {siteConfig.slogan}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-2 text-sm italic text-white/50 md:text-base"
      >
        {siteConfig.sloganEn}
      </motion.p>

      {/* 所属机构 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mt-6 text-sm text-white/40"
      >
        {siteConfig.university} · {siteConfig.college}
      </motion.p>

      {/* 进入按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
        className="mt-10"
      >
        <Link
          to="/about"
          className="cursor-target group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a56db] to-[#7c3aed] px-8 py-4 font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-transform hover:scale-105"
        >
          走进团队
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

    </section>
  )
}

export default HomePage
