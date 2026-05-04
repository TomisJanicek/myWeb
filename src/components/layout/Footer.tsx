import { useNavigate, useLocation } from 'react-router-dom'
import MdiIcon from '../ui/MdiIcon'

const navLinks = [
  { title: 'Služby', href: '#services' },
  { title: 'Projekty', href: '#projects' },
  { title: 'Sociální sítě', href: '#social' },
  { title: 'Kontakt', href: '#contact' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

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
    <footer className="app-footer">
      <div className="footer-divider" />
      <div className="site-container footer-inner">
        <div className="footer-grid">
          <div className="footer-grid__brand">
            <span className="font-mono footer-logo">{'<TJ />'}</span>
            <p className="footer-tagline">Design &amp; Development</p>
          </div>

          <nav className="footer-grid__nav" aria-label="Patička navigace">
            {navLinks.map(link => (
              <button key={link.href} className="btn btn--text footer-nav-link" onClick={() => scrollTo(link.href)}>
                {link.title}
              </button>
            ))}
          </nav>

          <div className="footer-grid__social">
            <a href="https://linkedin.com/in/tomasjanicek" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <MdiIcon icon="mdi-linkedin" size={20} />
            </a>
            <a href="https://github.com/tomasjanicek" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <MdiIcon icon="mdi-github" size={20} />
            </a>
            <button className="footer-social-btn" aria-label="Kontakt" onClick={() => scrollTo('#contact')}>
              <MdiIcon icon="mdi-email-outline" size={20} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Tomáš Janíček. Všechna práva vyhrazena.
          </p>
          <p className="footer-version">v{__APP_VERSION__}</p>
        </div>
      </div>
    </footer>
  )
}
