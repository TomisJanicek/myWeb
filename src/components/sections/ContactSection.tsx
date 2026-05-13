import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import IconWrap from '../ui/IconWrap'
import FormField from '../ui/FormField'
import Toast from '../ui/Toast'
import MdiIcon from '../ui/MdiIcon'

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}

export default function ContactSection() {
  const { revealRef } = useScrollReveal()
  const { t } = useTranslation()

  const projectTypes = t('contact.types', { returnObjects: true }) as string[]

  const contactInfo = [
    { icon: 'mdi-email-outline', label: t('contact.infoEmail'), value: 'info@tomasjanicek.eu' },
    { icon: 'mdi-map-marker-outline', label: t('contact.infoLocation'), value: t('contact.infoLocationVal') },
    { icon: 'mdi-clock-outline', label: t('contact.infoResponse'), value: t('contact.infoResponseVal') },
  ]

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', projectType: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {}
    if (!data.name.trim()) errs.name = t('contact.errRequired')
    if (!data.email.trim()) errs.email = t('contact.errRequired')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = t('contact.errEmail')
    if (!data.projectType) errs.projectType = t('contact.errRequired')
    if (!data.message.trim()) errs.message = t('contact.errRequired')
    return errs
  }

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)
    if (touched[field]) setErrors(validate(updated))
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(t => ({ ...t, [field]: true }))
    setErrors(validate(formData))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, projectType: true, message: true }
    setTouched(allTouched)
    const errs = validate(formData)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setIsSubmitting(true)
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('send_failed')
      } else {
        await new Promise(resolve => setTimeout(resolve, 1200))
      }
      setShowSuccess(true)
      setFormData({ name: '', email: '', projectType: '', message: '' })
      setTouched({})
      setErrors({})
    } catch {
      setErrors(prev => ({ ...prev, message: t('contact.errSend') }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--secondary" style={{ width: 350, height: 350, top: '15%', left: -100 }} />

      <Toast
        visible={showSuccess}
        message={t('contact.successMsg')}
        icon="mdi-check-circle"
        onClose={() => setShowSuccess(false)}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">{t('contact.label')}</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-layout">
          {/* Sidebar */}
          <div ref={revealRef} className="reveal reveal-delay-1">
            <GlassCard className="contact-sidebar-card">
              <div className="contact-sidebar-inner">
                {contactInfo.map((info, i) => (
                  <div key={info.label} className="contact-info-item" style={i === contactInfo.length - 1 ? { marginBottom: 0 } : {}}>
                    <IconWrap style={{ marginBottom: 12 }}>
                      <MdiIcon icon={info.icon} size={22} color="var(--color-primary)" />
                    </IconWrap>
                    <p className="contact-info-label">{info.label}</p>
                    <p className="contact-info-value">{info.value}</p>
                  </div>
                ))}

                <div className="contact-terminal">
                  <div className="contact-terminal__dots">
                    <span className="contact-terminal__dot contact-terminal__dot--red" />
                    <span className="contact-terminal__dot contact-terminal__dot--yellow" />
                    <span className="contact-terminal__dot contact-terminal__dot--green" />
                  </div>
                  <div className="contact-terminal__body">
                    <p>&gt; status</p>
                    <p style={{ color: 'var(--color-primary)' }}>{t('contact.terminalStatus')}</p>
                    <p>&gt; stack</p>
                    <p style={{ color: 'rgba(179,136,255,0.8)' }}>{t('contact.terminalStack')}</p>
                    <p className="contact-terminal__cursor">&gt;</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form */}
          <div ref={revealRef} className="reveal reveal-delay-2">
            <GlassCard className="contact-form-card">
              <div className="contact-form-inner">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-name-email">
                    <FormField
                      label={t('contact.labelName')}
                      icon="mdi-account-outline"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      error={touched.name ? errors.name : undefined}
                      autoComplete="name"
                    />
                    <FormField
                      label={t('contact.labelEmail')}
                      icon="mdi-email-outline"
                      type="email"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      error={touched.email ? errors.email : undefined}
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-row">
                    <FormField
                      as="select"
                      label={t('contact.labelType')}
                      icon="mdi-folder-outline"
                      value={formData.projectType}
                      onChange={e => handleChange('projectType', e.target.value)}
                      onBlur={() => handleBlur('projectType')}
                      error={touched.projectType ? errors.projectType : undefined}
                    >
                      <option value="" disabled>{t('contact.placeholderType')}</option>
                      {projectTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </FormField>
                  </div>

                  <div className="form-row">
                    <FormField
                      as="textarea"
                      label={t('contact.labelMessage')}
                      icon="mdi-message-outline"
                      rows={5}
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      error={touched.message ? errors.message : undefined}
                      placeholder={t('contact.placeholderMessage')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--filled btn-glow form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? <><span className="btn__spinner" /> {t('contact.submitting')}</>
                      : <><MdiIcon icon="mdi-send" size={18} /> {t('contact.submit')}</>
                    }
                  </button>
                </form>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
