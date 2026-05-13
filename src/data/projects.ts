export interface Project {
  slug: string
  title: string
  category: 'design' | 'android' | 'ios' | 'web'
  icon: string
  tags: string[]
  color: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'fittrack-pro',
    title: 'FitTrack Pro',
    category: 'design',
    icon: 'mdi-palette-swatch-variant',
    tags: ['Figma', 'UX Research', 'Design System'],
    color: '#FF6B9D',
    year: '2025',
  },
  {
    slug: 'shopease',
    title: 'ShopEase',
    category: 'android',
    icon: 'mdi-android',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB'],
    color: '#3DDC84',
    year: '2025',
  },
  {
    slug: 'medicare',
    title: 'MediCare',
    category: 'ios',
    icon: 'mdi-apple',
    tags: ['Swift', 'SwiftUI', 'HealthKit'],
    color: '#007AFF',
    year: '2024',
  },
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    category: 'web',
    icon: 'mdi-web',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    color: '#00E5FF',
    year: '2025',
  },
  {
    slug: 'cryptovault',
    title: 'CryptoVault',
    category: 'web',
    icon: 'mdi-chart-areaspline',
    tags: ['React', 'D3.js', 'WebSocket'],
    color: '#B388FF',
    year: '2024',
  },
  {
    slug: 'travelbuddy',
    title: 'TravelBuddy',
    category: 'android',
    icon: 'mdi-map-marker-radius',
    tags: ['Flutter', 'Google Maps', 'GraphQL'],
    color: '#FFB74D',
    year: '2024',
  },
  {
    slug: 'flavor-lab',
    title: 'Flavor Lab',
    category: 'ios',
    icon: 'mdi-food-apple-outline',
    tags: ['Swift', 'CoreML', 'CloudKit'],
    color: '#FF5252',
    year: '2025',
  },
  {
    slug: 'brand-identity-system',
    title: 'Brand Identity System',
    category: 'design',
    icon: 'mdi-draw',
    tags: ['Branding', 'Illustrator', 'Motion'],
    color: '#E040FB',
    year: '2024',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
