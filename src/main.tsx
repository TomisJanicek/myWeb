import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import '@mdi/font/css/materialdesignicons.min.css'

// GA se inicializuje staticky v index.html přes %VITE_GA_ID%
// Zde jen zpřístupníme ID pro route tracking v App.tsx
export const GA_ID = import.meta.env.VITE_GA_ID ?? ''

const root = document.getElementById('root')!
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
