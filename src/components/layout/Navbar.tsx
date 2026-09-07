import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact',   to: '/contact' },
]

export function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-th-bg border-b border-th-border h-16 transition-colors duration-300">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-th-text font-bold text-xl hover:text-th-accent transition-colors"
        >
          <Code2 className="w-6 h-6 text-th-accent" />
          <span>Pritam<span className="text-th-accent">.dev</span></span>
        </Link>

        {/* Desktop nav + theme toggle */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 hover:text-th-accent ${
                  isActive(link.to) ? 'text-th-accent' : 'text-th-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:text-th-accent hover:border-th-accent transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:text-th-accent hover:border-th-accent transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-th-text hover:text-th-accent transition-colors"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-th-bg border-b border-th-border ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-th-accent ${
                isActive(link.to) ? 'text-th-accent' : 'text-th-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
