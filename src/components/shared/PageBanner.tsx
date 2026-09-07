interface PageBannerProps {
  title: string
  breadcrumb: string
}

export function PageBanner({ title, breadcrumb }: PageBannerProps) {
  const parts = breadcrumb.split('/')
  const last = parts[parts.length - 1].trim()
  const rest = parts.slice(0, -1).map(p => p.trim()).join(' / ')

  return (
    <section className="bg-th-card py-20 border-b border-th-border transition-colors duration-300">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-th-text mb-4">{title}</h1>
        <p className="text-th-muted text-sm tracking-wide">
          {rest && <span>{rest} / </span>}
          <span className="text-th-accent">{last}</span>
        </p>
      </div>
    </section>
  )
}
