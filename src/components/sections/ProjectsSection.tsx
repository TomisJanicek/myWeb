import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import TechTag from '../ui/TechTag'
import MdiIcon from '../ui/MdiIcon'
import { projects } from '../../data/projects'

type FilterType = 'all' | 'design' | 'android' | 'ios' | 'web'

const filtersMeta: { value: FilterType; icon: string }[] = [
  { value: 'all', icon: 'mdi-view-grid-outline' },
  { value: 'design', icon: 'mdi-palette-outline' },
  { value: 'android', icon: 'mdi-android' },
  { value: 'ios', icon: 'mdi-apple' },
  { value: 'web', icon: 'mdi-web' },
]

const filterLabels: Record<FilterType, string> = {
  all: 'filterAll',
  design: 'Design',
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const navigate = useNavigate()
  const { revealRef } = useScrollReveal()
  const { t, i18n } = useTranslation()

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const getDesc = (slug: string) =>
    t(`projects.items.${slug}.description`, { defaultValue: '' })

  const getCategoryLabel = (cat: string) => {
    const map: Record<string, string> = { design: 'Design', android: 'Android', ios: 'iOS', web: 'Web' }
    return map[cat] ?? cat
  }

  const getFilterLabel = (f: { value: FilterType }) =>
    f.value === 'all' ? t('projects.filterAll') : filterLabels[f.value]

  void i18n

  return (
    <section id="projects" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--secondary" style={{ width: 400, height: 400, top: '20%', right: -140 }} />
      <div className="deco-blob deco-blob--primary" style={{ width: 300, height: 300, bottom: '10%', left: -100 }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">{t('projects.label')}</p>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        <div ref={revealRef} className="reveal filters-row">
          {filtersMeta.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              <MdiIcon icon={filter.icon} size={16} />
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.slug} className="project-card-wrapper">
              <GlassCard
                gradient
                className="project-card"
                style={{ '--accent': project.color } as React.CSSProperties}
                onClick={() => navigate(`/project/${project.slug}`)}
              >
                <div className="project-card__visual">
                  <div className="project-card__icon-wrap">
                    <MdiIcon icon={project.icon} size={34} color={project.color} />
                  </div>
                  <span className="project-card__category font-mono">{getCategoryLabel(project.category)}</span>
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{getDesc(project.slug)}</p>
                  <div className="project-card__tags">
                    {project.tags.map(tag => <TechTag key={tag} label={tag} />)}
                  </div>
                  <span className="project-link">
                    {t('projects.showDetail')}
                    <MdiIcon icon="mdi-arrow-right" size={16} className="project-link__arrow" />
                  </span>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
