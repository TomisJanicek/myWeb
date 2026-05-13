import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SocialSection from '../components/sections/SocialSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomeView() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  useEffect(() => {
    document.title = 'Tomáš Janíček — IT Freelancer | Design, Android, iOS, Web'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', isEn
      ? 'Tomáš Janíček — IT freelancer from the Czech Republic. Web & mobile app development (Android, iOS), UX/UI design. Company ID 09659153. Write to info@tomasjanicek.eu.'
      : 'Tomáš Janíček — IT freelancer z ČR. Tvorba webových a mobilních aplikací (Android, iOS), UX/UI design na zakázku. IČO 09659153. Napište na info@tomasjanicek.eu.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://tomasjanicek.eu/')
    document.documentElement.lang = i18n.language
  }, [i18n.language, isEn])

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
