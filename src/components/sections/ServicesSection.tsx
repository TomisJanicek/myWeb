import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import IconWrap from '../ui/IconWrap'
import TechTag from '../ui/TechTag'
import MdiIcon from '../ui/MdiIcon'

interface Service {
  icon: string
  title: string
  description: string
  tags: string[]
  color: string
}

const services: Service[] = [
  {
    icon: 'mdi-web',
    title: 'Webové aplikace',
    description: 'Moderní, rychlé a responzivní webové aplikace postavené na nejnovějších technologiích. Od landing pages po komplexní SaaS řešení.',
    tags: ['Vue.js', 'React', 'TypeScript', 'Node.js'],
    color: 'var(--color-primary)',
  },
  {
    icon: 'mdi-cellphone',
    title: 'Mobilní aplikace',
    description: 'Nativní i cross-platform mobilní aplikace pro Android a iOS. Důraz na výkon, UX a bezproblémovou integraci s backendem.',
    tags: ['Kotlin', 'Swift', 'Flutter', 'React Native'],
    color: 'var(--color-secondary)',
  },
  {
    icon: 'mdi-palette-outline',
    title: 'UX/UI Design',
    description: 'Uživatelsky přívětivý design, který vypadá skvěle a funguje intuitivně. Wireframing, prototyping a kompletní design systémy.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'A11y'],
    color: 'var(--color-primary)',
  },
]

export default function ServicesSection() {
  const { revealRef } = useScrollReveal()

  return (
    <section id="services" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--primary" style={{ width: 350, height: 350, top: 60, left: -120 }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">// co dělám</p>
          <h2 className="section-title">Služby na míru</h2>
          <p className="section-subtitle">Kompletní vývoj digitálních produktů — od prvního náčrtu až po nasazení do produkce.</p>
        </div>

        <div className="card-grid card-grid--3">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={revealRef}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <GlassCard className="service-card">
                <div className="service-card__inner">
                  <div className="service-card__top">
                    <IconWrap>
                      <MdiIcon icon={service.icon} size={26} color={service.color} />
                    </IconWrap>
                    <span className="service-num">0{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {service.tags.map(tag => <TechTag key={tag} label={tag} />)}
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
