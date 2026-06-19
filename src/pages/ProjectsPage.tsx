// ProjectsPage — 项目展示
// 官方 TiltedCard 展示项目卡片，覆盖层显示技术栈，底部链接 GitHub

import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import { Star, ArrowUpRight } from 'lucide-react'
import TiltedCard from '@/components/reactbits/TiltedCard'
import type { TiltedCardProps } from '@/components/reactbits/reactbits'
import { GithubIcon } from '@/components/common/GithubIcon'
import { PageHeader } from '@/components/PageHeader'
import { projects } from '@/data/content'

// 官方组件为 JS+CSS 变体，部分 props 在 TS 推断下较窄，统一以声明类型调用。
const Card = TiltedCard as unknown as (props: TiltedCardProps) => ReactElement

export function ProjectsPage() {
  return (
    <div>
      <PageHeader title="项目展示" subtitle="Projects" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-white/55 md:text-base">
          团队的开源与科研项目 —— 悬停卡片查看技术栈，点击进入对应 GitHub 仓库。
        </p>

        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center"
            >
              <Card
                imageSrc={p.image}
                altText={p.name}
                captionText={`★ ${p.stars}`}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="flex h-[300px] w-[300px] flex-col justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white">{p.name}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-xs text-white/85 backdrop-blur">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {p.stars}
                      </span>
                    </div>
                    <div>
                      <p className="mb-3 text-sm leading-relaxed text-white/75">
                        {p.description}
                      </p>
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-white/15 bg-black/40 px-1.5 py-0.5 font-mono text-[10px] text-white/75"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        访问仓库
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
