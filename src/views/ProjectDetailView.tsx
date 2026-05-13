import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProjectBySlug, projects } from '../data/projects'
import GlassCard from '../components/ui/GlassCard'
import TechTag from '../components/ui/TechTag'
import MdiIcon from '../components/ui/MdiIcon'

const categoryLabel: Record<string, string> = {
  design: 'Design',
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
}

export default function ProjectDetailView() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const project = getProjectBySlug(slug ?? '')

  const otherProjects = project
    ? projects.filter(p => p.slug !== project.slug && p.category === project.category).slice(0, 2)
    : []

  const goBack = () => navigate('/')
  const goToContact = () => navigate('/#contact')

  if (!project) {
    return (
      <div className="project-not-found" style={{ textAlign: 'center', padding: '200px 0 120px' }}>
        <div className="site-container">
          <MdiIcon icon="mdi-alert-circle-outline" size={80} color="var(--color-primary)" style={{ marginBottom: 24 }} />
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: 16 }}>
            {t('projects.notFound.title')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>{t('projects.notFound.desc')}</p>
          <button className="btn btn--outlined btn--medium" onClick={goBack}>
            <MdiIcon icon="mdi-arrow-left" size={18} />
            {t('projects.notFound.back')}
          </button>
        </div>
      </div>
    )
  }

  const desc = t(`projects.items.${project.slug}.description`, { defaultValue: project.title })
  const longDesc = t(`projects.items.${project.slug}.longDescription`, { defaultValue: '' })
  const role = t(`projects.items.${project.slug}.role`, { defaultValue: project.title })
  const client = t(`projects.items.${project.slug}.client`, { defaultValue: '' })
  const features = t(`projects.items.${project.slug}.features`, { returnObjects: true, defaultValue: [] }) as string[]

  return (
    <div className="project-detail">
      {/* Topbar */}
      <div className="project-detail__topbar">
        <div className="site-container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <button className="btn btn--text btn--small" style={{ color: 'rgba(255,255,255,0.5)' }} onClick={goBack}>
            <MdiIcon icon="mdi-arrow-left" size={18} />
            {t('projects.detail.back')}
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="project-detail__hero">
        <div className="deco-blob deco-blob--primary" style={{ width: 400, height: 400, top: -100, right: -80 }} />
        <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="project-detail__hero-inner">
            <div className="project-detail__icon-wrap" style={{ '--accent': project.color } as React.CSSProperties}>
              <MdiIcon icon={project.icon} size={48} color={project.color} />
            </div>

            <div className="project-detail__meta">
              <span className="project-detail__category font-mono">{categoryLabel[project.category]}</span>
              <span className="project-detail__year font-mono">{project.year}</span>
            </div>

            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__subtitle">{desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {project.tags.map(tag => <TechTag key={tag} label={tag} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="project-detail__body">
        <div className="site-container">
          <div className="detail-grid">
            {/* Main */}
            <div className="detail-grid__main">
              <GlassCard style={{ borderRadius: 16 }}>
                <div className="detail-card__inner">
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 20 }}>
                    {t('projects.detail.about')}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                    {longDesc}
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Sidebar */}
            <div className="detail-grid__sidebar">
              <GlassCard style={{ borderRadius: 16 }}>
                <div className="detail-card__inner">
                  <h3 className="detail-sidebar-heading">{t('projects.detail.info')}</h3>
                  {[
                    { label: t('projects.detail.labelRole'), value: role },
                    { label: t('projects.detail.labelClient'), value: client },
                    { label: t('projects.detail.labelYear'), value: project.year },
                    { label: t('projects.detail.labelCategory'), value: categoryLabel[project.category] },
                  ].map((row, i, arr) => (
                    <div key={row.label} className="detail-info-row" style={i === arr.length - 1 ? { borderBottom: 'none', paddingBottom: 0 } : {}}>
                      <span className="detail-info-label font-mono">{row.label}</span>
                      <span className="detail-info-value">{row.value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard style={{ borderRadius: 16 }}>
                <div className="detail-card__inner">
                  <h3 className="detail-sidebar-heading">{t('projects.detail.features')}</h3>
                  <ul className="detail-features">
                    {features.map(feature => (
                      <li key={feature} className="detail-feature-item">
                        <MdiIcon icon="mdi-check-circle" size={16} color="var(--color-primary)" style={{ marginRight: 12, flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Related */}
          {otherProjects.length > 0 && (
            <div className="related-section">
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 32, textAlign: 'center' }}>
                {t('projects.detail.related')} {categoryLabel[project.category]}
              </h2>
              <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 700, margin: '0 auto' }}>
                {otherProjects.map(rp => (
                  <GlassCard
                    key={rp.slug}
                    gradient
                    style={{ borderRadius: 16, cursor: 'pointer', '--accent': rp.color } as React.CSSProperties}
                    onClick={() => navigate(`/project/${rp.slug}`)}
                  >
                    <div className="related-card__visual" style={{ '--accent': rp.color } as React.CSSProperties}>
                      <div className="related-card__icon">
                        <MdiIcon icon={rp.icon} size={28} color={rp.color} />
                      </div>
                      <span className="project-card__category font-mono">{categoryLabel[rp.category]}</span>
                    </div>
                    <div className="related-card__content">
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{rp.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                        {t(`projects.items.${rp.slug}.description`, { defaultValue: rp.title })}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="detail-cta" style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
              {t('projects.detail.cta')}
            </p>
            <button className="btn btn--filled btn--large btn-glow" onClick={goToContact}>
              <MdiIcon icon="mdi-email-outline" size={20} />
              {t('projects.detail.ctaBtn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
