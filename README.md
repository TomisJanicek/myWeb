# Portfolio — Tomáš Janíček

Osobní portfolio a prezentační web IT freelancera. Jednostránková responzivní aplikace postavená na Reactu.

## Stack

| Vrstva | Technologie |
|--------|-------------|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Routing | react-router-dom v7 |
| Ikony | @mdi/font (Material Design Icons — CSS web font) |
| Analytika | react-ga4 (Google Analytics 4) |
| Styly | Čisté CSS (global.css) — žádná UI knihovna |

## Spuštění

```bash
# Instalace závislostí
npm install

# Dev server (http://localhost:5173)
npm run dev

# Produkční build
npm run build

# Náhled produkčního buildu
npm run preview
```

## Proměnné prostředí

Zkopírujte `.env.example` (nebo vytvořte `.env`):

```env
VITE_GA_ID=G-XXXXXXXXXX
```

## Struktura projektu

```
src/
├── main.tsx                    # Vstupní bod, BrowserRouter, ReactGA init
├── App.tsx                     # Shell: Navbar + Routes + Footer + ScrollHandler
├── vite-env.d.ts               # Typy pro import.meta.env
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Glassmorphism navbar, scroll stav, mobilní menu
│   │   └── Footer.tsx          # Grid footer se sociálními ikonami
│   ├── sections/
│   │   ├── HeroSection.tsx     # Typewriter efekt, pills, CTA, scroll indikátor
│   │   ├── ServicesSection.tsx # 3 glass karty služeb
│   │   ├── ProjectsSection.tsx # Filter tlačítka + grid projektů
│   │   ├── SocialSection.tsx   # 4 social karty
│   │   └── ContactSection.tsx  # Sidebar s info + kontaktní formulář
│   └── ui/
│       ├── MdiIcon.tsx         # Wrapper pro MDI CSS web font ikony
│       ├── Button.tsx          # filled | outlined | text varianty
│       ├── GlassCard.tsx       # glass-card nebo gradient-border-card
│       ├── IconWrap.tsx        # Kruhový obal pro ikonu
│       ├── TechTag.tsx         # Technologický štítek (font-mono pill)
│       ├── FormField.tsx       # input | textarea | select s validací
│       └── Toast.tsx           # Notifikace po odeslání formuláře
│
├── hooks/
│   ├── useTypewriter.ts        # Postupné psaní textu s blikajícím kurzorem
│   └── useScrollReveal.ts      # IntersectionObserver → třída .revealed
│
├── data/
│   └── projects.ts             # Pole projektů s typy (slug, category, tags…)
│
├── views/
│   ├── HomeView.tsx            # Kompozice všech 5 sekcí
│   └── ProjectDetailView.tsx   # Detail projektu (/project/:slug)
│
└── styles/
    └── global.css              # Design tokeny, utility třídy, responzivita
```

## Design systém

Barvy a tokeny jsou definovány jako CSS proměnné v `global.css`:

```css
--color-primary:   #00E5FF  /* cyan */
--color-secondary: #B388FF  /* violet */
--color-bg:        #0B0F19  /* dark navy */
--color-surface:   #131824
--font-body:       'Inter', sans-serif
--font-mono:       'JetBrains Mono', monospace
```

Globální utility třídy: `.glass`, `.glass-card`, `.gradient-border-card`, `.reveal`, `.btn-glow`, `.tech-tag`, `.icon-wrap`, `.card-grid`, `.site-container`.

## Responzivita

| Breakpoint | Layout |
|-----------|--------|
| `≤375px` | 1 sloupec, redukované velikosti |
| `≤599px` | 1 sloupec karty, stacked sekce |
| `600–959px` | 2 sloupce karty, tablet layout |
| `≥960px` | Desktop layout, 3 sloupce |

## Přidání projektu

Editujte `src/data/projects.ts` — přidejte nový objekt do pole `projects`:

```typescript
{
  slug: 'muj-projekt',
  title: 'Název projektu',
  description: 'Krátký popis (zobrazí se na kartě)',
  longDescription: 'Dlouhý popis pro detail stránku',
  category: 'web',           // 'web' | 'android' | 'ios' | 'design'
  icon: 'mdi-web',           // MDI ikona
  tags: ['React', 'Node.js'],
  color: '#00E5FF',
  features: ['Funkce 1', 'Funkce 2'],
  year: '2025',
  role: 'Full-stack Developer',
  client: 'Název klienta',
}
```
