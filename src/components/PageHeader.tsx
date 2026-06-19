// PageHeader — 页面通用标题（Shuffle 动效主标题 + 英文副标题）
// 使用 React Bits Shuffle 组件实现字符乱序滚动揭示动效

import Shuffle from '@/components/reactbits/Shuffle'

export function PageHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <header className="flex flex-col items-center px-6 pt-20 text-center md:pt-28">
      <Shuffle
        text={title}
        tag="h1"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
        colorFrom="#7c3aed"
        colorTo="#ffffff"
        className="font-bold"
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4rem)' }}
      />
      {subtitle && (
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-white/40">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#1a56db] to-[#7c3aed]" />
    </header>
  )
}

export default PageHeader
