import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-th-bg transition-colors duration-300 relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
