import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GlassCard from '../components/ui/GlassCard'
import IconWrap from '../components/ui/IconWrap'
import TechTag from '../components/ui/TechTag'
import MdiIcon from '../components/ui/MdiIcon'

const skills = [
  { category: 'Mobilní', tags: ['Kotlin', 'Swift', 'Android Jetpack', 'SwiftUI', 'Flutter'] },
  { category: 'Web', tags: ['React', 'Vue.js', 'TypeScript', 'Node.js', 'Vite'] },
  { category: 'Design', tags: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'] },
  { category: 'Nástroje', tags: ['Git', 'CI/CD', 'Firebase', 'Supabase', 'Vercel'] },
]

const timeline = [
  {
    year: 'SPŠT',
    title: 'Střední průmyslová škola Třebíč',
    desc: 'Obor informačních technologií — první kontakt s programováním, sítěmi a vývojem softwaru. Základ, na kterém vše stojí.',
    icon: 'mdi-school-outline',
    color: 'var(--color-secondary)',
  },
  {
    year: 'MENDELU',
    title: 'Mendelova univerzita v Brně — Bc.',
    desc: 'Bakalářský titul v oboru IT a softwarového vývoje. Bakalářská práce zaměřená na vývoj Android mobilní aplikace v Kotlinu.',
    icon: 'mdi-certificate-outline',
    color: 'var(--color-primary)',
  },
  {
    year: '2022',
    title: 'První freelance zakázky',
    desc: 'Začal jsem přijímat první projekty — weby pro lokální firmy, redesigny a mobilní appky. IT jako vedlejšák vedle hlavního zaměstnání.',
    icon: 'mdi-rocket-launch-outline',
    color: 'var(--color-secondary)',
  },
  {
    year: '2023–dnes',
    title: 'Full-stack freelancer',
    desc: 'Rozšířil jsem portfolio o komplexnější projekty: SaaS webové appky, nativní Android/iOS aplikace a UX/UI design na zakázku. Podnikám jako OSVČ.',
    icon: 'mdi-briefcase-outline',
    color: 'var(--color-primary)',
  },
]

const businessInfo = [
  { icon: 'mdi-email-outline', label: 'E-mail', value: 'info@tomasjanicek.eu', href: 'mailto:info@tomasjanicek.eu' },
  { icon: 'mdi-office-building-outline', label: 'IČO', value: '09659153', href: null },
  { icon: 'mdi-map-marker-outline', label: 'Sídlo', value: 'Česká republika', href: null },
  { icon: 'mdi-file-document-outline', label: 'Forma podnikání', value: 'OSVČ', href: null },
]

export default function AboutView() {
  const navigate = useNavigate()
  const { revealRef } = useScrollReveal()

  useEffect(() => {
    document.title = 'O mně — Tomáš Janíček | IT Freelancer'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Tomáš Janíček — IT freelancer, Bc. z Mendelovy univerzity v Brně. Vývoj Android, iOS, webových aplikací a UX/UI design jako OSVČ. IČO 09659153.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/o-mne')
    return () => {
      document.title = 'Tomáš Janíček — IT Freelancer | Design, Android, iOS, Web'
      if (desc) desc.setAttribute('content', 'Tomáš Janíček — IT freelancer z ČR. Tvorba webových a mobilních aplikací (Android, iOS), UX/UI design na zakázku. IČO 09659153. Napište na info@tomasjanicek.eu.')
      if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/')
    }
  }, [])

  return (
    <div className="about-page">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="about-hero section-padding">
        <div className="deco-blob deco-blob--primary" style={{ width: 500, height: 500, top: -100, right: -150 }} />
        <div className="deco-blob deco-blob--secondary" style={{ width: 350, height: 350, bottom: -60, left: -80 }} />
        <div className="hero-grid" aria-hidden="true" />

        <div className="site-container about-hero__inner" style={{ position: 'relative', zIndex: 1 }}>
          <div ref={revealRef} className="reveal about-hero__text">
            <p className="section-label">// o mně</p>
            <h1 className="about-hero__title">
              Ahoj, jsem{' '}
              <span className="text-gradient">Tomáš Janíček</span>
            </h1>
            <p className="about-hero__subtitle">
              IT freelancer z ČR. Věnuji se vývoji mobilních appek, webu a UX/UI designu — 
              primárně jako vedlejší činnost vedle hlavního zaměstnání, s titulkem v oboru za zády.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
              <button className="btn btn--filled btn--large btn-glow" onClick={() => navigate('/#contact')}>
                <MdiIcon icon="mdi-email-outline" size={20} />
                Napsat mi
              </button>
              <button className="btn btn--outlined btn--large" onClick={() => navigate('/#projects')}>
                <MdiIcon icon="mdi-briefcase-outline" size={20} />
                Moje projekty
              </button>
            </div>
          </div>

          <div ref={revealRef} className="reveal reveal-delay-2 about-hero__card">
            <GlassCard>
              <div className="about-stats-card">
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">5+</span>
                  <span className="about-stat__label">let zkušeností</span>
                </div>
                <div className="about-stat__divider" />
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">20+</span>
                  <span className="about-stat__label">dokončených projektů</span>
                </div>
                <div className="about-stat__divider" />
                <div className="about-stat">
                  <span className="about-stat__num text-gradient">4</span>
                  <span className="about-stat__label">platformy</span>
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
            <p className="section-label">// kdo jsem</p>
            <h2 className="section-title">Trocha životopisu</h2>
          </div>

          <div className="about-bio-grid">
            <div ref={revealRef} className="reveal reveal-delay-1">
              <GlassCard>
                <div className="about-bio-card">
                  <div className="about-bio-card__icon">
                    <MdiIcon icon="mdi-account-circle-outline" size={36} color="var(--color-primary)" />
                  </div>
                  <h3 className="about-bio-card__title">Co dělám</h3>
                  <p className="about-bio-card__text">
                    Vystudoval jsem IT na Střední průmyslové škole v Třebíči a následně 
                    získal bakalářský titul na Mendelově univerzitě v Brně, obor softwarový vývoj. 
                    Bakalářka? Android appka v Kotlinu.
                  </p>
                  <p className="about-bio-card__text">
                    IT vývoj je moje vášeň, které se věnuji jako vedlejší činnosti vedle hlavního 
                    zaměstnání. Podnikám jako OSVČ — projekty přijímám selektivně, abych každému 
                    věnoval dostatek času a energie.
                  </p>
                </div>
              </GlassCard>
            </div>

            <div ref={revealRef} className="reveal reveal-delay-2">
              <GlassCard>
                <div className="about-bio-card">
                  <div className="about-bio-card__icon">
                    <MdiIcon icon="mdi-code-braces" size={36} color="var(--color-secondary)" />
                  </div>
                  <h3 className="about-bio-card__title">Přístup k práci</h3>
                  <p className="about-bio-card__text">
                    Zaměřuji se na kvalitu, čistý kód a funkční design. Projekty přijímám 
                    selektivně — abych měl na každý dostatek času a energie.
                  </p>
                  <p className="about-bio-card__text">
                    Komunikace je pro mě klíčová. Klienti ode mě dostávají pravidelné aktualizace 
                    a jasné odpovědi — bez zbytečného techno-blábolení.
                  </p>
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
            <p className="section-label">// cesta</p>
            <h2 className="section-title">Jak jsem se sem dostal</h2>
          </div>

          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={item.year} ref={revealRef} className={`reveal reveal-delay-${i + 1} about-timeline__item`}>
                <div className="about-timeline__left">
                  <span className="about-timeline__year font-mono">{item.year}</span>
                </div>
                <div className="about-timeline__connector">
                  <div className="about-timeline__dot" style={{ borderColor: item.color }}>
                    <MdiIcon icon={item.icon} size={16} color={item.color} />
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
            <p className="section-label">// technologie</p>
            <h2 className="section-title">S čím pracuji</h2>
          </div>

          <div className="card-grid card-grid--2" style={{ maxWidth: 800, margin: '0 auto' }}>
            {skills.map((group, i) => (
              <div key={group.category} ref={revealRef} className={`reveal reveal-delay-${i + 1}`}>
                <GlassCard>
                  <div className="about-skills-card">
                    <p className="about-skills-card__cat font-mono">{group.category}</p>
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
            <p className="section-label">// firemní údaje</p>
            <h2 className="section-title">Obchodní informace</h2>
            <p className="section-subtitle">Podnikám jako fyzická osoba (OSVČ) na základě živnostenského oprávnění.</p>
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
            <p className="section-label">// pojďme spolupracovat</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Máte projekt?</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              Ať už je to web, mobilní app nebo design — napište mi a domluvíme se.
            </p>
            <button className="btn btn--filled btn--large btn-glow" onClick={() => navigate('/#contact')}>
              <MdiIcon icon="mdi-email-outline" size={20} />
              Kontaktovat mě
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
