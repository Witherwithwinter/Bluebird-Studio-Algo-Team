// Layout — 全站布局
// 三层结构（同 DESIGN.md）：Galaxy 背景(z-0) + 页面内容(z-10) + Dock(z-50) + 光标(z-9999)
// 每个页面通过 <Outlet /> 渲染

import { Outlet, useLocation } from 'react-router-dom'
import Galaxy from '@/components/reactbits/Galaxy'
import TargetCursor from '@/components/reactbits/TargetCursor'
import { DockNavBar } from './DockNavBar'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-white">
      {/* 背景层：Galaxy 星空 */}
      <div className="fixed inset-0 z-0">
        <Galaxy />
      </div>

      {/* 内容层 */}
      <div className={`relative z-10 ${location.pathname === '/' ? 'pb-32' : ''}`}>
        <Outlet />
        {location.pathname === '/' && <Footer />}
      </div>

      {/* 导航层：Dock */}
      <DockNavBar />

      {/* 光标层 */}
      <TargetCursor
        targetSelector=".cursor-target, a, button, [role='button']"
        resetKey={location.pathname}
      />
    </main>
  )
}

export default Layout
