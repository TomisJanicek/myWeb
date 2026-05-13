import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MdiIcon from '../ui/MdiIcon'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const navLinks = [
    { title: t('nav.services'), href: '#services' },
    { title: t('nav.projects'), href: '#projects' },
    { title: t('nav.social'), href: '#social' },
    { title: t('nav.contact'), href: '#contact' },
  ]

  const pageLinks = [
    { title: t('nav.about'), path: '/o-mne' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const toggleLang = () => {
    const next = i18n.language === 'cs' ? 'en' : 'cs'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
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
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
            <span className={i18n.language === 'cs' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>CS</span>
            <span className="lang-toggle__sep">|</span>
            <span className={i18n.language === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
          </button>
          <button className="btn btn--outlined btn--small ml-3" onClick={() => scrollTo('#contact')}>
            {t('nav.contactBtn')}
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
        <div className="navbar__mobile-lang">
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
            <span className={i18n.language === 'cs' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>CS</span>
            <span className="lang-toggle__sep">|</span>
            <span className={i18n.language === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
          </button>
        </div>
        <button className="btn btn--outlined btn--small navbar__mobile-cta" onClick={() => scrollTo('#contact')}>
          {t('nav.contactBtn')}
        </button>
      </div>
    </header>
  )
}
