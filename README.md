# 青鸟工作室 · 算法组

> Bluebird Studio Algorithm Team — 湖北师范大学人工智能与计算机学院

## 项目简介

青鸟工作室算法组官方网站，展示团队介绍、荣誉成就、技术博客与招新信息。

## 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **样式**：Tailwind CSS 4
- **动画**：GSAP / motion (Framer Motion)
- **3D**：Three.js / React Three Fiber
- **路由**：React Router v7

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── components/
│   ├── layout/          # Layout / Dock / Footer
│   ├── reactbits/       # 动画组件库
│   └── common/          # 通用组件
├── pages/               # 页面组件
├── data/                # 内容数据
├── App.tsx              # 路由配置
└── main.tsx             # 入口
```

## 页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | Hero + Logo |
| 关于 | `/about` | 团队介绍 + Timeline |
| 荣誉墙 | `/achievements` | ScrollStack 层叠卡片 |
| 博客 | `/blog` | 技术文章 |
| 训练 | `/training` | 训练平台 |
| 加入 | `/join` | 招新信息 |

## 部署

支持静态部署到 Cloudflare Pages / Vercel 等平台。

```bash
npm run build
# 部署 dist/ 目录
```
