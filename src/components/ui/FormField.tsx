import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react'
import MdiIcon from './MdiIcon'

interface BaseFieldProps {
  label: string
  icon?: string
  error?: string
  className?: string
}

type FormFieldProps =
  | (BaseFieldProps & InputHTMLAttributes<HTMLInputElement> & { as?: 'input' })
  | (BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' })
  | (BaseFieldProps & SelectHTMLAttributes<HTMLSelectElement> & { as: 'select'; children: ReactNode })

export default function FormField(props: FormFieldProps) {
  const { label, icon, error, as, className = '' } = props

  const wrapCls = `form-field ${error ? 'form-field--error' : ''} ${className}`.trim()

  return (
    <div className={wrapCls}>
      <label className="form-field__label">
        {icon && <MdiIcon icon={icon} size={18} className="form-field__icon" />}
        <span className="form-field__label-text">{label}</span>
      </label>
      {as === 'textarea' ? (
        <textarea
          className="form-field__control form-field__control--textarea"
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === 'select' ? (
        <select
          className="form-field__control form-field__control--select"
          {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          {(props as { children: ReactNode }).children}
        </select>
      ) : (
        <input
          className="form-field__control"
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <p className="form-field__error">{error}</p>}
    </div>
  )
}
