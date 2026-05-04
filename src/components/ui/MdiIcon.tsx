import type { CSSProperties } from 'react'

interface MdiIconProps {
  icon: string
  size?: number | string
  color?: string
  className?: string
  style?: CSSProperties
}

export default function MdiIcon({ icon, size = 24, color, className = '', style }: MdiIconProps) {
  return (
    <i
      className={`mdi ${icon} ${className}`}
      style={{ fontSize: size, color, lineHeight: 1, display: 'inline-flex', alignItems: 'center', ...style }}
      aria-hidden="true"
    />
  )
}
