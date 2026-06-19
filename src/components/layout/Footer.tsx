// Footer — 页脚（版权 + 社交）

import { Mail, Heart } from 'lucide-react'
import { GithubIcon } from '@/components/common/GithubIcon'
import { siteConfig } from '@/data/content'

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-6 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* 左侧：Logo + 版权 */}
        <div className="flex items-center gap-3">
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-8 w-8 object-contain"
          />
          <div className="text-sm">
            <div className="font-semibold text-white/90">{siteConfig.name}</div>
            <div className="text-xs text-white/40">
              © {siteConfig.year} {siteConfig.university}
            </div>
          </div>
        </div>

        {/* 中间：致谢 */}
        <div className="flex items-center gap-1.5 text-xs text-white/40">
          Built with <Heart className="h-3.5 w-3.5 fill-rose-500/80 text-rose-500/80" /> by
          Hycode
        </div>

        {/* 右侧：社交 */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="cursor-target flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:1803655725@qq.com"
            aria-label="Email"
            className="cursor-target flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
