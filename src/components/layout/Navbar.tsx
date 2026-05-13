import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MdiIcon from '../ui/MdiIcon'

const navLinks = [
  { title: 'Služby', href: '#services' },
  { title: 'Projekty', href: '#projects' },
  { title: 'Sociální sítě', href: '#social' },
  { title: 'Kontakt', href: '#contact' },
]

const pageLinks = [
  { title: 'O mně', path: '/o-mne' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollTo = (hash: string) => {
    setMenuOpen(false)
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
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner site-container">
        <button className="navbar__logo btn btn--text" onClick={() => scrollTo('#hero')}>
          {'<TJ />'}
        </button>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Hlavní navigace">
          {navLinks.map(link => (
            <button key={link.href} className="btn btn--text btn--small nav-link" onClick={() => scrollTo(link.href)}>
              {link.title}
            </button>
          ))}
          {pageLinks.map(link => (
            <button key={link.path} className="btn btn--text btn--small nav-link" onClick={() => navigate(link.path)}>
              {link.title}
            </button>
          ))}
          <button className="btn btn--outlined btn--small ml-3" onClick={() => scrollTo('#contact')}>
            Kontaktovat
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger btn btn--text"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={menuOpen}
        >
          <MdiIcon icon={menuOpen ? 'mdi-close' : 'mdi-menu'} size={22} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(link => (
          <button key={link.href} className="btn btn--text navbar__mobile-link" onClick={() => scrollTo(link.href)}>
            {link.title}
          </button>
        ))}
        {pageLinks.map(link => (
          <button key={link.path} className="btn btn--text navbar__mobile-link" onClick={() => { setMenuOpen(false); navigate(link.path) }}>
            {link.title}
          </button>
        ))}
        <button className="btn btn--outlined btn--small navbar__mobile-cta" onClick={() => scrollTo('#contact')}>
          Kontaktovat
        </button>
      </div>
    </header>
  )
}
