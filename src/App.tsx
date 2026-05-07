import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomeView from './views/HomeView'
import ProjectDetailView from './views/ProjectDetailView'
import { GA_ID } from './main'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function trackPageview(path: string) {
  if (window.gtag && GA_ID && !GA_ID.includes('XXXXXXXXXX')) {
    window.gtag('config', GA_ID, { page_path: path })
  }
}

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    // Sledování stránky při každém přechodu (SPA route change)
    trackPageview(location.pathname + location.search)

    if (location.hash) {
      const id = setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 64
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 80)
      return () => clearTimeout(id)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  return null
}

export default function App() {
  return (
    <>
      <ScrollHandler />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/project/:slug" element={<ProjectDetailView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
