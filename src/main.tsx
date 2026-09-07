import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

// Apply saved theme immediately to avoid flash
const saved = (localStorage.getItem('theme') === 'light' ? 'light' : 'dark') as 'light' | 'dark'
document.documentElement.classList.add(saved)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
