import { useEffect } from 'react'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SocialSection from '../components/sections/SocialSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomeView() {
  useEffect(() => {
    document.title = 'Tomáš Janíček — IT Freelancer | Design, Android, iOS, Web'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Tomáš Janíček — IT freelancer z ČR. Tvorba webových a mobilních aplikací (Android, iOS), UX/UI design na zakázku. IČO 09659153. Napište na info@tomasjanicek.eu.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/')
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SocialSection />
      <ContactSection />
    </>
  )
}
