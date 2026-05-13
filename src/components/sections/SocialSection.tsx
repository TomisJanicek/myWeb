import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import MdiIcon from '../ui/MdiIcon'

const socialLinks = [
  { icon: 'mdi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/tomas-janicek/', color: '#0A66C2', handle: '@tomas-janicek' },
  { icon: 'mdi-github', label: 'GitHub', url: 'https://github.com/TomisJanicek', color: '#E0E0E0', handle: '@TomisJanicek' },
  { icon: 'mdi-twitter', label: 'X / Twitter', url: 'https://x.com/tomasjanicek', color: '#1DA1F2', handle: '@tomasjanicek' },
  { icon: 'mdi-instagram', label: 'Instagram', url: 'https://instagram.com/tomasjanicek', color: '#E4405F', handle: '@tomasjanicek' },
]

export default function SocialSection() {
  const { revealRef } = useScrollReveal()
  const { t } = useTranslation()

  return (
    <section id="social" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--primary" style={{ width: 300, height: 300, bottom: -60, right: '10%' }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">{t('social.label')}</p>
          <h2 className="section-title">{t('social.title')}</h2>
          <p className="section-subtitle">{t('social.subtitle')}</p>
        </div>

        <div className="card-grid card-grid--4">
          {socialLinks.map((link, i) => (
            <div
              key={link.label}
              ref={revealRef}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-link"
              >
                <div
                  className="social-card glass-card"
                  style={{ '--card-color': link.color } as React.CSSProperties}
                >
                  <div className="social-card__icon-ring">
                    <MdiIcon icon={link.icon} size={28} color={link.color} />
                  </div>
                  <h3 className="social-card__title">{link.label}</h3>
                  <p className="social-card__handle">{link.handle}</p>
                  <MdiIcon icon="mdi-arrow-top-right" size={14} className="social-card__arrow" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
