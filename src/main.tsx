import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
import App from './App'
import './styles/global.css'
import '@mdi/font/css/materialdesignicons.min.css'

const gaId = import.meta.env.VITE_GA_ID as string | undefined
if (gaId && gaId !== 'G-XXXXXXXXXX') {
  ReactGA.initialize(gaId)
}

const root = document.getElementById('root')!
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
