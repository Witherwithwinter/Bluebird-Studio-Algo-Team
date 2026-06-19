// App.tsx — 应用根组件
// HashRouter：静态部署（Cloudflare Pages）无需服务端重写规则即可多页路由
// 路由结构：Layout 包裹所有页面（背景/Dock/光标/Footer），页面通过 Outlet 渲染

import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { AchievementsPage } from '@/pages/AchievementsPage'
import { JoinPage } from '@/pages/JoinPage'
import { BlogPage } from '@/pages/BlogPage'
import { TrainingPage } from '@/pages/TrainingPage'

/** 切换路由时回到页面顶部 */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="training" element={<TrainingPage />} />
          {/* 兜底：未知路径回到首页 */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
