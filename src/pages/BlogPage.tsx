// BlogPage — 技术博客
import { PageHeader } from '@/components/PageHeader'

export function BlogPage() {
  return (
    <div>
      <PageHeader title="技术博客" subtitle="Blog" />
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-white/55">团队技术文章与算法笔记，即将上线</p>
      </div>
    </div>
  )
}

export default BlogPage
