// JoinPage — 加入我们
// 底 FallingText 全屏洒落 | 左 联系方式 | 右 CardSwap 轮换

import { Mail, MessageCircle, Check } from 'lucide-react'
import { GithubIcon } from '@/components/common/GithubIcon'
import FallingText from '@/components/reactbits/FallingText'
import CardSwap, { Card } from '@/components/reactbits/CardSwap'
import { joinContent } from '@/data/content'

const iconMap = {
  qq: MessageCircle,
  mail: Mail,
  github: GithubIcon,
} as const

const algoText = `二分查找 动态规划 贪心算法 DFS BFS Dijkstra KMP 并查集 线段树 树状数组 哈希表 红黑树 AVL 拓扑排序 最短路 最小生成树 背包问题 快速排序 归并排序 堆排序 图论 字符串匹配 网络流 凸包 扫描线 分治 回溯 状态压缩 前缀和 差分 双指针 滑动窗口 单调栈 单调队列 Trie 后缀数组 AC自动机 LCA RMQ 欧拉回路 匈牙利算法 Prim Kruskal Floyd-Warshall Bellman-Ford SPFA Tarjan 强连通分量 最大流 最小割 二分图匹配 最近公共祖先 树链剖分 点分治 舞蹈链 数位DP 概率DP 期望DP 高斯消元 快速幂 欧拉筛 莫比乌斯反演 BSGS 扩展欧几里得 CRT 多项式 NTT FFT`

const highlightWords = [
  '动态规划', '贪心算法', 'DFS', 'BFS', 'Dijkstra', 'KMP', '并查集',
  '线段树', '树状数组', '哈希表', '红黑树', 'AVL', '拓扑排序',
  '最短路', '最小生成树', '快速排序', '归并排序', '堆排序',
  '滑动窗口', '单调栈', '单调队列', 'Trie', '后缀数组', 'AC自动机',
  'LCA', 'RMQ', '欧拉回路', '匈牙利算法', '二分查找'
]

export function JoinPage() {
  return (
    <>
      {/* 底层：FallingText 全屏洒落 */}
      <div className="fixed inset-0 z-0">
        <FallingText
          text={algoText}
          highlightWords={highlightWords}
          highlightClass="highlighted"
          trigger="auto"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.3}
          fontSize="1.1rem"
          mouseConstraintStiffness={0.6}
        />
      </div>

      {/* 中层：联系方式 + CardSwap */}
      <div className="pointer-events-none fixed inset-0 z-20 flex items-start pt-24">
        <div className="pointer-events-auto flex w-64 flex-col px-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-bold text-white">联系我们</h3>
            <div className="space-y-4">
              {joinContent.contacts.map((c) => {
                const Icon = iconMap[c.icon]
                const isQQ = c.label.includes('QQ')
                return (
                  <div
                    key={c.label}
                    className={`flex items-center gap-3 ${isQQ ? '' : 'cursor-pointer transition-colors hover:bg-white/5 rounded-lg -mx-1 px-1 py-0.5'}`}
                    onClick={() => {
                      if (!isQQ) navigator.clipboard.writeText(c.value)
                    }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/40">{c.label}</div>
                      <div className={`text-sm ${isQQ ? 'text-white/40' : 'text-white/55'}`}>
                        {isQQ ? '待更新' : '点击复制'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="pointer-events-auto flex w-[440px] items-start justify-center pt-24">
          <CardSwap
            width={320}
            height={200}
            cardDistance={30}
            verticalDistance={24}
            delay={4000}
            pauseOnHover={true}
            skewAmount={3}
          >
            {joinContent.requirements.map((r) => (
              <Card key={r.title}>
                <div className="flex h-full flex-col justify-center rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm text-white">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1a56db] to-[#7c3aed]">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{r.desc}</p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

    </>
  )
}

export default JoinPage
