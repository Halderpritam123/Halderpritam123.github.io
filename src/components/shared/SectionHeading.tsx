interface SectionHeadingProps {
  subtitle: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ subtitle, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <p className="text-th-accent uppercase tracking-widest text-sm font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-th-text mb-4">{title}</h2>
      <div className={`h-[3px] w-[60px] bg-th-accent rounded-full ${centered ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`text-th-muted mt-4 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  )
}
