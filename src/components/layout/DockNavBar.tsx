// DockNavBar — 基于官方 Dock 组件的多页路由导航
// 点击图标跳转到对应页面路由，当前页图标高亮
// 固定在屏幕底部居中

import { useLocation, useNavigate } from 'react-router-dom'
import { Home, Info, Trophy, Code2, Users, Mail, BookOpen, Target } from 'lucide-react'
import Dock from '@/components/reactbits/Dock'
import { navItems } from '@/data/content'

const iconMap = {
  home: Home,
  about: Info,
  trophy: Trophy,
  code: Code2,
  users: Users,
  mail: Mail,
  blog: BookOpen,
  training: Target,
} as const

export function DockNavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const items = navItems.map((item) => {
    const Icon = iconMap[item.icon]
    const active = location.pathname === item.to
    return {
      label: item.label,
      className: active ? 'dock-item-active' : '',
      onClick: () => navigate(item.to),
      icon: <Icon size={22} strokeWidth={1.5} color={active ? '#7c3aed' : '#fff'} />,
    }
  })

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full">
      <Dock
        items={items}
        baseItemSize={46}
        magnification={64}
        panelHeight={62}
        resetKey={location.pathname}
      />
    </div>
  )
}

export default DockNavBar
