import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import GlassCard from '../ui/GlassCard'
import TechTag from '../ui/TechTag'
import MdiIcon from '../ui/MdiIcon'
import { projects, categoryLabel } from '../../data/projects'

type FilterType = 'all' | 'design' | 'android' | 'ios' | 'web'

const filters: { value: FilterType; label: string; icon: string }[] = [
  { value: 'all', label: 'Vše', icon: 'mdi-view-grid-outline' },
  { value: 'design', label: 'Design', icon: 'mdi-palette-outline' },
  { value: 'android', label: 'Android', icon: 'mdi-android' },
  { value: 'ios', label: 'iOS', icon: 'mdi-apple' },
  { value: 'web', label: 'Web', icon: 'mdi-web' },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const navigate = useNavigate()
  const { revealRef } = useScrollReveal()

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="deco-blob deco-blob--secondary" style={{ width: 400, height: 400, top: '20%', right: -140 }} />
      <div className="deco-blob deco-blob--primary" style={{ width: 300, height: 300, bottom: '10%', left: -100 }} />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={revealRef} className="section-header reveal">
          <p className="section-label">// moje práce</p>
          <h2 className="section-title">Vybrané projekty</h2>
          <p className="section-subtitle">Ukázky z mého portfolia napříč designem, mobilním vývojem a webovými aplikacemi.</p>
        </div>

        <div ref={revealRef} className="reveal filters-row">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              <MdiIcon icon={filter.icon} size={16} />
              {filter.label}
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
                  <span className="project-card__category font-mono">{categoryLabel[project.category]}</span>
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map(tag => <TechTag key={tag} label={tag} />)}
                  </div>
                  <span className="project-link">
                    Zobrazit detail
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
