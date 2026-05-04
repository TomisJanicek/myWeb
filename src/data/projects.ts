export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  category: 'design' | 'android' | 'ios' | 'web'
  icon: string
  tags: string[]
  color: string
  features: string[]
  year: string
  role: string
  client: string
}

export const categoryLabel: Record<string, string> = {
  design: 'Design',
  android: 'Android',
  ios: 'iOS',
  web: 'Web',
}

export const projects: Project[] = [
  {
    slug: 'fittrack-pro',
    title: 'FitTrack Pro',
    description: 'Kompletní redesign fitness aplikace — od user research přes wireframy až po finální UI v Figma. Zvýšení retence o 35 %.',
    longDescription: 'FitTrack Pro byl rozsáhlý redesign fitness aplikace pro startup z oblasti health-tech. Projekt zahrnoval kompletní UX audit existujícího řešení, sérii uživatelských rozhovorů a testování. Na základě zjištění jsem navrhl nový design systém, wireframy a high-fidelity prototypy v Figma. Výsledkem bylo zvýšení denní retence o 35 % a zlepšení onboarding completion rate o 50 %.',
    category: 'design',
    icon: 'mdi-palette-swatch-variant',
    tags: ['Figma', 'UX Research', 'Design System'],
    color: '#FF6B9D',
    features: ['UX Audit & User Research', 'Wireframing & Prototyping', 'Design System', 'Usability Testing', 'Handoff pro vývojáře'],
    year: '2025',
    role: 'Lead UX/UI Designer',
    client: 'Health-tech startup',
  },
  {
    slug: 'shopease',
    title: 'ShopEase',
    description: 'E-commerce mobilní aplikace pro Android s offline podporou, push notifikacemi a integrací platební brány.',
    longDescription: 'ShopEase je nativní Android e-commerce aplikace postavená v Kotlinu s Jetpack Compose. Aplikace nabízí plně offline katalog produktů díky Room DB, push notifikace přes Firebase Cloud Messaging a integraci platební brány Stripe. Důraz byl kladen na plynulý UX, rychlý start a minimální spotřebu dat.',
    category: 'android',
    icon: 'mdi-android',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB'],
    color: '#3DDC84',
    features: ['Offline-first architektura', 'Push notifikace', 'Stripe platební brána', 'Material Design 3', 'CI/CD pipeline'],
    year: '2025',
    role: 'Android Developer',
    client: 'E-commerce klient',
  },
  {
    slug: 'medicare',
    title: 'MediCare',
    description: 'iOS aplikace pro telemedicínu s video hovory, plánováním schůzek a zabezpečeným chatem.',
    longDescription: 'MediCare je iOS telemedicínská aplikace umožňující pacientům konzultovat s lékaři přes šifrované video hovory. Aplikace obsahuje plánování schůzek s kalendářovou integrací, zabezpečený chat s end-to-end šifrováním a napojení na HealthKit pro sdílení zdravotních dat. Postaveno v SwiftUI s architekturou MVVM.',
    category: 'ios',
    icon: 'mdi-apple',
    tags: ['Swift', 'SwiftUI', 'HealthKit'],
    color: '#007AFF',
    features: ['Video hovory (WebRTC)', 'E2E šifrovaný chat', 'HealthKit integrace', 'Kalendářové plánování', 'HIPAA compliance'],
    year: '2024',
    role: 'iOS Developer',
    client: 'Telemedicínská platforma',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    description: 'Webová aplikace pro projektový management s real-time kolaborací, Kanban boardy a automatizovanými workflow.',
    longDescription: 'TaskFlow je moderní projektový management nástroj postavený na Vue.js a Firebase. Nabízí real-time kolaboraci díky Firestore, drag & drop Kanban boardy, automatizované workflow triggery a detailní reporting. Frontendová část využívá TypeScript, Pinia pro state management a Vuetify pro UI.',
    category: 'web',
    icon: 'mdi-web',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    color: '#00E5FF',
    features: ['Real-time kolaborace', 'Kanban & List view', 'Workflow automatizace', 'Pokročilý reporting', 'Role & permissions'],
    year: '2025',
    role: 'Full-stack Developer',
    client: 'SaaS produkt',
  },
  {
    slug: 'cryptovault',
    title: 'CryptoVault',
    description: 'Dashboard pro správu kryptoměnového portfolia s real-time grafy, alertami a multi-wallet podporou.',
    longDescription: 'CryptoVault je webový dashboard pro správu krypto portfolia. Využívá React s D3.js pro interaktivní grafy, WebSocket pro real-time ceny a podporuje napojení více walletů. Obsahuje systém cenových alertů, portfolio tracking a historické analýzy výkonnosti.',
    category: 'web',
    icon: 'mdi-chart-areaspline',
    tags: ['React', 'D3.js', 'WebSocket'],
    color: '#B388FF',
    features: ['Real-time cenové grafy', 'Multi-wallet podpora', 'Cenové alerty', 'Portfolio analytics', 'Export do CSV/PDF'],
    year: '2024',
    role: 'Frontend Developer',
    client: 'Fintech startup',
  },
  {
    slug: 'travelbuddy',
    title: 'TravelBuddy',
    description: 'Cross-platform cestovní aplikace s offline mapami, itinerářem a sociálními funkcemi.',
    longDescription: 'TravelBuddy je cross-platform cestovní aplikace postavená ve Flutteru. Nabízí offline mapy s Google Maps SDK, editovatelné itineráře, sdílení zážitků s přáteli a GraphQL API pro efektivní datovou komunikaci. Aplikace funguje na Androidu i iOS z jednoho codebase.',
    category: 'android',
    icon: 'mdi-map-marker-radius',
    tags: ['Flutter', 'Google Maps', 'GraphQL'],
    color: '#FFB74D',
    features: ['Offline mapy', 'Sdílené itineráře', 'Social feed', 'GraphQL backend', 'Cross-platform (Android + iOS)'],
    year: '2024',
    role: 'Flutter Developer',
    client: 'Travel startup',
  },
  {
    slug: 'flavor-lab',
    title: 'Flavor Lab',
    description: 'iOS aplikace pro foodies — AI-powered recepty na základě ingrediencí, které máte doma.',
    longDescription: 'Flavor Lab je iOS aplikace využívající CoreML pro generování receptů na základě fotografií ingrediencí. Stačí vyfotit obsah lednice a AI navrhne recepty. Data se synchronizují přes CloudKit a aplikace obsahuje sociální prvky pro sdílení receptů s komunitou.',
    category: 'ios',
    icon: 'mdi-food-apple-outline',
    tags: ['Swift', 'CoreML', 'CloudKit'],
    color: '#FF5252',
    features: ['AI rozpoznávání ingrediencí', 'Personalizované recepty', 'CloudKit synchronizace', 'Komunitní sdílení', 'Nutriční hodnoty'],
    year: '2025',
    role: 'iOS Developer',
    client: 'Vlastní projekt',
  },
  {
    slug: 'brand-identity-system',
    title: 'Brand Identity System',
    description: 'Kompletní vizuální identita pro fintech startup — logo, typografie, barevná paleta a brand guidelines.',
    longDescription: 'Kompletní branding projekt pro fintech startup zahrnující design loga, definici typografie a barevné palety, návrh ikonového systému a motion design principů. Výstupem byl detailní brand guidelines dokument a asset library pro interní i externí použití.',
    category: 'design',
    icon: 'mdi-draw',
    tags: ['Branding', 'Illustrator', 'Motion'],
    color: '#E040FB',
    features: ['Logo design', 'Typografie & barvy', 'Ikonový systém', 'Motion design principy', 'Brand guidelines dokument'],
    year: '2024',
    role: 'Brand Designer',
    client: 'Fintech startup',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
