import type { ReactNode, CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  gradient?: boolean
  onClick?: () => void
}

export default function GlassCard({ children, className = '', style, gradient = false, onClick }: GlassCardProps) {
  const cls = [gradient ? 'gradient-border-card' : 'glass-card', className].filter(Boolean).join(' ')
  return (
    <div className={cls} style={style} onClick={onClick}>
      {children}
    </div>
  )
}
