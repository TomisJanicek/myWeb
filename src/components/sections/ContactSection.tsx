import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import IconWrap from '../ui/IconWrap'
import FormField from '../ui/FormField'
import Toast from '../ui/Toast'
import MdiIcon from '../ui/MdiIcon'

const contactInfo = [
  { icon: 'mdi-email-outline', label: 'E-mail', value: 'hello@tomasjanicek.cz' },
  { icon: 'mdi-map-marker-outline', label: 'Lokace', value: 'Česká republika' },
  { icon: 'mdi-clock-outline', label: 'Odezva', value: 'Do 24 hodin' },
]

const projectTypes = ['Webová aplikace', 'Mobilní aplikace', 'UX/UI Design', 'Konzultace', 'Jiné']

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

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Toto pole je povinné'
  if (!data.email.trim()) errors.email = 'Toto pole je povinné'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Zadejte platný e-mail'
  if (!data.projectType) errors.projectType = 'Toto pole je povinné'
  if (!data.message.trim()) errors.message = 'Toto pole je povinné'
  return errors
}

export default function ContactSection() {
  const { revealRef } = useScrollReveal()
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', projectType: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)
    if (touched[field]) {
      setErrors(validate(updated))
    }
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
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            message: formData.message,
          }),
        })
        if (!res.ok) throw new Error('send_failed')
      } else {
        // Dev fallback — simulace
        await new Promise(resolve => setTimeout(resolve, 1200))
      }
      setShowSuccess(true)
      setFormData({ name: '', email: '', projectType: '', message: '' })
      setTouched({})
      setErrors({})
    } catch {
      setErrors(prev => ({ ...prev, message: 'Odeslání selhalo. Zkuste to prosím znovu.' }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--secondary" style={{ width: 350, height: 350, top: '15%', left: -100 }} />

      <Toast
        visible={showSuccess}
        message="Zpráva byla úspěšně odeslána! Ozvu se co nejdříve."
        icon="mdi-check-circle"
        onClose={() => setShowSuccess(false)}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">// pojďme spolupracovat</p>
          <h2 className="section-title">Napište mi</h2>
          <p className="section-subtitle">Máte nápad na projekt? Ať už jde o web, appku nebo design — rád vám pomůžu.</p>
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
                    <p style={{ color: 'var(--color-primary)' }}>Dostupný pro spolupráci</p>
                    <p>&gt; stack</p>
                    <p style={{ color: 'rgba(179,136,255,0.8)' }}>React, Kotlin, Swift, Figma</p>
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
                      label="Jméno"
                      icon="mdi-account-outline"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      error={touched.name ? errors.name : undefined}
                      autoComplete="name"
                    />
                    <FormField
                      label="E-mail"
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
                      label="Typ projektu"
                      icon="mdi-folder-outline"
                      value={formData.projectType}
                      onChange={e => handleChange('projectType', e.target.value)}
                      onBlur={() => handleBlur('projectType')}
                      error={touched.projectType ? errors.projectType : undefined}
                    >
                      <option value="" disabled>Vyberte typ projektu</option>
                      {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </FormField>
                  </div>

                  <div className="form-row">
                    <FormField
                      as="textarea"
                      label="Popis projektu"
                      icon="mdi-message-outline"
                      rows={5}
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      error={touched.message ? errors.message : undefined}
                      placeholder="Popište váš projekt..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--filled btn-glow form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? <><span className="btn__spinner" /> Odesílám…</>
                      : <><MdiIcon icon="mdi-send" size={18} /> Odeslat poptávku</>
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
