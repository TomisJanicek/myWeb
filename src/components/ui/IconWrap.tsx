import type { ReactNode, CSSProperties } from 'react'

interface IconWrapProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function IconWrap({ children, className = '', style }: IconWrapProps) {
  return <div className={`icon-wrap ${className}`} style={style}>{children}</div>
}
