// content.ts — 所有可替换内容集中管理
// 修改本文件即可更新全站文案、数据、链接

export const siteConfig = {
  name: '青鸟工作室 · 算法组',
  nameEn: 'BlueBird Studio · Algorithm Team',
  slogan: '青鸟振翅，算法为翼',
  sloganEn: 'Where Algorithms Take Flight',
  university: '湖北师范大学',
  universityShort: 'HBNU',
  college: '人工智能与计算机学院',
  logo: '/logo.svg',
  year: new Date().getFullYear(),
}

/** 生成一张渐变 SVG 图作为 TiltedCard 的占位图片（避免引入二进制素材） */
export function gradientImage(c1: string, c2: string, label = ''): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${c1}'/>
        <stop offset='100%' stop-color='${c2}'/>
      </linearGradient>
    </defs>
    <rect width='600' height='600' fill='url(#g)'/>
    <circle cx='480' cy='120' r='90' fill='rgba(255,255,255,0.12)'/>
    <circle cx='110' cy='500' r='140' fill='rgba(0,0,0,0.18)'/>
    <text x='300' y='320' font-family='-apple-system,Segoe UI,Microsoft YaHei,sans-serif' font-size='44' font-weight='700' fill='rgba(255,255,255,0.92)' text-anchor='middle'>${label}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

// 导航条目 — Dock 多页路由
export interface NavItem {
  to: string
  label: string
  icon: 'home' | 'about' | 'trophy' | 'code' | 'users' | 'mail' | 'blog' | 'training'
}

export const navItems: NavItem[] = [
  { to: '/', label: '首页', icon: 'home' },
  { to: '/about', label: '关于', icon: 'about' },
  { to: '/achievements', label: '荣誉', icon: 'trophy' },
  { to: '/blog', label: '博客', icon: 'blog' },
  { to: '/training', label: '训练', icon: 'training' },
  { to: '/join', label: '加入', icon: 'mail' },
]

// ABOUT · 关于我们
export const aboutContent = {
  title: '关于我们',
  subtitle: 'About Us',
  paragraphs: [
    '青鸟工作室算法组是湖北师范大学人工智能与计算机学院下属的学生技术团队，专注于算法竞赛、科研探索与开源实践。',
    '我们以天梯赛、传智杯、蓝桥杯等赛事为训练目标，同时开展数据结构、图论、动态规划等方向的课题研究，培养兼具工程能力与学术素养的复合型人才。',
    '团队秉持"以赛促学、以研强能"的理念，为每一位成员提供系统化训练路径、导师指导和项目实战机会。',
  ],
  stats: [
    { label: '团队成员', value: 15, suffix: '+' },
    { label: '竞赛获奖', value: 64, suffix: '+' },
  ],
  timeline: [
    { year: '2023', title: '团队成立', desc: '由计算机学院竞赛爱好者发起组建' },
    { year: '2025', title: '蓝桥杯夺得佳绩', desc: '一位成员获蓝桥杯国赛二等奖' },
    { year: '2026', title: '蓝桥杯再创佳绩', desc: '3位成员获得蓝桥杯国赛三等奖' },
  ],
}

// ACHIEVEMENTS · 荣誉墙
export interface Achievement {
  title: string
  contest: string
  year: string
  level: string
  image: string
}

export const achievements: Achievement[] = [
  { title: 'ICPC 亚洲区域赛', contest: 'International Collegiate Programming Contest', year: '2025', level: 'Honorable Mention', image: gradientImage('#f97316', '#ef4444', 'ICPC') },
  { title: 'CCPC 中国大学生程序设计竞赛', contest: 'China Collegiate Programming Contest', year: '2025', level: 'Honorable Mention', image: gradientImage('#0ea5e9', '#6366f1', 'CCPC') },
  { title: '蓝桥杯全国总决赛', contest: 'Lanqiao Cup National Finals', year: '2025', level: '全国二等奖', image: gradientImage('#10b981', '#14b8a6', '蓝桥杯') },
  { title: '团体程序设计天梯赛', contest: 'Group Programming Ladder Tournament', year: '2025', level: '全国三等奖', image: gradientImage('#8b5cf6', '#d946ef', '天梯赛') },
]

// PROJECTS · 项目展示
export interface Project {
  name: string
  description: string
  tags: string[]
  stars: number
  github: string
  image: string
}

