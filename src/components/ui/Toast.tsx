import { useEffect } from 'react'
import MdiIcon from './MdiIcon'

interface ToastProps {
  visible: boolean
  message: string
  icon?: string
  onClose: () => void
  duration?: number
}

export default function Toast({ visible, message, icon, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, duration)
    return () => clearTimeout(t)
  }, [visible, duration, onClose])

  return (
    <div className={`toast ${visible ? 'toast--visible' : ''}`} role="alert" aria-live="polite">
      {icon && <MdiIcon icon={icon} size={20} className="toast__icon" />}
      <span>{message}</span>
      <button className="toast__close" onClick={onClose} aria-label="Zavřít">
        <MdiIcon icon="mdi-close" size={18} />
      </button>
    </div>
  )
}
