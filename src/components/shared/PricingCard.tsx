import { Check } from 'lucide-react'

interface PricingCardProps {
  tier: string
  price: string
  features: string[]
  recommended: boolean
}

export function PricingCard({ tier, price, features, recommended }: PricingCardProps) {
  return (
    <div className={`relative bg-th-card rounded-lg p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${recommended ? 'border-2 border-th-accent' : 'border border-th-border'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-th-accent text-darkBg text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Popular</span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-th-text text-xl font-bold mb-2">{tier}</h3>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-th-accent">{price}</span>
          <span className="text-th-muted text-sm mb-1">/ project</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-th-accent mt-0.5 shrink-0" />
            <span className="text-th-muted text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${recommended ? 'bg-th-accent text-darkBg hover:opacity-90' : 'border border-th-accent text-th-accent hover:bg-th-accent hover:text-darkBg'}`}>
        Get Started
      </button>
    </div>
  )
}
