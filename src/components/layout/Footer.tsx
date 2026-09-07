import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, MapPin, Mail, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact',   to: '/contact' },
]

const serviceLinks = [
  'Distributed Systems', 'Backend Development', 'React & Frontend',
  'Microservices & Kafka', 'Docker & Kubernetes', 'AI-Augmented Engineering',
]

const socialLinks = [
  { icon: Github,   href: 'https://github.com/halderpritam123',        label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pritam-halder-dev', label: 'LinkedIn' },
  { icon: null,     href: 'https://x.com/PHalderDev',              label: 'X' },
]

export function Footer() {
  return (
    <footer className="bg-th-card border-t border-th-border transition-colors duration-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-th-text font-bold text-xl mb-4">
              <Code2 className="w-5 h-5 text-th-accent" />
              <span>Pritam<span className="text-th-accent">.dev</span></span>
            </Link>
            <p className="text-th-muted text-sm leading-relaxed mb-6">
              Building scalable distributed systems and AI-augmented applications with React, Node.js, Python, Kafka, and Kubernetes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-th-border flex items-center justify-center text-th-muted hover:text-th-accent hover:border-th-accent transition-colors duration-200"
                >
                  {Icon ? (
                    <Icon className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-th-text font-semibold mb-5 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-th-muted text-sm hover:text-th-accent transition-colors duration-200 flex items-center gap-2">
                    <span className="text-th-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-th-text font-semibold mb-5 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(svc => (
                <li key={svc}>
                  <Link to="/services" className="text-th-muted text-sm hover:text-th-accent transition-colors duration-200 flex items-center gap-2">
                    <span className="text-th-accent text-xs">›</span>
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-th-text font-semibold mb-5 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-th-muted">
                <MapPin className="w-4 h-4 text-th-accent mt-0.5 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-th-muted">
                <Phone className="w-4 h-4 text-th-accent shrink-0" />
                <a href="tel:+916295696481" className="hover:text-th-accent transition-colors">+91 62956 96481</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-th-muted">
                <Mail className="w-4 h-4 text-th-accent shrink-0" />
                <a href="mailto:pritam.halder.dev@gmail.com" className="hover:text-th-accent transition-colors">pritam.halder.dev@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-th-border py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-th-muted text-sm">
            © {new Date().getFullYear()} <span className="text-th-accent">Pritam.dev</span>. All rights reserved.
          </p>
          <p className="text-th-muted text-xs">Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
