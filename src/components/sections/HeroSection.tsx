import { useNavigate, useLocation } from 'react-router-dom'
import { useTypewriter } from '../../hooks/useTypewriter'
import MdiIcon from '../ui/MdiIcon'

const codeLines = [
  'const portfolio = {',
  '  design: true,',
  '  android: true,',
  '  iOS: true,',
  '  web: true,',
  '};',
]

export default function HeroSection() {
  const navigate = useNavigate()
  const location = useLocation()
  const { typedText, cursorVisible } = useTypewriter('Tvořím digitální produkty od A do Z.')

  const scrollTo = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const el = document.querySelector(hash)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="deco-blob deco-blob--primary" style={{ width: 500, height: 500, top: -120, right: -100 }} />
      <div className="deco-blob deco-blob--secondary" style={{ width: 400, height: 400, bottom: -80, left: -60 }} />

      {/* Floating code block — desktop only */}
      <div className="hero-code" aria-hidden="true">
        {codeLines.map((line, i) => (
          <div key={i} className="hero-code__line">
            <span className="hero-code__num">{i + 1}</span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <div className="hero__content site-container">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge__dot" />
          <span className="font-mono" style={{ fontSize: '0.78rem' }}>Dostupný pro nové projekty</span>
        </div>

        {/* Title */}
        <h1 className="font-mono hero-title">
          {typedText}
          <span className="hero-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
        </h1>

        {/* Pills */}
        <div className="hero-pills">
          <span className="hero-pill hero-pill--primary">
            <MdiIcon icon="mdi-palette-outline" size={18} style={{ marginRight: 4 }} /> Design
          </span>
          <span className="hero-pill hero-pill--secondary">
            <MdiIcon icon="mdi-android" size={18} style={{ marginRight: 4 }} /> Android
          </span>
          <span className="hero-pill hero-pill--primary">
            <MdiIcon icon="mdi-apple" size={18} style={{ marginRight: 4 }} /> iOS
          </span>
          <span className="hero-pill hero-pill--secondary">
            <MdiIcon icon="mdi-web" size={18} style={{ marginRight: 4 }} /> Web Apps
          </span>
        </div>

        {/* CTA */}
        <div className="hero-cta">
          <button className="btn btn--outlined btn--large hero-btn" onClick={() => scrollTo('#projects')}>
            <MdiIcon icon="mdi-briefcase-outline" size={20} />
            Moje projekty
          </button>
          <button className="btn btn--filled btn--large btn-glow" onClick={() => scrollTo('#contact')}>
            <MdiIcon icon="mdi-email-outline" size={20} />
            Napsat mi
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" onClick={() => scrollTo('#services')} role="button" tabIndex={0} aria-label="Scrollovat dolů">
          <div className="hero-scroll__mouse">
            <div className="hero-scroll__dot" />
          </div>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>scroll</span>
        </div>
      </div>
    </section>
  )
}
