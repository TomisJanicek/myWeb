import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GlassCard from '../components/ui/GlassCard'
import IconWrap from '../components/ui/IconWrap'
import TechTag from '../components/ui/TechTag'
import MdiIcon from '../components/ui/MdiIcon'

const skills = [
  { category: 'Mobilní', categoryEn: 'Mobile', tags: ['Kotlin', 'Swift', 'Android Jetpack', 'SwiftUI', 'Flutter'] },
  { category: 'Web', categoryEn: 'Web', tags: ['React', 'Vue.js', 'TypeScript', 'Node.js', 'Vite'] },
  { category: 'Design', categoryEn: 'Design', tags: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'] },
  { category: 'Nástroje', categoryEn: 'Tools', tags: ['Git', 'CI/CD', 'Firebase', 'Supabase', 'Vercel'] },
]

const timelineIcons = [
  'mdi-school-outline',
  'mdi-certificate-outline',
  'mdi-rocket-launch-outline',
  'mdi-briefcase-outline',
]

const timelineColors = [
  'var(--color-secondary)',
  'var(--color-primary)',
  'var(--color-secondary)',
  'var(--color-primary)',
]

export default function AboutView() {
  const navigate = useNavigate()
  const { revealRef } = useScrollReveal()
  const { t, i18n } = useTranslation()

  const isEn = i18n.language === 'en'

  const timeline = t('about.timeline', { returnObjects: true }) as {
    year: string; title: string; desc: string
  }[]

  const businessInfo = [
    { icon: 'mdi-email-outline', label: t('about.bizEmail'), value: 'info@tomasjanicek.eu', href: 'mailto:info@tomasjanicek.eu' },
    { icon: 'mdi-office-building-outline', label: t('about.bizIco'), value: '09659153', href: null },
    { icon: 'mdi-map-marker-outline', label: t('about.bizLocation'), value: t('about.bizLocationVal'), href: null },
    { icon: 'mdi-file-document-outline', label: t('about.bizForm'), value: t('about.bizFormVal'), href: null },
  ]

  useEffect(() => {
    document.title = t('about.metaTitle')
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t('about.metaDesc'))
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/o-mne')
    document.documentElement.lang = i18n.language
    return () => {
      document.title = isEn
        ? 'Tomáš Janíček — IT Freelancer | Design, Android, iOS, Web'
        : 'Tomáš Janíček — IT Freelancer | Design, Android, iOS, Web'
      if (desc) desc.setAttribute('content', isEn
        ? 'Tomáš Janíček — IT freelancer from the Czech Republic. Web & mobile app development (Android, iOS), UX/UI design. Company ID 09659153. Write to info@tomasjanicek.eu.'
        : 'Tomáš Janíček — IT freelancer z ČR. Tvorba webových a mobilních aplikací (Android, iOS), UX/UI design na zakázku. IČO 09659153. Napište na info@tomasjanicek.eu.')
      if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/')
    }
  }, [t, i18n.language, isEn])

  return (
    <div className="about-page">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="about-hero section-padding">
        <div className="deco-blob deco-blob--primary" style={{ width: 500, height: 500, top: -100, right: -150 }} />
        <div className="deco-blob deco-blob--secondary" style={{ width: 350, height: 350, bottom: -60, left: -80 }} />
        <div className="hero-grid" aria-hidden="true" />

        <div className="site-container about-hero__inner" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={revealRef} className="reveal about-hero__text">
            <p className="section-label">{t('about.heroLabel')}</p>
            <h1 className="about-hero__title">
              {t('about.heroTitle')}{' '}
              <span className="text-gradient">{t('about.heroName')}</span>
            </h1>
            <p className="about-hero__subtitle">{t('about.heroSubtitle')}</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
              <button className="btn btn--filled btn--large btn-glow" onClick={() => navigate('/#contact')}>
                <MdiIcon icon="mdi-email-outline" size={20} />
                {t('about.ctaContact')}
              </button>
              <button className="btn btn--outlined btn--large" onClick={() => navigate('/#projects')}>
                <MdiIcon icon="mdi-briefcase-outline" size={20} />
                {t('about.ctaProjects')}
              </button>
            </div>
          </div>

          <div ref={revealRef} className="reveal reveal-delay-2 about-hero__card">
            <GlassCard>
              <div className="about-stats-card">
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">5+</span>
                  <span className="about-stat__label">{t('about.statYears')}</span>
                </div>
                <div className="about-stat__divider" />
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">20+</span>
                  <span className="about-stat__label">{t('about.statProjects')}</span>
                </div>
                <div className="about-stat__divider" />
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">4</span>
                  <span className="about-stat__label">{t('about.statPlatforms')}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── Bio ──────────────────────────────────── */}
      <section className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="site-container">
          <div ref={revealRef} className="section-header reveal">
            <p className="section-label">{t('about.bioLabel')}</p>
            <h2 className="section-title">{t('about.bioTitle')}</h2>
          </div>

          <div className="about-bio-grid">
            <div ref={revealRef} className="reveal reveal-delay-1">
              <GlassCard>
                <div className="about-bio-card">
                  <div className="about-bio-card__icon">
                    <MdiIcon icon="mdi-account-circle-outline" size={36} color="var(--color-primary)" />
                  </div>
                  <h3 className="about-bio-card__title">{t('about.bio1Title')}</h3>
                  <p className="about-bio-card__text">{t('about.bio1p1')}</p>
                  <p className="about-bio-card__text">{t('about.bio1p2')}</p>
                </div>
              </GlassCard>
            </div>

            <div ref={revealRef} className="reveal reveal-delay-2">
              <GlassCard>
                <div className="about-bio-card">
                  <div className="about-bio-card__icon">
                    <MdiIcon icon="mdi-code-braces" size={36} color="var(--color-secondary)" />
                  </div>
                  <h3 className="about-bio-card__title">{t('about.bio2Title')}</h3>
                  <p className="about-bio-card__text">{t('about.bio2p1')}</p>
                  <p className="about-bio-card__text">{t('about.bio2p2')}</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────── */}
      <section className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="deco-blob deco-blob--primary" style={{ width: 350, height: 350, top: '20%', right: -100 }} />
        <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={revealRef} className="section-header reveal">
            <p className="section-label">{t('about.timelineLabel')}</p>
            <h2 className="section-title">{t('about.timelineTitle')}</h2>
          </div>

          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={i} ref={revealRef} className={`reveal reveal-delay-${i + 1} about-timeline__item`}>
                <div className="about-timeline__left">
                  <span className="about-timeline__year font-mono">{item.year}</span>
                </div>
                <div className="about-timeline__connector">
                  <div className="about-timeline__dot" style={{ borderColor: timelineColors[i] }}>
                    <MdiIcon icon={timelineIcons[i]} size={16} color={timelineColors[i]} />
                  </div>
                  {i < timeline.length - 1 && <div className="about-timeline__line" />}
                </div>
                <div className="about-timeline__right">
                  <GlassCard>
                    <div className="about-timeline__card">
                      <h3 className="about-timeline__title">{item.title}</h3>
                      <p className="about-timeline__desc">{item.desc}</p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────── */}
      <section className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="deco-blob deco-blob--secondary" style={{ width: 400, height: 400, bottom: -80, left: -100 }} />
        <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={revealRef} className="section-header reveal">
            <p className="section-label">{t('about.skillsLabel')}</p>
            <h2 className="section-title">{t('about.skillsTitle')}</h2>
          </div>

          <div className="card-grid card-grid--2" style={{ maxWidth: 800, margin: '0 auto' }}>
            {skills.map((group, i) => (
              <div key={group.category} ref={revealRef} className={`reveal reveal-delay-${i + 1}`}>
                <GlassCard>
                  <div className="about-skills-card">
                    <p className="about-skills-card__cat font-mono">{isEn ? group.categoryEn : group.category}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {group.tags.map(tag => <TechTag key={tag} label={tag} />)}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Firemní info ─────────────────────────── */}
      <section className="section-padding section-divider" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="site-container">
          <div ref={revealRef} className="section-header reveal">
            <p className="section-label">{t('about.bizLabel')}</p>
            <h2 className="section-title">{t('about.bizTitle')}</h2>
            <p className="section-subtitle">{t('about.bizSubtitle')}</p>
          </div>

          <div ref={revealRef} className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
            <GlassCard gradient>
              <div className="about-biz-card">
                {businessInfo.map((info, i) => (
                  <div key={info.label} className="about-biz-row" style={i === businessInfo.length - 1 ? { borderBottom: 'none', marginBottom: 0, paddingBottom: 0 } : {}}>
                    <div className="about-biz-row__left">
                      <IconWrap style={{ width: 36, height: 36, borderRadius: 10 }}>
                        <MdiIcon icon={info.icon} size={18} color="var(--color-primary)" />
                      </IconWrap>
                      <span className="about-biz-row__label">{info.label}</span>
                    </div>
                    {info.href ? (
                      <a href={info.href} className="about-biz-row__value about-biz-row__value--link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="about-biz-row__value">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="deco-blob deco-blob--primary" style={{ width: 450, height: 450, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={revealRef} className="reveal">
            <p className="section-label">{t('about.ctaLabel')}</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>{t('about.ctaTitle')}</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>{t('about.ctaSubtitle')}</p>
            <button className="btn btn--filled btn--large btn-glow" onClick={() => navigate('/#contact')}>
              <MdiIcon icon="mdi-email-outline" size={20} />
              {t('about.ctaBtn')}
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
