// reactbits.d.ts — 官方 react-bits 组件（JS+CSS 变体）的类型声明
// 组件源码保持官方 .jsx 原样不改，此处补充 TS 类型以便在 .tsx 中安全调用。

import type { CSSProperties, ReactNode } from 'react'

export interface LiquidEtherProps {
  colors?: string[]
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  resolution?: number
  dt?: number
  BFECC?: boolean
  isBounce?: boolean
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
  className?: string
  style?: CSSProperties
}
export default function LiquidEther(props: LiquidEtherProps): JSX.Element

export interface TiltedCardProps {
  imageSrc: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  scaleOnHover?: number
  rotateAmplitude?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  displayOverlayContent?: boolean
  overlayContent?: ReactNode
}
export default function TiltedCard(props: TiltedCardProps): JSX.Element

export interface DockItemData {
  icon: ReactNode
  label: string
  onClick?: () => void
  className?: string
}
export interface DockProps {
  items: DockItemData[]
  className?: string
  distance?: number
  panelHeight?: number
  baseItemSize?: number
  dockHeight?: number
  magnification?: number
  spring?: { mass?: number; stiffness?: number; damping?: number }
}
export default function Dock(props: DockProps): JSX.Element

export interface TargetCursorProps {
  targetSelector?: string
  spinDuration?: number
  hideDefaultCursor?: boolean
  hoverDuration?: number
  parallaxOn?: boolean
}
export default function TargetCursor(props: TargetCursorProps): JSX.Element
