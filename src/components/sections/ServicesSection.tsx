import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import IconWrap from '../ui/IconWrap'
import TechTag from '../ui/TechTag'
import MdiIcon from '../ui/MdiIcon'

const servicesMeta = [
  { icon: 'mdi-web', tags: ['Vue.js', 'React', 'TypeScript', 'Node.js'], color: 'var(--color-primary)' },
  { icon: 'mdi-cellphone', tags: ['Kotlin', 'Swift', 'Flutter', 'React Native'], color: 'var(--color-secondary)' },
  { icon: 'mdi-palette-outline', tags: ['Figma', 'Design Systems', 'Prototyping', 'A11y'], color: 'var(--color-primary)' },
]

export default function ServicesSection() {
  const { revealRef } = useScrollReveal()
  const { t } = useTranslation()

  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="services" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--primary" style={{ width: 350, height: 350, top: 60, left: -120 }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">{t('services.label')}</p>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="card-grid card-grid--3">
          {items.map((service, i) => (
            <div key={i} ref={revealRef} className={`reveal reveal-delay-${i + 1}`}>
              <GlassCard className="service-card">
                <div className="service-card__inner">
                  <div className="service-card__top">
                    <IconWrap>
                      <MdiIcon icon={servicesMeta[i].icon} size={26} color={servicesMeta[i].color} />
                    </IconWrap>
                    <span className="service-num">0{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {servicesMeta[i].tags.map(tag => <TechTag key={tag} label={tag} />)}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
