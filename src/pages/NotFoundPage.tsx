import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-th-bg flex items-center justify-center transition-colors duration-300">
      <div className="text-center px-4">
        <p className="text-8xl md:text-[160px] font-bold text-th-accent leading-none mb-4 select-none">404</p>
        <h1 className="text-2xl md:text-4xl font-bold text-th-text mb-4">Page Not Found</h1>
        <p className="text-th-muted text-lg mb-8 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-th-accent text-darkBg font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200">
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  )
}
