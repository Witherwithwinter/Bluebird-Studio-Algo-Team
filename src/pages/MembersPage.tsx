// MembersPage — 团队成员
// 官方 TiltedCard 展示成员头像（渐变图），覆盖层显示研究方向 + GitHub

import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import TiltedCard from '@/components/reactbits/TiltedCard'
import type { TiltedCardProps } from '@/components/reactbits/reactbits'
import { GithubIcon } from '@/components/common/GithubIcon'
import { PageHeader } from '@/components/PageHeader'
import { members } from '@/data/content'

// 官方组件为 JS+CSS 变体，部分 props 在 TS 推断下较窄，统一以声明类型调用。
const Card = TiltedCard as unknown as (props: TiltedCardProps) => ReactElement

export function MembersPage() {
  return (
    <div>
      <PageHeader title="团队成员" subtitle="Members" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-white/55 md:text-base">
          一群热爱算法的年轻人 —— 悬停卡片了解每位成员的研究方向。
        </p>

        <div className="grid grid-cols-2 justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col items-center"
            >
              <Card
                imageSrc={m.image}
                altText={m.name}
                captionText={m.role}
                containerHeight="220px"
                containerWidth="220px"
                imageHeight="220px"
                imageWidth="220px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="flex h-[220px] w-[220px] flex-col items-center justify-center bg-black/45 p-4 text-center backdrop-blur-[2px]">
                    <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                    <p className="mt-0.5 text-xs font-medium text-[#c4b5fd]">{m.role}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">{m.focus}</p>
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target mt-3 inline-flex items-center gap-1 text-xs text-white/60 transition-colors hover:text-white"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
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

export default MembersPage