export const projects: Project[] = [
  { name: 'BlueOJ', description: '团队自研在线评测系统，支持特判、子任务与防作弊，服务于校内算法训练。', tags: ['React', 'Go', 'Docker', 'PostgreSQL'], stars: 286, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/blue-oj', image: gradientImage('#3b82f6', '#06b6d4', 'BlueOJ') },
  { name: 'GraphKit', description: '高性能图算法工具库，涵盖最短路、匹配、流网络等百余种经典算法的 TypeScript 实现。', tags: ['TypeScript', 'WASM', 'Vite'], stars: 412, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/graph-kit', image: gradientImage('#8b5cf6', '#a855f7', 'GraphKit') },
  { name: 'LintBlue', description: '面向竞赛代码的静态分析工具，自动检测常见错误、复杂度与潜在 bug。', tags: ['Python', 'LLVM', 'Clang'], stars: 158, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/lint-blue', image: gradientImage('#10b981', '#22c55e', 'LintBlue') },
  { name: 'DeepFlight', description: '基于扩散模型的航线优化研究项目，已在 SCI 期刊发表阶段性成果。', tags: ['PyTorch', 'CUDA', 'DGL'], stars: 97, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/deep-flight', image: gradientImage('#f59e0b', '#f97316', 'DeepFlight') },
  { name: 'AlgoBook', description: '团队算法笔记与题解合集，覆盖 ICPC 知识图谱，Star 数持续增长。', tags: ['Markdown', 'VitePress', 'LaTeX'], stars: 1024, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/algo-book', image: gradientImage('#f43f5e', '#ec4899', 'AlgoBook') },
  { name: 'TrainHub', description: '团队训练组织平台，包含组队匹配、题单管理与战绩追踪功能。', tags: ['Next.js', 'Prisma', 'tRPC'], stars: 73, github: 'https://github.com/Witherwithwinter/Bluebird-Studio-Algo-Team/train-hub', image: gradientImage('#0ea5e9', '#6366f1', 'TrainHub') },
]

// MEMBERS · 团队成员
export interface Member {
  name: string
  role: string
  focus: string
  github: string
  image: string
}

export const members: Member[] = [
  { name: '陈青鸟', role: '队长', focus: '动态规划 · ICPC', github: '#', image: gradientImage('#3b82f6', '#22d3ee', '陈') },
  { name: '林算法', role: '副队长', focus: '图论 · 数论', github: '#', image: gradientImage('#8b5cf6', '#e879f9', '林') },
  { name: '苏离', role: '竞赛组组长', focus: '数据结构 · 字符串', github: '#', image: gradientImage('#10b981', '#2dd4bf', '苏') },
  { name: '周明', role: '科研组组长', focus: '深度学习 · NLP', github: '#', image: gradientImage('#f59e0b', '#fb923c', '周') },
  { name: '赵晓', role: '核心成员', focus: '计算几何', github: '#', image: gradientImage('#f43f5e', '#f472b6', '赵') },
  { name: '吴衡', role: '核心成员', focus: '机器学习', github: '#', image: gradientImage('#0ea5e9', '#818cf8', '吴') },
  { name: '郑渊', role: '核心成员', focus: '密码学 · 区块链', github: '#', image: gradientImage('#a855f7', '#c084fc', '郑') },
  { name: '王予', role: '工程负责人', focus: '全栈 · DevOps', github: '#', image: gradientImage('#14b8a6', '#34d399', '王') },
]

// JOIN · 加入我们
export const joinContent = {
  title: '加入我们',
  subtitle: 'Join Us',
  cta: '青鸟振翅，与你同行',
  description: '无论你是刚入门的新生，还是已有竞赛经验的老手，算法组都欢迎你的加入。',
  requirements: [
    { title: '热爱算法', desc: '对解决问题有持续热情，愿意投入时间训练与思考' },
    { title: '基础扎实', desc: '掌握一门编程语言，了解基本数据结构与算法' },
    { title: '团队精神', desc: '乐于分享、协作，能够参与日常训练与组队赛事' },
    { title: '持续成长', desc: '保持学习心态，愿意在竞赛或科研方向深耕' },
  ],
  contacts: [
    { label: 'QQ 招新群', value: '123456789', icon: 'qq' as const },
    { label: '招新邮箱', value: '1803655725@qq.com', icon: 'mail' as const },
    { label: '项目地址', value: 'github.com/Witherwithwinter/Bluebird-Studio-Algo-Team', icon: 'github' as const },
  ],
}
