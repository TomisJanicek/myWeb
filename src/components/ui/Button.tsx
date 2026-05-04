import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  glow?: boolean
  loading?: boolean
  href?: string
  target?: string
  rel?: string
  children: ReactNode
}

export default function Button({
  variant = 'filled',
  size = 'medium',
  glow = false,
  loading = false,
  href,
  target,
  rel,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const base = 'btn'
  const cls = [
    base,
    `btn--${variant}`,
    `btn--${size}`,
    glow ? 'btn-glow' : '',
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} disabled={disabled || loading} {...props}>
      {loading ? <span className="btn__spinner" /> : null}
      {children}
    </button>
  )
}
