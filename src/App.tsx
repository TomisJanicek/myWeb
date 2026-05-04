import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomeView from './views/HomeView'
import ProjectDetailView from './views/ProjectDetailView'

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
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
