// AchievementsPage — 荣誉墙
// ScrollStack 层叠卡片滚动效果

import ScrollStack, { ScrollStackItem } from '@/components/reactbits/ScrollStack'
import { PageHeader } from '@/components/PageHeader'
import { achievements } from '@/data/content'

export function AchievementsPage() {
  return (
    <div>
      <PageHeader title="荣誉墙" subtitle="Achievements" />

      <div className="h-[calc(100vh-160px)] overflow-hidden">
        <ScrollStack
          itemDistance={80}
          itemScale={0.03}
          itemStackDistance={24}
          stackPosition="15%"
          scaleEndPosition="5%"
          baseScale={0.88}
          blurAmount={2}
        >
          {achievements.map((a) => (
            <ScrollStackItem key={a.title} itemClassName="border border-white/10">
              <div className="flex h-full flex-col items-center justify-center text-center px-8">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  {a.year}
                </div>
                <h2 className="mt-2 max-w-xs text-2xl font-bold text-white md:text-3xl">
                  {a.title}
                </h2>
                <p className="mt-2 max-w-xs text-sm text-white/50">{a.contest}</p>
                <div className="mt-4 flex justify-center">
                  <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
                    {a.level}
                  </span>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  )
}

export default AchievementsPage
